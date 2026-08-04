import NextLink from "next/link";
import { cn, typography } from "@/design-system";
import { site } from "@/lib/site";
import { MoonStarGlyph } from "@/components/MeokkumGlyphs";

// 로고 마크: 앱 브랜드 글리프(초승달+스파클)를 그대로 사용
export function SiteHeader() {
  return (
    <header className="px-6 pt-6">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <NextLink
          href="/"
          className="flex items-center gap-2.5 text-ink transition-opacity hover:opacity-80"
        >
          <span className="flex items-center justify-center rounded-md border border-hairline bg-surface p-1.5 text-moon">
            <MoonStarGlyph size={20} />
          </span>
          <span className="font-display text-xl font-extrabold leading-none">
            {site.appName}
          </span>
        </NextLink>
        <nav className="flex items-center gap-4 sm:gap-6">
          {[
            { label: "아침 루틴", href: "/#how" },
            { label: "기능", href: "/#features" },
            { label: "FAQ", href: "/#faq" },
            { label: "지원", href: "/support" },
          ].map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              className={cn(
                typography["body-sm-strong"],
                "text-body hover:text-ink transition-colors",
              )}
            >
              {link.label}
            </NextLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
