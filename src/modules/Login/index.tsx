import LoginForm from './components/LoginForm'
export default function Index() {
    return <section className="m-auto relative bg-primary max-w-5xl h-full">
        <section className="absolute w-full top-0 h-[400px] left-0 overflow-hidden">
            {/*    <img src="/images/login/sss.png" className="w-[80px] top-[5px] rotate-[10deg] absolute left-0" alt="" /> */}
            <section className='absolute flex justify-between w-full pl-2 top-[18px]'>
                <img src="/images/login/ir-white.svg" className="w-[145px]" alt="" />
                <img src="/images/login/sandoogh-logo.svg" className="w-[90px] " alt="" />
            </section>
            <section className='w-full text-center text-white text-[32px] font-bold mt-[180px]'>بکاپ</section>
            <span className='block mt-[5px] text-white w-full text-center'>بیمه کشاورزی ایرانیان پوشش</span>
        </section>
        <LoginForm />
    </section>
}
