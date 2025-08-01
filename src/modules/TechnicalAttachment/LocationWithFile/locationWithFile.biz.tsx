import { toastError, toastSuccess } from '@/components/kit/toast'
import { useAxios } from '@/hooks'
import { useAuthStore } from '@/store/authStore'
import { objectToQueryString } from '@/utils/global'
import { useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
const useLocationWithFile = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const reviewId = searchParams.get("reviewId")
    const subjectItemId = searchParams.get("subjectItemId")
    const policyId = searchParams.get("policyId")
    const [selectedFile, setSelectedFile] = useState<any>()
    const [actionLoading, setActionLoading] = useState(false)
    const inputFile = useRef<HTMLInputElement | null>(null)
    const { token } = useAuthStore()
    const fileHandleChange = (file: File) => {
        const allowedExtensions = ['gpx', 'kml'];
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
            toastError("فقط فایل‌های با فرمت .gpx یا .kml مجاز هستند");
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        setSelectedFile(formData);
    };
    const saveFile = () => {
        if (selectedFile) {
            const params = {
                reviewId: reviewId,
                policyId: policyId,
                subjectItemId: subjectItemId,
                subjectNotExist: false,
            }
            setActionLoading(true)
            useAxios.post("/sabka/technical/annex/add/locate-subject-item-file?" + objectToQueryString(params) + "&token=" + token, selectedFile).then(() => {
                navigate(-1)
                toastSuccess("عملیات با موفقیت اانجام شد")
            }).catch().finally(() => setActionLoading(false))
        }
        else {
            toastError("لطفا فایل را انتخاب کنید")
        }
    }
    return {
        inputFile,
        saveFile,
        fileHandleChange,
        actionLoading
    }
}
export default useLocationWithFile