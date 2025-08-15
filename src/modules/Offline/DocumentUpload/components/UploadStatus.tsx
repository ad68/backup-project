import { CheckCheckIcon, UploadCloud, XCircleIcon } from "lucide-react"
export default function Index({ status }: { status: string }) {
    return <div>{status === "success" ?
        <div className="text-xs flex justify-center items-center gap-2 text-green-600 font-bold"> آپلود موفق <CheckCheckIcon className="w-[15px]" /></div> :
        status === "error" ?
            <div className="text-xs flex justify-center items-center gap-2 text-red-500"> خطا در آپلود <XCircleIcon className="w-[15px]" /></div> :
            status === "pending" ?
                <div className="lineLoader"></div> :

                <div className="text-xs flex justify-center items-center gap-2 text-blue-800">آماده آپلود <UploadCloud className="w-[15px]" /></div>}</div>
}
