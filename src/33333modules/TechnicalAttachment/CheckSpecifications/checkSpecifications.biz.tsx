import { toastError } from "@/components/kit/toast"
import { useAxiosWithToken } from "@/hooks"
import { bulkSaveToIDB, clearStore, getPaginatedDataFromIDB } from "@/lib/indexdb"
import { useEffect, useState } from "react"

const useTechnicalAttachment = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [hasFetched, setHasFetched] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [searchParams, setSearchParams] = useState<any>()
    const saveToDataBase = async (data: any) => {
        await bulkSaveToIDB(data);
    };
    const getList = async () => {
        setLoading(true);
        const params = searchParams ? searchParams : {
            formReviewId: "",
            productId: "",
            nationalCode: "",
            policyId: "",
            provinceId: "",
            countyId: "",
            districtId: "",
            ruralDistrictId: "",
            placeId: ""
        }
        try {
            const res = await useAxiosWithToken.post("/sabka/technical/annex/search/locate-reviews", params);
            await clearStore()
            await saveToDataBase(res.data);
            setHasFetched(true)
            loadList(1)
        } catch (error: any) {
            toastError(error.response.data.message)
        } finally {
            setLoading(false);
        }
    };
    async function loadList(pageNumber: number) {
        const { data, totalPages } =
            await getPaginatedDataFromIDB<Comment>(
                'myDatabase',
                'locateReviews',
                pageNumber,
                10
            );
        setData(data)
        setTotalPage(totalPages)
    }
    useEffect(() => {
        getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams])

    useEffect(() => {
        if (hasFetched) {
            loadList(currentPage)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])
    return {
        data,
        loading,
        currentPage,
        setCurrentPage,
        totalPage, setSearchParams
    }
}
export default useTechnicalAttachment