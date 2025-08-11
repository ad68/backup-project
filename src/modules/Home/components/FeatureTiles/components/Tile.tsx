
import { Link } from "react-router-dom";
import type { TileProp } from "../featureTiles.type";
import { useOfflineStore } from "@/store/useOfflineStore";

export default function Index({ title, width, image, iconBgColor, borderColorClass, link, soon, offline }: TileProp) {
    const { isOnline } = useOfflineStore()
    return <Link to={soon ? "#" : link} className="relative">
        <section style={{ width: width }} className={`flex relative  active:bg-green-200 transition-all ${!isOnline && `border border-red-200`} bg-[#f9f9f9] items-center gap-2 py-2 px-2 rounded-full`}>
            {soon && <span className="absolute font-light text-[9px] text-white bg-red-500 p-1 px-2 rounded-full top-[-5px] left-0">به زودی</span>}

            <section className={`flex-center w-[40px] h-[40px] rounded-full ${iconBgColor} border ${borderColorClass}`}>
                {image}
            </section>
            <span className="text-sm text-slate-700">{title}</span>
            {offline && <div className="bg-offline-400 h-[60px] absolute w-full text-center left-0 bottom-[-15px] pt-[45px] text-white text-xs z-[-10] rounded-full">آفلاین</div>}
        </section>

    </Link>

}
