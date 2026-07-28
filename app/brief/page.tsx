const RECOVERY_SCORE = 82;

const RECOMMENDATIONS = [
  "Complete your most important task before noon.",
  "Take a 20-minute walk after lunch.",
  "Stay hydrated throughout the day.",
  "Avoid multitasking during deep work.",
];

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8 ${className}`}
    >
      {children}
    </section>
  );
}

export default function BriefPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black px-6 py-12 text-white">
      <div className="mx-auto w-full max-w-2xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Good Morning 👋
          </h1>
          <p className="mt-3 text-xl text-gray-400">
            Here&apos;s your personalized AI Morning Brief.
          </p>
        </header>

        <div className="space-y-5">
          <GlassCard className="text-center">
            <p className="text-7xl font-extrabold tracking-tight tabular-nums md:text-8xl">
              {RECOVERY_SCORE}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-gray-400">
              Recovery Score
            </p>
            <div className="mt-8">
              <div className="h-2 overflow-hidden rounded-full bg-gray-800/80">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gray-200 to-white transition-all"
                  style={{ width: `${RECOVERY_SCORE}%` }}
                />
              </div>
              <p className="mt-2 text-right text-xs tabular-nums text-gray-500">
                {RECOVERY_SCORE}%
              </p>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Today&apos;s Outlook
            </h2>
            <p className="mt-4 text-xl font-medium leading-relaxed text-gray-100">
              Today looks like a high-focus day.
            </p>
            <p className="mt-3 leading-relaxed text-gray-400">
              Your recovery and energy levels are above average.
            </p>
          </GlassCard>

          <GlassCard>
            <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400">
              AI Recommendations
            </h2>
            <ul className="mt-5 space-y-4">
              {RECOMMENDATIONS.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-gray-300 leading-relaxed"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Quote of the Day
            </h2>
            <blockquote className="mt-5 text-xl font-medium italic leading-relaxed text-gray-200">
              &ldquo;Small improvements every day lead to remarkable
              results.&rdquo;
            </blockquote>
          </GlassCard>
        </div>

        <button
          type="button"
          className="mt-10 w-full rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02] hover:bg-gray-200 active:scale-[0.98]"
        >
          Start My Day →
        </button>
      </div>
    </main>
  );
}
