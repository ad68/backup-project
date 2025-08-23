import { useAxiosWithToken, useAxiosWithTokenFormUrlEncoded } from '@/hooks'
import { useEffect, useState } from 'react'
import type { SendGroupSmsFilter } from '../../sendGroupSms.types'

import { toastError } from '@/components/kit/toast'
type filterProp = {
    filter: SendGroupSmsFilter,
    clearFilter: () => void,
    setIsOpen: (value: boolean) => void,
    getList: () => void,
    updateFilter: (key: keyof SendGroupSmsFilter, value: string) => void
}
const useFilter = ({ filter, clearFilter, setIsOpen, getList, updateFilter }: filterProp) => {
    const [provinces, setProvinces] = useState([])
    const [counties, setCounties] = useState([])
    const [districts, setDistricts] = useState<any>([])
    const [ruralDistricts, setRuralDistricts] = useState<any>([])
    const [places, setPlaces] = useState<any>([])
    const getProvinceList = () => {
        useAxiosWithTokenFormUrlEncoded.post("/sabka/admin-levels/get/provinces")
            .then(res => setProvinces(res.data))
            .catch(console.error)
    }
    const getCounties = () => {
        const params = { provinceId: filter.provinceId }
        useAxiosWithToken.post("/sabka/admin-levels/get/counties", params)
            .then(res => setCounties(res.data))
            .catch(console.error)
    }
    const getDistricts = () => {
        const params = { provinceId: filter.provinceId, countyId: filter.countyId }
        useAxiosWithToken.post("/sabka/admin-levels/get/districts", params)
            .then(res => setDistricts(res.data))
            .catch(console.error)
    }
    const getRuralDistricts = () => {
        const params = { provinceId: filter.provinceId, countyId: filter.countyId, districtId: filter.districtId }
        useAxiosWithToken.post("/sabka/admin-levels/get/rural-districts", params)
            .then(res => setRuralDistricts(res.data))
            .catch(console.error)
    }
    const getPlaces = () => {
        const params = {
            provinceId: filter.provinceId,
            countyId: filter.countyId,
            districtId: filter.districtId,
            ruralDistrictId: filter.ruralDistrictId
        }
        useAxiosWithToken.post("/sabka/admin-levels/get/places", params)
            .then(res => setPlaces(res.data))
            .catch(console.error)
    }
    const clearForm = () => {
        clearFilter()
        setCounties([])
        setDistricts([])
        setRuralDistricts([])
        setPlaces([])
    }
    useEffect(() => {
        getProvinceList()
    }, [])
    useEffect(() => {
        if (filter.provinceId) {
            getCounties()
        } else {
            setCounties([])
            updateFilter("countyId", "")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.provinceId])

    useEffect(() => {
        if (filter.countyId) {
            getDistricts()
        } else {
            setDistricts([])
            updateFilter("districtId", "")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.countyId])

    useEffect(() => {
        if (filter.districtId) {
            getRuralDistricts()
        } else {
            setRuralDistricts([])
            updateFilter("ruralDistrictId", "")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.districtId])
    useEffect(() => {
        if (filter.ruralDistrictId) {
            getPlaces()
        } else {
            setPlaces([])
            updateFilter("placeId", "")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.ruralDistrictId])
    const search = () => {
        if (filter.provinceId && filter.countyId && filter.districtId && filter.placeId && filter.ruralDistrictId) {
            getList()
            setIsOpen(false)
        }
        else {
            toastError("لطفا تمام فیلدها را پر کنید")
        }
    }
    return {
        provinces,
        counties,
        districts,
        ruralDistricts,
        places,
        clearForm,
        search
    }
}
export default useFilter
