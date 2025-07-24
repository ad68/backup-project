export type AddPolyGonProp = {
    setIsAddPolygonModalOpen: (value: boolean) => void,
    setGeoInWkt: (value: string) => void,
    defaultPolygon: any,
    farmLat: string | null,
    farmLng: string | null
}