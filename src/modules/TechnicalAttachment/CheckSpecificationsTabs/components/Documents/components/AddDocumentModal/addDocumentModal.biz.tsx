import { useAxiosWithToken } from "@/hooks"

import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { convertToBase64 } from "@ad68/utils";
const schema = z.object({
    title: z.string().min(1, 'عنوان الزامی است'),
    name: z.string().min(1, 'نام الزامی است'),
    document: z
        .custom<FileList>()
        .refine((files) => files && files.length > 0, 'انتخاب فایل الزامی است'),
});
type FormData = z.infer<typeof schema>;
const useAddDocumentModal = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: '',
            name: '',
            document: undefined,
        }
    });
    const [searchParams] = useSearchParams()
    const reviewId = searchParams.get("reviewId")
    const [actionLoading, setActionLoading] = useState<boolean>(false)
    const onSubmit = async (data: FormData) => {
        const file = data.document[0];
        const base64 = await convertToBase64(file);
        setActionLoading(true)
        const params = {
            reviewId: reviewId,
            subjectId: null,
            title: data.title,
            name: data.name,
            fileContentInBase64: base64
        }
        useAxiosWithToken.post("/sabka/technical/annex/add/subject-file", params).finally(() => setActionLoading(false))
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