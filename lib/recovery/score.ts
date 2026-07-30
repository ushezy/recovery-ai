import type { CheckInInput, MetricKey, RecoveryLevel, RecoveryScoreResult } from "./types";

const SLEEP_LABELS: Record<number, string> = {
  2: "Rough night",
  4: "Uneven",
  6: "Adequate",
  8: "Restful",
  10: "Deep rest",
};

const ENERGY_LABELS: Record<number, string> = {
  2: "Low",
  4: "Emerging",
  6: "Steady",
  8: "Good",
  10: "Strong",
};

const MOOD_LABELS: Record<number, string> = {
  2: "Heavy",
  4: "Quiet",
  6: "Even",
  8: "Light",
  10: "Clear",
};

const METRIC_MIN = 2;
const METRIC_MAX = 10;

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function averageMetric(input: CheckInInput): number {
  return (input.sleep + input.energy + input.mood) / 3;
}

function resolveLevel(score: number): RecoveryLevel {
  if (score >= 85) return "Excellent Recovery";
  if (score >= 70) return "Good Recovery";
  if (score >= 55) return "Moderate Recovery";
  if (score >= 40) return "Low Recovery";
  return "Needs Rest";
}

function buildInsights(input: CheckInInput, score: number): string[] {
  const { sleep, energy, mood } = input;

  if (score >= 85) {
    return [
      "You rested well.",
      "Today favors focused work.",
      "Protect your energy.",
    ];
  }

  if (score >= 70) {
    return [
      sleep >= 6 ? "Rest was sufficient." : "Sleep was lighter than ideal.",
      energy >= 6 ? "Energy is workable." : "Pace yourself this morning.",
      mood >= 6 ? "Your mood is steady." : "Go gently with yourself.",
    ];
  }

  if (score >= 55) {
    return [
      sleep <= 4 ? "Recovery is still catching up." : "Rest was mixed.",
      "Keep priorities narrow today.",
      mood <= 4 ? "A quiet day may help." : "Small wins will matter.",
    ];
  }

  if (score >= 40) {
    return [
      "Your body is asking for care.",
      "Light structure beats ambition today.",
      energy <= 4 ? "Conserve what energy you have." : "Move at half pace.",
    ];
  }

  return [
    "Rest comes first today.",
    "Protect the essentials only.",
    mood <= 4 ? "Be patient with how you feel." : "Recovery is the work.",
  ];
}

/** Map check-in metrics (2–10) to a deterministic 0–100 recovery score */
export function calculateRecoveryScore(input: CheckInInput): RecoveryScoreResult {
  const average = averageMetric(input);
  const score = clampScore(
    ((average - METRIC_MIN) / (METRIC_MAX - METRIC_MIN)) * 100,
  );
  const level = resolveLevel(score);
  const insights = buildInsights(input, score);

  return { score, level, insights };
}

export function labelForSleep(value: number): string {
  return SLEEP_LABELS[value] ?? "Adequate";
}

export function labelForEnergy(value: number): string {
  return ENERGY_LABELS[value] ?? "Steady";
}

export function labelForMood(value: number): string {
  return MOOD_LABELS[value] ?? "Even";
}

export function labelForMetric(key: MetricKey, value: number): string {
  switch (key) {
    case "sleep":
      return labelForSleep(value);
    case "energy":
      return labelForEnergy(value);
    case "mood":
      return labelForMood(value);
  }
}

export function labelForFocus(sleep: number, energy: number): string {
  const readiness = (sleep + energy) / 2;

  if (readiness >= 8) return "Sharp";
  if (readiness >= 6) return "Steady";
  if (readiness >= 4) return "Scattered";
  return "Foggy";
}
