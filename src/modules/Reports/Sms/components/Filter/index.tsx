import { FilterIcon } from "lucide-react";
import FilterModal from './components/FilterModal'
import { useState } from "react";
export default function Index({ setParams }: any) {
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
    return <>
        <section className="relative">
            <span className="block h-[2px] bg-primary mt-10"></span>
            <section className="flex justify-center absolute w-full top-[-19px]">
                <button onClick={() => setIsFilterModalOpen(true)} className="border bg-primary border-primary flex justify-center items-center gap-1   rounded-full w-[150px] py-2">
                    <FilterIcon className="w-[18px] stroke-white" />
                    <span className="text-xs font-bold text-white">جستجوی پیشرفته</span>
                </button>
            </section>
        </section>
        <FilterModal setParams={setParams} setIsOpen={setIsFilterModalOpen} isOpen={isFilterModalOpen} />
    </>

}
