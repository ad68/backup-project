
import useItemPlace from "./itemPlace.biz"
import Card from './components/Card'
export default function Index() {
    const { policyList, placeModel } = useItemPlace()
    return <main className="pb-[80px] flex flex-col gap-5">
        {policyList.map((item: any, Index: number) => (<Card key={Index} item={item} lat={String(placeModel.latitude)} lng={String(placeModel.longitude)} />))}
    </main>
}

