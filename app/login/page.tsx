import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "@/app/login/LoginForm";
import { getAuthenticatedUserId } from "@/lib/supabase/server";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const [userId, { error }] = await Promise.all([
    getAuthenticatedUserId(),
    searchParams,
  ]);

  if (userId) {
    redirect("/check-in");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f9f7f2] px-6 py-16 text-[#14263d]">
      <section className="w-full max-w-md rounded-2xl border border-[#14263d]/10 bg-[#e7eee7] p-8 shadow-[0_16px_42px_rgba(20,38,61,0.08)] sm:p-10">
        <Link href="/" className="text-sm font-semibold tracking-[-0.03em]">Recovery AI</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.16em] text-[#577365]">Alpha access</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.055em]">Welcome back.</h1>
        <p className="mt-4 leading-7 text-[#536173]">Enter your email to continue.</p>
        <LoginForm initialError={error} />
        <p className="mt-5 text-sm text-[#687485]">We&apos;ll send you a secure sign-in link.</p>
      </section>
    </main>
  );
}
