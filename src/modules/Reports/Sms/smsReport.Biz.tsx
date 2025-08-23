
import { useEffect, useState } from "react"
import useFetchSmsReportQuery from "./queries/useFetchSmsReportQuery"
const useSmsReport = () => {
    /*  const [data, setData] = useState<any>([]) */
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [totalElement, setTotalElement] = useState<number>(1)
    const [params, setParams] = useState<any>()
    const { data, isFetching, refetch } = useFetchSmsReportQuery({ pageNo: currentPage, pageSize: 10, params: { ...params } })
    useEffect(() => {
        if (data) {
            setTotalElement(data?.totalElements)
        }
    }, [data])
    useEffect(() => {
        refetch()
    }, [currentPage])
    useEffect(() => {
        setCurrentPage(0)
    }, [params])

    return {
        data,
        isFetching,
        refetch,
        currentPage,
        setCurrentPage,
        totalElement,
        setParams
    }
}
export default useSmsReport