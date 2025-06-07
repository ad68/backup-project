import { useState } from "react"
const useDocument = () => {
    const [isAddDocumentModal, setIsAddDocumentModal] = useState<boolean>(false)
    return {
        isAddDocumentModal,
        setIsAddDocumentModal
    }
}
export default useDocument