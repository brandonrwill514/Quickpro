export default function StatusBadge({
  status,
}: {
  status: string;
}) {
  const normalized = status.toLowerCase();

  const colors: any = {
    draft: "bg-zinc-800 text-zinc-300",
    sent: "bg-violet-600/20 text-violet-400",
    declined: "bg-red-500/20 text-red-300",
    accepted: "bg-green-500 text-white",
    completed: "bg-green-500 text-white",
  };

  return (
    <span
      className={`
px-4
py-2
rounded-full
${colors[normalized] ?? colors.draft}
`}
    >
      {status}
    </span>
  );
}
