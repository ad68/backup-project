import { STORES } from "@/constants/dbEnums";
import { getRecordById, initOfflineDb } from "@/lib/indexdb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { OfflineReview, PlaceModel } from "../../../LocationReviews/locationReviews.types";

const useItemPlace = () => {
    const { id } = useParams()
    const [policyList, setPolicyList] = useState<Array<any>>([])
    const [placeModel, setPlaceModel] = useState<PlaceModel>({ latitude: 0, longitude: 0, title: "" })
    const getById = async () => {
        const db = await initOfflineDb();
        const Review: OfflineReview = await getRecordById(db, STORES.Reviews, id ? Number(id) : 0);
        setPolicyList(Review.locateReviews.policy.policyItems)
        setPlaceModel(Review.locateReviews.policy.placeModel)
        /* console.log("Review", Review.locateReviews.policy.policyItems) */
    }
    useEffect(() => {
        getById()
    }, [])
    return {
        policyList,
        placeModel,

    }
}
export default useItemPlace