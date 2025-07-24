import useResult from "./result.biz"
import InfoModal from "./components/InfoModal"
import { InfoIcon } from "lucide-react"
import CustomSelect from "@/components/kit/CustomSelect"
import CustomTextArea from "@/components/kit/CustomTextArea"
import CustomButton from "@/components/kit/CustomButton"
export default function Index() {
    const { isInfoModalOpen, setIsInfoModalOpen, resultOptions, selectedResult, setSelectedResult, locateResult, actionLoading } = useResult()
    return <section className="p-2">
        <section className="border border-slate-200  rounded-lg p-2">
            <span className='block text-center'>نتیجه</span>
            <hr className='border-slate-300 my-1' />

            <button onClick={() => setIsInfoModalOpen(true)} className="border w-[90px]  bg-white border-blue-500 text-blue-500 shadow-md h-[30px] flex justify-center mt-3 items-center gap-2 rounded-full">
                <InfoIcon className="stroke-blue-500 w-[20px]" />
                <span className="text-sm">نکات</span>
            </button>

            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">نتیجه:</span>
                <CustomSelect value={selectedResult} options={resultOptions} onChange={(e) => { setSelectedResult(e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">ملاحظات:</span>
                <CustomTextArea className="border block w-full rounded-xl p-2" placeholder="بیمه نامه را وارد کنید" onChange={() => { }} ></CustomTextArea>
            </section>
            <section className="flex px-2 bg-white bottom-0 gap-2 mt-4  py-3 justify-end w-full">

                <CustomButton loading={actionLoading} onClick={locateResult} className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                    <span>تایید</span>
                </CustomButton>
            </section>
            <InfoModal isOpen={isInfoModalOpen} setIsOpen={setIsInfoModalOpen} />
        </section>
    </section>
}
