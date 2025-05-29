import { useState } from 'react'
const useInsuranceDetail = () => {
    const [activeTab, setActiveTab] = useState<number>(1)
    return {
        activeTab,
        setActiveTab
    }
}
export default useInsuranceDetail