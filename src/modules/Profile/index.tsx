import { UserIcon } from "@/assets/icons/UserIcon"
import { ChevronLeft, MapPin } from "lucide-react"
import useUserProfile from "./useUserProfile"
export default function Index() {
    const { userInfo } = useUserProfile()
    return <main className='m-auto w-[440px] max-w-full'>
        <div className="h-[250px] rounded-b-[82px] flex flex-col gap-4 justify-center items-center bg-gradient-to-b from-primary to-[#247f4d] overflow-hidden relative z-0">
            <div className="w-[100px] h-[100px] bg-slate-200 rounded-full overflow-hidden mt-[-80px]">
                <img src={userInfo?.picture ? `data:image/jpg;base64,${userInfo?.picture}` : "/images/profile/no-avatar.svg"} className="w-[100px]" alt="" />
            </div>
            <p className="text-2xl font-bold text-white">ارزیاب عزیز خوش آمدید</p>
        </div>
        <div className="w-[320px] h-[120px] px-[10px] flex justify-between items-center relative overflow-hidden gap-4  m-auto mt-[-80px] rounded-[10px] shadow-2xl bg-white">
            <div className="grid grid-cols-1 gap-4 p-4">
                <div className="flex gap-1">
                    <UserIcon className="w-[22px]" />
                    <span className="text-sm">نام کاربری:</span>
                    <span className="text-sm font-bold">{userInfo?.username}</span>
                </div>
                <div className="flex gap-1">
                    <UserIcon className="w-[22px]" />
                    <span className="text-sm">نام و نام خانوادگی:</span>
                    <span className="text-sm font-bold">{userInfo?.fullName}</span>
                </div>
                <div className="flex justify-center gap-1">
                    <MapPin className="w-[22px]" />
                    <span className="text-sm font-bold">{userInfo?.displayName}</span>
                </div>
            </div>
        </div>
        <div className="px-6 mt-10 flex flex-col gap-2">
            {/*  <button className="w-full bg-primary text-white p-2 rounded-full">کیف پول</button>
            <button className="w-full bg-blue-500 text-white p-2 rounded-full">تیکت</button> */}
            <button className="w-full flex items-center text-sm text-right  text-primary p-2 rounded-full">
                <ChevronLeft />
                بیمه درمان تکمیلی
            </button>
            <button className="w-full flex items-center text-sm text-right  text-primary p-2 rounded-full">
                <ChevronLeft />
                دانلود گواهینامه آموزشی
            </button>
            <button className="w-full flex items-center text-sm text-right  text-primary p-2 rounded-full">
                <ChevronLeft />
                دانلود کارت شناسایی
            </button>
        </div>
    </main>
}
