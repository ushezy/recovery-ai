import { NextResponse } from "next/server";
import { openai } from "@/lib/openai/client";
import { testOpenAI } from "@/lib/openai/test";

export async function GET() {
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
