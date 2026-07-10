import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import AnalyticsCard from "@/components/AnalyticsCard";
import Link from "next/link";
import {
  Mic,
  FileText,
  History,
  Settings,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1">
        <Navbar />

        <div className="space-y-8 p-8">
          <div className="
grid
md:grid-cols-4
gap-6
">
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
            <div className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">
              <h2 className="mb-6 text-xl font-bold">Recent Quotes</h2>

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

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">Quick Actions</h2>

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
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 p-8 text-white">
            <h2 className="text-3xl font-bold">AI Quote Assistant</h2>

            <p className="mt-3 text-blue-100">
              Describe your project naturally and let QuickQuo build a professional estimate.
            </p>

            <Link
              href="/quote"
              className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700"
            >
              🎤 Start Talking
            </Link>
          </div>
        </div>
      </main>
    </div>
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
    <div className="flex items-center justify-between border-b py-4">
      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-gray-500">Generated today</p>
      </div>

      <span className="font-bold">{price}</span>
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
      className="mb-4 flex items-center gap-3 rounded-xl border p-4 transition hover:bg-slate-50"
    >
      {icon}

      {text}
    </Link>
  );
}
