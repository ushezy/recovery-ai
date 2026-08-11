"use client";

import Link from "next/link";
import { FormEvent, useCallback, useState } from "react";
import { TurnstileWidget } from "./TurnstileWidget";

const features = [
  { title: "Understand Your Recovery", copy: "Know how recovered you really are—not just how you feel.", icon: "01" },
  { title: "Protect Your Energy", copy: "Avoid unnecessary fatigue by matching your workload to your recovery.", icon: "02" },
  { title: "Make Better Decisions", copy: "Use recovery insights to plan your most important work with confidence.", icon: "03" },
];

const steps = [
  ["01", "Daily Check-in", "Answer a few quick questions about your sleep, energy, stress, and recovery."],
  ["02", "Recovery Engine", "Recovery AI analyzes your recovery using its proprietary recovery engine."],
  ["03", "AI Morning Brief", "Receive a personalized morning briefing with practical guidance for today."],
  ["04", "Better Decisions", "Know when to focus, when to recover, and how to make the most of your day."],
];

const button = "inline-flex h-12 items-center justify-center rounded-xl bg-[#14263d] px-5 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(20,38,61,0.12)] transition-all duration-200 hover:-translate-y-px hover:bg-[#203b5d] hover:shadow-[0_10px_20px_rgba(20,38,61,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14263d]";

