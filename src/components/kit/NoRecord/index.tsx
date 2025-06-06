import { FileWarningIcon } from "lucide-react";
export default function NoRecord() {

    return <section className='w-full flex  py-2 justify-center gap-2 items-center mt-[40px] text-red-500'>
        <FileWarningIcon />
        <span>رکوردی یافت نشد</span>
    </section>
}
