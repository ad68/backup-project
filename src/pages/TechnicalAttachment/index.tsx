
import ReactPaginate from 'react-paginate'
import Card from './components/Card'
import Filter from './components/Filter'
import useTechnicalAttachment from './technicalAttachment.biz'

export default function Index() {
    const { data, loading, setCurrentPage, totalPage, currentPage } = useTechnicalAttachment()

    return <section className='pb-10'>
        <section className='m-auto w-[440px] max-w-full'>
            <Filter />
        </section>
        <section className='mt-10'>
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
        </section>
        {loading && <span className='block text-center mt-5'>در حال بارگزاری...</span>}
        {!loading && <section className='m-auto relative mt-2 w-[440px]  max-w-full'>
            {data?.map((item: any, index: any) => (<Card item={item} key={index} />))}
        </section>}
        <section className='mt-1'>
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
        </section>


    </section>

}
