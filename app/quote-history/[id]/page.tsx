import { redirect } from "next/navigation";

export default function QuoteHistoryDetailRedirect({ params }: { params: { id: string } }) {
  redirect(`/history/${params.id}`);
}
