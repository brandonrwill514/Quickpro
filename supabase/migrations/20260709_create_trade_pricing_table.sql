-- Create trade_pricing table in Supabase.

CREATE TABLE IF NOT EXISTS public.trade_pricing (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  trade text,
  category text,
  item text,
  average_cost numeric,
  labour_hours numeric,
  region text
);
