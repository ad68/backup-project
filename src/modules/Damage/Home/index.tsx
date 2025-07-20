
import { Link } from "react-router-dom";
export default function Index() {

    return <section className="pt-10 px-2 w-[440px] max-w-full m-auto h-[90%] flex flex-col gap-5 justify-center items-center">
        <span className="font-bold text-2xl absolute top-5">خسارت</span>
        <Link to="/damage/damage-registration" className="w-full mt-10">
            <section className="flex flex-col border-2 border-green-500 active:bg-green-500 shadow-lg items-center p-2 py-2 gap-2  h-auto bg-primary text-white  rounded-2xl">
                <span className="text-xl">
                    ثبت خسارت
                </span>
            </section>
        </Link>
        <Link to="/damage/current-actions" className="w-full">
            <section className="flex flex-col border-2 border-blue-500 shadow-lg items-center p-2 py-2 gap-2 w-full h-auto active:bg-blue-600 bg-blue-500 text-white  rounded-2xl">
                <span className="text-xl">
                    اقدامات جاری
                </span>
            </section>
        </Link>
        <Link to="/damage/previous-actions" className="w-full">
            <section className="flex flex-col border-2 border-green-500 active:bg-green-500 shadow-lg items-center p-2 py-2 gap-2  h-auto bg-primary text-white  rounded-2xl">
                <span className="text-xl">
                    اقدامات قبلی
                </span>
            </section>
        </Link>
        <Link to="/damage/search" className="w-full">
            <section className="flex flex-col border-2 border-blue-500 shadow-lg items-center p-2 py-2 gap-2 w-full h-auto active:bg-blue-600 bg-blue-500 text-white  rounded-2xl">
                <span className="text-xl">
                    جستجو
                </span>
            </section>
        </Link>
    </section>
}
