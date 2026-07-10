export default function PricingAnalysis({
  price,
  margin,
}: {
  price: string;
  margin: string;
}) {
  return (
    <section className="rounded-2xl border border-amber-500/30 bg-zinc-900 p-6 shadow-xl shadow-amber-500/20">
      <p className="text-sm uppercase tracking-[0.22em] text-amber-400">Smart Recommendations</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Premium Gold Pricing Insight</h2>
      <p className="mt-4 text-zinc-300">Your current quote price is {price} with a {margin} margin target.</p>
      <p className="mt-3 text-zinc-300">This job type is trending above your average close rate, so a slightly higher markup may improve profit without reducing acceptance.</p>
    </section>
  );
}
