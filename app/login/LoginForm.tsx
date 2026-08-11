"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const buttonClass =
  "inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#14263d] px-5 text-sm font-semibold text-white shadow-[0_6px_16px_rgba(20,38,61,0.12)] transition-all hover:-translate-y-px hover:bg-[#203b5d] disabled:cursor-not-allowed disabled:opacity-60";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    } catch {
      setError("We couldn't send a sign-in link. Confirm that this email has Alpha access and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
      <button className={buttonClass} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending link…" : "Continue with email"}
      </button>
      {message && <p className="text-sm font-medium text-[#294837]" role="status">{message}</p>}
      {error && <p className="text-sm font-medium text-[#9e3f35]" role="alert">{error}</p>}
    </form>
  );
}
