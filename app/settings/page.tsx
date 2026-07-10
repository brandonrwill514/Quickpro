"use client";

import { useEffect, useMemo, useState } from "react";
import DashboardCard from "@/components/DashboardCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { supabase } from "@/lib/supabase";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

type SettingsQuoteRow = {
  budget?: string | null;
  urgency?: string | null;
  client_type?: string | null;
};

function mostCommon(values: Array<string | null | undefined>) {
  const counts = new Map<string, number>();

  for (const value of values) {
    if (!value) continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  let winner = "n/a";
  let bestCount = 0;

  counts.forEach((count, value) => {
    if (count > bestCount) {
      winner = value;
      bestCount = count;
    }
  });

  return winner;
}

export default function SettingsPage() {
  const [rows, setRows] = useState<SettingsQuoteRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDefaults() {
      let data: SettingsQuoteRow[] | null = null;

      const primary = await supabase
        .from("quotes")
        .select("budget, urgency, client_type");

      if (primary.error) {
        const fallback = await supabase
          .from("Quotes")
          .select("budget, urgency, client_type");

        if (!fallback.error) {
          data = fallback.data as SettingsQuoteRow[];
        }
      } else {
        data = primary.data as SettingsQuoteRow[];
      }

      setRows(data ?? []);
      setLoading(false);
    }

    void fetchDefaults();
  }, []);

  const defaultBudget = useMemo(() => mostCommon(rows.map((row) => row.budget)), [rows]);
  const defaultClientType = useMemo(() => mostCommon(rows.map((row) => row.client_type)), [rows]);
  const commonUrgency = useMemo(() => mostCommon(rows.map((row) => row.urgency)), [rows]);

  return (
    <PageLayout>
      <PageHeader title="Settings" subtitle="Manage profile, defaults, and integrations" />
      <section className="w-full space-y-4">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              title="Default Budget Tier"
              value={defaultBudget}
              helperText="Inferred from your existing quote history"
            />
            <DashboardCard
              title="Default Client Type"
              value={defaultClientType}
              helperText="Inferred from your existing quote history"
            />
            <DashboardCard
              title="Default Urgency"
              value={commonUrgency}
              helperText="Inferred from your existing quote history"
            />
          </div>
        )}
      </section>
    </PageLayout>
  );
}
