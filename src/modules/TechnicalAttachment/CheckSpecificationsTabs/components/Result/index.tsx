
import { Undo2Icon } from "lucide-react"
import CustomSelect from "@/components/kit/CustomSelect"
import CustomTextArea from "@/components/kit/CustomTextArea"
export default function Index() {

    return <section className="p-2">
        <section className="border border-slate-200  rounded-lg p-2">
            <span className='block text-center'>نتیجه</span>
            <hr className='border-slate-300 my-1' />
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">نتیجه:</span>
                <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">ملاحظات:</span>
                <CustomTextArea className="border block w-full rounded-xl p-2" placeholder="بیمه نامه را وارد کنید" onChange={() => { }} ></CustomTextArea>
            </section>
            <section className="flex px-2 bg-white bottom-0 gap-2 mt-4  py-3 justify-end w-full">
                <button className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                    <span>بازگشت</span>
                    <Undo2Icon className="w-[20px]" />
                </button>
                <button className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                    <span>تایید</span>
                </button>
            </section>

        </section>
    </section>
}
