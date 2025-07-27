import localforage from "localforage";


// تبدیل مختصات جغرافیایی به tile
function latLngToTile(lat: number, lng: number, zoom: number) {
    const x = Math.floor(((lng + 180) / 360) * Math.pow(2, zoom));
    const y = Math.floor(
        ((1 - Math.log(Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)) / Math.PI) / 2) *
        Math.pow(2, zoom)
    );
    return { x, y };
}

// دانلود و ذخیره tile به localforage
async function downloadTile(x: number, y: number, z: number, subdomain: string) {
    const key = `${z}_${x}_${y}`;
    const url = `https://mt${subdomain}.google.com/vt/lyrs=s,h&x=${x}&y=${y}&z=${z}`;

    const response = await fetch(url);
    const blob = await response.blob();

    const reader = new FileReader();
    return new Promise<void>((resolve, reject) => {
        reader.onloadend = () => {
            const base64data = reader.result as string;
            localforage.setItem(key, base64data).then(() => resolve());
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// محدوده یوسف‌آباد و اجرای pre-cache
export async function precacheYousefAbadTiles() {
    const bounds = {
        north: 35.755,
        south: 35.730,
        east: 51.420,
        west: 51.388,
    };

    const zoomLevels = [14, 15, 16, 17, 18];

    for (const z of zoomLevels) {
        const topLeft = latLngToTile(bounds.north, bounds.west, z);
        const bottomRight = latLngToTile(bounds.south, bounds.east, z);

        for (let x = topLeft.x; x <= bottomRight.x; x++) {
            for (let y = topLeft.y; y <= bottomRight.y; y++) {
                const sub = ["0", "1", "2", "3"][Math.floor(Math.random() * 4)];
                try {
                    console.log(`Downloading z:${z} x:${x} y:${y}`);
                    await downloadTile(x, y, z, sub);
                } catch {
                    console.warn(`Failed to download tile z:${z} x:${x} y:${y}`);
                }
            }
        }
    }

    console.log("✅ Pre-caching complete");
}
