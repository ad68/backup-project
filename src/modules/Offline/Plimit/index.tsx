import { useState } from "react";
import axios from "axios";
import pLimit from "p-limit";

// نمونه داده اولیه
const initialData = [
    { id: 123, files: [], status: "pending", results: [] },
    { id: 456, files: [], status: "pending", results: [] },
    // ... بقیه رکوردها
];

export default function BatchUpload() {
    const [data, setData] = useState(initialData);

    // تابع آپلود یک آیتم
    const uploadItem = async (item: any, index: number) => {
        setData(prev => {
            const copy = [...prev];
            copy[index] = { ...copy[index], status: "uploading" };
            return copy;
        });

        const formData = new FormData();
        formData.append("id", item.id);
        item.files.forEach((file: string | Blob) => formData.append("files", file));

        try {
            const res = await axios.post("/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setData(prev => {
                const copy = [...prev];
                copy[index] = { ...copy[index], status: "success", results: res.data };
                return copy;
            });
        } catch (err) {
            setData(prev => {
                const copy = [...prev];
                copy[index] = { ...copy[index], status: "error" };
                return copy;
            });
        }
    };

    // شروع آپلود با محدودیت همزمانی
    const startUpload = async () => {
        const limit = pLimit(5); // حداکثر 5 آپلود همزمان
        const promises = data.map((item, i) => limit(() => uploadItem(item, i)));
        await Promise.all(promises);
        console.log("All uploads finished");
    };

    return (
        <div>
            <h2>Batch Upload</h2>
            <button onClick={startUpload}>Upload All</button>
            <ul>
                {data.map(item => (
                    <li key={item.id} style={{ marginBottom: 10 }}>
                        <strong>ID: {item.id}</strong> — Status: {item.status}
                        {item.results.length > 0 && (
                            <div>Result: {JSON.stringify(item.results)}</div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
