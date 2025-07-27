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
        setActionLoading(true)
        useAxiosWithToken.post('/sabka/technical/annex/get/subject-file', params).then((res) => {

            setData(res.data)
        }).finally(() => { setActionLoading(false) })
    }
    const downloadBase64FromApi = async (item: any, base64: string) => {
        const mimeType = `application/${item.extension.replace(".", "")}`; // بسته به فایل
        const byteCharacters = atob(base64);
        const byteArray = new Uint8Array([...byteCharacters].map(c => c.charCodeAt(0)));
        const blob = new Blob([byteArray], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = item?.name; // اسم دلخواه
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const downloadFile = (item: any) => {
        const params = {
            id: item.id,
            code: item.code
        }
        useAxiosWithToken.post("/sabka/document/get/file-content", params).then((res) =>
            downloadBase64FromApi(item, res.data.contentInBase64)
        ).finally()
    }
    const deleteFile = (id: any) => {
        const params = {
            reviewId: Number(reviewId),
            subjectId: Number(subjectId),
            fileId: id
        }
        const question = confirm("آیا مطمئن هستید؟")
        if (question) {
            useAxiosWithToken.post('/sabka/technical/annex/delete/subject-file', params).then(() => {
                getFileList()
            })
        }

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
        downloadFile,
        deleteFile,
        getFileList
    }
}
export default useDocument