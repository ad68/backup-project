import CustomSelect from "@/components/kit/CustomSelect";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { InfoIcon, SearchIcon, Undo2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import usePrivateInfo from "./privateInfo.biz";
import { Controller } from "react-hook-form";
import CustomTextArea from "@/components/kit/CustomTextArea";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
export default function Index() {
    const navigate = useNavigate()
    const { ownerShipsOptions, irrigationSystemOptions, waterResourceOptions, control, errors, handleSubmit, onSubmit } = usePrivateInfo()
    return <form onSubmit={handleSubmit(onSubmit)} className="m-auto p-4 w-[440px]  max-w-full relative">
        <section className="mt-5 text-center">
            <span className="text-primary font-bold text-lg">اطلاعات اختصاصی:</span>
        </section>
        <section className="bg-blue-500 flex justify-center gap-2 items-center rounded-lg p-2 text-center text-white">
            <InfoIcon />
            <span>اصلاح فقط یک بار ممکن است</span>
        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">مشخصات اختصاصی:</span>
        </section>
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">شماره قطعه:</span>
            <Controller
                name="F125"
                control={control}
                render={({ field }) => (
                    <CustomTextBox value={field.value} placeholder="شماره قطعه را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                )}
            />
            {errors.F125 && <p className="text-red-500 text-xs mt-1">{errors.F125.message}</p>}
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">نام محلی:</span>
            <Controller
                name="F149"
                control={control}
                render={({ field }) => (
                    <CustomTextBox value={field.value} placeholder="نام محلی را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                )}
            />
            {errors.F149 && <p className="text-red-500 text-xs mt-1">{errors.F149.message}</p>}
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">ملاحظات و توضیحات:</span>
            <Controller
                name="F3115"
                control={control}
                render={({ field }) => (
                    <CustomTextArea value={field.value} placeholder="ملاحظات و توضیحات را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                )}
            />
            {errors.F3115 && <p className="text-red-500 text-xs mt-1">{errors.F3115.message}</p>}
        </section>

        <section className="mt-5">
            <span className="text-primary font-bold text-sm">حدود اربعه:</span>
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">شمالا:</span>
            <Controller
                name="F126"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        placeholder="شمالا را وارد کنید"
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                    />
                )}
            />
            {errors.F126 && <p className="text-red-500 text-xs mt-1">{errors.F126.message}</p>}
        </section>

        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">جنوبا:</span>
            <Controller
                name="F128"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        placeholder="جنوبا را وارد کنید"
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                    />
                )}
            />
            {errors.F128 && <p className="text-red-500 text-xs mt-1">{errors.F128.message}</p>}
        </section>

        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">شرقا:</span>
            <Controller
                name="F127"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        placeholder="شرقا را وارد کنید"
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                    />
                )}
            />
            {errors.F127 && <p className="text-red-500 text-xs mt-1">{errors.F127.message}</p>}
        </section>

        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">غربا:</span>
            <Controller
                name="F129"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        placeholder="غربا را وارد کنید"
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                    />
                )}
            />
            {errors.F129 && <p className="text-red-500 text-xs mt-1">{errors.F129.message}</p>}
        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">مشخصات کشت:</span>
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">رقم بذر:</span>
            <Controller
                name="F131"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        placeholder="رقم بذر را وارد کنید"
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                    />
                )}
            />
            {errors.F131 && <p className="text-red-500 text-xs mt-1">{errors.F131.message}</p>}
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">تاریخ کشت:</span>
            <Controller
                name="F132"
                control={control}
                render={({ field }) => (
                    <CustomDatepicker
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            {/* {errors.F132 && <p className="text-red-500 text-xs mt-1">{errors.F132.message}</p>} */}
        </section>
        <section className="mt-1">
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">نوع مالکیت:</span>
                <Controller
                    name="F150"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect options={ownerShipsOptions} value={field.value} onChange={field.onChange} />
                    )}
                />
                {errors.F150 && <p className="text-red-500 text-xs mt-1">{errors.F150.message}</p>}
            </section>

        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">آبیاری:</span>
        </section>

        <section className="mt-1">
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">منبع تامین آب:</span>
                <Controller
                    name="F134"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect value={field.value} options={waterResourceOptions} onChange={(value) => field.onChange(value)} />
                    )}
                />
                {errors.F134 && <p className="text-red-500 text-xs mt-1">{errors.F134.message}</p>}
            </section>

        </section>

        <section className="mt-1">
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">سیستم آبیاری:</span>
                <Controller
                    name="F2941"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect value={field.value} options={irrigationSystemOptions} onChange={(value) => field.onChange(value)} />
                    )}
                />
                {errors.F2941 && <p className="text-red-500 text-xs mt-1">{errors.F2941.message}</p>}
            </section>

        </section>
        <section className="mt-5">
            <span className="text-primary font-bold text-sm">پیوست فنی:</span>
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">درصد سبز شدن:</span>
            <Controller
                name="F2942"
                control={control}
                render={({ field }) => (
                    <CustomTextBox
                        placeholder="درصد سبز شدن را وارد کنید"
                        onChange={(value) => field.onChange(value)}
                        value={String(field.value)}
                    />
                )}
            />
            {errors.F2942 && <p className="text-red-500 text-xs mt-1">{errors.F2942.message}</p>}
        </section>

        <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
            <button onClick={() => navigate(-1)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </button>
            <button className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>تایید</span>
                <SearchIcon className="w-[20px]" />
            </button>
        </section>
    </form>
}
