import type { SnapshotItem } from "./types";

type BriefSnapshotProps = {
  items: SnapshotItem[];
};

function SnapshotCard({ label, value }: SnapshotItem) {
  return (
    <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-5 backdrop-blur-sm">
      <p className="text-xs font-light text-white/30">{label}</p>
      <p className="mt-2 text-base font-light text-white/80">{value}</p>
    </div>
  );
}

export function BriefSnapshot({ items }: BriefSnapshotProps) {
  return (
    <section className="mb-16 md:mb-20">
      <p className="mb-5 text-xs font-light text-white/25">Today&apos;s snapshot</p>
      <div className="flex gap-3">
        {items.map((item) => (
          <SnapshotCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}
