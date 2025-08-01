import CustomButton from "@/components/kit/CustomButton";
import PageTitle from "@/components/kit/PageTitle";
import { Switch } from "@/components/ui/switch";
import useSubjectNotExist from "./subjectNotExist.biz";

export default function Index() {
    const { actionLoading, saveData } = useSubjectNotExist()
    return <>
        <PageTitle title="عدم وجود مورد" />
        <section className="p-2">
            <div className="border border-[#2ebf704f] rounded-md flex flex-col  gap-1 p-2">
                <div className="flex  gap-2">
                    <div dir="ltr" className="flex items-center">
                        <Switch disabled={true} checked />
                    </div>
                    <span>مورد وجود ندارد</span>
                </div>
                <span className="text-xs font-light">در صورت عدم مطابقت موضوع، حدود اربعه، و یا کلاً عدم وجود محل</span>
            </div>
            <section className="flex px-2 bg-white bottom-0 gap-2 mt-4 py-3 justify-end w-full">
                <CustomButton onClick={saveData} loading={actionLoading} className="rounded-full w-full">
                    <span>ثبت</span>
                </CustomButton>
            </section>
        </section>

    </>
}
