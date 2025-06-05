import { MonitoringIcon } from '@/assets/icons/MonitoringIcon';
import Tile from './components/Tile'
import { FireIcon } from "@/assets/icons/FireIcon";
import { WalletIcon } from '@/assets/icons/WalletIcon';
import { AttachIcon } from '@/assets/icons/AttachIcon';
import { ReportIcon } from '@/assets/icons/ReportIcon';
import { TeachIcon } from '@/assets/icons/TeachIcon';
export default function Index() {
    return <section>
        <section className="pt-[40px] px-5">
            <section className="grid grid-cols-2 gap-5">
                <Tile link="#" iconBgColor='bg-[#f4f9ff]' borderColorClass={'border-blue-400'} title="پایش فنولوژی" image={<MonitoringIcon className="text-blue-400 w-[25px]" />} />
                <Tile link="/technical-attachment" iconBgColor='bg-[#effff2]' borderColorClass={'border-primary'} title="پیوست فنی" image={<AttachIcon className="text-primary stroke-primary w-[25px]" />} />
                <Tile link="#" iconBgColor='bg-[#fffaf4]' borderColorClass={'border-orange-300'} title="خسارت" image={<FireIcon className="text-orange-300 w-[25px]" />} />
                <Tile link="#" iconBgColor='bg-[#fff5f5]' borderColorClass={'border-red-400'} title="گزارشات" image={<ReportIcon className="text-red-400 w-[21px]" />} />
                <Tile link="#" iconBgColor='bg-[#ffffeb]' borderColorClass={'border-yellow-400'} title="آموزش" image={<TeachIcon className="text-yellow-400 w-[21px]" />} />
                <Tile link="#" iconBgColor='bg-[#e2f9ff]' borderColorClass={'border-[#15cefa]'} title="قوانین و قررات" image={<TeachIcon className="text-[#15cefa] w-[21px]" />} />
            </section>
            <section className='flex-center mt-5'>
                <Tile link="#" width="157px" iconBgColor='bg-[#fbf2fb]' borderColorClass={'border-purple-400'} title="کیف پول" image={<WalletIcon className="text-purple-400 w-[25px]" />} />
            </section>
        </section>
    </section>
}
