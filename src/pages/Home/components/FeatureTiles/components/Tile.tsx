
import type { TileProp } from "../featureTiles.type";


export default function Index({ title, width, image, iconBgColor, borderColorClass }: TileProp) {

    return <section style={{ width: width }} className="flex bg-[#f9f9f9] items-center gap-2 py-2 px-2 rounded-full">
        <section className={`flex-center w-[40px] h-[40px] rounded-full ${iconBgColor} border ${borderColorClass}`}>
            {image}
        </section>
        <span className="text-sm text-slate-700">{title}</span>
    </section>;
}
