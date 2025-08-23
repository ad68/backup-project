import PageTitle from "@/components/kit/PageTitle";
import { MessageCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
export default function Index() {
    return <>
        <PageTitle title="گزارشات" />
        <section className="px-2 max-w-5xl m-auto h-[90%]">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
                <Link to={`/reports/sms`} className="w-full">
                    <section className="flex justify-center border-2 border-blue-500 active:bg-blue-500 shadow-lg items-center p-1 py-3 gap-2  h-auto bg-blue-500 text-white  rounded-2xl">
                        <MessageCircleIcon className="text-white" />
                        <span className="text-lg">
                            گزارش پیامک های اطلاع رسانی
                        </span>
                    </section>
                </Link>
            </div>
        </section>
    </>
}
