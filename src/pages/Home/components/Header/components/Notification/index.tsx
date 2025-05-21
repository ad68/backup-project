import { BellIcon } from "@/assets/icons/BellIcon";


export default function Index() {

    return <section className="relative w-[35px] h-[35px] flex justify-center border border-white rounded-full">
        <BellIcon className="w-[20px] text-white" />
        <section className="bg-red-500 pt-1 flex text-white justify-center items-center  rounded-full w-[18px] h-[18px] top-[-7px] right-[-9px] absolute text-[10px] font-light ">
            3
        </section>
    </section>
}
