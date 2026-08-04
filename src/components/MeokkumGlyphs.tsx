/* 앱 MeokkumIcon의 벡터 문법을 그대로 옮긴 SVG 글리프 — 24pt 그리드, 스트로크
 * 1.9, 라운드 캡/조인 (이모지·기성 아이콘 금지는 페이지에도 동일하게 적용).
 * 원본: dream-app/ios/Sources/Shared/Core/DesignSystem/MeokkumIcon.swift */

type GlyphProps = {
  size?: number;
  className?: string;
};

const strokeProps = {
  fill: "none",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** 초승달 + 4각 스파클 (moonStar — 탭 홈·브랜드 마크) */
export function MoonStarGlyph({ size = 24, className }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        d="M 15.4 3.6 A 8.9 8.9 0 1 0 20.4 15.9 A 7.2 7.2 0 0 1 15.4 3.6 Z"
        stroke="currentColor"
        {...strokeProps}
      />
      <path
        d="M 18.9 4.1 L 19.6 6.1 L 21.6 6.8 L 19.6 7.5 L 18.9 9.5 L 18.2 7.5 L 16.2 6.8 L 18.2 6.1 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** 4각 스파클 (star4 — 장식) */
export function Star4Glyph({ size = 16, className }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <path
        d="M 12 2.5 L 14.2 9.8 L 21.5 12 L 14.2 14.2 L 12 21.5 L 9.8 14.2 L 2.5 12 L 9.8 9.8 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** 마이크 (mic — 몸통 캡슐 + 픽업 반원 + 스탠드 + 받침, 2026-08-04 재작도 비례) */
export function MicGlyph({ size = 24, className }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <rect x={8.9} y={2.4} width={6.2} height={11} rx={3.1} stroke="currentColor" {...strokeProps} />
      <path d="M 18 10.6 A 6 6 0 0 1 6 10.6" stroke="currentColor" {...strokeProps} />
      <path d="M 12 16.6 L 12 20.6 M 8.4 20.6 L 15.6 20.6" stroke="currentColor" {...strokeProps} />
    </svg>
  );
}

/** 반짝임 돋보기 (sparkSearch — 탭 사전) */
export function SparkSearchGlyph({ size = 24, className }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <circle cx={10.5} cy={10.5} r={6.3} stroke="currentColor" {...strokeProps} />
      <path d="M 15.2 15.2 L 20.6 20.6" stroke="currentColor" {...strokeProps} />
      <path d="M 10.5 7.6 L 11.2 9.8 L 13.4 10.5 L 11.2 11.2 L 10.5 13.4 L 9.8 11.2 L 7.6 10.5 L 9.8 9.8 Z" fill="currentColor" />
    </svg>
  );
}

/** 별 그래프 (starChart — 탭 리포트) */
export function StarChartGlyph({ size = 24, className }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M 4 20 L 4 11.5 M 9.3 20 L 9.3 7.5 M 14.6 20 L 14.6 13 M 19.9 20 L 19.9 9" stroke="currentColor" {...strokeProps} />
      <path d="M 19.9 2.6 L 20.5 4.4 L 22.3 5 L 20.5 5.6 L 19.9 7.4 L 19.3 5.6 L 17.5 5 L 19.3 4.4 Z" fill="currentColor" />
    </svg>
  );
}

/** 자물쇠 (프라이버시 스트립 전용 — 앱 스트로크 문법으로 신규 작도) */
export function LockGlyph({ size = 24, className }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <rect x={4.6} y={10.4} width={14.8} height={10.2} rx={2.6} stroke="currentColor" {...strokeProps} />
      <path d="M 8 10.4 L 8 7.4 A 4 4 0 0 1 16 7.4 L 16 10.4" stroke="currentColor" {...strokeProps} />
      <path d="M 12 14.4 L 12 16.6" stroke="currentColor" {...strokeProps} />
    </svg>
  );
}

/** 노트 + 달 (diaryBook — 탭 일기) */
export function DiaryGlyph({ size = 24, className }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <rect x={4.2} y={3.4} width={15.6} height={17.2} rx={2.6} stroke="currentColor" {...strokeProps} />
      <path d="M 8.6 3.4 L 8.6 20.6" stroke="currentColor" {...strokeProps} />
      <path d="M 16.2 8.6 A 3.1 3.1 0 1 0 17.9 13 A 2.5 2.5 0 0 1 16.2 8.6 Z" stroke="currentColor" {...strokeProps} />
    </svg>
  );
}
