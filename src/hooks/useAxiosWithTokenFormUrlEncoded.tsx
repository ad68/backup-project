import { toastError } from "@/components/kit/toast";
import BASE_URL from "@/config/api";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
const useAxiosWithTokenFormUrlEncoded = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept-Language': 'fa',
        "Content-Type": "application/x-www-form-urlencoded",
    },
});
useAxiosWithTokenFormUrlEncoded.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token;
        // فقط برای POST و PUT اعمال می‌کنیم
        if (config.method === "post" || config.method === "put") {

            const formData = new FormData();

            // اگر قبلاً داده‌هایی توی بادی بوده، اضافه‌شون می‌کنیم
            if (config.data && typeof config.data === "object") {
                for (const key in config.data) {
                    formData.append(key, config.data[key]);
                }
            }

            // توکن رو اضافه می‌کنیم
            if (token)
                formData.append("token", token);

            config.data = formData;

            // چون از FormData استفاده می‌کنیم، نیازی نیست Content-Type دستی تنظیم کنیم
            delete config.headers["Content-Type"];
        }

        return config;
    });
useAxiosWithTokenFormUrlEncoded.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const logout = useAuthStore.getState().logout;
        if (error?.response?.status === 401) {
            window.location.href = "/";
            logout()
        }
        toastError(error.response.data.message)

        return Promise.reject(error);
    },
);
export default useAxiosWithTokenFormUrlEncoded;
