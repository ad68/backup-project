export default function Index({ item }: { item: any }) {
    return (
        <section className="p-2 bg-slate-50 border rounded-lg h-[100px]">
            <section className="flex gap-1">
                <span className="font-light text-slate-500 text-sm">عنوان:</span>
                <span className="text-sm">{item.name}</span>
            </section>
            <section className="flex gap-2 mt-2">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">مساحت:</span>
                    <span className="text-sm">1/632</span>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">نوع:</span>
                    <span className="text-sm">Polygon</span>
                </section>
            </section>
            <section className="flex gap-1 justify-end mt-2">
                <button className="border w-[70px] bg-white border-blue-500 text-blue-500 shadow-md h-[25px] flex justify-center  items-center gap-2 rounded-full">
                    <span className="text-sm">انتخاب</span>
                </button>
                <button className="border w-[70px] bg-white border-red-500 shadow-md h-[25px] flex justify-center text-red-500 items-center gap-2 rounded-full">
                    <span className="text-sm">حذف</span>
                </button>
            </section>

        </section>
    )
}
