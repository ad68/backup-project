import PageTitle from "@/components/kit/PageTitle";
import { MapPinCheckIcon } from "lucide-react";
import { Link } from "react-router-dom";
export default function Index() {


    return <>
        <PageTitle title="پیوست فنی" />
        <section className="px-2 max-w-5xl m-auto h-[90%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link to="/location-determination" className="w-full">
                    <section className="flex flex-col border-2 border-green-500 active:bg-green-500 shadow-lg items-center p-2 py-5 gap-2  h-auto bg-primary text-white  rounded-2xl">
                        <MapPinCheckIcon className="text-white" />
                        <span className="text-xl">
                            تعیین مکان
                        </span>
                    </section>
                </Link>
                {/*  <Link to="/check-specifications" className="w-full">
                    <section className="flex flex-col border-2 border-blue-500 shadow-lg items-center p-2 py-5 gap-2 w-full h-auto active:bg-blue-600 bg-blue-500 text-white  rounded-2xl">
                        <ListCheckIcon className="text-white" />
                        <span className="text-xl">
                            بررسی مشخصات
                        </span>
                    </section>
                </Link> */}
            </div>



        </section>
    </>

}
