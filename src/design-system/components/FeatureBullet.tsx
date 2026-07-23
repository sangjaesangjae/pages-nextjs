import type { ReactNode } from "react";
import { Text } from "./Text";
import { cn } from "../cn";

export function FeatureBullet({
  children,
  dark,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <li className={cn("flex items-start gap-2", className)}>
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className={cn("mt-0.5 h-4 w-4 shrink-0", dark ? "text-on-dark" : "text-ink")}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <Text as="span" variant="body-sm" className={dark ? "text-on-dark-mute" : "text-charcoal"}>
        {children}
      </Text>
    </li>
  );
}
