import { Mic } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />

      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.35),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.22),transparent_22%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.18),transparent_18%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="mx-auto mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur">
            QUICKQUO
          </p>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-zinc-50 md:text-7xl">
            AI-powered quoting
            <br />
            built for modern contractors.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
            Speak your project.
            <br />
            AI builds your estimate.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/workspace"
              className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500"
            >
              Start Free Quote
            </Link>
            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-zinc-50 backdrop-blur transition hover:bg-white/10">
              Watch Demo
            </button>
          </div>

          <div className="mt-14 flex justify-center">
            <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-zinc-900 p-3 shadow-2xl shadow-black/40">
              <img src="/dashboard.png" className="w-full rounded-2xl" alt="QuickQuo dashboard preview" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link
          href="/workspace"
          className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-left backdrop-blur transition hover:border-violet-400/40 hover:bg-white/10"
        >
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-teal-400">
              <Mic />
              <span className="text-sm font-semibold uppercase tracking-[0.24em]">AI Professional Quotes</span>
            </div>
            <p className="max-w-2xl text-zinc-400">
              Describe the job naturally and let AI structure the estimate.
            </p>
          </div>
          <span className="text-sm font-semibold text-violet-300">Open Workspace</span>
        </Link>
      </section>
    </main>
  );
}
