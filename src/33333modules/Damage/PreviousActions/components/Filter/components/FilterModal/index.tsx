import CustomSelect from "@/components/kit/CustomSelect";
import CustomTextBox from "@/components/kit/CustomTextBox";
import SlidingModal from "@/components/kit/SlidingModal";
import type { FilterModalProp } from "@/modules/TechnicalAttachment/LocationDetermination/technicalAttachment.type";
import { SearchIcon, Undo2Icon } from "lucide-react";
import useFilter from "../../Filter.biz";
import { Switch } from "@/components/ui/switch";
/* import CustomDatepicker from "@/components/kit/CustomDatepicker";
import { useState } from "react"; */

export default function Index({ isOpen, setIsOpen, setSearchParams }: FilterModalProp) {
    const { provinces, setProvinceId, counties, setCountyId, districts, setDistrictId, searchList, places, ruralDistricts, setPlaceId, setRuralDistrictId, placeId, districtId, ruralDistrictId, provinceId, countyId, setNationalCode, setPolicyId, clearForm } = useFilter(setSearchParams)
    /*  const [filterFromDate, setFilterFromDate] = useState("") */
    return <SlidingModal isOpen={isOpen} keepChildren={true}>
        <section className="p-4">
            <section className="w-full flex justify-end">
                <button onClick={clearForm} className="border border-red-600 rounded-full text-red-600 w-[120px] bg-white text-sm py-1">پاک کردن فرم</button>
            </section>
            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش اول:</span>
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">خسارت:</span>
                <CustomTextBox onChange={() => { }} placeholder=" خسارت را وارد کنید" />
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">بیمه نامه:</span>
                <CustomTextBox onChange={(e) => { setNationalCode(e) }} placeholder="بیمه نامه را وارد کنید" />
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">مورد:</span>
                <CustomTextBox onChange={(e) => { setPolicyId(e) }} placeholder="مورد را وارد کنید" />
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">کد ملی ذینفع:</span>
                <CustomTextBox onChange={(e) => { setPolicyId(e) }} placeholder=" کد ملی ذینفع را وارد کنید" />
            </section>
            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش دوم:</span>
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">شعبه:</span>
                <CustomSelect value={provinceId} options={[{ label: "تست", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">استان:</span>
                <CustomSelect value={provinceId} options={provinces.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setProvinceId(e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">شهرستان:</span>
                <CustomSelect value={countyId} options={counties.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setCountyId(e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">بخش:</span>
                <CustomSelect value={districtId} options={districts.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setDistrictId(e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">دهستان:</span>
                <CustomSelect value={ruralDistrictId} options={ruralDistricts.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setRuralDistrictId(e) }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">آبادی یا شهر:</span>
                <CustomSelect value={placeId} options={places.map((item: any) => ({ label: item.title, value: item.id }))} onChange={(e) => { setPlaceId(e) }} />
            </section>
            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش سوم:</span>
            </section>
            <section className="mt-2">
                <span className="font-light text-slate-700 text-xs">طرح:</span>
                <CustomTextBox onChange={() => { }} placeholder=" طرح را وارد کنید" />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">سال زراعی:</span>
                <CustomSelect value={provinceId} options={[{ label: "تست", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">زیر بخش:</span>
                <CustomSelect value={provinceId} options={[{ label: "تست", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">موضوع:</span>
                <CustomSelect value={provinceId} options={[{ label: "تست", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">دسته طرح:</span>
                <CustomSelect value={provinceId} options={[{ label: "تست", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش چهارم:</span>
            </section>
            <section dir="ltr" className="flex gap-1 mt-2 justify-end">
                <Switch />
                <span className="text-sm">فقط موارد اعتراضی</span>
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">وضعیت:</span>
                <CustomSelect value={provinceId} options={[{ label: "تست", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">نتیجه:</span>
                <CustomSelect value={provinceId} options={[{ label: "تست", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">ارزیاب:</span>
                <CustomSelect value={provinceId} options={[{ label: "تست", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">نماینده ارزیاب:</span>
                <CustomSelect value={provinceId} options={[{ label: "تست", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="mt-5">
                <span className="text-primary font-bold text-sm">بخش پنجم:</span>
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">تاریخ ارجاع :</span>
                <section className="grid grid-cols-1 gap-2">
                    {/*   <CustomDatepicker
                        value={filterFromDate}
                        onChange={(e) => {
                            setFilterFromDate(`${e?.year}/${e?.month}/${e?.day}`)
                        }}
                    /> */}
                    <span className="font-light text-slate-700 text-xs">تا</span>
                    {/*  <CustomDatepicker
                        value={filterFromDate}
                        onChange={(e) => {
                            setFilterFromDate(`${e?.year}/${e?.month}/${e?.day}`)
                        }}
                    /> */}
                </section>
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">تاریخ خاتمه اقدام :</span>
                <section className="grid grid-cols-1 gap-2">
                    {/* <CustomDatepicker
                        value={filterFromDate}
                        onChange={(e) => {
                            setFilterFromDate(`${e?.year}/${e?.month}/${e?.day}`)
                        }}
                    /> */}
                    <span className="font-light text-slate-700 text-xs">تا</span>
                    {/*  <CustomDatepicker
                        value={filterFromDate}
                        onChange={(e) => {
                            setFilterFromDate(`${e?.year}/${e?.month}/${e?.day}`)
                        }}
                    /> */}
                </section>
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
