import { cn, typography } from "@/design-system";
import { MicGlyph, Star4Glyph } from "@/components/MeokkumGlyphs";

/* 히어로 데모 — 앱의 핵심 루프를 유리 카드 한 장으로 재생한다:
 * 말로 기록된 꿈 문장이 떠오르고 → 상징(돼지·구름)이 잡히고 → 길몽 판정이 핀다.
 * 등장 순서는 globals.css의 --d 지연으로 연출 (nemo 보드와 같은 관례). */

const DREAM_LINES = [
  { text: "새벽에 분홍 구름 위를 걷는데,", d: "0.3s" },
  { text: "커다란 돼지가 품으로 뛰어들어 안겼다.", d: "0.75s" },
];

const SYMBOL_CHIPS = [
  { name: "돼지", d: "1.5s" },
  { name: "구름", d: "1.7s" },
];

export function DreamDemo() {
  return (
    <div className="glass-card w-full max-w-sm p-6" role="img" aria-label="먹꿈 기록 데모 — 말로 남긴 꿈에서 돼지·구름 상징이 감지되고 길몽으로 판정되는 화면">
      {/* 헤더: 날짜 + 듣는 중 마이크 */}
      <div className="flex items-center justify-between">
        <span className={cn(typography["caption-sm"], "text-mute")}>
          8월 4일 목요일 · 아침
        </span>
        <span className="mic-pulse flex size-9 items-center justify-center rounded-full bg-primary text-on-primary">
          <MicGlyph size={18} />
        </span>
      </div>

      {/* 받아쓰인 꿈 본문 */}
      <div className="mt-5 flex flex-col gap-1.5">
        {DREAM_LINES.map((line) => (
          <p
            key={line.text}
            className={cn(typography["body-md"], "demo-line text-charcoal")}
            style={{ "--d": line.d } as React.CSSProperties}
          >
            {line.text}
          </p>
        ))}
      </div>

      {/* 감지된 상징 칩 */}
      <div className="mt-6 flex items-center gap-2">
        <span className={cn(typography["caption-sm"], "demo-line text-mute")} style={{ "--d": "1.35s" } as React.CSSProperties}>
          감지된 상징
        </span>
        {SYMBOL_CHIPS.map((chip) => (
          <span
            key={chip.name}
            className={cn(
              typography["body-sm-strong"],
              "demo-chip rounded-full border border-hairline-strong bg-brand-tint px-3.5 py-1.5 text-brand-text",
            )}
            style={{ "--d": chip.d } as React.CSSProperties}
          >
            {chip.name}
          </span>
        ))}
      </div>

      {/* 길몽 판정 + 즉답 해몽 */}
      <div className="mt-5 border-t border-hairline pt-5">
        <div className="flex items-center gap-2.5">
          <span
            className={cn(
              typography["body-sm-strong"],
              "demo-badge inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-1.5 text-ink-inverse",
            )}
            style={{ "--d": "2.2s" } as React.CSSProperties}
          >
            길몽
          </span>
          <span className="demo-sparkle text-gold" style={{ "--d": "2.45s" } as React.CSSProperties}>
            <Star4Glyph size={15} />
          </span>
        </div>
        <p
          className={cn(typography["body-sm"], "demo-line mt-3 text-body")}
          style={{ "--d": "2.6s" } as React.CSSProperties}
        >
          돼지가 품에 안기는 꿈은 재물이 들어오는 대표적인 길몽이에요. 오늘의
          기운을 먹꿈이가 꼭꼭 씹어 삼켰어요.
        </p>
      </div>
    </div>
  );
}
