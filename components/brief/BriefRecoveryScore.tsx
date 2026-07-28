type BriefRecoveryScoreProps = {
  score: number;
  level: string;
  insights: string[];
};

export function BriefRecoveryScore({
  score,
  level,
  insights,
}: BriefRecoveryScoreProps) {
  return (
    <section className="mb-20 text-center md:mb-24">
      <p
        className="text-[5.5rem] font-extralight tabular-nums leading-[0.9] tracking-[-0.04em] text-[#F3F1EC] md:text-[6.5rem]"
        style={{ fontWeight: 200 }}
        aria-label={`Recovery score ${score}`}
      >
        {score}
      </p>
      <p className="mt-6 text-sm font-light tracking-wide text-[rgba(243,241,236,0.72)]">
        {level}
      </p>
      <div className="mx-auto mt-12 flex max-w-xs flex-col gap-5">
        {insights.map((sentence) => (
          <p
            key={sentence}
            className="text-base font-light leading-relaxed text-[rgba(243,241,236,0.72)] md:text-[17px]"
          >
            {sentence}
          </p>
        ))}
      </div>
    </section>
  );
}
