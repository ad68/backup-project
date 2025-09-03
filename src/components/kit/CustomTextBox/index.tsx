// components/ui/CustomTextBox.tsx
import { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { persianToEnglishNumber } from "@/utils/global";
type CustomTextBoxProps = {
    value?: any;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    maxLength?: number
};
const CustomTextBox = forwardRef<HTMLInputElement, CustomTextBoxProps>(
    ({ value, onChange, placeholder, className, maxLength }, ref) => {
        return (
            <Input
                ref={ref}
                value={value}
                maxLength={maxLength}
                onChange={(e) => onChange(persianToEnglishNumber(e.target.value))}
                placeholder={placeholder || "متن خود را وارد کنید"}
                dir="rtl"
                className={`w-full h-12 bg-white text-black text-xs font-medium rounded-[10px] border border-[#EBEBEB] ${className}`}
            />
        );
    }
);

CustomTextBox.displayName = "CustomTextBox";

export default CustomTextBox;
