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
