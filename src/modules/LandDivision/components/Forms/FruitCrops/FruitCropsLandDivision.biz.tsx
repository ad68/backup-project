
import { toastSuccess } from "@/components/kit/toast";
import { isDev } from "@/config/env";
import { irrigationSystemOptions, ownerShipsOptions, waterResourceOptions } from "@/constants/SelectOptions";
import { validationMessages } from "@/constants/validationMessages";
import { useAxiosWithToken } from "@/hooks";
import { JSONStringToObject, removeKeys } from "@/utils/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
const schema = z.object({
    F96: z.coerce.number({ required_error: validationMessages.required, invalid_type_error: "این فیلد باید عدد باشد" }).min(1, validationMessages.minLength(1)), /* شماره قطعه */
    F156: z.string().max(100, validationMessages.maxLength(100)).optional(), /* نام محلی */
    F70: z.string().max(500, validationMessages.maxLength(500)).optional(), /* موقعیت توپوگرافی*/
    newInsured: z.coerce.number({ required_error: validationMessages.required, invalid_type_error: "این فیلد باید عدد باشد" }).max(500, validationMessages.maxLength(500)), /* مساحت قلم جدید*/
    reason: z.string().max(500, validationMessages.maxLength(500)).optional(), /* علت*/
    F64: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /* شمالا*/
    F65: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /* جنوبا*/
    F66: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /* شرقا*/
    F67: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /* غربا*/
    F77: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /*واریته غالب*/
    F78: z.coerce.number({ invalid_type_error: "این فیلد باید عدد باشد", }).optional(), /*درصد واریته غالب*/
    F76: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /*سایر واریته‌ها*/
    F72: z.string({ required_error: validationMessages.required }), /*نوع پایه*/
    F69: z.string({ required_error: validationMessages.required }), /*تناوب باردهی*/
    F74: z.string({ required_error: validationMessages.required }), /*نوع باغ*/
    F75: z.string({ required_error: validationMessages.required }), /*نوع مالکیت*/

    /*  F132: z.any(), */ /*تاریخ کشت*/
    /*  F150: z.string({ required_error: validationMessages.required }), */ /*نوع مالکیت*/
    /* F134: z.string({ required_error: validationMessages.required }), */ /*منبع تامین آب*/
    /*    F2941: z.string().optional(), */ /*سیستم آبیاری*/
    /*   F2942: z.coerce.number({ invalid_type_error: "این فیلد باید عدد باشد", }).optional(), */ /*درصد سبز شدن*/
});
type FormData = z.infer<typeof schema>;
const useFruitCropsLandDivision = () => {
    const navigation = useNavigate()
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            F96: undefined,
            F156: undefined,
            F70: undefined,
            F64: undefined,
            F65: undefined,
            F66: undefined,
            F67: undefined,
            F77: undefined,
            F78: 100,
            F76: undefined,
            F72: undefined,
            F69: undefined,
            F74: undefined,
            F75: undefined,
            /*F132: undefined,
               reason: undefined,
               newInsured: undefined,
               F150: undefined,
               F134: undefined,
               F2941: undefined,
               F2942: 100, */
        }
    });
    const [searchParams] = useSearchParams();
    const rawExtraInfo = searchParams.get("rawExtraInfo")
    const subjectItemId = searchParams.get("subjectItemId")
    const reviewId = searchParams.get("reviewId")
    const policyId = searchParams.get("policyId")
    const [actionLoading, setActionLoading] = useState(false)

    const [isOpenDtl, setIsOpenDtl] = useState<boolean>(false)
    const [isOpenDtl1, setIsOpenDtl1] = useState<boolean>(false)
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

    useEffect(() => {

        if (rawExtraInfo) {
            const formValue = JSONStringToObject(rawExtraInfo)
            setTimeout(() => {
                reset({
                    F96: formValue?.F96,
                    F156: formValue?.F156,
                    F70: formValue?.F70,
                    F64: formValue?.F64,
                    F65: formValue?.F65,
                    F66: formValue?.F66,
                    F67: formValue?.F67,
                    F77: formValue?.F131,
                    F78: formValue?.F78,
                    F76: formValue?.F76,
                    F72: formValue?.F76,
                    F69: formValue?.F76,
                    F74: formValue?.F76,
                    F75: formValue?.F76,
                    /*F132: formValue?.F132 ? new Date(formValue?.F132) : new Date(),
                     F150: ownerShipsOptions.find(el => el.value === formValue?.F150)?.value,
                     F134: waterResourceOptions.find(el => el.value === formValue?.F134)?.value,
                     F2941: irrigationSystemOptions.find(el => el.value === formValue?.F2941)?.value,
                     F2942: formValue?.F2942, */
                })
            }, 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rawExtraInfo])
    const onSubmit = async (data: FormData) => {
        /*  if (data.F132) {
             data.F132 = shamsiToMiladi(data.F132) + "T00:00:00"
         } */
        setActionLoading(true)
        const params = {
            policyId: policyId,
            reviewId: reviewId,
            subjectItemId: subjectItemId,
            newInsured: data.newInsured,
            reason: data.reason,
            isTest: isDev,
            newExtraInfo: `${JSON.stringify(removeKeys(data, "newInsured", "reason"))}`
        }
        useAxiosWithToken.post("/sabka/technical/annex/add/split-subject-item", params).then(() => {
            toastSuccess("تقسیم قلم با موفقیت انجام شد.")
            navigation(-1)

        }).finally(() => setActionLoading(false))
    };
    return {
        isOpenDtl, isOpenDtl1, setIsOpenDtl, setIsOpenDtl1, isInfoModalOpen, setIsInfoModalOpen, ownerShipsOptions,
        waterResourceOptions,
        irrigationSystemOptions,
        actionLoading,
        onSubmit,
        control,
        handleSubmit,
        errors
    }
}
export default useFruitCropsLandDivision


