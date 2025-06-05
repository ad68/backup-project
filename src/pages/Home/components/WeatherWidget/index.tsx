import { CloudIcon } from '@/assets/icons/CloudIcon';
import useWeatherWidget from './weatherWidget.biz';
import { RefreshCcw } from 'lucide-react';
import { getPersianDate } from '@/utils/global';
import ListLoader from '@/components/kit/ListLoader';



export default function Index() {
    const { weatherData, Reload, actionLoading } = useWeatherWidget()
    return <section className='w-full mt-[-100px] relative flex justify-center'>

        <section className='w-[320px] px-[20px] flex justify-between items-center relative overflow-hidden gap-4 h-[130px] m-auto bg-primary rounded-[10px] shadow-2xl'>
            {actionLoading && <section className='w-full h-full absolute flex justify-center items-center bg-white top-0 left-0 z-50'>
                <ListLoader />
            </section>}

            <section className="blob2"></section>
            <section className='absolute flex items-center gap-4 top-[10px] '>
                <img src="/images/home/sun.png" alt='' className='w-[60px]' />
                <section className='flex flex-col'>
                    <span>{Math.trunc(weatherData?.temperature)}°</span>
                    <span className='text-sm font-light'>آفتابی</span>
                </section>
            </section>
            <section className='absolute flex items-center justify-center w-[140px] text-center gap-4 top-[80px] '>
                <span className=''>{weatherData?.description}</span>
            </section>
            <section className='absolute left-[6px] top-[15px] w-[145px] '>
                <span className="block text-white">وضعیت هوا</span>
                <span className="block text-white font-light text-[12px]">{getPersianDate()}</span>
            </section>
            <CloudIcon className='w-[150px] bottom-[-74px] absolute left-[-48px]' />
            <button onClick={Reload} className='absolute flex justify-center items-center w-[25px] h-[25px] left-1 top-1 border rounded-full p-1 border-1'>
                <RefreshCcw className='stroke-slate-600 w-[20px]' color='black' />
            </button>

        </section>

    </section>
}
