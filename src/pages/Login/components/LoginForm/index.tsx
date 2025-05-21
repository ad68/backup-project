import { EyeHideIcon } from "@/assets/icons/EyeHideIcon";
import { EyeShowIcon } from "@/assets/icons/EyeShowIcon";
import { LockIcon } from "@/assets/icons/LockIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import useLoginForm from "./loginForm.biz";


export default function Index() {
    const { showPassword, setShowPassword, setPassword, setUserName, password, userName, login } = useLoginForm()
    return <section className="w-full h-[60%] rounded-t-2xl absolute bottom-0 bg-white py-[38px] px-[25px]">
        <section>
            <span className="text-slate-500 text-sm">نام کاربری</span>
            <section className="relative  border rounded-md h-[50px] overflow-hidden mt-1">
                <input onChange={(e) => setUserName(e.target.value)} value={userName} maxLength={20} placeholder="نام کاربری را وارد کنید" className="w-full h-full font-light text-[13px] p-3 border-none outline-none" />
                <UserIcon className="text-primary w-[24px] absolute left-2 top-[11px]" />
            </section>
        </section>
        <section className="mt-6">
            <span className="text-slate-500 mt-4 text-sm">کلمه عبور</span>
            <section className="relative border rounded-md h-[50px] overflow-hidden mt-1">
                <input onChange={(e) => setPassword(e.target.value)} value={password} maxLength={20} type={showPassword ? "text" : "password"} placeholder="کلمه عبور را وارد کنید" className="w-full pl-[80px] h-full text-[13px] font-light p-3 border-none outline-none" />
                <LockIcon className="text-primary w-[24px] absolute left-2 top-[11px]" />
                {showPassword ? <EyeHideIcon onClick={() => setShowPassword(false)} className="text-slate-600 w-[28px] absolute left-[38px] top-[10px]" /> : <EyeShowIcon onClick={() => setShowPassword(true)} className="text-slate-600 w-[28px] absolute left-[38px] top-[10px]" />}
            </section>
        </section>
        <button onClick={login} className="w-full bg-primary rounded-sm h-[48px] mt-[60px] text-white">ورود</button>
        <section className="w-full absolute bottom-[20px] left-0 text-center font-light text-[12px]">تمام حقوق این اپلیکیشن متعلق به شرکت ایرانیان پوشش می باشد</section>
    </section>
}
