import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Recovery AI",
  description: "The terms that apply to the Recovery AI website and Alpha program.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#14263d] selection:bg-[#dcebdc]">
      <header className="border-b border-[#14263d]/10 bg-[#f9f7f2]/95 backdrop-blur-md">
        <nav
          className="mx-auto flex h-[76px] max-w-[1040px] items-center justify-between px-6 md:px-10"
          aria-label="Terms page navigation"
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
          Legal
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
          Terms of Service
        </h1>
        <p className="mt-5 text-sm font-medium text-[#687485]">
          Effective Date: August 2026
        </p>

        <div className="mt-12 space-y-12 text-[15px] leading-7 text-[#536173] md:text-base">
          <section className="space-y-4">
            <p>Welcome to Recovery AI.</p>
            <p>
              By accessing or using the Recovery AI website (&quot;Website&quot;) or joining
              our Alpha program, you agree to these Terms of Service (&quot;Terms&quot;).
            </p>
            <p>If you do not agree to these Terms, please do not use our Website.</p>
          </section>

          <TermsSection number="1" title="About Recovery AI">
            <p>
              Recovery AI is an AI-powered recovery and performance guidance platform
              currently in its Alpha stage.
            </p>
            <p className="mt-4">
              The Website is intended to provide information about Recovery AI, collect
              Alpha Waitlist registrations, and communicate product updates.
            </p>
          </TermsSection>

          <TermsSection number="2" title="Alpha Program">
            <p>Recovery AI is currently under active development.</p>
            <p className="mt-4">
              Features, functionality, availability, and content may change without notice.
            </p>
            <p className="mt-4">Participation in the Alpha program is voluntary.</p>
          </TermsSection>

          <TermsSection number="3" title="No Medical Advice">
            <p>Recovery AI provides informational and educational content only.</p>
            <p className="mt-4">
              Recovery AI does not provide medical advice, diagnosis, or treatment.
            </p>
            <p className="mt-4">
              Always consult a qualified healthcare professional regarding medical concerns.
            </p>
            <p className="mt-4 font-medium text-[#14263d]">
              Do not rely on Recovery AI in emergencies.
            </p>
          </TermsSection>

          <TermsSection number="4" title="User Responsibilities">
            <p>By using Recovery AI, you agree to:</p>
            <TermsList>
              <li>Provide accurate information where requested.</li>
              <li>Use the Website lawfully.</li>
              <li>Not attempt to interfere with the Website or its services.</li>
              <li>Not misuse or abuse the Alpha program.</li>
            </TermsList>
          </TermsSection>

          <TermsSection number="5" title="Intellectual Property">
            <p>
              All content on the Website, including text, graphics, branding, logos,
              software, and design, is owned by or licensed to Recovery AI unless otherwise
              stated.
            </p>
            <p className="mt-4">
              You may not copy, distribute, modify, or commercially use our content without
              prior written permission.
            </p>
          </TermsSection>

          <TermsSection number="6" title="Third-Party Services">
            <p>
              Recovery AI may use trusted third-party providers for services including:
            </p>
            <TermsList>
              <li>Website hosting</li>
              <li>Email delivery</li>
              <li>CAPTCHA verification</li>
              <li>Database services</li>
              <li>Analytics</li>
            </TermsList>
            <p className="mt-4">
              Your use of those services may also be subject to their own terms and privacy
              policies.
            </p>
          </TermsSection>

          <TermsSection number="7" title="Disclaimer">
            <p>
              Recovery AI is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
            </p>
            <p className="mt-4">
              We do not guarantee uninterrupted availability, accuracy, or fitness for a
              particular purpose.
            </p>
            <p className="mt-4">Use of Recovery AI is at your own risk.</p>
          </TermsSection>

          <TermsSection number="8" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Recovery AI shall not be liable for
              any indirect, incidental, consequential, or special damages arising from the
              use of the Website or Alpha program.
            </p>
          </TermsSection>

          <TermsSection number="9" title="Changes to These Terms">
            <p>We may update these Terms from time to time.</p>
            <p className="mt-4">The latest version will always be published on this page.</p>
            <p className="mt-4">
              Continued use of the Website constitutes acceptance of the updated Terms.
            </p>
          </TermsSection>

          <TermsSection number="10" title="Governing Law">
            <p>
              These Terms shall be governed by the laws applicable to the jurisdiction in
              which Recovery AI operates, unless otherwise required by applicable law.
            </p>
          </TermsSection>

          <TermsSection number="11" title="Contact">
            <p>
              For questions regarding these Terms, please contact{" "}
              <a
                href="mailto:contact@recoverybrief.com"
                className="font-medium text-[#14263d] underline decoration-[#577365]/40 underline-offset-4 hover:decoration-[#14263d]"
              >
                contact@recoverybrief.com
              </a>
              .
            </p>
          </TermsSection>
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

function TermsSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#14263d]">
        {number}. {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function TermsList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#577365]">{children}</ul>
  );
}
