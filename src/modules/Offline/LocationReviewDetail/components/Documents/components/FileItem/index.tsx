import { FileIcon, Trash2Icon } from "lucide-react";
import { useEffect } from "react";

export default function Index({ item, deleteFile }: any) {


    useEffect(() => {
        console.log(item)
    }, [])
    return <section className=" py-3 active:bg-slate-50 bg-white border px-2 border-slate-200 rounded-xl flex flex-col justify-center items-center">
        <section>
            <FileIcon className="w-[40px] h-[40px]" />
        </section>
        <section className="flex flex-col rounded-md gap-1 mt-1 w-full">
            <span className="text-xs font-light text-center">{item?.name}</span>
            <span className=" text-center  text-lg rounded-lg text-blue-500 font-bold">{item.extension.replace(".", "")}</span>

            <button onClick={() => deleteFile(item.id)} className="bg-red-500 w-full text-sm rounded-full flex justify-center items-center gap-2 text-white p-1">
                <Trash2Icon className="w-[18px]" />
                حذف
            </button>
        </section>
    </section>
}
