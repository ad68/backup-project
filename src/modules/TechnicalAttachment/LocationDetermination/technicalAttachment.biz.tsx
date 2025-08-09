import { toastError } from "@/components/kit/toast"
import { useAxiosWithToken } from "@/hooks"
import { bulkSaveToIDB, clearStore, getPaginatedDataFromIDB } from "@/lib/indexdb"
import { useLocationDeterminationStore } from "@/store/locationDeterminationStore"
import { useEffect, useState } from "react"
const useCheckSpecifications = () => {
    const { filter } = useLocationDeterminationStore()
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [hasFetched, setHasFetched] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(1)
    const [smsModalIsOpen, setSmsModalIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState()
    const saveToDataBase = async (data: any) => {
        await bulkSaveToIDB(data);
    };


    const showSmsModal = (value: any) => {
        setSelectedItem(value)
        setSmsModalIsOpen(true)
    }
    const closeSmsModal = () => {
        setSelectedItem(undefined)
        setSmsModalIsOpen(false)
    }
    const getList = async () => {
        setLoading(true);
        /*  if (searchParams) {
             setParams(searchParams)
         } */
        /*  const data = filter ? filter : {
             formReviewId: "",
             productId: "",
             nationalCode: "",
             policyId: "",
             provinceId: "",
             countyId: "",
             districtId: "",
             ruralDistrictId: "",
             placeId: ""
         } */
        const data = filter

        try {
            const res = await useAxiosWithToken.post("/sabka/technical/annex/search/locate-reviews", data);
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
        getList,
        setCurrentPage,
        totalPage, showSmsModal, closeSmsModal, smsModalIsOpen, selectedItem
    }
}
export default useCheckSpecifications