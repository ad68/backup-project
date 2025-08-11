import { plus1000 } from "@/utils/global";
import type { ActionsCountProp } from "../../../header.types";
import { useOfflineStore } from "@/store/useOfflineStore";
export default function Index({ title, count }: ActionsCountProp) {
    const { isOnline } = useOfflineStore()
    return <section className="flex md:w-full flex-col items-center bg-white rounded-lg overflow-hidden">
        <section className="flex flex-col items-center bg-white rounded-lg py-1 px-4">
            <span className=" text-[12px] text-slate-600 text-center">
                {title}
            </span>
            <span className="text-[12px] text-slate-600 text-center">انجام شده</span>
        </section>
        <section className={`${isOnline ? "bg-[#007b38]" : `bg-slate-700`}  w-full flex-center pt-[2px] text-white`}>{count === "soon" ? "به زودی" : plus1000(count)}</section>
    </section>
}
