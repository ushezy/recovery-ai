import { buildRecoveryContext } from "./context";
import { buildMorningBrief } from "./recommendation";
import type { CheckInInput, EngineOptions, MorningBriefOutput } from "./types";

export type {
  CheckInInput,
  EngineOptions,
  MetricKey,
  MorningBriefAction,
  MorningBriefGreeting,
  MorningBriefOutput,
  MorningBriefSnapshot,
  NormalizedLabels,
  RecoveryContext,
  RecoveryLevel,
  RecoveryScoreResult,
  TimelineItem,
} from "./types";

export {
  calculateRecoveryScore,
  labelForEnergy,
  labelForFocus,
  labelForMetric,
  labelForMood,
  labelForSleep,
} from "./score";

export { buildRecoveryContext, formatContextForPrompt } from "./context";

export { buildMorningBrief } from "./recommendation";

/** Run the full Recovery Engine pipeline from raw check-in input */
export function runRecoveryEngine(
  input: CheckInInput,
  options: EngineOptions = {},
): MorningBriefOutput {
  const context = buildRecoveryContext(input);
  return buildMorningBrief(context, options);
}
