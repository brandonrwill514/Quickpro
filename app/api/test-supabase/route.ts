import { supabase } from "@/lib/supabase";

export async function POST() {
  const { data, error } = await supabase.from("quotes").insert({
    job: "test job",
    quote: "test quote",
    budget: "standard",
    urgency: "normal",
    client_type: "startup",
  });

  console.log("SUPABASE DATA:", data);
  console.log("SUPABASE ERROR:", error);

  return Response.json({ ok: true, data, error });
}
