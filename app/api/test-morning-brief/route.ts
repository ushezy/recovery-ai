import { NextResponse } from "next/server";
import { generateMorningBrief } from "@/lib/openai/morningBrief";
import { getAuthenticatedUserId } from "@/lib/supabase/server";

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
  if (process.env.VERCEL_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }

  if (!(await getAuthenticatedUserId())) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

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
