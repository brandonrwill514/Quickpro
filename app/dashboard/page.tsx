import Link from "next/link";
import { Mic, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import DashboardStats from "@/components/DashboardStats";
import QuoteCard from "@/components/QuoteCard";

const recentQuotes = [
  { id: "1", customer: "Johnson Electrical", amount: "$3,200", status: "sent" as const },
  { id: "2", customer: "Smith HVAC", amount: "$4,100", status: "accepted" as const },
];

export default function Dashboard() {
  return (
    <PageLayout>
      <PageHeader
        title="Good Morning"
        subtitle="Your business overview and quick actions at a glance."
        action={
          <Link href="/ai-quotes" className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500">
            Create Quote
          </Link>
        }
      />

      <div className="space-y-8">
        <DashboardStats revenue="$48,200" quotes="37" profit="$14,600" />

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20 lg:col-span-2">
            <h2 className="mb-6 text-xl font-bold text-white">Recent Quotes</h2>

            <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 border-b border-zinc-800 pb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
              <span>Customer</span>
              <span>Project</span>
              <span>Status</span>
            </div>

            {recentQuotes.map((item) => (
              <div key={item.id} className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 border-b border-zinc-800 py-4 text-white last:border-0">
                <span>{item.customer}</span>
                <span className="text-zinc-300">{item.amount}</span>
                <span className={item.status === "accepted" ? "text-green-400" : "text-violet-400"}>{item.status === "accepted" ? "Accepted" : "Sent"}</span>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
            <h2 className="mb-4 text-xl font-bold text-white">Quick Actions</h2>

            <Link href="/ai-quotes" className="mb-4 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-300 transition hover:border-violet-500/50 hover:text-white">
              <Mic size={18} />
              Create AI Quote
            </Link>

            <Link href="/quote-history" className="mb-4 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-300 transition hover:border-violet-500/50 hover:text-white">
              <ArrowRight size={18} />
              View Recent Quotes
            </Link>

            <p className="mt-4 text-sm text-zinc-400">This month: 42 quotes created · $58,000 revenue</p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
