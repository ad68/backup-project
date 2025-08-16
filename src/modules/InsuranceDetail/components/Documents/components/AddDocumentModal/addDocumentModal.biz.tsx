import { useAxiosWithToken } from "@/hooks"
import { getExtensionFromFileName } from "@/utils/global"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toastSuccess } from "@/components/kit/toast";
const schema = z.object({
    title: z.string().min(1, 'عنوان الزامی است'),

    document: z
        .custom<FileList>()
        .refine((files) => files && files.length > 0, 'انتخاب فایل الزامی است'),
});
type FormData = z.infer<typeof schema>;
const useAddDocumentModal = (setIsAddDocumentModal: (value: boolean) => void, getFileList: () => void) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: '',
            document: undefined,
        }
    });
    const [searchParams] = useSearchParams()
    const reviewId = searchParams.get("reviewId")
    const subjectId = searchParams.get("subjectId")
    const [actionLoading, setActionLoading] = useState<boolean>(false)
    const onSubmit = async (data: FormData) => {
        const file = data.document[0];
        if (!file) return;

        const extension = getExtensionFromFileName(file.name);
        console.log("extension", extension)
        let formData = new FormData()
        formData.append('reviewId', reviewId ? reviewId : "")
        formData.append('subjectId', subjectId ? subjectId : "")
        formData.append('title', data.title)
        formData.append('name', data.title + "." + extension)
        formData.append('file', file)
        setActionLoading(true)

        useAxiosWithToken.post("/sabka/technical/annex/add/subject-file", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(() => {
                toastSuccess("سند شما با موفقیت بارگذاری شد")
                getFileList()
                setIsAddDocumentModal(false)
            }
            )
            .finally(() => setActionLoading(false))
    };
    return {
        actionLoading,
        onSubmit,
        control,
        handleSubmit,
        errors
    }
}
export default useAddDocumentModal