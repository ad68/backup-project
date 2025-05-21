

import Header from './components/Header'

import WeatherWidget from './components/WeatherWidget'
export default function Index() {
    return <section className="m-auto  w-[440px] h-screen max-w-full relative">
        <Header />
        <section className='w-full min-h-[400px] h-[calc(100%-220px)] bg-gradient-to-b bg-white mt-[-40px] box-border relative rounded-t-[10px] z-50'>
            <WeatherWidget />
        </section>
    </section>
}
