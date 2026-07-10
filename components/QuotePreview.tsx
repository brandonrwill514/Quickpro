"use client";

import {
  DollarSign,
  Clock,
  Package,
} from "lucide-react";

interface Props {
  quote: any;
}

export default function QuotePreview({
  quote,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl shadow-black/20">
      <div className="mb-6 border-b border-zinc-800 pb-6">
        <h1 className="text-4xl font-bold text-white">
          QuickQuo
        </h1>

        <p className="text-zinc-400">
          Professional Estimate
        </p>
      </div>

      <h3 className="text-3xl font-bold text-white">
        {quote.project}
      </h3>

      <p className="mt-2 text-zinc-400">
        {quote.trade}
      </p>

      <div className="mb-8">
        <h3 className="font-semibold text-white">
          Prepared For:
        </h3>

        <p className="text-zinc-300">
          Customer Name
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <section>
          <h4 className="font-semibold text-white">
            Scope Of Work
          </h4>

          <ul className="ml-5 mt-2 list-disc text-zinc-300">
            {quote.scope?.map(
              (item: string) => (
                <li key={item}>
                  {item}
                </li>
              ),
            )}
          </ul>
        </section>

        <section>
          <h4 className="flex gap-2 font-semibold text-white">
            <Package size={18} />

            Materials
          </h4>

          <ul className="ml-5 mt-2 list-disc text-zinc-300">
            {quote.materials?.map(
              (item: string) => (
                <li key={item}>
                  {item}
                </li>
              ),
            )}
          </ul>
        </section>

        <section>
          <h4 className="flex gap-2 font-semibold text-white">
            <Clock size={18} />

            Timeline
          </h4>

          <p className="text-zinc-300">
            {quote.timeline}
          </p>
        </section>

        <section className="rounded-xl border border-amber-500/30 bg-zinc-950 p-5 shadow-xl shadow-amber-500/20">
          <h4 className="flex gap-2 font-semibold text-amber-400">
            <DollarSign size={18} />

            Estimated Price
          </h4>

          <p className="mt-2 text-3xl font-bold text-white">
            {quote.estimatedPrice}
          </p>
        </section>
      </div>

      <button
        className="mt-8 w-full rounded-xl bg-violet-600 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
      >
        Send Follow-Up
      </button>
    </div>
  );
}
