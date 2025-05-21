import { WalletIcon } from "@/assets/icons/WalletIcon"

export default function Index() {
    return <section className="flex justify-center gap-1 items-center text-center text-white">
        <WalletIcon className="w-[27px] ml-1" />
        <span>کیف پول :</span>
        <span className="font-bold">200,000 تومان</span>
    </section>
}
