import type { Metadata } from "next";
import { Button, Text } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const features = [
  {
    title: "실시간 Y2K 필터",
    description:
      "8종 디카 프리셋과 강도 슬라이더 — 찍기 전에 화면에서 바로 그 감성을 확인해요.",
  },
  {
    title: "그레인 · 타임스탬프",
    description:
      "필름 그레인과 주황빛 LCD 날짜 번인으로 2000년대 디카 무드를 완성해요.",
  },
  {
    title: "완전 로컬 저장",
    description:
      "클라우드도 계정도 없어요. 사진은 내 기기 안에만 — 공유할 때만 내보내요.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 py-24 text-center">
      <Text as="h1" variant="display-xl" className="text-ink">
        오늘을 2004년처럼 찍는
        <br />
        빈티지 카메라, {site.appName}
      </Text>
      <Text variant="body-md" className="mt-6 max-w-md text-body">
        {site.description}
      </Text>
      <Button disabled className="mt-10">
        App Store 출시 준비 중
      </Button>

      <section className="mt-section grid w-full gap-8 text-left sm:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title}>
            <Text as="h2" variant="heading-sm" className="text-ink">
              {feature.title}
            </Text>
            <Text variant="body-sm" className="mt-1 text-body">
              {feature.description}
            </Text>
          </div>
        ))}
      </section>
    </main>
  );
}
