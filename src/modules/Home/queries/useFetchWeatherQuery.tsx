
import { useAxiosWithToken } from '@/hooks'
import { useQuery } from '@tanstack/react-query'
const useFetchWeatherQuery = ({ currentLat, currentLng }: any) => {
    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['weatherInfo'],
        queryFn: async () => {
            const response: any = await useAxiosWithToken.get(
                `/weather/geo?lat=${currentLat}&lon=${currentLng}`,
            )
            return response.data
        },
        staleTime: 240 * 60 * 1000,
        gcTime: 1440 * 60 * 1000,

    })
    return { isFetching, error, data, refetch }
}

export default useFetchWeatherQuery