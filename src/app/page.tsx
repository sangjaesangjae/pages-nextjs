import type { Metadata } from "next";
import NextLink from "next/link";
import { Text, cn, typography } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/* 프리셋 8종 — 앱 FilterEngine의 실제 라인업과 무드 (원 설계 §4) */
const presets = [
  { name: "Flash CCD", mood: "정면 플래시의 하이라이트 번짐과 과다노출" },
  { name: "Y2K Pop", mood: "채도 높은 청록·마젠타 톤, 강한 콘트라스트" },
  { name: "Low-Res", mood: "다운샘플링 질감에 노이즈를 얹은 저해상 감성" },
  { name: "Neon Night", mood: "어두운 배경 위 네온 하이라이트" },
  { name: "Pale Blue", mood: "저채도 청백 톤의 새벽 공기" },
  { name: "Grunge Tape", mood: "강한 그레인과 스크래치 텍스처" },
  { name: "Sepia Pop", mood: "세피아 베이스에 톤 매핑 한 스푼" },
  { name: "Toy Flash", mood: "비네트 강조, 완구 카메라의 왜곡된 톤" },
];

const features = [
  {
    osd: "LIVE FILTER",
    title: "찍기 전에 이미 그 감성",
    description:
      "8종 디카 프리셋과 강도 슬라이더가 라이브 프리뷰에 실시간 반영돼요. 결과를 상상할 필요 없이, 보이는 대로 찍혀요.",
  },
  {
    osd: "GRAIN + DATE",
    title: "그레인과 날짜 도장",
    description:
      "필름 입자 질감과 주황빛 LCD 날짜 번인까지 — 2000년대 디카에서 막 꺼낸 듯한 한 장을 만들어요.",
  },
  {
    osd: "MOOD BATCH",
    title: "무드로 한 번에 통일",
    description:
      "이미 찍은 사진 여러 장을 골라 무드 하나로 일괄 보정해요. 피드 전체의 톤이 하나로 정리돼요.",
  },
];

const privacyPoints = ["계정 없음", "서버 없음", "광고 없음", "분석 도구 없음"];

