type QuoteCardProps = {
  clientName: string;
  amount: string;
  status: "draft" | "sent" | "accepted";
};

const statusStyles: Record<QuoteCardProps["status"], string> = {
  draft: "bg-gray-100 text-gray-700",
  sent: "bg-indigo-100 text-indigo-700",
  accepted: "bg-green-500 text-white",
};

export default function QuoteCard({ clientName, amount, status }: QuoteCardProps) {
  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="font-medium">{clientName}</p>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <p className="mt-3 text-xl font-semibold">{amount}</p>
    </article>
  );
}
