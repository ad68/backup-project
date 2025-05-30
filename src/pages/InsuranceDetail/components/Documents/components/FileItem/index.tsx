import { FileIcon } from "lucide-react";

export default function Index() {
    return <section className="w-[120px] py-3 active:bg-slate-50 bg-white border px-2 border-slate-200 rounded-xl flex flex-col justify-center items-center">
        <section>
            <FileIcon className="w-[40px] h-[40px]" />
        </section>
        <section className="flex flex-col rounded-md gap-1">
            <span className="text-xs font-light mt-2 text-center">34538846</span>
            <span className="text-xs font-light text-center">کلزا عباس درخشان راد</span>
            <span className="text-xs font-light text-center">محمود دادپور</span>
            <span className="text-xs font-light text-center">1404/01/29</span>
        </section>
    </section>
}
