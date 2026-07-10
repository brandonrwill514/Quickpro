"use client";

import { useState } from "react";
import { Mic, Sparkles, Upload, User, FileText, Clock, DollarSign, Send, Download, Mail, Save, Bell } from "lucide-react";
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

const analysisTemplate = [
  { label: "Trade", value: "Electrical" },
  { label: "Project", value: "Basement renovation" },
  { label: "Materials", value: "$450" },
  { label: "Labour", value: "8 hours" },
  { label: "Recommended Price", value: "$2,400" },
  { label: "Profit Margin", value: "32%" },
];

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

  const recommendation = "Based on your previous electrical quotes, your average margin is 27%. This quote should be priced at $2,650 to maintain your target margin.";

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
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-violet-400">AI PROFESSIONAL QUOTES</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Create a quote using AI</h2>
          <p className="mt-2 text-zinc-400">Everything happens in one place.</p>
        </div>

        <AIBox title="Create Quote" subtitle="Voice AI, text, future photo upload, and customer information" tone="teal">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-teal-500/30 bg-zinc-950 p-6 shadow-teal-500/20">
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-teal-400">Voice AI 🎤</p>
              <div className="rounded-2xl border border-teal-500/30 bg-teal-500/10 p-6 text-center text-white">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-2xl shadow-lg shadow-teal-500/40">🎤</div>
                <p className="text-lg font-semibold">Tap to Speak</p>
                <p className="mt-2 text-sm text-zinc-300">"Install 15 pot lights in a finished basement"</p>
              </div>
              <div className="mt-4">
                <VoiceInput onTranscript={(text) => setDescription(text)} />
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.22em] text-zinc-500">Text Description</p>
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Describe the project"
                  className="min-h-40 w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white placeholder:text-zinc-500 focus:border-violet-500/50 focus:outline-none"
                />
              </div>

              <div className="rounded-xl border border-dashed border-zinc-700 p-4 text-zinc-400">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Photo Upload</p>
                <p className="mt-2 flex items-center gap-2 text-sm"><Upload size={16} /> Future photo analysis goes here.</p>
              </div>

              <div className="rounded-xl border border-zinc-800 p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Customer Information</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <input className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500" placeholder="Customer name" />
                  <input className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white placeholder:text-zinc-500" placeholder="Customer email" />
                </div>
              </div>

              <button
                onClick={analyzeJob}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
              >
                <Sparkles size={16} />
                {loading ? "Analyzing..." : "Analyze Job"}
              </button>
            </div>
          </div>
        </AIBox>
      </section>

      <section className="space-y-6">
        <AIBox title="AI Generated Analysis" subtitle="Trade detection, scope, materials, labour, pricing, margin, timeline" tone="amber">
          <div className="grid gap-4 sm:grid-cols-2">
            {analysisTemplate.map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                <p className="text-sm uppercase tracking-[0.22em] text-amber-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{quote?.[item.label.toLowerCase() as keyof QuoteDraft] ?? item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-amber-500/30 bg-zinc-950 p-4 shadow-amber-500/20">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-400">AI Recommendation</p>
            <p className="mt-2 text-zinc-300">{recommendation}</p>
          </div>
        </AIBox>

        <PricingAnalysis price={quote?.estimatedPrice ?? "$2,400"} margin="35%" />

        <AIBox title="Automation" subtitle="Next actions after the quote is generated" tone="violet">
          <div className="grid gap-3 sm:grid-cols-2">
            <ActionTile icon={<Download size={16} />} label="Generate PDF Quote" />
            <ActionTile icon={<Send size={16} />} label="Email Customer" />
            <ActionTile icon={<Save size={16} />} label="Save Quote" />
            <ActionTile icon={<Bell size={16} />} label="Follow-up reminders" />
          </div>
        </AIBox>

        {quote ? <QuotePreview quote={quote} /> : null}
      </section>
    </div>
  );
}

function ActionTile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-white">
      <span className="text-violet-400">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
