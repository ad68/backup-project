import React, { forwardRef } from "react";

type CustomButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "outlined";
    bubble?: boolean; // اضافه کردن prop برای نمایش حباب‌ها
};

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ onClick, children, className, variant = "default", bubble }, ref) => {
        const baseStyles =
            "relative overflow-hidden w-auto w-[100px] flex justify-center items-center px-[10px] h-12 rounded-[8px] border transition-all";
        const defaultStyles =
            "bg-primary hover:bg-[#511269] text-white border-gray-300";
        const outlinedStyles =
            "bg-white text-primary border-primary hover:bg-slate-200";
        const bubbleColor =
            variant === "outlined" ? "bg-[#d0a9ff]" : "bg-white";
        const bubbleActiveColor =
            variant === "outlined" ? "group-active:bg-[#9b7eff]" : "group-active:bg-[#d9a8ff]";

        const bubbleStyles = `absolute rounded-full ${bubbleColor} opacity-20 transition-all duration-700 ease-out 
      group-hover:opacity-50 
      group-active:scale-150 
      group-active:opacity-40 
      ${bubbleActiveColor}`;

        return (
            <button
                ref={ref}
                onClick={onClick}
                className={`group active:scale-[0.98] ${baseStyles} ${variant === "default" ? defaultStyles : outlinedStyles
                    } ${className}`}
                dir="rtl"
                style={{ textAlign: "right" }}
            >

                {bubble && (
                    <>
                        <span className={`${bubbleStyles} w-2 h-2 top-1 left-3 group-hover:translate-y-6`} />
                        <span className={`${bubbleStyles} w-1.5 h-1.5 bottom-1 right-5 group-hover:-translate-y-6`} />
                        <span className={`${bubbleStyles} w-2.5 h-2.5 top-1/3 right-1 group-hover:-translate-x-6`} />
                        <span className={`${bubbleStyles} w-1.5 h-1.5 bottom-3 left-2 group-hover:translate-x-6`} />
                        <span className={`${bubbleStyles} w-1 h-1 top-[6px] right-[18px] group-hover:translate-y-5 group-hover:translate-x-4`} />
                    </>
                )}
                <span className="z-10">{children}</span>
            </button>
        );
    }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
