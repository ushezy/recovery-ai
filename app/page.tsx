import Link from "next/link";
import { brief } from "@/components/brief/styles";

const PREVIEW = {
  insight:
    "You rested well. Mornings like this suit focused work — you'll know where to place your energy.",
  timeline: [
    { period: "Morning", note: "Your clearest window." },
    { period: "Afternoon", note: "Lighter work." },
    { period: "Evening", note: "Wind down early." },
  ],
};

export default function Home() {
  return (
    <div className={`${brief.shell} overflow-x-hidden`}>
      <header className={`sticky top-0 z-50 border-b ${brief.border}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <div className="flex items-center gap-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${brief.card}`}>
              <div className={`h-2 w-2 rounded-full ${brief.textSecondary}`} />
            </div>
            <span className={`text-sm font-light tracking-tight md:text-base ${brief.textPrimary}`}>
              Recovery AI
            </span>
          </div>

          <Link
            href="/check-in"
            className={`inline-flex items-center justify-center ${brief.cta} px-4 py-2 text-sm md:px-5 md:py-2.5`}
          >
            Begin
          </Link>
        </div>
      </header>

      <main>
        <section className="relative px-6 pb-24 md:px-10 md:pb-32 lg:px-12">
          <div className="relative z-0 mx-auto max-w-2xl pb-20 pt-20 text-center md:pb-24 md:pt-28 lg:pt-32">
            <p className={`mb-10 ${brief.label}`}>Your coach</p>

            <h1 className={`text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-[5.25rem] ${brief.textPrimary}`}>
              Know your state.
              <br />
              <span className={brief.textSecondary}>Move with clarity.</span>
            </h1>

            <p className={`mx-auto mt-10 max-w-md ${brief.bodyLight} md:mt-12 ${brief.textMuted}`}>
              A calm coach that listens first — then helps you prepare for the
              day ahead.
            </p>

            <div className="mt-14 md:mt-16">
              <Link
                href="/check-in"
                className={`inline-flex items-center justify-center ${brief.cta} px-8 py-3.5 text-sm md:text-base`}
              >
                Begin your morning
              </Link>
            </div>
          </div>

          {/* Brief preview — matches Morning Brief greeting + timeline */}
          <div className="relative z-10 mx-auto -mt-12 max-w-lg sm:-mt-16">
            <div className={`relative ${brief.card} px-8 py-10 md:px-10 md:py-12`}>
              <p className={`${brief.greeting} ${brief.textMuted}`}>Good morning.</p>
              <p className={`mt-6 ${brief.bodyLight} ${brief.textSecondary}`}>
                {PREVIEW.insight}
              </p>
              <div className={`mt-10 space-y-6 border-t pt-10 ${brief.border}`}>
                {PREVIEW.timeline.map((block) => (
                  <div key={block.period} className="flex gap-5">
                    <p className={brief.timelinePeriod}>{block.period}</p>
                    <p className={brief.supporting}>{block.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={`text-3xl font-light tracking-tight md:text-4xl ${brief.textPrimary}`}>
              Start with clarity.
            </h2>
            <div className="mt-12 md:mt-14">
              <Link
                href="/check-in"
                className={`inline-flex items-center justify-center ${brief.cta} px-10 py-4 text-base`}
              >
                Begin your morning
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={`relative border-t px-6 py-10 md:px-10 lg:px-12 ${brief.border}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p className={`text-sm font-light tracking-tight ${brief.textPrimary}`}>Recovery AI</p>
          <nav className={`flex items-center gap-8 text-sm font-light ${brief.textMuted}`}>
            <a href="#" className={`${brief.link} text-sm`}>
              Privacy
            </a>
            <a href="#" className={`${brief.link} text-sm`}>
              Terms
            </a>
            <a href="#" className={`${brief.link} text-sm`}>
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
