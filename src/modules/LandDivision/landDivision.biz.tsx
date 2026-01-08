import { hasKeyInObj, JSONStringToObject } from '@/utils/global'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

//
// ──────────────────────────────────────────────────────────────
//   :::::: B U S I N E S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//
const useLandDivision = () => {
    const [searchParams] = useSearchParams()
    const rawExtraInfo = searchParams.get("rawExtraInfo")
    const rowExtraInfoObj = rawExtraInfo && JSONStringToObject(rawExtraInfo)
    useEffect(() => {
        hasKeyInObj(rowExtraInfoObj, "F126")
    }, [])
    return {
        rowExtraInfoObj
    }
}
export default useLandDivision