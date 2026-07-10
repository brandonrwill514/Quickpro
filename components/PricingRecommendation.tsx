export default function PricingRecommendation({
  price,
  margin,
}: {
  price: string;
  margin: string;
}) {
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-zinc-900 p-6 shadow-xl shadow-amber-500/20">
      <h2 className="text-xl font-bold text-amber-400">Quote:</h2>

      <p className="mt-2 text-4xl font-bold text-white">$1,500</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-amber-400">AI Analysis:</h3>
        <p className="mt-2 text-zinc-300">Similar jobs:</p>
        <p className="text-zinc-300">Average $2,100</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-amber-400">Recommendation:</h3>
        <p className="mt-2 text-zinc-300">You may be underpricing by $600.</p>
      </div>
    </div>
  );
}
