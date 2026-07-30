import { NextResponse } from "next/server";
import { generateMorningBrief } from "@/lib/openai/morningBrief";
import type { GenerateMorningBriefInput } from "@/lib/openai/morningBrief";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GenerateMorningBriefInput;
    const result = await generateMorningBrief(body);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
