import { toastSuccess } from "@/components/kit/toast"
import { useAxiosWithToken } from "@/hooks"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const useResult = () => {
    const [searchParams] = useSearchParams()
    const reviewId = searchParams.get("reviewId")
    const subjectId = searchParams.get("subjectId")
    const [selectedResult, setSelectedResult] = useState("1")
    const [actionLoading, setActionLoading] = useState(false)
    const resultOptions = [
        { label: "تعیین مکان انجام شد", value: "1" },

    ]
    const locateResult = () => {
        const params = {
            reviewId,
            subjectId,

        }
        useAxiosWithToken.post("/sabka/technical/annex/add/locate-result", params).then(() => {
            toastSuccess("عملیات با موفقیت انجام شد")
        }).finally(() => setActionLoading(false))
    }

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
    return {
        isInfoModalOpen, setIsInfoModalOpen, resultOptions, selectedResult, setSelectedResult, actionLoading, locateResult
    }
}
export default useResult