import { labelForFocus } from "./score";
import type {
  EngineOptions,
  MorningBriefAction,
  MorningBriefOutput,
  MorningBriefSnapshot,
  RecoveryContext,
  TimelineItem,
} from "./types";

function buildSnapshot(context: RecoveryContext): MorningBriefSnapshot {
  const { input, labels } = context;

  return {
    focus: labelForFocus(input.sleep, input.energy),
    energy: labels.energy,
    mood: labels.mood,
  };
}

function buildTimeline(context: RecoveryContext): TimelineItem[] {
  const { input, score } = context;

  if (score.score >= 85) {
    return [
      { period: "Morning", note: "Your clearest window." },
      { period: "Afternoon", note: "Lighter work." },
      { period: "Evening", note: "Rest early." },
    ];
  }

  if (score.score >= 70) {
    return [
      { period: "Morning", note: "Best for focused tasks." },
      { period: "Afternoon", note: "Stay flexible." },
      { period: "Evening", note: "Wind down on time." },
    ];
  }

  if (score.score >= 55) {
    return [
      { period: "Morning", note: "One priority at a time." },
      { period: "Afternoon", note: "Keep it light." },
      { period: "Evening", note: "Recovery over output." },
    ];
  }

  if (input.energy <= 4) {
    return [
      { period: "Morning", note: "Start slowly." },
      { period: "Afternoon", note: "Rest when needed." },
      { period: "Evening", note: "Sleep is the priority." },
    ];
  }

  return [
    { period: "Morning", note: "Essentials only." },
    { period: "Afternoon", note: "Reduce demands." },
    { period: "Evening", note: "Protect rest." },
  ];
}

function buildAction(context: RecoveryContext): MorningBriefAction {
  const { input, score } = context;
  const goal = input.goal.trim();

  if (goal) {
    return {
      lines: ["Hold one intention:", goal, "Everything else can wait."],
    };
  }

  if (score.score >= 85) {
    return {
      lines: ["Protect the first", "90 minutes", "of your morning."],
    };
  }

  if (score.score >= 70) {
    return {
      lines: ["Choose one thing", "that matters today", "and finish it."],
    };
  }

  if (score.score >= 55) {
    return {
      lines: [
        "Keep today small.",
        "Progress beats pressure.",
        "Rest counts too.",
      ],
    };
  }

  return {
    lines: [
      "Do less than you think.",
      "Care for the basics.",
      "Let the day be quiet.",
    ],
  };
}

/** Rule-based Morning Brief generation — swap for OpenAI without changing callers */
export function buildMorningBrief(
  context: RecoveryContext,
  options: EngineOptions = {},
): MorningBriefOutput {
  return {
    greeting: {
      name: options.name ?? "",
      subtitle: "Here's your read on today.",
    },
    recovery: context.score,
    snapshot: buildSnapshot(context),
    timeline: buildTimeline(context),
    action: buildAction(context),
  };
}
