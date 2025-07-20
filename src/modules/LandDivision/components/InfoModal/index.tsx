import SlidingModal from "@/components/kit/SlidingModal";
import type { ModalProp } from "@/modules/InsuranceDetail/insuranceDetail.types";
import { Undo2Icon } from "lucide-react";


export default function Index({ isOpen, setIsOpen }: ModalProp) {

    return <SlidingModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <section className="px-8 py-4 text-sm leading-8">

            <ul className="list-disc mt-5 font-light text-justify">
                <li>تقسیم قلم بیمه‌شده فقط بر روی بیمه‌نامه اصلی باید انجام شود. سایر بیمه‌نامه‌های مرتبط به طور خودکار توسط سامانه تقسیم خواهند شد.</li>
                <li>پس از تقسیم قلم بیمه‌شده امکان ادغام مجدد وجود نخواهد داشت.</li>
                <li>تقسیم قلم بیمه‌شده برای موضوعاتی که میزان بیمه‌شده همواره یک است (مثل دام سبک) و موضوعاتی که ذاتاً تک موردی هستند (مثل نیمچه) قابل انجام نیست.</li>
                <li>احتمالاً لازم است اطلاعات اختصاصی قلم جدید (مثل حدود اربعه) اصلاح شوند. در صورت لزوم در فرم مربوطه این کار را انجام دهید.</li>
                <li>بیمه‌نامه نباید تعیین مکان شده باشد.
                </li>
            </ul>
            <button onClick={() => setIsOpen(false)} className="bg-white mr-auto border border-primary w-[120px] text-primary flex justify-center items-center gap-2 rounded-full py-2 px-1 text-sm">
                <span>بازگشت</span>
                <Undo2Icon className="w-[20px]" />
            </button>
        </section>
    </SlidingModal>
}
