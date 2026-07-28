type BriefActionProps = {
  text: string;
};

export function BriefAction({ text }: BriefActionProps) {
  return (
    <section>
      <p className="mb-5 text-xs font-light text-white/25">One small action</p>
      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-5 backdrop-blur-sm">
        <p className="text-sm font-light leading-relaxed text-white/50 md:text-base">
          {text}
        </p>
      </div>
    </section>
  );
}
