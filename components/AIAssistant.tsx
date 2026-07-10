"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import AIBox from "@/components/AIBox";

export default function AIAssistant() {
  const [prompt, setPrompt] = useState("Why are my quotes losing?");

  return (
    <AIBox title="Ask QuickQuo AI" subtitle="Get pricing and sales guidance" tone="teal">
      <textarea
        className="mt-4 min-h-28 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-white placeholder:text-zinc-500 focus:border-teal-500/50 focus:outline-none"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 font-semibold text-white shadow-lg shadow-teal-500/40 transition hover:bg-teal-400">
        <Send size={16} />
        Send
      </button>

      <div className="mt-5 rounded-xl border border-teal-500/30 bg-zinc-950 p-4 text-sm text-zinc-300 shadow-teal-500/20">
        <p className="font-semibold text-teal-400">AI:</p>
        <p className="mt-1">
          Your average electrical quote is accepted 22% more often when you include a project timeline.
        </p>
      </div>
    </AIBox>
  );
}
