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
              <time dateTime="2026-08">August 2026</time>
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.045em] md:text-4xl">
              Recovery AI Alpha is Live
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-[#536173] md:text-base">
              <p>Today marks an important milestone for Recovery AI.</p>
              <p>
                After months of product design, engineering, and iteration, Recovery AI has
                officially entered the Alpha stage.
              </p>
              <p>
                This is the first version of Recovery AI that brings together our complete
                core experience:
              </p>
              <ul className="list-disc space-y-2 pl-6 marker:text-[#577365]">
                <li>Daily Check-in</li>
                <li>Recovery Engine</li>
                <li>AI Morning Brief</li>
              </ul>
              <p>
                Together, these components create a personalized recovery experience
                designed to help people make better daily decisions.
              </p>

              <section className="pt-4">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#14263d]">
                  What We&apos;ve Built
                </h3>
                <div className="mt-4 space-y-5">
                  <p>
                    Recovery AI now supports the complete recovery workflow—from
                    understanding your current state to receiving an AI-generated Morning
                    Brief with practical guidance for the day ahead.
                  </p>
                  <p>
                    This milestone represents the completion of our core product
                    architecture and the beginning of something even more important:
                    learning from real users.
                  </p>
                </div>
              </section>

              <section className="pt-4">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#14263d]">
                  What Comes Next
                </h3>
                <div className="mt-4 space-y-5">
                  <p>Our focus is no longer just building features.</p>
                  <p>
                    Over the coming weeks, we&apos;ll work closely with our first Alpha users
                    to understand what creates the most value, improve the Morning Brief
                    experience, and continue refining Recovery AI through real-world
                    feedback.
                  </p>
                  <p>
                    We&apos;re committed to building deliberately, shipping continuously, and
                    improving with every iteration.
                  </p>
                </div>
              </section>

              <section className="pt-4">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#14263d]">
                  Join Us
                </h3>
                <div className="mt-4 space-y-5">
                  <p>
                    Recovery AI is currently accepting a limited number of Alpha users.
                  </p>
                  <p>
                    If you&apos;d like to help shape the future of AI-powered recovery, we&apos;d
                    love to have you{" "}
                    <Link
                      href="/#join-alpha"
                      className="font-medium text-[#14263d] underline decoration-[#577365]/40 underline-offset-4 hover:decoration-[#14263d]"
                    >
                      join us
                    </Link>
                    .
                  </p>
                  <p>Thank you for being part of the journey.</p>
                  <p className="font-medium text-[#14263d]">— The Recovery AI Team</p>
                </div>
              </section>
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
