import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import DashboardStats from "@/components/DashboardStats";
import AIQuoteBuilder from "@/components/AIQuoteBuilder";

const recentQuotes = [
  { customer: "Johnson", project: "Electrical", status: "Sent" },
  { customer: "Smith", project: "HVAC", status: "Accepted" },
];

export default function Dashboard() {
  return (
    <PageLayout>
      <PageHeader
        title="Good Morning"
        subtitle="Your business overview and AI quote workflow live in one place."
        action={
          <Link href="/ai-quotes" className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500">
            Create Quote
          </Link>
        }
      />

      <div className="space-y-8">
        <DashboardStats revenue="$48,200" quotes="37" profit="$14,600" />

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-violet-400">AI Professional Quotes</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Create a quote instantly.</h2>
            </div>

            <Link href="/ai-quotes" className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-600/10 px-4 py-2 font-semibold text-violet-400 transition hover:bg-violet-500/20">
              <Sparkles size={16} />
              Open Builder
            </Link>
          </div>

          <AIQuoteBuilder />
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20 lg:col-span-2">
            <h2 className="mb-6 text-xl font-bold text-white">Recent Quotes</h2>

            <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 border-b border-zinc-800 pb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
              <span>Customer</span>
              <span>Project</span>
              <span>Status</span>
            </div>

            {recentQuotes.map((item) => (
              <div key={`${item.customer}-${item.project}`} className="grid grid-cols-[1.2fr_1fr_1fr] gap-4 border-b border-zinc-800 py-4 text-white last:border-0">
                <span>{item.customer}</span>
                <span className="text-zinc-300">{item.project}</span>
                <span className={item.status === "Accepted" ? "text-green-400" : "text-violet-400"}>{item.status}</span>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
            <h2 className="mb-4 text-xl font-bold text-white">Business Insights</h2>
            <p className="text-zinc-300">Your electrical quotes are underpriced by 8%.</p>

            <Link href="/quote-history" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 font-semibold text-black transition hover:bg-amber-400">
              View History
              <ArrowRight size={16} />
            </Link>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
