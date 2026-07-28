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
        insight={recovery.insight}
      />

      <BriefSnapshot items={snapshotItems} />

      <BriefRecommendation text={recommendation} />

      <BriefAction text={action} />

      <footer className="mt-20 text-center">
        <Link
          href="/check-in"
          className="text-sm font-light text-white/30 transition-colors duration-500 hover:text-white/50"
        >
          Check in again
        </Link>
      </footer>
    </BriefLayout>
  );
}
