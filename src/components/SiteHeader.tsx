import NextLink from "next/link";
import { cn, typography } from "@/design-system";

export function SiteHeader() {
  return (
    <header className="px-6 pt-6">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
        <NextLink
          href="/"
          className="font-mono text-lg tracking-widest text-ink transition-opacity hover:opacity-80"
        >
          MOOD<span className="text-osd">CAM</span>
        </NextLink>
        <nav className="flex items-center gap-6">
          <NextLink
            href="/support"
            className={cn(typography["body-sm-strong"], "text-body hover:text-ink transition-colors")}
          >
            지원
          </NextLink>
        </nav>
      </div>
    </header>
  );
}
