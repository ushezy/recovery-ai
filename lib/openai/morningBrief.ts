import { buildMorningBriefPrompt } from "@/lib/prompts/morningBrief";
import { openai } from "./client";

type GenerateMorningBriefInput = {
  score: number;
  level: string;
  snapshot: string;
  insights: string[];
};

type GeneratedMorningBrief = {
  title: string;
  summary: string;
  action: string;
};

const FALLBACK_BRIEF: GeneratedMorningBrief = {
  title: "Recovery Ready",
  summary: "Today's recovery data is available.",
  action: "Continue following today's recovery plan.",
};

function parseMorningBriefResponse(text: string): GeneratedMorningBrief | null {
  try {
    const parsed: unknown = JSON.parse(text.trim());

    if (
      !parsed ||
      typeof parsed !== "object" ||
      typeof (parsed as GeneratedMorningBrief).title !== "string" ||
      typeof (parsed as GeneratedMorningBrief).summary !== "string" ||
      typeof (parsed as GeneratedMorningBrief).action !== "string"
    ) {
      return null;
    }

    return parsed as GeneratedMorningBrief;
  } catch {
    return null;
  }
}

export async function generateMorningBrief(
  input: GenerateMorningBriefInput,
): Promise<GeneratedMorningBrief> {
  const { system, user } = buildMorningBriefPrompt(input);

  const response = await openai.responses.create({
    model: "gpt-5-mini",
    instructions: system,
    input: user,
  });

  const parsed = parseMorningBriefResponse(response.output_text);

  return parsed ?? FALLBACK_BRIEF;
}

export type { GeneratedMorningBrief, GenerateMorningBriefInput };