export default function Home() {
  return (
    <main className="flex-1">
      {/* ── 히어로: 뷰파인더 ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-4 pt-10 pb-20 sm:px-6">
        <div className="y2k-glow" aria-hidden />
        <div
          className="viewfinder relative mx-auto w-full max-w-4xl rounded-lg border border-hairline bg-surface-soft/40 px-6 pt-16 pb-24 sm:px-10 sm:pt-20 sm:pb-28"
          role="img"
          aria-label="MoodCam 카메라 뷰파인더 화면 재현"
        >
          <span className="vf-corners" aria-hidden />
          <div className="vf-grid" aria-hidden />

          {/* 상단 OSD 바 */}
          <div
            className="absolute inset-x-0 top-0 flex items-center justify-between px-8 pt-6 font-mono text-xs tracking-widest text-charcoal sm:px-12"
            aria-hidden
          >
            <span className="flex items-center gap-2">
              <span className="rec-dot" />
              REC
            </span>
            <span className="text-osd">MOODCAM</span>
            <span>4:3</span>
          </div>

          {/* 중앙 카피 */}
          <div className="relative mx-auto max-w-xl text-center">
            <Text as="h1" variant="display-xl" className="text-ink">
              오늘을 2004년처럼 찍는
              <br />
              빈티지 카메라
            </Text>
            <Text variant="body-md" className="mx-auto mt-5 max-w-md text-body">
              Y2K 디지털카메라 감성의 실시간 필터, {site.appName}. 클라우드도
              계정도 없이 — 전부 내 기기 안에서만.
            </Text>
            <div className="mt-8 flex flex-col items-center gap-3">
              <span
                className={cn(
                  typography["button-md"],
                  "inline-flex h-11 items-center rounded-full bg-primary px-6 text-on-primary",
                )}
              >
                ● App Store 출시 준비 중
              </span>
              <Text variant="caption-sm" className="text-mute">
                프리셋 8종 · 무음 촬영 · 무드 일괄 보정
              </Text>
            </div>
          </div>

          {/* 하단: 프리셋 스트립 + 타임스탬프 (앱 카메라 화면 그대로) */}
          <div
            className="absolute inset-x-0 bottom-0 flex flex-col gap-3 px-8 pb-6 sm:px-12"
            aria-hidden
          >
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex gap-2 overflow-hidden">
                {presets.slice(0, 4).map((p, i) => (
                  <span
                    key={p.name}
                    className={cn(
                      "whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold",
                      i === 0 ? "bg-primary text-on-primary" : "bg-ink/10 text-charcoal",
                      i >= 2 && "hidden sm:inline-flex",
                    )}
                  >
                    {p.name}
                  </span>
                ))}
              </div>
              <span className="stamp self-end text-sm">&apos;04 07 29</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 기능 3종 ─────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid gap-5 sm:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="rounded-xl border border-hairline bg-paper p-6"
              >
                <span className="font-mono text-xs tracking-widest text-osd">
                  {f.osd}
                </span>
                <Text as="h2" variant="heading-md" className="mt-3 text-ink">
                  {f.title}
                </Text>
                <Text variant="body-sm" className="mt-2 text-body">
                  {f.description}
                </Text>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 프리셋 8종 (실제 앱 라인업) ──────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-4xl">
          <Text as="h2" variant="display-lg" className="text-center text-ink">
            여덟 가지 시절의 빛
          </Text>
          <Text variant="body-sm" className="mx-auto mt-3 max-w-md text-center text-body">
            전부 앱에 실제로 들어 있는 프리셋이에요. 강도는 슬라이더 하나로만 —
            복잡한 파라미터는 없어요.
          </Text>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {presets.map((p) => (
              <li
                key={p.name}
                className="flex items-baseline gap-4 rounded-lg border border-hairline bg-paper px-5 py-4"
              >
                <span className="w-28 shrink-0 font-mono text-sm text-osd">
                  {p.name}
                </span>
                <Text variant="body-sm" className="text-body">
                  {p.mood}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 프라이버시 스트립 ────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-4xl rounded-xl border border-hairline bg-surface-soft px-8 py-12 text-center">
          <Text as="h2" variant="display-lg" className="text-ink">
            사진은 내 기기 밖으로
            <br />
            나가지 않아요
          </Text>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {privacyPoints.map((point) => (
              <li
                key={point}
                className={cn(
                  typography["body-sm-strong"],
                  "rounded-full border border-hairline-strong px-4 py-2 text-charcoal",
                )}
              >
                {point}
              </li>
            ))}
          </ul>
          <Text variant="body-sm" className="mx-auto mt-6 max-w-md text-body">
            촬영한 사진은 앱 안에만 저장되고, 공유할 때만 이용자가 직접
            내보내요. 자세한 내용은{" "}
            <NextLink href="/privacy" className="text-ink underline">
              개인정보 처리방침
            </NextLink>
            에 그대로 적어뒀어요.
          </Text>
        </div>
      </section>

      {/* ── 마무리 CTA ───────────────────────────────────────────────── */}
      <section className="px-6 pb-24 text-center">
        <span className="stamp text-sm" aria-hidden>
          COMING SOON
        </span>
        <Text as="h2" variant="display-lg" className="mt-3 text-ink">
          곧 App Store에서 만나요
        </Text>
        <Text variant="body-sm" className="mx-auto mt-4 max-w-sm text-body">
          출시 소식이 궁금하다면 언제든 편하게 물어보세요.
        </Text>
        <a
          href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(
            `${site.appName} 출시 알림 요청`,
          )}`}
          className={cn(
            typography["button-md"],
            "mt-7 inline-flex h-11 items-center rounded-full bg-primary px-6 text-on-primary transition-transform active:translate-y-[1px]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
          )}
        >
          출시 알림 받기
        </a>
      </section>
    </main>
  );
}
