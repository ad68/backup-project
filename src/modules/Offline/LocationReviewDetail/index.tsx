import PageTitle from "@/components/kit/PageTitle"
import useLocationReviewDetail from "./LocationReviewDetail.biz"
import Card from './components/Card'
import { useSearchParams } from "react-router-dom"
export default function Index() {
    const { policyList } = useLocationReviewDetail()
    const [setSearchParams] = useSearchParams()
    const farmerName = setSearchParams.get("farmerName")
    const policyId = setSearchParams.get("policyId")
    return <main className="pb-[80px]">
        <PageTitle size='small' miniDescription={`بیمه نامه: ${policyId}`} title={`${farmerName}`} />
        {policyList.map((item: any, Index: number) => (<Card key={Index} item={item} />))}
    </main>
}
