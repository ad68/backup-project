import type { ReactNode } from "react";
type FormFieldProp = {
    title: string,
    children: ReactNode,
    isError?: any,
    errorMessage?: string | undefined
}
export default function FormField({ title, isError, errorMessage, children }: FormFieldProp) {
    return <div className="mt-1">
        <span className="font-light text-slate-700 text-xs">{title}:</span>
        {children}
        {!!isError && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
    </div>
}
