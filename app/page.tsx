import Link from "next/link";

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
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111F] via-[#050816] to-[#0E1A2B]" />
        <div className="absolute left-1/2 top-0 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-blue-400/[0.04] blur-[120px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
              <div className="h-2 w-2 rounded-full bg-white/80" />
            </div>
            <span className="text-sm font-medium tracking-tight md:text-base">
              Recovery AI
            </span>
          </div>

          <Link
            href="/check-in"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors duration-300 hover:bg-gray-50 md:px-5 md:py-2.5"
          >
            Begin
          </Link>
        </div>
      </header>

      <main>
        <section className="relative px-6 pb-20 md:px-10 md:pb-28 lg:px-12">
          <div className="mx-auto max-w-2xl pt-20 text-center md:pt-28 lg:pt-32">
            <p className="mb-10 text-xs font-light tracking-wide text-white/35">
              Your coach
            </p>

            <h1 className="text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl lg:text-[5.25rem]">
              Know your state.
              <br />
              <span className="text-white/60">Move with clarity.</span>
            </h1>

            <p className="mx-auto mt-10 max-w-md text-base font-light leading-relaxed text-white/45 md:mt-12 md:text-lg">
              A calm coach that listens first — then helps you prepare for the
              day ahead.
            </p>

            <div className="mt-14 md:mt-16">
              <Link
                href="/check-in"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-gray-50 md:text-base"
              >
                Begin your morning
              </Link>
            </div>
          </div>

          {/* Brief preview — coach speaking, not a dashboard */}
          <div className="relative z-10 mx-auto -mt-4 max-w-lg md:-mt-10">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-blue-400/[0.03] blur-2xl"
            />
            <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.025] px-8 py-10 backdrop-blur-sm md:px-10 md:py-12">
              <p className="text-sm font-light text-white/35">Good morning.</p>
              <p className="mt-6 text-lg font-light leading-relaxed text-white/65 md:text-xl md:leading-8">
                {PREVIEW.insight}
              </p>
              <div className="mt-10 space-y-5 border-t border-white/[0.06] pt-10">
                {PREVIEW.timeline.map((block) => (
                  <div key={block.period} className="flex gap-5">
                    <span className="w-20 shrink-0 text-sm font-light text-white/30">
                      {block.period}
                    </span>
                    <span className="text-sm font-light text-white/45">
                      {block.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-32 md:px-10 md:py-40 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Start with clarity.
            </h2>
            <div className="mt-12 md:mt-14">
              <Link
                href="/check-in"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-medium text-black transition-colors duration-300 hover:bg-gray-50"
              >
                Begin your morning
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/[0.06] px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm font-medium tracking-tight">Recovery AI</p>
          <nav className="flex items-center gap-8 text-sm text-white/35">
            <a href="#" className="transition-colors hover:text-white/60">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white/60">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white/60">
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
