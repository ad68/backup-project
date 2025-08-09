import { toastError, toastSuccess } from "@/components/kit/toast"
import { STORES } from "@/constants/dbEnums"
import { useAxiosWithToken } from "@/hooks"
import { addRecordToDb, initOfflineDb } from "@/lib/indexdb"
import { useAuthStore } from "@/store/authStore"

const useCard = () => {
    const { userInfo } = useAuthStore()
    const addReviewToOfflineList = (item: any) => {
        let params = {
            policyId: item.policyId,
            userName: userInfo?.username
        }
        useAxiosWithToken.post('/sabka/technical/annex/add/offline-list', params).then((res) => {
            addReviewToOfflineListIndexDb(res.data)
        })
    }
    const addReviewToOfflineListIndexDb = async (item: any) => {
        const db = await initOfflineDb()
        try {
            await addRecordToDb(db, STORES.Reviews, item);
            /*  toastSuccess(`ID کاربر جدید: ${newUserId}`) */
            toastSuccess('با موفقیت به لیست آفلاین افزوده شد')
        }
        catch (err: unknown) {
            console.log("errrrr", err)
            toastError("رکورد تکراری است")
        }
    }
    return {
        addReviewToOfflineList
    }
}
export default useCard