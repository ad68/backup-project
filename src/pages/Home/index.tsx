
import { CloudyIcon } from '@/assets/icons/CloudyIcon';
import Header from './components/Header'
import Footer from './components/Footer'
import { DropIcon } from '@/assets/icons/DropIcon';
import { UploadIcon } from '@/assets/icons/UploadIcon';
import { MapIcon } from '@/assets/icons/MapIcon';
import { ArticleIcon } from '@/assets/icons/ArticleIcon';
export default function Index() {
    return <section className="m-auto w-[440px] h-screen max-w-full relative">
        <Header />
        <section className='w-full min-h-[400px]  h-[calc(100%-220px)] bg-gradient-to-b from-slate-50 to-green-50 mt-[-80px] box-border relative rounded-t-[40px] z-50'>
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
            <section className='h-full px-5 grid grid-cols-2 gap-4 pt-[100px] pb-[80px] overflow-scroll rounded-t-[40px]'>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <ArticleIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>مقالات</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <DropIcon className='fill-primary w-[80px]' />
                    <span className='text-slate-400'>آبیاری</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <UploadIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>آپلود فایل</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <MapIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>ثبت نقشه</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <ArticleIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>مقالات</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <DropIcon className='fill-primary w-[80px]' />
                    <span className='text-slate-400'>آبیاری</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <UploadIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>آپلود فایل</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <MapIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>ثبت نقشه</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <ArticleIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>مقالات</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <DropIcon className='fill-primary w-[80px]' />
                    <span className='text-slate-400'>آبیاری</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <UploadIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>آپلود فایل</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <MapIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>ثبت نقشه</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <ArticleIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>مقالات</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <DropIcon className='fill-primary w-[80px]' />
                    <span className='text-slate-400'>آبیاری</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <UploadIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>آپلود فایل</span>
                </section>
                <section className='w-full gap-3 p-4 flex flex-col justify-center items-center h-[110px] m-auto bg-white rounded-lg shadow-sm'>
                    <MapIcon className='stroke-primary w-[80px]' />
                    <span className='text-slate-400'>ثبت نقشه</span>
                </section>

            </section>
        </section>
        <Footer />
    </section>
}
