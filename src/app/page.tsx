import type { Metadata } from "next";
import NextLink from "next/link";
import { FaqRow, Text, cn, typography } from "@/design-system";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/* ⚠️ 템플릿 placeholder — 새 앱 브랜치에서 전 섹션을 앱 내용으로 채운다.
 *
 * 이 스캐폴드는 nemo·meokkum 랜딩에서 검증된 6섹션 구조다. 순서 그대로 두고
 * 내용만 교체하는 것을 권장한다:
 *   ① 히어로(카피 + 라이브 데모) ② 사용법 3단계 ③ 기능 3종
 *   ④ 도메인 칩 스트립 ⑤ FAQ ⑥ 마무리 CTA(마스코트)
 *
 * 필수 이식 3종 (app-factory factory-ship/references/app-page.md):
 *   1. 토큰 — 앱 AppColor 값을 design-system/tokens.css에
 *   2. 폰트 — 앱 폰트를 pyftsubset(KS X 1001)으로 woff2 서브셋해 src/fonts/에
 *   3. 히어로 데모 — 앱의 핵심 루프를 CSS 애니메이션으로 재생하는 컴포넌트
 *      (선례: nemo NonogramBoard — 스스로 풀리는 보드,
 *             meokkum DreamDemo — 받아쓰기→상징 감지→길몽 판정)
 */

const routine = [
  {
    step: "첫 번째",
    title: "1단계 제목",
    description: "핵심 루프의 첫 단계를 사용자 행동 중심으로 설명하세요.",
  },
  {
    step: "두 번째",
    title: "2단계 제목",
    description: "앱이 그 행동에 어떻게 반응하는지 설명하세요.",
  },
  {
    step: "세 번째",
    title: "3단계 제목",
    description: "반복할수록 쌓이는 가치(보상·성장·기록)를 설명하세요.",
  },
];

const features = [
  {
    title: "핵심 기능 1",
    description: "핵심 기능 1을 여기에 설명하세요.",
  },
  {
    title: "핵심 기능 2",
    description: "핵심 기능 2를 여기에 설명하세요.",
  },
  {
    title: "핵심 기능 3",
    description: "핵심 기능 3을 여기에 설명하세요.",
  },
];

/* 도메인 칩 — 앱의 고유 어휘를 나열한다 (nemo: 난이도 4단계, meokkum: 페르소나 4종) */
const chips = [
  { name: "칩 1", tone: "짧은 부연" },
  { name: "칩 2", tone: "짧은 부연" },
  { name: "칩 3", tone: "짧은 부연" },
];

