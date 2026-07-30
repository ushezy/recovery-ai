import { brief } from "./styles";
import type { RecoveryLevel } from "./types";

type BriefRecoveryScoreProps = {
  score: number;
  level: RecoveryLevel;
  insights: string[];
};

export function BriefRecoveryScore({
  score,
  level,
  insights,
}: BriefRecoveryScoreProps) {
  return (
    <section className={`${brief.section} text-center`}>
      <p className={brief.score} aria-label={`Recovery score ${score}`}>
        {score}
      </p>
      <p className={`mt-8 ${brief.caption} tracking-wide ${brief.textSecondary}`}>
        {level}
      </p>
      <div className="mx-auto mt-14 flex max-w-[16rem] flex-col gap-7">
        {insights.map((sentence) => (
          <p key={sentence} className={`${brief.bodyLight} ${brief.textMuted}`}>
            {sentence}
          </p>
        ))}
      </div>
    </section>
  );
}
