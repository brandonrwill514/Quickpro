"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Mic,
  Sparkles,
  Upload,
  FileText,
  DollarSign,
  Clock,
  TrendingUp
} from "lucide-react";

export default function WorkspacePage() {
  const [description, setDescription] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeJob() {
    setLoading(true);

    try {
      const response = await fetch("/api/extract-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          description,
        }),
      });

      const data = await response.json();

      if (data.summary) {
        setAnalysis(
          data.summary ||
          "No AI analysis returned."
        );
      } else {
        setAnalysis("Unable to analyze project.");
      }
    } catch (error) {
      console.error(error);
      setAnalysis("Unable to analyze project.");
    }

    setLoading(false);
  }

  async function saveQuote() {
    try {
      const { error } = await supabase
        .from("Quotes")
        .insert({
          project_description: description,
          ai_summary: analysis,
          trade: "Pending",
          materials: "Pending",
          labour: "Pending",
          estimated_price: 0,
          profit_margin: 0,
        });

      if (error) {
        console.error(error);
        alert("Quote failed to save");
        return;
      }

      alert("Quote saved successfully!");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">AI Professional Quotes</h1>

        <p className="mt-3 text-zinc-400">
          Create professional contractor quotes using AI.
        </p>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the project..."
            className="h-48 w-full rounded-xl border border-zinc-700 bg-zinc-950 p-5"
          />

          <button
            onClick={analyzeJob}
            className="mt-5 rounded-xl bg-violet-600 px-8 py-3 font-semibold hover:bg-violet-500"
          >
            {loading ? "Analyzing..." : "Analyze Job"}
          </button>

          <button
            onClick={saveQuote}
            className="mt-6 w-full rounded-xl bg-violet-600 py-4 font-semibold hover:bg-violet-500"
          >
            Generate Professional Quote
          </button>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <h2 className="font-semibold">AI Analysis</h2>

            <p className="mt-4 whitespace-pre-line text-zinc-300">
              {analysis || "Your quote analysis will appear here."}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
