import CustomButton from "@/components/kit/CustomButton";
import { toastSuccess } from "@/components/kit/toast";
import { useAxiosWithToken } from "@/hooks";

import { CameraIcon, SaveAllIcon, SwitchCameraIcon, Undo2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Webcam from "react-webcam";

export default function WebcamWithWatermark({ setTakePhotoModalIsOpen, getFileList }: any) {
    const webcamRef = useRef<Webcam>(null);
    const [searchParams] = useSearchParams()
    const reviewId = searchParams.get("reviewId")
    const subjectId = searchParams.get("subjectId")
    const [cameraMode, setCameraMode] = useState("environment")
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [saveLoading, setSaveLoading] = useState(false)
    const [base64Image, setBase64Image] = useState<string | null>(null);
    const [base64WithFormat, setBase64WithFormat] = useState<string | null>(null)
    const [imageMimeType, setImageMimeType] = useState<string | null>(null);
    const capture = () => {
        if (!webcamRef.current) return;
        setIsLoading(true);
        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) {
            setIsLoading(false);
            return;
        }
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                setIsLoading(false);
                return;
            }
            ctx.drawImage(img, 0, 0);
            ctx.font = "24px Arial";
            ctx.textAlign = "right";
            ctx.textBaseline = "bottom";
            const now = new Date();
            const dateStr = now.toLocaleDateString("fa-IR");
            const timeStr = now.toLocaleTimeString("fa-IR");
            const dateTimeText = `${dateStr} ${timeStr}`;
            const drawTextWithBackground = (text: string, y: number, color: string) => {
                const padding = 6;
                const textWidth = ctx.measureText(text).width;
                const textHeight = 24;
                ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                ctx.fillRect(
                    canvas.width - textWidth - padding * 2 - 10,
                    y - textHeight - padding / 2,
                    textWidth + padding * 2,
                    textHeight + padding
                );

                ctx.fillStyle = color;
                ctx.fillText(text, canvas.width - 20, y);
            };

            const finalizeImage = () => {
                const finalImage = canvas.toDataURL("image/png");
                setCapturedImage(finalImage);

                const [header, base64Data] = finalImage.split(",");
                const mimeType = header.split(":")[1].split(";")[0];
                setBase64Image(base64Data)
                setBase64WithFormat(finalImage)
                setImageMimeType(mimeType.split('/')[1]);
                setIsLoading(false);
            };

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude.toFixed(5);
                        const lng = position.coords.longitude.toFixed(5);
                        const coordText = `Lat: ${lat}, Lng: ${lng}`;

                        drawTextWithBackground(coordText, canvas.height - 10, "red");
                        drawTextWithBackground(dateTimeText, canvas.height - 40, "white");

                        finalizeImage();
                    },
                    (error) => {
                        console.error("Geolocation error:", error);

                        if (error.code === error.PERMISSION_DENIED) {
                            alert("دسترسی به موقعیت مکانی غیرفعال است.");
                        } else if (error.code === error.POSITION_UNAVAILABLE) {
                            alert("GPS روشن است اما موقعیت مکانی قابل دریافت نیست. لطفاً از اتصال مناسب اطمینان حاصل کنید.");
                        } else if (error.code === error.TIMEOUT) {
                            alert("در دریافت موقعیت مکانی تاخیر ایجاد شد. لطفاً دوباره تلاش کنید.");
                        }

                        // حتی اگر ارور داد، عکس بدون لوکیشن بگیر
                        drawTextWithBackground(dateTimeText, canvas.height - 10, "white");
                        finalizeImage();
                    },

                );
            } else {
                drawTextWithBackground(dateTimeText, canvas.height - 10, "white");
                finalizeImage();
            }
        };
    };
    const savePicture = () => {
        setSaveLoading(true)
        const params = {
            reviewId: reviewId,
            subjectId: subjectId,
            title: "camera-document",
            name: "camera-document" + "." + imageMimeType,
            fileContentInBase64: base64Image
        }
        useAxiosWithToken.post("/sabka/technical/annex/add/subject-file", params)
            .then(() => {
                toastSuccess("سند شما با موفقیت بارگذاری شد")
                setTakePhotoModalIsOpen(false)
                getFileList()
            }
            )
            .finally(() => setSaveLoading(false))
    }
    useEffect(() => {
        console.log("base64", base64Image)
        console.log("base64Format", base64WithFormat)
        console.log("imageMimeType", imageMimeType)

    }, [base64Image, base64WithFormat, imageMimeType])
    return (
        <div className="relative w-full h-screen flex flex-col  items-center">
            {!capturedImage && (
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    mirrored={false}
                    screenshotFormat="image/png"
                    videoConstraints={{ facingMode: cameraMode }}
                    style={{
                        width: '95%',
                        marginTop: "20px",
                        borderRadius: "20px",
                    }}

                />
            )}
            {capturedImage && !isLoading && (
                <div style={{ marginTop: 20 }}>
                    <img className="w-[95%] m-auto rounded-[20px]" src={capturedImage} alt="Captured with watermark" />
                </div>
            )}
            <div className="flex gap-[4px] relative w-full justify-center items-center mt-[20px]">
                {!capturedImage && <>
                    <div className="relative flex w-[100px] h-[100px]">
                        <button onClick={capture} className="w-[70px] h-[70px] flex justify-center items-center absolute top-[6px] right-[6px] bg-slate-500 border-[4px] border-slate-200 rounded-full" disabled={isLoading}>
                            {/*  <ApertureIcon className="text-white" /> */}
                        </button>
                        {isLoading && <div className="absolute right-0 top-0">
                            <span className="cameraLoader"></span>
                        </div>}
                        <span className="text-[14px] absolute bottom-0 mr-1 font-bold">گرفتن عکس</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 absolute right-[10px] top-[15px]">
                        <button onClick={() => setCameraMode(cameraMode === "user" ? "environment" : "user")} className="w-[55px] h-[55px] flex bg-slate-500 border-[4px] border-slate-200 rounded-full justify-center items-center">
                            <SwitchCameraIcon className="text-white w-[20px]" />
                        </button>
                        <span className="text-[14px] font-bold">تعویض دوربین</span>
                    </div>

                </>}
            </div>
            <div className="flex gap-2 px-4 mt-10 justify-center w-full ">
                {capturedImage && !isLoading && <CustomButton className="rounded-full bg-red-500" onClick={() => setCapturedImage(null)}>
                    <span className="text-xs mt-1">عکاسی مجدد</span>
                    <CameraIcon className="w-[20px]" />
                </CustomButton>}
                <CustomButton
                    type="button"
                    onClick={() => setTakePhotoModalIsOpen(false)}
                    variant="outlined"
                    className="rounded-full"
                >
                    <span className="text-xs">بازگشت</span>
                    <Undo2Icon className="w-[20px]" />
                </CustomButton>
                {capturedImage && <CustomButton loading={saveLoading} onClick={savePicture} className="rounded-full w-[170px]">
                    <span className="text-xs">ذخیره</span>
                    <SaveAllIcon className="w-[20px]" />
                </CustomButton>}

            </div>
        </div>
    );
}


{/*  {capturedImage && !isLoading && (
                    <button onClick={() => setCapturedImage(null)} style={{ marginLeft: 10 }}>
                        گرفتن عکس مجدد
                    </button>
                )} */}
{/*  <a href={capturedImage} download="photo-with-watermark.png" style={{ display: "block", marginTop: 10 }}>
                        دانلود عکس
                    </a> */}