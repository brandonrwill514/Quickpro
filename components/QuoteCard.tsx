type QuoteCardProps = {
  clientName: string;
  amount: string;
  status: "draft" | "sent" | "accepted";
};

const statusStyles: Record<QuoteCardProps["status"], string> = {
  draft: "bg-zinc-800 text-zinc-300",
  sent: "bg-violet-600/20 text-violet-400",
  accepted: "bg-green-500 text-white",
};

export default function QuoteCard({ clientName, amount, status }: QuoteCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-xl shadow-black/20">
      <div className="flex items-center justify-between gap-3">
        <p className="font-medium text-white">{clientName}</p>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
      <p className="mt-3 text-xl font-semibold text-white">{amount}</p>
    </article>
  );
}
