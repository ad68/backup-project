import { formDataToObject, getExtensionFromFileName } from "@/utils/global"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toastError, toastSuccess } from "@/components/kit/toast";
import { addRecordToDb, initOfflineDb } from "@/lib/indexdb";
import { STORES } from "@/constants/dbEnums";
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

    const onSubmit = async (data: FormData) => {
        const file = data.document[0];
        if (!file) return;
        const extension = getExtensionFromFileName(file.name);
        console.log("extension", extension)
        let formData = new FormData()
        formData.append('reviewId', reviewId ? reviewId : "")
        formData.append('subjectId', subjectId ? subjectId : "")
        formData.append('status', "ready")
        formData.append('title', data.title)
        formData.append('name', data.title + "." + extension)
        formData.append('file', file)
        console.log(formData)
        console.log("object", formDataToObject(formData))
        const db = await initOfflineDb()
        try {
            await addRecordToDb(db, STORES.Documents, formDataToObject(formData));
            toastSuccess("با موفقیت ذخیره شد")
            setIsAddDocumentModal(false)
        }
        catch (err: unknown) {
            console.log(err)
            toastError("خطا در ذخیره اطلاعات")
        }
    };
    return {
        onSubmit,
        control,
        handleSubmit,
        errors
    }
}
export default useAddDocumentModal