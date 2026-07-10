export default function StatusBadge({
  status,
}: {
  status: string;
}) {
  const colors: any = {
    Draft: "bg-gray-200",
    Sent: "bg-blue-100",
    Declined: "bg-red-100",
  };

  return (
    <span
      className={`
px-4
py-2
rounded-full
${colors[status]}
`}
    >
      {status}
    </span>
  );
}
