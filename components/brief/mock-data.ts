import type { MorningBrief } from "./types";

export const MOCK_MORNING_BRIEF: MorningBrief = {
  greeting: {
    name: "Alex",
    subtitle: "Here's your read on today.",
  },
  recovery: {
    score: 86,
    level: "Excellent Recovery",
    insights: [
      "You rested well.",
      "Today favors focused work.",
      "Protect your energy.",
    ],
  },
  snapshot: {
    focus: "Sharp",
    energy: "Steady",
    mood: "Calm",
  },
  recommendation:
    "Morning is your clearest window. Afternoon suits lighter work. Evening calls for rest.",
  action: {
    lines: ["Protect the first", "90 minutes", "of your morning."],
  },
};
