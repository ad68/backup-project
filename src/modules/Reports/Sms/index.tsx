

import Card from './components/Card'
import Filter from './components/Filter'
import ListLoader from '@/components/kit/ListLoader'
import NoRecord from '@/components/kit/NoRecord'
import PageTitle from '@/components/kit/PageTitle'
import Pagination from './components/Pagination'
import useSmsReport from './smsReport.Biz'
export default function Index() {
    const { data, isFetching, setCurrentPage, totalElement, currentPage, setParams } = useSmsReport()
    return <>
        <PageTitle size='small' title='گزارش پیامک های اطلاع رسانی' />
        <section className='pb-10 px-2 max-w-5xl m-auto'>
            <section className=''>
                <Filter setParams={setParams} />
            </section>
            {data?.elements?.length !== 0 && <Pagination currentPage={currentPage} totalPage={totalElement / 10} setCurrentPage={setCurrentPage} />}
            {isFetching && <section className='flex justify-center mt-8'><ListLoader /></section>}
            {!isFetching && <section className='m-auto relative mt-2  max-w-5x'>
                {data?.elements?.map((item: any, index: any) => (<Card item={item} key={index} />))}
            </section>}
            {data?.elements?.length !== 0 && <Pagination currentPage={currentPage} totalPage={totalElement / 10} setCurrentPage={setCurrentPage} />}
            {!isFetching && data?.length === 0 && <NoRecord />}
        </section>

    </>
}
