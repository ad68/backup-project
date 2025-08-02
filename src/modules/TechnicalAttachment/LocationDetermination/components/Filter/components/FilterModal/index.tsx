import CustomSelect from "@/components/kit/CustomSelect";
import CustomTextBox from "@/components/kit/CustomTextBox";
import SlidingModal from "@/components/kit/SlidingModal";
import type { FilterModalProp } from "@/modules/TechnicalAttachment/LocationDetermination/technicalAttachment.type";
import { SearchIcon, Undo2Icon } from "lucide-react";
import useFilter from "../../Filter.biz";
import CustomSearchableSelect from "@/components/kit/CustomSearchableSelect/inex";

export default function Index({ isOpen, setIsOpen, setSearchParams }: FilterModalProp) {
    const { provinces, setProvinceId, counties, setCountyId, subSectionId, setSubSectionId, districts, setDistrictId, searchList, places, ruralDistricts, products, setPlaceId, setRuralDistrictId, placeId, districtId, ruralDistrictId, provinceId, countyId, productId, setProductId, nationalCode, setNationalCode, policyId, setPolicyId, clearForm } = useFilter(setSearchParams)
    return <SlidingModal isOpen={isOpen} keepChildren={true}>
        <section className="p-4">
            <section className="w-full flex justify-end">
                <button onClick={clearForm} className="border border-red-600 rounded-full text-red-600 w-[120px] bg-white text-sm py-1">پاک کردن فرم</button>
            </section>
            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش اول:</span>
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">شناسه موضوع:</span>
                <CustomTextBox value={productId} onChange={(e) => { setProductId(e) }} placeholder="شناسه موضوع را وارد کنید" />
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">شناسه ملی:</span>
                <CustomTextBox value={nationalCode} onChange={(e) => { setNationalCode(e) }} placeholder="شناسه ملی را وارد کنید" />
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">شناسه بیمه نامه:</span>
                <CustomTextBox value={policyId} onChange={(e) => { setPolicyId(e) }} placeholder="شناسه بیمه را وارد کنید" />
            </section>

            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش دوم:</span>
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">استان:</span>
                <CustomSelect value={provinceId} options={provinces.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setProvinceId(e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">شهرستان:</span>
                <CustomSearchableSelect value={countyId} options={counties.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setCountyId(e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">بخش:</span>
                <CustomSearchableSelect value={districtId} options={districts.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setDistrictId(e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">دهستان:</span>
                <CustomSearchableSelect value={ruralDistrictId} options={ruralDistricts.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setRuralDistrictId(e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">آبادی یا شهر:</span>
                <CustomSearchableSelect value={placeId} options={places.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setPlaceId(e) }} />
            </section>
            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش سوم:</span>
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">زیربخش:</span>
                <CustomSearchableSelect value={subSectionId} options={[{ label: "محصولات زراعی", value: "1" }]} onChange={(e) => setSubSectionId(e)} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs"> موضوع:</span>
                <CustomSearchableSelect value={productId} options={products.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setProductId(e) }} />
            </section>
            <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
                <button onClick={() => setIsOpen(false)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                    <span>بازگشت</span>
                    <Undo2Icon className="w-[20px]" />
                </button>
                <button onClick={() => { searchList(); setIsOpen(false) }} className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                    <span>جستجو</span>
                    <SearchIcon className="w-[20px]" />
                </button>
            </section>
        </section>

    </SlidingModal>


}
