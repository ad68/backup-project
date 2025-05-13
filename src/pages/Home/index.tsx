
import { CloudyIcon } from '@/assets/icons/CloudyIcon';
import Header from './components/Header'
export default function Index() {
    return <section className="m-auto w-[440px] h-screen max-w-full relative">
        <Header />
        <section className='w-full min-h-[400px] bg-white mt-[-80px] box-border relative rounded-t-[40px] z-50'>
            <section className='w-full absolute top-[-60px] flex justify-center'>
                <section className='w-[250px] px-[20px] flex justify-between items-center gap-2 h-[130px] m-auto bg-white rounded-[40px] shadow-2xl'>
                    <section className=''>
                        <section className='flex gap-2 justify-between items-start'>
                            <span>بارانی 33</span>
                            <CloudyIcon className='w-[70px] fill-[#b2c197]' />
                        </section>

                    </section>
                    <section className='h-[60px] bg-[#d5d5d5] w-[2px]'></section>
                    <section className='w-[90px]  h-[100px]'></section>
                </section>
            </section>
        </section>
    </section>;
}
