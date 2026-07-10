import { Mic, FileText, Zap } from "lucide-react";
import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="px-8 py-24 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Stop Guessing.
          <br />
          Start Quoting Smarter.
        </h1>

        <p className="mt-6 text-xl text-slate-900 max-w-2xl mx-auto">
          QuickQuo uses AI to turn job descriptions into professional estimates for contractors in seconds.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-black px-8 py-4 text-white">Start Free</button>
          <button className="rounded-xl border px-8 py-4">Watch Demo</button>
        </div>

        <div className="mt-12 flex justify-center">
          <img src="/dashboard.png" className="rounded-2xl shadow-xl max-w-4xl w-full" alt="QuickQuo dashboard preview" />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-8 py-20">
        <Link href="/quote">
          <div className="mb-3 text-black">
            <Mic />
          </div>
          <FeatureCard
            title="Voice AI"
            description="Describe the job naturally and let AI structure the estimate."
          />
        </Link>
        <Link href="/quote">
          <div className="mb-3 text-black">
            <FileText />
          </div>
          <FeatureCard
            title="Professional Quotes"
            description="Generate clear client-ready proposals instantly."
          />
        </Link>
        <Link href="/dashboard">
          <div className="mb-3 text-black">
            <Zap />
          </div>
          <FeatureCard
            title="Save Hours"
            description="Spend less time estimating and more time working."
          />
        </Link>
      </section>
    </main>
  );
}
