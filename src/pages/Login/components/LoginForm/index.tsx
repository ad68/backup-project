import { LockIcon } from "@/assets/icons/LockIcon";
import { UserIcon } from "@/assets/icons/userIcon";


export default function Index() {

    return <section className="w-full h-[60%] rounded-t-2xl absolute bottom-0 bg-white py-[38px] px-[25px]">
        <section>
            <span className="text-slate-500 text-sm">نام کاربری</span>
            <section className="relative  border rounded-md h-[50px] overflow-hidden mt-1">
                <input placeholder="نام کاربری را وارد کنید" className="w-full h-full font-light p-3 border-none outline-none" />
                <UserIcon className="text-primary w-[24px] absolute left-2 top-[11px]" />
            </section>
        </section>
        <section className="mt-6">
            <span className="text-slate-500 mt-4 text-sm">کلمه عبور</span>
            <section className="relative border rounded-md h-[50px] overflow-hidden mt-1">
                <input placeholder="کلمه عبور را وارد کنید" className="w-full h-full font-light p-3 border-none outline-none" />
                <LockIcon className="text-primary w-[24px] absolute left-2 top-[11px]" />
            </section>
        </section>
        <button className="w-full bg-primary rounded-sm h-[48px] mt-[80px] text-white">ورود</button>
        <section className="w-full absolute bottom-[5px] left-0 text-center font-light text-sm">تمام حقوق این اپلیکیشن متعلق به شرکت سناپ می باشد</section>
    </section>
}
