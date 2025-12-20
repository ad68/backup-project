import Header from './components/Header'
import FeatureTiles from './components/FeatureTiles'
import WeatherWidget from './components/WeatherWidget'
import useHome from './Home.biz'


export default function Index() {
    const { getUserInfo } = useHome()
    getUserInfo()
    return <section className="m-auto w-full max-w-7xl relative">
        <Header />
        <section className='w-full bg-gradient-to-b mt-[-40px] box-border relative z-50'>
            <WeatherWidget />

            <FeatureTiles />
        </section>
    </section>
}
