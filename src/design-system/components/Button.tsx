import type { ButtonHTMLAttributes } from "react";
import { cn } from "../cn";
import { typography } from "../typography";

export type ButtonVariant = "primary" | "secondary" | "pill-on-dark";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2";

const base = cn(
  "inline-flex h-11 items-center justify-center rounded-full px-6 transition-[transform,box-shadow,background-color] duration-150",
  focusRing,
);

/* primary는 앱의 "게임 시작" CTA와 동일: Jua 라벨 + 새싹 그라디언트 + 아래 그림자 턱 */
const variants: Record<ButtonVariant, string> = {
  primary: cn(
    "font-display text-lg text-on-primary",
    "bg-[linear-gradient(180deg,#96c95b_0%,#74a93a_100%)]",
    "shadow-[0_3px_0_#5e9c2e] active:translate-y-[2px] active:shadow-[0_1px_0_#5e9c2e]",
  ),
  secondary: cn(
    typography["button-md"],
    "bg-paper text-ink border border-hairline-strong active:bg-surface-soft",
  ),
  "pill-on-dark": cn(typography["button-md"], "bg-paper text-ink"),
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
        disabled
          ? cn(typography["button-md"], "bg-surface-soft text-mute cursor-not-allowed")
          : variants[variant],
        className,
      )}
      disabled={disabled}
      {...rest}
    />
  );
}
