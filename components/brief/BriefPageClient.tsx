"use client";

import { useEffect, useState } from "react";
import { MorningBriefView } from "@/components/brief/MorningBriefView";
import { BriefLayout } from "@/components/brief/BriefLayout";
import { brief } from "@/components/brief/styles";
import type { MorningBrief } from "@/components/brief/types";
import { loadCheckInSession } from "@/lib/check-in";
import { runRecoveryEngine } from "@/lib/recovery";
import type { MorningBriefOutput } from "@/lib/recovery";
import type { GeneratedMorningBrief } from "@/lib/openai/morningBrief";

const TEMP_AI_INPUT = {
  score: 84,
  level: "Good",
  snapshot: "Recovery is improving after two consistent nights of sleep.",
  insights: [
    "Sleep duration increased by 40 minutes.",
    "Stress level remained stable.",
    "Morning readiness is above average.",
  ],
};

const AI_FALLBACK: GeneratedMorningBrief = {
  title: "Recovery Ready",
  summary: "Today's recovery data is available.",
  action: "Continue following today's recovery plan.",
};

function toAiInput(engine: MorningBriefOutput) {
  return {
    score: engine.recovery.score,
    level: engine.recovery.level,
    snapshot: `Focus: ${engine.snapshot.focus}. Energy: ${engine.snapshot.energy}. Mood: ${engine.snapshot.mood}.`,
    insights: engine.recovery.insights,
  };
}

function splitIntoLines(text: string): string[] {
  const lines = text
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);

  return lines.length > 0 ? lines : [text.trim()];
}

function mergeAiIntoBrief(
  engine: MorningBriefOutput,
  ai: GeneratedMorningBrief,
): MorningBrief {
  return {
    ...engine,
    greeting: {
      ...engine.greeting,
      subtitle: ai.title,
    },
    recovery: {
      ...engine.recovery,
      insights: splitIntoLines(ai.summary),
    },
    action: {
      lines: splitIntoLines(ai.action),
    },
  };
}

export function BriefPageClient() {
  const [morningBrief, setMorningBrief] = useState<MorningBrief | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadMorningBrief() {
      const checkIn = loadCheckInSession();
      const engineOutput = checkIn
        ? runRecoveryEngine(checkIn)
        : runRecoveryEngine({ sleep: 8, energy: 8, mood: 8, goal: "" });

      const aiInput = checkIn ? toAiInput(engineOutput) : TEMP_AI_INPUT;

      try {
        const response = await fetch("/api/morning-brief", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(aiInput),
        });

        const data = (await response.json()) as {
          success: boolean;
          result?: GeneratedMorningBrief;
        };

        if (cancelled) return;

        const aiResult = data.success && data.result ? data.result : AI_FALLBACK;
        setMorningBrief(mergeAiIntoBrief(engineOutput, aiResult));
      } catch {
        if (!cancelled) {
          setMorningBrief(mergeAiIntoBrief(engineOutput, AI_FALLBACK));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMorningBrief();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <BriefLayout>
        <p className={`text-center ${brief.caption} ${brief.textMuted}`}>
          Preparing today&apos;s recovery insights...
        </p>
      </BriefLayout>
    );
  }

  if (!morningBrief) {
    return null;
  }

  return <MorningBriefView data={morningBrief} />;
}
