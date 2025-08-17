import { useEffect, useState } from "react"
import { getAllRecord, initDB, initOfflineDb } from "./lib/indexdb"

import { registerSW } from "virtual:pwa-register"
import { STORES } from "./constants/dbEnums"

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
            }
            else if (today < expireDate) {
                console.log("not expired")
            }
            else if (today === expireDate) {
                console.log("equal not expired")
            }
        }
    }, [reviewExpireDate])
    useEffect(() => {
        initDB()
        initOfflineDb()
        getAllData()

    }, [])
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
        updateFn, setNeedRefresh
    }
}
export default useApp