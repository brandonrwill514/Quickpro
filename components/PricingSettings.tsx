"use client";

import { useState } from "react";

export default function PricingSettings() {
  const [hourlyRate, setHourlyRate] = useState(85);
  const [materialMarkup, setMaterialMarkup] = useState(25);
  const [profitMargin, setProfitMargin] = useState(35);
  const [region, setRegion] = useState("Ontario");

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Pricing Settings</h2>

      <label className="mb-4 block">
        <p className="mb-2 text-sm font-semibold text-slate-900">Default Hourly Rate</p>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(Number(e.target.value))}
          className="w-full rounded-xl border p-3"
        />
        <p className="mt-1 text-xs text-gray-500">${hourlyRate}/hr</p>
      </label>

      <label className="mb-4 block">
        <p className="mb-2 text-sm font-semibold text-slate-900">Material Markup</p>
        <input
          type="number"
          step="1"
          min="0"
          value={materialMarkup}
          onChange={(e) => setMaterialMarkup(Number(e.target.value))}
          className="w-full rounded-xl border p-3"
        />
        <p className="mt-1 text-xs text-gray-500">{materialMarkup}%</p>
      </label>

      <label className="mb-4 block">
        <p className="mb-2 text-sm font-semibold text-slate-900">Target Profit Margin</p>
        <input
          type="number"
          step="1"
          min="0"
          value={profitMargin}
          onChange={(e) => setProfitMargin(Number(e.target.value))}
          className="w-full rounded-xl border p-3"
        />
        <p className="mt-1 text-xs text-gray-500">{profitMargin}%</p>
      </label>

      <label className="block">
        <p className="mb-2 text-sm font-semibold text-slate-900">Region</p>
        <input
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </label>
    </div>
  );
}
