import ReactPaginate from "react-paginate";
import type { PaginationProp } from "../../sendGroupSms.types";


export default function Index({ setCurrentPage, totalPage, currentPage }: PaginationProp) {
    return <>
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
    </>
}
