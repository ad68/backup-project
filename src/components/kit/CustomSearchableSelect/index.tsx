import { useState, forwardRef } from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import {
    Command,
    CommandInput,
    CommandList,
    CommandItem,
    CommandEmpty,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

type CustomSearchableSelectProps = {
    options: { value: string; label: string }[];
    defaultValue?: string;
    onChange: (value: string) => void;
    value?: string;
    className?: string;
};
const CustomSearchableSelect = forwardRef<HTMLButtonElement, CustomSearchableSelectProps>(
    ({ options, defaultValue, onChange, value, className }, ref) => {
        const [open, setOpen] = useState(false);
        const selected = options.find((opt) => opt.value === value || opt.value === defaultValue);
        return (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger
                    ref={ref}
                    asChild
                >
                    <button
                        className={cn(
                            "w-full h-12 bg-white text-black text-xs rounded-[10px] border border-[#EBEBEB] px-3 text-right",
                            className
                        )}
                    >
                        {selected?.label || "انتخاب کنید"}
                    </button>
                </PopoverTrigger>

                <PopoverContent className="w-[--radix-popover-trigger-width] p-0 z-[1001]">
                    <Command>
                        <CommandInput placeholder="جستجو..." className="text-right" />
                        <CommandEmpty>یافت نشد.</CommandEmpty>
                        <CommandList className="max-h-60 overflow-y-auto">
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.label}
                                    onSelect={() => {
                                        onChange(option.value);
                                        setOpen(false);
                                    }}
                                    className="text-right"
                                >
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        );
    }
);

CustomSearchableSelect.displayName = "CustomSearchableSelect";

export default CustomSearchableSelect;
