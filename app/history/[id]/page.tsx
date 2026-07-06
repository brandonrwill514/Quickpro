"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";

export default function QuoteDetailPage() {
  const { id } = useParams();
  const [quote, setQuote] = useState<any>(null);

  async function deleteQuote() {
    await supabase.from("quotes").delete().eq("id", id);
    window.location.href = "/history";
  }

  useEffect(() => {
    async function fetchQuote() {
      const { data, error } = await supabase
        .from("quotes")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setQuote(data);
      }
    }

    fetchQuote();
  }, [id]);

  if (!quote) return <p>Loading...</p>;

  return (
    <div>
      <h1>{quote.job}</h1>

      <p>
        <b>Quote:</b> {quote.quote}
      </p>
      <p>
        <b>Budget:</b> {quote.budget}
      </p>
      <p>
        <b>Urgency:</b> {quote.urgency}
      </p>
      <p>
        <b>Client Type:</b> {quote.client_type}
      </p>
      <button onClick={() => navigator.clipboard.writeText(quote.quote)}>
        Copy Quote
      </button>
      <button onClick={deleteQuote}>
        Delete Quote
      </button>
    </div>
  );
}
