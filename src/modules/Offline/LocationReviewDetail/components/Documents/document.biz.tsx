import { useAxiosWithToken } from "@/hooks"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
const useDocument = () => {
    const [searchParams] = useSearchParams()
    const [isAddDocumentModal, setIsAddDocumentModal] = useState<boolean>(false)
    const [takePhotoModalIsOpen, setTakePhotoModalIsOpen] = useState<boolean>(false)
    const [data, setData] = useState([])
    const [actionLoading, setActionLoading] = useState(false)
    const reviewId = searchParams.get("reviewId")
    const subjectId = searchParams.get("subjectId")
    const getFileList = () => {
        const params = {
            reviewId: Number(reviewId),
            subjectId: Number(subjectId)
        }


    }


    const deleteFile = (id: any) => {


    }
    useEffect(() => {
        getFileList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        isAddDocumentModal,
        setIsAddDocumentModal,
        takePhotoModalIsOpen,
        setTakePhotoModalIsOpen,
        data,
        actionLoading,

        deleteFile,
        getFileList
    }
}
export default useDocument