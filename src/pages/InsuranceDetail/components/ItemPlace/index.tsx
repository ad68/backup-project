
/* import { ListIcon } from '@/assets/icons/ListIcon' */
import DetailModal from './components/DetailModal'
import useItemPlace from './itemPlace.biz'
import Card from './components/Card'
export default function Index() {
    const { isModalOpen, setIsModalOpen } = useItemPlace()
    return <>

        <section className='p-2'>
            <section className='border bg-slate-50 border-slate-200 p-2 rounded-lg mt-5'>
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
        <DetailModal setIsOpen={setIsModalOpen} isOpen={isModalOpen} />
    </>
}
