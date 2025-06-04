import { CloudIcon } from '@/assets/icons/CloudIcon';
import { useGeoLocation } from '@/hooks';
import { useEffect } from 'react';
export default function Index() {
    const { location } = useGeoLocation()
    useEffect(() => {
        alert(location?.lat)
    }, [location])
    return <section className='w-full absolute top-[-52px] flex justify-center'>
        <section className='w-[320px] px-[20px] flex justify-between items-center relative overflow-hidden gap-4 h-[130px] m-auto bg-primary rounded-[10px] shadow-2xl'>
            <section className="blob2"></section>
            <section className='absolute flex items-center gap-4 top-[10px] '>
                <img src="/images/home/sun.png" alt='' className='w-[60px]' />
                <section className='flex flex-col'>
                    <span>36°</span>
                    <span className='text-sm font-light'>آفتابی</span>
                </section>
            </section>
            <section className='absolute flex items-center justify-center w-[140px]   text-center gap-4 top-[80px] '>
                <span className=''>صاف</span>
            </section>
            <section className='absolute left-[6px] top-[15px] w-[145px] '>
                <span className="block text-white">وضعیت هوا</span>
                <span className="block text-white font-light text-[12px]">سه شنبه 13 خرداد 1404</span>
            </section>
            <CloudIcon className='w-[150px] bottom-[-74px] absolute left-[-48px]' />
        </section>

    </section>
}
