import Tabs from './components/Tabs';
import ItemPlace from './components/ItemPlace'
import Documents from './components/Documents'
import Result from './components/Result'
import useInsuranceDetail from './insuranceDetail.biz';
export default function Index() {
    const { activeTab, setActiveTab } = useInsuranceDetail()
    return <section className='m-auto w-[440px] h-10 max-w-full'>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 && <ItemPlace />}
        {activeTab === 2 && <Documents />}
        {activeTab === 3 && <Result />}
    </section>
}
