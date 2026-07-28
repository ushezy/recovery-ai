type BriefGreetingProps = {
  name: string;
  subtitle: string;
};

export function BriefGreeting({ name, subtitle }: BriefGreetingProps) {
  return (
    <header className="mb-16 md:mb-20">
      <p className="text-[11px] font-light uppercase tracking-[0.28em] text-[rgba(243,241,236,0.42)]">
        Good morning
      </p>
      <p className="mt-3 text-xs font-light tracking-wide text-[rgba(243,241,236,0.42)]">
        {name ? `${name} · ` : ""}
        {subtitle}
      </p>
    </header>
  );
}
