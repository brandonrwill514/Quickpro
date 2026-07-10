type AIBoxProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "teal" | "amber" | "violet";
  className?: string;
};

const toneStyles = {
  teal: "border-teal-500/30 shadow-teal-500/20",
  amber: "border-amber-500/30 shadow-amber-500/20",
  violet: "border-violet-500/30 shadow-violet-500/20",
};

export default function AIBox({ title, subtitle, children, tone = "teal", className = "" }: AIBoxProps) {
  return (
    <section
      className={`rounded-2xl border bg-zinc-900 p-6 shadow-xl shadow-black/20 ${toneStyles[tone]} ${className}`.trim()}
    >
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-zinc-400">{subtitle}</p> : null}
      </div>

      {children}
    </section>
  );
}
