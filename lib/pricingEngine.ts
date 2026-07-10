import { supabase } from "@/lib/supabase";

export type TradePricingRow = {
  id: string;
  trade: string;
  category: string;
  item: string;
  average_cost: number | null;
  labour_hours: number | null;
  region: string;
};

export type PricingRequestItem = {
  item: string;
  quantity?: number;
};

export type PricingRequest = {
  trade: string;
  region?: string;
  items: PricingRequestItem[];
  hourlyRate?: number;
  marginPercent?: number;
};

export type PricingResult = {
  materialCost: number;
  labourHours: number;
  labourCost: number;
  subtotal: number;
  marginAmount: number;
  finalPrice: number;
  matchedItems: TradePricingRow[];
  missingItems: string[];
};

export function calculatePrice({
  materialCost,
  labourHours,
  hourlyRate,
  margin,
}: {
  materialCost: number;
  labourHours: number;
  hourlyRate: number;
  margin: number;
}) {
  const labourCost =
    labourHours * hourlyRate;

  const subtotal =
    materialCost + labourCost;

  const price =
    subtotal /
    (1 - margin);

  return Math.round(price);
}

function normalizeKey(value: string) {
  return value.trim().toLowerCase();
}

export async function getTradePricing(trade: string, region?: string) {
  const query = supabase
    .from("trade_pricing")
    .select("id, trade, category, item, average_cost, labour_hours, region")
    .ilike("trade", trade.trim());

  const { data, error } = region?.trim()
    ? await query.ilike("region", region.trim())
    : await query;

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as TradePricingRow[];
}

export async function estimatePrice(request: PricingRequest): Promise<PricingResult> {
  const hourlyRate = request.hourlyRate ?? 95;
  const marginPercent = request.marginPercent ?? 20;

  const pricingRows = await getTradePricing(request.trade, request.region);

  const rowMap = new Map(pricingRows.map((row) => [normalizeKey(row.item), row]));

  let materialCost = 0;
  let labourHours = 0;
  const matchedItems: TradePricingRow[] = [];
  const missingItems: string[] = [];

  for (const requestItem of request.items) {
    const quantity = requestItem.quantity ?? 1;
    const row = rowMap.get(normalizeKey(requestItem.item));

    if (!row) {
      missingItems.push(requestItem.item);
      continue;
    }

    matchedItems.push(row);
    materialCost += (row.average_cost ?? 0) * quantity;
    labourHours += (row.labour_hours ?? 0) * quantity;
  }

  const labourCost = labourHours * hourlyRate;
  const subtotal = materialCost + labourCost;
  const marginAmount = subtotal * (marginPercent / 100);
  const finalPrice = subtotal + marginAmount;

  return {
    materialCost,
    labourHours,
    labourCost,
    subtotal,
    marginAmount,
    finalPrice,
    matchedItems,
    missingItems,
  };
}
