/**
 * Type scale — 앱의 AppTypography와 동일한 역할 분담.
 * 디스플레이(Jua, 단일 웨이트)는 display-xl~heading-md까지,
 * 본문·라벨은 나눔스퀘어라운드(R=400, B=700)를 쓴다.
 */
export const typography = {
  "display-xl":
    "font-display font-normal text-[clamp(2.35rem,5.2vw,3.15rem)] leading-[1.28] tracking-normal break-keep",
  "display-lg": "font-display font-normal text-[2rem] leading-[1.3] break-keep",
  "heading-lg": "font-display font-normal text-2xl leading-[1.35] break-keep",
  "heading-md": "font-display font-normal text-xl leading-[1.4] break-keep",
  "heading-sm": "font-sans text-lg font-bold leading-[1.56]",
  "body-md": "font-sans text-base font-normal leading-[1.65]",
  "body-strong": "font-sans text-base font-bold leading-[1.65]",
  "body-sm": "font-sans text-sm font-normal leading-[1.6]",
  "body-sm-strong": "font-sans text-sm font-bold leading-[1.6]",
  "caption-sm": "font-sans text-xs font-normal leading-[1.4] tracking-[0.01em]",
  "code-md": "font-mono text-base font-normal leading-[1.5]",
  "code-sm": "font-mono text-sm font-normal leading-[1.43]",
  "button-md": "font-sans text-sm font-bold leading-none",
} as const;

export type TypographyToken = keyof typeof typography;
