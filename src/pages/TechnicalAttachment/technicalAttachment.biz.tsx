import { useAxiosWithToken } from "@/hooks"
import { bulkSaveToIDB, getPaginatedDataFromIDB } from "@/lib/indexdb"
import { useEffect, useState } from "react"

const useTechnicalAttachment = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [hasFetched, setHasFetched] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)
    const saveToDataBase = async (data: any) => {
        await bulkSaveToIDB(data);
    };
    const getList = async () => {
        setLoading(true);
        const params = {
            formReviewId: "",
            productId: "",
            nationalCode: "",
            policyId: "",
            provinceId: "",
            countyId: "",
            districtId: "",
            ruralDistrictId: "",
            placeId: ""
        };
        try {
            const res = await useAxiosWithToken.post("/sabka/technical/annex/search/locate-reviews", params);
            await saveToDataBase(res.data);
            setHasFetched(true)
            loadList(currentPage);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    async function loadList(pageNumber: number) {
        const { data, totalPages, totalItems } =
            await getPaginatedDataFromIDB<Comment>(
                'myDatabase',
                'locateReviews',
                pageNumber,
                10
            );
        setData(data)
        setTotalPage(totalPages)
        console.log("totalItems", totalItems)
    }
    useEffect(() => {
        getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
        totalPage
    }
}
export default useTechnicalAttachment