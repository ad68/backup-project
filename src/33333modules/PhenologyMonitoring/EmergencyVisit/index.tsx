import Card from './components/Card'
import Filter from './components/Filter'
export default function Index() {
    return <section className=''>
        <section className=''>
            <Filter />
        </section>
        <section className='m-auto relative mt-5 w-[440px]  max-w-full'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    </section>

}
