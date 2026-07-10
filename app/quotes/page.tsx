import { supabase } from "@/lib/supabase";

type QuoteRow = {
  id?: string | number;
  customer?: string | null;
  customer_name?: string | null;
  project?: string | null;
  project_description?: string | null;
  price?: number | string | null;
  estimated_price?: number | string | null;
  status?: string | null;
  created_at?: string | null;
};

function displayPrice(value: number | string | null | undefined) {
  if (typeof value === "number") {
    return `$${value.toLocaleString()}`;
  }

  if (typeof value === "string" && value.trim()) {
    return value;
  }

  return "$0";
}

function displayDate(value: string | null | undefined) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString();
}

export default async function QuotesPage() {
  const { data, error } = await supabase
    .from("Quotes")
    .select("*")
    .order("created_at", { ascending: false });

  const quotes = (data ?? []) as QuoteRow[];

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">Recent Quotes</h1>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900">
          <table className="min-w-full text-left">
            <thead className="border-b border-zinc-800 bg-zinc-950/60 text-sm uppercase tracking-[0.16em] text-zinc-400">
              <tr>
                <th className="px-5 py-4">Customer</th>
                <th className="px-5 py-4">Project</th>
                <th className="px-5 py-4">Price</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Created Date</th>
              </tr>
            </thead>

            <tbody>
              {error && (
                <tr>
                  <td className="px-5 py-6 text-rose-400" colSpan={5}>
                    Unable to load quotes.
                  </td>
                </tr>
              )}

              {!error && quotes.length === 0 && (
                <tr>
                  <td className="px-5 py-8 text-zinc-400" colSpan={5}>
                    No quotes found.
                  </td>
                </tr>
              )}

              {!error &&
                quotes.map((quote, index) => {
                  const customer = quote.customer || quote.customer_name || "-";
                  const project = quote.project || quote.project_description || "-";
                  const price = displayPrice(quote.price ?? quote.estimated_price);
                  const status = quote.status || "Pending";

                  return (
                    <tr
                      key={quote.id ?? `${project}-${index}`}
                      className="border-b border-zinc-800/70 text-zinc-200 last:border-b-0"
                    >
                      <td className="px-5 py-4">{customer}</td>
                      <td className="px-5 py-4">{project}</td>
                      <td className="px-5 py-4">{price}</td>
                      <td className="px-5 py-4">{status}</td>
                      <td className="px-5 py-4">{displayDate(quote.created_at)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
