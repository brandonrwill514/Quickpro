"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

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
    return <div style={{ padding: 20 }}>Loading history...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Quote History</h1>

      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by job"
        style={{ display: "block", width: "100%", marginBottom: 12 }}
      />

      {quotes.filter((q) => q.job.toLowerCase().includes(search)).length === 0 ? (
        <div style={{ padding: 20, border: "1px dashed #ccc", borderRadius: 8 }}>
          <p>No quotes yet — generate your first one</p>
          <Link href="/quote">
            <button type="button">Generate Quote</button>
          </Link>
        </div>
      ) : (
        quotes
          .filter((q) => q.job.toLowerCase().includes(search))
          .map((q) => (
          <div
            key={q.id}
            style={{
              border: "1px solid #ddd",
              padding: 15,
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <Link href={`/history/${q.id}`}>
              <div style={{ cursor: "pointer" }}>
                <h3>{q.job}</h3>
                <p>{q.quote}</p>
              </div>
            </Link>
            <p>
              <strong>Quote:</strong> {q.quote}
            </p>
            <p>Budget: {q.budget ?? "n/a"}</p>
            <p>Urgency: {q.urgency ?? "n/a"}</p>
            <p>Client: {q.client_type ?? "n/a"}</p>
            <button type="button" onClick={() => void deleteQuote(q.id)}>
              Delete
            </button>
          </div>
          ))
      )}
    </div>
  );
}
