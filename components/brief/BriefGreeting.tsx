import { brief } from "./styles";

type BriefGreetingProps = {
  name: string;
  subtitle: string;
};

export function BriefGreeting({ name, subtitle }: BriefGreetingProps) {
  return (
    <header className="mb-20 md:mb-24">
      <p className={`${brief.greeting} ${brief.textMuted}`}>
        Good morning
      </p>
      {(name || subtitle) && (
        <p className={`mt-3 text-xs font-light tracking-wide ${brief.textMuted}`}>
          {name ? `${name} · ` : ""}
          {subtitle}
        </p>
      )}
    </header>
  );
}
