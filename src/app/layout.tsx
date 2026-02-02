import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[BUSINESS NAME] | Your AI Team. Fraction of the Cost.",
  description:
    "Stop hiring. Start automating. AI agents that handle customer service, scheduling, lead follow-up, and more — so small business owners can focus on growth, not busywork.",
  keywords: [
    "AI automation",
    "AI agents",
    "small business automation",
    "customer service AI",
    "scheduling automation",
    "lead follow-up",
    "business automation",
  ],
  openGraph: {
    title: "[BUSINESS NAME] | Your AI Team. Fraction of the Cost.",
    description:
      "AI agents that handle customer service, scheduling, and lead follow-up — so you can focus on growing your business.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[BUSINESS NAME] | Your AI Team. Fraction of the Cost.",
    description:
      "AI agents that handle customer service, scheduling, and lead follow-up — so you can focus on growing your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
