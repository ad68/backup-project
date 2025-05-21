import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useLoginForm = () => {
    const navigation = useNavigate()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const login = () => {
        if (userName === "admin" && password === "12345") {
            navigation("/home")
        }
        else {
            alert("نام کاربری یا کلمه عبور اشتباه است")
        }
    }
    return {
        showPassword,
        setShowPassword,
        userName,
        login,
        password, setPassword, setUserName
    }
}
export default useLoginForm