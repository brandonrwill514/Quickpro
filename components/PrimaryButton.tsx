import * as React from "react";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function PrimaryButton({ children, className = "", ...props }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition shadow-lg shadow-violet-500/20 hover:bg-violet-500 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
