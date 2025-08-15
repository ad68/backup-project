import { STORES } from "@/constants/dbEnums";
import { clearAndUpdateReviewStore, getAllRecord, initOfflineDb } from "@/lib/indexdb";
import { useEffect, useState } from "react";
import type { OfflineReview } from "./locationReviews.types";
import { useAxios } from "@/hooks";

const useLocationReviews = () => {
    const [list, setList] = useState<Array<OfflineReview>>([])
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
        let data = [...list]
        useAxios.post("/sabka/technical/annex/sync/offline-annexes", data).then(async (res) => {
            await clearAndUpdateReviewStore(res.data)
            getAllData()

        }).finally()
    }
    useEffect(() => {
        getAllData()
    }, [])

    return {
        list,
        syncData
    }
}
export default useLocationReviews