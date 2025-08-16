import { useAxiosWithToken, useAxiosWithTokenFormUrlEncoded } from '@/hooks'
import { useEffect, useState } from 'react'
import { useLocationDeterminationStore } from '@/store/locationDeterminationStore';

const useFilter = () => {
    const { filter, updateFilter, clearParams } = useLocationDeterminationStore();
    const [provinces, setProvinces] = useState([])
    const [counties, setCounties] = useState([])
    const [districts, setDistricts] = useState<any>([])
    const [products, setProducts] = useState<any>([])
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
    const getProducts = () => {
        const params = { subSectionId: parseInt(filter.subSectionId) }
        useAxiosWithToken.post("/sabka/plans/get/products", params)
            .then(res => setProducts(res.data))
            .catch(console.error)
    }

    const clearForm = () => {
        updateFilter("provinceId", "")
        updateFilter("keyword", "")
        setCounties([])
        updateFilter("countyId", "")
        setDistricts([])
        updateFilter("districtId", "")
        updateFilter("formReviewId", "")
        updateFilter("productId", "")
        updateFilter("nationalCode", "")
        updateFilter("policyId", "")
        setRuralDistricts([])
        updateFilter("ruralDistrictId", "")
        setPlaces([])
        updateFilter("placeId", "")
        clearParams()
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

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.subSectionId])


    return {
        provinces,
        counties,
        districts,
        ruralDistricts,
        places,
        products,
        clearForm,
        updateFilter,
        filter
    }
}
export default useFilter
