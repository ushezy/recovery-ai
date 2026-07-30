import { brief } from "./styles";
import type { SnapshotItem } from "./types";

type BriefSnapshotProps = {
  items: SnapshotItem[];
};

function SnapshotCard({ label, value }: SnapshotItem) {
  return (
    <div className={`${brief.card} flex-1 px-5 py-6`}>
      <p className={`${brief.cardLabel}`}>{label}</p>
      <p className={`mt-3 text-sm font-light ${brief.textSecondary}`}>{value}</p>
    </div>
  );
}

export function BriefSnapshot({ items }: BriefSnapshotProps) {
  return (
    <section className={brief.section}>
      <p className={`mb-6 ${brief.label}`}>Today&apos;s snapshot</p>
      <div className="flex gap-3">
        {items.map((item) => (
          <SnapshotCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}
