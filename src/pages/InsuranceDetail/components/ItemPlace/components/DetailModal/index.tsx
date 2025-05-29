import type { ModalProp } from "@/pages/InsuranceDetail/insuranceDetail.types";


export default function Index({ isOpen }: ModalProp) {

    return <section className={`w-full h-full flex flex-col gap-6 justify-center items-center overflow-scroll p-3 px-6 pb-0 fixed bg-white ${isOpen ? `top-0` : `top-[-100%]`} transition-all duration-500 left-0 z-10`}>
        {isOpen && <>

        </>}

    </section>
}
