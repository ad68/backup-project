import { STORES } from "@/constants/dbEnums";
import { clearAndUpdateReviewStore, getAllRecord, initOfflineDb } from "@/lib/indexdb";
import { useEffect, useState } from "react";
import type { OfflineReview } from "./locationReviews.types";
import { useAxios } from "@/hooks";
import { useAuthStore } from "@/store/authStore";

const useLocationReviews = () => {
    const [list, setList] = useState<Array<OfflineReview>>([])
    const [actionLoading, setActionLoading] = useState(false)
    const { setToken } = useAuthStore()
    const getAllData = async () => {
        const db = await initOfflineDb()
        try {
            const list = await getAllRecord(db, STORES.Reviews);
            setList(list)
        }
        catch (err: unknown) {
            console.log(err)
        }
    }
    const syncData = () => {
        setActionLoading(true)
        let data = [...list]
        useAxios.post("/sabka/technical/annex/sync/offline-annexes", data).then(async (res) => {
            if (res.data[0].policyId === null) {
                setToken("Bearer " + res.data[0].token)
                await clearAndUpdateReviewStore([])
            }
            else {
                setToken("Bearer " + res.data[0].token)
                await clearAndUpdateReviewStore(res.data)
            }
            getAllData()

        }).finally(() => setActionLoading(false))
    }
    useEffect(() => {
        getAllData()
    }, [])

    return {
        list,
        syncData,
        actionLoading,

    }
}
export default useLocationReviews