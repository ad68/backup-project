// @ts-nocheck

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-path-drag";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-geometryutil";
import { memo, useEffect, useRef, useState } from "react";
import CustomButton from "@/components/kit/CustomButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { polygonToWKT } from "@/utils/global";
import { useAxiosWithToken } from "@/hooks";

type MapProps = {

    center?: [number, number];
    offset?: number;
    polygonBounds?: L.LatLngExpression[];
};

function Index({ center, offset, polygonBounds }: MapProps) {
    const defaultCenter: [number, number] = [35.699739, 51.338097]; // میدان آزادی تهران
    const defaultOffset = 0.005;
    const [searchParams] = useSearchParams()
    const [actionLoading, setActionLoading] = useState(false)
    const subjectItemId = searchParams.get("subjectItemId")
    const policyId = searchParams.get("policyId")
    const reviewId = searchParams.get("reviewId")
    const navigate = useNavigate();
    const mapRef = useRef<HTMLDivElement | null>(null);
    const leafletMapRef = useRef<L.Map | null>(null);
    const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());
    const [coords, setCoords] = useState<string>("");
    const [area, setArea] = useState<string>("");
    const [hektar, setHektar] = useState("")
    const [meter, setMeter] = useState("")
    const polygonRef = useRef<L.Polygon | null>(null);
    const locateSubjectItem = (geoInWkt: string) => {
        setActionLoading(true)
        const params = {
            reviewId: reviewId && parseInt(reviewId),
            policyId: policyId && parseInt(policyId),
            subjectItemId: subjectItemId && parseInt(subjectItemId),
            subjectNotExist: false,
            geoInWkt: geoInWkt,
            isTest: true
        }
        useAxiosWithToken.post("/sabka/technical/annex/add/locate-subject-item", params).finally(() => { setActionLoading(false) })
    }
    const getCurrentPolygonData = () => {
        if (polygonRef.current) {
            const latlngs = polygonRef.current.getLatLngs()[0] as L.LatLng[];
            const polygonCoords = latlngs.map((p) => [p.lat, p.lng]);
            const wkt = polygonToWKT(polygonCoords);
            /*     console.log("polygonCoords", polygonCoords) */
            /*  console.log("wkt", wkt) */
            locateSubjectItem(wkt)
            /* return {
                coords: polygonCoords,
                wkt,
            }; */
        } else {
            console.warn("❌ Polygon موجود نیست.");
            return null;
        }
    };


    useEffect(() => {
        if (mapRef.current && !leafletMapRef.current) {
            const map = L.map(mapRef.current, {
                zoomControl: false,
                attributionControl: false,
                touchZoom: true,
                dragging: true,
                tap: true,
                tapTolerance: 10,

            }).setView(center || defaultCenter, 16);

            const baseLayer = L.tileLayer(
                "https://mt{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
                {
                    maxZoom: 20,
                    subdomains: "0123",
                }
            );
            baseLayer.addTo(map);
            drawnItemsRef.current.addTo(map);
            leafletMapRef.current = map;
        }
    }, []);

    // رسم polygon یا مربع پیش‌فرض به شرط وجود polygonBounds یا نه
    useEffect(() => {
        if (!leafletMapRef.current) return;
        const map = leafletMapRef.current;

        drawnItemsRef.current.clearLayers();
        polygonRef.current = null;

        let bounds: L.LatLngExpression[];
        if (polygonBounds && polygonBounds.length >= 3) {
            bounds = polygonBounds;
        } else {
            const c = center || defaultCenter;
            const off = offset ?? defaultOffset;
            bounds = [
                [c[0] - off, c[1] - off],
                [c[0] - off, c[1] + off],
                [c[0] + off, c[1] + off],
                [c[0] + off, c[1] - off],
            ];
        }

        // تنظیم view روی مرکز polygon
        const latSum = bounds.reduce((sum, b) => sum + (b as [number, number])[0], 0);
        const lngSum = bounds.reduce((sum, b) => sum + (b as [number, number])[1], 0);
        const centerView: [number, number] = [latSum / bounds.length, lngSum / bounds.length];
        map.setView(centerView, 16);

        const polygon = L.polygon(bounds, {
            color: "#43f15a",
            weight: 2,
            fillOpacity: 0.2,
            // @ts-ignore
            draggable: true,
        });

        // @ts-ignore
        polygon.dragging?.enable();
        polygon.addTo(drawnItemsRef.current);
        // @ts-ignore
        polygon.editing?.enable();

        polygonRef.current = polygon;

        const updateCoordsAndArea = () => {
            const latlngs = polygon.getLatLngs()[0] as L.LatLng[];
            const coordsStr = latlngs
                .map((latlng) => `${latlng.lat.toFixed(6)}, ${latlng.lng.toFixed(6)}`)
                .join(" | ");
            setCoords(coordsStr);

            const areaInSquareMeters = L.GeometryUtil.geodesicArea(latlngs); // m²
            /*   const areaInSquareKilometers = areaInSquareMeters / 1e6; */
            const areaInHectares = areaInSquareMeters / 10000;
            setMeter(areaInSquareMeters.toFixed(2))
            setHektar(areaInHectares.toFixed(4))

        };

        updateCoordsAndArea();

        polygon.on("edit", updateCoordsAndArea);
        polygon.on("editvertex", updateCoordsAndArea);
        polygon.on("dragend", () => {
            // @ts-ignore
            polygon.editing?.enable();
            // @ts-ignore
            polygon.editing?.updateMarkers();
            updateCoordsAndArea();
        });
        if (polygonBounds?.length > 0) {
            console.log("def cord", polygonBounds)
            console.log("def wkt", polygonToWKT(polygonBounds))
        }


    }, [center, offset, polygonBounds]);


    return (
        <section style={{ height: "100%", width: "100%", position: "relative" }}>
            <div
                style={{
                    position: "absolute",
                    zIndex: 1000,
                    borderTopRightRadius: 10,
                    right: 10,
                    top: 10,
                    background: "rgba(255,255,255,0.9)",
                    padding: "6px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    maxWidth: "90%",
                    direction: "ltr",
                    justifyContent: "flex-start"
                }}
            >
                {/*          <strong>مختصات:</strong>
                <br />
                {coords || "پلی‌گان رسم نشده است"}
                <br /> */}
                <strong className="w-full  block text-right">:مساحت</strong>
                <div className="flex gap-1 font-light justify-end items-center">
                    <span>هکتار</span>
                    <span>{hektar}</span>
                </div>
                <div className="flex gap-1 font-light justify-end items-center">

                    <span>متر مربع</span>
                    <span>{meter}</span>
                </div>

            </div>

            <section ref={mapRef} className="h-[100%] w-full" />
            <div className="absolute flex gap-2 z-[1001] bottom-[10px] left-[10px] max-w-[90%]">
                <CustomButton onClick={() => navigate(-1)} variant="outlined">بازگشت</CustomButton>
                <CustomButton type="button" loading={actionLoading} onClick={() => getCurrentPolygonData()} className="">ثبت مکان</CustomButton>

            </div>

        </section>
    );
}
export default memo(Index)