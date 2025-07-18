import { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function WebcamWithWatermark() {
    const webcamRef = useRef<Webcam>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // ✅ دو استیت جدید
    const [base64Image, setBase64Image] = useState<string | null>(null);
    const [imageMimeType, setImageMimeType] = useState<string | null>(null);
    const [fullBase64Image, setFullBase64Image] = useState<string | null>(null);

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
                console.log(finalImage);

                // ✅ استخراج base64 و فرمت
                const [header, base64Data] = finalImage.split(",");
                const mimeType = header.split(":")[1].split(";")[0];
                setBase64Image(base64Data)
                console.log(base64Data); // فقط بخش base64
                setImageMimeType(mimeType); // مثلا: image/png

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
                    () => {
                        drawTextWithBackground(dateTimeText, canvas.height - 10, "white");
                        finalizeImage();
                    }
                );
            } else {
                drawTextWithBackground(dateTimeText, canvas.height - 10, "white");
                finalizeImage();
            }
        };
    };

    return (
        <div style={{ maxWidth: 600, margin: "auto", padding: 20, textAlign: "center" }}>
            {!capturedImage && !isLoading && (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/png"
                    videoConstraints={{ facingMode: "user" }}
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
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
                    <div style={{ marginTop: 10 }}>
                        <p><strong>فرمت:</strong> {imageMimeType?.split('/')[1]}</p>
                        <p><strong>Base64:</strong></p>
                        <textarea value={capturedImage ?? ""} rows={4} style={{ width: "100%" }} readOnly />

                    </div>
                </div>
            )}
        </div>
    );
}
