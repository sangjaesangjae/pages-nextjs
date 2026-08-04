import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { FaqRow, Text, cn, typography } from "@/design-system";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { DreamDemo } from "@/components/DreamDemo";
import {
  DiaryGlyph,
  LockGlyph,
  MicGlyph,
  MoonStarGlyph,
  SparkSearchGlyph,
  Star4Glyph,
  StarChartGlyph,
} from "@/components/MeokkumGlyphs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/* 아침 루틴 3단계 — 앱의 핵심 루프 그대로 */
const routine = [
  {
    step: "첫 번째",
    title: "눈 뜨자마자 말해요",
    description:
      "꿈은 깨어난 지 몇 분이면 사라져요. 마이크 버튼 하나로 누운 채 말하면 그대로 받아써져요 — 음성 인식은 기기 안에서만 처리됩니다.",
    Glyph: MicGlyph,
  },
  {
    step: "두 번째",
    title: "상징이 바로 잡혀요",
    description:
      "기록에서 뱀·돼지·물 같은 상징을 자동으로 찾아, 전통 해몽과 길몽·흉몽 판정을 그 자리에서 알려드려요. 오프라인에서도 돼요.",
    Glyph: SparkSearchGlyph,
  },
  {
    step: "세 번째",
    title: "깊은 풀이를 받아요",
    description:
      "더 궁금한 날엔 AI 정밀 해몽 — 꿈 전체 맥락을 읽고 페르소나가 정성껏 풀이해요. 기록이 쌓일수록 먹꿈이가 꿈을 먹고 자라요.",
    Glyph: MoonStarGlyph,
  },
];

/* 기능 3종 — 탭 구성(사전·리포트·홈 캐릭터) 그대로 */
const features = [
  {
    title: "전통 해몽 사전 300",
    description:
      "12개 카테고리, 상징 300개. 이름·별칭으로 검색하고 연관 상징을 따라 꼬리에 꼬리를 무는 탐색 — 전부 오프라인으로.",
    Glyph: SparkSearchGlyph,
  },
  {
    title: "꿈 리포트",
    description:
      "주간·월간으로 자주 나오는 상징, 감정 추이, 함께 등장한 인물을 정리해 드려요. 내 꿈의 패턴이 보이기 시작해요.",
    Glyph: StarChartGlyph,
  },
  {
    title: "꿈 일기 아카이브",
    description:
      "달력과 목록으로 되돌아보는 나만의 꿈 기록장. 모든 기록은 기기 안에만 남아요 — 서버에도, 누구에게도 가지 않아요.",
    Glyph: DiaryGlyph,
  },
];

/* 앱 미리보기 — 시뮬레이터 실촬영 (상태바 제외 크롭) */
const screens = [
  { src: "/images/screens/home.jpg", title: "미드나잇 홈", desc: "달력 위 꿈 기록, 그 아래 먹꿈이" },
  { src: "/images/screens/tip.jpg", title: "오늘의 꿈 회상 팁", desc: "기록 전 한 가지씩, 매일 바뀌어요" },
  { src: "/images/screens/detail.jpg", title: "즉답 해몽", desc: "상징 감지와 길흉 판정을 그 자리에서" },
  { src: "/images/screens/dict.jpg", title: "꿈 사전", desc: "12개 카테고리, 상징 300개" },
];

/* 사전 미리보기 — 실제 번들 사전(symbols-v1.json)에서 발췌 */
const symbolPreviews = [
  { name: "돼지", fortune: "길몽", meaning: "재물운을 상징하는 대표적인 길몽. 품에 안기거나 집안으로 들어오면 뜻밖의 재물이나 횡재로 풀이해요." },
  { name: "용", fortune: "길몽", meaning: "전통 해몽에서 가장 으뜸으로 꼽는 대길몽. 하늘로 힘차게 승천하면 큰 출세나 성공을 뜻해요." },
  { name: "뱀", fortune: "상황따라", meaning: "재물과 태몽의 대표 상징. 품에 들어오면 재물운, 물리거나 쫓기며 두려우면 구설수 신호로 봐요." },
  { name: "불", fortune: "길몽", meaning: "불길이 세차게 타오를수록 재물과 명예가 크게 일어나는 길몽으로 봐요." },
  { name: "물", fortune: "상황따라", meaning: "맑고 잔잔하면 마음의 안정과 재물운, 거센 물살에 빠지면 감정의 소용돌이를 뜻해요." },
  { name: "시험", fortune: "상황따라", meaning: "현실의 평가와 부담감이 그대로 나타난 꿈. 잘 풀면 준비가 되어 간다는 신호예요." },
];

