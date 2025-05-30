
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
export default function Index() {
    const [isOpenDtl, setIsOpenDtl] = useState(false)

    return <section className="w-[440px] max-w-full p-2">
        <section className={`border relative flex flex-col gap-4 bg-white border-slate-100  p-4 pb-12 rounded-2xl ${isOpenDtl ? `h-auto` : `h-[160px]`} shadow-lg`}>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">قلم بیمه‌شده:</span>
                    <span className="text-sm">188109910</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">قلم مورد:</span>
                    <span className="text-sm">160856886</span>
                </section>
            </section>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">مساحت بیمه شده:</span>
                    <span className="text-sm">2/9 هکتار</span>
                </section>


            </section>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">عارضه مکانی:</span>
                    <span className="text-sm">16135951</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">مساحت:</span>
                    <span className="text-sm">17/8 هکتار</span>
                </section>

            </section>
            {isOpenDtl && <> <span className="w-full block bg-slate-200 h-[1px]"></span>
                <section className="flex justify-between w-full">
                    <section className="flex flex-col gap-1">
                        <span className="font-light text-slate-500 text-sm">مشخصات اختصاصی:</span>
                        <span className="text-sm">
                            شماره قطعه: 1 ، نام محلی: کمالیه، شمالا: اراضی امیر بردیا نیک نیا، جنوبا: اراضی اردوان نیک نیا، شرقا: اراضی آستان، غربا: اراضی نیک نیا، رقم بذر: نپتون، تاریخ کشت: 1403/07/25، نوع مالکیت: استیجاری، منبع تامین آب: کانال، سیستم آبیاری: غرقابی، درصد سبز شدن: 100 درصد،
                        </span>
                    </section>


                </section>

            </>}
            <footer className="absolute flex justify-between bottom-2 px-2  w-full left-0">
                <section className="flex gap-2">
                    <button className="border w-[90px] bg-primary border-primary text-white  shadow-md h-[30px] flex justify-center items-center gap-2 rounded-full">
                        <span className="font-light text-sm">عملیات</span>

                    </button>
                    <button className="border w-[90px] bg-blue-500 border-blue-500 text-white shadow-md h-[30px] flex justify-center  items-center gap-2 rounded-full">
                        <span className="font-light text-sm">تعیین مکان</span>

                    </button>
                    <button className="border w-[90px] bg-red-500 border-red-500 shadow-md h-[30px] flex justify-center text-white items-center gap-2 rounded-full">
                        <span className="font-light text-sm">حذف مکان</span>

                    </button>
                </section>

                <button onClick={() => setIsOpenDtl(!isOpenDtl)} className="bg-yellow-400 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </footer>


        </section>
    </section>
}
