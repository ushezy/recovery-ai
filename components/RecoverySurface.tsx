import { brief } from "@/components/brief/styles";

type RecoverySurfaceProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "main";
};

export function RecoverySurface({
  children,
  className = "",
  as: Tag = "div",
}: RecoverySurfaceProps) {
  return (
    <Tag className={`brief-titanium relative ${brief.textPrimary} ${className}`}>
      <div
        aria-hidden
        className="brief-titanium-texture brief-titanium-light pointer-events-none absolute inset-0"
      />
      {children}
    </Tag>
  );
}
