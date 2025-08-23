import { toPersianDate } from "@/utils/global";
import { CheckCheckIcon } from "lucide-react";
/* import type { CardProp } from "../../smsReport.type"; */
export default function Index({ item }: any) {
    return (<section className="p-2">
        <section className={`border relative flex flex-col border-r-[2px] border-r-primary gap-4 bg-white   p-4 rounded-2xl h-auto shadow-lg`}>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">شماره موبایل:</span>
                    <a href={`tel:${item.mobileNumber}`} className="text-sm">{item.mobileNumber}</a>
                </section>
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">تاریخ:</span>
                    <span className="text-sm">{toPersianDate(item.createdOn)}</span>
                </section>
            </section>
            <section className="flex justify-between w-full">
                <section className="flex gap-1">
                    <span className="font-light text-slate-500 text-sm">شماره بیمه نامه:</span>
                    <span className="text-sm">{item.policyId}</span>
                </section>
                <section className="flex items-center gap-1">
                    <span className=" text-primary text-sm font-bold">ارسال شده</span>
                    <span className="text-sm"><CheckCheckIcon className="w-[20px] text-primary" /></span>
                </section>
            </section>
            <section className="justify-between w-full">
                <section className="flex flex-col">
                    <span className="font-light text-slate-500 text-sm">متن پیام:</span>
                    <span className="text-sm">{item.smsMessage}</span>
                </section>

            </section>
        </section>
    </section>)
}
