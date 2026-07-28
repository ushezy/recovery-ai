"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

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

type Answers = {
  sleep: number;
  energy: number;
  mood: number;
  goal: string;
};

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
              className={`w-full rounded-2xl px-6 py-5 text-lg font-light transition-colors duration-500 ease-out ${
                selected
                  ? "bg-white text-black"
                  : "bg-white/[0.04] text-white/55 hover:bg-white/[0.07] hover:text-white/75"
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

  const handleContinue = () => {
    if (step < STEPS.length - 1) {
      transitionTo(step + 1);
    } else {
      router.push("/preparing");
    }
  };

  const updateAnswer = <K extends keyof Answers>(
    key: K,
    value: Answers[K],
  ) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-[#050816] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111F] via-[#050816] to-[#0E1A2B]" />
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/[0.025] blur-[100px]" />
      </div>

      <header className="relative z-10 flex justify-center px-6 pt-12 md:pt-14">
        <div className="flex items-center gap-2.5">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-1000 ease-out ${
                i === step
                  ? "h-1.5 w-1.5 bg-white/50"
                  : i < step
                    ? "h-1 w-1 bg-white/25"
                    : "h-1 w-1 bg-white/[0.08]"
              }`}
              aria-hidden
            />
          ))}
        </div>
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-32 pt-10 md:px-10 md:pb-36">
        <div
          key={step}
          className={`w-full max-w-lg transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          {step === 0 && (
            <p className="mb-12 text-center text-sm font-light text-white/35 md:mb-14">
              Your coach is listening.
            </p>
          )}

          <h1 className="text-center text-3xl font-medium leading-tight tracking-tight md:text-4xl">
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
                className="w-full max-w-sm border-b border-white/10 bg-transparent pb-3 text-center text-xl font-light text-white placeholder:text-white/25 outline-none transition-colors duration-500 focus:border-white/25 md:text-2xl"
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

      <div className="fixed inset-x-0 bottom-0 z-20 px-6 pb-10 pt-20 md:px-10">
        <div className="mx-auto max-w-sm">
          <button
            type="button"
            onClick={handleContinue}
            className="w-full rounded-full bg-white py-4 text-base font-medium text-black transition-colors duration-500 hover:bg-gray-50"
          >
            {current.cta}
          </button>
        </div>
      </div>
    </main>
  );
}
