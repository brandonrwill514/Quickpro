"use client";

type JobSummaryProps = {
  summary: string;
};

export default function JobSummary({ summary }: JobSummaryProps) {
  if (!summary) return null;

  return (
    <div style={{ marginTop: 12, padding: 12, border: "1px solid #e5e7eb", borderRadius: 8, background: "#f9fafb" }}>
      <strong>Job summary</strong>
      <p style={{ margin: "6px 0 0" }}>{summary}</p>
    </div>
  );
}
