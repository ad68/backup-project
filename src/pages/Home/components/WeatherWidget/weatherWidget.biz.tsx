import { useAxios, useGeoLocation } from "@/hooks"
import { useEffect, useState } from "react"

const useWeatherWidget = () => {
    const { location } = useGeoLocation()
    const [currentLat, setCurrentLat] = useState<number>(35.726574)
    const [currentLng, setCurrentLng] = useState<number>(51.4024449)
    const [weatherData, setWeatherData] = useState<any>()
    const [actionLoading, setActionLoading] = useState(false)
    const [reload, setReload] = useState(false)
    useEffect(() => {
        if (location) {
            setCurrentLat(location.lat)
            setCurrentLng(location.lng)
        }
    }, [location])
    const getWeatherData = () => {
        setActionLoading(true)
        useAxios.get(`/weather/geo?lat=${currentLat}&lon=${currentLng}`)
            .then(res => {

                setWeatherData(res.data)
            }).finally(() => { setActionLoading(false) })
    }
    const Reload = () => {
        setReload(!reload)
    }
    useEffect(() => {
        getWeatherData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, reload])
    return {
        weatherData,
        actionLoading,
        Reload,

    }
}
export default useWeatherWidget