"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SliderField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm font-semibold tabular-nums text-white">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={1}
        max={10}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-800 accent-white"
      />
      <div className="flex justify-between text-xs text-gray-600">
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  );
}

export default function CheckInPage() {
  const router = useRouter();
  const [sleepQuality, setSleepQuality] = useState(5);
  const [energyLevel, setEnergyLevel] = useState(5);
  const [mood, setMood] = useState(5);
  const [mainGoal, setMainGoal] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black px-6 py-12 text-white">
      <div className="mx-auto w-full max-w-lg">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Good Morning 👋
          </h1>
          <p className="mt-3 text-xl text-gray-400">
            How are you feeling today?
          </p>
        </header>

        <div className="space-y-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <SliderField
            label="Sleep Quality"
            value={sleepQuality}
            onChange={setSleepQuality}
          />

          <SliderField
            label="Energy Level"
            value={energyLevel}
            onChange={setEnergyLevel}
          />

          <SliderField
            label="Mood"
            value={mood}
            onChange={setMood}
          />

          <div className="space-y-3">
            <label
              htmlFor="main-goal"
              className="text-sm font-medium text-gray-300"
            >
              Today&apos;s Main Goal
            </label>
            <input
              id="main-goal"
              type="text"
              value={mainGoal}
              onChange={(e) => setMainGoal(e.target.value)}
              placeholder="What do you want to accomplish today?"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-gray-600 outline-none transition focus:border-white/30 focus:ring-1 focus:ring-white/20"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => router.push("/brief")}
          className="mt-10 w-full rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02] hover:bg-gray-200 active:scale-[0.98]"
        >
          Generate My Brief
        </button>
      </div>
    </main>
  );
}
