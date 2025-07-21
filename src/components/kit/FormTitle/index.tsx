import type { ReactNode } from "react";
export default function FormTitle({ children }: { children: ReactNode }) {
    return <div className="mt-5">
        <span className="text-primary font-bold text-sm">{children}</span>
    </div>
}
