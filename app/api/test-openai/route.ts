import { NextResponse } from "next/server";
import { testOpenAI } from "@/lib/openai/test";
import { getAuthenticatedUserId } from "@/lib/supabase/server";

export async function GET() {
  if (process.env.VERCEL_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }

  if (!(await getAuthenticatedUserId())) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await testOpenAI();

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
