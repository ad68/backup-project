import { useGeoLocation } from "@/hooks"
import { useEffect, useState } from "react"
import useFetchWeatherQuery from "../../queries/useFetchWeatherQuery"

const useWeatherWidget = () => {
    const { location } = useGeoLocation()
    const [currentLat, setCurrentLat] = useState<number>(35.726574)
    const [currentLng, setCurrentLng] = useState<number>(51.4024449)
    const { data: weatherData, isFetching: actionLoading, refetch } = useFetchWeatherQuery({ currentLat: currentLat, currentLng: currentLng })
    useEffect(() => {
        if (location) {
            setCurrentLat(location.lat)
            setCurrentLng(location.lng)
        }
    }, [location])

    return {
        weatherData,
        actionLoading,
        refetch,
    }
}
export default useWeatherWidget