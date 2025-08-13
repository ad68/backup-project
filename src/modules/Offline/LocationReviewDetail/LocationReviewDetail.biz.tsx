import { STORES } from "@/constants/dbEnums";
import { getRecordById, initOfflineDb } from "@/lib/indexdb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { OfflineReview } from "../LocationReviews/locationReviews.types";

const useLocationReviewDetail = () => {
    const { id } = useParams()
    const [policyList, setPolicyList] = useState<Array<any>>([])
    const getById = async () => {
        const db = await initOfflineDb();
        const Review: OfflineReview = await getRecordById(db, STORES.Reviews, id ? Number(id) : 0);
        setPolicyList(Review.locateReviews.policy.policyItems)
        /* console.log("Review", Review.locateReviews.policy.policyItems) */
    }
    useEffect(() => {
        getById()
    }, [])
    useEffect(() => {
        console.log(policyList)
    }, [policyList])

    return {
        policyList,

    }
}
export default useLocationReviewDetail