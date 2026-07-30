type ParsedMorningBrief = {
  title: string;
  summary: string;
  action: string;
};

const FALLBACK_BRIEF: ParsedMorningBrief = {
  title: "Recovery Ready",
  summary: "Today's recovery data is available.",
  action: "Continue following today's recovery plan.",
};

function isParsedMorningBrief(value: unknown): value is ParsedMorningBrief {
  if (!value || typeof value !== "object") {
    return false;
  }

  const record = value as Record<string, unknown>;

  return (
    typeof record.title === "string" &&
    typeof record.summary === "string" &&
    typeof record.action === "string"
  );
}

export function parseMorningBrief(input: string): ParsedMorningBrief {
  try {
    const parsed: unknown = JSON.parse(input.trim());

    if (!isParsedMorningBrief(parsed)) {
      return FALLBACK_BRIEF;
    }

    return {
      title: parsed.title.trim(),
      summary: parsed.summary.trim(),
      action: parsed.action.trim(),
    };
  } catch {
    return FALLBACK_BRIEF;
  }
}

export type { ParsedMorningBrief };
