import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteFooter } from "@/components/SiteFooter";

// Display face only — body and code stay on the OS-native stack (see design-system/tokens.css)
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.appName} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "ko_KR",
    type: "website",
    // ⚠️ 새 앱: public/og.png를 앱 브랜드 소셜 카드(1200×630)로 교체한다 —
    // 브랜드 배경 + 마스코트/히어로 요소 + 한 줄 카피. 선례: meokkum 브랜치
    // (밤하늘+먹꿈이, browse 헤드리스 렌더로 생성).
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
