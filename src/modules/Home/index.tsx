import Header from './components/Header'
import FeatureTiles from './components/FeatureTiles'
import WeatherWidget from './components/WeatherWidget'
import OfflineWidget from './components/OfflineWidget'
import { useOfflineStore } from '@/store/useOfflineStore'
export default function Index() {
    const { isOnline } = useOfflineStore()
    return <section className="m-auto w-full max-w-7xl relative">
        <Header />
        <section className='w-full bg-gradient-to-b mt-[-40px] box-border relative z-50'>
            {
                isOnline ? <WeatherWidget /> : <OfflineWidget />
            }

            <FeatureTiles />
        </section>
    </section>
}
