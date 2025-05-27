import CustomSelect from "@/components/kit/CustomSelect";
import CustomTextBox from "@/components/kit/CustomTextBox";
import type { FilterModalProp } from "@/pages/TechnicalAttachment/technicalAttachment.type";
import { SearchIcon, Undo2Icon } from "lucide-react";

export default function Index({ isOpen, setIsOpen }: FilterModalProp) {

    return <section className={`w-full h-full overflow-scroll p-3 px-6 pb-0 fixed bg-white ${isOpen ? `top-0` : `top-[-100%]`} transition-all duration-500 left-0 z-10`}>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">بخش اول:</span>
        </section>
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">کلید واژه:</span>
            <CustomTextBox placeholder="کلید واژه را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">بیمه نامه:</span>
            <CustomTextBox placeholder="بیمه نامه را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">مورد:</span>
            <CustomTextBox placeholder="مورد را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">بیمه گذار:</span>
            <CustomTextBox placeholder="بیمه نامه را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">ذی نفع:</span>
            <CustomTextBox placeholder="بیمه نامه را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">بخش دوم:</span>
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">استان:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">شهرستان:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">بخش:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">دهستان:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">آبادی یا شهر:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">بخش سوم:</span>
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">طرح:</span>
            <CustomTextBox placeholder="بیمه نامه را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">سال زراعی:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">زیربخش:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">موضوع:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">دسته طرح:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
            <button onClick={() => setIsOpen(false)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </button>
            <button className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>جستجو</span>
                <SearchIcon className="w-[20px]" />
            </button>
        </section>
    </section>
}
