import NextLink from "next/link";
import { cn, typography } from "@/design-system";
import { site } from "@/lib/site";

// ⚠️ 템플릿 placeholder — 새 앱 브랜치에서 로고 마크를 앱 브랜드 글리프로 교체한다.
// 선례: nemo(픽셀 새싹), meokkum(초승달+스파클 SVG — MeokkumGlyphs.tsx).
export function SiteHeader() {
  return (
    <header className="px-6 pt-6">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <NextLink
          href="/"
          className="flex items-center gap-2.5 text-ink transition-opacity hover:opacity-80"
        >
          <span
            className="size-8 rounded-md border border-hairline bg-surface-soft"
            aria-hidden
          />
          <span className="font-display text-xl leading-none">{site.appName}</span>
        </NextLink>
        <nav className="flex items-center gap-4 sm:gap-6">
          {[
            { label: "사용법", href: "/#how" },
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
