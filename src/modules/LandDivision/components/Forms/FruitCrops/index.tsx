import { Undo2Icon, } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom";
import CustomTextBox from "@/components/kit/CustomTextBox";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { Controller } from "react-hook-form";
import InfoModal from '../../InfoModal'
import FormTitle from "@/components/kit/FormTitle";
import FormField from "@/components/kit/FormField";
import CustomTextArea from "@/components/kit/CustomTextArea";
import CustomDatepicker from "@/components/kit/CustomDatepicker";
import CustomSelect from "@/components/kit/CustomSelect";
import PageTitle from "@/components/kit/PageTitle";
import CustomButton from "@/components/kit/CustomButton";
import useCropsLandDivision from "./FruitCropsLandDivision.biz";
import { alternateBearingOptions, orchardTypeOptions, ownerShipsOptions, rootstockTypeOptions, topographicPositionOptions } from "@/constants/SelectOptions";
export default function Index() {
    const { isInfoModalOpen, setIsInfoModalOpen, control, errors, handleSubmit, onSubmit } = useCropsLandDivision()
    const navigate = useNavigate();
    const [setSearchParams] = useSearchParams()
    const farmerName = setSearchParams.get("farmerName")
    const policyId = setSearchParams.get("policyId")
    return <>
        <PageTitle size='small' miniDescription={`بیمه نامه: ${policyId}`} title={`${farmerName}`} />
        <section className='m-auto w-full max-w-5xl p-2'>
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
                    <span className="text-primary font-bold text-lg">اختصاصی قلم بیمه‌شده:</span>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <FormField isError={errors.F96} errorMessage={errors?.F96?.message} title="شماره قطعه">
                        <Controller
                            name="F96"
                            control={control}
                            render={({ field }) => (
                                <CustomTextBox value={field.value} placeholder="شماره قطعه را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                            )}
                        />
                    </FormField>
                    <FormField isError={errors.F156} errorMessage={errors?.F156?.message} title="نام محلی">
                        <Controller
                            name="F156"
                            control={control}
                            render={({ field }) => (
                                <CustomTextBox value={field.value} placeholder="نام محلی را وارد کنید" className="w-full" onChange={(value) => field.onChange(value)} />
                            )}
                        />
                    </FormField>
                    <FormField isError={errors.F70} errorMessage={errors?.F70?.message} title="موقعیت توپوگرافی">
                        <Controller
                            name="F70"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect options={topographicPositionOptions} value={field.value} onChange={field.onChange} />)}
                        />
                    </FormField>
                </div>
                <FormTitle>
                    حدود اربعه:
                </FormTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <FormField isError={errors.F64} errorMessage={errors?.F64?.message} title="شمالا">
                        <Controller
                            name="F64"
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
                    <FormField isError={errors.F65} errorMessage={errors?.F65?.message} title="جنوبا">
                        <Controller
                            name="F65"
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
                    <FormField isError={errors.F66} errorMessage={errors?.F66?.message} title="شرقا">
                        <Controller
                            name="F66"
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
                    <FormField isError={errors.F67} errorMessage={errors?.F67?.message} title="غربا">
                        <Controller
                            name="F67"
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
                    اطلاعات واریته:
                </FormTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <FormField isError={errors.F77} errorMessage={errors?.F77?.message} title="واریته غالب">
                        <Controller
                            name="F77"
                            control={control}
                            render={({ field }) => (
                                <CustomTextBox
                                    placeholder="واریته غالب  را وارد کنید"
                                    onChange={(value) => field.onChange(value)}
                                    value={field.value}
                                />
                            )}
                        />
                    </FormField>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <FormField isError={errors.F78} errorMessage={errors?.F78?.message} title="درصد واریته غالب">
                            <Controller
                                name="F78"
                                control={control}
                                render={({ field }) => (
                                    <CustomTextBox
                                        placeholder="درصد واریته غالب را وارد کنید"
                                        onChange={(value) => field.onChange(value)}
                                        value={String(field.value)}
                                    />
                                )}
                            />
                        </FormField>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <FormField isError={errors.F76} errorMessage={errors?.F76?.message} title="سایر واریته ها">
                            <Controller
                                name="F76"
                                control={control}
                                render={({ field }) => (
                                    <CustomTextBox
                                        placeholder="سایر واریته ها  را وارد کنید"
                                        onChange={(value) => field.onChange(value)}
                                        value={field.value}
                                    />
                                )}
                            />
                        </FormField>
                    </div>

                </div>
                <FormTitle>
                    اطلاعات باغ:
                </FormTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <FormField isError={errors.F72} errorMessage={errors?.F72?.message} title="نوع پایه">
                        <Controller
                            name="F72"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect options={rootstockTypeOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                    </FormField>
                    <FormField isError={errors.F69} errorMessage={errors?.F69?.message} title="تناوب باردهی">
                        <Controller
                            name="F69"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect options={alternateBearingOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                    </FormField>
                    <FormField isError={errors.F74} errorMessage={errors?.F74?.message} title="نوع باغ">
                        <Controller
                            name="F74"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect options={orchardTypeOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                    </FormField>
                    <FormField isError={errors.F75} errorMessage={errors?.F75?.message} title="نوع مالکیت">
                        <Controller
                            name="F75"
                            control={control}
                            render={({ field }) => (
                                <CustomSelect options={ownerShipsOptions} value={field.value} onChange={field.onChange} />
                            )}
                        />
                    </FormField>
                </div>


                {/*<FormField title="تاریخ کشت">
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
                </div> */}
                <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
                    <CustomButton variant="outlined" type="button" onClick={() => navigate(-1)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                        <span>بازگشت</span>
                        <Undo2Icon className="w-[20px]" />
                    </CustomButton>
                    <CustomButton className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                        <span>تایید</span>
                    </CustomButton>
                </section>
            </form>

        </section>

        <InfoModal isOpen={isInfoModalOpen} setIsOpen={setIsInfoModalOpen} />
    </>
}
