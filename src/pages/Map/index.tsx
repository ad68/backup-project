import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import moment from "moment-jalaali";

import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function Index() {
    const [polyGon, setPolyGon] = useState<L.LatLng[][]>([]);
    const [currentTime, setCurrentTime] = useState(moment().format("jYYYY/jMM/jDD HH:mm:ss"));

    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapRefInstance = useRef<L.Map | null>(null);
    const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());
    const drawControlRef = useRef<L.Control.Draw | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format("jYYYY/jMM/jDD HH:mm:ss"));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            map.on(L.Draw.Event.CREATED, function (event: any) {
                const layer = event.layer;
                drawnItemsRef.current.addLayer(layer);
                setPolyGon(layer.getLatLngs());
            });
        }
    }, []);

    const startDrawing = () => {
        if (!mapRefInstance.current || !drawControlRef.current) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const polygonHandler = (drawControlRef.current as any)._toolbars.draw._modes
            .polygon.handler;
        polygonHandler.enable();
    };

    const deleteAll = () => {
        drawnItemsRef.current.clearLayers();
        setPolyGon([]);
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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        drawnItemsRef.current.eachLayer((layer: any) => {
            if (layer.getLatLngs) {
                setPolyGon(layer.getLatLngs());
            }
        });
    };

    const drawPolygonOnCanvas = (canvas: HTMLCanvasElement, polygonCoords: L.LatLng[][]) => {
        if (!mapRefInstance.current) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 165, 0, 0.5)";
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        polygonCoords.forEach((latlngs) => {
            ctx.beginPath();
            latlngs.forEach((latlng, index) => {
                const point = mapRefInstance.current!.latLngToContainerPoint(latlng);
                if (index === 0) ctx.moveTo(point.x, point.y);
                else ctx.lineTo(point.x, point.y);
            });
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        });
    };

    const captureMapWithPolygon = async () => {
        if (!mapRef.current) return;

        const scale = window.devicePixelRatio || 1;

        const canvasBase = await html2canvas(mapRef.current, {
            useCORS: true,
            allowTaint: false,
            logging: false,
            scale,
            windowWidth: document.documentElement.clientWidth,
            windowHeight: document.documentElement.clientHeight,
        });

        const canvasOverlay = document.createElement("canvas");
        canvasOverlay.width = canvasBase.width;
        canvasOverlay.height = canvasBase.height;

        drawPolygonOnCanvas(canvasOverlay, polyGon);

        const ctx = canvasBase.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(canvasOverlay, 0, 0);

        const imgData = canvasBase.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "map-with-polygon.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{ height: "100vh", width: "100%", position: "relative" }}>
            <div ref={mapRef} style={{ height: "100%", width: "100%" }} >
                <div
                    style={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        color: "red",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontFamily: "YekanBakh",
                        fontSize: "14px",
                        zIndex: 1000,
                    }}
                >
                    {currentTime}
                </div>

            </div>


            <div
                style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 1000,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <button onClick={startDrawing}>شروع رسم Polygon</button>
                <button onClick={deleteAll}>پاک کردن همه</button>
                <button onClick={enableEdit}>ویرایش</button>
                <button onClick={disableEditAndLog}>خروج از ویرایش + گرفتن مختصات</button>
                <button onClick={captureMapWithPolygon}>اسکرین‌شات نقشه با Polygon</button>
            </div>



        </div>
    );
}
