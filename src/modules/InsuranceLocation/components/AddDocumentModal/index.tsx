import CustomButton from "@/components/kit/CustomButton";
import { toastError } from "@/components/kit/toast";
import { Undo2Icon } from "lucide-react";
import { useRef, useState } from "react";


export default function Index({ setIsAddDocumentModal, setSelectedFile }: { setSelectedFile: ((value: any) => void), setIsAddDocumentModal: (value: boolean) => void }) {
    const [selectedFileInModal, setSelectedFileInModal] = useState<any>()
    const inputFile = useRef<HTMLInputElement | null>(null)
    const fileHandleChange = (file: any) => {
        const formData = new FormData()
        formData.append('file', file)
        setSelectedFileInModal(formData)
    }
    const acceptFile = () => {
        if (selectedFileInModal) {
            setSelectedFile(selectedFileInModal)
            setIsAddDocumentModal(false)
        }
        else {
            toastError("فایلی انتخاب نشده")
        }
    }
    return <section className="px-3 pt-8 w-[440px] m-auto max-w-full gap-10 items-center">
        <input
            type="file"
            ref={inputFile}
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
