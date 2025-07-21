import Tabs from './components/Tabs';
import ItemPlace from './components/ItemPlace'
import Documents from './components/Documents'
import Result from './components/Result'
import useInsuranceDetail from './insuranceDetail.biz';
import PageTitle from '@/components/kit/PageTitle';
import { useSearchParams } from 'react-router-dom';
export default function Index() {
    const { activeTab, setActiveTab } = useInsuranceDetail()
    const [setSearchParams] = useSearchParams()
    const farmerName = setSearchParams.get("farmerName")
    return <section className='m-auto max-w-5xl'>
        <PageTitle size='small' title={`بیمه نامه ${farmerName}`} />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 && <ItemPlace />}
        {activeTab === 2 && <Documents />}
        {activeTab === 3 && <Result />}
    </section>
}
