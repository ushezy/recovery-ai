export function BriefLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="brief-titanium relative min-h-screen text-[#F3F1EC]">
      <div
        aria-hidden
        className="brief-titanium-texture brief-titanium-light pointer-events-none absolute inset-0"
      />
      <div className="relative mx-auto w-full max-w-[520px] px-6 pb-24 pt-16 md:px-8 md:pt-20">
        {children}
      </div>
    </main>
  );
}
