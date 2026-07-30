/** Morning Brief — canonical visual reference for Recovery AI */
export const brief = {
  /* Layout */
  section: "mb-24 md:mb-28",
  page: "relative mx-auto w-full max-w-[520px] px-6 pb-28 pt-16 md:px-8 md:pt-20",
  shell: "relative min-h-screen",

  /* Typography */
  textPrimary: "text-[#F3F1EC]",
  textSecondary: "text-[rgba(243,241,236,0.72)]",
  textMuted: "text-[rgba(243,241,236,0.42)]",
  greeting: "text-[11px] font-light uppercase tracking-[0.32em]",
  label:
    "text-[10px] font-light uppercase tracking-[0.22em] text-[rgba(243,241,236,0.42)]",
  cardLabel: "text-[10px] font-light text-[rgba(243,241,236,0.42)]",
  bodyLight: "text-[15px] font-light leading-[1.65]",
  supporting:
    "text-[13px] font-extralight leading-[1.7] text-[rgba(243,241,236,0.42)]",
  timelinePeriod:
    "w-20 shrink-0 text-[11px] font-extralight tracking-wide text-[rgba(243,241,236,0.42)]",
  heading: "text-3xl font-light leading-tight tracking-tight md:text-4xl",
  pauseTitle: "text-xl font-light tracking-tight md:text-2xl",
  caption: "text-sm font-light leading-relaxed",
  choice: "text-lg font-light",
  score:
    "-translate-y-[10px] font-extralight tabular-nums leading-[0.9] tracking-[-0.04em] text-[#F3F1EC] text-[5.75rem] md:text-[7rem]",

  /* Surfaces — no shadows, subtle borders only */
  card: "rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]",
  cardSelected:
    "border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-[#F3F1EC]",
  choiceIdle:
    "text-[rgba(243,241,236,0.72)] hover:bg-[rgba(255,255,255,0.04)] hover:text-[#F3F1EC]",

  /* Borders */
  border: "border-[rgba(255,255,255,0.08)]",
  borderSubtle: "border-[rgba(255,255,255,0.04)]",
  borderFocus: "focus:border-[rgba(255,255,255,0.16)]",
  placeholder: "placeholder:text-[rgba(243,241,236,0.42)]",

  /* Interactive */
  cta:
    "rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.06)] font-light text-[#F3F1EC] transition-colors duration-700 hover:bg-[rgba(255,255,255,0.09)]",
  link:
    "text-xs font-light tracking-wide text-[rgba(243,241,236,0.42)] transition-colors duration-700 hover:text-[rgba(243,241,236,0.58)]",

  /* Progress */
  dotActive: "bg-[rgba(243,241,236,0.42)]",
  dotComplete: "bg-[rgba(243,241,236,0.28)]",
  dotPending: "bg-[rgba(255,255,255,0.08)]",

  /* Motion — one easing curve throughout */
  enter: "recovery-enter",
  exit: "recovery-exit",
  pageEnter: "recovery-page",
  step: "recovery-step",
  whisper: "recovery-whisper",
  dot: "recovery-dot",
  transition: "transition-colors duration-700",
} as const;
