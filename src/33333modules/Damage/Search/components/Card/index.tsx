
import { ChevronDown, ChevronUp, EyeIcon } from "lucide-react";
import { useState } from "react";

export default function Index() {
    const [isOpenDtl, setIsOpenDtl] = useState(false)

    return <section className="w-[440px] max-w-full p-2">
        <section className={`border relative flex flex-col gap-4 bg-white border-slate-100  p-4 pb-12 rounded-2xl ${isOpenDtl ? `h-auto` : `h-[122px]`} shadow-lg`}>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">خسارت:</span>
                    <span className="text-sm">16533570</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">بیمه نامه:</span>
                    <span className="text-sm">26440444</span>
                </section>

            </section>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">مورد:</span>
                    <span className="text-sm">22599740</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">شخص:</span>
                    <span className="text-sm">سیدحبیب الله نصیری</span>
                </section>

            </section>
            {isOpenDtl && <> <span className="w-full block bg-slate-200 h-[1px]"></span>
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">سال زراعی:</span>
                        <span className="block text-sm break-words">1403-04</span>
                    </section>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">موضوع:</span>
                        <span className="block text-sm break-words">گندم آبی</span>
                    </section>

                </section>
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">دسته طرح:</span>
                        <span className="block text-sm break-words">فراگیر اجباری</span>
                    </section>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">وضعیت:</span>
                        <span className="block text-sm break-words">ارزیابی</span>
                    </section>

                </section>

                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">ارزیاب:</span>
                        <span className="text-sm">ارزیابی خسارت بیمه ای ارزیابان ایرانیان پوشش (محمود دادپور)</span>
                    </section>
                </section>
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">غرامت:</span>
                        <span className="block text-sm break-words">............</span>
                    </section>
                </section>



            </>}
            <footer className="absolute flex justify-between bottom-2 px-2 w-full left-0">

                <section className="flex gap-2">
                    <button className="border w-[100px] bg-primary border-primary shadow-md h-[30px] flex justify-center text-white items-center gap-2 rounded-full">
                        <span className="font-light text-sm">مشاهده</span>
                        <EyeIcon className="w-[20px] stroke-white" />
                    </button>
                    <button className="border w-[100px] bg-blue-500 border-primary shadow-md h-[30px] flex justify-center text-white items-center gap-2 rounded-full">
                        <span className="font-light text-sm">عملیات</span>

                    </button>
                </section>

                <button onClick={() => setIsOpenDtl(!isOpenDtl)} className="bg-yellow-400 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </footer>


        </section>
    </section>
}
