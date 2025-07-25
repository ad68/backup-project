import { MapPinIcon, Undo2Icon } from "lucide-react"
import useInsuranceLocation from "./insuranceLocation.biz"
/* import Card from './components/Card' */
import { Switch } from "@/components/ui/switch"
import SlidingModal from "@/components/kit/SlidingModal"
import AddPolygonModal from './components/AddPolygonModal'
import { useNavigate, useSearchParams } from "react-router-dom"
import ListLoader from "@/components/kit/ListLoader"
import CustomButton from "@/components/kit/CustomButton"
import PageTitle from "@/components/kit/PageTitle"

export default function Index() {
    const { isAddPolygonModalOpen, setGeoInWkt, setIsAddPolygonModalOpen, fetchLoading, featureData, actionLoading, setSubjectNotExist, saveMapPolygon, farmLat, farmLng } = useInsuranceLocation()
    const navigate = useNavigate();
    const [setSearchParams] = useSearchParams()
    const farmerName = setSearchParams.get("farmerName")
    const policyId = setSearchParams.get("policyId")
    return <>
        <PageTitle size='small' miniDescription={`بیمه نامه: ${policyId}`} title={`${farmerName}`} />
        <section className='m-auto max-w-5xl'>
            {/*       <section className='p-2'>
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
                <span className='block text-center'>قلم بیمه شده</span>
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
        </section> */}
            <section className="p-2">
                <section className="border border-slate-200 rounded-lg p-2">
                    <span className='block text-center'>تعیین مکان</span>
                    <hr className='border-slate-300 my-1' />
                    <section dir="ltr" className="flex gap-1 mt-2 justify-end">
                        <Switch onCheckedChange={(e) => setSubjectNotExist(e)} />
                        <span className="text-sm">مورد وجود ندارد</span>
                    </section>
                    <section className="text-xs mt-1 font-light ">
                        در صورت عدم مطابقت موضوع، حدود اربعه، و یا کلاً عدم وجود محل
                    </section>
                </section>
            </section>
            <section className="p-2">
                <section className="border border-slate-200  rounded-lg p-2">
                    <span className='block text-center'>مکان</span>
                    <hr className='border-slate-300 my-1' />
                    <section className="flex justify-between gap-2 py-2">
                        <button onClick={() => setIsAddPolygonModalOpen(true)} className="border w-[190px] bg-blue-500  border-blue-500 text-white  shadow-md h-[30px] flex justify-center items-center gap-2 rounded-full">
                            <MapPinIcon className="w-[18px]" />
                            <span className="font-light text-sm">تعیین مکان از روی نقشه</span>
                        </button>
                        {/*   <button className="border w-[130px] bg-blue-500 border-blue-500 text-white shadow-md h-[30px] flex justify-center  items-center gap-2 rounded-full">
                        <span className="font-light text-sm">ارسال فایل</span>
                        <UploadCloudIcon className="w-[18px]" />
                    </button> */}
                    </section>
                    <section className="flex flex-col gap-1">
                        {fetchLoading && <section className="flex justify-center"><ListLoader /></section>}
                        {/*{featureData?.map((item: any, index: number) => (<Card item={item} key={index} />))} */}
                        {/* <Card />
                    <Card /> */}
                    </section>
                </section>
            </section>
            <section className="flex px-2 bg-white bottom-0 gap-2 mt-4 py-3 justify-end w-full">
                <CustomButton variant="outlined" onClick={() => navigate(-1)} className="rounded-full">
                    <span>بازگشت</span>
                    <Undo2Icon className="w-[20px]" />
                </CustomButton>
                <CustomButton loading={actionLoading} onClick={saveMapPolygon} className="rounded-full">
                    <span>تایید</span>
                </CustomButton>
            </section>
            <SlidingModal isOpen={isAddPolygonModalOpen} setIsOpen={setIsAddPolygonModalOpen}>
                <AddPolygonModal farmLat={farmLat} farmLng={farmLng} defaultPolygon={featureData} setIsAddPolygonModalOpen={setIsAddPolygonModalOpen} setGeoInWkt={setGeoInWkt} />
            </SlidingModal>
        </section>
    </>
}
