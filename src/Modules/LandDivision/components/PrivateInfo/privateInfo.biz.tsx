import { useState } from "react"

const usePrivateInfo = () => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
    return {
        isInfoModalOpen, setIsInfoModalOpen
    }
}
export default usePrivateInfo