import { toastSuccess } from "@/components/kit/toast"
import { useAxiosWithToken } from "@/hooks"
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const useSubjectNotExist = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [actionLoading, setActionLoading] = useState(false)
    const reviewId = searchParams.get("reviewId")
    const subjectItemId = searchParams.get("subjectItemId")
    const policyId = searchParams.get("policyId")
    const saveData = () => {
        const params = {
            reviewId: reviewId,
            policyId: policyId,
            subjectItemId: subjectItemId,
            subjectNotExist: true,
            /*  isTest: true, */
            /*   geoInWkt: "", */
        }
        setActionLoading(true)
        const question = confirm("آیا مطمئن هستید؟")
        if (question) {
            useAxiosWithToken.post("/sabka/technical/annex/add/locate-subject-item", params).then(() => {
                navigate(-1)
                toastSuccess("عملیات با موفقیت اانجام شد")
            }).catch().finally(() => setActionLoading(false))
        }

    }
    return {
        saveData, actionLoading
    }
}


export default useSubjectNotExist