import type { ReactNode } from "react";
import { Text } from "./Text";
import { cn } from "../cn";

export function CtaStripDark({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg bg-surface-dark px-8 py-6", className)}>
      <Text variant="heading-lg" className="text-on-dark">
        {children}
      </Text>
    </div>
  );
}
