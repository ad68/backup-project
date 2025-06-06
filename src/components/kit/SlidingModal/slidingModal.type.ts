import type { ReactNode } from "react"

export type SlidingModalProp = {
    isOpen: boolean,
    children: ReactNode
    setIsOpen?: (value: boolean) => void,
    keepChildren?: boolean
}