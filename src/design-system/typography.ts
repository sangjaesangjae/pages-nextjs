/**
 * Type scale — 앱 AppTypography와 동일한 원칙: Pretendard 단일 패밀리, 웨이트
 * 대비로 위계를 만든다 (display·헤딩 = ExtraBold 800, 본문 = Medium 500,
 * 강조 = SemiBold 600). 자간은 큰 급에서만 살짝 조인다 (Tracking 토큰).
 */
export const typography = {
  "display-xl": "font-display text-4xl font-extrabold leading-[1.16] tracking-[-0.02em]",
  "display-lg": "font-display text-3xl font-extrabold leading-[1.22] tracking-[-0.015em]",
  "heading-lg": "font-display text-2xl font-extrabold leading-[1.33] tracking-[-0.01em]",
  "heading-md": "font-sans text-xl font-bold leading-[1.4]",
  "heading-sm": "font-sans text-lg font-bold leading-[1.56]",
  "body-md": "font-sans text-base font-medium leading-[1.6]",
  "body-strong": "font-sans text-base font-semibold leading-[1.6]",
  "body-sm": "font-sans text-sm font-medium leading-[1.55]",
  "body-sm-strong": "font-sans text-sm font-semibold leading-[1.55]",
  "caption-sm": "font-sans text-xs font-medium leading-[1.33]",
  "code-md": "font-mono text-base font-normal leading-[1.5]",
  "code-sm": "font-mono text-sm font-normal leading-[1.43]",
  "button-md": "font-sans text-sm font-semibold leading-none",
} as const;

export type TypographyToken = keyof typeof typography;
