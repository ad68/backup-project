import { toastError } from "@/components/kit/toast"
import { useAxiosWithToken } from "@/hooks"
import { bulkSaveToIDB, clearStore, getPaginatedDataFromIDB, searchByIndex } from "@/lib/indexdb"
import { useEffect, useState } from "react"

const useCheckSpecifications = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [hasFetched, setHasFetched] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [searchParams, setSearchParams] = useState<any>()
    const saveToDataBase = async (data: any) => {
        await bulkSaveToIDB(data);
    };
    const getSearch = async () => {
        const result = await searchByIndex<any>(
            'myDatabase',
            'locateReviews',
            'policyId_beneficiary',
            [23655276, "ناصر نوروزی"]
        );
        console.log(result)
    }
    useEffect(() => {
        setTimeout(() => {
            getSearch()
        }, 6000);
    }, [])
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
            const aaa = [...res.data]
            await clearStore()
            await saveToDataBase(aaa);
            setHasFetched(true)
            setTimeout(() => {
                setLoading(false)
            }, 100);

            loadList(1)
        } catch (error: any) {
            setLoading(false)
            toastError(error.response.data.message)
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
export default useCheckSpecifications