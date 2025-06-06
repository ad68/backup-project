import { useAxiosWithToken } from '@/hooks'
import { useEffect, useState } from 'react'

const useFilter = (setSearchParams: (value: any) => void) => {
    const [provinces, setProvinces] = useState([])
    const [provinceId, setProvinceId] = useState<any>("")
    const [counties, setCounties] = useState([])
    const [countyId, setCountyId] = useState<any>("")
    const [districts, setDistricts] = useState<any>([])
    const [districtId, setDistrictId] = useState<any>("")
    const [formReviewId, setFormReviewId] = useState<string>("")
    const [productId, setProductId] = useState<string>("")
    const [nationalCode, setNationalCode] = useState<string>("")
    const [policyId, setPolicyId] = useState<string>("")
    const [ruralDistricts, setRuralDistricts] = useState<any>([])
    const [ruralDistrictId, setRuralDistrictId] = useState("")
    const [places, setPlaces] = useState<any>([])
    const [placeId, setPlaceId] = useState("")
    const getProvinceList = () => {
        useAxiosWithToken.post("/sabka/provinces").then(res => {
            setProvinces(res.data)
        }).catch()
    }
    const getCounties = () => {
        const params = { provinceId: provinceId }
        useAxiosWithToken.post("/sabkaC/counties", params).then(res => {
            setCounties(res.data)
        }).catch()
    }
    const getDistricts = () => {
        const params = { provinceId: provinceId, countyId: countyId }
        useAxiosWithToken.post("/sabkaD/districts", params).then(res => {
            setDistricts(res.data)
        }).catch()
    }
    const getRuralDistricts = () => {
        const params = { provinceId: provinceId, countyId: countyId, districtId: districtId }
        useAxiosWithToken.post("/sabkaR/rural-districts", params).then(res => {
            setRuralDistricts(res.data)
        }).catch()
    }
    const getPlaces = () => {
        const params = { provinceId: provinceId, countyId: countyId, ruralDistrictId: ruralDistrictId, districtId: districtId }
        useAxiosWithToken.post("/sabkaP/places", params).then(res => {
            setPlaces(res.data)
        }).catch()
    }
    const clearForm = () => {
        setProvinces([])
        setProvinceId("")
        setCounties([])
        setCountyId("")
        setDistricts([])
        setDistrictId("")
        setFormReviewId("")
        setProductId("")
        setNationalCode("")
        setPolicyId("")
        setRuralDistricts([])
        setRuralDistrictId("")
        setPlaces([])
        setPlaceId("")
    }
    useEffect(() => {
        getProvinceList()
    }, [])
    useEffect(() => {
        setCountyId("")
        setDistrictId("")
        setRuralDistrictId("")
        setPlaceId("")
        if (provinceId) {
            getCounties()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [provinceId])
    useEffect(() => {
        setDistrictId("")
        setRuralDistrictId("")
        setPlaceId("")
        if (countyId) {
            getDistricts()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countyId])
    useEffect(() => {
        setRuralDistrictId("")
        if (districtId) {
            getRuralDistricts()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [districtId])
    useEffect(() => {
        setPlaceId("")
        if (ruralDistrictId) {
            getPlaces()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ruralDistrictId])
    const searchList = () => {
        const params = {
            formReviewId: formReviewId,
            productId: productId,
            nationalCode: nationalCode,
            policyId: policyId,
            provinceId: provinceId,
            countyId: countyId,
            districtId: districtId,
            ruralDistrictId: ruralDistrictId,
            placeId: placeId
        }
        setSearchParams(params)
    }
    return {
        provinces,
        setProvinceId,
        provinceId,
        counties,
        setCountyId,
        countyId,
        districts,
        setDistrictId,
        districtId,
        searchList,
        ruralDistricts,
        ruralDistrictId,
        setRuralDistrictId,
        places,
        setPlaceId,
        placeId,
        policyId,
        setPolicyId,
        formReviewId,
        setFormReviewId,
        nationalCode,
        setNationalCode,
        productId,
        setProductId,
        clearForm
    }
}
export default useFilter