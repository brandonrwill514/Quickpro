type DashboardCardProps = {
  title: string;
  value: string;
  helperText?: string;
};

export default function DashboardCard({ title, value, helperText }: DashboardCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
      {helperText ? <p className="mt-2 text-xs text-zinc-500">{helperText}</p> : null}
    </article>
  );
}
