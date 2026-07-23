import type { ReactNode } from "react";
import { Text } from "./Text";
import { cn } from "../cn";

export function FaqRow({
  question,
  answer,
  className,
}: {
  question: ReactNode;
  answer: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-b border-hairline py-4", className)}>
      <Text variant="heading-sm" className="text-ink">
        {question}
      </Text>
      <Text variant="body-md" className="mt-1 text-body">
        {answer}
      </Text>
    </div>
  );
}
