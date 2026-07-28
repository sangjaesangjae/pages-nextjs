import NextLink from "next/link";
import { cn, typography } from "@/design-system";
import { site } from "@/lib/site";
import { PixelArt } from "@/components/PixelArt";

// 로고 마크: 앱 아이콘의 새싹 네모를 4칸 픽셀로
const LOGO_PIXELS = [
  [1, 2],
  [2, 1],
] as const;
const LOGO_PALETTE = ["#8bc34a", "#f7c948"] as const;

export function SiteHeader() {
  return (
    <header className="px-6 pt-6">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <NextLink
          href="/"
          className="flex items-center gap-2.5 text-ink transition-opacity hover:opacity-80"
        >
          <span className="flex items-center justify-center rounded-md border border-hairline bg-paper p-1.5">
            <PixelArt pixels={LOGO_PIXELS} palette={LOGO_PALETTE} cell={7} />
          </span>
          <span className="font-display text-xl leading-none">{site.appName}</span>
        </NextLink>
        <nav className="flex items-center gap-4 sm:gap-6">
          {[
            { label: "놀이법", href: "/#how" },
            { label: "모드", href: "/#modes" },
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
