import { useAxios } from '@/hooks'
import { useAuthStore } from '@/store/authStore'
import { useEffect, useState } from 'react'
const useActionCount = () => {
    const [count, setCount] = useState(0)
    const { token } = useAuthStore()
    const getList = () => {
        let formData = new FormData()
        formData.append('token', token ? token : "")

        useAxios.post("/sabka/logs/count/locate-result", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        }).then(res => { setCount(res.data) })
    }
    useEffect(() => {
        getList()
    }, [])
    return {
        count
    }
}
export default useActionCount