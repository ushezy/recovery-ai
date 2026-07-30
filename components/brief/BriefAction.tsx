import { brief } from "./styles";

type BriefActionProps = {
  lines: string[];
};

export function BriefAction({ lines }: BriefActionProps) {
  return (
    <section className="pt-2">
      <p className={`mb-8 ${brief.label}`}>Today&apos;s action</p>
      <div className={`${brief.card} px-7 py-12`}>
        <div className="flex flex-col gap-5 text-center">
          {lines.map((line) => (
            <p
              key={line}
              className={`${brief.bodyLight} ${brief.textSecondary}`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
