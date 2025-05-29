import { Undo2Icon } from "lucide-react";
import type { FilterModalProp } from "../../../../footer.types";
import OfflineModeButton from '../OfflineModeButton'

export default function Index({ isOpen, setIsOpen, onlineStatus, setOnlineStatus }: FilterModalProp) {

    return <section className={`w-full h-full flex flex-col gap-6 justify-center items-center overflow-scroll p-3 px-6 pb-0 fixed bg-white ${isOpen ? `top-0` : `top-[-100%]`} transition-all duration-500 left-0 z-10`}>
        {isOpen && <>
            <OfflineModeButton onlineStatus={onlineStatus} setOnlineStatus={setOnlineStatus} hideModal={() => setIsOpen(false)} />
            <span className="text-sm">برای ورود به حالت {onlineStatus ? "آفلاین" : "آنلاین"} دکمه را 5 ثانیه نگه دارید</span>
            <button onClick={() => setIsOpen(false)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </button>
        </>}

    </section>
}
