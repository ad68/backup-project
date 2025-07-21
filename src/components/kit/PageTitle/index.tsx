import { Undo2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type PageTitleProp = {
    title: string;
    miniDescription?: string,
    size?: "small" | "big"
}
export default function PageTitle({ title, size = "big", miniDescription }: PageTitleProp) {
    const navigate = useNavigate()
    return <header className="flex items-center justify-between w-full py-3 mt-3 px-4">
        <div className={`relative w-full ${size === "small" ? "text-sm" : `text-2xl font-bold`}`}>
            {!!miniDescription && <span className="absolute top-[-23px] right-0  py-[0.5px]  text-blue-600 font-light">
                {miniDescription}</span>}
            {title}</div>
        <button onClick={() => navigate(-1)} className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-1 px-1 text-sm">
            <span>بازگشت</span>
            <Undo2Icon className="w-[20px]" />
        </button>

    </header>
}
