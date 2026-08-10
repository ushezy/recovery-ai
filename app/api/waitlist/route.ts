import { appendFile, mkdir, readFile } from "node:fs/promises";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const storageDirectory = ".data";
const storageFile = `${storageDirectory}/waitlist.ndjson`;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown };
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email || email.length > 254 || !emailPattern.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    await mkdir(storageDirectory, { recursive: true });

    const existing = await readFile(storageFile, "utf8").catch(() => "");
    const alreadyJoined = existing.split("\n").some((line) => {
      try {
        return (JSON.parse(line) as { email?: string }).email === email;
      } catch {
        return false;
      }
    });

    if (!alreadyJoined) {
      await appendFile(storageFile, `${JSON.stringify({ email, createdAt: new Date().toISOString() })}\n`, "utf8");
    }

    return NextResponse.json({ success: true, alreadyJoined });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unable to save your email right now. Please try again." },
      { status: 500 },
    );
  }
}
