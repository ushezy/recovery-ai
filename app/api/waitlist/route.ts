import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const turnstileVerifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

async function verifyTurnstile(token: string, request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    throw new Error("Turnstile is not configured.");
  }

  const formData = new FormData();
  formData.set("secret", secret);
  formData.set("response", token);

  const remoteIp = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (remoteIp) formData.set("remoteip", remoteIp);

  const response = await fetch(turnstileVerifyUrl, { method: "POST", body: formData });
  if (!response.ok) throw new Error(`Turnstile verification failed with status ${response.status}.`);

  return (await response.json()) as TurnstileResponse;
}

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error("Supabase is not configured.");
  }

  return { url: url.replace(/\/$/, ""), publishableKey };
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown; turnstileToken?: unknown };
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const turnstileToken = typeof body.turnstileToken === "string" ? body.turnstileToken.trim() : "";

    if (!email || email.length > 254 || !emailPattern.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!turnstileToken) {
      return NextResponse.json({ success: false, error: "Please complete the verification challenge." }, { status: 400 });
    }

    const turnstileResult = await verifyTurnstile(turnstileToken, request);
    if (!turnstileResult.success) {
      console.warn("Turnstile rejected waitlist submission", turnstileResult["error-codes"]);
      return NextResponse.json({ success: false, error: "Verification failed. Please try again." }, { status: 403 });
    }

    const { url, publishableKey } = getSupabaseConfig();
    const response = await fetch(`${url}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: publishableKey,
        Authorization: `Bearer ${publishableKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, alreadyJoined: false });
    }

    const error = (await response.json().catch(() => null)) as { code?: string } | null;

    if (response.status === 409 && error?.code === "23505") {
      return NextResponse.json({ success: true, alreadyJoined: true });
    }

    throw new Error(`Supabase insert failed with status ${response.status}.`);
  } catch (error) {
    console.error("Waitlist submission failed", error);
    return NextResponse.json(
      { success: false, error: "Unable to save your email right now. Please try again." },
      { status: 500 },
    );
  }
}
