/**
 * Type scale — MoodCam. 본문·헤딩 모두 앱과 동일한 시스템 스택(무거운 웨이트로
 * 카메라 UI의 담백함 유지), OSD·타임스탬프류만 font-mono(Share Tech Mono).
 */
export const typography = {
  "display-xl":
    "font-display text-[clamp(2.2rem,5vw,3.1rem)] font-extrabold leading-[1.22] tracking-tight break-keep",
  "display-lg": "font-display text-[2rem] font-extrabold leading-[1.25] tracking-tight break-keep",
  "heading-lg": "font-display text-2xl font-bold leading-[1.33] break-keep",
  "heading-md": "font-display text-xl font-bold leading-[1.4] break-keep",
  "heading-sm": "font-sans text-lg font-semibold leading-[1.56]",
  "body-md": "font-sans text-base font-normal leading-[1.65]",
  "body-strong": "font-sans text-base font-semibold leading-[1.65]",
  "body-sm": "font-sans text-sm font-normal leading-[1.6]",
  "body-sm-strong": "font-sans text-sm font-semibold leading-[1.6]",
  "caption-sm": "font-sans text-xs font-normal leading-[1.4]",
  "code-md": "font-mono text-base font-normal leading-[1.5]",
  "code-sm": "font-mono text-sm font-normal leading-[1.43]",
  "button-md": "font-sans text-sm font-semibold leading-none",
} as const;

export type TypographyToken = keyof typeof typography;
