/** Raw check-in values from Recovery Scan */
export type CheckInInput = {
  sleep: number;
  energy: number;
  mood: number;
  goal: string;
};

export type MetricKey = "sleep" | "energy" | "mood";

export type RecoveryLevel =
  | "Excellent Recovery"
  | "Good Recovery"
  | "Moderate Recovery"
  | "Low Recovery"
  | "Needs Rest";

export type RecoveryScoreResult = {
  score: number;
  level: RecoveryLevel;
  insights: string[];
};

/** Human-readable labels for each metric */
export type NormalizedLabels = {
  sleep: string;
  energy: string;
  mood: string;
};

/** Normalized engine context — suitable for rules or AI prompts */
export type RecoveryContext = {
  input: CheckInInput;
  score: RecoveryScoreResult;
  labels: NormalizedLabels;
  summary: string;
};

export type TimelineItem = {
  period: string;
  note: string;
};

export type MorningBriefSnapshot = {
  focus: string;
  energy: string;
  mood: string;
};

export type MorningBriefGreeting = {
  name: string;
  subtitle: string;
};

export type MorningBriefAction = {
  lines: string[];
};

/** Full Recovery Engine output consumed by the UI */
export type MorningBriefOutput = {
  greeting: MorningBriefGreeting;
  recovery: RecoveryScoreResult;
  snapshot: MorningBriefSnapshot;
  timeline: TimelineItem[];
  action: MorningBriefAction;
};

export type EngineOptions = {
  name?: string;
};
