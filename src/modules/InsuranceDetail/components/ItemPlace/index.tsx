
/* import { ListIcon } from '@/assets/icons/ListIcon' */

import useItemPlace from './itemPlace.biz'
/* import InsuranceInfo from './components/InsuranceInfo' */
import Card from './components/Card'
import ListLoader from '@/components/kit/ListLoader'
export default function Index() {
    const { data, loading } = useItemPlace()

    return <>
        {/*  <InsuranceInfo /> */}
        <section className='flex justify-center'>
            {loading && <ListLoader />}
        </section>
        {data[0]?.policyItemList.map((item: any, Index: number) => (<Card key={Index} item={item} lat={data[0].placeModel?.latitude} lng={data[0].placeModel?.longitude} />))}

    </>
}
