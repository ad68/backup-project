// components/ui/CustomTextBox.tsx
import { forwardRef } from "react";
import { Input } from "@/components/ui/input";

type CustomTextBoxProps = {
    value?: any;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
};

const CustomTextBox = forwardRef<HTMLInputElement, CustomTextBoxProps>(
    ({ value, onChange, placeholder, className }, ref) => {
        return (
            <Input
                ref={ref}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder || "متن خود را وارد کنید"}
                dir="rtl"
                className={`w-full h-12 bg-white text-black text-xs font-light rounded-[10px] border border-[#EBEBEB] ${className}`}
            />
        );
    }
);

CustomTextBox.displayName = "CustomTextBox";

export default CustomTextBox;
