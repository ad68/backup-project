import Item from './components/Item'

export default function Index() {
    return <section className="flex gap-2 justify-between px-4 mt-8">
        <Item title="پایش فنولوژی" count={33} />
        <Item title="پیوست های فنی" count={50} />
        <Item title="خسارت" count={1200} />
    </section>
}
