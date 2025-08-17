import { STORES } from "@/constants/dbEnums";
import { clearAndUpdateReviewStore, deleteRecordFromDb, getAllRecord, initOfflineDb } from "@/lib/indexdb";
import { useEffect, useState } from "react";
import type { OfflineReview } from "./locationReviews.types";
import { useAxios } from "@/hooks";
import { useAuthStore } from "@/store/authStore";
import { toastError, toastSuccess } from "@/components/kit/toast";

const useLocationReviews = () => {
    const [list, setList] = useState<Array<OfflineReview>>([])
    const [actionLoading, setActionLoading] = useState(false)
    const { setToken, token } = useAuthStore()
    const getAllData = async () => {
        const db = await initOfflineDb()
        try {
            const list = await getAllRecord(db, STORES.Reviews);
            setList(list)
        }
        catch (err: unknown) {
            console.log(err)
        }
    }
    const syncData = () => {
        setActionLoading(true)
        let data = [...list]
        data.forEach((_, index) => {
            data[index].token = token
        });
        useAxios.post("/sabka/technical/annex/sync/offline-annexes", data).then(async (res) => {
            if (res.data[0].policyId === null) {
                setToken("Bearer " + res.data[0].token)
                await clearAndUpdateReviewStore([])
            }
            else {
                setToken("Bearer " + res.data[0].token)
                await clearAndUpdateReviewStore(res.data)
            }
            getAllData()

        }).finally(() => setActionLoading(false))
    }
    const clearReviewsFromIdb = async (id: any) => {
        const db = await initOfflineDb();
        try {
            await deleteRecordFromDb(db, STORES.Reviews, id);
            getAllData()
            toastSuccess("حذف شد");
        } catch (err) {
            console.error(err);
            toastError("خطا در حذف رکورد");
        }
    }
    const clearOfflineReviews = (id: any) => {
        const question = confirm("آیا از حذف پرونده مطمئن هستید؟")
        if (question) {
            useAxios.post("/sabka/technical/annex/remove/offline-list", [id])
                .then((res) => {
                    clearReviewsFromIdb(res.data[0].id)
                })
                .finally()
        }
    }
    useEffect(() => {
        getAllData()
    }, [])

    return {
        list,
        syncData,
        actionLoading,
        clearOfflineReviews
    }
}
export default useLocationReviews