import type { ButtonHTMLAttributes } from "react";
import { cn } from "../cn";
import { typography } from "../typography";

export type ButtonVariant = "primary" | "secondary" | "pill-on-dark";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2";

const base = cn(
  "inline-flex h-9 items-center justify-center rounded-full px-5 transition-colors",
  typography["button-md"],
  focusRing,
);

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary active:bg-primary-dark",
  secondary: "bg-canvas text-ink border border-hairline-strong",
  "pill-on-dark": "bg-canvas text-ink",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  disabled,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        base,
        disabled ? "bg-surface-soft text-mute cursor-not-allowed" : variants[variant],
        className,
      )}
      disabled={disabled}
      {...rest}
    />
  );
}
