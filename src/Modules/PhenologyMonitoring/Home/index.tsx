
import { Link } from "react-router-dom";
export default function Index() {

    return <section className="pt-10 px-2 w-[440px] max-w-full m-auto h-[90%] flex flex-col gap-5 justify-center items-center">
        <span className="font-bold text-2xl absolute top-5">پایش فنولوژی</span>
        <Link to="/phenology-monitoring/cases" className="w-full mt-10">
            <section className="flex flex-col border-2 border-green-500 active:bg-green-500 shadow-lg items-center p-2 py-2 gap-2  h-auto bg-primary text-white  rounded-2xl">
                <span className="text-xl">
                    پرونده های پایش
                </span>
            </section>
        </Link>
        <Link to="/phenology-monitoring/program" className="w-full">
            <section className="flex flex-col border-2 border-blue-500 shadow-lg items-center p-2 py-2 gap-2 w-full h-auto active:bg-blue-600 bg-blue-500 text-white  rounded-2xl">
                <span className="text-xl">
                    برنامه پایش
                </span>
            </section>
        </Link>
        <Link to="/phenology-monitoring/emergency-visit" className="w-full">
            <section className="flex flex-col border-2 border-green-500 active:bg-green-500 shadow-lg items-center p-2 py-2 gap-2  h-auto bg-primary text-white  rounded-2xl">
                <span className="text-xl">
                    برنامه بازدید اضطراری
                </span>
            </section>
        </Link>
        <Link to="#" className="w-full">
            <section className="flex flex-col border-2 border-blue-500 shadow-lg items-center p-2 py-2 gap-2 w-full h-auto active:bg-blue-600 bg-blue-500 text-white  rounded-2xl">
                <span className="text-xl">
                    اطلاعات پایه
                </span>
            </section>
        </Link>
    </section>
}
