import QuoteWorkspace from "@/components/QuoteWorkspace";

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-4xl font-bold">
        Generate AI Quote
      </h1>

      <QuoteWorkspace />
    </div>
  );
}