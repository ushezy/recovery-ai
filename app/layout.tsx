import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RecoverySurface } from "@/components/RecoverySurface";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recovery AI | Know your recovery. Own your day.",
  description: "Personalized recovery insights for better daily decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <RecoverySurface className="flex min-h-full flex-col">
          {children}
        </RecoverySurface>
      </body>
    </html>
  );
}
