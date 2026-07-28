export type MorningBrief = {
  greeting: {
    name: string;
    subtitle: string;
  };
  recovery: {
    score: number;
    level: string;
    insight: string;
  };
  snapshot: {
    focus: string;
    energy: string;
    mood: string;
  };
  recommendation: string;
  action: string;
};

export type SnapshotItem = {
  label: "Focus" | "Energy" | "Mood";
  value: string;
};
