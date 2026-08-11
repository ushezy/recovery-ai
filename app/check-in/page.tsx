"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { brief } from "@/components/brief/styles";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { saveCheckInSession, type CheckInInput } from "@/lib/check-in";
import { saveCheckIn } from "@/app/check-in/actions";

const STEPS = [
  {
    key: "sleep" as const,
    question: "How did you rest?",
    cta: "Continue",
  },
  {
    key: "energy" as const,
    question: "How is your energy?",
    cta: "Continue",
  },
  {
    key: "mood" as const,
    question: "How are you feeling?",
    cta: "Continue",
  },
  {
    key: "goal" as const,
    question: "What matters today?",
    cta: "View your brief",
  },
];

const CHOICES: Record<
  "sleep" | "energy" | "mood",
  { label: string; value: number }[]
> = {
  sleep: [
    { label: "Rough night", value: 2 },
    { label: "Uneven", value: 4 },
    { label: "Adequate", value: 6 },
    { label: "Restful", value: 8 },
    { label: "Deep rest", value: 10 },
  ],
  energy: [
    { label: "Low", value: 2 },
    { label: "Emerging", value: 4 },
    { label: "Steady", value: 6 },
    { label: "Good", value: 8 },
    { label: "Strong", value: 10 },
  ],
  mood: [
    { label: "Heavy", value: 2 },
    { label: "Quiet", value: 4 },
    { label: "Even", value: 6 },
    { label: "Light", value: 8 },
    { label: "Clear", value: 10 },
  ],
};

type Answers = CheckInInput;

function getLocalDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function ChoiceList({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: number }[];
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <ul className="w-full max-w-sm space-y-3">
      {options.map((option) => {
        const selected = value === option.value;
        return (
          <li key={option.label}>
            <button
              type="button"
              onClick={() => onChange(option.value)}
              className={`w-full rounded-2xl border px-6 py-5 ${brief.choice} ${brief.transition} ${
                selected
                  ? brief.cardSelected
                  : `${brief.card} ${brief.choiceIdle}`
              }`}
            >
              {option.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default function CheckInPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [answers, setAnswers] = useState<Answers>({
    sleep: 6,
    energy: 6,
    mood: 6,
    goal: "",
  });

  const current = STEPS[step];

  const transitionTo = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => {
      setStep(next);
      setVisible(true);
    }, 480);
  }, []);

  const handleContinue = async () => {
    if (step < STEPS.length - 1) {
      transitionTo(step + 1);
    } else {
      setIsSaving(true);
      setSaveError("");

      const result = await saveCheckIn(answers, getLocalDate());

      if (result.success) {
        saveCheckInSession(answers, result.checkInId);
        router.push("/preparing");
        return;
      }

      setSaveError(result.error);
      setIsSaving(false);
    }
  };

  const updateAnswer = <K extends keyof Answers>(
    key: K,
    value: Answers[K],
  ) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className={`${brief.shell} flex flex-col`}>
      <header className="relative z-10 flex justify-center px-6 pt-12 md:pt-14">
        <div className="absolute right-6 top-12 md:right-10 md:top-14">
          <SignOutButton />
        </div>
        <div className="flex items-center gap-2.5">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`rounded-full ${brief.dot} ${
                i === step
                  ? `h-1.5 w-1.5 ${brief.dotActive}`
                  : i < step
                    ? `h-1 w-1 ${brief.dotComplete}`
                    : `h-1 w-1 ${brief.dotPending}`
              }`}
              aria-hidden
            />
          ))}
        </div>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-32 pt-10 md:px-10 md:pb-36">
        <div
          key={step}
          className={`w-full max-w-lg ${brief.step} ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          {step === 0 && (
            <p className={`mb-12 text-center md:mb-14 ${brief.caption} ${brief.textMuted}`}>
              Your coach is listening.
            </p>
          )}

          <h1 className={`text-center ${brief.heading} ${brief.textPrimary}`}>
            {current.question}
          </h1>

          <div className="mt-14 flex justify-center md:mt-16">
            {current.key === "goal" ? (
              <input
                type="text"
                value={answers.goal}
                onChange={(e) => updateAnswer("goal", e.target.value)}
                placeholder="One intention…"
                autoFocus
                className={`w-full max-w-sm border-b bg-transparent pb-3 text-center text-xl font-light outline-none md:text-2xl ${brief.border} ${brief.borderFocus} ${brief.transition} ${brief.textPrimary} ${brief.placeholder}`}
              />
            ) : (
              <ChoiceList
                options={CHOICES[current.key]}
                value={answers[current.key]}
                onChange={(v) => updateAnswer(current.key, v)}
              />
            )}
          </div>
        </div>
      </div>

      <div className="recovery-bottom-fade fixed inset-x-0 bottom-0 z-20 px-6 pb-10 pt-20 md:px-10">
        <div className="mx-auto max-w-sm">
          <button
            type="button"
            onClick={handleContinue}
            disabled={isSaving}
            className={`w-full py-4 text-base ${brief.cta}`}
          >
            {isSaving ? "Saving..." : current.cta}
          </button>
          {saveError && (
            <p className={`mt-3 text-center text-sm ${brief.textMuted}`} role="alert">
              {saveError}. Please try again.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
