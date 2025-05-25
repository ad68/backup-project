"use client";

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';

const MapView: React.FC = () => {
    const [polyGon, setPolyGon] = useState([])
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapRefInstance = useRef<L.Map | null>(null);
    const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());
    const drawControlRef = useRef<L.Control.Draw | null>(null);


    useEffect(() => {
        if (mapRef.current && !mapRefInstance.current) {
            const map = L.map(mapRef.current).setView([35.70218, 51.3386], 11);
            mapRefInstance.current = map;

            const baseLayer = L.tileLayer('https://mt{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
                maxZoom: 20,
                subdomains: '0123',
            });
            baseLayer.addTo(map);

            map.addLayer(drawnItemsRef.current);

            const drawControl = new L.Control.Draw({
                draw: {
                    polygon: {
                        shapeOptions: {
                            color: 'red',
                            weight: 2,
                            fillColor: 'orange',
                            fillOpacity: 0.5
                        }
                    },
                    polyline: false,
                    rectangle: false,
                    circle: false,
                    marker: false,
                    circlemarker: false
                },
                edit: {
                    featureGroup: drawnItemsRef.current
                }
            });
            drawControlRef.current = drawControl;
            map.addControl(drawControl);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            map.on(L.Draw.Event.CREATED, function (event: any) {
                const layer = event.layer;
                drawnItemsRef.current.addLayer(layer);
                console.log('Polygon coordinates:', layer.getLatLngs());
                setPolyGon(layer.getLatLngs())
            });
        }
    }, []);
    useEffect(() => {
        console.log("polyGonnnnnnnnnnn", polyGon)
    }, [polyGon])

    const startDrawing = () => {
        if (!mapRefInstance.current || !drawControlRef.current) return;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const polygonHandler = (drawControlRef.current as any)._toolbars.draw._modes.polygon.handler;
        polygonHandler.enable();
    };

    const deleteAll = () => {
        drawnItemsRef.current.clearLayers();
        setPolyGon([])
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
                console.log('Updated coordinates:', layer.getLatLngs());
                setPolyGon(layer.getLatLngs())
            }
        });
    };

    return (
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
            <div ref={mapRef} style={{ height: '100%', width: '100%' }} />

            <div style={{
                position: 'absolute',
                top: 10,
                right: 10,
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <button onClick={startDrawing}>شروع رسم Polygon</button>
                <button onClick={deleteAll}>پاک کردن همه</button>
                <button onClick={enableEdit}>ویرایش</button>
                <button onClick={disableEditAndLog}>خروج از ویرایش + گرفتن مختصات</button>
            </div>
        </div>
    );
};

export default MapView;
