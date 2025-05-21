import type { ActionsCountProp } from "../../../header.types";



export default function Index({ title, count }: ActionsCountProp) {

    return <section className="flex flex-col items-center bg-white rounded-lg overflow-hidden">
        <section className="flex flex-col items-center bg-white rounded-lg py-1 px-4">
            <span className=" text-[12px] text-slate-600 text-center">
                {title}
            </span>
            <span className=" text-[12px] text-slate-600 text-center"> انجام شده</span>
        </section>

        <section className="bg-[#007b38]  w-full flex-center pt-[2px] text-white">{count}</section>
    </section>
}
