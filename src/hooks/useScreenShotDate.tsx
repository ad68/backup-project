/* import { useCallback } from 'react';
import html2canvas from 'html2canvas';
import moment from 'moment-jalaali';
import leafletImage from 'leaflet-image';
import L from 'leaflet';

moment.loadPersian({ usePersianDigits: true });

type RefType = React.RefObject<Element | null> | React.RefObject<L.Map | null>;

export function useScreenshotWithDate() {
    const takeScreenshot = useCallback(async (ref: RefType) => {
        if (!ref.current) return;

        const dateText = moment().format('jYYYY/jMM/jDD - HH:mm');
        const padding = 40;
        const fontSize = 22;


        if (ref.current instanceof L.Map) {
            leafletImage(ref.current, (err: Error | null, canvas: HTMLCanvasElement) => {
                if (err) {
                    console.error(err);
                    return;
                }

                const newCanvas = document.createElement('canvas');
                const ctx = newCanvas.getContext('2d');
                if (!ctx) return;

                newCanvas.width = canvas.width;
                newCanvas.height = canvas.height + padding;

                ctx.drawImage(canvas, 0, 0);

                ctx.fillStyle = 'red';
                ctx.font = `${fontSize}px Vazirmatn, sans-serif`;
                ctx.textAlign = 'right';
                ctx.fillText(dateText, newCanvas.width - 10, newCanvas.height - 10);

                const finalDataUrl = newCanvas.toDataURL('image/png');

                const link = document.createElement('a');
                link.href = finalDataUrl;
                link.download = `map-screenshot-${moment().format('jYYYY-jMM-jDD_HH-mm-ss')}.png`;
                link.click();
            });
            return;
        }


        const originalCanvas = await html2canvas(ref.current);
        const newCanvas = document.createElement('canvas');
        const ctx = newCanvas.getContext('2d');
        if (!ctx) return;

        newCanvas.width = originalCanvas.width;
        newCanvas.height = originalCanvas.height + padding;

        ctx.drawImage(originalCanvas, 0, 0);

        ctx.fillStyle = 'red';
        ctx.font = `${fontSize}px Vazirmatn, sans-serif`;
        ctx.textAlign = 'right';
        ctx.fillText(dateText, newCanvas.width - 10, newCanvas.height - 10);

        const finalDataUrl = newCanvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = finalDataUrl;
        link.download = `screenshot-${moment().format('jYYYY-jMM-jDD_HH-mm-ss')}.png`;
        link.click();

    }, []);

    return { takeScreenshot };
}
 */