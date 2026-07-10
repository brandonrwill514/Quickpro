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
bg-green-50
border
p-6
">
      <h2 className="text-xl font-bold">Quote:</h2>

      <p className="mt-2 text-4xl font-bold">$1,500</p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">AI Analysis:</h3>
        <p className="mt-2 text-gray-700">Similar jobs:</p>
        <p className="text-gray-700">Average $2,100</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Recommendation:</h3>
        <p className="mt-2 text-gray-700">You may be underpricing by $600.</p>
      </div>
    </div>
  );
}
