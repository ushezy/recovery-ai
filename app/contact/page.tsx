import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Recovery AI",
  description: "Contact Recovery AI with questions, feedback, partnership opportunities, or media inquiries.",
};

const topics = [
  "General Questions",
  "Product Feedback",
  "Alpha Program",
  "Partnerships",
  "Media",
  "Technical Issues",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#14263d] selection:bg-[#dcebdc]">
      <header className="border-b border-[#14263d]/10 bg-[#f9f7f2]/95 backdrop-blur-md">
        <nav
          className="mx-auto flex h-[76px] max-w-[1040px] items-center justify-between px-6 md:px-10"
          aria-label="Contact page navigation"
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
          Contact Recovery AI
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
          Let&apos;s get in touch.
        </h1>
        <div className="mt-7 max-w-[680px] space-y-4 text-[15px] leading-7 text-[#536173] md:text-base">
          <p>
            Whether you have questions, feedback, partnership opportunities, or media
            inquiries, we&apos;d love to hear from you.
          </p>
          <p>
            Recovery AI is currently in Alpha, and your feedback helps us build a better
            product.
          </p>
        </div>

        <section className="mt-12 overflow-hidden rounded-2xl border border-[#14263d]/10 bg-white shadow-[0_8px_30px_rgba(20,38,61,0.05)]">
          <div className="grid border-b border-[#14263d]/10 md:grid-cols-2">
            <div className="border-b border-[#14263d]/10 p-6 md:border-b-0 md:border-r md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#577365]">
                Email
              </p>
              <a
                href="mailto:contact@recoverybrief.com"
                className="mt-3 inline-block break-all text-lg font-semibold tracking-[-0.025em] text-[#14263d] underline decoration-[#577365]/30 underline-offset-4 transition-colors hover:text-[#577365]"
              >
                contact@recoverybrief.com
              </a>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#577365]">
                Response Time
              </p>
              <p className="mt-3 text-base leading-7 text-[#536173]">
                We typically reply within 2–3 business days.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#14263d]">
              How can we help?
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[#536173] md:text-base">
              You can contact us regarding:
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-3 text-[15px] text-[#536173] sm:grid-cols-2 md:text-base">
              {topics.map((topic) => (
                <li key={topic} className="flex items-center gap-3">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#577365]" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 border-t border-[#14263d]/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#577365]">
            Follow Recovery AI
          </p>
          <a
            href="https://x.com/RecoveryBrief"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-[#14263d] underline decoration-[#577365]/30 underline-offset-4 transition-colors hover:text-[#577365]"
          >
            X <span aria-hidden>↗</span>
          </a>
        </section>
      </main>

      <footer className="border-t border-[#14263d]/10">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-3 px-6 py-8 md:px-10">
          <p className="font-semibold tracking-[-0.03em]">Recovery AI</p>
          <p className="max-w-sm text-sm leading-6 text-[#536173]">
            Helping people make better daily decisions through recovery intelligence.
          </p>
          <p className="mt-3 text-xs text-[#748091]">
            © 2026 Recovery AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
