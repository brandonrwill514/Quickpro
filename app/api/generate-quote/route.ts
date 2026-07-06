import { supabase } from "@/lib/supabase";

export async function GET() {
  return Response.json({ ok: true, message: "route works" });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const job = typeof body?.job === "string" && body.job.trim() ? body.job : "your project";
  const budget = typeof body?.budget === "string" && body.budget.trim() ? body.budget : "unknown";
  const urgency = typeof body?.urgency === "string" && body.urgency.trim() ? body.urgency : "standard";
  const clientType = typeof body?.clientType === "string" && body.clientType.trim() ? body.clientType : "general";

  try {
    const quote = `Estimated project cost for ${job}: $500 - $2000 (AI mock response) | Budget: ${budget} | Urgency: ${urgency} | Client: ${clientType}`;

    console.log("AI RESPONSE:", quote);

    try {
      await supabase.from("Quotes").insert({
        name: job || "Untitled project",
        job,
        quote,
        urgency,
        client_type: clientType,
      });
    } catch (saveError) {
      console.error("Failed to save quote to Supabase", saveError);
    }

    return Response.json({ ok: true, quote });
  } catch (error) {
    console.error("OpenAI quote generation failed", error);
    return Response.json(
      {
        ok: false,
        error: "Failed to generate quote with OpenAI",
      },
      { status: 500 }
    );
  }
}
