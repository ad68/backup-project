

import Card from './components/Card'
import Filter from './components/Filter'
import ListLoader from '@/components/kit/ListLoader'
import NoRecord from '@/components/kit/NoRecord'
import PageTitle from '@/components/kit/PageTitle'
import SlidingModal from '@/components/kit/SlidingModal'
import SendSms from './components/SendSms'
import Pagination from './components/Pagination'
import useSendGroupSms from './sendGroupSms.biz'
import CustomButton from '@/components/kit/CustomButton'
import { MessageCircleIcon } from 'lucide-react'
export default function Index() {
    const { data, loading, setCurrentPage, totalPage, currentPage, getList, closeSmsModal, selectedItem, showSmsModal, smsModalIsOpen, allSmsModalIsOpen, showAllSmsModal, closeAllSmsModal, updateFilter, filter, clearFilter } = useSendGroupSms()
    return <>
        <PageTitle title='ارسال پیامک گروهی' />
        <section className='pb-[80px] px-2 max-w-5xl m-auto'>
            <section className=''>
                <Filter clearFilter={clearFilter} filter={filter} updateFilter={updateFilter} getList={getList} />
            </section>
            <div className='px-2'>
                <CustomButton onClick={showAllSmsModal} className='m-auto mt-10 w-full'>
                    ارسال پیامک به همه
                    <MessageCircleIcon className="w-[18px]" />
                </CustomButton>
            </div>
            {data.length !== 0 && <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />}
            {loading && <section className='flex justify-center mt-8'><ListLoader /></section>}
            {!loading && <section className='m-auto relative mt-2  max-w-5x'>
                {data?.map((item: any, index: any) => (<Card showSmsModal={showSmsModal} item={item} key={index} />))}
            </section>}
            {data.length !== 0 && <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />}
            {!loading && data.length === 0 && <NoRecord />}
        </section>
        <SlidingModal isOpen={smsModalIsOpen}>
            <SendSms closeSmsModal={closeSmsModal} rowData={selectedItem} />
        </SlidingModal>
        <SlidingModal isOpen={allSmsModalIsOpen}>
            <SendSms filter={filter} closeSmsModal={closeAllSmsModal} />
        </SlidingModal>
    </>
}
