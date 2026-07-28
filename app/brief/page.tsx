"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ── Placeholder content — replace with OpenAI-generated brief ── */
const BRIEF = {
  insight:
    "You rested well. Mornings like this suit focused work — you'll know where to place your energy.",
  timeline: [
    { period: "Morning", note: "Your clearest window. Protect it." },
    { period: "Afternoon", note: "Lighter work. A walk may help." },
    { period: "Evening", note: "Wind down early." },
  ],
  closing: "Ninety minutes this morning for what matters most.",
};

export default function BriefPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050816] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111F] via-[#050816] to-[#0E1A2B]" />
        <div className="absolute left-1/2 top-[20%] h-80 w-80 -translate-x-1/2 rounded-full bg-blue-400/[0.03] blur-[100px]" />
      </div>

      <div
        className={`relative mx-auto max-w-lg px-6 pb-16 pt-16 transition-all duration-[1600ms] ease-out md:px-8 md:pt-20 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <header className="mb-12 md:mb-14">
          <p className="text-lg font-light text-white/45">Good morning.</p>
        </header>

        <section className="mb-16 md:mb-20">
          <p className="text-2xl font-light leading-relaxed text-white/75 md:text-[1.75rem] md:leading-10">
            {BRIEF.insight}
          </p>
        </section>

        <section className="mb-16 md:mb-20">
          <div className="space-y-8">
            {BRIEF.timeline.map((block) => (
              <div key={block.period} className="flex gap-6">
                <p className="w-24 shrink-0 text-sm font-light text-white/35">
                  {block.period}
                </p>
                <p className="text-base font-light leading-relaxed text-white/50">
                  {block.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-24">
          <p className="text-base font-light leading-relaxed text-white/45">
            {BRIEF.closing}
          </p>
        </section>

        <footer className="text-center">
          <Link
            href="/check-in"
            className="text-sm font-light text-white/30 transition-colors duration-500 hover:text-white/50"
          >
            Check in again
          </Link>
        </footer>
      </div>
    </main>
  );
}
