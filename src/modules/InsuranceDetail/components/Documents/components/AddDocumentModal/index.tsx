import CustomButton from "@/components/kit/CustomButton";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { Undo2Icon } from "lucide-react";
import useAddDocumentModal from "./addDocumentModal.biz";
import { Controller } from 'react-hook-form';
export default function Index({ setIsAddDocumentModal, getFileList }: { setIsAddDocumentModal: (value: boolean) => void, getFileList: () => void }) {
    const { control, handleSubmit, onSubmit, errors, actionLoading } = useAddDocumentModal(setIsAddDocumentModal, getFileList)
    return <form onSubmit={handleSubmit(onSubmit)} className="px-3 w-[440px] m-auto max-w-full gap-10 items-center">
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">عنوان:</span>
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <CustomTextBox placeholder="عنوان را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                )}
            />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </section>

        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">نام:</span>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <CustomTextBox placeholder="نام را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                )}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </section>

        <section className="mt-5 flex flex-col gap-2">
            <span className="font-light text-slate-700 text-xs">مستندات:</span>
            <Controller
                name="document"
                control={control}
                render={({ field }) => (
                    <input
                        type="file"
                        onChange={(e) => field.onChange(e.target.files)}
                    />
                )}
            />
            {errors.document && <p className="text-red-500 text-xs mt-1">{errors.document.message}</p>}
        </section>

        <section className="flex px-2 bg-white bottom-0 gap-2 mt-4 py-3 justify-end w-full">
            <CustomButton
                type="button"
                onClick={() => setIsAddDocumentModal(false)}
                variant="outlined"
                className="rounded-full"
            >
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </CustomButton>
            <CustomButton loading={actionLoading} className="rounded-full">
                <span>تایید</span>
            </CustomButton>
        </section>
    </form>
}
