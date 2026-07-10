"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import QuoteCard from "@/components/QuoteCard";
import Sidebar from "@/components/Sidebar";

type Quote = {
  id: string;
  job: string;
  quote: string;
  budget?: string | null;
  urgency?: string | null;
  client_type?: string | null;
  created_at?: string | null;
};

export default function HistoryPage() {
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
      <main className="mx-auto flex w-full max-w-6xl gap-6 p-6">
        <Sidebar />
        <section className="w-full">
          <Header title="Quote History" subtitle="Track your generated and delivered quotes" />
          <LoadingSpinner />
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl gap-6 p-6">
      <Sidebar />
      <section className="w-full space-y-4">
        <Header title="Quote History" subtitle="Search and manage all generated quotes" />

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by job"
          className="w-full rounded-lg border bg-white px-3 py-2"
        />

        {quotes.filter((q) => q.job.toLowerCase().includes(search.toLowerCase())).length === 0 ? (
          <div className="rounded-xl border border-dashed bg-white p-6">
            <p className="text-sm text-slate-900">No quotes yet, generate your first one.</p>
            <Link
              href="/quote"
              className="mt-3 inline-block rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white"
            >
              Generate Quote
            </Link>
          </div>
        ) : (
          quotes
            .filter((q) => q.job.toLowerCase().includes(search.toLowerCase()))
            .map((q) => (
              <div key={q.id} className="space-y-3 rounded-xl border bg-white p-4 shadow-sm">
                <Link href={`/history/${q.id}`} className="block">
                  <QuoteCard clientName={q.job} amount={(q.quote || "Draft quote").slice(0, 80)} status="draft" />
                </Link>
                <div className="grid gap-1 text-sm text-slate-900 sm:grid-cols-3">
                  <p>Budget: {q.budget ?? "n/a"}</p>
                  <p>Urgency: {q.urgency ?? "n/a"}</p>
                  <p>Client: {q.client_type ?? "n/a"}</p>
                </div>
                <button
                  type="button"
                  onClick={() => void deleteQuote(q.id)}
                  className="rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            ))
        )}
      </section>
    </main>
  );
}
