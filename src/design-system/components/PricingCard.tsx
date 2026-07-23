import type { ReactNode } from "react";
import NextLink from "next/link";
import { Text } from "./Text";
import { FeatureBullet } from "./FeatureBullet";
import { cn } from "../cn";
import { typography } from "../typography";

export interface PricingCardProps {
  variant?: "light" | "dark";
  mascot?: ReactNode;
  tier: string;
  description: string;
  price: string;
  ctaLabel: string;
  ctaHref: string;
  includesLabel?: string;
  features?: string[];
  className?: string;
}

export function PricingCard({
  variant = "light",
  mascot,
  tier,
  description,
  price,
  ctaLabel,
  ctaHref,
  includesLabel,
  features = [],
  className,
}: PricingCardProps) {
  const dark = variant === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-lg p-8",
        dark ? "bg-surface-dark" : "border border-hairline bg-canvas",
        className,
      )}
    >
      {mascot && <div className="h-8 w-8">{mascot}</div>}

      <div className="flex flex-col gap-2">
        <Text variant="heading-md" className={dark ? "text-on-dark" : "text-ink"}>
          {tier}
        </Text>
        <Text variant="body-sm" className={dark ? "text-on-dark-mute" : "text-body"}>
          {description}
        </Text>
      </div>

      <Text variant="display-lg" className={dark ? "text-on-dark" : "text-ink"}>
        {price}
      </Text>

      <NextLink
        href={ctaHref}
        className={cn(
          "inline-flex h-9 items-center justify-center rounded-full px-5",
          typography["button-md"],
          dark ? "bg-canvas text-ink" : "bg-primary text-on-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
        )}
      >
        {ctaLabel}
      </NextLink>

      {includesLabel && features.length > 0 && (
        <div
          className={cn(
            "flex flex-col gap-3 border-t pt-6",
            dark ? "border-white/10" : "border-hairline",
          )}
        >
          <Text
            variant="body-sm-strong"
            className={dark ? "text-on-dark" : "text-ink"}
          >
            {includesLabel}
          </Text>
          <ul className="flex flex-col gap-2">
            {features.map((feature) => (
              <FeatureBullet key={feature} dark={dark}>
                {feature}
              </FeatureBullet>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
