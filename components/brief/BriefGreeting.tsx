type BriefGreetingProps = {
  name: string;
  subtitle: string;
};

export function BriefGreeting({ name, subtitle }: BriefGreetingProps) {
  return (
    <header className="mb-14 md:mb-16">
      <p className="text-xl font-light text-white/50 md:text-2xl">
        Good morning{name ? `, ${name}` : ""}.
      </p>
      <p className="mt-2 text-sm font-light text-white/30">{subtitle}</p>
    </header>
  );
}
