import { MonitoringIcon } from '@/assets/icons/MonitoringIcon';
import Tile from './components/Tile'
import { FireIcon } from "@/assets/icons/FireIcon";
/* import { WalletIcon } from '@/assets/icons/WalletIcon'; */
import { AttachIcon } from '@/assets/icons/AttachIcon';
import { ReportIcon } from '@/assets/icons/ReportIcon';
import { TeachIcon } from '@/assets/icons/TeachIcon';
import { useOfflineStore } from '@/store/useOfflineStore';
export default function Index() {
    const { isOnline } = useOfflineStore()
    return <section>
        <section className="pt-[40px] px-5">
            {isOnline && <section className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <Tile link="/technical-attachment" iconBgColor='bg-[#effff2]' borderColorClass={'border-primary'} title="پیوست فنی" image={<AttachIcon className="text-primary stroke-primary w-[25px]" />} />
                <Tile soon link="/phenology-monitoring/home" iconBgColor='bg-[#f4f9ff]' borderColorClass={'border-blue-400'} title="پایش فنولوژی" image={<MonitoringIcon className="text-blue-400 w-[25px]" />} />
                <Tile soon link="/damage/home" iconBgColor='bg-[#fffaf4]' borderColorClass={'border-orange-300'} title="خسارت" image={<FireIcon className="text-orange-300 w-[25px]" />} />
                <Tile soon link="#" iconBgColor='bg-[#fff5f5]' borderColorClass={'border-red-400'} title="گزارشات" image={<ReportIcon className="text-red-400 w-[21px]" />} />
                <Tile soon link="#" iconBgColor='bg-[#ffffeb]' borderColorClass={'border-yellow-400'} title="آموزش" image={<TeachIcon className="text-yellow-400 w-[21px]" />} />
                <Tile link="/Rules" iconBgColor='bg-[#e2f9ff]' borderColorClass={'border-[#15cefa]'} title="قوانین و مقررات" image={<TeachIcon className="text-[#15cefa] w-[21px]" />} />
            </section>}
            {!isOnline && <section className="grid grid-cols-2 md:grid-cols-3 gap-5">
                <Tile offline link="/offline/locate-reviews" iconBgColor='bg-[#effff2]' borderColorClass={'border-primary'} title="پیوست فنی" image={<AttachIcon className="text-primary stroke-primary w-[25px]" />} />
                <Tile offline link="/offline/location-on-map?reviewId=22789922&subjectId=23251462&featureId=18490675&policyId=27094174&subjectItemId=162098912&farmerName=%D8%AF%D9%84%DB%8C%D8%B1%20%D9%85%D8%AD%D9%85%D8%AF%DB%8C&lat=undefined&lng=undefined" iconBgColor='bg-[#effff2]' borderColorClass={'border-primary'} title="نقشه آفلاین" image={<AttachIcon className="text-primary stroke-primary w-[25px]" />} />
            </section>}

            {/*  <section className='flex-center mt-5'>
                <Tile link="#" width="157px" iconBgColor='bg-[#fbf2fb]' borderColorClass={'border-purple-400'} title="کیف پول" image={<WalletIcon className="text-purple-400 w-[25px]" />} />
            </section> */}
        </section>
    </section>
}
