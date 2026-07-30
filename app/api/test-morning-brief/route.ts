import { NextResponse } from "next/server";
import { generateMorningBrief } from "@/lib/openai/morningBrief";

const TEST_DATA = {
  score: 84,
  level: "Good",
  snapshot: "Recovery is improving after two consistent nights of sleep.",
  insights: [
    "Sleep duration increased by 40 minutes.",
    "Stress level remained stable.",
    "Morning readiness is above average.",
  ],
};

export async function GET() {
  try {
    const result = await generateMorningBrief(TEST_DATA);

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
