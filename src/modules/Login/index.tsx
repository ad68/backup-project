import LoginForm from './components/LoginForm'
export default function Index() {
    return <section className="m-auto relative bg-primary max-w-5xl h-full">
        <section className="absolute w-full top-0 h-[400px] left-0 overflow-hidden">
            <img src="/images/login/sss.png" className="w-[80px] top-[5px] rotate-[10deg] absolute left-0" alt="" />
            <img src="/images/login/ir-white.svg" className="w-[150px] top-[20px] absolute right-2" alt="" />
            <section className='w-full text-center text-white text-[32px] font-bold mt-[180px]'>بکاپ</section>
            <span className='block mt-[5px] text-white w-full text-center'>بیمه کشاورزی ایرانیان پوشش</span>
        </section>
        <LoginForm />
    </section>
}
