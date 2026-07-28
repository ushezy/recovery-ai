"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const REFLECTIONS = [
  "How you rested.",
  "Where your energy is.",
  "What you shared.",
];

export default function PreparingPage() {
  const router = useRouter();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1100),
      setTimeout(() => setPhase(2), 2200),
      setTimeout(() => setPhase(3), 3300),
      setTimeout(() => setPhase(4), 4400),
      setTimeout(() => router.push("/brief"), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [router]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#050816] px-8 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111F] via-[#050816] to-[#0E1A2B]" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.025] blur-[140px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-xl font-medium tracking-tight text-white/60 md:text-2xl">
          One moment.
        </p>
        <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-white/35">
          Considering what you shared.
        </p>

        <div className="relative my-20 h-20 w-20 md:my-28 md:h-24 md:w-24">
          <div className="preparing-breathe absolute inset-0 rounded-full border border-white/[0.08]" />
          <div className="preparing-breathe-delay absolute inset-4 rounded-full border border-white/[0.04]" />
        </div>

        <div className="relative h-10 w-full max-w-sm">
          {REFLECTIONS.map((line, i) => (
            <p
              key={line}
              className={`absolute inset-x-0 text-base font-light leading-relaxed text-white/40 transition-all duration-[1400ms] ease-out md:text-lg ${
                phase === i + 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              {line}
            </p>
          ))}

          <p
            className={`absolute inset-x-0 text-base font-light leading-relaxed text-white/55 transition-all duration-[1400ms] ease-out md:text-lg ${
              phase >= 4
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            Here&apos;s my read on today.
          </p>
        </div>
      </div>
    </main>
  );
}
