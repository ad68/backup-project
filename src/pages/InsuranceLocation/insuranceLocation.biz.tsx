import { useAxiosWithToken } from "@/hooks";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
const useInsuranceLocation = () => {
    const [isOpenDtl, setIsOpenDtl] = useState<boolean>(false)
    const [isOpenDtl1, setIsOpenDtl1] = useState<boolean>(false)
    const [fetchLoading, setFetchLoading] = useState<boolean>(false)
    const [featureData, setFeatureData] = useState<any>()
    const [searchParams] = useSearchParams();
    const reviewId = searchParams.get("reviewId")
    const subjectId = searchParams.get("subjectId")
    const featureId = searchParams.get("featureId")
    const [isAddPolygonModalOpen, setIsAddPolygonModalOpen] = useState<boolean>(false)
    const getFeatureInfo = () => {
        setFetchLoading(true)
        const params = {
            reviewId: reviewId,
            subjectId: subjectId,
            featureId: featureId === "null" ? null : featureId
        }
        useAxiosWithToken.post("/sabka/technical/annex/get/feature", params).then(res => {
            setFeatureData(res.data)
        }).finally(() => setFetchLoading(false))
    }
    useEffect(() => {
        getFeatureInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        isOpenDtl, isOpenDtl1, setIsOpenDtl, setIsOpenDtl1, isAddPolygonModalOpen, setIsAddPolygonModalOpen, reviewId, subjectId, featureId, fetchLoading, featureData
    }
}
export default useInsuranceLocation