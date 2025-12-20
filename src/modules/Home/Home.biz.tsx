import { toastError } from '@/components/kit/toast'
import BASE_URL from '@/config/api'
import { useAxiosWithToken } from '@/hooks'
import { useAuthStore } from '@/store/authStore'
const useHome = () => {
    const setUserInfo = useAuthStore((state) => state.setUserInfo)
    const getUserInfo = () => {
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