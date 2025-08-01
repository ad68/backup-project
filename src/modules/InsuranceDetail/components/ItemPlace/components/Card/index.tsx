
import type { PolicyItem } from "@/modules/InsuranceDetail/insuranceDetail.types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
export default function Index({ item, lat, lng }: { item: PolicyItem, lat: string, lng: string }) {
    const [isOpenDtl, setIsOpenDtl] = useState(false)
    const [searchParams] = useSearchParams();
    const reviewId = searchParams.get("reviewId")
    const subjectId = searchParams.get("subjectId")
    const policyId = searchParams.get("policyId")
    const farmerName = searchParams.get("farmerName")
    return <section className="p-2">
        <section className={`border relative flex flex-col gap-4 bg-white border-slate-100  p-4 pb-12 rounded-2xl ${isOpenDtl ? `h-auto` : `h-[160px]`} shadow-lg`}>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">قلم بیمه‌شده:</span>
                    <span className="text-sm">{item.policyItemId}</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">قلم مورد:</span>
                    <span className="text-sm">{item.subjectItemId}</span>
                </section>
            </section>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">مساحت بیمه شده:</span>
                    <span className="text-sm">{item.insured} هکتار</span>
                </section>

            </section>
            <section className="flex justify-between w-full">

                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">مساحت:</span>
                    {item.actual && <span className="text-sm">{item?.actual?.toFixed(2)} هکتار</span>}

                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">عملکرد:</span>
                    <span className="text-sm">{item?.property02}</span>
                </section>
            </section>
            {isOpenDtl && <> <span className="w-full block bg-slate-200 h-[1px]"></span>
                <section className="flex justify-between w-full">
                    <section className="flex flex-col gap-1">
                        <span className="font-light text-slate-500 text-sm">مشخصات اختصاصی:</span>
                        <span className="text-sm">
                            {item?.extraInfo}
                        </span>
                    </section>
                </section>
            </>}
            <footer className="absolute flex justify-between bottom-2 px-2  w-full left-0">
                <section className="flex gap-2">
                    <Popover>
                        <PopoverTrigger className="border w-[90px] bg-primary border-primary text-white  shadow-md h-[30px] flex justify-center items-center gap-2 rounded-full">
                            <span className="font-light text-sm">عملیات</span>
                        </PopoverTrigger>
                        <PopoverContent>
                            <section className="flex gap-2">
                                <Link to={`/land-division??reviewId=${reviewId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&rawExtraInfo=${item?.rawExtraInfo}`}>
                                    <button className="text-[10px] bg-white p-2 rounded-lg border border-blue-500 font-light text-blue-500">تقسیم قلم بیمه شده</button>
                                </Link>
                                <Link to={`/private-info?reviewId=${reviewId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&rawExtraInfo=${item?.rawExtraInfo}&subjectId=${subjectId}`}>
                                    <button className="text-[10px] bg-white p-2 rounded-lg border border-red-500 font-light text-red-500">تکمیل اطلاعات اختصاصی</button>
                                </Link>
                            </section>
                        </PopoverContent>
                    </Popover>
                    {/*  {!item.featureId && <Link to={`/insurance-location?reviewId=${reviewId}&subjectId=${subjectId}&featureId=${item.featureId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&lat=${lat}&lng=${lng}`}>
                        <button className="border w-[90px] bg-blue-500 border-blue-500 text-white shadow-md h-[30px] flex justify-center  items-center gap-2 rounded-full">
                            <span className="font-light text-sm">تعیین مکان</span>
                        </button>
                    </Link>} */}
                    {!item.featureId && <Link to={`/technical-attachment/location-determination-type?reviewId=${reviewId}&subjectId=${subjectId}&featureId=${item.featureId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&lat=${lat}&lng=${lng}`}>
                        <button className="border w-[90px] bg-blue-500 border-blue-500 text-white shadow-md h-[30px] flex justify-center  items-center gap-2 rounded-full">
                            <span className="font-light text-sm">تعیین مکان</span>
                        </button>
                    </Link>}
                    {/*  {item.featureId && <Link to={`/insurance-location?reviewId=${reviewId}&subjectId=${subjectId}&featureId=${item.featureId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&lat=${lat}&lng=${lng}`}> <button className="border w-[110px] bg-orange-500 border-orange-500 shadow-md h-[30px] flex justify-center text-white items-center gap-2 rounded-full">
                        <span className="font-light text-sm">ویرایش مکان</span>
                    </button></Link>} */}
                    {item.featureId && <Link to={`/technical-attachment/location-determination-type?reviewId=${reviewId}&subjectId=${subjectId}&featureId=${item.featureId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&lat=${lat}&lng=${lng}`}> <button className="border w-[110px] bg-orange-500 border-orange-500 shadow-md h-[30px] flex justify-center text-white items-center gap-2 rounded-full">
                        <span className="font-light text-sm">ویرایش مکان</span>
                    </button></Link>}
                </section>
                <button onClick={() => setIsOpenDtl(!isOpenDtl)} className="bg-yellow-400 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </footer>
        </section>
    </section>
}
