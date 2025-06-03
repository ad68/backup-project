import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';



//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [currentPage, setCurrentPage] = useState<number>(1)
    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        console.log("currentPage", currentPage)
    }, [currentPage])
    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <section className='px-2'>
        <ReactPaginate
            pageCount={50}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            onPageChange={({ selected }) => setCurrentPage(selected + 1)}
            containerClassName="flex gap-2 justify-center mt-4"
            pageClassName="border rounded-full border-gray-300 rounded px-3 py-1 text-sm cursor-pointer"
            activeClassName="bg-primary text-white"
            previousClassName="text-gray-500"
            nextClassName="text-gray-500"
            disabledClassName="opacity-50 text-white cursor-not-allowed"
            breakClassName="px-2 py-1"
            nextLabel=">"
            previousLabel="<"
        />
    </section>
}
