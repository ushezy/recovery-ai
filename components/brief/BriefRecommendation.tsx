type BriefRecommendationProps = {
  text: string;
};

export function BriefRecommendation({ text }: BriefRecommendationProps) {
  return (
    <section className="mb-20 md:mb-24">
      <p className="mb-6 text-[10px] font-light uppercase tracking-[0.22em] text-[rgba(243,241,236,0.42)]">
        Today&apos;s recommendation
      </p>
      <p className="text-sm font-extralight leading-[1.85] text-[rgba(243,241,236,0.42)] md:text-[15px]">
        {text}
      </p>
    </section>
  );
}
