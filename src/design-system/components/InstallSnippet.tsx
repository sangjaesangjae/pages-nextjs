"use client";

import { useState } from "react";
import { cn } from "../cn";
import { typography } from "../typography";

export function InstallSnippet({
  command,
  className,
}: {
  command: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div
      className={cn(
        "flex h-12 items-center justify-between gap-4 rounded-full bg-surface-soft px-5",
        className,
      )}
    >
      <code className={cn("truncate text-ink", typography["code-md"])}>
        {command}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy install command"
        className="flex shrink-0 items-center justify-center text-mute hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-full"
      >
        {copied ? (
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <rect x="7" y="7" width="10" height="10" rx="2" />
            <path d="M4 13V5a2 2 0 0 1 2-2h8" />
          </svg>
        )}
      </button>
    </div>
  );
}
