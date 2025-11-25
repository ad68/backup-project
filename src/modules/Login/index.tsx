import LoginForm from './components/LoginForm'
/* import LoginFormDesktop from './components/LoginFormDesktop' */
export default function Index() {
    return <>
        <section className="m-auto  relative bg-primary max-w-5xl h-full">
            <section className="absolute w-full top-0 h-[400px] left-0 overflow-hidden">
                <img src="/images/login/sss.png" className="w-[80px] top-[5px] rotate-[10deg] absolute left-0" alt="" />
                <section className=' flex justify-center w-full pl-2 mt-5'>
                    <img src="/images/login/sandoogh-logo.svg" className="w-[110px] mr-3" alt="" />
                </section>
                <img src="/images/login/sss.png" className="w-[80px] top-[5px] absolute rotate-[-10deg] right-0 scale-x-[-1]" alt="" />
                <section className='w-full text-center text-white text-[28px] font-bold mt-[20px]'>بکاپ</section>
                <span className='block mt-[5px] text-white w-full text-center'>اپلیکیشن صندوق بیمه کشاورزی</span>
            </section>
            <LoginForm />
        </section>
        {/*  <section className='hidden xl:scale-[85%] 2xl:scale-100 xl:flex h-full  items-center justify-center'>
            <section className="pt-8 relative bg-primary max-w-5xl shadow-2xl  rounded-3xl ">
                <section className=" w-full overflow-hidden">
                    <img src="/images/login/sss.png" className="w-[80px] top-[5px] rotate-[10deg] absolute left-[7px]" alt="" />
                    <div className='flex justify-center'>
                        <img src="/images/login/sandoogh-logo.svg" className="w-[120px] " alt="" />
                    </div>
                    <img src="/images/login/sss.png" className="w-[80px] top-[5px] absolute rotate-[-10deg] right-[7px] scale-x-[-1]" alt="" />
                    <section className='w-full text-center text-white text-[32px] font-bold mt-[20px]'>بکاپ</section>
                    <span className='block mt-[5px] text-white w-full text-center'>اپلیکیشن صندوق بیمه کشاورزی</span>
                </section>
                <div className='w-[500px] m-auto mt-[30px]'>
                    <LoginFormDesktop />
                </div>
            </section>
        </section> */}

        {/*   <main className="h-screen w-full flex  bg-primary  relative overflow-hidden">
            <div className='xl:w-[2000px] 2xl:w-[105vw] h-[2000px] top-[-350px] 2xl:top-[-250px] bg-white rounded-full absolute xl:right-[-95%] 2xl:right-[-65%]'></div>
            <section className='w-[400px] h-full flex flex-col justify-center items-center mr-[100px] relative z-10'>
                <h1 className="text-[20px] font-bold mt-[25px] text-primary">ورود به سامانه</h1>
                <LoginFormDesktop />
            </section>
            <div className='h-full flex flex-col justify-center items-center xl:mr-[280px] 2xl:mr-[700px]'>
                <img src="/images/login/sandoogh-logo.svg" className="w-[200px] mr-3" alt="" />
                <section className='w-full text-center text-white text-[40px] font-bold mt-[40px]'>بکاپ</section>
                <span className='block mt-[5px] text-white w-full text-2xl font-bold text-center'>اپلیکیشن صندوق بیمه کشاورزی</span>
            </div>
        </main> */}
    </>
}
