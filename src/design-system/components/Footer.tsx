import NextLink from "next/link";
import { Text } from "./Text";
import { cn } from "../cn";
import { typography } from "../typography";

const footerLinks = [
  { label: "Download", href: "/download" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Discord", href: "https://discord.com" },
  { label: "X", href: "https://x.com" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer({
  copyright = `© ${new Date().getFullYear()}`,
  className,
}: {
  copyright?: string;
  className?: string;
}) {
  return (
    <footer className={cn("border-t border-hairline px-6 py-8", className)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <NextLink
              key={link.label}
              href={link.href}
              className={cn(typography["caption-sm"], "text-body")}
            >
              {link.label}
            </NextLink>
          ))}
        </nav>
        <Text variant="caption-sm" className="text-body">
          {copyright}
        </Text>
      </div>
    </footer>
  );
}
