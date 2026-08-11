import { brief } from "@/components/brief/styles";
import { SignOutButton } from "@/components/auth/SignOutButton";

export function BriefLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`${brief.page} relative`}>
      <div className="absolute right-6 top-8 md:right-10 md:top-10">
        <SignOutButton />
      </div>
      {children}
    </main>
  );
}
