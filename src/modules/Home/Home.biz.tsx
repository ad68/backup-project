import { toastError } from '@/components/kit/toast'
import BASE_URL from '@/config/api'
import { useAxiosWithToken } from '@/hooks'
import { useAuthStore } from '@/store/authStore'


//
// ──────────────────────────────────────────────────────────────
//   :::::: B U S I N E S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//
const useHome = () => {
    const getUserInfo = () => {
        const setUserInfo = useAuthStore((state) => state.setUserInfo)
        useAxiosWithToken.post(BASE_URL + "/sabka/sso/auth").then((res) => {
            setUserInfo(res.data.sabkaActor)
        }).catch(err => {
            toastError(err.response.data.message)
        })
    }
    return {
        getUserInfo
    }
}
export default useHome