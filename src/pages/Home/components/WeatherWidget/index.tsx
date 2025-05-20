
import Sun from '../../../../../public/home/sun.png';
export default function Index() {
    return <section className='w-full absolute top-[-60px] flex justify-center'>
        <section className='w-[320px] px-[20px] flex justify-between items-center relative overflow-hidden gap-4 h-[130px] m-auto bg-primary rounded-[10px] shadow-2xl'>
            <section className="blob2"></section>
            <section className='absolute flex items-center gap-4 top-[10px] '>
                <img src={Sun} alt='' className='w-[60px]' />
                <section className='flex flex-col'>
                    <span>33°</span>
                    <span className='text-sm font-light'>آفتابی</span>
                </section>
            </section>
            <section className='absolute flex items-center justify-center w-[140px]   text-center gap-4 top-[80px] '>

                <span className=''>صاف</span>
            </section>

        </section>
    </section>;
}
