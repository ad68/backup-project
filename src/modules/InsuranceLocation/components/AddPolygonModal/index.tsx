import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import WKT from "terraformer-wkt-parser";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, DeleteIcon, Edit2Icon, MapPinHouseIcon, Undo2 } from "lucide-react";
import type { AddPolyGonProp } from "./addPolygon.typs";
import CustomButton from "@/components/kit/CustomButton";
import { WKTToPolygon } from "@/utils/global";
export default function Index({ setIsAddPolygonModalOpen, setGeoInWkt, defaultPolygon, farmLat, farmLng }: AddPolyGonProp) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapRefInstance = useRef<L.Map | null>(null);
  const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());
  const drawControlRef = useRef<L.Control.Draw | null>(null);
  const [polygonsState, setPolygonsState] = useState<L.LatLng[][]>([]);
  const [hasPolygon, setHasPolygon] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    /*  const def = defaultPolygon */
    if (mapRef.current && !mapRefInstance.current) {
      const map = L.map(mapRef.current, {
        zoomControl: false,
        attributionControl: false,
      }).setView(farmLat && farmLng ? [Number(farmLat), Number(farmLng)] : [35.70218, 51.3386], 14);
      mapRefInstance.current = map;
      const baseLayer = L.tileLayer(
        "https://mt{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: "0123",
        }
      );
      baseLayer.addTo(map);
      map.addLayer(drawnItemsRef.current);
      const drawControl = new L.Control.Draw({
        draw: {
          polygon: {
            shapeOptions: {
              color: "red",
              weight: 2,
              fillColor: "orange",
              fillOpacity: 0.5,
            },
          },
          polyline: false,
          rectangle: false,
          circle: false,
          marker: false,
          circlemarker: false,
        },
        edit: {
          featureGroup: drawnItemsRef.current,
        },
      });

      drawControlRef.current = drawControl;
      map.addControl(drawControl);

      // ✅ رویدادها
      map.on(L.Draw.Event.CREATED, function (event: any) {
        const layer = event.layer;
        drawnItemsRef.current.addLayer(layer);
        updatePolygonState();
      });

      map.on(L.Draw.Event.EDITED, function () {
        updatePolygonState();
      });

      map.on(L.Draw.Event.DELETED, function () {
        updatePolygonState();
      });


      /*    const defaultPolygonCoords: L.LatLngExpression[] = [
           [35.701, 51.335],
           [35.703, 51.336],
           [35.702, 51.339],
           [35.701, 51.335],
         ]; */

      if (defaultPolygon) {
        /* const defaultPolygonCoords2: L.LatLngExpression[] = WKTToPolygon("POLYGON ((51.335 35.701, 51.336 35.703, 51.339 35.702, 51.335 35.701))"); */
        const myDefaultPolygon = L.polygon(WKTToPolygon(defaultPolygon), {
          color: "red",
          weight: 2,
          fillColor: "orange",
          fillOpacity: 0.5,
        });
        drawnItemsRef.current.addLayer(myDefaultPolygon);
        updatePolygonState();
        console.log("defaultPolygon", defaultPolygon)
        console.log("defaultPolygon", WKTToPolygon(defaultPolygon))
      }
      showUserLocation()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePolygonState = () => {
    const polygons: L.LatLng[][] = [];
    drawnItemsRef.current.eachLayer((layer: any) => {
      if (layer instanceof L.Polygon && layer.getLatLngs) {
        const latlngs = layer.getLatLngs();
        if (Array.isArray(latlngs) && Array.isArray(latlngs[0])) {
          polygons.push(latlngs[0] as L.LatLng[]);
        }
      }
    });

    setPolygonsState(polygons);
    setHasPolygon(polygons.length > 0);
    logPolygonsAsWkt();
  };

  const logPolygonsAsWkt = () => {
    if (!drawnItemsRef.current) return;
    const geojson = drawnItemsRef.current.toGeoJSON();
    if ("features" in geojson) {
      geojson.features.forEach((feature: any) => {
        if (feature.geometry.type === "Polygon") {
          const wkt = WKT.convert(feature.geometry);
          console.log("✅ Polygon as WKT:", wkt);
          setGeoInWkt(wkt);
        }
      });
    }
  };

  const startDrawing = () => {
    if (!mapRefInstance.current || !drawControlRef.current) return;
    const polygonHandler = (drawControlRef.current as any)._toolbars.draw._modes.polygon.handler;
    polygonHandler.enable();
  };

  const deleteAll = () => {
    drawnItemsRef.current.clearLayers();
    updatePolygonState();
    setGeoInWkt("")
    setIsEditing(false);
  };

  const enableEdit = () => {
    if (!drawControlRef.current) return;
    (drawControlRef.current as any)._toolbars.edit._modes.edit.handler.enable();
    setIsEditing(true);
  };

  const disableEditAndLog = () => {
    if (!drawControlRef.current) return;
    (drawControlRef.current as any)._toolbars.edit._modes.edit.handler.disable();
    updatePolygonState();
    setIsEditing(false);
  };
  const showUserLocation = () => {
    if (!navigator.geolocation) {
      alert("موقعیت مکانی در مرورگر شما پشتیبانی نمی‌شود.");
      return;
    }
    const blueDotIcon = L.icon({
      iconUrl: "/images/map/location-marker.svg",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const userLatLng: L.LatLngExpression = [latitude, longitude];

        if (mapRefInstance.current) {
          // اضافه کردن مارکر روی نقشه
          L.marker(userLatLng, { icon: blueDotIcon })
            .addTo(mapRefInstance.current)
            .bindPopup("موقعیت شما")
            .openPopup();

          // حرکت دادن مرکز نقشه
          /* mapRefInstance.current.setView(userLatLng, 15); */
        }
      },
      (error) => {
        alert("دسترسی به موقعیت مکانی امکان‌پذیر نیست.");
        console.error("Geo error:", error);
      }
    );
  };
  useEffect(() => {
    /* if (polygonsState.length > 0) {
      generateAndUploadKml();
    } */

  }, [polygonsState]);



  return (
    <section style={{ height: "95%", width: "100%", position: "relative" }}>
      <section className="bg-white h-[8%]  overflow-x-auto w-full z-[1000] flex">
        <section className="w-[200%] flex shadow-2xl flex-row items-center gap-1 px-2">
          {!hasPolygon && (
            <button
              className="bg-blue-500 flex items-center gap-2 rounded-full py-1 px-3 text-white"
              onClick={startDrawing}
            >
              <MapPinHouseIcon />
              <span className="text-xs">شروع</span>
            </button>
          )}

          {hasPolygon && (
            <>
              <button
                onClick={deleteAll}
                className="bg-red-500 w-[110px] flex gap-2 py-1 px-3 items-center rounded-full text-white"
              >
                <DeleteIcon />
                <span className="text-xs">پاک کردن</span>
              </button>

              {!isEditing && (
                <button
                  onClick={enableEdit}
                  className="bg-yellow-500 w-[90px] flex gap-2 py-1 px-3 items-center rounded-full text-white"
                >
                  <Edit2Icon className="w-[18px]" />
                  <span className="text-xs">ویرایش</span>
                </button>
              )}

              {isEditing && (
                <button
                  onClick={disableEditAndLog}
                  className="bg-emerald-500 w-[120px] flex gap-2 py-1 px-3 items-center rounded-full text-white"
                >
                  <CheckIcon className="w-[18px]" />
                  <span className="text-xs">پایان ویرایش</span>
                </button>
              )}
            </>
          )}
        </section>
      </section>

      <section ref={mapRef} className="h-[87%] w-full gap-1" />

      <section className="mt-2 h-[8%] gap-1 flex justify-end pl-2">
        <CustomButton variant="outlined" className="rounded-full" onClick={() => { setIsAddPolygonModalOpen(false); deleteAll() }}>
          <Undo2 className="w-[20px]" />
          <span className="text-xs">بازگشت</span>
        </CustomButton>
        {(hasPolygon && !isEditing) && <CustomButton className="rounded-full" onClick={() => setIsAddPolygonModalOpen(false)}>
          <CheckIcon className="w-[20px]" />
          <span className="text-xs">تایید</span>
        </CustomButton>}

      </section>
    </section>
  );
}
