import AnalyticsCard from "@/components/AnalyticsCard";
import Link from "next/link";
import {
  Mic,
  FileText,
  History,
  Settings,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import AIAssistant from "@/components/AIAssistant";
import AIInsights from "@/components/AIInsights";
import PricingRecommendation from "@/components/PricingRecommendation";

export default function Dashboard() {
  return (
    <PageLayout>
      <PageHeader
        title="Good morning Brandon"
        subtitle="Today's overview of revenue, quotes, and profit across your business."
        action={<Link href="/quote" className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500">Create Quote</Link>}
      />

      <div className="space-y-8">
        <div id="analytics" className="grid gap-6 md:grid-cols-4">
            <AnalyticsCard
              title="Revenue Quoted"
              value="$182K"
              description="This year"
            />

            <AnalyticsCard
              title="Win Rate"
              value="64%"
              description="Quotes accepted"
            />

            <AnalyticsCard
              title="Average Quote"
              value="$4,800"
              description="Per project"
            />

            <AnalyticsCard
              title="Saved Time"
              value="96 hrs"
              description="Using AI"
            />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20 lg:col-span-2">
              <h2 className="mb-6 text-xl font-bold text-white">Recent Quotes</h2>

              <QuoteItem
                title="Kitchen Renovation"
                price="$4,800"
              />

              <QuoteItem
                title="Basement Electrical"
                price="$2,900"
              />

              <QuoteItem
                title="EV Charger Install"
                price="$1,700"
              />
            </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
              <h2 className="mb-6 text-xl font-bold text-white">Quick Actions</h2>

              <ActionButton
                icon={<Mic size={18} />}
                text="Voice Quote"
                href="/quote"
              />

              <ActionButton
                icon={<FileText size={18} />}
                text="New Quote"
                href="/quote"
              />

              <ActionButton
                icon={<History size={18} />}
                text="History"
                href="/history"
              />

              <ActionButton
                icon={<Settings size={18} />}
                text="Settings"
                href="/settings"
              />
            </div>

            <PricingRecommendation price="$1,500" margin="32%" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AIInsights />
          <AIAssistant />
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl shadow-black/20">
          <h2 className="text-3xl font-bold text-white">AI Quote Assistant</h2>

          <p className="mt-3 text-zinc-400">
            Describe your project naturally and let QuickQuo build a professional estimate.
          </p>

          <Link
            href="/quote"
            className="mt-8 inline-block rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white shadow-lg shadow-teal-500/40 transition hover:bg-teal-400"
          >
            🎤 Start Talking
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

function QuoteItem({
  title,
  price,
}: {
  title: string;
  price: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 py-4">
      <div>
        <h3 className="font-semibold text-white">{title}</h3>

        <p className="text-sm text-zinc-400">Generated today</p>
      </div>

      <span className="font-bold text-white">{price}</span>
    </div>
  );
}

function ActionButton({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="mb-4 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-300 transition hover:border-violet-500/50 hover:text-white"
    >
      {icon}

      {text}
    </Link>
  );
}
