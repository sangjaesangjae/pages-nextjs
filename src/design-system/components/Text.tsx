import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { typography, type TypographyToken } from "../typography";
import { cn } from "../cn";

type TextOwnProps<T extends ElementType> = {
  as?: T;
  variant: TypographyToken;
  className?: string;
  children?: ReactNode;
};

type TextProps<T extends ElementType> = TextOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps<T>>;

const defaultElement: Record<TypographyToken, ElementType> = {
  "display-xl": "h1",
  "display-lg": "h2",
  "heading-lg": "h2",
  "heading-md": "h3",
  "heading-sm": "h4",
  "body-md": "p",
  "body-strong": "p",
  "body-sm": "p",
  "body-sm-strong": "p",
  "caption-sm": "span",
  "code-md": "code",
  "code-sm": "code",
  "button-md": "span",
};

export function Text<T extends ElementType = "p">({
  as,
  variant,
  className,
  children,
  ...rest
}: TextProps<T>) {
  const Component = as ?? defaultElement[variant];
  return (
    <Component className={cn(typography[variant], className)} {...rest}>
      {children}
    </Component>
  );
}
