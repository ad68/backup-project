
import { CloudyIcon } from '@/assets/icons/CloudyIcon';
import Header from './components/Header'
export default function Index() {
    return <section className="m-auto w-[440px] h-screen max-w-full relative">
        <Header />
        <section className='w-full min-h-[400px] h-[calc(100%-220px)] bg-gradient-to-b from-slate-50 to-green-50 mt-[-80px] box-border relative rounded-t-[40px] z-50'>
            <section className='w-full absolute top-[-60px] flex justify-center'>
                <section className='w-[290px] px-[20px] flex justify-between items-center gap-4 h-[130px] m-auto bg-white rounded-[40px] shadow-2xl'>
                    <section className=' flex justify-between items-start gap-3'>
                        <section>
                            <span className='text-xs'>تهران</span>
                            <section className='flex text-xs font-light gap-2 justify-between items-start'>
                                <span>بارانی</span>
                                <span>33°</span>
                            </section>
                        </section>
                        <CloudyIcon className='w-[60px] fill-[#b2c197]' />

                    </section>
                    <section className='h-[60px] bg-[#d5d5d5] w-[2px]'></section>
                    <section className='w-[90px] text-white h-[50px] rounded-[10px] text-sm bg-primary  flex justify-center items-center'>
                        صفحه اصلی
                    </section>
                </section>
            </section>
        </section>
    </section>;
}
