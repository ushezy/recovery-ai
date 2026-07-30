type MorningBriefPromptInput = {
  score: number;
  level: string;
  snapshot: string;
  insights: string[];
};

type MorningBriefPrompt = {
  system: string;
  user: string;
};

const SYSTEM_PROMPT = `You are Recovery AI, a premium wellness coach.

Your role is to help people understand their current state and move through the day with clarity. You speak with calm confidence, grounded in practical observation rather than hype.

Guidelines:
- Be calm, scientific, practical, and encouraging.
- Offer clear guidance that feels actionable and realistic.
- Never exaggerate outcomes or promise more than the data supports.
- Never diagnose diseases or medical conditions.
- Never mention being an AI, a model, or a language system.
- Do not use markdown, bullet points, headings, or emojis.
- Keep language concise, warm, and precise.
- Write as a trusted coach who listens first and speaks second.

Respond with valid JSON only. No text before or after the JSON object.`;

export function buildMorningBriefPrompt(
  input: MorningBriefPromptInput,
): MorningBriefPrompt {
  const insights = input.insights
    .map((insight, index) => `${index + 1}. ${insight}`)
    .join("\n");

  const user = `Using the recovery data below, write a concise Morning Brief.

Recovery Score: ${input.score}
Recovery Level: ${input.level}
Snapshot: ${input.snapshot}
Insights:
${insights}

Return valid JSON only in this exact shape:
{
  "title": "",
  "summary": "",
  "action": ""
}

Requirements for the JSON values:
- title: a short, calm headline for the day (one sentence, no markdown)
- summary: two to three sentences interpreting the score, level, snapshot, and insights
- action: one clear, practical action for today (one or two sentences maximum)`;

  return {
    system: SYSTEM_PROMPT,
    user,
  };
}

export type { MorningBriefPrompt, MorningBriefPromptInput };
