import { useEffect, useState } from 'react'
/* import { useNavigate } from 'react-router-dom' */
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { useAxios } from '@/hooks';
import toast from 'react-hot-toast';
const loginSchema = z.object({
    username: z.string().min(1, "نام کاربری الزامی است"),
    password: z.string().min(3, "کلمه عبور باید حداقل ۶ کاراکتر باشد"),
});
type LoginFormInputs = z.infer<typeof loginSchema>;
const useLoginForm = () => {
    /* const navigation = useNavigate() */
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });
    useEffect(() => {
        toast.success("hi")
        console.log("ali")
    }, [])
    const login = (data: LoginFormInputs) => {
        const params = {
            username: data.username,
            password: data.password,
            longLived: true,
        }
        useAxios.post("/sabka/auth", params).then((res) => {
            console.log(res)
        }).catch()


    };
    return {
        showPassword,
        setShowPassword,
        control,
        login,
        handleSubmit, errors
    }
}
export default useLoginForm