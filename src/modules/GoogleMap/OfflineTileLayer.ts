import L from "leaflet";
import localforage from "localforage";

export const OfflineTileLayer = L.TileLayer.extend({
    createTile: function (coords: any, done: any) {
        const tile = document.createElement("img");
        const url = this.getTileUrl(coords);
        const key = `${coords.z}_${coords.x}_${coords.y}`;
        tile.crossOrigin = "Anonymous";
        tile.alt = "";

        localforage.getItem(key).then((value) => {
            if (value) {
                tile.src = value as string;
                done(null, tile);
            } else {
                tile.onload = function () {
                    const canvas = document.createElement("canvas");
                    canvas.width = 256;
                    canvas.height = 256;
                    const ctx = canvas.getContext("2d");
                    if (ctx) {
                        ctx.drawImage(tile, 0, 0);
                        const dataUrl = canvas.toDataURL("image/jpeg");
                        localforage.setItem(key, dataUrl);
                    }
                    done(null, tile);
                };
                tile.onerror = function () {
                    done(new Error("Tile load error"), tile);
                };
                tile.src = url;
            }
        });

        return tile;
    }
});
