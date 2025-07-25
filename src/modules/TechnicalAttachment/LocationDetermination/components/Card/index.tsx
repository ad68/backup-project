
import { ChevronDown, ChevronUp, EyeIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { CardProp } from "../../technicalAttachment.type";
import { gregorianToJalali } from "@/utils/global";
export default function Index({ item }: CardProp) {
    const [isOpenDtl, setIsOpenDtl] = useState(false)

    return <section className="p-2">
        <section className={`border relative flex flex-col gap-4 bg-white border-slate-100  p-4 pb-12 rounded-2xl ${isOpenDtl ? `h-auto` : `h-[122px]`} shadow-lg`}>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">بیمه نامه:</span>
                    <span className="text-sm">{item.policyId}</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">مورد:</span>
                    <span className="text-sm">{item.subjectId}</span>
                </section>

            </section>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">شخص:</span>
                    <span className="text-sm">{item.beneficiary.title}</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">سال زراعی</span>
                    <span className="text-sm">{item.agriYear}</span>
                </section>
                {/*  <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">کارمزد:</span>
                    <span className="text-sm">1,800,000</span>
                </section> */}

            </section>
            {isOpenDtl && <> <span className="w-full block bg-slate-200 h-[1px]"></span>
                <section className="flex justify-between w-full">

                    {/*   <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">زیربخش:</span>
                        <span className="text-sm">محصولات زراعی</span>
                    </section> */}

                </section>
                {/*  <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">دسته طرح:</span>
                        <span className="text-sm">فراگیر اجباری</span>
                    </section>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">کارمزد:</span>
                        <span className="text-sm">1,800,000</span>
                    </section>

                </section> */}
                <section className="flex justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">موضوع:</span>
                        <span className="text-sm">{item?.product}</span>
                    </section>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">بیمه‌شده:</span>
                        <span className="text-sm">{`${item.insured} هکتار`}</span>
                    </section>
                    {/*   <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">دسته طرح:</span>
                        <span className="text-sm">فراگیر اجباری	</span>
                    </section> */}
                </section>
                <section className="flex justify-between w-full">

                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">تاریخ ارجاع:</span>
                        <span className="text-sm">{gregorianToJalali(item.reviewStartDate)}</span>
                    </section>
                </section>
                <section className=" w-full break-words">
                    <span className="font-light text-slate-500 text-sm">منطقه:</span>
                    <span className="block text-sm break-words">{item.region}</span>
                </section>
            </>}
            <footer className="absolute flex justify-between bottom-2 px-2  w-full left-0">
                <Link to={`/insurance-detail?reviewId=${item.reviewId}&policyId=${item.policyId}&subjectId=${item.subjectId}&farmerName=${item.beneficiary.title}`}>
                    <button className="border w-[100px] bg-primary border-primary shadow-md h-[30px] flex justify-center text-white items-center gap-2 rounded-full">
                        <span className="font-light text-sm">مشاهده</span>
                        <EyeIcon color="#2ebf70" className="w-[20px] stroke-white" />
                    </button>
                </Link>
                <button onClick={() => setIsOpenDtl(!isOpenDtl)} className="bg-yellow-400 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </footer>
        </section>
    </section>
}
