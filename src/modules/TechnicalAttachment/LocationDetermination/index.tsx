
import ReactPaginate from 'react-paginate'
import Card from './components/Card'
import Filter from './components/Filter'
import useTechnicalAttachment from './technicalAttachment.biz'
import ListLoader from '@/components/kit/ListLoader'
import NoRecord from '@/components/kit/NoRecord'
import PageTitle from '@/components/kit/PageTitle'

export default function Index() {
    const { data, loading, setCurrentPage, totalPage, currentPage, setSearchParams } = useTechnicalAttachment()
    return <>
        <PageTitle title='تعیین مکان' />
        <section className='pb-10 px-2 max-w-5xl m-auto'>
            <section className=''>
                <Filter setSearchParams={setSearchParams} />
            </section>
            {data.length !== 0 && <section className='mt-10'>
                <ReactPaginate
                    pageCount={totalPage}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={2}
                    onPageChange={({ selected }) => setCurrentPage(selected + 1)}
                    containerClassName="flex gap-2 justify-center items-center mt-4"
                    pageClassName="border rounded-full border-gray-300 rounded px-3 py-1 text-sm cursor-pointer"
                    activeClassName="bg-primary text-white"
                    previousClassName="text-gray-500"
                    nextClassName="text-gray-500"
                    forcePage={currentPage - 1}
                    disabledClassName="opacity-50 text-white cursor-not-allowed"
                    breakClassName="px-2 py-1"
                    nextLabel=">"
                    previousLabel="<"
                />
            </section>}

            {loading && <section className='flex justify-center mt-8'><ListLoader /></section>}
            {!loading && <section className='m-auto relative mt-2  max-w-5x'>
                {data?.map((item: any, index: any) => (<Card item={item} key={index} />))}
            </section>}


            {data.length !== 0 && <section className='mt-1'>
                <ReactPaginate
                    pageCount={totalPage}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={2}
                    onPageChange={({ selected }) => setCurrentPage(selected + 1)}
                    containerClassName="flex gap-2 justify-center items-center mt-4"
                    pageClassName="border rounded-full border-gray-300 rounded px-3 py-1 text-sm cursor-pointer"
                    activeClassName="bg-primary text-white"
                    previousClassName="text-gray-500"
                    nextClassName="text-gray-500"
                    forcePage={currentPage - 1}
                    disabledClassName="opacity-50 text-white cursor-not-allowed"
                    breakClassName="px-2 py-1"
                    nextLabel=">"
                    previousLabel="<"
                />
            </section>}
            {!loading && data.length === 0 && <NoRecord />}
        </section>
    </>
}
