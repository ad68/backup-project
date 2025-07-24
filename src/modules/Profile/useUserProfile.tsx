import { useAuthStore } from "@/store/authStore"


const useUserProfile = () => {
    const { userInfo } = useAuthStore()

    return {
        userInfo
    }
}
export default useUserProfile