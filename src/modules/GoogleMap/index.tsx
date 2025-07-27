import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { OfflineTileLayer } from "./OfflineTileLayer"; // مسیری که ساختی
export default function Index() {
    const mapRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!mapRef.current) return;
        const map = L.map(mapRef.current, {
            zoomControl: false,
            attributionControl: false,
        }).setView([35.7380, 51.4000], 15); // یوسف‌آباد
        const layer = new (OfflineTileLayer as any)(
            "https://mt{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
            {
                subdomains: "0123",
                maxZoom: 19,
            }
        );
        layer.addTo(map);
        return () => {
            map.remove();
        };
    }, []);

    return (
        <section style={{ height: "95%", width: "100%", position: "relative" }}>
            <section ref={mapRef} className="h-[87%] w-full" />
        </section>
    );
}
