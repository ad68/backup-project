import { DashboardIcon } from "@/assets/icons/DashboardIcon";
import { LogoutIcon } from "@/assets/icons/LogoutIcon";
import { ProfileIcon } from "@/assets/icons/ProfileIcon";


export default function Index() {
    return <section className="fixed shadow-[1px_4px_13px_-1px_rgba(156,156,156,0.75)] rounded-t-full flex justify-around w-full h-[60px] bg-white bottom-0 z-50">
        <section className="flex flex-col items-center justify-center">
            <ProfileIcon className="text-slate-400 w-[30px]" />
            <span className="text-xs text-slate-500 mt-[1px]">پروفایل</span>
        </section>
        <section className="flex flex-col items-center justify-center">
            <DashboardIcon className="text-primary w-[38px]" />
            <span className="text-xs text-primary mt-[-3px]">داشبورد</span>
        </section>
        <section className="flex flex-col items-center justify-center">
            <LogoutIcon className="text-slate-400 w-[28px] shadow-2xl" />
            <span className="text-xs text-slate-500">خروج</span>
        </section>


    </section>
}



