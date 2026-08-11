import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const body = (await request.json()) as { email?: unknown };
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || email.length > 254 || !emailPattern.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
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
