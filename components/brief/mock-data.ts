import type { MorningBrief } from "./types";

export const MOCK_MORNING_BRIEF: MorningBrief = {
  greeting: {
    name: "Alex",
    subtitle: "Here's your read on today.",
  },
  recovery: {
    score: 86,
    level: "Strong recovery",
    insight:
      "You rested well. This morning suits your most important work.",
  },
  snapshot: {
    focus: "Sharp",
    energy: "Steady",
    mood: "Calm",
  },
  recommendation:
    "Your clearest hours are before noon. Protect that window for work that requires depth. This afternoon, lighter tasks and a short walk will help you sustain momentum without forcing it.",
  action: "Block ninety minutes this morning for what matters most.",
};
