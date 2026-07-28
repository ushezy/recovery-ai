export function BriefLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen bg-[#050816] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111F] via-[#050816] to-[#0E1A2B]" />
        <div className="absolute left-1/2 top-[15%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-400/[0.03] blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-lg px-6 pb-20 pt-14 md:px-8 md:pt-16">
        {children}
      </div>
    </main>
  );
}
