"use client";

import { useState } from "react";
import { Mic, Sparkles } from "lucide-react";
import AIBox from "@/components/AIBox";
import VoiceInput from "@/components/VoiceInput";
import QuotePreview from "@/components/QuotePreview";
import PricingAnalysis from "@/components/PricingAnalysis";

type QuoteDraft = {
  project: string;
  trade: string;
  scope: string[];
  materials: string[];
  timeline: string;
  estimatedPrice: string;
};

function parseAnalysis(summary: string): QuoteDraft {
  const lower = summary.toLowerCase();
  const getValue = (label: string, fallback: string) => {
    const pattern = new RegExp(`${label}:\\s*(.*)`,'i');
    const match = summary.match(pattern);
    return match?.[1]?.trim() || fallback;
  };

  return {
    project: getValue("Project", "Basement renovation"),
    trade: getValue("Trade", "Electrical"),
    scope: [getValue("Scope", "Install fixtures and complete wiring")],
    materials: [getValue("Materials", "$850")],
    timeline: getValue("Labour Estimate", "12 hrs"),
    estimatedPrice: lower.includes("price") ? getValue("Price", "$2,400") : "$2,400",
  };
}

export default function AIQuoteBuilder() {
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [quote, setQuote] = useState<QuoteDraft | null>(null);
  const [loading, setLoading] = useState(false);

  async function analyzeJob() {
    if (!description.trim()) return;
    setLoading(true);

    const response = await fetch("/api/extract-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data.error);
      setLoading(false);
      return;
    }

    setSummary(data.summary);
    setQuote(parseAnalysis(data.summary || ""));
    setLoading(false);
  }

  async function generateQuote() {
    const response = await fetch("/api/generate-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ summary }),
    });

    const data = await response.json();
    setQuote({
      project: data.project ?? "Basement renovation",
      trade: data.trade ?? "Electrical",
      scope: data.scope ?? ["Install fixtures and complete wiring"],
      materials: data.materials ?? ["$850"],
      timeline: data.timeline ?? "12 hrs",
      estimatedPrice: data.estimatedPrice ?? data.price ?? "$2,400",
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-violet-600/20 p-3 text-violet-400">
            <Mic size={18} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">How would you like to start?</h2>
            <p className="text-sm text-zinc-400">Voice or text, AI chooses the workflow.</p>
          </div>
        </div>

        <AIBox title="Voice Quote" subtitle='Tell me about the job' tone="teal">
          <div className="space-y-4">
            <div className="rounded-2xl border border-teal-500/30 bg-zinc-950 p-6 text-center shadow-teal-500/20">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-2xl shadow-lg shadow-teal-500/40">
                🎤
              </div>
              <p className="text-lg font-semibold text-white">Tap to Speak</p>
              <p className="mt-2 text-sm text-zinc-400">"Install 15 pot lights in a finished basement"</p>
            </div>

            <VoiceInput onTranscript={(text) => setDescription(text)} />
          </div>
        </AIBox>

        <div className="text-center text-zinc-500">OR</div>

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe the project"
          className="min-h-40 w-full rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-white placeholder:text-zinc-500 focus:border-violet-500/50 focus:outline-none"
        />

        <button
          onClick={analyzeJob}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
        >
          <Sparkles size={16} />
          {loading ? "Analyzing..." : "Generate Professional Quote"}
        </button>
      </section>

      <section className="space-y-6">
        <AIBox title="AI Analysis" subtitle="Trade, pricing, and scope" tone="amber">
          <div className="space-y-4 text-sm text-zinc-300">
            <div>
              <p className="text-amber-400">Trade:</p>
              <p>{quote?.trade ?? "Electrical"}</p>
            </div>
            <div>
              <p className="text-amber-400">Project:</p>
              <p>{quote?.project ?? "Basement renovation"}</p>
            </div>
            <div>
              <p className="text-amber-400">Materials:</p>
              <p>{quote?.materials?.[0] ?? "$850"}</p>
            </div>
            <div>
              <p className="text-amber-400">Labour:</p>
              <p>{quote?.timeline ?? "12 hrs"}</p>
            </div>
            <div>
              <p className="text-amber-400">Margin:</p>
              <p>35%</p>
            </div>
          </div>
        </AIBox>

        <PricingAnalysis price={quote?.estimatedPrice ?? "$2,400"} margin="35%" />

        {quote ? (
          <QuotePreview quote={quote} />
        ) : null}
      </section>
    </div>
  );
}