/* 수면 연구 근거 — 앱 회상 팁 10장의 출처 (tip-cards.json version 2와 동일 근거) */
const research = [
  {
    tip: "깨어난 직후엔 움직이지 마세요",
    basis: "깬 직후의 방해에 약한 사람일수록 '꿈은 꿨는데 내용이 안 떠오르는' 상태가 잦았어요 — 수면 측정 연구(Communications Psychology, 2025)",
  },
  {
    tip: "빈손으로도 매일 열어보세요",
    basis: "꿈 일기를 2주만 꾸준히 써도 회상 빈도가 뚜렷하게 오른다는 결과가 있어요 — 꿈 일기 훈련 연구(Schredl)",
  },
  {
    tip: "새벽에 깼다면 그때가 기회예요",
    basis: "렘수면 직후 깨어나면 꿈을 보고할 확률이 85%에 이르고, 렘수면은 새벽으로 갈수록 길어져요 — 실험실 각성 연구",
  },
];

/* 프라이버시 3약속 */
const privacy = [
  {
    title: "완전 로컬 저장",
    description: "꿈 기록·감정·캐릭터 성장 전부 기기 안에만. 회원가입도, 서버 보관도 없어요.",
    Glyph: LockGlyph,
  },
  {
    title: "온디바이스 음성 인식",
    description: "목소리는 기기 밖으로 나가지 않아요. 받아쓰기가 전부 기기 안에서 끝나요.",
    Glyph: MicGlyph,
  },
  {
    title: "광고 없음",
    description: "잠에서 막 깬 조용한 아침을 방해하고 싶지 않았어요. 추적도 광고 SDK도 없어요.",
    Glyph: MoonStarGlyph,
  },
];

/* AI 해몽 페르소나 4종 — PRD 확정 라인업 */
const personas = [
  { name: "꿈풀이 선생님", tone: "전통 해몽의 정석대로" },
  { name: "심리 해석가", tone: "마음의 신호를 읽어주는" },
  { name: "현실 조언 친구", tone: "오늘 하루에 바로 쓰는" },
  { name: "감성 시인", tone: "꿈결을 시로 되돌려주는" },
];

const faqs = [
  {
    q: "꿈을 잘 기억하지 못하는데도 쓸 수 있나요?",
    a: "네. 기록을 시작할 때마다 수면 연구에 근거한 '오늘의 꿈 회상 팁'을 한 가지씩 알려드려요. 키워드 한 단어만 남겨도 충분해요 — 꿈 일기를 2주만 쓰면 회상 빈도가 뚜렷이 오른다는 연구도 있어요.",
  },
  {
    q: "꿈 기록은 어디에 저장되나요?",
    a: "모든 기록은 이용자의 기기 안에만 저장돼요. 회원가입도 서버 보관도 없어요. AI 정밀 해몽을 실행하는 순간에만 그 꿈의 본문이 해몽 생성을 위해 일시 전송되고, 저장되지 않아요.",
  },
  {
    q: "음성 기록은 어떻게 처리되나요?",
    a: "온디바이스 음성 인식이라 목소리가 기기 밖으로 나가지 않아요. 쉬었다 말해도 이어서 받아쓰고, 권한을 거부해도 텍스트로 모든 기능을 쓸 수 있어요.",
  },
  {
    q: "AI 해몽은 유료인가요?",
    a: "주 1회는 무료예요. 더 자주 보고 싶으면 건당 이용권이나 월 구독(매일 1회)을 선택할 수 있어요. 전통 해몽 사전의 즉답은 언제나 무료·무제한이에요.",
  },
  {
    q: "광고가 있나요?",
    a: "아니요, 광고가 없어요. 잠에서 막 깬 조용한 아침을 방해하고 싶지 않았어요.",
  },
];

