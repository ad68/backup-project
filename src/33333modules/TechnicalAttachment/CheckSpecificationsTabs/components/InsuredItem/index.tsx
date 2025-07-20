
import { SearchIcon, Undo2Icon } from "lucide-react"
import CustomSelect from "@/components/kit/CustomSelect"
import CustomTextBox from "@/components/kit/CustomTextBox"
import CustomButton from "@/components/kit/CustomButton"
import Card from './components/Card'
export default function Index() {
    const item1 = {
        "reviewId": 21827525,
        "reviewStartDate": "2025-06-01T16:00:43.26",
        "subjectId": 21992535,
        "policyId": 25833230,
        "agriYear": "1403-04",
        "product": "گندم آبی",
        "formId": 15,
        "region": "تهران، رباط کریم، مرکزی، وهن آباد، شهرستان (شهرستانک)",
        "beneficiary": {
            "nationalCode": "0601674472",
            "title": "اکبر ایمنی",
            "mobile": "09125289912"
        },
        "insured": 10.0
    }
    return <section className="p-2">
        <section className="border border-slate-200  rounded-lg p-2">
            <span className='block text-center'>جستجو</span>
            <hr className='border-slate-300 my-1' />
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">شناسه:</span>
                <CustomTextBox onChange={() => { }} />
            </section>
            <section className="mt-1">
                <span className="font-light text-slate-700 text-xs">عملکرد:</span>
                <CustomSelect options={[{ label: "test 1", value: "1" }]} onChange={() => { }} />
            </section>
            <section className="flex px-2 bg-white bottom-0 gap-2 mt-4 py-3 justify-end w-full">
                <CustomButton
                    onClick={() => { }}
                    variant="outlined"
                    className="rounded-full"
                >
                    <span>بازگشت</span>
                    <Undo2Icon className="w-[20px]" />
                </CustomButton>
                <CustomButton className="rounded-full">
                    <span>جستجو</span>
                    <SearchIcon className="w-[20px]" />
                </CustomButton>
            </section>

        </section>
        <Card item={item1} />
    </section>
}
