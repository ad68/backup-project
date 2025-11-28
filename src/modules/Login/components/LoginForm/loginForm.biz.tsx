import { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from 'react-hook-form';

import { toastError } from '@/components/kit/toast';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import BASE_URL from '@/config/api';
import axios from 'axios';

const loginSchema = z.object({
    username: z.string().min(1, "نام کاربری الزامی است"),
    password: z.string().min(3, "کلمه عبور باید حداقل ۶ کاراکتر باشد"),
});
type LoginFormInputs = z.infer<typeof loginSchema>;

const useLoginForm = () => {
    const navigation = useNavigate()
    const { token } = useAuthStore()
    const login = useAuthStore((state) => state.login);
    const setUserInfo = useAuthStore((state) => state.setUserInfo)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [actionLoading, setActionLoading] = useState(false)
    useEffect(() => {
        if (token) {
            navigation("/home")
        }
    }, [])
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
        axios.post(BASE_URL + "/sabka/sso/auth", params).then((res) => {
            login(`Bearer ${res.data.Token}`)
            setUserInfo(res.data.sabkaActor)
            setActionLoading(false)
            navigation("/home")
        }).catch(err => {
            setActionLoading(false)
            toastError(err.response.data.Message)
        })
    };
    /*    const getUserInfo = () => {
           setActionLoading(true)
           useAxiosWithToken.post(BASE_URL + "/sabka/sso/auth").then((res) => {
               navigation("/home")
               setUserInfo(res.data.sabkaActor)
               setActionLoading(false)
           }).catch(err => {
               setActionLoading(false)
               toastError(err.response.data.message)
           })
       } */
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