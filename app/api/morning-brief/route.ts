import { NextResponse } from "next/server";
import { mergeAiIntoBrief } from "@/lib/morning-brief/compose";
import { generateMorningBrief } from "@/lib/openai/morningBrief";
import { runRecoveryEngine } from "@/lib/recovery";
import { createClient, getAuthenticatedUserId } from "@/lib/supabase/server";
import type { Json } from "@/lib/supabase/database.types";
import type { MorningBriefOutput } from "@/lib/recovery";

const MODEL = "gpt-5-mini";

type RequestBody = { checkInId?: number };

function toAiInput(engine: MorningBriefOutput) {
  return {
    score: engine.recovery.score,
    level: engine.recovery.level,
    snapshot: `Focus: ${engine.snapshot.focus}. Energy: ${engine.snapshot.energy}. Mood: ${engine.snapshot.mood}.`,
    insights: engine.recovery.insights,
  };
}

export async function POST(request: Request) {
  try {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json().catch(() => ({}))) as RequestBody;
    if (body.checkInId !== undefined && !Number.isSafeInteger(body.checkInId)) {
      return NextResponse.json({ success: false, error: "Invalid check-in" }, { status: 400 });
    }

    const supabase = await createClient();
    let checkInQuery = supabase
      .from("check_ins")
      .select("id, check_in_date, sleep, energy, mood, goal")
      .eq("user_id", userId);

    if (body.checkInId !== undefined) {
      checkInQuery = checkInQuery.eq("id", body.checkInId);
    }

    const { data: checkIn, error: checkInError } = await checkInQuery
      .order("check_in_date", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (checkInError) throw checkInError;
    if (!checkIn) {
      return NextResponse.json({ success: false, error: "Check-in not found" }, { status: 404 });
    }

    const { data: existing, error: existingError } = await supabase
      .from("morning_briefs")
      .select("output")
      .eq("user_id", userId)
      .eq("check_in_id", checkIn.id)
      .maybeSingle();

    if (existingError) throw existingError;
    if (existing) {
      return NextResponse.json({ success: true, result: existing.output, cached: true });
    }

    const engine = runRecoveryEngine({
      sleep: checkIn.sleep,
      energy: checkIn.energy,
      mood: checkIn.mood,
      goal: checkIn.goal,
    });
    const ai = await generateMorningBrief(toAiInput(engine));
    const output = mergeAiIntoBrief(engine, ai);

    const { error: insertError } = await supabase.from("morning_briefs").insert({
      user_id: userId,
      check_in_id: checkIn.id,
      brief_date: checkIn.check_in_date,
      title: ai.title,
      summary: ai.summary,
      action: ai.action,
      output: output as unknown as Json,
      model: MODEL,
    });

    if (insertError?.code === "23505") {
      const { data: concurrent } = await supabase
        .from("morning_briefs")
        .select("output")
        .eq("user_id", userId)
        .eq("check_in_id", checkIn.id)
        .single();

      if (concurrent) {
        return NextResponse.json({ success: true, result: concurrent.output, cached: true });
      }
    }

    if (insertError) throw insertError;
    return NextResponse.json({ success: true, result: output, cached: false });
  } catch (error) {
    console.error("[morning-brief] request failed", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json(
      { success: false, error: "Unable to prepare your morning brief" },
      { status: 500 },
    );
  }
}
