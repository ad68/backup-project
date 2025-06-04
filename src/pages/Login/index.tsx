import { useGeoLocation } from '@/hooks'
import LoginForm from './components/LoginForm'
import { useEffect } from 'react'
export default function Index() {
    const { location } = useGeoLocation()
    useEffect(() => {
        alert(location?.lat)
    }, [location])
    return <section className="m-auto relative bg-primary w-[440px] h-screen max-w-full">
        <section className="absolute w-full top-0 h-[400px] left-0 overflow-hidden">
            <img src="/images/login/sss.png" className="w-[80px] top-[5px] rotate-[10deg] absolute left-0" alt="" />
            <img src="/images/login/ir-white.svg" className="w-[150px] top-[20px] absolute right-2" alt="" />
            <section className='w-full text-center text-white text-[32px] font-bold mt-[180px]'>بکاپ</section>
            <span className='block mt-[5px] text-white w-full text-center'>بیمه کشاورزی ایرانیان پوشش</span>
        </section>
        <span>location : {`${location?.lat} ${location?.lng}`}</span>
        <LoginForm />
    </section>
}
