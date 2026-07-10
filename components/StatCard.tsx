interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <p className="text-gray-500">{title}</p>

      <h2 className="mt-2 text-4xl font-bold">{value}</h2>
    </div>
  );
}
