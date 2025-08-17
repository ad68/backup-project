import { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import { useAxiosWithToken } from "@/hooks";
import ListLoader from '@/components/kit/ListLoader';
export default function UpdatePwaModal({ onConfirm }: { onConfirm: () => void }) {
    const [data, setData] = useState<any>({ description: "", stringParam1: "0" })
    const [actionLoading, setActionLoading] = useState(false)
    useEffect(() => {
        setActionLoading(true)
        useAxiosWithToken.get("/sabka/base-config/search/3").then(res => {
            setData(res.data)
        }).finally(() => setActionLoading(false))
    }, [])
    return <>
        <section className="fixed flex justify-center items-center z-[2000] bg-[#0000004d] h-full w-full top-0 left-0">
            <div className="w-[90%] h-[90%] rounded-[20px] flex flex-col gap-2 justify-center items-center bg-white">
                <img src="/images/home/rocket.png" className="w-[120px]" alt="rocket" />
                <span className="text-2xl font-bold text-slate-800 mt-4">تغییرات نسخه جدید</span>
                {/*  <span className="text-lg">
                    نسخه 1.1
                </span>
                <ul className="list-disc text-xs pr-10 leading-6">
                    <li>بهبود رابط کاربری بخش تعیین مکان از روی نقشه </li>
                    <li>بهبود رابط کاربری تعیین مکان</li>
                    <li>افزوده شدن قابلیت ارسال پیامک به بیمه گذار جهت اطلاع رسانی</li>
                    <li>افزودن نمایش مساحت داخل polygon به هکتار و متر</li>
                    <li>نمایش مساحت ذخیره شده در سامانه صندوق</li>
                    <li>اضافه شدن اطلاعات بیمه گذار (شماره موبایل، کد ملی)</li>
                    <li>بهبود ریسپانسیو تبلت</li>
                </ul> */}
                {/*   <span className="text-lg">
                    نسخه 1.1.1
                </span>
                <ul className="list-disc text-xs pr-10 leading-6">
                    <li>رفع مشکل ارسال مستندات برای فایل های gpx , kml</li>
                    <li>اضافه کردن قابلیت جستجو در قسمت تقسیمات کشوری</li>

                </ul> */}
                {/*    <span className="text-lg">
                    نسخه 1.1.2
                </span>
                <ul className="list-disc text-xs pr-10 leading-6">
                    <li>اضافه شدن قابلیت ذخیره نتایج جستجو</li>
                </ul>
                <div className="px-5 flex w-full mt-10">
                    <CustomButton onClick={onConfirm} className="w-full">به روز رسانی</CustomButton>
                </div> */}
                {/*  <span className="text-lg">
                    نسخه 1.1.3
                </span>
                <ul className="list-disc text-xs pr-10 leading-6">
                    <li>رفع مشکل ظاهر شدن popup زمان رسم هر نقطه polygon</li>
                </ul> */}
                {/*  <span className="text-lg">
                    نسخه 1.1.4
                </span>
                <ul className="list-disc text-xs pr-10 leading-6">
                    <li>رفع مشکل بر عکس بودن جهت دوربین در زمان عکاسی</li>
                    <li>نمایش پیغام خطا در زمان عدم دریافت موقعیت مکانی توسط موقعیت یاب (gps)</li>
                </ul> */}
                {actionLoading ? <ListLoader /> : <><span className="text-lg">
                    نسخه {data.stringParam1}
                </span>
                    <ul className="list-disc text-xs pr-10 leading-6">
                        {data.description.split("/").map((item: any, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul></>}
                <div className="px-5 flex w-full mt-5">
                    <CustomButton onClick={onConfirm} className="w-full">به روز رسانی</CustomButton>
                </div>
            </div>
        </section>
    </>
}
