import { Link2Icon } from "lucide-react";
import Card from './components/Card'
import FileItem from './components/FileItem'
import SlidingModal from "@/components/kit/SlidingModal";
import useDocument from "./document.biz";
import AddDocumentModal from './components/AddDocumentModal'
export default function Index() {
    const { isAddDocumentModal, setIsAddDocumentModal } = useDocument()
    return <>
        <section className="p-2">
            <section className="border border-slate-200  rounded-lg p-2">
                <span className='block text-center'>مستندات</span>
                <hr className='border-slate-300 my-1' />
                <section className="flex justify-between gap-2 py-2">
                    <button onClick={() => setIsAddDocumentModal(true)} className="border w-[190px] bg-blue-500  text-white  shadow-md h-[30px] flex justify-center items-center gap-2 rounded-full">
                        <Link2Icon className="w-[18px]" />
                        <span className="font-light text-sm">الصاق سند جدید</span>
                    </button>
                </section>
                <section className="flex gap-2">
                    <FileItem />
                    <FileItem />
                </section>
                <section className="flex flex-col gap-1 mt-4">
                    <Card />
                    <Card />
                </section>
            </section>
        </section>
        <SlidingModal isOpen={isAddDocumentModal}>
            <AddDocumentModal setIsAddDocumentModal={setIsAddDocumentModal} />
        </SlidingModal>
    </>
}

