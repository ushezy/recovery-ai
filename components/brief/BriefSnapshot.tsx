import type { SnapshotItem } from "./types";

type BriefSnapshotProps = {
  items: SnapshotItem[];
};

function SnapshotCard({ label, value }: SnapshotItem) {
  return (
    <div className="flex-1 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] px-4 py-5 backdrop-blur-[2px]">
      <p className="text-[10px] font-light text-[rgba(243,241,236,0.42)]">
        {label}
      </p>
      <p className="mt-2.5 text-sm font-light text-[rgba(243,241,236,0.72)]">
        {value}
      </p>
    </div>
  );
}

export function BriefSnapshot({ items }: BriefSnapshotProps) {
  return (
    <section className="mb-20 md:mb-24">
      <p className="mb-6 text-[10px] font-light uppercase tracking-[0.22em] text-[rgba(243,241,236,0.42)]">
        Today&apos;s snapshot
      </p>
      <div className="flex gap-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        {items.map((item) => (
          <SnapshotCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}
