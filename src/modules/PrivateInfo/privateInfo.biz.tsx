
import { validationMessages } from "@/constants/validationMessages";
import { useAxiosWithToken } from "@/hooks";
import { convertToJSONStringWithEscapes, JSONStringToObject, shamsiToMiladi } from "@/utils/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
const schema = z.object({
    F125: z.coerce.number({ required_error: validationMessages.required, invalid_type_error: "این فیلد باید عدد باشد" }).min(1, validationMessages.minLength(1)), /* شماره قطعه */
    F149: z.string().max(100, validationMessages.maxLength(100)).optional(), /* نام محلی */
    F3115: z.string().max(500, validationMessages.maxLength(500)).optional(), /* ملاحظات*/
    F126: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /* شمالا*/
    F128: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /* جنوبا*/
    F127: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /* شرقا*/
    F129: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /* غربا*/
    F131: z.string({ required_error: validationMessages.required }).max(50, validationMessages.maxLength(50)), /* رقم بذر*/
    F132: z.any(), /*تاریخ کشت*/
    F150: z.string({ required_error: validationMessages.required }), /*نوع مالکیت*/
    F134: z.string({ required_error: validationMessages.required }), /*منبع تامین آب*/
    F2941: z.string().optional(), /*سیستم آبیاری*/
    F2942: z.coerce.number({ invalid_type_error: "این فیلد باید عدد باشد", }).optional(), /*درصد سبز شدن*/
});
type FormData = z.infer<typeof schema>;
const usePrivateInfo = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            F125: undefined,
            F149: undefined,
            F3115: undefined,
            F126: undefined,
            F127: undefined,
            F128: undefined,
            F129: undefined,
            F131: undefined,
            F132: undefined,
            F150: undefined,
            F134: undefined,
            F2941: undefined,
            F2942: 100,
        }
    });
    const [searchParams] = useSearchParams();
    const reviewId = searchParams.get("reviewId")
    const subjectItemId = searchParams.get("subjectItemId")
    const policyId = searchParams.get("policyId")
    const rawExtraInfo = searchParams.get("rawExtraInfo")
    const subjectId = searchParams.get("subjectId")

    const [actionLoading, setActionLoading] = useState(false)
    const ownerShipsOptions = [
        { label: "استیجاری", value: "1016" },
        { label: "خصوصی", value: "1017" },
        { label: "موقوفی", value: "1018" }]
    const waterResourceOptions = [
        { label: "چاه", value: "1012" },
        { label: "چشمه", value: "1013" },
        { label: "قنات", value: "1014" },
        { label: "رودخانه", value: "1015" },
        { label: "باران (دیم)", value: "1074" },
        { label: "کانال", value: "1261" }
    ];
    const irrigationSystemOptions = [
        { label: "ندارد (دیم)", value: "1686" },
        { label: "بارانی", value: "1687" },
        { label: "غرقابی", value: "1688" },
        { label: "نواری", value: "1689" }
    ]

    useEffect(() => {
        if (rawExtraInfo) {
            const formValue = JSONStringToObject(rawExtraInfo)
            setTimeout(() => {
                reset({
                    F125: formValue?.F125,
                    F149: formValue?.F149,
                    F3115: formValue?.F3115,
                    F126: formValue?.F126,
                    F127: formValue?.F127,
                    F128: formValue?.F128,
                    F129: formValue?.F129,
                    F131: formValue?.F131,
                    F132: new Date(formValue?.F132),
                    F150: ownerShipsOptions.find(el => el.value === formValue?.F150)?.value,
                    F134: waterResourceOptions.find(el => el.value === formValue?.F134)?.value,
                    F2941: irrigationSystemOptions.find(el => el.value === formValue?.F2941)?.value,
                    F2942: formValue?.F2942,
                })
            }, 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rawExtraInfo])
    const onSubmit = async (data: FormData) => {
        if (data.F132) {
            data.F132 = shamsiToMiladi(data.F132)
        }
        console.log(convertToJSONStringWithEscapes(data))
        setActionLoading(true)
        const params = {
            reviewId: reviewId,
            policyId: policyId,
            subjectItemId: subjectItemId,
            subjectId: subjectId,
            isTest: true,
            extraInfo: `${JSON.stringify(data)}`
        }
        useAxiosWithToken.post("/sabka/technical/annex/add/fix-extra-info", params).then().catch()
    };

    return {
        ownerShipsOptions,
        waterResourceOptions,
        irrigationSystemOptions,
        actionLoading,
        onSubmit,
        control,
        handleSubmit,
        errors
    }

}
export default usePrivateInfo






