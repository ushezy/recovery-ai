"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  onTokenChange: (token: string) => void;
  resetKey: number;
};

export function TurnstileWidget({ onTokenChange, resetKey }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    const container = containerRef.current;
    const turnstile = window.turnstile;

    if (!scriptReady || !siteKey || !container || !turnstile) return;

    onTokenChange("");
    widgetIdRef.current = turnstile.render(container, {
      sitekey: siteKey,
      callback: (token: string) => onTokenChange(token),
      "error-callback": () => onTokenChange(""),
      "expired-callback": () => onTokenChange(""),
      language: "en",
      theme: "light",
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onTokenChange, resetKey, scriptReady, siteKey]);

  if (!siteKey) {
    return <p className="text-sm font-medium text-[#9e3f35]" role="alert">Verification is temporarily unavailable.</p>;
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} className="min-h-[65px]" aria-label="Human verification" />
    </>
  );
}
