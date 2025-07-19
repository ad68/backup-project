import Item from './components/Item'

export default function Index() {
    return <section className="flex gap-2 justify-between px-4 mt-8">
        <Item title="پیوست های فنی" count={7} />
        <Item title="پایش فنولوژی" count={0} />
        <Item title="خسارت" count={0} />
    </section>
}
