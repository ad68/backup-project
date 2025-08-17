import { useEffect, useState } from "react"
import { getAllRecord, initOfflineDb } from "./lib/indexdb"
import { registerSW } from "virtual:pwa-register"
import { STORES } from "./constants/dbEnums"
import { useAxios } from "./hooks"
const useApp = () => {
    const [needRefresh, setNeedRefresh] = useState(false)
    const [updateFn, setUpdateFn] = useState<null | (() => void)>(null)
    const [offlineReviews, setOfflineReviews] = useState<any>([])
    const [reviewExpireDate, setReviewExpireDate] = useState<any>()
    const getAllData = async () => {
        const db = await initOfflineDb()
        try {
            const list = await getAllRecord(db, STORES.Reviews);
            setOfflineReviews(list)
        }
        catch (err: unknown) {
            console.log(err)
        }
    }
    useEffect(() => {

        if (offlineReviews?.length > 0) {
            setReviewExpireDate(offlineReviews[0].expireDate)
        }
    }, [offlineReviews])
    const clearReviewsFromIdb = async () => {
        const db = await initOfflineDb();
        try {
            await db.clear(String(STORES.Reviews))
            /*   getAllData() */

        } catch (err) {
            console.error(err);

        }
    }
    const clearOfflineReviews = () => {
        let reviewIds = offlineReviews.map((item: any) => { return item.id })
        console.log("reviewIds", reviewIds)
        useAxios.post("/sabka/technical/annex/remove/offline-list", reviewIds)
            .then(() => {
                clearReviewsFromIdb()
            })
            .finally()
    }
    useEffect(() => {
        if (reviewExpireDate) {
            const expireDate = new Date(reviewExpireDate)
            const today = new Date()
            expireDate.setHours(0, 0, 0, 0)
            today.setHours(0, 0, 0, 0)
            console.log("today", today)
            console.log("expireDate", expireDate)
            if (today > expireDate) {
                console.log("expired")
                clearOfflineReviews()
            }
            else if (today < expireDate) {
                console.log("not expired")

            }
            else if (today === expireDate) {
                console.log("equal not expired")
                clearOfflineReviews()
            }
        }
    }, [reviewExpireDate])

    useEffect(() => {
        const updateSW = registerSW({
            onNeedRefresh() {
                setNeedRefresh(true)
                setUpdateFn(() => () => updateSW(true))
            },
            onOfflineReady() {
                console.log('اپ آماده استفاده آفلاینه')
            },
        })
    }, [])
    return {
        needRefresh,
        updateFn, setNeedRefresh, getAllData
    }
}
export default useApp