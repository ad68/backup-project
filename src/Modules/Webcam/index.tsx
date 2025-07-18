import { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function WebcamWithWatermark() {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);

    const capture = () => {
        if (!webcamRef.current) return;

        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) return;

        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            ctx.drawImage(img, 0, 0);

            const watermarkText = "© My Watermark";
            ctx.font = "30px Arial";
            ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
            ctx.textAlign = "right";
            ctx.textBaseline = "bottom";
            ctx.fillText(watermarkText, canvas.width - 20, canvas.height - 60);

            const now = new Date();
            const dateStr = now.toLocaleDateString("fa-IR");
            const timeStr = now.toLocaleTimeString("fa-IR");
            const dateTimeText = `${dateStr} ${timeStr}`;
            ctx.font = "24px Arial";
            ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            ctx.fillText(dateTimeText, canvas.width - 20, canvas.height - 35);

            // حالا سعی می‌کنیم موقعیت جغرافیایی بگیریم
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude.toFixed(5);
                        const lng = position.coords.longitude.toFixed(5);

                        const coordText = `Lat: ${lat}, Lng: ${lng}`;
                        ctx.font = "20px Arial";
                        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
                        ctx.fillText(coordText, canvas.width - 20, canvas.height - 10);

                        const finalImage = canvas.toDataURL("image/png");
                        setCapturedImage(finalImage);
                    },
                    () => {
                        // اگر اجازه نداد یا خطا بود، عکس بدون مختصات ثبت میشه
                        const finalImage = canvas.toDataURL("image/png");
                        setCapturedImage(finalImage);
                    }
                );
            } else {
                // مرورگر پشتیبانی نمی‌کنه
                const finalImage = canvas.toDataURL("image/png");
                setCapturedImage(finalImage);
            }
        };
    };



    return (
        <div style={{ maxWidth: 600, margin: "auto", padding: 20, textAlign: "center" }}>
            <h2>دوربین با react-webcam و واترمارک</h2>

            {!capturedImage && (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/png"
                    videoConstraints={{ facingMode: "user" }}
                    style={{ width: "100%", borderRadius: 10 }}
                />
            )}

            <div style={{ marginTop: 10 }}>
                <button onClick={capture} disabled={!!capturedImage} style={{ marginRight: 10 }}>
                    گرفتن عکس
                </button>
                {capturedImage && (
                    <button onClick={() => setCapturedImage(null)}>
                        گرفتن عکس مجدد
                    </button>
                )}
            </div>

            {capturedImage && (
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
