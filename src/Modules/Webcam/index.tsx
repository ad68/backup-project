import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function WebcamWithWatermark() {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const capture = () => {
        if (!webcamRef.current) return;

        setIsLoading(true); // شروع لودینگ

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
                ctx.fillRect(canvas.width - textWidth - padding * 2 - 10, y - textHeight - padding / 2, textWidth + padding * 2, textHeight + padding);

                ctx.fillStyle = color;
                ctx.fillText(text, canvas.width - 20, y);
            };

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude.toFixed(5);
                        const lng = position.coords.longitude.toFixed(5);
                        const coordText = `Lat: ${lat}, Lng: ${lng}`;

                        drawTextWithBackground(coordText, canvas.height - 10, "red");
                        drawTextWithBackground(dateTimeText, canvas.height - 40, "white");

                        const finalImage = canvas.toDataURL("image/png");
                        setCapturedImage(finalImage);
                        setIsLoading(false);
                    },
                    () => {
                        drawTextWithBackground(dateTimeText, canvas.height - 10, "white");

                        const finalImage = canvas.toDataURL("image/png");
                        setCapturedImage(finalImage);
                        setIsLoading(false);
                    }
                );
            } else {
                drawTextWithBackground(dateTimeText, canvas.height - 10, "white");
                const finalImage = canvas.toDataURL("image/png");
                setCapturedImage(finalImage);
                setIsLoading(false);
            }
        };
    };

    return (
        <div style={{ maxWidth: 600, margin: "auto", padding: 20, textAlign: "center" }}>
            <h2>دوربین با react-webcam و واترمارک</h2>

            {!capturedImage && !isLoading && (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/png"
                    videoConstraints={{ facingMode: "user" }}
                    style={{ width: "100%", borderRadius: 10 }}
                />
            )}

            <div style={{ marginTop: 10 }}>
                <button onClick={capture} disabled={isLoading}>
                    {isLoading ? "در حال پردازش..." : "گرفتن عکس"}
                </button>
                {capturedImage && !isLoading && (
                    <button onClick={() => setCapturedImage(null)} style={{ marginLeft: 10 }}>
                        گرفتن عکس مجدد
                    </button>
                )}
            </div>

            {isLoading && <p style={{ marginTop: 20 }}>⏳ لطفا صبر کنید...</p>}

            {capturedImage && !isLoading && (
                <div style={{ marginTop: 20 }}>
                    <h3>عکس گرفته شده با واترمارک:</h3>
                    <img src={capturedImage} alt="Captured with watermark" style={{ width: "100%" }} />
                    <a href={capturedImage} download="photo-with-watermark.png" style={{ display: "block", marginTop: 10 }}>
                        دانلود عکس
                    </a>
                </div>
            )}
        </div>
    );
}
