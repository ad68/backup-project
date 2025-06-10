export default function Index() {
    return (
        <section className="p-2 bg-slate-50 border rounded-lg h-auto">
            <section className="flex gap-1">
                <span className="font-light text-slate-500 text-sm">شناسه:</span>
                <span className="text-sm">12351913</span>
            </section>
            <section className="flex flex-col gap-2 mt-2">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">عنوان:</span>
                    <span className="text-sm">کلزا عباس درخشان راد</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">الصاق‌کننده:</span>
                    <span className="text-sm">محمود دادپور</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">تاریخ درج:</span>
                    <span className="text-sm">1404/01/29</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">حجم فایل:</span>
                    <span className="text-sm">11 کیلوبایت</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">:شناسه فایل</span>
                    <span className="text-sm">34538846</span>
                </section>
                <section className="flex flex-col gap-1">
                    <span className="font-light text-slate-500 text-sm">نام فایل:</span>
                    <span className="text-sm">20250416-170348 - کلزا عباس درخشان راد ق 1.gpx</span>
                </section>
            </section>
            <section className="flex gap-1 justify-end mt-2">
                <button className="border w-[70px] bg-white border-blue-500 text-blue-500 shadow-md h-[25px] flex justify-center  items-center gap-2 rounded-full">
                    <span className="text-sm">دانلود</span>
                </button>
                <button className="border w-[70px] bg-white border-red-500 shadow-md h-[25px] flex justify-center text-red-500 items-center gap-2 rounded-full">
                    <span className="text-sm">حذف</span>
                </button>
            </section>

        </section>
    )
}
