/* eslint-disable @typescript-eslint/no-explicit-any */
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, DeleteIcon, Edit2Icon, MapPinHouseIcon } from "lucide-react";

export default function Index() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapRefInstance = useRef<L.Map | null>(null);
  const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());
  const drawControlRef = useRef<L.Control.Draw | null>(null);

  const [polygonsState, setPolygonsState] = useState<L.LatLng[][]>([]);
  const [hasPolygon, setHasPolygon] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (mapRef.current && !mapRefInstance.current) {
      const map = L.map(mapRef.current, {
        zoomControl: false,
        attributionControl: false,
      }).setView([35.70218, 51.3386], 11);

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
    }
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
  };

  const startDrawing = () => {
    if (!mapRefInstance.current || !drawControlRef.current) return;
    const polygonHandler = (drawControlRef.current as any)._toolbars.draw._modes.polygon.handler;
    polygonHandler.enable();
  };

  const deleteAll = () => {
    drawnItemsRef.current.clearLayers();
    updatePolygonState();
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
  useEffect(() => {
    console.log(polygonsState)
    /*  if (polygonsState.length > 0) {
       generateAndUploadKml()
     } */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [polygonsState])
  /*   const generateAndUploadKml = () => {
      if (!drawnItemsRef.current) return;
  
      const geojson = drawnItemsRef.current.toGeoJSON();
  
      let kml = `<?xml version="1.0" encoding="UTF-8"?>
        <kml xmlns="http://www.opengis.net/kml/2.2">
          <Document>
      `;
  
      if ("features" in geojson) {
        geojson.features.forEach((feature: any) => {
          if (feature.geometry.type === "Polygon") {
            const coordinates = feature.geometry.coordinates[0]
              .map(([lng, lat]: [number, number]) => `${lng},${lat},0`)
              .join(" ");
  
            kml += `
              <Placemark>
                <Polygon>
                  <outerBoundaryIs>
                    <LinearRing>
                      <coordinates>${coordinates}</coordinates>
                    </LinearRing>
                  </outerBoundaryIs>
                </Polygon>
              </Placemark>
            `;
          }
        });
      }
  
      kml += `
        </Document>
      </kml>`;
  
      uploadKmlToApi(kml);
    }; */
  /*   const uploadKmlToApi = async (kmlText: string) => {
      const blob = new Blob([kmlText], {
        type: "application/vnd.google-earth.kml+xml",
      });
  
      const formData = new FormData();
      formData.append("file", blob, "polygons.kml");
  
      try {
        const res = await fetch("/api/upload-kml", {
          method: "POST",
          body: formData,
        });
  
        if (!res.ok) throw new Error("Upload failed");
        const data = await res.json();
        console.log("✅ Upload success:", data);
      } catch (err) {
        console.error("❌ Upload error:", err);
      }
    }; */

  return (
    <section style={{ height: "100vh", width: "100%", position: "relative" }}>
      <section ref={mapRef} style={{ height: "100%", width: "100%" }} />

      <section className="fixed bottom-[50px] z-[1000] left-0 flex  mt-1 w-full">
        <section className="w-[200%] flex gap-1">
          <button
            className="bg-blue-500 w-[150px] flex items-center gap-2 p-2 rounded-md text-white"
            onClick={startDrawing}
          >
            <MapPinHouseIcon />
            <span className="text-xs">شروع رسم polygon</span>
          </button>

          {hasPolygon && (
            <>
              <button
                onClick={deleteAll}
                className="bg-red-500 w-[110px] flex gap-2 p-2 items-center rounded-md text-white"
              >
                <DeleteIcon />
                <span className="text-xs">پاک کردن</span>
              </button>

              {!isEditing && (
                <button
                  onClick={enableEdit}
                  className="bg-yellow-500 w-[90px] flex gap-2 p-2 items-center rounded-md text-white"
                >
                  <Edit2Icon className="w-[18px]" />
                  <span className="text-xs">ویرایش</span>
                </button>
              )}

              {isEditing && (
                <button
                  onClick={disableEditAndLog}
                  className="bg-emerald-500 w-[120px] flex gap-2 p-2 items-center rounded-md text-white"
                >
                  <CheckIcon className="w-[18px]" />
                  <span className="text-xs">پایان ویرایش</span>
                </button>
              )}
            </>
          )}
        </section>
      </section>
    </section>
  );
}
