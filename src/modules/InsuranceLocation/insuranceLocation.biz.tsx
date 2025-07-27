import { toastSuccess } from "@/components/kit/toast";
import { useAxiosWithToken } from "@/hooks";
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
const useInsuranceLocation = () => {
    const navigate = useNavigate();
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
    const subjectItemId = searchParams.get("subjectItemId")
    const featureId = searchParams.get("featureId")
    const farmLat = searchParams.get("lat")
    const farmLng = searchParams.get("lng")
    const [isAddPolygonModalOpen, setIsAddPolygonModalOpen] = useState<boolean>(false)
    const getFeatureInfo = () => {
        setFetchLoading(true)
        const params = {
            reviewId: reviewId,
            subjectId: subjectId,
            featureId: featureId === "null" ? null : featureId
        }
        useAxiosWithToken.post("/sabka/technical/annex/get/feature", params).then(res => {
            setFeatureData(res.data.wkt)
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
    const saveMapPolygon = () => {
        const params = {
            reviewId: reviewId,
            policyId: policyId,
            subjectItemId: subjectItemId,
            subjectNotExist: subjectNotExist,
            geoInWkt: geoInWkt,

        }
        setActionLoading(true)
        useAxiosWithToken.post("/sabka/technical/annex/add/locate-subject-item", params).then(() => {
            navigate(-1)
            toastSuccess("عملیات با موفقیت اانجام شد")
        }).catch().finally(() => setActionLoading(false))
    }

    useEffect(() => {
        if (featureId && featureId !== "null") {
            getFeatureInfo()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        isOpenDtl, setGeoInWkt, isOpenDtl1, setIsOpenDtl, setIsOpenDtl1, isAddPolygonModalOpen, setIsAddPolygonModalOpen, setSubjectNotExist, reviewId, subjectId, featureId, fetchLoading, featureData, locateSubjectItem, actionLoading, saveMapPolygon, farmLat, farmLng
    }
}
export default useInsuranceLocation