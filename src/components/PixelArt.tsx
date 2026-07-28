/*
 * 앱 puzzles.json의 실제 도안을 그대로 렌더링하는 픽셀 아트.
 * pixels의 0은 빈 칸, 1+는 palette 인덱스.
 */
export interface PixelArtProps {
  pixels: readonly (readonly number[])[];
  palette: readonly string[];
  /** 셀 한 변(px) */
  cell?: number;
  label?: string;
}

export function PixelArt({ pixels, palette, cell = 8, label }: PixelArtProps) {
  const n = pixels[0].length;
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${n}, ${cell}px)`,
        gap: 1,
      }}
    >
      {pixels.flatMap((row, r) =>
        row.map((p, c) => (
          <div
            key={`${r}-${c}`}
            style={{
              width: cell,
              height: cell,
              borderRadius: 1.5,
              background: p ? palette[p - 1] : "transparent",
            }}
          />
        )),
      )}
    </div>
  );
}
