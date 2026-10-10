"use client";

import { ListBox, Select } from "@heroui/react";

export interface SortOption {
  id: string;
  label: string;
}

interface SortDropDownProps {
  options?: SortOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  "aria-label"?: string;
}

const defaultOptions: SortOption[] = [
  { id: "default", label: "ডিফল্ট" },
  { id: "price-asc", label: "দাম: কম থেকে বেশি" },
  { id: "price-desc", label: "দাম: বেশি থেকে কম" },
];

export function SortDropDown({
  options = defaultOptions,
  value,
  onChange,
  placeholder = "একটি নির্বাচন করুন",
  "aria-label": ariaLabel = "পণ্য সাজানোর পদ্ধতি",
}: SortDropDownProps) {
  return (
    <Select
      aria-label={ariaLabel}
      placeholder={placeholder}
      value={value}
      onChange={(value) => {
        if (value !== null) {
          onChange?.(String(value));
        }
      }}
      className="w-full"
    >
      <Select.Trigger className="border border-base-300 bg-base-100">
        <Select.Value className="mr-2" />
        <Select.Indicator />
      </Select.Trigger>

      <Select.Popover className="bg-base-100">
        <ListBox>
          {options.map((option) => (
            <ListBox.Item
              key={option.id}
              id={option.id}
              textValue={option.label}
            >
              {option.label}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
