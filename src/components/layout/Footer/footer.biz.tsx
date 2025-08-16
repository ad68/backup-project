import { toastError } from "@/components/kit/toast"
import BASE_URL from "@/config/api"
import { useAxios } from "@/hooks"
import { useAuthStore } from "@/store/authStore"
import { useState } from "react"

const useFooter = () => {
    const logout = useAuthStore((state) => state.logout)
    const [actionLoading, setActionLoading] = useState(false)
    const { token } = useAuthStore()
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
    const handleLogout = () => {
        const params = {
            token
        }
        setActionLoading(true)
        useAxios.post(BASE_URL + "/sabka/sso/logout", params, {
            headers: {
                "Accept-Language": "fa"
            }
        }).then(() => {
            setActionLoading(false)
            logout()
        }).catch(err => {
            setActionLoading(false)
            toastError(err.response.data.message)
        })
    }
    return {
        handleLogout,
        isLogoutModalOpen,
        setIsLogoutModalOpen,
        actionLoading,

    }
}
export default useFooter