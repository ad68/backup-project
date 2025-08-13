import { toastError, toastSuccess } from "@/components/kit/toast"
import { STORES } from "@/constants/dbEnums"
import { useAxiosWithToken } from "@/hooks"
import { addRecordToDb, initOfflineDb } from "@/lib/indexdb"
import { useAuthStore } from "@/store/authStore"

import { useState } from "react"


const useCard = () => {
    const { userInfo } = useAuthStore()
    const [actionLoading, setActionLoading] = useState<boolean>(false)
    const addReviewToOfflineListIndexDb = async (items: any) => {
        const db = await initOfflineDb()
        await db.clear(String(STORES.Reviews))
        try {
            for (const item of items) {
                await addRecordToDb(db, STORES.Reviews, item);
            }
            toastSuccess('با موفقیت به لیست آفلاین افزوده شد')
        }
        catch (err: unknown) {
            console.log("errrrr", err)
            toastError("رکورد تکراری است")
        }
    }
    const addReviewToOfflineList = (item: any) => {
        setActionLoading(true)
        let params = {
            policyId: item.policyId,
            userName: userInfo?.username
        }
        useAxiosWithToken.post('/sabka/technical/annex/add/offline-list', params).then((res) => {
            addReviewToOfflineListIndexDb(res.data)
        }).finally(() => { setActionLoading(false) })
    }
    return {
        addReviewToOfflineList,
        actionLoading
    }
}
export default useCard