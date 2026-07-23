import type { ReactNode } from "react";
import { cn } from "../cn";
import { typography } from "../typography";

export function CommandTag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <code
      className={cn(
        "inline-block rounded-full bg-surface-soft px-3 py-1.5 text-ink",
        typography["code-sm"],
        className,
      )}
    >
      {children}
    </code>
  );
}
