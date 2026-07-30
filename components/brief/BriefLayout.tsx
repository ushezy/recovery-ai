import { brief } from "@/components/brief/styles";

export function BriefLayout({ children }: { children: React.ReactNode }) {
  return <main className={brief.page}>{children}</main>;
}
