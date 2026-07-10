type DashboardCardProps = {
  title: string;
  value: string;
  helperText?: string;
};

export default function DashboardCard({ title, value, helperText }: DashboardCardProps) {
  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
      {helperText ? <p className="mt-2 text-xs text-gray-500">{helperText}</p> : null}
    </article>
  );
}
