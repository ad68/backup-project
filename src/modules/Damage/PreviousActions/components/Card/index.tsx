
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
                    <span className="text-sm">27288986</span>
                </section>

            </section>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">ذینفع:</span>
                    <span className="text-sm">آقاجان موسوی لاریجانی</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">موضوع:</span>
                    <span className="text-sm">گندم آبی</span>
                </section>

            </section>
            {isOpenDtl && <> <span className="w-full block bg-slate-200 h-[1px]"></span>
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">استان:</span>
                        <span className="block text-sm break-words">تهران</span>
                    </section>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">شعبه:</span>
                        <span className="block text-sm break-words">پاکدشت</span>
                    </section>

                </section>
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">وضعیت خسارت در زمان اقدام:</span>
                        <span className="text-sm">ارزیابی</span>
                    </section>


                </section>

                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">نتیجه اقدام:</span>
                        <span className="text-sm">برگرداندن به شعبه</span>
                    </section>
                </section>
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">تاریخ ارجاع:</span>
                        <span className="block text-sm break-words">1404/03/17</span>
                    </section>
                </section>
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">تاریخ خاتمه اقدام:</span>
                        <span className="block text-sm break-words">1404/03/27</span>
                    </section>
                </section>
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">وضعیت جاری پرونده:</span>
                        <span className="block text-sm break-words">بررسی اولیه در شعبه	</span>
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
