import OpenAI from "openai";
import { supabase } from "@/lib/supabase";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

export async function POST(req: Request) {
  if (!openai) {
    return Response.json(
      {
        error:
          "AI features are currently unavailable. Add OpenAI API credentials."
      },
      {
        status:503
      }
    );
  }

  const {
    summary,
  } = await req.json();

  console.time("pricing");

  const { data: pricingData } = await supabase
    .from("trade_pricing")
    .select(
"trade,category,item,average_cost,labour_hours"
)
    .eq("trade", "Electrical")
    .limit(5);

  console.timeEnd("pricing");

  const messages = [
    "Analyzing project...",
    "Identifying trade...",
    "Calculating materials...",
    "Building estimate..."
  ];

  const controller = new AbortController();

  setTimeout(() => controller.abort(), 15000);

  console.time("AI");

  const response =
    await openai.chat.completions.create(
      {
        model: "gpt-4o-mini",

        messages: [
          {
            role: "system",

            content: `
        You are an expert contractor estimator.

        Analyze this job and create a quote.

        Return JSON only:

        {
        project:"",
        trade:"",
        scope:[],
        materials:[],
        labourHours:"",
        estimatedPrice:"",
        timeline:""
        }

`,
          },

          {
            role: "user",
            content: `
Job summary:
${summary}

Trade pricing data:
${JSON.stringify(pricingData?.slice(0,5) ?? [], null, 2)}
`,
          },
        ],
      },
      { signal: controller.signal }
    );

  console.timeEnd("AI");

  const quote =
    JSON.parse(
      response.choices[0].message.content || "{}",
    );

  return Response.json(quote);
}
