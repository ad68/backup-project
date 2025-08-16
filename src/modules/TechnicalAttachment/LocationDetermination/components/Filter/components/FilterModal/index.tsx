import CustomSelect from "@/components/kit/CustomSelect";
import CustomTextBox from "@/components/kit/CustomTextBox";
import SlidingModal from "@/components/kit/SlidingModal";
import type { FilterModalProp } from "@/modules/TechnicalAttachment/LocationDetermination/technicalAttachment.type";
import { SearchIcon, Undo2Icon } from "lucide-react";
import useFilter from "../../Filter.biz";
import CustomSearchableSelect from "@/components/kit/CustomSearchableSelect/inex";

export default function Index({ isOpen, setIsOpen, getList }: FilterModalProp) {
    const { provinces, counties, districts, places, ruralDistricts, products, clearForm, filter, updateFilter } = useFilter()
    return <SlidingModal isOpen={isOpen} keepChildren={true}>
        <section className="p-4">
            <section className="w-full flex justify-end">
                <button onClick={clearForm} className="border border-red-600 rounded-full text-red-600 w-[120px] bg-white text-sm py-1">پاک کردن فرم</button>
            </section>
            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش اول:</span>
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">کلید واژه:</span>
                <CustomTextBox value={filter.keyword} onChange={(e) => { updateFilter("keyword", e) }} placeholder="شناسه موضوع را وارد کنید" />
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">شناسه موضوع:</span>
                <CustomTextBox value={filter.formReviewId} onChange={(e) => { updateFilter("formReviewId", e) }} placeholder="شناسه موضوع را وارد کنید" />
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">شناسه ملی:</span>
                <CustomTextBox value={filter.nationalCode} onChange={(e) => { updateFilter("nationalCode", e) }} placeholder="شناسه ملی را وارد کنید" />
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">شناسه بیمه نامه:</span>
                <CustomTextBox value={filter.policyId} onChange={(e) => { updateFilter("policyId", e) }} placeholder="شناسه بیمه را وارد کنید" />
            </section>

            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش دوم:</span>
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
            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش سوم:</span>
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">زیربخش:</span>
                <CustomSearchableSelect value={filter.subSectionId} options={[{ label: "محصولات زراعی", value: "1" }]} onChange={(e) => updateFilter("subSectionId", e)} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs"> موضوع:</span>
                <CustomSearchableSelect value={filter.productId} options={products.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { updateFilter("productId", e) }} />
            </section>
            <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
                <button onClick={() => setIsOpen(false)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                    <span>بازگشت</span>
                    <Undo2Icon className="w-[20px]" />
                </button>
                <button onClick={() => { getList(); setIsOpen(false) }} className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                    <span>جستجو</span>
                    <SearchIcon className="w-[20px]" />
                </button>
            </section>
        </section>

    </SlidingModal>


}
