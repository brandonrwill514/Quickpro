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
    <div className="
bg-white
rounded-2xl
border
shadow-sm
p-8
">
      <div className="
border-b
pb-6
mb-6
">
        <h1 className="
text-4xl
font-bold
">
          QuickQuo
        </h1>

        <p className="text-gray-500">
          Professional Estimate
        </p>
      </div>

      <h3 className="text-3xl font-bold">
        {quote.project}
      </h3>

      <p className="mt-2 text-gray-500">
        {quote.trade}
      </p>

      <div className="mb-8">
        <h3 className="font-semibold">
          Prepared For:
        </h3>

        <p>
          Customer Name
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <section>
          <h4 className="font-semibold">
            Scope Of Work
          </h4>

          <ul className="ml-5 mt-2 list-disc">
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
          <h4 className="flex gap-2 font-semibold">
            <Package size={18} />

            Materials
          </h4>

          <ul className="ml-5 mt-2 list-disc">
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
          <h4 className="flex gap-2 font-semibold">
            <Clock size={18} />

            Timeline
          </h4>

          <p>
            {quote.timeline}
          </p>
        </section>

        <section className="
        rounded-xl
        bg-cyan-50
p-5
">
          <h4 className="
font-semibold
flex
gap-2
">
            <DollarSign size={18} />

            Estimated Price
          </h4>

          <p className="
text-3xl
font-bold
mt-2
">
            {quote.estimatedPrice}
          </p>
        </section>
      </div>

      <button
        className="
mt-8
w-full
rounded-xl
bg-indigo-500
text-white
py-4
font-semibold
hover:bg-indigo-600
"
      >
        Send Follow-Up
      </button>
    </div>
  );
}
