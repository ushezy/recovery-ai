"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MorningBriefView } from "@/components/brief/MorningBriefView";
import { BriefLayout } from "@/components/brief/BriefLayout";
import { brief } from "@/components/brief/styles";
import type { MorningBrief } from "@/components/brief/types";
import { loadCheckInSession } from "@/lib/check-in";
import { loadCheckInId } from "@/lib/check-in";
import { runRecoveryEngine } from "@/lib/recovery";

export function BriefPageClient() {
  const router = useRouter();
  const [morningBrief, setMorningBrief] = useState<MorningBrief | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadMorningBrief() {
      const checkIn = loadCheckInSession();
      const checkInId = loadCheckInId();
      const engineOutput = checkIn
        ? runRecoveryEngine(checkIn)
        : runRecoveryEngine({ sleep: 8, energy: 8, mood: 8, goal: "" });

      try {
        const response = await fetch("/api/morning-brief", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checkInId: checkInId ?? undefined }),
        });

        const data = (await response.json()) as {
          success: boolean;
          result?: MorningBrief;
        };

        if (cancelled) return;

        if (response.status === 404) {
          router.replace("/check-in");
          return;
        }

        setMorningBrief(data.success && data.result ? data.result : engineOutput);
      } catch {
        if (!cancelled) {
          setMorningBrief(engineOutput);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMorningBrief();

    return () => {
      cancelled = true;
    };
  }, [router]);

  if (loading) {
    return (
      <BriefLayout>
        <p className={`text-center ${brief.caption} ${brief.textMuted}`}>
          Preparing today&apos;s recovery insights...
        </p>
      </BriefLayout>
    );
  }

  if (!morningBrief) {
    return null;
  }

  return <MorningBriefView data={morningBrief} />;
}
