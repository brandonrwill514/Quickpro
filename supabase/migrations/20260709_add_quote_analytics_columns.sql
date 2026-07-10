-- Step 1: Add analytics columns to quotes table.
-- Supports both naming variants seen in this codebase: public.quotes and public."Quotes".

DO $$
BEGIN
  IF to_regclass('public.quotes') IS NOT NULL THEN
    ALTER TABLE public.quotes
      ADD COLUMN IF NOT EXISTS job_type text,
      ADD COLUMN IF NOT EXISTS status text,
      ADD COLUMN IF NOT EXISTS trade text,
      ADD COLUMN IF NOT EXISTS location text,
      ADD COLUMN IF NOT EXISTS hours_estimated numeric,
      ADD COLUMN IF NOT EXISTS hours_actual numeric,
      ADD COLUMN IF NOT EXISTS quoted_price numeric,
      ADD COLUMN IF NOT EXISTS accepted boolean,
      ADD COLUMN IF NOT EXISTS profit numeric,
      ADD COLUMN IF NOT EXISTS accepted_datetime timestamp,
      ADD COLUMN IF NOT EXISTS follow_up_date timestamp,
      ADD COLUMN IF NOT EXISTS profit_margin numeric,
      ADD COLUMN IF NOT EXISTS labour_cost numeric,
      ADD COLUMN IF NOT EXISTS material_cost numeric,
      ADD COLUMN IF NOT EXISTS final_price numeric;
  END IF;

  IF to_regclass('public."Quotes"') IS NOT NULL THEN
    ALTER TABLE public."Quotes"
      ADD COLUMN IF NOT EXISTS job_type text,
      ADD COLUMN IF NOT EXISTS status text,
      ADD COLUMN IF NOT EXISTS trade text,
      ADD COLUMN IF NOT EXISTS location text,
      ADD COLUMN IF NOT EXISTS hours_estimated numeric,
      ADD COLUMN IF NOT EXISTS hours_actual numeric,
      ADD COLUMN IF NOT EXISTS quoted_price numeric,
      ADD COLUMN IF NOT EXISTS accepted boolean,
      ADD COLUMN IF NOT EXISTS profit numeric,
      ADD COLUMN IF NOT EXISTS accepted_datetime timestamp,
      ADD COLUMN IF NOT EXISTS follow_up_date timestamp,
      ADD COLUMN IF NOT EXISTS profit_margin numeric,
      ADD COLUMN IF NOT EXISTS labour_cost numeric,
      ADD COLUMN IF NOT EXISTS material_cost numeric,
      ADD COLUMN IF NOT EXISTS final_price numeric;
  END IF;
END $$;
