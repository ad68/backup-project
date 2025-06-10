import { useState } from 'react'


const useCheckSpecificationsTabs = () => {
    const [activeTab, setActiveTab] = useState<number>(1)
    return {
        activeTab,
        setActiveTab
    }
}
export default useCheckSpecificationsTabs