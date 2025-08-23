
import { useAxiosWithToken } from '@/hooks'
import { objectToQueryString } from '@/utils/global'


import { useQuery } from '@tanstack/react-query'
const useFetchSmsReportQuery = ({ pageNo, pageSize, params }: any) => {

    const { error, data, refetch, isFetching } = useQuery<any>({
        queryKey: ['smsReport'],
        queryFn: async () => {
            const response: any = await useAxiosWithToken.get(
                `/sabka/sms/notify/annex/report?pageNo=${pageNo}&pageSize=${pageSize}&${objectToQueryString(params)}`,
            )
            return response.data
        },
        staleTime: 30 * 60 * 1000,
        gcTime: 40 * 60 * 1000,
        enabled: false

    })
    return { isFetching, error, data, refetch }
}

export default useFetchSmsReportQuery