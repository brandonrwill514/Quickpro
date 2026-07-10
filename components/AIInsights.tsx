import {
  Sparkles,
} from "lucide-react";
import AIBox from "@/components/AIBox";

export default function AIInsights() {
  return (
    <AIBox title="AI Business Insights" subtitle="Live recommendations based on your quoting data" tone="teal">
      <div className="flex items-center gap-3">
        <Sparkles className="text-teal-400" />
        <h2 className="text-2xl font-bold text-white">AI Business Insights</h2>
      </div>

      <p className="mt-5 text-lg text-zinc-300">
        Your quotes are performing well.
        Your electrical projects have a higher
        acceptance rate than your renovation jobs.
      </p>
    </AIBox>
  );
}
