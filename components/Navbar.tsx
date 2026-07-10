"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-6 py-5 text-white backdrop-blur">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">QuickQuo</p>
        <h2 className="text-xl font-bold tracking-tight text-white">AI-powered quoting for modern contractors</h2>
      </div>

      <Link href="/ai-quotes" className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500">
        Create Quote
      </Link>
    </header>
  );
}
