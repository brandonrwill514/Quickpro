export default function PricingRecommendation({
  price,
  margin,
}: {
  price: string;
  margin: string;
}) {
  return (
    <div className="
rounded-2xl
bg-cyan-50
border
p-6
">
      <h2 className="text-xl font-bold text-cyan-700">Quote:</h2>

      <p className="mt-2 text-4xl font-bold">$1,500</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-cyan-700">AI Analysis:</h3>
        <p className="mt-2 text-slate-900">Similar jobs:</p>
        <p className="text-slate-900">Average $2,100</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-cyan-700">Recommendation:</h3>
        <p className="mt-2 text-slate-900">You may be underpricing by $600.</p>
      </div>
    </div>
  );
}
