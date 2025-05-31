import BASE_URL from "@/config/api";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
const useAxiosWithToken = axios.create({
  baseURL: BASE_URL,
});
useAxiosWithToken.interceptors.request.use(function (config) {
  const token = useAuthStore((state) => state.token);
  config.headers.Authorization = token;
  return config;
});
useAxiosWithToken.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const logout = useAuthStore((state) => state.logout);
    if (error?.response?.status === 401) {
      window.location.href = "/";
      logout()
    }
    else {
      if (error.response?.data?.messageFa) {
        /*  notify.Error(error.response?.data?.messageFa) */
      }
      else {
        /*   notify.Error(NotifyMessage.GLOBAL_ERROR) */
      }
    }
    return Promise.reject(error);
  },
);
export default useAxiosWithToken;
