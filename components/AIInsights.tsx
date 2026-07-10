import {
  Sparkles,
} from "lucide-react";

export default function AIInsights() {
  return (
    <div className="
rounded-2xl
bg-gradient-to-r
from-blue-600
to-indigo-600
text-white
p-8
">
      <div className="
flex
gap-3
items-center
">
        <Sparkles />

        <h2 className="
text-2xl
font-bold
">
          AI Business Insights
        </h2>
      </div>

      <p className="
mt-5
text-blue-100
text-lg
">
        Your quotes are performing well.
        Your electrical projects have a higher
        acceptance rate than your renovation jobs.
      </p>
    </div>
  );
}
