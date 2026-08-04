import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteFooter } from "@/components/SiteFooter";

// 앱과 동일한 Pretendard — iOS 번들 otf를 KS X 1001 서브셋 woff2로 변환해 자체 서빙
// (원본: dream-app/ios/Resources/Fonts, OFL — src/fonts/LICENSE-Pretendard.txt)
const pretendard = localFont({
  variable: "--font-pretendard",
  src: [
    { path: "../fonts/Pretendard-Medium.woff2", weight: "500" },
    { path: "../fonts/Pretendard-SemiBold.woff2", weight: "600" },
    { path: "../fonts/Pretendard-Bold.woff2", weight: "700" },
    { path: "../fonts/Pretendard-ExtraBold.woff2", weight: "800" },
  ],
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
