"use client";

import { useState } from "react";

export default function PricingSettings() {
  const [hourlyRate, setHourlyRate] = useState(85);
  const [materialMarkup, setMaterialMarkup] = useState(25);
  const [profitMargin, setProfitMargin] = useState(35);
  const [region, setRegion] = useState("Ontario");

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl shadow-black/20">
      <h2 className="mb-6 text-2xl font-bold text-white">Pricing Settings</h2>

      <label className="mb-4 block">
        <p className="mb-2 text-sm font-semibold text-zinc-300">Default Hourly Rate</p>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(Number(e.target.value))}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-white"
        />
        <p className="mt-1 text-xs text-zinc-500">${hourlyRate}/hr</p>
      </label>

      <label className="mb-4 block">
        <p className="mb-2 text-sm font-semibold text-zinc-300">Material Markup</p>
        <input
          type="number"
          step="1"
          min="0"
          value={materialMarkup}
          onChange={(e) => setMaterialMarkup(Number(e.target.value))}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-white"
        />
        <p className="mt-1 text-xs text-zinc-500">{materialMarkup}%</p>
      </label>

      <label className="mb-4 block">
        <p className="mb-2 text-sm font-semibold text-zinc-300">Target Profit Margin</p>
        <input
          type="number"
          step="1"
          min="0"
          value={profitMargin}
          onChange={(e) => setProfitMargin(Number(e.target.value))}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-white"
        />
        <p className="mt-1 text-xs text-zinc-500">{profitMargin}%</p>
      </label>

      <label className="block">
        <p className="mb-2 text-sm font-semibold text-zinc-300">Region</p>
        <input
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-white"
        />
      </label>
    </div>
  );
}
