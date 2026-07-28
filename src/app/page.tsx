import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { FaqRow, Text, cn, typography } from "@/design-system";
import { site } from "@/lib/site";
import { NonogramBoard } from "@/components/NonogramBoard";
import { PixelArt } from "@/components/PixelArt";

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

/* 놀이법 3단계 — 각 단계의 미니 데모는 페이지 하단 HowCell/미니 보드로 그린다 */
const faqs = [
  {
    q: "네모로직이 처음인데 어렵지 않을까요?",
    a: "숫자 읽는 법 하나만 알면 바로 시작할 수 있어요. 5×5 쉬움 도안부터 차례로 풀다 보면 자연스럽게 실력이 늘고, 막히면 힌트의 도움을 받을 수 있어요.",
  },
  {
    q: "실수하면 어떻게 되나요?",
    a: "틀린 칸은 바로 표시해 드려요. 되돌리기로 직전 상태로 복구할 수 있으니 부담 없이 추리해 보세요.",
  },
  {
    q: "진행 상황은 어디에 저장되나요?",
    a: "모든 기록은 이용자의 기기 안에만 저장돼요. 개발자 서버로 전송되지 않으며, 앱을 삭제하면 기록도 함께 삭제돼요.",
  },
  {
    q: "무료인가요?",
    a: "네, 모든 퍼즐을 무료로 즐길 수 있어요. 무료 서비스 유지를 위해 광고가 표시돼요.",
  },
  {
    q: "타임어택 기록은 어떻게 겨루나요?",
    a: "이미 완성한 도안을 다시 더 빠르게 푸는 모드예요. 도안별 최고 기록이 리더보드에 올라 다른 플레이어와 순위를 겨뤄요.",
  },
];

/* 미니 튤립 (level-093 축소판) — 놀이법 3단계 완성 예시 */
const tulipMini = {
  palette: ["#ec407a", "#66bb6a"],
  pixels: [
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
  ],
};

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

/* 놀이법 데모용 한 줄 보드: 0=빈 칸, 1=채운 칸, 2=논리로 확정된 칸(그린) */
function DemoRow({ hint, cells }: { hint: string; cells: number[] }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-7 text-right font-sans text-xs font-bold tabular-nums text-hint">
        {hint}
      </span>
      <div className="flex gap-0.5">
        {cells.map((c, i) => (
          <span
            key={i}
            className={cn(
              "inline-block size-6 rounded-[3px] border",
              c === 0 && "border-cell-border bg-cell",
              c === 1 && "border-ink bg-ink",
              c === 2 && "border-sprout-deep bg-sprout",
            )}
          />
        ))}
      </div>
    </div>
  );
}

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

      {/* ── 놀이법 3단계 ──────────────────────────────────────────────── */}
      <section id="how" className="px-6 pb-24">
        <div className="mx-auto w-full max-w-5xl">
          <Text as="h2" variant="display-lg" className="text-center text-ink">
            네모로직, 3분이면 충분해요
          </Text>
          <Text variant="body-sm" className="mx-auto mt-3 max-w-md text-center text-body">
            규칙은 하나 — 숫자는 그 줄에서 연속으로 칠해지는 칸의 개수예요.
          </Text>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <article className="rounded-xl border border-hairline bg-paper p-6">
              <span className="font-display text-sm text-sprout-dark">첫 번째</span>
              <Text as="h3" variant="heading-md" className="mt-1 text-ink">
                숫자를 읽어요
              </Text>
              <Text variant="body-sm" className="mt-2 text-body">
                힌트가 3이면 이 줄 어딘가에 연속한 세 칸이 칠해져요.
              </Text>
              <div className="mt-5 flex flex-col gap-2">
                <DemoRow hint="3" cells={[0, 1, 1, 1, 0]} />
              </div>
            </article>
            <article className="rounded-xl border border-hairline bg-paper p-6">
              <span className="font-display text-sm text-sprout-dark">두 번째</span>
              <Text as="h3" variant="heading-md" className="mt-1 text-ink">
                확실한 칸부터 채워요
              </Text>
              <Text variant="body-sm" className="mt-2 text-body">
                다섯 칸에 4가 오면, 어느 쪽에 붙든 가운데 세 칸은 반드시
                포함돼요.
              </Text>
              <div className="mt-5 flex flex-col gap-2">
                <DemoRow hint="4" cells={[0, 2, 2, 2, 0]} />
              </div>
            </article>
            <article className="rounded-xl border border-hairline bg-paper p-6">
              <span className="font-display text-sm text-sprout-dark">세 번째</span>
              <Text as="h3" variant="heading-md" className="mt-1 text-ink">
                그림이 나타나요
              </Text>
              <Text variant="body-sm" className="mt-2 text-body">
                가로세로가 전부 맞아떨어지면 숨어 있던 도안이 완성돼요.
              </Text>
              <div className="mt-5">
                <PixelArt
                  pixels={tulipMini.pixels}
                  palette={tulipMini.palette}
                  cell={6}
                  label="완성된 튤립 도안"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── 모드 3종 ──────────────────────────────────────────────────── */}
      <section id="modes" className="px-6 pb-24">
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

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section id="faq" className="px-6 pb-24">
        <div className="mx-auto w-full max-w-3xl">
          <Text as="h2" variant="display-lg" className="text-center text-ink">
            자주 묻는 질문
          </Text>
          <div className="mt-8">
            {faqs.map((f) => (
              <FaqRow key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
          <Text variant="body-sm" className="mt-6 text-center text-body">
            더 궁금한 점은{" "}
            <NextLink href="/support" className="text-sprout-dark underline">
              지원 페이지
            </NextLink>
            에서 물어보세요.
          </Text>
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
