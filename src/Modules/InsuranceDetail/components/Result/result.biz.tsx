import { useState } from "react"

const useResult = () => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
    return {
        isInfoModalOpen, setIsInfoModalOpen
    }
}
export default useResult