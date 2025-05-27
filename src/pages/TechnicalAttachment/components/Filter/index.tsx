import { FilterIcon } from "lucide-react";
import FilterModal from './components/FilterModal'
import { useState } from "react";
export default function Index() {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
    return <>
        <section className="relative">
            <span className="block h-[1px] bg-slate-200 mt-10"></span>
            <section className="flex justify-center absolute w-full top-[-19px]">
                <button onClick={() => setIsFilterModalOpen(true)} className="border border-slate-200 flex justify-center items-center gap-1 bg-white  rounded-full w-[150px] py-2">
                    <FilterIcon className="w-[18px] stroke-slate-600" />
                    <span className="text-xs font-light">جستجوی پیشرفته</span>
                </button>
            </section>

        </section>
        <FilterModal setIsOpen={setIsFilterModalOpen} isOpen={isFilterModalOpen} />
    </>

}
