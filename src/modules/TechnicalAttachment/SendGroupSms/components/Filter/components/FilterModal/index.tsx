import CustomSelect from "@/components/kit/CustomSelect";

import SlidingModal from "@/components/kit/SlidingModal";
import type { FilterModalProp } from "@/modules/TechnicalAttachment/LocationDetermination/locationDetermination";
import { SearchIcon } from "lucide-react";
import useFilter from "../../Filter.biz";
import CustomSearchableSelect from "@/components/kit/CustomSearchableSelect";

export default function Index({ isOpen, setIsOpen, getList, updateFilter, filter, clearFilter }: FilterModalProp) {
    const { provinces, counties, districts, places, ruralDistricts, clearForm, search } = useFilter({ filter, clearFilter, getList, setIsOpen, updateFilter })
    return <SlidingModal isOpen={isOpen} keepChildren={true}>
        <section className="p-4">
            <section className="w-full flex justify-end">
                <button onClick={clearForm} className="border border-red-600 rounded-full text-red-600 w-[120px] bg-white text-sm py-1">پاک کردن فرم</button>
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">استان:</span>
                <CustomSelect value={filter.provinceId} options={provinces.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { updateFilter("provinceId", e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">شهرستان:</span>
                <CustomSearchableSelect value={filter.countyId} options={counties.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { updateFilter("countyId", e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">بخش:</span>
                <CustomSearchableSelect value={filter.districtId} options={districts.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { updateFilter("districtId", e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">دهستان:</span>
                <CustomSearchableSelect value={filter.ruralDistrictId} options={ruralDistricts.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { updateFilter("ruralDistrictId", e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">آبادی یا شهر:</span>
                <CustomSearchableSelect value={filter.placeId} options={places.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { updateFilter("placeId", e) }} />
            </section>
            <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
                <button onClick={() => { search() }} className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                    <span>جستجو</span>
                    <SearchIcon className="w-[20px]" />
                </button>
            </section>
        </section>

    </SlidingModal>


}
