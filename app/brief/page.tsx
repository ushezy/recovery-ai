import Link from "next/link";
import {
  BriefAction,
  BriefGreeting,
  BriefLayout,
  BriefRecommendation,
  BriefRecoveryScore,
  BriefSnapshot,
  MOCK_MORNING_BRIEF,
} from "@/components/brief";

export default function BriefPage() {
  const { greeting, recovery, snapshot, recommendation, action } =
    MOCK_MORNING_BRIEF;

  const snapshotItems = [
    { label: "Focus" as const, value: snapshot.focus },
    { label: "Energy" as const, value: snapshot.energy },
    { label: "Mood" as const, value: snapshot.mood },
  ];

  return (
    <BriefLayout>
      <BriefGreeting name={greeting.name} subtitle={greeting.subtitle} />

      <BriefRecoveryScore
        score={recovery.score}
        level={recovery.level}
        insights={recovery.insights}
      />

      <BriefSnapshot items={snapshotItems} />

      <BriefRecommendation text={recommendation} />

      <BriefAction lines={action.lines} />

      <footer className="mt-14 text-center">
        <Link
          href="/check-in"
          className="text-xs font-light tracking-wide text-[rgba(243,241,236,0.42)] transition-colors duration-500 hover:text-[rgba(243,241,236,0.62)]"
        >
          Check in again tomorrow
        </Link>
      </footer>
    </BriefLayout>
  );
}
