import type { CheckInInput } from "@/lib/recovery";

const STORAGE_KEY = "recovery-ai-check-in";
const CHECK_IN_ID_KEY = "recovery-ai-check-in-id";

function isCheckInInput(value: unknown): value is CheckInInput {
  if (!value || typeof value !== "object") return false;

  const record = value as Record<string, unknown>;

  return (
    typeof record.sleep === "number" &&
    typeof record.energy === "number" &&
    typeof record.mood === "number" &&
    typeof record.goal === "string"
  );
}

export function saveCheckInSession(input: CheckInInput, checkInId?: number): void {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  if (checkInId !== undefined) {
    sessionStorage.setItem(CHECK_IN_ID_KEY, String(checkInId));
  }
}

export function loadCheckInId(): number | null {
  const value = Number(sessionStorage.getItem(CHECK_IN_ID_KEY));
  return Number.isSafeInteger(value) && value > 0 ? value : null;
}

export function loadCheckInSession(): CheckInInput | null {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed: unknown = JSON.parse(raw);
    return isCheckInInput(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function clearCheckInSession(): void {
  sessionStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(CHECK_IN_ID_KEY);
}
