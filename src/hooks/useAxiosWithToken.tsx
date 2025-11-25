import { toastError } from "@/components/kit/toast";
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
useAxiosWithToken.interceptors.request.use((config) => {
  /* const token = useAuthStore.getState().token; */
  const token = "Bearer 99d6b939-3529-46f4-88fd-727e31fe59c2"
  const methodsWithBody = ['post', 'put', 'patch', 'delete'];
  if (methodsWithBody.includes(config.method || '')) {
    if (config.data instanceof FormData) {
      if (token) {
        config.data.append('token', token);
      }
    } else {
      config.data = {
        ...(config.data || {}),
        token: token,
      };
    }
  }
  if (config.method === 'get' && token) {
    config.params = {
      ...(config.params || {}),
      token: token,
    };
  }

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
    toastError(error.response.data.message)

    return Promise.reject(error);
  },
);
export default useAxiosWithToken;
