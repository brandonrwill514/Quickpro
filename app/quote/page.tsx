"use client";

import { useState } from "react";
import VoiceInput from "@/components/VoiceInput";

export default function QuotePage() {
  const [job, setJob] = useState("");
  const [budget, setBudget] = useState("standard");
  const [urgency, setUrgency] = useState("normal");
  const [clientType, setClientType] = useState("startup");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  async function generateQuote(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/generate-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job,
          budget,
          urgency,
          clientType,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.quote) {
        setResult("");
        setError(data?.error ?? data?.message ?? "Unable to generate a quote right now.");
        return;
      }

      setResult(data.quote);
    } catch (err) {
      setResult("");
      setError(err instanceof Error ? err.message : "Unable to generate a quote right now.");
    }
  }

  return (
    <main style={{ padding: 40, maxWidth: 640, margin: "0 auto" }}>
      <h1>Generate a quote</h1>
      <form onSubmit={generateQuote} style={{ display: "grid", gap: 12 }}>
        <label>
          Job
          <textarea
            value={job}
            onChange={(event) => setJob(event.target.value)}
            placeholder="Describe the work..."
            style={{ display: "block", width: "100%", marginTop: 4, minHeight: 96, padding: 8 }}
          />
          <div style={{ marginTop: 8 }}>
            <VoiceInput
              onTranscript={(text) => {
                setJob((previous) => (previous ? `${previous} ${text}` : text));
              }}
            />
          </div>
        </label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => setJob("Web design template")}
            style={{ flex: "1 1 180px" }}
          >
            “Web design template”
          </button>
          <button
            type="button"
            onClick={() => setJob("Logo pricing template")}
            style={{ flex: "1 1 180px" }}
          >
            “Logo pricing template”
          </button>
        </div>
        <label>
          Budget
          <select
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            style={{ display: "block", width: "100%", marginTop: 4 }}
          >
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </label>
        <label>
          Urgency
          <select
            value={urgency}
            onChange={(event) => setUrgency(event.target.value)}
            style={{ display: "block", width: "100%", marginTop: 4 }}
          >
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </label>
        <label>
          Client Type
          <select
            value={clientType}
            onChange={(event) => setClientType(event.target.value)}
            style={{ display: "block", width: "100%", marginTop: 4 }}
          >
            <option value="startup">Startup</option>
            <option value="small-business">Small Business</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </label>
        <button type="submit">Generate</button>
        <button type="button" onClick={() => void generateQuote({ preventDefault: () => {} } as React.FormEvent)}>
          Regenerate
        </button>
      </form>

      {error ? (
        <div style={{ marginTop: 24, padding: 12, border: "1px solid #f5c2c7", borderRadius: 8, background: "#fff5f5", color: "#842029" }}>
          <p style={{ margin: 0 }}>{error}</p>
        </div>
      ) : null}

      {result ? (
        <div style={{ marginTop: 24 }}>
          <p>{result}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
            <button
              type="button"
              onClick={() => {
                void navigator.clipboard.writeText(result);
              }}
            >
              Copy quote
            </button>
            <button
              type="button"
              onClick={() => {
                const printWindow = window.open("", "_blank", "width=800,height=600");
                if (!printWindow) return;
                printWindow.document.write(`<pre>${result}</pre>`);
                printWindow.document.close();
                printWindow.print();
              }}
            >
              Export PDF
            </button>
            <button
              type="button"
              onClick={() => {
                const mailto = `mailto:?subject=${encodeURIComponent("Quote")}&body=${encodeURIComponent(result)}`;
                window.location.href = mailto;
              }}
            >
              Email to client
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}