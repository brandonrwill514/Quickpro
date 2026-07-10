"use client";

import { useState } from "react";
import {
  Mic,
  Sparkles,
  FileText,
} from "lucide-react";
import QuotePreview from "./QuotePreview";
import AIBox from "@/components/AIBox";

export default function QuoteWorkspace() {
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyzeJob() {
    setLoading(true);

    const response = await fetch(
"/api/extract-job",
{
method:"POST",
headers:{
"Content-Type":"application/json",
},
body:JSON.stringify({
description
})
}
);


const data = await response.json();


if(!response.ok){

console.error(data.error);

return;

}


setSummary(data.summary);

    setLoading(false);
  }

  async function generateQuote() {
    const response =
      await fetch(
        "/api/generate-quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            summary,
          }),
        },
      );

    const data =
      await response.json();

    setQuote(data);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl shadow-black/20">
        <div className="mb-6 flex items-center gap-3">
          <Mic className="text-violet-400" />

          <h2 className="text-xl font-bold text-white">Describe The Job</h2>
        </div>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="
Example:
Install 10 pot lights in basement,
replace switches,
add new outlets...
"
              className="h-64 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-white placeholder:text-zinc-500 focus:border-violet-500/50 focus:outline-none"
        />

        <button
          onClick={analyzeJob}
              className="mt-6 flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white shadow-lg shadow-teal-500/40 transition hover:bg-teal-400"
        >
          <Sparkles size={18} />

          {loading
            ? "Analyzing..."
            : "Analyze Job"}
        </button>

        <button
          onClick={generateQuote}
          className="mt-6 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
        >
          Generate Quote
        </button>
      </div>

      <div className="space-y-6">
        <AIBox title="AI Job Summary" subtitle="AI-generated sections and recommendations" tone="teal">
          <div className="mb-6 flex items-center gap-3">
            <FileText className="text-teal-400" />
          </div>

          {
            summary ? (
              <div className="whitespace-pre-line rounded-xl border border-teal-500/30 bg-zinc-950 p-4 text-zinc-300 shadow-teal-500/20">
                {summary}
              </div>
            )
              :
              <p className="text-zinc-400">
                Your AI analysis will appear here.
              </p>
          }
        </AIBox>

        {quote && <QuotePreview quote={quote} />}
      </div>
    </div>
  );
}
