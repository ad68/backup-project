import { useState } from "react"
const useDocument = () => {
    const [isAddDocumentModal, setIsAddDocumentModal] = useState<boolean>(false)
    const [takePhotoModalIsOpen, setTakePhotoModalIsOpen] = useState<boolean>(false)
    return {
        isAddDocumentModal,
        setIsAddDocumentModal,
        takePhotoModalIsOpen,
        setTakePhotoModalIsOpen
    }
}
export default useDocument