import { OnlineIcon } from "@/assets/icons/OnlineIcon";
import ChangeStatusModal from './components/ChangeStatusModal'
import { useEffect, useState } from "react";
import { OfflineIcon } from "@/assets/icons/OfflineIcon";
import { useOfflineStore } from "@/store/useOfflineStore";


export default function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { isOnline } = useOfflineStore()
    useEffect(() => {
        console.log(isOnline)
    }, [isOnline])
    return <>
        <button onClick={() => setIsModalOpen(true)} className={`${isOnline ? `bg-primary` : `bg-[#ff4d4d]`} w-[60px] h-[60px] mt-[-26px] border-[3px] flex justify-center items-center border-white  shadow-[1px_4px_13px_-1px_rgba(156,156,156,0.75)]  rounded-full`}>
            {isOnline ? <OnlineIcon className="text-white w-[40px]" /> : <OfflineIcon className="text-white w-[40px]" />}
        </button>
        <ChangeStatusModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>

}
