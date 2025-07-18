import Profile from './components/Profile'
import Notification from './components/Notification'
/* import Wallet from './components/Wallet' */
import ActionsCount from './components/ActionsCount'
export default function Index() {
    return <section className="h-[310px] rounded-b-[82px] bg-gradient-to-b from-primary to-[#247f4d] overflow-hidden relative z-0">
        <section className='flex items-center justify-between py-2 px-3'>
            <Profile />
            <Notification />
        </section>
        {/*  <section>
            <Wallet />
        </section> */}
        <section>
            <ActionsCount />
        </section>
    </section>
}
