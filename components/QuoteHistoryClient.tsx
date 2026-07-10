"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import LoadingSpinner from "@/components/LoadingSpinner";
import QuoteCard from "@/components/QuoteCard";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

type Quote = {
  id: string;
  job: string;
  quote: string;
  budget?: string | null;
  urgency?: string | null;
  client_type?: string | null;
  created_at?: string | null;
};

export default function QuoteHistoryClient() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function deleteQuote(id: string) {
    const { error } = await supabase.from("quotes").delete().eq("id", id);

    if (error) {
      console.error("Delete error:", error);
      return;
    }

    setQuotes((current) => current.filter((quote) => quote.id !== id));
  }

  useEffect(() => {
    async function fetchQuotes() {
      const { data, error } = await supabase
        .from("Quotes")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Fetch error:", error);
      } else {
        setQuotes(data || []);
      }

      setLoading(false);
    }

    void fetchQuotes();
  }, []);

  if (loading) {
    return (
      <PageLayout>
        <PageHeader title="Quote History" subtitle="Track your generated and delivered quotes" />
        <section className="w-full">
          <LoadingSpinner />
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHeader title="Quote History" subtitle="Search and manage all generated quotes" />

      <section className="w-full space-y-4">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by job"
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500"
        />

        {quotes.filter((q) => q.job.toLowerCase().includes(search.toLowerCase())).length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-300">No quotes yet, generate your first one.</p>
            <Link
              href="/app-dashboard/ai-quotes"
              className="mt-3 inline-block rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
            >
              Generate Quote
            </Link>
          </div>
        ) : (
          quotes
            .filter((q) => q.job.toLowerCase().includes(search.toLowerCase()))
            .map((q) => (
              <div key={q.id} className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-xl shadow-black/20">
                <Link href={`/history/${q.id}`} className="block">
                  <QuoteCard clientName={q.job} amount={(q.quote || "Draft quote").slice(0, 80)} status="draft" />
                </Link>
                <div className="grid gap-1 text-sm text-zinc-300 sm:grid-cols-3">
                  <p>Budget: {q.budget ?? "n/a"}</p>
                  <p>Urgency: {q.urgency ?? "n/a"}</p>
                  <p>Client: {q.client_type ?? "n/a"}</p>
                </div>
                <button
                  type="button"
                  onClick={() => void deleteQuote(q.id)}
                  className="rounded-lg border border-red-500/30 px-3 py-1.5 text-sm font-medium text-red-300 hover:bg-red-500/10"
                >
                  Delete
                </button>
              </div>
            ))
        )}
      </section>
    </PageLayout>
  );
}
