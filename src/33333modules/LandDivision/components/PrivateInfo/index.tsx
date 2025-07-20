import CustomSelect from "@/components/kit/CustomSelect";
import CustomTextBox from "@/components/kit/CustomTextBox";
import InfoModal from '../InfoModal'
import usePrivateInfo from "./privateInfo.biz";
import { InfoIcon } from "lucide-react";
export default function Index() {
    const { isInfoModalOpen, setIsInfoModalOpen } = usePrivateInfo()
    return <>
        <section className="p-2">
            <section className="mt-5 text-center">
                <span className="text-primary font-bold text-lg">تقسیم قلم بیمه‌شده:</span>
            </section>
            <button onClick={() => setIsInfoModalOpen(true)} className="border w-[90px]  bg-white border-blue-500 text-blue-500 shadow-md h-[30px] flex justify-center mt-3 items-center gap-2 rounded-full">
                <InfoIcon className="stroke-blue-500 w-[20px]" />
                <span className="text-sm">نکات</span>
            </button>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">مساحت قلم جدید (هکتار):</span>
                <CustomTextBox placeholder="مساحت قلم جدید را وارد کنید" onChange={() => { }} />
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">علت:</span>
                <CustomTextBox placeholder="علت را وارد کنید" onChange={() => { }} />
            </section>
            <section className="mt-5 text-center">
                <span className="text-primary font-bold text-lg"> اختصاصی قلم بیمه‌شده:</span>
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

        </section>
        <InfoModal isOpen={isInfoModalOpen} setIsOpen={setIsInfoModalOpen} />
    </>
}
