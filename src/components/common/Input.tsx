"use client";

import {
  FieldError,
  Input as HeroInput,
  Label,
  TextField,
} from "@heroui/react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  validate?: (value: string) => string | undefined;
  isRequired?: boolean;
  isDisabled?: boolean;
}

export default function Input({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  validate,
  isRequired = false,
  isDisabled = false,
}: InputProps) {
  return (
    <TextField
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      isRequired={isRequired}
      validate={validate}
      className="space-y-1"
      aria-label={label}
      isDisabled={isDisabled}
    >
      <Label htmlFor={id} className="block text-sm font-medium">
        {label}
      </Label>

      <HeroInput
        id={id}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-base-300 bg-base-100 px-3 py-0.5 text-sm shadow-xs"
      />

      <FieldError className="text-xs text-error" />
    </TextField>
  );
}
