import type { ReactNode } from "react";
import { cn } from "../cn";
import { typography } from "../typography";

export function TrafficLights({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-1.5", className)} aria-hidden>
      <span className="h-3 w-3 rounded-full bg-terminal-red" />
      <span className="h-3 w-3 rounded-full bg-terminal-yellow" />
      <span className="h-3 w-3 rounded-full bg-terminal-green" />
    </div>
  );
}

export function TerminalCommand({ children }: { children: ReactNode }) {
  return <div className="text-ink">{children}</div>;
}

export function TerminalComment({ children }: { children: ReactNode }) {
  return <div className="text-mute">{children}</div>;
}

export function TerminalCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-hairline bg-canvas p-4", className)}>
      <TrafficLights />
      <div className={cn("mt-3 space-y-1 overflow-x-auto", typography["code-sm"])}>
        {children}
      </div>
    </div>
  );
}
