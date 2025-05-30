import { useEffect, useState } from "react";
import type { SlidingModalProp } from "./slidingModal.type";

export default function SlidingModal({ isOpen, children }: SlidingModalProp) {
    const [showChildren, setShowChildren] = useState(false)
    useEffect(() => {
        if (isOpen) {
            setShowChildren(true)
        }
        else {
            setTimeout(() => {
                setShowChildren(false)
            }, 600);
        }
    }, [isOpen])
    return <section className={`w-full h-full  overflow-scroll  fixed bg-white ${isOpen ? `top-0` : `top-[-100%]`} transition-all duration-500 left-0 z-10`}>
        {showChildren && <>
            {children}
        </>}

    </section>;
}
