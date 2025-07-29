import { UserIcon } from "@/assets/icons/UserIcon"
import { ChevronLeft, MapPin } from "lucide-react"
import useUserProfile from "./useUserProfile"
export default function Index() {
    const { userInfo } = useUserProfile()
    return <main className='m-auto w-[440px] max-w-full'>
        <div className="h-[250px] rounded-b-[82px] flex flex-col gap-4 justify-center items-center bg-gradient-to-b from-primary to-[#247f4d] overflow-hidden relative z-0">
            <div className="w-[100px] h-[100px] bg-slate-200 border-[2px] border-slate-500 shadow-xl rounded-full overflow-hidden mt-[-80px]">
                <img src={userInfo?.picture ? `data:image/jpg;base64,${userInfo?.picture}` : "/images/profile/no-avatar.svg"} className="w-[100px]" alt="" />
            </div>
            <p className="text-2xl font-bold text-white">ارزیاب عزیز خوش آمدید</p>
        </div>
        <div className="w-[350px] h-[120px] px-[15px]  flex justify-between items-center relative overflow-hidden gap-4  m-auto mt-[-80px] rounded-[10px] shadow-2xl bg-white">
            <div className="w-full flex flex-col gap-4">
                <div className="flex items-center gap-1">
                    <UserIcon className="w-[18px] text-primary" />
                    <span className="text-xs">نام کاربری:</span>
                    <span className="text-xs font-bold">{userInfo?.username}</span>
                </div>
                <div className="flex items-center gap-1">
                    <UserIcon className="w-[18px] text-primary" />
                    <span className="text-xs">نام و نام خانوادگی:</span>
                    <span className="text-xs font-bold">{userInfo?.fullName}</span>
                </div>
                <div className="flex items-center gap-1">
                    <MapPin className="w-[18px] text-primary" />
                    <span className="text-xs">{userInfo?.displayName}</span>
                </div>
            </div>
        </div>
        <div className="px-6 mt-10 flex flex-col gap-2">
            {/*  <button className="w-full bg-primary text-white p-2 rounded-full">کیف پول</button>
            <button className="w-full bg-blue-500 text-white p-2 rounded-full">تیکت</button> */}
            <button className="w-full flex items-center border border-slate-200 text-sm text-right  text-grey p-2 rounded-full">
                <ChevronLeft className="text-primary w-[18px]" />
                بیمه درمان تکمیلی
            </button>
            <button className="w-full flex items-center border border-slate-200 text-sm text-right  text-grey p-2 rounded-full">
                <ChevronLeft className="text-primary w-[18px]" />
                دانلود گواهینامه آموزشی
            </button>
            <button className="w-full flex items-center border border-slate-200 text-sm text-right  text-grey p-2 rounded-full">
                <ChevronLeft className="text-primary w-[18px]" />
                دانلود کارت شناسایی
            </button>
        </div>
    </main>
}
