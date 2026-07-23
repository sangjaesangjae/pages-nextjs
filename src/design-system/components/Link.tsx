import NextLink from "next/link";
import type { ComponentProps } from "react";
import { cn } from "../cn";
import { typography } from "../typography";

type LinkProps = ComponentProps<typeof NextLink>;

export function LinkInline({ className, ...rest }: LinkProps) {
  return (
    <NextLink
      className={cn("text-ink underline", typography["body-md"], className)}
      {...rest}
    />
  );
}

export function LinkMute({ className, ...rest }: LinkProps) {
  return (
    <NextLink
      className={cn("text-body underline", typography["body-sm"], className)}
      {...rest}
    />
  );
}
