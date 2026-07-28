type BriefRecommendationProps = {
  text: string;
};

export function BriefRecommendation({ text }: BriefRecommendationProps) {
  return (
    <section className="mb-16 md:mb-20">
      <p className="mb-5 text-xs font-light text-white/25">
        Today&apos;s recommendation
      </p>
      <p className="text-base font-light leading-relaxed text-white/55 md:text-lg md:leading-8">
        {text}
      </p>
    </section>
  );
}
