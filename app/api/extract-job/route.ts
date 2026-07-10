import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const description = body.description;

    if (!description) {

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new OpenAI({
    apiKey,
  });
}
      return Response.json(
        {
          error: "No job description provided"
    const openai = getOpenAIClient();
    if (!openai) {
      return Response.json(
        {
          error: "AI is currently unavailable. OpenAI API key is not configured."
        },
        {
          status: 503
        }
      );
    }
        },
        {
          status:400
        }
      );

    }

    const response =
      await openai.chat.completions.create({

        model:"gpt-4o-mini",

        messages:[

          {
            role:"system",
            content:`
            You are an expert contractor estimator.

            Analyze the job description.

            Return:

            Trade:
            Project:
            Scope:
            Materials:
            Labour Estimate:
            Questions Needed:
            `
          },

          {
            role:"user",
            content:description
          }

        ]

      });

    const summary =
      response.choices[0].message.content;

    return Response.json({

      summary

    });

  } catch(error:any){

    console.error(error);

    return Response.json(

      {
        error:error.message || "Server error"
      },

      {
        status:500
      }

    );

  }
}
