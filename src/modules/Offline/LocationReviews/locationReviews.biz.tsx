import { STORES } from "@/constants/dbEnums";
import { getAllRecord, initOfflineDb } from "@/lib/indexdb";
import { useEffect, useState } from "react";
import type { OfflineReview } from "./locationReviews.types";

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
    useEffect(() => {
        getAllData()
    }, [])
    useEffect(() => {
        console.log("list", list)
    }, [list])
    return {
        list
    }
}
export default useLocationReviews