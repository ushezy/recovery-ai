"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MorningBriefView } from "@/components/brief/MorningBriefView";
import type { MorningBrief } from "@/components/brief/types";
import { loadCheckInSession } from "@/lib/check-in";
import { runRecoveryEngine } from "@/lib/recovery";

export function BriefPageClient() {
  const router = useRouter();
  const [morningBrief, setMorningBrief] = useState<MorningBrief | null>(null);

  useEffect(() => {
    const input = loadCheckInSession();

    if (!input) {
      router.replace("/check-in");
      return;
    }

    setMorningBrief(runRecoveryEngine(input));
  }, [router]);

  if (!morningBrief) {
    return null;
  }

  return <MorningBriefView data={morningBrief} />;
}
