export type AddPolyGonProp = {
    setIsAddPolygonModalOpen: (value: boolean) => void,
    setGeoInWkt: (value: string) => void,
    defaultPolygon: any,
    farmLat: string | undefined,
    farmLng: string | undefined
}