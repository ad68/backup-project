import { useAuthStore } from "@/store/authStore"
import { useState } from "react"

const useFooter = () => {
    const logout = useAuthStore((state) => state.logout)
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
    return {
        logout,
        isLogoutModalOpen,
        setIsLogoutModalOpen
    }
}
export default useFooter