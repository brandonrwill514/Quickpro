import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const text = typeof body?.text === "string" ? body.text : "";

    if (!text.trim()) {
      return NextResponse.json({ ok: false, error: "No text provided" }, { status: 400 });
    }

    const summary = text
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 180);

    return NextResponse.json({ ok: true, summary });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to extract job" }, { status: 500 });
  }
}
