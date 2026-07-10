import * as React from "react";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function PrimaryButton({ children, className = "", ...props }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
