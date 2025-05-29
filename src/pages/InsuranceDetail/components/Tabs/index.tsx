export default function Index({ activeTab, setActiveTab }: { activeTab: number, setActiveTab: (value: number) => void }) {
    return <section className="grid grid-cols-3 gap-1 mt-5 px-2">
        <span onClick={() => setActiveTab(1)} className={`text-center cursor-pointer rounded-full py-3 ${activeTab === 1 ? `bg-primary text-white` : `bg-slate-100  text-primary`}`}>مکان اقلام</span>
        <span onClick={() => setActiveTab(2)} className={`text-center cursor-pointer rounded-full py-3 ${activeTab === 2 ? `bg-primary text-white` : `bg-slate-100  text-primary`}`}>مستندات</span>
        <span onClick={() => setActiveTab(3)} className={`text-center cursor-pointer rounded-full  py-3  ${activeTab === 3 ? `bg-primary text-white` : `bg-slate-100  text-primary`}`}>نتیجه</span>
    </section>
}
