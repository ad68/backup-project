import { useGeoLocation } from "@/hooks"
import { useEffect, useState } from "react"
import useFetchWeatherQuery from "../../queries/useFetchWeatherQuery"
import { useOfflineStore } from "@/store/useOfflineStore"

const useWeatherWidget = () => {
    const { weather, setWeather } = useOfflineStore()
    const { location } = useGeoLocation()
    const [currentLat, setCurrentLat] = useState<number>(35.726574)
    const [currentLng, setCurrentLng] = useState<number>(51.4024449)

    const { data, isFetching: actionLoading, refetch } = useFetchWeatherQuery({ currentLat: currentLat, currentLng: currentLng })
    useEffect(() => {
        if (location) {
            setCurrentLat(location.lat)
            setCurrentLng(location.lng)
        }
    }, [location])
    useEffect(() => {
        if (data) {
            setWeather(data)
        }

    }, [data])

    return {
        weather,
        actionLoading,
        refetch,
    }
}
export default useWeatherWidget