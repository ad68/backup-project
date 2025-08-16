import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

import { useEffect, useRef } from "react";

import type { AddPolyGonProp } from "./addPolygon.types";

import { WKTToPolygon } from "@/utils/global";

import { getTile, saveTile } from '@/utils/tileCache';

const CachedTileLayer = L.TileLayer.extend({
    createTile: function (coords: any, done: any) {
        const tile = document.createElement('img');
        const z = coords.z;
        const x = coords.x;
        const y = coords.y;
        const key = `${z}/${x}/${y}`;

        tile.alt = '';
        tile.setAttribute('role', 'presentation');

        tile.width = this.getTileSize().x;
        tile.height = this.getTileSize().y;

        tile.onload = () => done(null, tile);
        tile.onerror = () => done(new Error('Tile load error'), tile);

        getTile(key)
            .then(blob => {
                if (blob) {
                    tile.src = URL.createObjectURL(blob);
                } else {
                    const url = this.getTileUrl(coords);
                    fetch(url)
                        .then(res => {
                            if (!res.ok) throw new Error('Failed to fetch tile');
                            return res.blob();
                        })
                        .then(blob => {
                            saveTile(key, blob).catch(() =>
                                console.warn('Failed to save tile in cache')
                            );
                            tile.src = URL.createObjectURL(blob);
                        })
                        .catch(() => {
                            tile.src = this.getTileUrl(coords);
                        });
                }
            })
            .catch(() => {
                tile.src = this.getTileUrl(coords);
            });

        return tile;
    },
});
export default function Index({
    defaultPolygon,
    farmLat,
    farmLng,
}: AddPolyGonProp) {







    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapRefInstance = useRef<L.Map | null>(null);
    const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());
    const drawControlRef = useRef<L.Control.Draw | null>(null);




    useEffect(() => {
        if (mapRef.current && !mapRefInstance.current) {
            const map = L.map(mapRef.current, {
                zoomControl: false,
                attributionControl: false,
            }).setView(
                defaultPolygon ? [WKTToPolygon(defaultPolygon)[0][0], WKTToPolygon(defaultPolygon)[0][1]] : [Number(farmLat), Number(farmLng)],
                16
            );
            mapRefInstance.current = map;
            const baseLayer = new (CachedTileLayer as any)("https://map.optimoai.ir/wmts/gm_layer/gm_grid/{z}/{x}/{y}.png", {
                maxZoom: 20,
                subdomains: "0123",
            });
            baseLayer.addTo(map);
            map.addLayer(drawnItemsRef.current);

            const drawControl = new L.Control.Draw({
                draw: {
                    polygon: {
                        shapeOptions: {
                            color: "yellow",
                            weight: 2,
                            fillColor: "#1de477",
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
            map.on("draw:drawvertex", () => {
                if (!drawControlRef.current) return;
                const polygonHandler = (drawControlRef.current as any)._toolbars.draw._modes.polygon.handler;
                const pointsCount = polygonHandler._markers?.length || 0;

                if (pointsCount === 3) {
                    polygonHandler.completeShape();
                }
            });






        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);












    return (
        <section className="relative z-[1001]  w-full h-full" >
            <section ref={mapRef} className="h-[100%]  w-full gap-1" />
        </section>
    );
}





