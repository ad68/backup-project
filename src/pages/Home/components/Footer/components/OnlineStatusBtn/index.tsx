import { OnlineIcon } from "@/assets/icons/OnlineIcon";
import ChangeStatusModal from './components/ChangeStatusModal'
import { useEffect, useState } from "react";
import { OfflineIcon } from "@/assets/icons/OfflineIcon";


export default function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(() => {
        console.log(onlineStatus)
    }, [onlineStatus])
    return <>
        <button onClick={() => setIsModalOpen(true)} className={`${onlineStatus ? `bg-primary` : `bg-[#ff4d4d]`} w-[70px]  border-[3px] flex justify-center items-center border-white h-[70px] mt-[-20px] shadow-[1px_4px_13px_-1px_rgba(156,156,156,0.75)]  rounded-full`}>
            {onlineStatus ? <OnlineIcon className="text-white w-[40px]" /> : <OfflineIcon className="text-white w-[40px]" />}


        </button>
        <ChangeStatusModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} onlineStatus={onlineStatus} setOnlineStatus={setOnlineStatus} />
    </>

}
