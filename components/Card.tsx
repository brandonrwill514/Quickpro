import * as React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20 ${className}`.trim()}>{children}</div>;
}
