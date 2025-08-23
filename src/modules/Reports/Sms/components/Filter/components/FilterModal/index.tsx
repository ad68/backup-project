
import CustomTextBox from "@/components/kit/CustomTextBox";
import SlidingModal from "@/components/kit/SlidingModal";

import { SearchIcon, Undo2Icon } from "lucide-react";
import useFilter from "../../Filter.biz";
import FormField from "@/components/kit/FormField";
import { Controller } from "react-hook-form";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
export default function Index({ isOpen, setIsOpen, setParams }: any) {
    const { handleSubmit, onSubmit, control, clearForm, errors } = useFilter(setParams, setIsOpen)
    return <SlidingModal isOpen={isOpen} keepChildren={true}>
        <form onSubmit={handleSubmit(onSubmit)} className="m-auto p-4 max-5xl relative pb-[80px]">
            <section className="p-4">
                <section className="w-full flex justify-end">
                    <button type="button" onClick={() => clearForm()} className="border border-red-600 rounded-full text-red-600 w-[120px] bg-white text-sm py-1">پاک کردن فرم</button>
                </section>
                <FormField title="شماره موبایل" isError={errors.mobileNumber} errorMessage={errors.mobileNumber?.message}>
                    <Controller
                        name="mobileNumber"
                        control={control}
                        render={({ field }) => (
                            <CustomTextBox
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormField>
                <FormField title="شماره بیمه" isError={errors.policyId} errorMessage={errors.policyId?.message}>
                    <Controller
                        name="policyId"
                        control={control}
                        render={({ field }) => (
                            <CustomTextBox
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormField>
                <FormField title="از تاریخ">
                    <Controller
                        name="fromDate"
                        control={control}
                        render={({ field }) => (
                            <CustomDatepicker
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormField>
                <FormField title="تا تاریخ">
                    <Controller
                        name="toDate"
                        control={control}
                        render={({ field }) => (
                            <CustomDatepicker
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </FormField>
                <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
                    <button type="button" onClick={() => setIsOpen(false)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                        <span>بازگشت</span>
                        <Undo2Icon className="w-[20px]" />
                    </button>
                    <button className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                        <span>جستجو</span>
                        <SearchIcon className="w-[20px]" />
                    </button>
                </section>
            </section>
        </form>
    </SlidingModal>
}
