import { HomeIcon } from "@/assets/icons/HomeIcon";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { SettingIcon } from "@/assets/icons/SettingIcon";


export default function Index() {

    return <section className="fixed flex justify-around w-full h-[60px] bg-white bottom-0 z-50 shadow-[1px_4px_20px_-1px_rgba(156,156,156,0.75)]">
        <HomeIcon className="fill-slate-400 w-[40px]" />
        <SettingIcon className="fill-slate-400 w-[35px]" />
        <InfoIcon className="stroke-slate-400 w-[35px]" />
    </section>
}