export function LaunchSite() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const handleTurnstileToken = useCallback((token: string) => setTurnstileToken(token), []);

  async function submitWaitlist(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !turnstileToken) return;
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, turnstileToken }) });
      const data = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok || !data.success) throw new Error(data.error || "Unable to join the waitlist right now.");
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to join the waitlist right now.");
      setTurnstileToken("");
      setTurnstileResetKey((key) => key + 1);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f9f7f2] text-[#14263d] selection:bg-[#dcebdc]">
      <header className="sticky top-0 z-20 border-b border-[#14263d]/10 bg-[#f9f7f2]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6 md:px-10 lg:px-16" aria-label="Main navigation">
          <Link href="/" className="text-base font-semibold tracking-[-0.04em]">Recovery AI</Link>
          <div className="flex items-center gap-5 text-sm font-medium sm:gap-8">
            <a href="#how-it-works" className="hidden transition-colors hover:text-[#577365] sm:inline">How It Works</a>
            <a href="#join-alpha" className={`${button} h-10 px-4 shadow-none sm:h-11`}>Join Alpha</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative mx-auto grid max-w-[1200px] gap-14 px-6 pb-24 pt-4 md:px-10 md:pb-32 md:pt-24 lg:grid-cols-[0.87fr_1.13fr] lg:items-center lg:gap-20 lg:px-16 lg:py-28">
          <div className="relative z-10">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#577365]">Recovery intelligence for better days</p>
            <h1 className="max-w-xl text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-[4.4rem]">Know your recovery.<br />Own your day.</h1>
            <p className="mt-7 max-w-[34rem] text-base leading-7 text-[#536173] md:text-lg">Recovery AI helps knowledge workers make better daily decisions through personalized recovery insights.</p>
            <p className="mt-4 max-w-[35rem] text-base leading-7 text-[#536173]">Every morning, your daily check-in becomes a personalized AI Morning Brief, helping you understand your recovery, protect your energy, and focus on what matters most.</p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
              <a href="#join-alpha" className={button}>Join Alpha Waitlist <span aria-hidden className="ml-2">→</span></a>
              <a href="#how-it-works" className="inline-flex h-12 items-center justify-center rounded-xl border border-[#14263d]/15 px-5 text-sm font-semibold transition-colors hover:bg-[#eeeae1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14263d]">See How It Works</a>
            </div>
            <p className="mt-8 text-xs font-medium text-[#748091]">A calmer way to decide what today asks of you.</p>
          </div>
          <div className="relative lg:pl-3"><div aria-hidden className="absolute -inset-7 -z-0 rounded-full bg-[#dcebdc]/45 blur-3xl" /><div className="relative z-10"><MorningBriefPreview /></div></div>
        </section>

        <section className="border-y border-[#14263d]/10 bg-[#f1eee7]">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-[120px] lg:px-16">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#577365]">Why Recovery AI</p><h2 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.055em] md:text-5xl">Most people start with a calendar.<br />Start with yourself.</h2></div>
              <p className="max-w-xl leading-7 text-[#536173] lg:pb-1">Your calendar tells you what you planned. Recovery AI tells you what you&apos;re ready for. Every recommendation is based on your current recovery state, helping you make better decisions throughout the day.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {features.map((feature) => <article key={feature.title} className="group rounded-2xl border border-[#14263d]/10 bg-white px-7 py-5 shadow-[0_2px_10px_rgba(20,38,61,0.035)] transition-transform duration-200 hover:-translate-y-1 md:p-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#577365]/25 text-xs font-semibold tracking-[0.08em] text-[#577365]">{feature.icon}</span>
                <h3 className="mt-8 text-lg font-semibold tracking-[-0.03em] md:mt-12">{feature.title}</h3><p className="mt-3 leading-7 text-[#536173]">{feature.copy}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-[120px] lg:px-16">
          <div className="flex max-w-3xl flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#577365]">How it works</p><h2 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.055em] md:text-5xl">Simple every morning.<br />Smarter all day.</h2></div><p className="max-w-xs text-sm leading-6 text-[#536173]">A short ritual that turns self-awareness into a more intentional day.</p></div>
          <ol className="mt-14 grid gap-3 md:grid-cols-4 md:gap-4">
            {steps.map(([number, title, copy]) => <li key={number} className="relative min-h-0 rounded-2xl border border-[#14263d]/10 bg-white px-7 py-5 shadow-[0_2px_10px_rgba(20,38,61,0.025)] md:min-h-64 md:p-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-[#577365]">{number}</p><span aria-hidden className="absolute right-7 top-8 h-px w-8 bg-[#577365]/30" />
              <h3 className="mt-7 text-lg font-semibold tracking-[-0.03em] md:mt-12">{title}</h3><p className="mt-3 text-sm leading-6 text-[#536173]">{copy}</p>
            </li>)}
          </ol>
        </section>

        <section className="border-y border-[#14263d]/10 bg-[#f4f2ec] py-24 md:py-[120px]">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20 lg:px-16">
            <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#577365]">Product preview</p><h2 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.055em] md:text-5xl">Your Morning Brief</h2><p className="mt-6 max-w-sm leading-7 text-[#536173]">One clear view of your recovery, your best focus window, and guidance that respects the day you actually have.</p><div className="mt-8 flex items-center gap-3 text-sm font-medium text-[#577365]"><span className="h-2 w-2 rounded-full bg-[#6d9882]" />Built from your daily check-in</div></div>
            <MorningBriefPreview featured />
          </div>
        </section>

        <section id="join-alpha" className="scroll-mt-20 mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-[120px] lg:px-16">
          <div className="relative overflow-hidden rounded-2xl border border-[#14263d]/10 bg-[#e7eee7] px-6 py-12 md:px-12 md:py-16"><div aria-hidden className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-white/55 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#577365]">Join Alpha</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.055em] md:text-5xl">Be among the first to experience Recovery AI.</h2><p className="mt-6 max-w-xl leading-7 text-[#536173]">Recovery AI is currently in Alpha. We&apos;re inviting a limited number of early users to help shape the future of AI-powered recovery.</p></div>
              <div>{submitted ? <p className="rounded-xl border border-[#577365]/30 bg-white/75 px-5 py-4 text-sm font-medium text-[#294837]" role="status">You&apos;re on the list. We&apos;ll be in touch.</p> : <form onSubmit={submitWaitlist} className="flex flex-col gap-3"><label className="sr-only" htmlFor="waitlist-email">Email address</label><input id="waitlist-email" type="email" required disabled={isSubmitting} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="h-12 min-w-0 rounded-xl border border-[#14263d]/15 bg-white/85 px-4 text-sm outline-none placeholder:text-[#748091] focus:border-[#14263d] focus:ring-2 focus:ring-[#14263d]/15 disabled:cursor-not-allowed disabled:opacity-60" /><TurnstileWidget onTokenChange={handleTurnstileToken} resetKey={turnstileResetKey} /><button type="submit" disabled={isSubmitting || !turnstileToken} className={`${button} w-full disabled:cursor-not-allowed disabled:opacity-60`}>{isSubmitting ? "Joining…" : "Join Alpha Waitlist"}</button></form>}{submitError && <p className="mt-4 text-sm font-medium text-[#9e3f35]" role="alert">{submitError}</p>}<p className="mt-4 text-sm text-[#687485]">No spam. Only meaningful product updates.</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#14263d]/10"><div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-10 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16"><div><p className="font-semibold tracking-[-0.03em]">Recovery AI</p><p className="mt-2 max-w-sm text-sm leading-6 text-[#536173]">Helping people make better daily decisions through recovery intelligence.</p></div><div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[#536173] sm:flex sm:flex-wrap"><a href="#" className="hover:text-[#14263d]">Privacy Policy</a><a href="#" className="hover:text-[#14263d]">Terms of Service</a><a href="mailto:hello@recoveryai.com" className="hover:text-[#14263d]">Contact</a><span className="flex gap-6"><a href="#" className="hover:text-[#14263d]">X</a><a href="#" className="hover:text-[#14263d]">LinkedIn</a></span></div></div><p className="mx-auto max-w-[1200px] px-6 pb-8 text-xs text-[#748091] md:px-10 lg:px-16">© 2026 Recovery AI. All rights reserved.</p></footer>
    </div>
  );
}

