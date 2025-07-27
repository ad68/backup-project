
import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import localforage from 'localforage'
import '@/lib/leaflet-tilelayer-wmts'  // لایه WMTS

// کلاس سفارشی TileLayer برای کش دستی
const OfflineTileLayer = L.TileLayer.extend({
    // @ts-ignore
    createTile: function (coords, done) {
        const tile = document.createElement('img')
        const url = this.getTileUrl(coords)

        tile.alt = ''
        tile.setAttribute('role', 'presentation')

        localforage.getItem(url).then(cachedDataUrl => {
            if (cachedDataUrl) {
                // @ts-ignore
                tile.src = cachedDataUrl
                done(null, tile)
            } else {
                fetch(url)
                    .then(res => res.blob())
                    .then(blob => {
                        const reader = new FileReader()
                        reader.onloadend = function () {
                            const base64data = reader.result
                            localforage.setItem(url, base64data)
                            // @ts-ignore
                            tile.src = base64data
                            done(null, tile)
                        }
                        reader.readAsDataURL(blob)
                    })
                    .catch(() => {
                        done(null, tile)
                    })
            }
        })

        return tile
    },
})

const OfflineTileLayerFactory = function (urlTemplate: any, options: any) {
    // @ts-ignore
    return new OfflineTileLayer(urlTemplate, options)
}

const MapComponent = () => {
    useEffect(() => {
        const map = L.map('map', {
            center: [32.4279, 53.688],
            zoom: 6,
            crs: L.CRS.EPSG3857,
        })

        // WMTS با کش دستی
        const wmtsLayer = OfflineTileLayerFactory(
            'http://37.32.26.141:8080/wmts/gm_layer/gm_grid/{z}/{x}/{y}.png',
            {
                layer: 'gm_layer',
                style: 'default',
                tilematrixSet: 'gm_grid',
                format: 'image/png',
                transparent: true,
                tileSize: 256,
                maxZoom: 18,
            }
        )
        wmtsLayer.addTo(map)

        // Label معمولی (بدون کش، اگر خواستی می‌تونی باز هم از OfflineTileLayerFactory استفاده کنی)
        const osmLabels = L.tileLayer(
            'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png',
            {
                subdomains: 'abcd',
                maxZoom: 20,
                attribution: '© OpenStreetMap, © CartoDB',
                opacity: 0.9,
            }
        )
        osmLabels.addTo(map)
    }, [])

    return <div id="map" style={{ height: '600px', width: '100%' }} />
}

export default MapComponent