const faqs = [
  {
    q: "이용 데이터는 어디에 저장되나요?",
    a: "앱 이용 데이터는 이용자의 기기 안에만 저장됩니다. 앱을 삭제하면 데이터도 함께 삭제되니 주의해 주세요.",
  },
  {
    q: "무료인가요?",
    a: "앱의 과금 구조를 여기에 설명하세요 (무료/광고/이용권/구독).",
  },
  {
    q: "버그를 발견했어요. 어떻게 알려드리면 되나요?",
    a: "지원 페이지의 이메일로 기기 모델명, iOS 버전, 문제가 발생한 상황을 함께 보내주시면 확인에 큰 도움이 됩니다.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <SiteHeader />

      <main className="flex-1">
        {/* ── ① 히어로: 카피 + 라이브 데모 슬롯 ─────────────────────────── */}
        <section className="relative overflow-hidden px-6 pt-14 pb-24">
          <div className="mx-auto grid w-full max-w-5xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            <div className="text-center lg:text-left">
              <span
                className={cn(
                  typography["body-sm-strong"],
                  "inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-soft px-4 py-1.5 text-body",
                )}
              >
                카테고리 배지
              </span>
              <Text as="h1" variant="display-xl" className="mt-6 text-ink">
                한 줄 소개 문구를 여기에,
                <br />
                {site.appName}
              </Text>
              <Text variant="body-md" className="mx-auto mt-6 max-w-md text-body lg:mx-0">
                {site.description}
              </Text>
              <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
                <span
                  className={cn(
                    typography["body-sm-strong"],
                    "inline-flex items-center rounded-full border border-hairline-strong bg-surface-soft px-5 py-2.5 text-charcoal",
                  )}
                >
                  App Store 출시 준비 중
                </span>
                <Text variant="caption-sm" className="text-mute">
                  숫자로 말하는 앱 스펙 · 예: 콘텐츠 300개 · 광고 없음
                </Text>
              </div>
            </div>

            {/* 라이브 데모 슬롯 — 앱의 핵심 루프를 재생하는 컴포넌트로 교체한다.
                정적 스크린샷보다 CSS 애니메이션 데모가 전환율·완성도 모두 낫다. */}
            <div className="mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-lg border border-hairline bg-surface-soft">
              <Text variant="body-sm" className="text-mute">
                핵심 루프 데모 컴포넌트
              </Text>
            </div>
          </div>
        </section>

        {/* ── ② 사용법 3단계 ────────────────────────────────────────────── */}
        <section id="how" className="px-6 pb-24">
          <div className="mx-auto w-full max-w-5xl">
            <Text as="h2" variant="display-lg" className="text-center text-ink">
              사용법 섹션 제목
            </Text>
            <Text variant="body-sm" className="mx-auto mt-3 max-w-md text-center text-body">
              핵심 루프를 한 문장으로 요약하세요.
            </Text>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {routine.map((item) => (
                <article key={item.title} className="rounded-lg border border-hairline bg-surface-soft p-6">
                  <span className={cn(typography["caption-sm"], "block text-mute")}>
                    {item.step}
                  </span>
                  <Text as="h3" variant="heading-md" className="mt-1 text-ink">
                    {item.title}
                  </Text>
                  <Text variant="body-sm" className="mt-2 text-body">
                    {item.description}
                  </Text>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ③ 기능 3종 ────────────────────────────────────────────────── */}
        <section id="features" className="px-6 pb-24">
          <div className="mx-auto w-full max-w-5xl">
            <Text as="h2" variant="display-lg" className="text-center text-ink">
              기능 섹션 제목
            </Text>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-lg border border-hairline bg-surface-soft p-6">
                  <div className="size-12 rounded-md border border-hairline bg-canvas" aria-hidden />
                  <Text as="h3" variant="heading-md" className="mt-5 text-ink">
                    {feature.title}
                  </Text>
                  <Text variant="body-sm" className="mt-2 text-body">
                    {feature.description}
                  </Text>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ④ 도메인 칩 스트립 ────────────────────────────────────────── */}
        <section className="px-6 pb-24">
          <div className="mx-auto w-full max-w-5xl rounded-lg border border-hairline bg-surface-soft px-6 py-12 text-center sm:px-10">
            <Text as="h2" variant="display-lg" className="text-ink">
              도메인 칩 섹션 제목
            </Text>
            <Text variant="body-sm" className="mx-auto mt-3 max-w-md text-body">
              앱 고유의 어휘(난이도·모드·페르소나 등)를 칩으로 나열하세요.
            </Text>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {chips.map((chip) => (
                <li
                  key={chip.name}
                  className="flex items-center gap-2.5 rounded-full border border-hairline bg-canvas px-5 py-2.5"
                >
                  <span className={cn(typography["body-sm-strong"], "text-ink")}>{chip.name}</span>
                  <span className={cn(typography["caption-sm"], "text-body")}>{chip.tone}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── ⑤ FAQ ─────────────────────────────────────────────────────── */}
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
              <NextLink href="/support" className="text-ink underline">
                지원 페이지
              </NextLink>
              에서 물어보세요.
            </Text>
          </div>
        </section>

        {/* ── ⑥ 마무리 CTA — 마스코트가 있으면 여기 띄운다 ─────────────── */}
        <section className="px-6 pb-24">
          <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg bg-surface-dark px-8 py-16 text-center">
            <Text as="h2" variant="display-lg" className="relative text-on-dark">
              마무리 카피 한 줄,
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
                "relative mt-8 inline-flex h-11 items-center rounded-full bg-canvas px-6 text-ink transition-transform active:translate-y-[2px]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark",
              )}
            >
              출시 알림 받기
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
