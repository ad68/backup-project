import type { ReactNode } from "react";
export default function FormError({ children }: { children: ReactNode }) {
    return <p className="text-red-500 text-xs mt-1">{children}</p>
}
