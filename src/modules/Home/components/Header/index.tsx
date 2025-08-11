import Profile from './components/Profile'
/* import Notification from './components/Notification' */
/* import Wallet from './components/Wallet' */
import ActionsCount from './components/ActionsCount'
import { useOfflineStore } from '@/store/useOfflineStore'
export default function Index() {
    const { isOnline } = useOfflineStore()
    return <section className={`h-[310px] flex flex-col rounded-b-[82px] bg-gradient-to-b ${isOnline ? `from-primary to-[#247f4d]` : `from-offline to-offline-900`}  overflow-hidden relative z-0`}>
        <section className='flex items-center justify-between py-2 px-3'>
            <Profile />
            {/* <Notification /> */}
        </section>
        {/*  <section>
            <Wallet />
        </section> */}
        <section>
            <ActionsCount />
        </section>
    </section>
}
