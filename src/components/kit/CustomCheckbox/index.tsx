import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

type CustomCheckboxProps = {
    checked?: boolean;
    onChange: (checked: boolean) => void;
    label: string;
    className?: string;
};

const CustomCheckbox = ({ checked, onChange, label, className }: CustomCheckboxProps) => {
    return (
        <label className={`flex items-center gap-2 ${className}`} dir="rtl">
            <Checkbox
                checked={checked}
                onCheckedChange={onChange}
                className="w-5 h-5 border-2 border-[#511269] rounded-sm bg-white checked:bg-primary checked:border-transparent focus:outline-none"
            />
            <span className="text-black">{label}</span>
        </label>
    );
};

export default CustomCheckbox;