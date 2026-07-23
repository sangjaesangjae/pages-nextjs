/**
 * Type scale. Display face (SF Pro Rounded / Nunito fallback) is reserved for
 * display-xl through heading-lg; everything 20px and below rides the OS body face.
 */
export const typography = {
  "display-xl": "font-display text-4xl font-medium leading-[1.11] tracking-normal",
  "display-lg": "font-display text-3xl font-medium leading-[1.2]",
  "heading-lg": "font-display text-2xl font-semibold leading-[1.33]",
  "heading-md": "font-sans text-xl font-medium leading-[1.4]",
  "heading-sm": "font-sans text-lg font-medium leading-[1.56]",
  "body-md": "font-sans text-base font-normal leading-[1.5]",
  "body-strong": "font-sans text-base font-medium leading-[1.5]",
  "body-sm": "font-sans text-sm font-normal leading-[1.43]",
  "body-sm-strong": "font-sans text-sm font-medium leading-[1.43]",
  "caption-sm": "font-sans text-xs font-normal leading-[1.33]",
  "code-md": "font-mono text-base font-normal leading-[1.5]",
  "code-sm": "font-mono text-sm font-normal leading-[1.43]",
  "button-md": "font-sans text-sm font-medium leading-none",
} as const;

export type TypographyToken = keyof typeof typography;
