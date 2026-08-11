import type { GeneratedMorningBrief } from "@/lib/openai/morningBrief";
import type { MorningBriefOutput } from "@/lib/recovery";

function splitIntoLines(text: string): string[] {
  const lines = text
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);

  return lines.length > 0 ? lines : [text.trim()];
}

export function mergeAiIntoBrief(
  engine: MorningBriefOutput,
  ai: GeneratedMorningBrief,
): MorningBriefOutput {
  return {
    ...engine,
    greeting: { ...engine.greeting, subtitle: ai.title },
    recovery: { ...engine.recovery, insights: splitIntoLines(ai.summary) },
    action: { lines: splitIntoLines(ai.action) },
  };
}
