type BriefRecoveryScoreProps = {
  score: number;
  level: string;
  insight: string;
};

export function BriefRecoveryScore({
  score,
  level,
  insight,
}: BriefRecoveryScoreProps) {
  return (
    <section className="mb-16 text-center md:mb-20">
      <p
        className="text-7xl font-light tabular-nums leading-none tracking-tight text-white/85 md:text-8xl"
        aria-label={`Recovery score ${score}`}
      >
        {score}
      </p>
      <p className="mt-4 text-sm font-light text-white/40">{level}</p>
      <p className="mx-auto mt-8 max-w-sm text-base font-light leading-relaxed text-white/60 md:text-lg md:leading-8">
        {insight}
      </p>
    </section>
  );
}
