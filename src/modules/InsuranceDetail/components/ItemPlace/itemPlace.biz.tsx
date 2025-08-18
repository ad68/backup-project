import { useAxiosWithToken } from "@/hooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { PolicyItem } from "../../insuranceDetail.types";


const useItemPlace = () => {
    const [searchParams] = useSearchParams();
    const reviewId = searchParams.get("reviewId")
    const policyId = searchParams.get("policyId")
    const [data, setData] = useState<Array<PolicyItem>>()
    const [loading, setLoading] = useState(false)
    const getList = () => {
        setLoading(true)
        const params = {
            reviewId,
            policyId
        }
        useAxiosWithToken.post("/sabka/technical/annex/get/policy", params)
            .then((res) => {
                setLoading(false)
                setData(res.data.policyItems)
            })
            .catch(() => {
                setLoading(false)
            })
    }
    useEffect(() => {
        getList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        data,
        loading
    }

}
export default useItemPlace