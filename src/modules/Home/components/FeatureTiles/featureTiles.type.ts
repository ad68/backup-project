import type { ReactNode } from "react"

export type TileProp = {
    title: string,
    image: ReactNode,
    iconBgColor: string,
    borderColorClass: string,
    width?: string
    link: string,
    soon?: boolean
}