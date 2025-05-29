
/* import { ListIcon } from '@/assets/icons/ListIcon' */
import DetailModal from './components/DetailModal'
import useItemPlace from './itemPlace.biz'
import Card from './components/Card'
export default function Index() {
    const { isModalOpen } = useItemPlace()
    return <>
        {/*  <section className="relative">
            <span className="block h-[1px] bg-slate-200 mt-10"></span>
            <section className="flex justify-center absolute w-full top-[-19px]">
                <button onClick={() => setIsModalOpen(true)} className="border border-slate-200 flex justify-center items-center gap-1 bg-white  rounded-full w-[150px] py-2">
                    <ListIcon className="w-[30px] text-slate-600" />
                    <span className="text-xs font-light">بیمه نامه</span>
                </button>
            </section>
        </section> */}
        <section className='p-2'>
            <section className='border bg-slate-100 border-slate-200 p-2 rounded-lg mt-5'>
                <span className='block text-center'>مشخصات بیمه نامه</span>
                <hr className='border-slate-300 my-1' />
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">بیمه‌نامه:</span>
                        <span className="text-sm">26483847</span>
                    </section>


                </section>
                <section>
                    <section className="flex gap-1 mt-2">
                        <span className="font-light text-slate-500 text-sm">مورد:</span>
                        <span className="text-sm">22642929</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">تاریخ فعال‌سازی:</span>
                        <span className="text-sm">1403/11/06</span>
                    </section>

                </section>
                <section className='mt-2'>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">مساحت:</span>
                        <span className="text-sm">6 هکتار</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">شعبه:</span>
                        <span className="text-sm">اسلامشهر</span>
                    </section>

                </section>
                <section className='mt-2'>
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">طرح:</span>
                        <span className="text-sm">9326</span>
                    </section>
                </section>
                <section className="flex mt-2 justify-between w-full">
                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">ذینفع:</span>
                        <span className="text-sm">عباس درخشان راد (2649092221)</span>
                    </section>

                </section>
                <section className="flex mt-2 justify-between w-full">

                    <section className="flex gap-1">
                        <span className="font-light text-slate-500 text-sm">موضوع:</span>
                        <span className="text-sm">کلزا آبی (فراگیر اجباری)</span>
                    </section>
                </section>

                <section className="flex mt-2 justify-between w-full">
                    <section className="flex flex-col gap-1">
                        <span className="font-light text-slate-500 text-sm">نشانی:</span>
                        <span className="text-sm ">تهران، اسلامشهر، مرکزی، ده عباس، شهر اسلامشهر - کشت 1928129</span>
                    </section>
                </section>
            </section>
        </section>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <DetailModal isOpen={isModalOpen} />
    </>
}
