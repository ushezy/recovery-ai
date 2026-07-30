import { brief } from "./styles";
import type { TimelineItem } from "./types";

type BriefRecommendationProps = {
  items: TimelineItem[];
};

export function BriefRecommendation({ items }: BriefRecommendationProps) {
  return (
    <section className={brief.section}>
      <div className="space-y-6">
        {items.map((block) => (
          <div key={block.period} className="flex gap-5">
            <p className={brief.timelinePeriod}>{block.period}</p>
            <p className={brief.supporting}>{block.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
