import { brief } from "@/components/brief/styles";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${brief.pageEnter} relative z-10 flex min-h-full flex-1 flex-col`}
    >
      {children}
    </div>
  );
}
