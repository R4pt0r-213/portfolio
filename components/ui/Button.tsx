import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyle =
    "px-3 rounded-md font-medium transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-red-700 text-white border border-red-700 hover:bg-red-500 hover:border-red-500",

    secondary:
      "bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white",

    outline:
      "bg-transparent text-neutral-900 border border-neutral-300 hover:border-red-600 hover:text-red-600",
  };

  return (
    <button
      className={clsx(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}