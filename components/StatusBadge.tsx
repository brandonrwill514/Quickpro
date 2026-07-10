export default function StatusBadge({
  status,
}: {
  status: string;
}) {
  const normalized = status.toLowerCase();

  const colors: any = {
    draft: "bg-gray-200",
    sent: "bg-blue-100",
    declined: "bg-red-100",
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
