import type { Metadata } from "next";
import { Text, cn, typography } from "@/design-system";
import { site } from "@/lib/site";
import { NonogramBoard } from "@/components/NonogramBoard";
import { PixelArt } from "@/components/PixelArt";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/* 모드 카드 아이콘은 전부 앱 puzzles.json의 실제 5×5 도안 */
const modes = [
  {
    title: "레벨 여행",
    description:
      "쉬움부터 전문가까지 230개 퍼즐을 순서대로. 막히면 힌트가, 실수하면 되돌리기가 기다려요.",
    art: {
      label: "깃발 도안 (level-003)",
      palette: ["#8a8471", "#e64545"],
      pixels: [
        [1, 2, 2, 2, 0],
        [1, 2, 2, 2, 0],
        [1, 2, 2, 2, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
      ],
    },
  },
  {
    title: "타임어택",
    description:
      "완성했던 도안을 이번엔 더 빠르게. 최고 기록을 갱신하고 리더보드에서 순위를 겨뤄요.",
    art: {
      label: "시계 도안 (level-164)",
      palette: ["#f5edd6", "#2d2d2d"],
      pixels: [
        [0, 1, 1, 1, 0],
        [1, 1, 2, 1, 1],
        [1, 1, 2, 2, 1],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0],
      ],
    },
  },
  {
    title: "도안 수집",
    description:
      "클리어한 퍼즐은 컬러 픽셀 아트가 되어 갤러리에 채워져요. 다음 그림이 궁금해지는 수집의 재미.",
    art: {
      label: "액자 도안 (level-012)",
      palette: ["#c77b4a", "#f7c948"],
      pixels: [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 2, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
      ],
    },
  },
];

/* 앱 난이도 체계 그대로 (AppColor.Difficulty + puzzles.json 실측) */
const difficulties = [
  { name: "쉬움", size: "5×5", count: 70, dot: "bg-diff-easy", chip: "bg-diff-easy-bg" },
  { name: "보통", size: "10×10", count: 80, dot: "bg-diff-normal", chip: "bg-diff-normal-bg" },
  { name: "어려움", size: "15×15", count: 45, dot: "bg-diff-hard", chip: "bg-diff-hard-bg" },
  { name: "전문가", size: "15×15", count: 35, dot: "bg-diff-expert", chip: "bg-diff-expert-bg" },
];