export default function Home() {
  return (
    <div className="night-sky relative">
      {/* 밤하늘 — 성운·별 2겹·별똥별 (앱 NightSkyBackground) */
      }
      <div className="nebula pointer-events-none absolute inset-0" aria-hidden />
      <div className="starfield-far pointer-events-none absolute inset-0" aria-hidden />
      <div className="starfield pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative">
        <SiteHeader />

        <main className="flex-1">
          {/* ── 히어로: 카피 + 살아있는 기록 데모 ─────────────────────── */}
          <section className="relative overflow-hidden px-6 pt-14 pb-24 sm:pt-18">
            <span className="shooting-star" aria-hidden />
            <div className="mx-auto grid w-full max-w-5xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
              <div className="text-center lg:text-left">
                <span
                  className={cn(
                    typography["body-sm-strong"],
                    "inline-flex items-center gap-2 rounded-full border border-hairline-strong bg-brand-tint px-4 py-1.5 text-brand-text",
                  )}
                >
                  <MoonStarGlyph size={15} />
                  꿈 일기 · 해몽
                </span>
                <Text as="h1" variant="display-xl" className="mt-6 text-ink">
                  눈 뜨자마자 말로 남기는
                  <br />
                  꿈 일기, {site.appName}
                </Text>
                <Text
                  variant="body-md"
                  className="mx-auto mt-6 max-w-md text-body lg:mx-0"
                >
                  잊기 전에 말하고, 그 자리에서 풀이 받아요. 전통 해몽 사전이
                  바로 답하고 AI가 깊게 풀이하는 동안, 먹꿈이는 당신의 꿈을
                  먹고 자라요.
                </Text>
                <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
                  <span
                    className={cn(
                      typography["body-sm-strong"],
                      "inline-flex items-center gap-2 rounded-full border border-gold bg-gold-soft px-5 py-2.5 text-gold",
                    )}
                  >
                    <Star4Glyph size={13} /> App Store 출시 준비 중
                  </span>
                  <Text variant="caption-sm" className="text-mute">
                    상징 사전 300 · AI 페르소나 4종 · 광고 없음 · 완전 로컬 저장
                  </Text>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-sm pb-10 lg:pb-4">
                <DreamDemo />
                <Image
                  src="/images/meokkumi.png"
                  alt=""
                  width={168}
                  height={168}
                  priority
                  className="float-slow pointer-events-none absolute -bottom-12 -right-4 w-32 select-none sm:-right-10 sm:w-40"
                />
              </div>
            </div>
          </section>

          {/* ── 아침 루틴 3단계 ────────────────────────────────────────── */}
          <section id="how" className="px-6 pb-24">
            <div className="mx-auto w-full max-w-5xl">
              <Text as="h2" variant="display-lg" className="text-center text-ink">
                아침 3분, 꿈이 사라지기 전에
              </Text>
              <Text variant="body-sm" className="mx-auto mt-3 max-w-md text-center text-body">
                기상 알림에서 기록까지 — {site.appName}의 아침은 이렇게 흘러가요.
              </Text>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {routine.map((item) => (
                  <article key={item.title} className="glass-card p-6">
                    <div className="flex size-12 items-center justify-center rounded-md bg-brand-tint text-brand-text">
                      <item.Glyph size={22} />
                    </div>
                    <span className={cn(typography["caption-sm"], "mt-5 block text-gold")}>
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

          {/* ── 앱 미리보기 (시뮬레이터 실촬영) ───────────────────────── */}
          <section id="screens" className="px-6 pb-24">
            <div className="mx-auto w-full max-w-5xl">
              <Text as="h2" variant="display-lg" className="text-center text-ink">
                미리 둘러보기
              </Text>
              <div className="mt-10 grid gap-5 grid-cols-2 lg:grid-cols-4">
                {screens.map((screen) => (
                  <figure key={screen.title}>
                    <div className="overflow-hidden rounded-lg border border-hairline-strong shadow-[0_18px_44px_rgb(9_8_30/0.45)]">
                      <Image
                        src={screen.src}
                        alt={`${screen.title} 화면`}
                        width={750}
                        height={1514}
                        className="w-full"
                      />
                    </div>
                    <figcaption className="mt-3">
                      <Text as="span" variant="body-sm-strong" className="block text-ink">
                        {screen.title}
                      </Text>
                      <Text as="span" variant="caption-sm" className="mt-0.5 block text-body">
                        {screen.desc}
                      </Text>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* ── 기능 3종 ──────────────────────────────────────────────── */}
          <section id="features" className="px-6 pb-24">
            <div className="mx-auto w-full max-w-5xl">
              <Text as="h2" variant="display-lg" className="text-center text-ink">
                기록이 쌓일수록 보이는 것들
              </Text>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {features.map((feature) => (
                  <article key={feature.title} className="glass-card p-6">
                    <div className="flex size-12 items-center justify-center rounded-md bg-surface-elevated text-moon">
                      <feature.Glyph size={22} />
                    </div>
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

          {/* ── 사전 미리보기 (실제 300개 사전에서 발췌) ──────────────── */}
          <section className="px-6 pb-24">
            <div className="mx-auto w-full max-w-5xl">
              <Text as="h2" variant="display-lg" className="text-center text-ink">
                사전을 한 장만 미리 볼까요?
              </Text>
              <Text variant="body-sm" className="mx-auto mt-3 max-w-md text-center text-body">
                실제 수록된 300개 상징 중 여섯 — 전부 오프라인으로 열려요.
              </Text>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {symbolPreviews.map((symbol) => (
                  <article key={symbol.name} className="glass-card p-5">
                    <div className="flex items-center justify-between">
                      <Text as="h3" variant="heading-sm" className="text-ink">
                        {symbol.name}
                      </Text>
                      <span
                        className={cn(
                          typography["caption-sm"],
                          "rounded-full px-3 py-1",
                          symbol.fortune === "길몽"
                            ? "bg-gold-soft font-semibold text-gold"
                            : "border border-hairline-strong text-body",
                        )}
                      >
                        {symbol.fortune}
                      </span>
                    </div>
                    <Text variant="body-sm" className="mt-2 text-body">
                      {symbol.meaning}
                    </Text>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── AI 페르소나 4종 ───────────────────────────────────────── */}
          <section className="px-6 pb-24">
            <div className="glass-card mx-auto w-full max-w-5xl px-6 py-12 text-center sm:px-10">
              <Text as="h2" variant="display-lg" className="text-ink">
                오늘은 누구에게 물어볼까요?
              </Text>
              <Text variant="body-sm" className="mx-auto mt-3 max-w-md text-body">
                같은 꿈도 페르소나에 따라 다르게 풀려요 — AI 정밀 해몽의 네
                가지 목소리.
              </Text>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {personas.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center gap-2.5 rounded-full border border-hairline-strong bg-brand-tint px-5 py-2.5"
                  >
                    <Star4Glyph size={11} className="text-gold" />
                    <span className={cn(typography["body-sm-strong"], "text-ink")}>
                      {p.name}
                    </span>
                    <span className={cn(typography["caption-sm"], "text-body")}>{p.tone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── 수면 연구 근거 (앱 회상 팁의 출처) ────────────────────── */}
          <section className="px-6 pb-24">
            <div className="mx-auto w-full max-w-5xl">
              <Text as="h2" variant="display-lg" className="text-center text-ink">
                회상 팁은 수면 연구에서 왔어요
              </Text>
              <Text variant="body-sm" className="mx-auto mt-3 max-w-lg text-center text-body">
                {site.appName}의 &lsquo;오늘의 꿈 회상 팁&rsquo;은 감이 아니라
                실제 수면 연구 결과로 골랐어요. 열 가지 중 세 가지만 미리 보여드릴게요.
              </Text>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {research.map((item) => (
                  <article key={item.tip} className="glass-card p-6">
                    <Star4Glyph size={14} className="text-brand-text" />
                    <Text as="h3" variant="heading-sm" className="mt-4 text-ink">
                      {item.tip}
                    </Text>
                    <Text variant="body-sm" className="mt-2 text-body">
                      {item.basis}
                    </Text>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ── 프라이버시 3약속 ──────────────────────────────────────── */}
          <section className="px-6 pb-24">
            <div className="glass-card mx-auto w-full max-w-5xl px-6 py-12 sm:px-10">
              <Text as="h2" variant="display-lg" className="text-center text-ink">
                당신의 꿈은 기기 밖으로 나가지 않아요
              </Text>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                {privacy.map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-tint text-brand-text">
                      <item.Glyph size={22} />
                    </div>
                    <Text as="h3" variant="heading-sm" className="mt-4 text-ink">
                      {item.title}
                    </Text>
                    <Text variant="body-sm" className="mx-auto mt-2 max-w-xs text-body">
                      {item.description}
                    </Text>
                  </div>
                ))}
              </div>
              <Text variant="caption-sm" className="mt-8 text-center text-mute">
                유일한 예외: AI 정밀 해몽을 실행하는 순간에만 그 꿈의 본문이 해몽
                생성을 위해 일시 전송되고, 저장되지 않아요.
              </Text>
            </div>
          </section>

          {/* ── FAQ ───────────────────────────────────────────────────── */}
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
                <NextLink href="/support" className="text-brand-text underline">
                  지원 페이지
                </NextLink>
                에서 물어보세요.
              </Text>
            </div>
          </section>

          {/* ── 마무리 CTA (먹꿈이 + 달) ──────────────────────────────── */}
          <section className="px-6 pb-24">
            <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-lg border border-hairline-strong bg-surface-deep px-8 py-16 text-center backdrop-blur-md">
              <span className="pointer-events-none absolute left-8 top-8 text-moon opacity-80 moon-glow" aria-hidden>
                <MoonStarGlyph size={34} />
              </span>
              <Image
                src="/images/meokkumi.png"
                alt=""
                width={170}
                height={170}
                className="float-slow pointer-events-none absolute -bottom-6 right-2 w-32 select-none sm:right-8 sm:w-40"
              />
              <Text as="h2" variant="display-lg" className="relative text-on-dark">
                오늘 밤 꿈부터,
                <br />
                먹꿈이에게 들려주세요
              </Text>
              <Text variant="body-sm" className="relative mx-auto mt-4 max-w-sm text-on-dark-mute">
                곧 App Store에서 만나요. 출시 소식이 궁금하다면 언제든 편하게
                물어보세요.
              </Text>
              <a
                href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(
                  `${site.appName} 출시 알림 요청`,
                )}`}
                className={cn(
                  typography["button-md"],
                  "relative mt-8 inline-flex h-11 items-center rounded-full bg-primary px-6 text-on-primary transition-transform active:translate-y-[2px]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-deep",
                )}
              >
                출시 알림 받기
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
