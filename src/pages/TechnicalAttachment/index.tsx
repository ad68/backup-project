
import { ListCheckIcon, MapPinCheckIcon } from "lucide-react";
import { Link } from "react-router-dom";



export default function Index() {

    return <section className="pt-10 px-2 h-[90%] flex flex-col gap-5 justify-center items-center">
        <span className="font-bold text-2xl absolute top-5">پیوست فنی</span>
        <Link to="/location-determination" className="w-full">
            <section className="flex flex-col border-2 border-green-500 active:bg-green-500 shadow-lg items-center p-2 py-5 gap-2  h-auto bg-primary text-white  rounded-2xl">
                <MapPinCheckIcon className="text-white" />
                <span className="text-xl">
                    تعیین مکان
                </span>
            </section>
        </Link>

        <Link to="#" className="w-full">
            <section className="flex flex-col border-2 border-blue-500 shadow-lg items-center p-2 py-5 gap-2 w-full h-auto active:bg-blue-600 bg-blue-500 text-white  rounded-2xl">
                <ListCheckIcon className="text-white" />
                <span className="text-xl">
                    بررسی مشخصات
                </span>

            </section>
        </Link>



    </section>
}
