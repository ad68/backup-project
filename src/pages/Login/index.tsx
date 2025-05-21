import LoginForm from './components/LoginForm'
export default function Index() {
    return <section className="m-auto relative bg-primary w-[440px] h-screen max-w-full">
        <section className="absolute  w-full top-0  h-[400px] left-0 overflow-hidden">
            <img src="/public/images/login/sss.png" className="w-[80px] top-[5px] rotate-[10deg] absolute left-0" alt="" />
            <img src="/public/images/login/sanap-white.svg" className="w-[150px] top-[20px] absolute right-[-10px]" alt="" />
            <section className='w-full text-center text-white text-[32px] font-bold mt-[180px]'>بکاپ</section>
            <span className='block mt-[5px] text-white w-full text-center'>بیمه کشاورزی ایرانیان پوشش</span>
        </section>
        <LoginForm />
    </section>
}
