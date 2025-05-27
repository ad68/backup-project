import { forwardRef } from "react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
type CustomSelectProps = {
    options: { value: string; label: string }[];
    defaultValue?: string;
    onChange: (value: string) => void;
    value?: string,
    className?: string;
};

const CustomSelect = forwardRef<HTMLButtonElement, CustomSelectProps>(
    ({ options, defaultValue, onChange, value, className }, ref) => {
        return (
            <Select defaultValue={defaultValue} value={value} onValueChange={onChange}>
                <SelectTrigger dir="rtl" ref={ref} className={`w-full h-12 bg-white text-black text-xs  rounded-[10px] border border-[#EBEBEB] ${className}`}>
                    <SelectValue placeholder="انتخاب کنید" />
                </SelectTrigger>
                <SelectContent className="cursor-pointer text-right">
                    {options.map((option) => (
                        <SelectItem dir="rtl" className="cursor-pointer text-right bg-white" key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        );
    }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;