const confetti: Array<{
  color: string;
  top: string;
  left?: string;
  right?: string;
  delay: string;
}> = [
  { color: "#f7c948", top: "18%", left: "8%", delay: "0s" },
  { color: "#fffdf4", top: "62%", left: "14%", delay: "0.9s" },
  { color: "#f5a79b", top: "26%", left: "26%", delay: "1.7s" },
  { color: "#8fcdeb", top: "70%", right: "24%", delay: "0.4s" },
  { color: "#f7c948", top: "20%", right: "12%", delay: "1.2s" },
  { color: "#fffdf4", top: "58%", right: "7%", delay: "2.1s" },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* ── 히어로: 카피 + 스스로 풀리는 보드 ─────────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-20">
        <div className="grid-paper absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid w-full max-w-5xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <span
              className={cn(
                typography["body-sm-strong"],
                "inline-flex items-center gap-2 rounded-full border border-sprout-soft bg-sprout-tint px-4 py-1.5 text-sprout-dark",
              )}
            >
              <span className="inline-block size-2.5 rounded-[3px] bg-sprout" aria-hidden />
              네모로직 퍼즐
            </span>
            <Text as="h1" variant="display-xl" className="mt-6 text-ink">
              숫자를 따라 한 칸씩,
              <br />
              숨은 그림이 나타나요
            </Text>
            <Text
              variant="body-md"
              className="mx-auto mt-6 max-w-md text-body lg:mx-0"
            >
              가로세로 숫자 힌트만으로 픽셀 그림을 완성하는 네모로직 퍼즐,{" "}
              {site.appName}. 도안 230개를 마스코트의 응원 속에서 차근차근
              풀어가요.
            </Text>
            <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
              <span
                className={cn(
                  typography["body-sm-strong"],
                  "inline-flex items-center gap-2 rounded-full border border-star bg-star-soft px-5 py-2.5 text-star-deep",
                )}
              >
                <span aria-hidden>★</span> App Store 출시 준비 중
              </span>
              <Text variant="caption-sm" className="text-mute">
                도안 230개 · 난이도 4단계 · 타임어택 리더보드
              </Text>
            </div>
          </div>

          <div className="mx-auto w-fit pb-8 lg:pb-4">
            <NonogramBoard />
          </div>
        </div>
      </section>

      {/* ── 모드 3종 ──────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-5xl">
          <Text as="h2" variant="display-lg" className="text-center text-ink">
            푸는 재미, 세 가지
          </Text>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {modes.map((mode) => (
              <article
                key={mode.title}
                className="rounded-xl border border-hairline bg-paper p-6 shadow-[0_6px_20px_rgb(45_45_45/0.05)]"
              >
                <div className="flex size-14 items-center justify-center rounded-lg bg-surface-soft">
                  <PixelArt
                    pixels={mode.art.pixels}
                    palette={mode.art.palette}
                    cell={7}
                    label={mode.art.label}
                  />
                </div>
                <Text as="h3" variant="heading-md" className="mt-5 text-ink">
                  {mode.title}
                </Text>
                <Text variant="body-sm" className="mt-2 text-body">
                  {mode.description}
                </Text>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 난이도 ────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-5xl rounded-xl border border-hairline bg-paper px-6 py-12 text-center sm:px-10">
          <Text as="h2" variant="display-lg" className="text-ink">
            오늘은 어떤 난이도부터?
          </Text>
          <Text variant="body-sm" className="mx-auto mt-3 max-w-md text-body">
            5×5 한 입 퍼즐부터 15×15 대작 도안까지, 실력에 맞춰 골라 풀어요.
          </Text>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {difficulties.map((d) => (
              <li
                key={d.name}
                className={cn("flex items-center gap-2.5 rounded-full px-5 py-2.5", d.chip)}
              >
                <span className={cn("size-3 rounded-[4px]", d.dot)} aria-hidden />
                <span className={cn(typography["body-sm-strong"], "text-ink")}>{d.name}</span>
                <span className={cn(typography["caption-sm"], "text-charcoal/70")}>
                  {d.size} · {d.count}개
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 마무리 CTA (앱의 클리어 화면 그린) ────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl bg-celebrate px-8 py-16 text-center">
          {confetti.map((c, i) => (
            <span
              key={i}
              className="confetti"
              aria-hidden
              style={{
                background: c.color,
                top: c.top,
                left: c.left,
                right: c.right,
                animationDelay: c.delay,
              }}
            />
          ))}
          <Image
            src="/images/mascot-celebrate.png"
            alt=""
            width={150}
            height={150}
            className="mascot-bob pointer-events-none absolute -bottom-5 right-2 w-28 select-none sm:right-8 sm:w-36"
          />
          <Text as="h2" variant="display-lg" className="relative text-on-dark">
            오늘의 한 조각,
            <br />곧 App Store에서 만나요
          </Text>
          <Text variant="body-sm" className="relative mx-auto mt-4 max-w-sm text-on-dark-mute">
            출시 소식이 궁금하다면 언제든 편하게 물어보세요.
          </Text>
          <a
            href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(
              `${site.appName} 출시 알림 요청`,
            )}`}
            className={cn(
              typography["button-md"],
              "relative mt-8 inline-flex h-11 items-center rounded-full bg-paper px-6 text-ink transition-transform active:translate-y-[2px]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-celebrate",
            )}
          >
            출시 알림 받기
          </a>
        </div>
      </section>
    </main>
  );
}
