import PageTitle from "@/components/kit/PageTitle";
import { MapPinCheckIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
export default function Index() {
    const location = useLocation();
    return <>
        <PageTitle title="تعیین مکان" />
        <section className="px-2 max-w-5xl m-auto h-[90%]">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
                <Link to={`/technical-attachment/location-on-map${location.search}`} className="w-full">
                    <section className="flex justify-center border-2 border-green-500 active:bg-green-500 shadow-lg items-center p-1 py-3  gap-2  h-auto bg-primary text-white  rounded-2xl">
                        <MapPinCheckIcon className="text-white" />
                        <span className="text-xl">
                            تعیین مکان از روی نقشه
                        </span>
                    </section>
                </Link>
                <Link to={`/technical-attachment/location-with-file${location.search}`} className="w-full">
                    <section className="flex justify-center border-2 border-blue-500 active:bg-blue-500 shadow-lg items-center p-1 py-3 gap-2  h-auto bg-blue-500 text-white  rounded-2xl">
                        <UploadCloudIcon className="text-white" />
                        <span className="text-xl">
                            آپلود فایل gpx یا kml
                        </span>
                    </section>
                </Link>
                <Link to={`/technical-attachment/subject-not-exist${location.search}`} className="w-full">
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
