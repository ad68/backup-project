/* import { DashboardIcon } from "@/assets/icons/DashboardIcon"; */
import { LogoutIcon } from "@/assets/icons/LogoutIcon";
import { ProfileIcon } from "@/assets/icons/ProfileIcon";
import OnlineStatusBtn from "./components/OnlineStatusBtn";
import { DashboardIcon } from "@/assets/icons/DashboardIcon";
import { Link, useLocation } from "react-router-dom";
import useFooter from "./footer.biz";
import SlidingModal from "@/components/kit/SlidingModal";
import CustomButton from "@/components/kit/CustomButton";


export default function Index() {
    const location = useLocation();
    const { logout, isLogoutModalOpen, setIsLogoutModalOpen } = useFooter()
    return <section className="fixed m-auto w-full left-0 bottom-0 flex justify-center z-50">
        <section className=" shadow-[1px_4px_13px_-1px_rgba(156,156,156,0.75)] rounded-t-full flex w-[440px] justify-around max-w-full h-[60px] pt-1 pb-3 bg-white">
            <section className="flex flex-col items-center justify-center">
                <ProfileIcon className="text-slate-400 w-[30px]" />
                <span className="text-xs text-slate-500 mt-[1px]">پروفایل</span>
            </section>
            {location.pathname === "/home" ? <section>
                <OnlineStatusBtn />
            </section> : <Link to="/home" className="flex flex-col w-[70px] mt-[-3px] items-center justify-center">
                <DashboardIcon className="text-slate-400 w-[38px]" />
                <span className="text-xs text-slate-500 ">داشبورد</span>
            </Link>}
            <section onClick={() => setIsLogoutModalOpen(true)} className="flex flex-col items-center justify-center">
                <LogoutIcon className="text-slate-400 w-[28px] shadow-2xl" />
                <span className="text-xs text-slate-500">خروج</span>
            </section>
            <SlidingModal isOpen={isLogoutModalOpen}>
                <section className="h-full flex flex-col justify-center gap-10 items-center">
                    <section className="flex justify-center">
                        <LogoutIcon className="text-primary w-[100px]" />
                    </section>
                    <span>آیا مایل به خروج هستید؟</span>
                    <section className="flex w-full mt-4 justify-center gap-4">
                        <CustomButton onClick={() => setIsLogoutModalOpen(false)} variant="outlined" className="w-[90px]" >خیر</CustomButton>
                        <CustomButton onClick={logout} className="w-[160px]">بله</CustomButton>
                    </section>
                </section>
            </SlidingModal>
        </section>
    </section>

}