function MorningBriefPreview({ featured = false }: { featured?: boolean }) {
  return <div className={`mx-auto max-w-[650px] rounded-[20px] border border-[#14263d]/[0.08] bg-white p-4 shadow-[0_16px_42px_rgba(20,38,61,0.09)] sm:border-[#14263d]/10 sm:shadow-[0_24px_60px_rgba(20,38,61,0.13)] sm:p-6 ${featured ? "lg:mr-0" : ""}`} aria-label="Morning Brief product preview">
    <div className="rounded-[14px] border border-[#14263d]/[0.08] bg-[#fbfaf7] p-5 sm:border-[#14263d]/10 sm:p-7"><div className="flex items-center justify-between border-b border-[#14263d]/10 pb-5"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#577365]">Recovery AI</p><p className="mt-1 text-sm font-medium">Good morning, Alex.</p></div><span className="rounded-full bg-[#dcebdc] px-3 py-1 text-xs font-semibold text-[#294837]">Good recovery</span></div>
      <div className="grid gap-5 py-6 sm:grid-cols-[150px_1fr]"><div className="rounded-xl border border-[#14263d]/10 bg-white p-5"><p className="text-xs text-[#536173]">Recovery Score</p><p className="mt-2 text-6xl font-semibold tracking-[-0.08em]">82</p><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e7ebe5]"><div className="h-full w-[82%] rounded-full bg-[#6d9882]" /></div><p className="mt-2 text-xs font-medium text-[#577365]">Ready for focus</p></div><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#577365]">Today&apos;s Summary</p><p className="mt-3 text-lg font-medium leading-7">Your recovery is strong today. Your best window for focused work is this morning.</p><div className="mt-5 rounded-lg border border-[#14263d]/10 bg-white px-4 py-3"><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#577365]">Priority</p><p className="mt-1 text-sm leading-5 text-[#536173]">Protect your energy for what matters most.</p></div></div></div>
      <div className="border-t border-[#14263d]/10 pt-5"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#577365]">Today&apos;s Guidance</p><div className="mt-3 grid gap-2 text-sm leading-6 text-[#536173] sm:grid-cols-3"><p>Prioritize deep work before noon.</p><p>Stay hydrated throughout the day.</p><p>Choose light exercise this evening.</p></div></div>
    </div>
  </div>;
}
