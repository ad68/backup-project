import Header from './components/Header'
import FeatureTiles from './components/FeatureTiles'
import WeatherWidget from './components/WeatherWidget'
export default function Index() {
    return <section className="m-auto w-[440px] h-screen max-w-full relative">
        <Header />
        <section className='w-full bg-gradient-to-b mt-[-40px] box-border relative  z-50'>
            <WeatherWidget />
            <FeatureTiles />
        </section>
    </section>
}
