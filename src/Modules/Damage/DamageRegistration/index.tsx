import CustomTextBox from "@/components/kit/CustomTextBox"
import { Undo2Icon } from "lucide-react"
import { Link } from "react-router-dom"


export default function Index() {

    return <section className="p-3">
        <span className="block pt-2 pb-3 text-slate-700">ثبت خسارت</span>
        <hr />
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">شناسه ملی:</span>
            <CustomTextBox onChange={() => { }} placeholder="شناسه ملی را وارد کنید" />
        </section>
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">شناسه بیمه نامه:</span>
            <CustomTextBox onChange={() => { }} placeholder="شناسه بیمه را وارد کنید" />
        </section>
        <section className="flex px-2 bg-white bottom-0 gap-2 mt-4  py-3 justify-end w-full">
            <Link to="/damage/home">
                <button className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                    <span>بازگشت</span>
                    <Undo2Icon className="w-[20px]" />
                </button>
            </Link>

            <button className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>تایید</span>
            </button>
        </section>
    </section>
}
