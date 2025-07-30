import { forwardRef } from "react";
import { Textarea } from "@/components/ui/textarea";

type CustomTextAreaProps = {
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    rows?: number;
};

const CustomTextArea = forwardRef<HTMLTextAreaElement, CustomTextAreaProps>(
    ({ value, onChange, placeholder, className, rows = 4 }, ref) => {
        return (
            <Textarea
                ref={ref}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder || "متن خود را وارد کنید"}
                dir="rtl"
                rows={rows}
                className={`w-full bg-white text-black text-xs font-medium rounded-[10px] border border-[#EBEBEB] ${className}`}
            />
        );
    }
);

CustomTextArea.displayName = "CustomTextArea";

export default CustomTextArea;
