import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import moment from 'moment-jalaali';

moment.loadPersian({ usePersianDigits: true });

const ScreenshotWithEmbeddedDate = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    const handleScreenshot = async () => {
        if (!contentRef.current) return;

        const originalCanvas = await html2canvas(contentRef.current);


        const dateText = moment().format('jYYYY/jMM/jDD - HH:mm');

        // Create new canvas: original + space for date
        const newCanvas = document.createElement('canvas');
        const ctx = newCanvas.getContext('2d');

        if (!ctx) return;

        const padding = 30;
        const fontSize = 20;

        newCanvas.width = originalCanvas.width;
        newCanvas.height = originalCanvas.height + padding;

        // Draw original image
        ctx.drawImage(originalCanvas, 0, 0);

        // Draw date text
        ctx.fillStyle = 'red';
        ctx.font = `${fontSize}px YekanBakh`;
        ctx.textAlign = 'right';
        ctx.fillText(dateText, newCanvas.width - 10, newCanvas.height - 10);

        // Export final image
        const finalDataUrl = newCanvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = finalDataUrl;
        link.download = `screenshot-${moment().format('jYYYY-jMM-jDD_HH-mm-ss')}.png`;
        link.click();
    };

    return (
        <div className="p-4">
            {/* فقط این بخش اسکرین‌شات میشه */}
            <div
                ref={contentRef}
                className="p-4 border rounded bg-white w-fit text-black"
                style={{ backgroundColor: 'white' }}
            >
                <h2 className="text-xl font-bold">محتوای اصلی</h2>
                <p>این بخش در تصویر نهایی خواهد بود.</p>
            </div>

            <button
                onClick={handleScreenshot}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
            >
                گرفتن اسکرین‌شات با تاریخ
            </button>
        </div>
    );
};

export default ScreenshotWithEmbeddedDate;
