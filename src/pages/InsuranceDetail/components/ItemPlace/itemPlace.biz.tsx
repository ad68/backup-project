import { useState } from "react"

const useItemPlace = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    return {
        isModalOpen,
        setIsModalOpen
    }
}
export default useItemPlace