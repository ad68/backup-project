import { useAxiosWithToken } from "@/hooks"
import { convertToBase64, getExtensionFromFileName, getPureBase64 } from "@/utils/global"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toastSuccess } from "@/components/kit/toast";
import { isDev } from "@/config/env";
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
        const base64 = await convertToBase64(file);
        const extension = getExtensionFromFileName(file.name);
        console.log("extension", extension)
        setActionLoading(true)
        const params = {
            reviewId: reviewId,
            subjectId: subjectId,
            title: data.title,
            name: data.title + "." + extension,
            fileContentInBase64: getPureBase64(String(base64)),
            isTest: isDev

        }
        useAxiosWithToken.post("/sabka/technical/annex/add/subject-file", params)
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