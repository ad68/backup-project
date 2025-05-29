import Card from './components/Card'
import Filter from './components/Filter'
export default function Index() {

    return <>
        <section className='m-auto w-[440px] max-w-full'>
            <Filter />
        </section>
        <section className='m-auto relative mt-[30px] w-[440px] h-screen max-w-full'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    </>

}
