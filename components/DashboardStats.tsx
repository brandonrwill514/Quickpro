type DashboardStatsProps = {
  revenue: string;
  quotes: string;
  profit: string;
};

export default function DashboardStats({ revenue, quotes, profit }: DashboardStatsProps) {
  const items = [
    { label: "Revenue", value: revenue },
    { label: "Quotes", value: quotes },
    { label: "Profit", value: profit },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20"
        >
          <p className="text-sm uppercase tracking-[0.22em] text-zinc-400">{item.label}</p>
          <p className="mt-3 text-3xl font-bold text-white">{item.value}</p>
        </div>
      ))}
    </section>
  );
}
