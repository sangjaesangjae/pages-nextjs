import NextLink from "next/link";
import { cn, typography } from "@/design-system";
import { site } from "@/lib/site";

const links = [
  { label: "홈", href: "/" },
  { label: "개인정보 처리방침", href: "/privacy" },
  { label: "지원", href: "/support" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline px-6 py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              className={cn(typography["caption-sm"], "text-body")}
            >
              {link.label}
            </NextLink>
          ))}
        </nav>
        <span className={cn(typography["caption-sm"], "text-body")}>
          © {new Date().getFullYear()} {site.name}
        </span>
      </div>
    </footer>
  );
}
