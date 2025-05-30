"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

import { useEffect, useRef } from "react";
import { CheckIcon, DeleteIcon, DownloadIcon, Edit2Icon, MapPinHouseIcon } from "lucide-react";

export default function Index() {



  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapRefInstance = useRef<L.Map | null>(null);
  const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());
  const drawControlRef = useRef<L.Control.Draw | null>(null);



  // 📍 راه‌اندازی نقشه و ابزار ترسیم
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

      // ✅ رویدادها برای اضافه/ویرایش/حذف polygon
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

  // 🧠 تابع به‌روزرسانی state و log گرفتن
  const updatePolygonState = () => {
    const polygons: L.LatLng[][] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    drawnItemsRef.current.eachLayer((layer: any) => {
      if (layer instanceof L.Polygon && layer.getLatLngs) {
        polygons.push(layer.getLatLngs()[0]); // فقط لایه بیرونی
      }
    });


    console.log("✅ Polygons updated:", polygons);
  };

  const startDrawing = () => {
    if (!mapRefInstance.current || !drawControlRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const polygonHandler = (drawControlRef.current as any)._toolbars.draw._modes
      .polygon.handler;
    polygonHandler.enable();
  };

  const deleteAll = () => {
    console.log('Before clear:', drawnItemsRef.current.getLayers().length);
    drawnItemsRef.current.clearLayers();
    console.log('After clear:', drawnItemsRef.current.getLayers().length);

  };

  const enableEdit = () => {
    if (!drawControlRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (drawControlRef.current as any)._toolbars.edit._modes.edit.handler.enable();
  };

  const disableEditAndLog = () => {
    if (!drawControlRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (drawControlRef.current as any)._toolbars.edit._modes.edit.handler.disable();
    updatePolygonState();
  };

  const downloadKml = () => {
    if (!drawnItemsRef.current) return;

    const geojson = drawnItemsRef.current.toGeoJSON();
    let kml = `<?xml version="1.0" encoding="UTF-8"?>
        <kml xmlns="http://www.opengis.net/kml/2.2">
          <Document>
        `;
    if ('features' in geojson) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    kml += `</Document></kml>`;
    const blob = new Blob([kml], { type: "application/vnd.google-earth.kml+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "polygons.kml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section style={{ height: "100vh", width: "100%", position: "relative" }}>
      <section ref={mapRef} style={{ height: "100%", width: "100%" }} />

      <section className="fixed bottom-[50px] z-[1000] left-0 flex overflow-x-auto mt-1 w-full">
        <section className="w-[200%] flex gap-1">
          <button className="bg-blue-500 w-[150px] flex items-center gap-2 p-2 rounded-md text-white" onClick={startDrawing}>
            <MapPinHouseIcon />
            <span className="text-xs">شروع رسم polygon</span>
          </button>
          <button onClick={deleteAll} className="bg-red-500 w-[110px] flex gap-2 p-2 items-center rounded-md text-white">
            <DeleteIcon />
            <span className="text-xs">پاک کردن</span>
          </button>
          <button onClick={enableEdit} className="bg-yellow-500 w-[90px] flex gap-2 p-2 items-center rounded-md text-white">
            <Edit2Icon className="w-[18px]" />
            <span className="text-xs">ویرایش</span>
          </button>
          <button onClick={disableEditAndLog} className="bg-emerald-500 w-[120px] flex gap-2 p-2 items-center rounded-md text-white">
            <CheckIcon className="w-[18px]" />
            <span className="text-xs">پایان ویرایش</span>
          </button>
          <button onClick={downloadKml} className="bg-purple-500 w-[120px] flex gap-2 p-2 items-center rounded-md text-white">
            <DownloadIcon className="w-[18px]" />
            <span className="text-xs">دانلود Kml</span>
          </button>
        </section>
      </section>
    </section>
  );
}
