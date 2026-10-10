import { ReactNode } from "react";

type ButtonType = "primary" | "ghost" | "outline";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonType;
}

const buttonStyles: Record<ButtonType, string> = {
  primary:
    "text-white bg-primary hover:bg-primary-stronger border border-primary-strong shadow-[0_4px_3px_0_rgba(5,137,62,0.3),0_3px_2px_0_rgba(5,137,62,0.3)]",
  ghost: "text-base-content hover:bg-base-300",
  outline: "text-base-content border border-base-300 hover:bg-base-300",
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const btn = buttonStyles[variant];

  return (
    <button
      className={`px-4 h-10 select-none cursor-pointer transition-colors rounded-lg flex justify-center items-center gap-1.5 font-semibold text-xs md:text-sm ${btn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
