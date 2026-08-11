"use server";

import { getAuthenticatedUserId, createClient } from "@/lib/supabase/server";
import { runRecoveryEngine, type CheckInInput } from "@/lib/recovery";

const ALLOWED_METRICS = new Set([2, 4, 6, 8, 10]);

function isValidDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isValidInput(input: unknown): input is CheckInInput {
  if (!input || typeof input !== "object") return false;
  const value = input as Record<string, unknown>;

  return (
    typeof value.sleep === "number" &&
    ALLOWED_METRICS.has(value.sleep) &&
    typeof value.energy === "number" &&
    ALLOWED_METRICS.has(value.energy) &&
    typeof value.mood === "number" &&
    ALLOWED_METRICS.has(value.mood) &&
    typeof value.goal === "string" &&
    value.goal.length <= 500
  );
}

export async function saveCheckIn(input: unknown, checkInDate: unknown) {
  const userId = await getAuthenticatedUserId();
  if (!userId) return { success: false as const, error: "Unauthorized" };

  if (!isValidInput(input) || typeof checkInDate !== "string" || !isValidDate(checkInDate)) {
    return { success: false as const, error: "Invalid check-in data" };
  }

  const engine = runRecoveryEngine(input);
  const supabase = await createClient();
  const { data, error } = await supabase.from("check_ins").upsert(
    {
      user_id: userId,
      check_in_date: checkInDate,
      sleep: input.sleep,
      energy: input.energy,
      mood: input.mood,
      goal: input.goal.trim(),
      recovery_score: engine.recovery.score,
      recovery_level: engine.recovery.level,
      insights: engine.recovery.insights,
    },
    { onConflict: "user_id,check_in_date" },
  ).select("id").single();

  if (error || !data) {
    console.error("[check-in] persistence failed", { code: error?.code });
    return { success: false as const, error: "Unable to save your check-in" };
  }

  return { success: true as const, checkInId: data.id };
}
