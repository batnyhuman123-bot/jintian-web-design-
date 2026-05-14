import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://jintian.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JINTIAN — Men’s Premium Wellness",
    template: "%s · JINTIAN",
  },
  description:
    "JINTIAN is a luxury men’s wellness brand built for energy, strength, and confidence — combining clinically studied botanicals with a cinematic, science-meets-nature experience.",
  keywords: [
    "JINTIAN",
    "men’s wellness",
    "vitality",
    "Tongkat Ali",
    "NU-PREP ERX",
    "premium supplements",
  ],
  openGraph: {
    title: "JINTIAN — Men’s Premium Wellness",
    description:
      "Built for energy, strength, and confidence. Premium formulations backed by science and inspired by nature.",
    url: siteUrl,
    siteName: "JINTIAN",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JINTIAN — Men’s Premium Wellness",
    description:
      "Built for energy, strength, and confidence. Premium formulations backed by science and inspired by nature.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen bg-jintian-cream font-sans font-normal antialiased">
        {children}
      </body>
    </html>
  );
}
