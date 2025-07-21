import CustomSelect from "@/components/kit/CustomSelect";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { InfoIcon, Undo2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import usePrivateInfo from "./privateInfo.biz";
import { Controller } from "react-hook-form";
import CustomTextArea from "@/components/kit/CustomTextArea";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
import FormTitle from "@/components/kit/FormTitle";
import FormField from "@/components/kit/FormField";
export default function Index() {
    const navigate = useNavigate()
    const { ownerShipsOptions, irrigationSystemOptions, waterResourceOptions, control, errors, handleSubmit, onSubmit } = usePrivateInfo()
    return <form onSubmit={handleSubmit(onSubmit)} className="m-auto p-4 max-5xl relative">
        <section className="mt-5 text-center">
            <span className="text-primary font-bold text-lg">اطلاعات اختصاصی:</span>
        </section>
        <section className="bg-blue-500 flex justify-center gap-2 items-center rounded-lg p-2 text-center text-white">
            <InfoIcon />
            <span>اصلاح فقط یک بار ممکن است</span>
        </section>
        <FormTitle>
            مشخصات اختصاصی:
        </FormTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FormField isError={errors.F125} errorMessage={errors?.F125?.message} title="شماره قطعه">
                <Controller
                    name="F125"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox value={field.value} placeholder="شماره قطعه را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <FormField isError={errors.F149} errorMessage={errors?.F149?.message} title="نام محلی">
                <Controller
                    name="F149"
                    control={control}
                    render={({ field }) => (
                        <CustomTextBox value={field.value} placeholder="نام محلی را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <FormField isError={errors.F3115} errorMessage={errors?.F3115?.message} title="ملاحظات و توضیحات">
                <Controller
                    name="F3115"
                    control={control}
                    render={({ field }) => (
                        <CustomTextArea value={field.value} placeholder="ملاحظات و توضیحات را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
        </div>
        <FormTitle>
            حدود اربعه:
        </FormTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FormField isError={errors.F126} errorMessage={errors?.F126?.message} title="شمالا">
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
            </FormField>
            <FormField isError={errors.F128} errorMessage={errors?.F128?.message} title="جنوبا">
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
            </FormField>
            <FormField isError={errors.F127} errorMessage={errors?.F127?.message} title="شرقا">
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
            </FormField>
            <FormField isError={errors.F129} errorMessage={errors?.F129?.message} title="غربا">
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
            </FormField>
        </div>
        <FormTitle>
            مشخصات کشت:
        </FormTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FormField isError={errors.F131} errorMessage={errors?.F131?.message} title="رقم بذر">
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
            </FormField>
            <FormField title="تاریخ کشت">
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
            </FormField>
            <FormField isError={errors.F150} errorMessage={errors?.F150?.message} title="نوع مالکیت">
                <Controller
                    name="F150"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect options={ownerShipsOptions} value={field.value} onChange={field.onChange} />
                    )}
                />
            </FormField>
        </div>
        <FormTitle>
            آبیاری:
        </FormTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FormField isError={errors.F134} errorMessage={errors?.F134?.message} title="منبع تامین آب">
                <Controller
                    name="F134"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect value={field.value} options={waterResourceOptions} onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
            <FormField isError={errors.F2941} errorMessage={errors?.F2941?.message} title="سیستم آبیاری">
                <Controller
                    name="F2941"
                    control={control}
                    render={({ field }) => (
                        <CustomSelect value={field.value} options={irrigationSystemOptions} onChange={(value) => field.onChange(value)} />
                    )}
                />
            </FormField>
        </div>
        <FormTitle>
            پیوست فنی:
        </FormTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FormField isError={errors.F2942} errorMessage={errors?.F2942?.message} title="درصد سبز شدن">
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
            </FormField>
        </div>
        <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
            <button type="button" onClick={() => navigate(-1)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </button>
            <button className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>تایید</span>
            </button>
        </section>
    </form>
}
