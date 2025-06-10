import { useAxiosWithToken } from "@/hooks";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
const useInsuranceLocation = () => {
    const [isOpenDtl, setIsOpenDtl] = useState<boolean>(false)
    const [isOpenDtl1, setIsOpenDtl1] = useState<boolean>(false)
    const [fetchLoading, setFetchLoading] = useState<boolean>(false)
    const [actionLoading, setActionLoading] = useState<boolean>(false)
    const [featureData, setFeatureData] = useState<any>()
    const [subjectNotExist, setSubjectNotExist] = useState<boolean>(false)
    const [geoInWkt, setGeoInWkt] = useState("")
    const [searchParams] = useSearchParams();
    const reviewId = searchParams.get("reviewId")
    const policyId = searchParams.get("policyId")
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
    const locateSubjectItem = () => {
        setActionLoading(true)
        const params = {
            reviewId: reviewId && parseInt(reviewId),
            policyId: policyId && parseInt(policyId),
            subjectItemId: subjectId && parseInt(subjectId),
            subjectNotExist: subjectNotExist,
            geoInWkt: geoInWkt
        }
        useAxiosWithToken.post("/sabka/technical/annex/add/locate-subject-item", params).finally(() => { setActionLoading(false) })
    }
    useEffect(() => {
        getFeatureInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        isOpenDtl, setGeoInWkt, isOpenDtl1, setIsOpenDtl, setIsOpenDtl1, isAddPolygonModalOpen, setIsAddPolygonModalOpen, setSubjectNotExist, reviewId, subjectId, featureId, fetchLoading, featureData, locateSubjectItem, actionLoading
    }
}
export default useInsuranceLocation