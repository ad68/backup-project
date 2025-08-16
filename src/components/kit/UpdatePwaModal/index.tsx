import CustomButton from "../CustomButton";

export default function UpdatePwaModal({ onConfirm }: { onConfirm: () => void }) {
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
                <span className="text-lg">
                    نسخه 2.0.0
                </span>
                {/* <ul className="list-disc text-xs pr-10 leading-6">
                    <li>فعال شدن حالت آفلاین</li>
                </ul> */}
                <div className="px-5 flex w-full mt-10">
                    <CustomButton onClick={onConfirm} className="w-full">به روز رسانی</CustomButton>
                </div>
            </div>
        </section>
    </>
}
