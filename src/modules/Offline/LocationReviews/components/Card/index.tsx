
import { ChevronDown, ChevronUp, InfoIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { gregorianToJalali } from "@/utils/global";
import { useOnlineStatus } from "@/hooks";
/* import useCard from "./card.biz"; */
export default function Index({ item, id, isError, expireDate }: any) {
    const isOnline = useOnlineStatus();
    const [isOpenDtl, setIsOpenDtl] = useState(false)
    /* const { addReviewToOfflineList, actionLoading } = useCard() */
    return <section className="p-2">
        <div className="flex justify-center w-[90%] m-auto rounded-t-lg px-2 py-1 bg-slate-600 text-white">
            <p className="text-center text-[11px] font-sm">
                تاریخ انقضای این پرونده در حالت آفلاین {gregorianToJalali(expireDate)} می باشد
            </p>
        </div>
        <section className={`border relative flex flex-col gap-4 ${isError ? `border-red-500` : "border-slate-100"} bg-white  p-4 pb-12 rounded-2xl ${isOpenDtl ? `h-auto` : `h-[200px]`} shadow-lg`}>
            {isError && <div className="text-center text-red-500 text-sm flex justify-center items-center gap-2">
                <InfoIcon className="w-[20px]" />
                <span>پرونده دارای خطا می باشد</span>
            </div>}
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
            </section>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">کد ملی:</span>
                    <span className="text-sm">{item.beneficiary.nationalCode}</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">موبایل:</span>
                    <span className="text-sm">{item.beneficiary.mobile}</span>
                </section>

            </section>

            {isOpenDtl && <> <span className="w-full block bg-slate-200 h-[1px]"></span>
                <section className="flex justify-between w-full">
                </section>
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
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">سال زراعی</span>
                        <span className="text-sm">{item.agriYear}</span>
                    </section>
                </section>
                <section className=" w-full break-words">
                    <span className="font-light text-slate-500 text-sm">منطقه:</span>
                    <span className="block text-sm break-words">{item.region}</span>
                </section>
            </>}

            <footer className="absolute flex justify-between bottom-2 px-2 w-full left-0">
                <div className="flex gap-2">
                    <Link to={`/offline/locate-reviews/${id}?reviewId=${item.reviewId}&policyId=${item.policyId}&subjectId=${item.subjectId}&farmerName=${item.beneficiary.title}`}>
                        <button className="border w-[80px] h-[30px] bg-primary border-primary shadow-md text-[12px] flex justify-center text-white items-center gap-2 rounded-full">
                            {/* <EyeIcon color="#2ebf70" className="w-[30px] stroke-white" /> */}
                            مشاهده
                        </button>

                    </Link>
                    {isOnline && <button className="border w-[50px] h-[30px] bg-red-500 border-red-500 shadow-md text-[12px] flex justify-center text-white items-center gap-2 rounded-full">
                        <Trash2Icon className="w-[20px]" />
                    </button>}

                </div>
                <button onClick={() => setIsOpenDtl(!isOpenDtl)} className="bg-yellow-400 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </footer>

        </section>

    </section>
}
