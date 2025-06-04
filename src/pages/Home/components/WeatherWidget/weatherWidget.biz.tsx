import { useAxios, useGeoLocation } from "@/hooks"
import { useEffect, useState } from "react"

const useWeatherWidget = () => {
    const { location } = useGeoLocation()
    const [currentLat, setCurrentLat] = useState<number>(35.726574)
    const [currentLng, setCurrentLng] = useState<number>(51.4024449)
    const [weatherData, setWeatherData] = useState<any>()
    const [reload, setReload] = useState(false)
    useEffect(() => {
        if (location) {
            setCurrentLat(location.lat)
            setCurrentLng(location.lng)
        }
    }, [location])
    const getWeatherData = () => {
        useAxios.get(`/weather/geo?lat=${currentLat}&lon=${currentLng}`)
            .then(res => { setWeatherData(res.data) })
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
        Reload
    }
}
export default useWeatherWidget