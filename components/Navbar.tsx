"use client";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-zinc-950 px-8 py-5 text-zinc-50">
      <div>
        <h2 className="text-2xl font-bold">
          <span className="text-violet-500">QuickQuo</span> Navigation
        </h2>

        <p className="text-zinc-400">Let's build some quotes.</p>
      </div>

      <button className="rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-500">
        New Quote
      </button>
    </header>
  );
}
