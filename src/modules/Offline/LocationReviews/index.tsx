import PageTitle from "@/components/kit/PageTitle";
import useLocationReviews from "./locationReviews.biz";
import Card from './components/Card'
import type { OfflineReview } from "./locationReviews.types";
import CustomButton from "@/components/kit/CustomButton";
import { UploadCloudIcon } from "lucide-react";
import NoRecord from "@/components/kit/NoRecord";
export default function Index() {

    const { list, syncData, actionLoading } = useLocationReviews()
    return <main className="pb-[80px]">
        <PageTitle size="small" title="لیست تعیین مکان آفلاین" />
        <div className="px-2 flex justify-center">
            <CustomButton loading={actionLoading} disabled={list.length === 0} className="bg-purple-600 w-full" onClick={() => syncData()}>
                همگام سازی به حالت آنلاین
                <UploadCloudIcon />
            </CustomButton>
        </div>
        {list.map((item: OfflineReview, index: number) => (<Card key={index} id={item.id} expireDate={item.expireDate} isError={item.isError} item={item.locateReviews} />))}
        {list.length === 0 && <NoRecord />}
    </main>
}
