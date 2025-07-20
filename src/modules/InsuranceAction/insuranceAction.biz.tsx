import { useState } from "react"
const useInsuranceAction = () => {
    const [isOpenDtl, setIsOpenDtl] = useState<boolean>(false)
    const [isOpenDtl1, setIsOpenDtl1] = useState<boolean>(false)
    const [isAddPolygonModalOpen, setIsAddPolygonModalOpen] = useState<boolean>(false)
    return {
        isOpenDtl, isOpenDtl1, setIsOpenDtl, setIsOpenDtl1, isAddPolygonModalOpen, setIsAddPolygonModalOpen
    }
}
export default useInsuranceAction