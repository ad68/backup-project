import useActionCount from './actionCount.biz'
import Item from './components/Item'
export default function Index() {
    const { count } = useActionCount()
    return <section className="flex gap-2 justify-between px-4 mt-8">
        <Item title="پیوست های فنی" count={count} />
        <Item title="پایش فنولوژی" count={0} />
        <Item title="پرونده خسارت" count={0} />
    </section>
}
