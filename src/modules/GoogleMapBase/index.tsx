import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, } from "react";
export default function Index() {
    const mapRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (mapRef.current) {
            const map = L.map(mapRef.current, {
                zoomControl: false,
                attributionControl: false,
            }).setView([35.70218, 51.3386], 14);

            const baseLayer = L.tileLayer(
                "https://mt{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
                {
                    maxZoom: 20,
                    subdomains: "0123",
                }
            );
            baseLayer.addTo(map);
        }
    }, []);
    return (
        <section style={{ height: "95%", width: "100%", position: "relative" }}>
            <section ref={mapRef} className="h-[87%] w-full gap-1" />
        </section>
    );
}
