import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Updates | Recovery AI",
  description: "Follow Recovery AI as we build in public, from Alpha to launch.",
};

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#14263d] selection:bg-[#dcebdc]">
      <header className="border-b border-[#14263d]/10 bg-[#f9f7f2]/95 backdrop-blur-md">
        <nav
          className="mx-auto flex h-[76px] max-w-[1040px] items-center justify-between px-6 md:px-10"
          aria-label="Updates page navigation"
        >
          <Link href="/" className="text-base font-semibold tracking-[-0.04em]">
            Recovery AI
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-[#577365]">
              Home
            </Link>
            <Link href="/login" className="transition-colors hover:text-[#577365]">
              Sign In
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-[800px] px-6 py-16 md:px-10 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#577365]">
          Build in Public
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
          Updates
        </h1>
        <p className="mt-7 max-w-[640px] text-[15px] leading-7 text-[#536173] md:text-base">
          The journey from Alpha to Beta to launch—documented as we build Recovery AI.
        </p>

        <div className="mt-14 border-t border-[#14263d]/10">
          <article className="py-10 md:py-14">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#577365]">
              <span className="rounded-full bg-[#dcebdc] px-3 py-1 text-[#294837]">
                Alpha
              </span>
              <time dateTime="2026-08-11">August 11, 2026</time>
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.045em] md:text-4xl">
              Recovery AI Alpha is Live
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-[#536173] md:text-base">
              <p>
                Today, Recovery AI enters Alpha. The first version of our daily recovery
                experience is now live at recoverybrief.com.
              </p>
              <p>
                Alpha users can sign in securely by email, complete a short daily check-in,
                receive a recovery score, and generate a personalized AI Morning Brief with
                practical guidance for the day ahead.
              </p>
              <p>
                This is an early version of the product. We are starting small, listening
                closely, and improving the experience with every round of feedback.
              </p>

              <div className="rounded-2xl border border-[#14263d]/10 bg-white p-6 md:p-8">
                <h3 className="font-semibold text-[#14263d]">What&apos;s live today</h3>
                <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-[#577365]">
                  <li>Alpha Waitlist registration</li>
                  <li>Secure email sign-in</li>
                  <li>Daily recovery check-in</li>
                  <li>Recovery score and insights</li>
                  <li>Personalized AI Morning Brief</li>
                </ul>
              </div>

              <p>
                We will use this page to share the milestones, lessons, and product changes
                that move Recovery AI from Alpha to Beta and, eventually, public launch.
              </p>
              <p className="font-medium text-[#14263d]">This is day one.</p>
            </div>
          </article>
        </div>
      </main>

      <footer className="border-t border-[#14263d]/10">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-3 px-6 py-8 text-xs text-[#748091] md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 Recovery AI. All rights reserved.</p>
          <Link href="/" className="transition-colors hover:text-[#14263d]">
            Back to Recovery AI
          </Link>
        </div>
      </footer>
    </div>
  );
}
