import { Undo2Icon, } from "lucide-react"
import useLandDivision from "./landDivision.biz"
import { useNavigate, useSearchParams } from "react-router-dom";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { Controller } from "react-hook-form";
import InfoModal from './components/InfoModal'
import FormTitle from "@/components/kit/FormTitle";
import FormField from "@/components/kit/FormField";
import CustomTextArea from "@/components/kit/CustomTextArea";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
import CustomSelect from "@/components/kit/CustomSelect";
import PageTitle from "@/components/kit/PageTitle";
export default function Index() {
    const { isInfoModalOpen, setIsInfoModalOpen, ownerShipsOptions, irrigationSystemOptions, waterResourceOptions, control, errors, handleSubmit, onSubmit } = useLandDivision()
    const navigate = useNavigate();
    const [setSearchParams] = useSearchParams()
    const farmerName = setSearchParams.get("farmerName")
    const policyId = setSearchParams.get("policyId")
    return <>
        <PageTitle size='small' miniDescription={`بیمه نامه: ${policyId}`} title={`${farmerName}`} />
        <section className='m-auto w-full max-w-5xl p-2'>
            {/*  <section className='p-2'>
            <section className={`border ${isOpenDtl ? `h-auto` : `h-[160px]`} pb-12 relative overflow-hidden bg-slate-50 border-slate-200 p-2 rounded-lg mt-5`}>
                <span className='block text-center'>مشخصات بیمه نامه</span>
                <hr className='border-slate-300 my-1' />
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">بیمه‌نامه:</span>
                        <span className="text-sm">26483847</span>
                    </section>
                </section>
                <section>
                    <section className="flex gap-1 mt-2">
                        <span className="font-light text-slate-500 text-sm">مورد:</span>
                        <span className="text-sm">22642929</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">تاریخ فعال‌سازی:</span>
                        <span className="text-sm">1403/11/06</span>
                    </section>

                </section>
                <section className='mt-2'>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">مساحت:</span>
                        <span className="text-sm">6 هکتار</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between items-center w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">شعبه:</span>
                        <span className="text-sm">اسلامشهر</span>
                    </section>

                </section>
                <section className='mt-2'>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">طرح:</span>
                        <span className="text-sm">9326</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">ذینفع:</span>
                        <span className="text-sm">عباس درخشان راد (2649092221)</span>
                    </section>

                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">موضوع:</span>
                        <span className="text-sm">کلزا آبی (فراگیر اجباری)</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">تاریخ اعتبار:</span>
                        <span className="text-sm">1403/06/20 ~ 1404/04/10</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">سال زراعی:</span>
                        <span className="text-sm">1403-04</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">صادرکننده:</span>
                        <span className="text-sm">مهر پاد زرین تار (جیران پورمحبی حسن کیاده)</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">ارزیاب:</span>
                        <span className="text-sm">ارزیابی خسارت بیمه ای ارزیابان ایرانیان پوشش (محمود دادپور)</span>
                    </section>
                </section>

                <section className="flex mt-2 justify-between w-full">
                    <section className="flex flex-col gap-1">
                        <span className="font-light text-slate-500 text-sm">نشانی:</span>
                        <span className="text-sm ">تهران، اسلامشهر، مرکزی، ده عباس، شهر اسلامشهر - کشت 1928129</span>
                    </section>
                </section>
                <button onClick={() => setIsOpenDtl(!isOpenDtl)} className="bg-yellow-400 absolute bottom-2 left-1 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </section>
        </section>
        <section className='p-2'>
            <section className={`border ${isOpenDtl1 ? `h-auto` : `h-[160px]`} pb-12 overflow-hidden bg-slate-50 relative border-slate-200 p-2 rounded-lg mt-2`}>
                <span className='block text-center'>قلم بیمه‌شده اصلی</span>
                <hr className='border-slate-300 my-1' />
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">قلم بیمه‌شده:</span>
                        <span className="text-sm">188109910</span>
                    </section>
                </section>
                <section>
                    <section className="flex gap-1 mt-2">
                        <span className="font-light text-slate-500 text-sm">قلم مورد:</span>
                        <span className="text-sm">160856886</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">مساحت بیمه‌شده:</span>
                        <span className="text-sm">2/9 هکتار</span>
                    </section>
                </section>
                <section className='mt-2'>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">حق بیمه:</span>
                        <span className="text-sm">37,475,158 ریال</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between items-center w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">حداکثر تعهد:</span>
                        <span className="text-sm">232,000,000 ریال</span>
                    </section>

                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">مساحت واقعی:</span>
                        <span className="text-sm">.......</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">سهم دولت:</span>
                        <span className="text-sm"> 13,116,303 ریال</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">حداکثر تعهد واقعی:</span>
                        <span className="text-sm">...</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">مساحت خسارت‌دیده:</span>
                        <span className="text-sm">...</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">سهم بیمه‌گذار:</span>
                        <span className="text-sm">24,358,855 ریال</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">غرامت:</span>
                        <span className="text-sm">0 ریال</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">کشت:</span>
                        <span className="text-sm">عملکرد</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex flex-col gap-1">
                        <span className="font-light text-slate-500 text-sm">شماره قطعه:</span>
                        <span className="text-sm">1 ، نام محلی: کمالیه، ملاحظات و توضیحات: ، شمالا: اراضی امیر بردیا نیک نیا، جنوبا: اراضی اردوان نیک نیا، شرقا: اراضی آستان، غربا: اراضی نیک نیا، رقم بذر: نپتون، تاریخ کشت: 1403/07/25، نوع مالکیت: استیجاری، منبع تامین آب: کانال، سیستم آبیاری: غرقابی، درصد سبز شدن: 100 درصد،</span>
                    </section>
                </section>
                <button onClick={() => setIsOpenDtl1(!isOpenDtl1)} className="bg-yellow-400 absolute bottom-2 left-1 shadow-md w-[36px] h-[30px] flex justify-center items-center rounded-full">
                    {isOpenDtl1 ? <ChevronUp color="white" className="w-[20px]" /> : <ChevronDown color="white" className="w-[20px]" />}
                </button>
            </section>
        </section> */}
            {/*   <PrivateInfo /> */}





            <form onSubmit={handleSubmit(onSubmit)} className="m-auto p-4 max-5xl relative">
                <section className=" text-center">
                    <span className="text-primary font-bold text-lg">تقسیم قلم بیمه‌شده:</span>
                </section>
                <button type="button" onClick={() => setIsInfoModalOpen(true)} className="border w-[90px]  bg-white border-blue-500 text-blue-500 shadow-md h-[30px] flex justify-center mt-3 items-center gap-2 rounded-full">
                    <InfoIcon className="stroke-blue-500 w-[20px]" />
                    <span className="text-sm">نکات</span>
                </button>
                <FormField isError={errors.newInsured} errorMessage={errors?.newInsured?.message} title="مساحت قلم جدید (هکتار)">
                    <Controller
                        name="newInsured"
                        control={control}
                        render={({ field }) => (
                            <CustomTextBox value={field.value} placeholder="مساحت قلم جدید را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                        )}
                    />
                </FormField>
                <FormField isError={errors.reason} errorMessage={errors?.reason?.message} title="علت">
                    <Controller
                        name="reason"
                        control={control}
                        render={({ field }) => (
                            <CustomTextArea value={field.value} placeholder="علت را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                        )}
                    />
                </FormField>
                <section className="mt-5 text-center">
                    <span className="text-primary font-bold text-lg"> اختصاصی قلم بیمه‌شده:</span>
                </section>

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

        </section>

        <InfoModal isOpen={isInfoModalOpen} setIsOpen={setIsInfoModalOpen} />
    </>
}
