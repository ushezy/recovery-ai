import { calculateRecoveryScore, labelForMetric } from "./score";
import type { CheckInInput, NormalizedLabels, RecoveryContext } from "./types";

function buildSummary(
  score: number,
  labels: NormalizedLabels,
  goal: string,
): string {
  const goalLine = goal.trim() ? ` Today's intention: ${goal.trim()}.` : "";

  return `Recovery score ${score}. Sleep: ${labels.sleep}. Energy: ${labels.energy}. Mood: ${labels.mood}.${goalLine}`;
}

/** Convert raw check-in answers into a normalized context object */
export function buildRecoveryContext(input: CheckInInput): RecoveryContext {
  const score = calculateRecoveryScore(input);
  const labels: NormalizedLabels = {
    sleep: labelForMetric("sleep", input.sleep),
    energy: labelForMetric("energy", input.energy),
    mood: labelForMetric("mood", input.mood),
  };

  return {
    input,
    score,
    labels,
    summary: buildSummary(score.score, labels, input.goal),
  };
}

/** Plain-text context for a future OpenAI coach prompt */
export function formatContextForPrompt(context: RecoveryContext): string {
  const { input, score, labels } = context;

  return [
    "Morning check-in:",
    `- Sleep: ${labels.sleep} (${input.sleep}/10)`,
    `- Energy: ${labels.energy} (${input.energy}/10)`,
    `- Mood: ${labels.mood} (${input.mood}/10)`,
    input.goal.trim()
      ? `- Today's intention: ${input.goal.trim()}`
      : "- Today's intention: not specified",
    "",
    `Recovery score: ${score.score} (${score.level})`,
    `Insights: ${score.insights.join(" ")}`,
  ].join("\n");
}
