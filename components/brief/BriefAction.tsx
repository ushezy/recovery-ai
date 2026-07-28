type BriefActionProps = {
  lines: string[];
};

export function BriefAction({ lines }: BriefActionProps) {
  return (
    <section className="py-4">
      <p className="mb-8 text-[10px] font-light uppercase tracking-[0.22em] text-[rgba(243,241,236,0.42)]">
        Today&apos;s action
      </p>
      <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.025)] px-6 py-10 backdrop-blur-[2px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-3 text-center">
          {lines.map((line) => (
            <p
              key={line}
              className="text-base font-light leading-relaxed text-[rgba(243,241,236,0.72)] md:text-lg"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
