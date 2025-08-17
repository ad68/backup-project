import CustomButton from "@/components/kit/CustomButton"
import CustomDatepicker from "@/components/kit/CustomDatepicker"
import CustomSelect from "@/components/kit/CustomSelect"
import { toastError, toastSuccess } from "@/components/kit/toast"
import { useAxiosWithToken } from "@/hooks"
import { useAuthStore } from "@/store/authStore"
import { gregorianToJalali } from "@/utils/global"
import { Undo2Icon } from "lucide-react"
import { useState } from "react"


export default function Index({ rowData, closeSmsModal, filter }: any) {
    const { userInfo } = useAuthStore()
    const hourOptions = Array.from({ length: 18 }, (_, i) => {
        const hour = (i + 4).toString();
        return { label: hour, value: hour };
    });
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [fromHour, setFromHour] = useState("")
    const [toHour, setToHour] = useState("")
    const [actionLoading, setActionLoading] = useState(false)
    /* useEffect(() => {
        console.log("rowData", rowData)
        console.log("filter", filter)

    }, [rowData, filter]) */
    const sendSms = () => {
        if (rowData && selectedDate && fromHour && toHour) {
            setActionLoading(true)
            const params = {
                policyId: rowData.policyId,
                from: fromHour,
                to: toHour,
                persianDate: gregorianToJalali(String(selectedDate)),
            }
            /*  console.log(params) */
            useAxiosWithToken.post("/sabka/technical/annex/send-sms-notify-going", params).then(() => {
                toastSuccess("پیامک با موفقیت ارسال شد")
                closeSmsModal()
            }).finally(() => {
                setActionLoading(false)
            })
        }
        else if (filter && selectedDate && fromHour && toHour) {
            setActionLoading(true)
            let params = {
                ...filter,
                from: fromHour,
                to: toHour,
                persianDate: gregorianToJalali(String(selectedDate)),
            }
            console.log(params)
            useAxiosWithToken.post("/sabka/technical/annex/send-all-sms-notify-going", params).then(() => {
                toastSuccess("پیامک با موفقیت ارسال شد")
                closeSmsModal()
            }).finally(() => {
                setActionLoading(false)
            })
        }
        else {
            toastError("لطفا تمام فیلدها را پر کنید")
        }

    }


    return <section className="p-3">
        <div className="py-4 px-2 rounded-t-xl bg-blue-500">
            <span className="text-white">متن پیامک ارسالی</span>
        </div>
        <div className="border p-2 rounded-sm">
            <p>
                بیمه گذار عزیز،
                <br /><br />
                ارزیاب بیمه {userInfo?.fullName} در تاریخ {gregorianToJalali(String(selectedDate))} بین ساعت {fromHour} تا {toHour} جهت تکمیل و تائید پرونده بیمه نامه صندوق کشاورزی از محل بیمه بازدید به عمل می آورد.
                <br /><br />
                شرکت ارزیابی ایرانیان پوشش
                <br />
                خدمتگزار کشاورزان و دامداران
            </p>
        </div>
        <div className="grid grid-cols-2">
            <div className="px-2 mt-4">
                <span>انتخاب تاریخ</span>
                <CustomDatepicker className="mt-2" disablePast={true} onChange={(e: any) => { setSelectedDate(e) }} value={selectedDate} />
            </div>
        </div>
        <div className="grid grid-cols-2">
            <div className="px-2 mt-2">
                <span className="text-">بین ساعت</span>
                <CustomSelect value={fromHour} onChange={(val) => setFromHour(val)} options={hourOptions} />
            </div>
            <div className="px-2 mt-2">
                <span>تا ساعت</span>
                <CustomSelect value={toHour} onChange={(val) => setToHour(val)} options={hourOptions} />
            </div>
        </div>
        <section className="flex px-2 bg-white bottom-0 gap-2 mt-4  py-3 justify-end w-full">
            <CustomButton variant="outlined" onClick={closeSmsModal} className="rounded-full">
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </CustomButton>
            <CustomButton loading={actionLoading} className="rounded-full" onClick={sendSms}>
                <span>ارسال پیامک</span>
            </CustomButton>
        </section>
    </section>
}
