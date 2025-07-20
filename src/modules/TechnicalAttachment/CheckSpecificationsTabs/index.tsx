import useCheckSpecificationsTabs from './checkSpecificationsTabs.biz'
import Tabs from './components/Tabs'
import InsuranceInfo from './components/InsuranceInfo'
import Documents from './components/Documents'
import InsuredItem from './components/InsuredItem'
import Person from './components/Person'
import Result from './components/Result'
export default function Index() {
    const { activeTab, setActiveTab } = useCheckSpecificationsTabs()
    return <section className='w-[440px] max-w-full'>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 && <InsuranceInfo />}
        {activeTab === 2 && <Person />}
        {activeTab === 3 && <InsuredItem />}
        {activeTab === 4 && <Documents />}
        {activeTab === 5 && <Result />}
    </section>
}
