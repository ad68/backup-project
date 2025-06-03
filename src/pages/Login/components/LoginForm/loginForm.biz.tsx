import { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { useAxios } from '@/hooks';
import { toastError } from '@/components/kit/toast';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

const loginSchema = z.object({
    username: z.string().min(1, "نام کاربری الزامی است"),
    password: z.string().min(3, "کلمه عبور باید حداقل ۶ کاراکتر باشد"),
});
type LoginFormInputs = z.infer<typeof loginSchema>;
const useLoginForm = () => {
    const navigation = useNavigate()
    const login = useAuthStore((state) => state.login);
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [actionLoading, setActionLoading] = useState(false)
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

    const handleLogin = (data: LoginFormInputs) => {
        const params = {
            username: data.username,
            password: data.password,
            longLived: true,
        }
        setActionLoading(true)
        useAxios.post("/sabka/sso/auth", params).then((res) => {
            navigation("/home")
            login(`Bearer ${res.data.token}`)
            setActionLoading(false)
        }).catch(err => {
            setActionLoading(false)
            toastError(err.response.data.message)
        })


    };
    return {
        showPassword,
        setShowPassword,
        control,
        handleLogin,
        handleSubmit, errors,
        actionLoading
    }
}
export default useLoginForm