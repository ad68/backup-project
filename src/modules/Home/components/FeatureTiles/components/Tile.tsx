
import { Link } from "react-router-dom";
import type { TileProp } from "../featureTiles.type";
export default function Index({ title, width, image, iconBgColor, borderColorClass, link, soon }: TileProp) {
    return <Link to={link}>
        <section style={{ width: width }} className="flex relative active:bg-green-200 transition-all bg-[#f9f9f9] items-center gap-2 py-2 px-2 rounded-full">
            {soon && <span className="absolute font-light text-[9px] text-white bg-red-500 p-1 px-2 rounded-full top-[-5px] left-0">به زودی</span>}

            <section className={`flex-center w-[40px] h-[40px] rounded-full ${iconBgColor} border ${borderColorClass}`}>
                {image}
            </section>
            <span className="text-sm text-slate-700">{title}</span>
        </section>
    </Link>

}
