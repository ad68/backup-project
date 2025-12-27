import { EyeHideIcon } from "@/assets/icons/EyeHideIcon";
import { EyeShowIcon } from "@/assets/icons/EyeShowIcon";
import { LockIcon } from "@/assets/icons/LockIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import useLoginForm from "./loginForm.biz";
import { Controller } from "react-hook-form";
import CustomButton from "@/components/kit/CustomButton";
import { persianToEnglishNumber } from "@/utils/global";

export default function Index() {
    const { showPassword, setShowPassword, handleLogin, control, actionLoading, errors, handleSubmit } = useLoginForm()
    return <section className="w-full rounded-2xl  bg-white py-[38px] pb-[70px] px-[60px]">
        <form onSubmit={handleSubmit(handleLogin)}>
            <section>
                <span className="text-slate-500 text-sm">نام کاربری</span>
                <section className="relative border rounded-md h-[50px] overflow-hidden mt-1">
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <input
                                onChange={(e) => field.onChange(persianToEnglishNumber(e.target.value))}
                                maxLength={20}
                                placeholder="نام کاربری را وارد کنید"
                                className="w-full h-full font-light text-[13px] p-3 border-none outline-none"
                            />
                        )}
                    />
                    <UserIcon className="text-primary w-[24px] absolute left-2 top-[11px]" />
                </section>
                {errors.username && (
                    <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
                )}
            </section>
            <section className="mt-6">
                <span className="text-slate-500 mt-4 text-sm">کلمه عبور</span>
                <section className="relative border rounded-md h-[50px] overflow-hidden mt-1">
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <input
                                onChange={(e) => field.onChange(persianToEnglishNumber(e.target.value))}
                                maxLength={20}
                                type={showPassword ? "text" : "password"}
                                placeholder="کلمه عبور را وارد کنید"
                                className="w-full pl-[80px] h-full text-[13px] font-light p-3 border-none outline-none"
                            />
                        )}
                    />
                    <LockIcon className="text-primary w-[24px] absolute left-2 top-[11px]" />
                    {showPassword ? (
                        <EyeHideIcon
                            onClick={() => setShowPassword(false)}
                            className="text-slate-600 w-[28px] absolute left-[38px] top-[10px] cursor-pointer"
                        />
                    ) : (
                        <EyeShowIcon
                            onClick={() => setShowPassword(true)}
                            className="text-slate-600 w-[28px] absolute left-[38px] top-[10px] cursor-pointer"
                        />
                    )}
                </section>
                {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
            </section>
            <CustomButton
                loading={actionLoading}
                className="mt-10 w-full"
            >
                ورود
            </CustomButton>
        </form>

        {/*  <section className="w-full absolute bottom-[45px] left-0 text-center font-light text-[12px]">
            تمام حقوق این اپلیکیشن متعلق به شرکت ایرانیان پوشش می باشد
        </section> */}
        <p className="text-center absolute bottom-[30px] w-full left-0 font-semibold text-[14px]">نسخه 3.0</p>
        <section className="w-full absolute flex gap-1 justify-center items-center bottom-[10px] left-0 text-center font-light text-[12px]">
            <div> طراحی و توسعه شرکت </div>

            <a href="https://iranianpooshesh.com/fa" className="text-primary font-bold">شرکت ایرانیان پوشش</a>
            <img src="/irp-32x32.png" className="w-[22px]" alt="" />
        </section>
    </section>
}
