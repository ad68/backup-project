
import type { PolicyItem } from "@/modules/InsuranceDetail/insuranceDetail.types";
import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
export default function Index({ item, lat, lng }: { item: PolicyItem, lat?: string, lng?: string }) {
    const [isOpenDtl, setIsOpenDtl] = useState(false)
    const [searchParams] = useSearchParams();
    const { id } = useParams()
    const reviewId = searchParams.get("reviewId")
    const subjectId = searchParams.get("subjectId")
    const policyId = searchParams.get("policyId")
    const farmerName = searchParams.get("farmerName")
    useEffect(() => {
        console.log("item", item)
    }, [item])
    return <section className="p-2">
        <section className={`border border-1 relative flex flex-col gap-4 ${item.edited ? "border-slate-600" : "border-slate-100"}  bg-white relative  p-4 pb-12 rounded-2xl ${isOpenDtl ? `h-auto` : `h-[160px]`} shadow-lg`}>
            {item.edited && <div className="bg-slate-500 text-white  w-[50%] left-[25%] absolute top-[-10px] text-sm px-4 flex justify-center rounded-3xl">
                آفلاین
            </div>}

            {!item.edited && <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">قلم بیمه‌شده:</span>
                    <span className="text-sm">{item.policyItemId}</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">قلم مورد:</span>
                    <span className="text-sm">{item.subjectItemId}</span>
                </section>
            </section>}

            <section className={`flex justify-between w-full ${item.edited && `mt-5`}`}>
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
                        <span className="font-light text-slate-500">مشخصات اختصاصی:</span>
                        <span className="text-sm">
                            {item?.extraInfo}
                        </span>
                    </section>
                </section>
            </>}
            <footer className="absolute flex justify-between bottom-2 px-2 w-full left-0">
                <section className="flex gap-2">
                    <Popover>
                        <PopoverTrigger className="border w-[90px] bg-primary border-primary text-white  shadow-md h-[30px] flex justify-center items-center gap-2 rounded-full">
                            <div className="w-full  font-light flex  justify-start pr-[18px] items-center text-sm relative">
                                <span>عملیات</span>
                                <MoreVertical className="h-[20px] absolute left-[5px]" />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <section className="flex gap-1">
                                {!item.edited && !item.wkt && <Link to={`/offline/land-division/${id}?policyItemId=${item.policyItemId}&reviewId=${reviewId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&rawExtraInfo=${item?.rawExtraInfo}`}>
                                    <button className="text-[10px] bg-blue-500 p-2 rounded-lg border border-blue-500 font-light text-white">تقسیم قلم بیمه شده</button>
                                </Link>}

                                <Link to={`/private-info?reviewId=${reviewId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&rawExtraInfo=${item?.rawExtraInfo}&subjectId=${subjectId}`}>
                                    <button className="text-[10px] bg-red-500 p-2 rounded-lg border border-red-500  text-white">تکمیل اطلاعات اختصاصی</button>
                                </Link>
                                {item.edited && item.virtualId && <Link to={`/offline/land-division/${id}?virtualId=${item.virtualId}&reason=${item.reason}&newInsured=${item.newInsured}&policyItemId=${item.policyItemId}&reviewId=${reviewId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&newExtraInfo=${item?.newExtraInfo}&edited=true`} >
                                    <button className="text-[10px] bg-orange-500 p-2 rounded-lg border border-orange-500 text-white">ویرایش قلم</button>
                                </Link>}
                            </section>
                        </PopoverContent>
                    </Popover>

                    {!item.wkt && <Link to={`/offline/location-determination-type/${id}?virtualId=${item.virtualId}&subjectNotExist=${item.subjectNotExist}&itemId=${item.virtualId}&policyItemId=${item.policyItemId}&reviewId=${reviewId}&subjectId=${subjectId}&featureId=${item.featureId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&lat=${lat}&lng=${lng}&wkt=${item.wkt}`}>
                        <button className="border w-[90px] bg-blue-500 border-blue-500 text-white shadow-md h-[30px] flex justify-center  items-center gap-2 rounded-full">
                            <span className="font-light text-sm">تعیین مکان</span>
                        </button>
                    </Link>}
                    {item.wkt && <Link to={`/offline/location-determination-type/${id}?virtualId=${item.virtualId}&reviewId=${reviewId}&subjectId=${subjectId}&featureId=${item.featureId}&policyId=${policyId}&subjectItemId=${item.subjectItemId}&farmerName=${farmerName}&lat=${lat}&lng=${lng}&wkt=${item.wkt}`}>
                        <button className="border w-[110px] bg-orange-500 border-orange-500 shadow-md h-[30px] flex justify-center text-white items-center gap-2 rounded-full">
                            <span className="font-light text-sm">ویرایش مکان</span>
                        </button></Link>}
                </section>
                <button onClick={() => setIsOpenDtl(!isOpenDtl)} className="bg-yellow-400 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </footer>


        </section>
        <div className="flex justify-center">
            {item.errorDesc ?
                <div className="bg-red-600 w-[90%] px-4 text-center bottom-[-25px] text-sm text-white rounded-b-xl">{item.errorDesc}</div> :
                (item.virtualId && !item.wkt) ? <div className="bg-red-600 w-[90%] left-[5%] text-center bottom-[-25px] text-white rounded-b-full">تعیین مکان شود</div> : ""}
        </div>
    </section>
}
