import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InPress | AI Automation for Houston Business Owners",
  description:
    "Stop hiring. Start automating. AI agents that handle customer service, scheduling, lead follow-up, and more — built for Houston, Texas small business owners. Give us one chance. You'll never leave.",
  keywords: [
    "AI automation Houston",
    "AI agents Houston Texas",
    "Houston small business automation",
    "customer service AI Houston",
    "scheduling automation Houston",
    "lead follow-up automation",
    "Houston business automation",
    "AI for small business Houston",
    "virtual assistant Houston",
    "InPress AI",
  ],
  openGraph: {
    title: "InPress | AI Automation for Houston Business Owners",
    description:
      "AI agents that handle customer service, scheduling, and lead follow-up — built for Houston business owners. Give us one chance. You'll never want to leave.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InPress | AI Automation for Houston Business Owners",
    description:
      "AI agents that handle customer service, scheduling, and lead follow-up — built for Houston business owners. Give us one chance. You'll never want to leave.",
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
