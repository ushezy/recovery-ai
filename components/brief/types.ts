export type {
  MorningBriefAction,
  MorningBriefGreeting,
  MorningBriefOutput as MorningBrief,
  MorningBriefSnapshot,
  RecoveryLevel,
  TimelineItem,
} from "@/lib/recovery";

export type SnapshotItem = {
  label: "Focus" | "Energy" | "Mood";
  value: string;
};
