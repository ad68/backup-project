import CustomButton from "@/components/kit/CustomButton";
import { toastError } from "@/components/kit/toast";
import { Undo2Icon } from "lucide-react";
import { useRef, useState } from "react";


export default function Index({ setIsAddDocumentModal, setSelectedFile }: { setSelectedFile: ((value: any) => void), setIsAddDocumentModal: (value: boolean) => void }) {
    const [selectedFileInModal, setSelectedFileInModal] = useState<any>()
    const inputFile = useRef<HTMLInputElement | null>(null)
    const fileHandleChange = (file: File) => {
        const allowedExtensions = ['gpx', 'kml'];
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
            toastError("فقط فایل‌های با فرمت .gpx یا .kml مجاز هستند");
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        setSelectedFileInModal(formData);
    };
    const acceptFile = () => {
        if (selectedFileInModal) {
            setSelectedFile(selectedFileInModal)
            setIsAddDocumentModal(false)
        }
        else {
            toastError("فایلی انتخاب نشده")
        }
    }
    return <section className="px-3  w-[440px] m-auto max-w-full gap-10 items-center">
        <h1 className="p-3 mt-2 font-bold text-center border-b-2">ارسال فایل (GPX یا KML)</h1>
        <input
            type="file"
            ref={inputFile}
            className="mt-4"
            onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                    fileHandleChange(file)
                }
            }}
        />
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
            <CustomButton onClick={acceptFile} className="rounded-full">
                <span>تایید</span>
            </CustomButton>
        </section>
    </section>
}
