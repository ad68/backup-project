
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
                    <span className="font-light text-slate-500 text-sm">طرح:</span>
                    <span className="text-sm">9323</span>
                </section>
                {/*  <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">کارمزد:</span>
                    <span className="text-sm">1,800,000</span>
                </section> */}

            </section>
            {isOpenDtl && <> <span className="w-full block bg-slate-200 h-[1px]"></span>

                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">سال زراعی:</span>
                        <span className="text-sm">1403-04</span>
                    </section>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">موضوع:</span>
                        <span className="text-sm">گندم آبی</span>
                    </section>
                    {/*   <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">دسته طرح:</span>
                        <span className="text-sm">فراگیر اجباری	</span>
                    </section> */}
                </section>
                <section className="flex justify-between w-full">

                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">دسته طرح:</span>
                        <span className="text-sm">فراگیر اجباری</span>
                    </section>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">استان:</span>
                        <span className="block text-sm break-words">تهران</span>
                    </section>
                </section>
                <section className="flex justify-between w-full">

                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">شعبه:</span>
                        <span className="block text-sm break-words">پاکدشت</span>
                    </section>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">وضعیت:</span>
                        <span className="block text-sm break-words">ارزیابی</span>
                    </section>
                </section>
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">تاریخ ارجاع:</span>
                        <span className="block text-sm break-words">10 ساعت پیش</span>
                    </section>


                </section>

            </>}
            <footer className="absolute flex justify-between bottom-2 px-2  w-full left-0">

                <button className="border w-[100px] bg-primary border-primary shadow-md h-[30px] flex justify-center text-white items-center gap-2 rounded-full">
                    <span className="font-light text-sm">مشاهده</span>
                    <EyeIcon color="#2ebf70" className="w-[20px] stroke-white" />
                </button>

                <button onClick={() => setIsOpenDtl(!isOpenDtl)} className="bg-yellow-400 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </footer>


        </section>
    </section>
}
