import Item from './components/Item'

export default function Index() {
    return <section className="flex gap-2 justify-between px-4 mt-8">
        <Item title="پیوست های فنی" count={0} />
        <Item title="پایش فنولوژی" count={"soon"} />
        <Item title="خسارت" count={'soon'} />
    </section>
}
