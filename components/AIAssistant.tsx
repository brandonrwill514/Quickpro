"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function AIAssistant() {
  const [prompt, setPrompt] = useState("Why are my quotes losing?");

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">Ask QuickQuo AI</h2>

      <textarea
        className="mt-4 min-h-28 w-full rounded-xl border p-4 resize-none"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
      >
        <Send size={16} />
        Send
      </button>

      <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
        <p className="font-semibold text-slate-900">AI:</p>
        <p className="mt-1">
          Your average electrical quote is accepted 22% more often when you include a project timeline.
        </p>
      </div>
    </section>
  );
}
