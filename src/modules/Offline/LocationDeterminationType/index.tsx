import PageTitle from "@/components/kit/PageTitle";
import { MapPinCheckIcon, XIcon } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
export default function Index() {
    const location = useLocation();
    const { id } = useParams();
    return <>
        <PageTitle title="تعیین مکان" />
        <section className="px-2 max-w-5xl m-auto h-[90%]">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
                <Link to={`/offline/location-on-map/${id}${location.search}`} className="w-full">
                    <section className="flex justify-center border-2 border-green-500 active:bg-green-500 shadow-lg items-center p-1 py-3  gap-2  h-auto bg-primary text-white  rounded-2xl">
                        <MapPinCheckIcon className="text-white" />
                        <span className="text-xl">
                            تعیین مکان از روی نقشه
                        </span>
                    </section>
                </Link>

                <Link to={`/offline/subject-not-exist/${id}${location.search}`} className="w-full">
                    <section className="flex justify-center border-2 border-red-500 active:bg-red-500 shadow-lg items-center p-1 py-3 gap-2  h-auto bg-red-500 text-white  rounded-2xl">
                        <XIcon className="text-white" />
                        <span className="text-xl">
                            مورد اصلا وجود ندارد
                        </span>
                    </section>
                </Link>
            </div>
        </section>
    </>

}
