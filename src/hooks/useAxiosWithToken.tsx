import BASE_URL from "@/config/api";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";
const useAxiosWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept-Language': 'fa',
    'Content-Type': 'application/json',
  },
});
useAxiosWithToken.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    config.headers["Authorization"] = token;
    return config;
  });
useAxiosWithToken.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const logout = useAuthStore.getState().logout;
    if (error?.response?.status === 401) {
      window.location.href = "/";
      logout()
    }

    return Promise.reject(error);
  },
);
export default useAxiosWithToken;
