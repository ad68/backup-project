import { useState } from 'react'
const useLocationReview = () => {
    const [activeTab, setActiveTab] = useState<number>(1)
    return {
        activeTab,
        setActiveTab
    }
}
export default useLocationReview