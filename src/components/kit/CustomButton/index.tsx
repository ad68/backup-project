import React, { forwardRef } from "react";
import './style.css'
type CustomButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "outlined";
    loading?: boolean
};

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ onClick, children, className, loading, variant = "default" }, ref) => {
        const baseStyles =
            "relative overflow-hidden w-auto min-w-[100px] flex justify-center items-center px-[10px] h-10 rounded-[8px] border transition-all";
        const defaultStyles =
            "bg-primary active:bg-green-400 text-white border-gray-300";
        const outlinedStyles =
            "bg-white text-primary border-primary hover:bg-slate-200";
        return (
            <button
                ref={ref}
                onClick={onClick}
                disabled={loading}
                className={`group  active:scale-[0.98] disabled:opacity-70 ${baseStyles} ${variant === "default" ? defaultStyles : outlinedStyles
                    } ${className}`}
                dir="rtl"
                style={{ textAlign: "right" }}
            >
                {loading ? <section className="btnLoader"></section> : <span className="flex justify-center gap-[4px] items-center z-10">{children}</span>}


            </button>
        );
    }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
