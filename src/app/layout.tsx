import type { Metadata } from "next";
import { Jua } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

// 앱과 동일한 폰트 페어링 — Jua(디스플레이) + 나눔스퀘어라운드(본문, 서브셋 woff2 자체 호스팅)
const jua = Jua({
  variable: "--font-jua",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const nanum = localFont({
  src: [
    { path: "../fonts/NanumSquareRoundR.woff2", weight: "400", style: "normal" },
    { path: "../fonts/NanumSquareRoundB.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-nanum",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.appName} — 네모로직 퍼즐 | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/images/og.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${jua.variable} ${nanum.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
