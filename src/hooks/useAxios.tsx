
/* import { NotifyMessage } from "@/enums";
import { notify } from "@/helper"; */
import BASE_URL from "@/config/api";
import axios from "axios";
const useAxios = axios.create({
  baseURL: BASE_URL,
});
useAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response?.data?.messageFa) {
      /*  notify.Error(error.response?.data?.messageFa) */
    }
    else {
      /* notify.Error(NotifyMessage.GLOBAL_ERROR) */
    }

    return Promise.reject(error);
  },
);

export default useAxios;
