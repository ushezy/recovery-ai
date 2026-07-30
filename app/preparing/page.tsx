"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { brief } from "@/components/brief/styles";

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
    <main className={`${brief.shell} flex flex-col items-center justify-center px-8`}>
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className={`${brief.pauseTitle} ${brief.textSecondary}`}>
          One moment.
        </p>
        <p className={`mt-4 max-w-xs ${brief.caption} ${brief.textMuted}`}>
          Considering what you shared.
        </p>

        <div className="relative my-20 h-20 w-20 md:my-28 md:h-24 md:w-24">
          <div className={`preparing-breathe absolute inset-0 rounded-full border ${brief.border}`} />
          <div className={`preparing-breathe-delay absolute inset-4 rounded-full border ${brief.borderSubtle}`} />
        </div>

        <div className="relative h-10 w-full max-w-sm">
          {REFLECTIONS.map((line, i) => (
            <p
              key={line}
              className={`absolute inset-x-0 text-base font-light leading-relaxed ${brief.whisper} md:text-lg ${brief.textMuted} ${
                phase === i + 1
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              {line}
            </p>
          ))}

          <p
            className={`absolute inset-x-0 text-base font-light leading-relaxed ${brief.whisper} md:text-lg ${brief.textSecondary} ${
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
