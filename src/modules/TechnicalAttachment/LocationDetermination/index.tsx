

import Card from './components/Card'
import Filter from './components/Filter'
import useTechnicalAttachment from './technicalAttachment.biz'
import ListLoader from '@/components/kit/ListLoader'
import NoRecord from '@/components/kit/NoRecord'
import PageTitle from '@/components/kit/PageTitle'

import Pagination from './components/Pagination'
export default function Index() {
    const { data, loading, setCurrentPage, totalPage, currentPage, getList, showSmsModal } = useTechnicalAttachment()
    return <>
        <PageTitle title='تعیین مکان' />
        <section className='pb-10 px-2 max-w-5xl m-auto'>
            <section className=''>
                <Filter getList={getList} />
            </section>
            {data.length !== 0 && <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />}
            {loading && <section className='flex justify-center mt-8'><ListLoader /></section>}
            {!loading && <section className='m-auto relative mt-2  max-w-5x'>
                {data?.map((item: any, index: any) => (<Card showSmsModal={showSmsModal} item={item} key={index} />))}
            </section>}
            {data.length !== 0 && <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />}
            {!loading && data.length === 0 && <NoRecord />}
        </section>

    </>
}
