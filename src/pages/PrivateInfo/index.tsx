import CustomSelect from "@/components/kit/CustomSelect";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { InfoIcon, SearchIcon, Undo2Icon } from "lucide-react";




export default function Index() {

    return <section className="m-auto p-4 w-[440px] h-screen max-w-full relative">
        <section className="mt-5 text-center">
            <span className="text-primary font-bold text-lg">اطلاعات اختصاصی:</span>
        </section>
        <section className="bg-blue-500 flex justify-center gap-2 items-center rounded-lg p-2 text-center text-white">
            <InfoIcon />
            <span>اصلاح فقط یک بار ممکن است</span>
        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">مشخصات تکمیلی:</span>
        </section>
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">شماره قطعه:</span>
            <CustomTextBox placeholder="شماره قطعه را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">نام محلی:</span>
            <CustomTextBox placeholder="نام محلی را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">ملاحظات و توضیحات:</span>
            <CustomTextBox placeholder="توضیحات را وارد کنید" onChange={() => { }} />
        </section>

        <section className="mt-5">
            <span className="text-primary font-bold text-sm">حدود اربعه:</span>
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">شمالا:</span>
            <CustomTextBox placeholder="شمالا را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">جنوبا:</span>
            <CustomTextBox placeholder="جنوبا را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">شرقا:</span>
            <CustomTextBox placeholder="شرقا را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">غربا:</span>
            <CustomTextBox placeholder="غربا را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">مشخصات کشت:</span>
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">رقم بذر:</span>
            <CustomTextBox placeholder=" رقم بذر را وارد کنید" onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">تاریخ کشت:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">نوع مالکیت:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">آبیاری:</span>
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">منبع تامین آب:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">سیستم آبیاری:</span>
            <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">پیوست فنی:</span>
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">درصد سبز شدن:</span>
            <CustomTextBox placeholder="درصد سبز شدن را وارد کنید" onChange={() => { }} />
        </section>
        <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
            <button className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </button>
            <button className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>جستجو</span>
                <SearchIcon className="w-[20px]" />
            </button>
        </section>
    </section>;
}
