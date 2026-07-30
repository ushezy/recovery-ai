import Link from "next/link";
import type { MorningBrief } from "./types";
import { BriefAction } from "./BriefAction";
import { BriefGreeting } from "./BriefGreeting";
import { BriefLayout } from "./BriefLayout";
import { BriefRecommendation } from "./BriefRecommendation";
import { BriefRecoveryScore } from "./BriefRecoveryScore";
import { BriefSnapshot } from "./BriefSnapshot";
import { brief } from "./styles";

type MorningBriefViewProps = {
  data: MorningBrief;
};

export function MorningBriefView({ data }: MorningBriefViewProps) {
  const { greeting, recovery, snapshot, timeline, action } = data;

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

      <BriefRecommendation items={timeline} />

      <BriefAction lines={action.lines} />

      <footer className="mt-14 text-center">
        <Link href="/check-in" className={brief.link}>
          Check in again tomorrow
        </Link>
      </footer>
    </BriefLayout>
  );
}
