import { DashboardIcon } from "@/assets/icons/DashboardIcon";
import { LogoutIcon } from "@/assets/icons/LogoutIcon";
import { ProfileIcon } from "@/assets/icons/ProfileIcon";


export default function Index() {
    return <section className="fixed flex justify-around w-full h-[60px] bg-white bottom-0 z-50">
        <ProfileIcon className="text-slate-400 w-[30px]" />
        <DashboardIcon className="text-slate-400 w-[35px]" />
        <LogoutIcon className="text-slate-400 w-[28px]" />
    </section>
}



