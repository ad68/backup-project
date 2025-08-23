import { MOBILE } from "@/constants/regext";

import { zodResolver } from "@hookform/resolvers/zod";
import moment from "moment-jalaali";
import { useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
    mobileNumber: z
        .string()
        .refine(
            (val) => val === "" || MOBILE.test(val),
            { message: "شماره موبایل را به درستی وارد کنید" }
        ),
    policyId: z
        .string()
        .refine(
            (val) => val === "" || /^\d{1,10}$/.test(val),
            { message: "کد بیمه باید فقط عدد باشد و حداکثر 10 رقم" }
        ),
    fromDate: z.any(),
    toDate: z.any(),
});
type FormData = z.infer<typeof schema>;
const useFilter = (setParams: any, setIsOpen: any) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            fromDate: new Date(),
            toDate: new Date(),
            mobileNumber: "",
            policyId: ""
        }
    });
    const clearForm = () => {
        reset({
            fromDate: new Date(),
            toDate: new Date(),
            mobileNumber: "",
            policyId: ""
        })
    }
    const onSubmit = (data: any) => {
        data.fromDate = moment(data.fromDate).format("YYYY-MM-DD")
        data.toDate = moment(data.toDate).format("YYYY-MM-DD")
        setParams(data)
        setIsOpen(false)
    }
    return {
        handleSubmit,
        onSubmit,
        control,
        clearForm,
        errors
    }
}
export default useFilter
