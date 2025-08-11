import PageTitle from "@/components/kit/PageTitle";
import useLocationReviews from "./locationReviews.biz";
import Card from './components/Card'
import type { OfflineReview } from "./locationReviews.types";
export default function Index() {
    const { list } = useLocationReviews()
    return <main className="pb-[80px]">
        <PageTitle size="small" title="لیست تعیین مکان آفلاین" />
        {list.map((item: OfflineReview, index: number) => (<Card key={index} id={item.id} item={item.locateReviews[0]} />))}
    </main>
}
