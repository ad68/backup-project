import "./style.css";
import { OnlineIcon } from "@/assets/icons/OnlineIcon";
import { OfflineIcon } from "@/assets/icons/OfflineIcon";
import { useOfflineStore } from "@/store/useOfflineStore";
import { useState } from "react";
const CircleButton = ({
    hideModal,
}: {
    hideModal: () => void;
}) => {
    const { goToOffline, isOnline, goToOnline } = useOfflineStore()
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false)
    const changeOnlineMode = () => {
        if (isOnline) {
            goToOffline()
            showSuccessNotify()
            setTimeout(() => {
                hideModal()
            }, 2000);
            /* hideModal() */
        }
        else {
            goToOnline()
            showSuccessNotify()
            setTimeout(() => {
                hideModal()
            }, 2000);
            /* hideModal() */
        }
    }
    const showSuccessNotify = () => {
        setIsSuccessModalOpen(true)
    }
    return (
        <>
            <div
                onClick={() => { changeOnlineMode() }}
                className={`${isOnline ? `bg-primary border-green-600` : `bg-offline  border-offline-600`} w-[150px] shadow-2xl border-[8px] h-[150px] rounded-full flex justify-center items-center`}
            >
                <span>
                    {isOnline ? <OnlineIcon className="w-[80px] text-white" /> : <OfflineIcon className="w-[80px] text-white" />}
                </span>
            </div>
            <div className={`fixed w-[90%] rounded-2xl h-[80%] flex justify-center items-center text-white text-2xl ${isOnline ? "bg-primary" : "bg-red-500"}  ${isSuccessModalOpen ? `top-[10%]` : `top-[-80%]`} transition-all duration-300 ease-in-out z-50`}>
                شما وارد حالت {isOnline ? "آنلاین" : "آفلاین"} شدید
            </div>
        </>

    );
};

export default CircleButton;
