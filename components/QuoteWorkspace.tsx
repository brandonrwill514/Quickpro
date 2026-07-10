"use client";

import { useState } from "react";
import {
  Mic,
  Sparkles,
  FileText,
} from "lucide-react";
import QuotePreview from "./QuotePreview";

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
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <Mic />

          <h2 className="text-xl font-bold">
            Describe The Job
          </h2>
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
          className="
w-full
h-64
rounded-xl
border
p-5
resize-none
focus:ring-2
focus:ring-indigo-500
"
        />

        <button
          onClick={analyzeJob}
          className="
mt-6
      bg-cyan-500
text-white
rounded-xl
px-6
py-3
font-semibold
flex
items-center
gap-2
      hover:bg-cyan-600
"
        >
          <Sparkles size={18} />

          {loading
            ? "Analyzing..."
            : "Analyze Job"}
        </button>

        <button
          onClick={generateQuote}
          className="
mt-6
rounded-xl
bg-cyan-500
text-white
px-6
py-3
font-semibold
hover:bg-cyan-600
"
        >
          Generate Quote
        </button>
      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <FileText />

          <h2 className="text-xl font-bold">
            AI Job Summary
          </h2>
        </div>

        {
          summary ? (
            <div className="whitespace-pre-line rounded-xl bg-cyan-50 p-4 text-gray-700">
              {summary}
            </div>
          )
            :
            <p className="text-gray-400">
              Your AI analysis will appear here.
            </p>
        }

        {
          quote &&
          <QuotePreview quote={quote} />
        }
      </div>
    </div>
  );
}
