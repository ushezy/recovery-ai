"use client";

import { AuthError } from "@supabase/supabase-js";
import { FormEvent, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const RESEND_SECONDS = 60;

const buttonClass =
  "inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#14263d] px-5 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(20,38,61,0.12)] transition-all hover:-translate-y-px hover:bg-[#203b5d] disabled:cursor-not-allowed disabled:opacity-60";

function getAuthErrorMessage(error: unknown) {
  if (error instanceof AuthError) {
    if (error.status === 429 || error.code === "over_email_send_rate_limit") {
      return "Too many sign-in emails were requested. Please wait before trying again.";
    }

    if (
      error.code === "otp_disabled" ||
      error.message.toLowerCase().includes("signups not allowed") ||
      error.message.toLowerCase().includes("user not found")
    ) {
      return "This email does not have Alpha access yet.";
    }
  }

  return "We couldn't send a sign-in link. Please try again.";
}

export function LoginForm({ initialError }: { initialError?: string }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(
    initialError === "invalid-link"
      ? "This sign-in link is invalid or has expired. Request a new link below."
      : "",
  );

  useEffect(() => {
    if (secondsRemaining <= 0) return;

    const timer = window.setInterval(() => {
      setSecondsRemaining((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [secondsRemaining]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (secondsRemaining > 0) return;

    setIsSubmitting(true);
    setMessage("");
    setError("");

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithOtp({
        email: email.trim().toLowerCase(),
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/check-in`,
          shouldCreateUser: false,
        },
      });

      if (signInError) throw signInError;
      setMessage("Check your email for your secure sign-in link.");
      setSecondsRemaining(RESEND_SECONDS);
    } catch (signInError) {
      setError(getAuthErrorMessage(signInError));
    } finally {
      setIsSubmitting(false);
    }
  }

  const isCoolingDown = secondsRemaining > 0;

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-4">
      <label className="sr-only" htmlFor="login-email">Email address</label>
      <input
        id="login-email"
        type="email"
        autoComplete="email"
        required
        disabled={isSubmitting}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="h-12 w-full rounded-xl border border-[#14263d]/15 bg-white/85 px-4 text-sm outline-none placeholder:text-[#748091] focus:border-[#14263d] focus:ring-2 focus:ring-[#14263d]/15 disabled:opacity-60"
      />
      <button
        className={buttonClass}
        type="submit"
        disabled={isSubmitting || isCoolingDown}
      >
        {isSubmitting
          ? "Sending link..."
          : isCoolingDown
            ? `Send again in ${secondsRemaining}s`
            : "Continue with email"}
      </button>
      {message && <p className="text-sm font-medium text-[#294837]" role="status">{message}</p>}
      {error && <p className="text-sm font-medium text-[#9e3f35]" role="alert">{error}</p>}
    </form>
  );
}
