import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import WKT from "terraformer-wkt-parser";
import * as turf from '@turf/turf';
import { useEffect, useRef, useState } from "react";
import { CheckIcon, DeleteIcon, Edit2Icon, LocateFixed, MapPinPlus, RocketIcon, Undo2 } from "lucide-react";
import type { AddPolyGonProp } from "./addPolygon.types";
import CustomButton from "@/components/kit/CustomButton";
import { WKTToPolygon } from "@/utils/global";
import { useAxiosWithToken } from "@/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toastSuccess } from "@/components/kit/toast";
export default function Index({
    defaultPolygon,
    farmLat,
    farmLng,
}: AddPolyGonProp) {
    const [searchParams] = useSearchParams()
    const subjectItemId = searchParams.get("subjectItemId")
    const policyId = searchParams.get("policyId")
    const reviewId = searchParams.get("reviewId")
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapRefInstance = useRef<L.Map | null>(null);
    const drawnItemsRef = useRef<L.FeatureGroup>(new L.FeatureGroup());
    const drawControlRef = useRef<L.Control.Draw | null>(null);
    const [polygonsState, setPolygonsState] = useState<L.LatLng[][]>([]);
    const [hasPolygon, setHasPolygon] = useState(false);
    const [isStartDrawing, setIsStartDrawing] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [geoInWkt, setGeoInWkt] = useState<string>()
    const [actionLoading, setActionLoading] = useState(false)
    const [hectares, setHectares] = useState<string>('0')
    const [meter, setMeter] = useState<string>('0')
    const navigate = useNavigate()
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

            const baseLayer = L.tileLayer("https://mt{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", {
                maxZoom: 20,
                subdomains: "0123",
            });
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

            // وقتی کاربر یک نقطه روی نقشه میذاره، تعداد نقاط رو چک کن و اگر رسید به 3 خودکار پلی‌گان رو تکمیل کن
            map.on("draw:drawvertex", () => {
                if (!drawControlRef.current) return;
                const polygonHandler = (drawControlRef.current as any)._toolbars.draw._modes.polygon.handler;
                const pointsCount = polygonHandler._markers?.length || 0;

                if (pointsCount === 3) {
                    polygonHandler.completeShape();
                }
            });

            // رویداد ایجاد پلی‌گان جدید
            map.on(L.Draw.Event.CREATED, function (event: any) {
                const layer = event.layer;
                drawnItemsRef.current.addLayer(layer);
                updatePolygonState();

                (drawControlRef.current as any)._toolbars.edit._modes.edit.handler.enable();
                setIsEditing(true);
            });

            // رویداد ویرایش پلی‌گان
            map.on(L.Draw.Event.EDITED, function () {
                updatePolygonState();
            });

            // رویداد حذف پلی‌گان
            map.on(L.Draw.Event.DELETED, function () {
                updatePolygonState();
            });

            // اضافه کردن پلی‌گان پیش‌فرض اگر وجود داشت
            if (defaultPolygon) {
                const myDefaultPolygon = L.polygon(WKTToPolygon(defaultPolygon), {
                    color: "red",
                    weight: 2,
                    fillColor: "orange",
                    fillOpacity: 0.5,
                });
                drawnItemsRef.current.addLayer(myDefaultPolygon);
                updatePolygonState();
                console.log("defaultPolygon", defaultPolygon);
                console.log("defaultPolygon", WKTToPolygon(defaultPolygon));
            }
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
                    setGeoInWkt(wkt);
                    // ✅ محاسبه مساحت با turf
                    const areaInSquareMeters = turf.area(feature);
                    const areaInHectares = areaInSquareMeters / 10000;
                    console.log(`📏 مساحت: ${areaInSquareMeters.toFixed(2)} متر مربع`);
                    console.log(`📏 مساحت: ${areaInHectares.toFixed(3)} هکتار`);
                    setMeter(areaInSquareMeters.toFixed(2))
                    setHectares(areaInHectares.toFixed(4))
                }
            });
        }
    };
    const startDrawing = () => {
        if (!mapRefInstance.current) return;

        if (drawControlRef.current) {
            mapRefInstance.current.removeControl(drawControlRef.current);
        }
        const newDrawControl = new L.Control.Draw({
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
        drawControlRef.current = newDrawControl;
        mapRefInstance.current.addControl(newDrawControl);
        // فعال کردن ابزار رسم polygon جدید
        const polygonHandler = (newDrawControl as any)._toolbars.draw._modes.polygon.handler;
        polygonHandler.enable();
        setIsStartDrawing(true);
    };
    const locateSubjectItem = () => {
        setActionLoading(true)
        const params = {
            reviewId: reviewId && parseInt(reviewId),
            policyId: policyId && parseInt(policyId),
            subjectItemId: subjectItemId && parseInt(subjectItemId),
            subjectNotExist: false,
            geoInWkt: geoInWkt,
        }
        useAxiosWithToken.post("/sabka/technical/annex/add/locate-subject-item", params).then(() => {
            toastSuccess("با موفقیت ذخیره شد")
            navigate(-1)
        }).finally(() => { setActionLoading(false) })
    }
    const deleteAll = () => {
        drawnItemsRef.current.clearLayers();
        updatePolygonState();
        setGeoInWkt("");
        setIsEditing(false);
        setIsStartDrawing(false)
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
            iconSize: [48, 48],
            iconAnchor: [24, 24],
        });
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const userLatLng: L.LatLngExpression = [latitude, longitude];

                if (mapRefInstance.current) {
                    L.marker(userLatLng, { icon: blueDotIcon })
                        .addTo(mapRefInstance.current)
                        .bindPopup("موقعیت شما")
                        .openPopup();

                    mapRefInstance.current.setView(userLatLng, 15);
                }
            },
            (error) => {
                alert("دسترسی به موقعیت مکانی امکان‌پذیر نیست.");
                console.error("Geo error:", error);
            }
        );
    };
    useEffect(() => {
        // هر زمان polygonsState تغییر کرد میتونی اینجا کار کنی
    }, [polygonsState]);
    useEffect(() => {
        console.log("geooInnnnn", geoInWkt)
    }, [geoInWkt])
    useEffect(() => {
        console.log("isDrawingPolygon", isStartDrawing)
    }, [isStartDrawing])

    return (
        <section className="relative z-[1001]  w-full h-full" >
            <section ref={mapRef} className="h-[100%]  w-full gap-1" />
            <section className="fixed z-[1002] left-0 top-0 h-[8%]  overflow-x-auto w-full flex">
                <section className="w-full bg-[#ffffff87] flex justify-between shadow-2xl flex-row items-center gap-1 px-2">
                    <div className="flex gap-1">
                        {!hasPolygon && (
                            <button
                                className={`${isStartDrawing ? `bg-primary` : `bg-blue-500`} flex items-center gap-2 rounded-full py-1 px-3 text-white`}
                                disabled={isStartDrawing}
                                onClick={startDrawing}
                            >

                                {isStartDrawing ? <MapPinPlus /> : <RocketIcon />}

                                <span className="text-xs">{isStartDrawing ? "شروع به رسم کنید" : "شروع"}</span>
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
                    </div>
                    <div className="flex items-center gap-2 text-[12px]">
                        <span className="text-[10px]">مساحت:</span>
                        <div className="text-[11px] font-semibold">
                            <div>{hectares} هکتار</div>
                            <div>{meter} متر</div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="w-full fixed bg-[#ffffff87] flex items-center z-[1002] left-0 bottom-0 h-[8%] gap-1 pr-1  justify-between pl-2">
                <div>
                    <button
                        className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-purple-600"
                        onClick={() => {
                            showUserLocation();
                        }}
                    >
                        <LocateFixed className="w-[20px] text-white shadow-xl" />

                    </button>
                </div>
                <div className="flex gap-1">
                    <CustomButton
                        variant="outlined"
                        className="rounded-full"
                        onClick={() => navigate(-1)}
                    >
                        <Undo2 className="w-[20px]" />
                        <span className="text-xs">بازگشت</span>
                    </CustomButton>
                    {hasPolygon && !isEditing && (
                        <CustomButton
                            loading={actionLoading}
                            className="rounded-full"
                            onClick={() => locateSubjectItem()}
                        >

                            <span className="text-xs">ثبت مکان</span>
                        </CustomButton>
                    )}
                </div>
            </section>
        </section>
    );
}
