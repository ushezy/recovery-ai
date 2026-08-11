import { NextResponse } from "next/server";
import { generateMorningBrief } from "@/lib/openai/morningBrief";
import type { GenerateMorningBriefInput } from "@/lib/openai/morningBrief";
import { getAuthenticatedUserId } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as GenerateMorningBriefInput;
    const result = await generateMorningBrief(body);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
