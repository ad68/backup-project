import L from 'leaflet'
// @ts-ignore
L.TileLayer.WMTS = L.TileLayer.extend({
    defaultWmtsParams: {
        service: 'WMTS',
        request: 'GetTile',
        version: '1.0.0',
        layer: '',
        style: 'default',
        tilematrixSet: '',
        format: 'image/jpeg'
    },
    // @ts-ignore
    initialize: function (url, options) {
        this._url = url
        const wmtsParams = { ...this.defaultWmtsParams, ...options }
        L.setOptions(this, options)
        this.wmtsParams = wmtsParams
    },
    // @ts-ignore
    getTileUrl: function (tilePoint) {
        const zoom = this._tileZoom
        const url = this._url
            .replace('{TileMatrixSet}', this.wmtsParams.tilematrixSet)
            .replace('{TileMatrix}', zoom.toString())
            .replace('{TileCol}', tilePoint.x.toString())
            .replace('{TileRow}', tilePoint.y.toString())
        return url
    }
})
// @ts-ignore
L.tileLayer.wmts = function (url, options) {
    // @ts-ignore
    return new L.TileLayer.WMTS(url, options)
}
