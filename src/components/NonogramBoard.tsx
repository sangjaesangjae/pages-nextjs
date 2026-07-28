import Image from "next/image";
import { Fragment, type CSSProperties } from "react";

/*
 * 스스로 풀리는 네모로직 보드 — 앱의 level-093 "튤립" 실제 도안·힌트.
 * 셀이 하나씩 채워지고, 라인이 완성되면 힌트가 흐려지고(앱의 hintSolved),
 * 다 풀리면 앱의 클리어 순간처럼 도안 원래 색(꽃 핑크·줄기 그린)으로 피어난다.
 * 애니메이션은 전부 CSS(globals.css) — prefers-reduced-motion이면 완성 상태로 정적 표시.
 */

const PALETTE = ["#ec407a", "#66bb6a"]; // 1=꽃잎 핑크, 2=줄기 그린

const GRID = [
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
] as const;

const ROW_HINTS = [[2, 2, 2], [10], [10], [8], [6], [2], [2], [8], [2], [2]];
const COL_HINTS = [[2], [4, 1], [5, 1], [4, 1], [10], [10], [4, 1], [5, 1], [4, 1], [2]];

const N = GRID.length;
const BASE = 0.6; // 첫 셀이 채워지기까지
const STEP = 0.04; // 셀 간 간격
const POP = 0.3; // 셀 채움 애니메이션 길이

// 읽기 순서(위→아래, 좌→우)로 풀이 순번 부여
let order = 0;
const fillOrder: number[][] = GRID.map((row) => row.map((c) => (c ? order++ : -1)));
const totalFilled = order;

const fillDelay = (r: number, c: number) => BASE + fillOrder[r][c] * STEP;
const lineDone = (indices: number[]) => BASE + Math.max(...indices) * STEP + POP;

const rowDoneAt = ROW_HINTS.map((_, r) =>
  lineDone(fillOrder[r].filter((i) => i >= 0)),
);
const colDoneAt = COL_HINTS.map((_, c) =>
  lineDone(fillOrder.map((row) => row[c]).filter((i) => i >= 0)),
);

// 마지막 셀 완료 후 대각선 물결로 도안 색이 피어남 (앱의 lineShimmer 무드)
const BLOOM_AT = BASE + (totalFilled - 1) * STEP + POP + 0.35;
const bloomDelay = (r: number, c: number) => BLOOM_AT + (r + c) * 0.035;
const BADGE_AT = BLOOM_AT + (N - 1) * 2 * 0.035 + 0.5;

const v = (s: number) => ({ "--d": `${s.toFixed(2)}s` }) as CSSProperties;

export function NonogramBoard() {
  return (
    <div className="nono-wrap relative">
      <div
        className="relative rounded-xl border border-cell-border bg-board p-4 shadow-[0_12px_32px_rgb(45_45_45/0.08)] sm:p-5"
        role="img"
        aria-label="네모로직 보드가 스스로 풀리며 튤립 도안이 완성되는 애니메이션"
      >
        <div className="nono-grid">
          {/* 좌상단 코너 */}
          <div />
          {COL_HINTS.map((hints, c) => (
            <div key={`ch-${c}`} className="nono-hint nono-hint-col" style={v(colDoneAt[c])}>
              {hints.map((h, i) => (
                <span key={i}>{h}</span>
              ))}
            </div>
          ))}
          {GRID.map((row, r) => (
            <Fragment key={`row-${r}`}>
              <div className="nono-hint nono-hint-row" style={v(rowDoneAt[r])}>
                {ROW_HINTS[r].map((h, i) => (
                  <span key={i}>{h}</span>
                ))}
              </div>
              {row.map((cell, c) =>
                cell ? (
                  <div
                    key={`${r}-${c}`}
                    className="nono-cell nono-cell-fill"
                    style={
                      {
                        ...v(fillDelay(r, c)),
                        "--b": `${bloomDelay(r, c).toFixed(2)}s`,
                        "--bc": PALETTE[cell - 1],
                      } as CSSProperties
                    }
                  />
                ) : (
                  <div key={`${r}-${c}`} className="nono-cell" />
                ),
              )}
            </Fragment>
          ))}
        </div>

        {/* 클리어 배지 — 앱의 클리어 화면 순간 */}
        <div className="nono-badge" style={v(BADGE_AT)} aria-hidden>
          <span className="text-star" aria-hidden>
            ★
          </span>
          튤립 클리어!
        </div>
      </div>

      {/* 응원하는 마스코트 */}
      <Image
        src="/images/mascot-cheer.png"
        alt=""
        width={168}
        height={168}
        priority
        className="mascot-bob pointer-events-none absolute -bottom-10 -right-4 w-32 select-none sm:-right-10 sm:w-40"
      />
    </div>
  );
}
