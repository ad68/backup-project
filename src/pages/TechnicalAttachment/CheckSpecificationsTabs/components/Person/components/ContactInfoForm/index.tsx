import CustomSelect from "@/components/kit/CustomSelect"
import CustomTextArea from "@/components/kit/CustomTextArea";
import CustomTextBox from "@/components/kit/CustomTextBox"
import { Switch } from "@/components/ui/switch"
import { Info, Undo2Icon } from "lucide-react";

export default function Index() {

    return <section className="p-4">
        <section className="mt-2">
            <span className="text-primary font-bold text-sm">اطلاعات تماس:</span>
        </section>
        <section className="flex gap-2 justify-center">
            <Info className="text-blue-500" />
            <span className="font-bold text-xs text-blue-500">در صورت نیاز، می‌توانید نشانی و سایر اطلاعات تماسی شخص را اصلاح کنید.</span>
        </section>
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">کد پستی:</span>
            <CustomTextBox onChange={() => { }} placeholder="کد پستی را وارد کنید" />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">استان:</span>
            <CustomSelect options={[]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">شهرستان:</span>
            <CustomSelect options={[]} onChange={() => { }} />
        </section>

        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">دهستان:</span>
            <CustomSelect options={[]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">آبادی یا شهر:</span>
            <CustomSelect options={[]} onChange={() => { }} />
        </section>
        <section className="mt-1">
            <span className="font-light text-slate-700 text-xs">آدرس</span>
            <CustomTextArea onChange={() => { }} />
        </section>
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">شماره تلفن:</span>
            <CustomTextBox onChange={() => { }} placeholder="شماره تلفن را وارد کنید" />
        </section>
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">شماره دورنگار:</span>
            <CustomTextBox onChange={() => { }} placeholder="شماره دورنگار را وارد کنید" />
        </section>
        <section className="mt-2">
            <span className="font-light text-slate-700 text-xs">تلفن همراه:</span>
            <CustomTextBox onChange={() => { }} placeholder="تلفن همراه را وارد کنید" />
        </section>
        <section dir="ltr" className="flex gap-1 mt-2 justify-end">
            <Switch />
            <span className="text-sm">تلفن همراه متعلق به شخص دیگری (نماینده) است</span>
        </section>
        <section className="flex sticky bg-white bottom-0 gap-2 mt-4 border-t py-3 justify-end w-full">
            <button className="bg-white border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </button>
            <button className="bg-primary w-[120px] text-white flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>تایید</span>

            </button>
        </section>
    </section>
}
