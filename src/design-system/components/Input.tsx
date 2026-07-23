import type { InputHTMLAttributes } from "react";
import { cn } from "../cn";
import { typography } from "../typography";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2";

export function TextInput({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-full border border-hairline bg-canvas px-4 text-ink placeholder:text-mute",
        "focus:border-ink",
        typography["body-md"],
        focusRing,
        className,
      )}
      {...rest}
    />
  );
}

export function SearchPill({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mute"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="9" cy="9" r="6" />
        <path d="M17 17l-3.5-3.5" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        placeholder="Search models"
        className={cn(
          "h-9 w-full rounded-full bg-surface-soft pl-10 pr-4 text-ink placeholder:text-mute",
          "focus:bg-canvas",
          typography["body-sm"],
          focusRing,
          className,
        )}
        {...rest}
      />
    </div>
  );
}
