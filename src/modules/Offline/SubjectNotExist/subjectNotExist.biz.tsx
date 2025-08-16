import { toastSuccess } from "@/components/kit/toast"

import { getRecordById, initOfflineDb, updateRecordInDb } from "@/lib/indexdb"
import { useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import type { OfflineReview } from "../LocationReviews/locationReviews.types"
import { STORES } from "@/constants/dbEnums"

const useSubjectNotExist = () => {
    const navigation = useNavigate()
    const { id } = useParams()

    const [currentReview, setCurrentReview] = useState<any>()
    const [subjectNotExist, setSubjectNotExist] = useState(false)
    const [searchParams] = useSearchParams();
    const virtualId = searchParams.get("virtualId")
    const policyItemId = searchParams.get("policyItemId")
    const subjectNotExistQuery = searchParams.get("subjectNotExist")
    const reviewId = searchParams.get("reviewId")
    const subjectId = searchParams.get("subjectId")
    const policyId = searchParams.get("subjectId")
    const farmerName = searchParams.get("farmerName")
    const getById = async () => {
        const db = await initOfflineDb();
        const review: OfflineReview = await getRecordById(db, STORES.Reviews, id ? Number(id) : 0);
        console.log(review)
        setCurrentReview(review)
    }
    const saveData = async () => {
        let currentRecord = currentReview;
        let arr = currentReview?.locateReviews.policy.policyItems
        if (arr) {
            let recordIndex
            if (policyItemId !== "null") {
                recordIndex = arr.findIndex((el: any) => el.policyItemId == policyItemId);
            }
            else if (virtualId !== "null") {
                recordIndex = arr.findIndex((el: any) => el.virtualId === virtualId);
            }
            arr[recordIndex].subjectNotExist = subjectNotExist
        }
        if (currentRecord) {
            currentRecord.edited = true;
            currentRecord.locateReviews.policy.policyItems = arr
            console.log("currentRecord", currentRecord)
        }
        ///update record
        const db = await initOfflineDb();
        const task = await updateRecordInDb(db, STORES.Reviews, currentRecord);
        console.log(task);
        toastSuccess("با موفقیت ثبت شد")
        navigation(`/offline/locate-reviews/${id}?reviewId=${reviewId}&policyId=${policyId}&subjectId=${subjectId}&farmerName=${farmerName}`)
    }
    useEffect(() => {
        setSubjectNotExist(subjectNotExistQuery === "true" ? true : false)
    }, [searchParams])
    useEffect(() => {
        getById()
    }, [])

    return {
        saveData,
        subjectNotExist,
        setSubjectNotExist
    }
}


export default useSubjectNotExist