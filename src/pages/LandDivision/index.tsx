import { ChevronDown, ChevronUp, Undo2Icon, } from "lucide-react"
import PrivateInfo from './components/PrivateInfo'
import useLandDivision from "./landDivision.biz"
import { useNavigate } from "react-router-dom";
export default function Index() {
    const { isOpenDtl, isOpenDtl1, setIsOpenDtl, setIsOpenDtl1 } = useLandDivision()
    const navigate = useNavigate();
    return <section className='m-auto w-[440px]  max-w-full'>
        <section className='p-2'>
            <section className={`border ${isOpenDtl ? `h-auto` : `h-[160px]`} pb-12 relative overflow-hidden bg-slate-50 border-slate-200 p-2 rounded-lg mt-5`}>
                <span className='block text-center'>مشخصات بیمه نامه</span>
                <hr className='border-slate-300 my-1' />
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">بیمه‌نامه:</span>
                        <span className="text-sm">26483847</span>
                    </section>
                </section>
                <section>
                    <section className="flex gap-1 mt-2">
                        <span className="font-light text-slate-500 text-sm">مورد:</span>
                        <span className="text-sm">22642929</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">تاریخ فعال‌سازی:</span>
                        <span className="text-sm">1403/11/06</span>
                    </section>

                </section>
                <section className='mt-2'>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">مساحت:</span>
                        <span className="text-sm">6 هکتار</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between items-center w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">شعبه:</span>
                        <span className="text-sm">اسلامشهر</span>
                    </section>

                </section>
                <section className='mt-2'>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">طرح:</span>
                        <span className="text-sm">9326</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">ذینفع:</span>
                        <span className="text-sm">عباس درخشان راد (2649092221)</span>
                    </section>

                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">موضوع:</span>
                        <span className="text-sm">کلزا آبی (فراگیر اجباری)</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">تاریخ اعتبار:</span>
                        <span className="text-sm">1403/06/20 ~ 1404/04/10</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">سال زراعی:</span>
                        <span className="text-sm">1403-04</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">صادرکننده:</span>
                        <span className="text-sm">مهر پاد زرین تار (جیران پورمحبی حسن کیاده)</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">ارزیاب:</span>
                        <span className="text-sm">ارزیابی خسارت بیمه ای ارزیابان ایرانیان پوشش (محمود دادپور)</span>
                    </section>
                </section>

                <section className="flex mt-2 justify-between w-full">
                    <section className="flex flex-col gap-1">
                        <span className="font-light text-slate-500 text-sm">نشانی:</span>
                        <span className="text-sm ">تهران، اسلامشهر، مرکزی، ده عباس، شهر اسلامشهر - کشت 1928129</span>
                    </section>
                </section>
                <button onClick={() => setIsOpenDtl(!isOpenDtl)} className="bg-yellow-400 absolute bottom-2 left-1 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </section>
        </section>
        <section className='p-2'>
            <section className={`border ${isOpenDtl1 ? `h-auto` : `h-[160px]`} pb-12 overflow-hidden bg-slate-50 relative border-slate-200 p-2 rounded-lg mt-2`}>
                <span className='block text-center'>قلم بیمه‌شده اصلی</span>
                <hr className='border-slate-300 my-1' />
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">قلم بیمه‌شده:</span>
                        <span className="text-sm">188109910</span>
                    </section>
                </section>
                <section>
                    <section className="flex gap-1 mt-2">
                        <span className="font-light text-slate-500 text-sm">قلم مورد:</span>
                        <span className="text-sm">160856886</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">مساحت بیمه‌شده:</span>
                        <span className="text-sm">2/9 هکتار</span>
                    </section>
                </section>
                <section className='mt-2'>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">حق بیمه:</span>
                        <span className="text-sm">37,475,158 ریال</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between items-center w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">حداکثر تعهد:</span>
                        <span className="text-sm">232,000,000 ریال</span>
                    </section>

                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">مساحت واقعی:</span>
                        <span className="text-sm">.......</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">سهم دولت:</span>
                        <span className="text-sm"> 13,116,303 ریال</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">حداکثر تعهد واقعی:</span>
                        <span className="text-sm">...</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">مساحت خسارت‌دیده:</span>
                        <span className="text-sm">...</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">سهم بیمه‌گذار:</span>
                        <span className="text-sm">24,358,855 ریال</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">غرامت:</span>
                        <span className="text-sm">0 ریال</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">کشت:</span>
                        <span className="text-sm">عملکرد</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex flex-col gap-1">
                        <span className="font-light text-slate-500 text-sm">شماره قطعه:</span>
                        <span className="text-sm">1 ، نام محلی: کمالیه، ملاحظات و توضیحات: ، شمالا: اراضی امیر بردیا نیک نیا، جنوبا: اراضی اردوان نیک نیا، شرقا: اراضی آستان، غربا: اراضی نیک نیا، رقم بذر: نپتون، تاریخ کشت: 1403/07/25، نوع مالکیت: استیجاری، منبع تامین آب: کانال، سیستم آبیاری: غرقابی، درصد سبز شدن: 100 درصد،</span>
                    </section>
                </section>
                <button onClick={() => setIsOpenDtl1(!isOpenDtl1)} className="bg-yellow-400 absolute bottom-2 left-1 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl1 ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </section>
        </section>
        <PrivateInfo />
        <section className="flex px-2 sticky bg-white bottom-0 gap-2 mt-4  py-3 justify-end w-full">
            <button onClick={() => navigate(-1)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </button>
            <button className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>تایید</span>
            </button>
        </section>

    </section>
}
