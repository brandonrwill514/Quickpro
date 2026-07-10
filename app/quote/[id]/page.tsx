"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import QuotePreview from "@/components/QuotePreview";
import StatusBadge from "@/components/StatusBadge";
import { supabase } from "@/lib/supabase";

type RawQuote = {
  id?: string;
  job?: string;
  project?: string;
  trade?: string;
  client_type?: string;
  scope?: string[] | string;
  materials?: string[] | string;
  estimatedPrice?: string;
  price?: string;
  timeline?: string;
  status?: string;
  follow_up_date?: string;
};

function toList(value: RawQuote["scope"]): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim()) {
    return value
      .split(/\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

function normalize(raw: RawQuote | null) {
  if (!raw) return null;

  return {
    project: raw.project ?? raw.job ?? "Untitled Project",
    trade: raw.trade ?? raw.client_type ?? "General",
    scope: toList(raw.scope),
    materials: toList(raw.materials),
    timeline: raw.timeline ?? "To be confirmed",
    estimatedPrice: raw.estimatedPrice ?? raw.price ?? "TBD",
    status: raw.status ?? "Draft",
  };
}

export default function QuoteDetailPage() {
  const params = useParams();
  const quoteId = useMemo(() => {
    const value = params?.id;
    return Array.isArray(value) ? value[0] : value;
  }, [params]);

  const [quote, setQuote] = useState<RawQuote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      if (!quoteId) {
        setError("Quote id is missing.");
        setLoading(false);
        return;
      }

      let data: RawQuote | null = null;

      const primary = await supabase
        .from("quotes")
        .select("*")
        .eq("id", quoteId)
        .single();

      if (primary.error) {
        const fallback = await supabase
          .from("Quotes")
          .select("*")
          .eq("id", quoteId)
          .single();

        if (!fallback.error) {
          data = fallback.data as RawQuote;
        }
      } else {
        data = primary.data as RawQuote;
      }

      if (!data) {
        setError("Quote not found.");
      } else {
        setQuote(data);
      }

      setLoading(false);
    }

    void fetchQuote();
  }, [quoteId]);

  const normalized = normalize(quote);

  if (loading) {
    return <main className="p-8">Loading quote...</main>;
  }

  if (error || !normalized) {
    return (
      <main className="space-y-4 p-8">
        <p className="text-red-600">{error || "Quote not available."}</p>
        <Link href="/quote" className="inline-block rounded-xl border px-4 py-2">
          Back to Quote Workspace
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/quote" className="rounded-xl border bg-white px-4 py-2 text-sm">
          Back
        </Link>
        <StatusBadge status={normalized.status} />
      </div>

      <QuotePreview quote={normalized} />
    </main>
  );
}
