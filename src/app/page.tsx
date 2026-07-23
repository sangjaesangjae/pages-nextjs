import type { Metadata } from "next";
import { Button, Text } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const features = [
  {
    title: "차근차근 즐기는 퍼즐",
    description: "쉬운 레벨부터 차례로 풀며 네모로직에 자연스럽게 익숙해집니다.",
  },
  {
    title: "타임어택 모드",
    description: "같은 퍼즐을 더 빠르게 — 최고 기록에 도전해 보세요.",
  },
  {
    title: "함께하는 마스코트",
    description: "퍼즐을 푸는 동안 화면 속 마스코트가 곁에서 응원합니다.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 py-24 text-center">
      <Text as="h1" variant="display-xl" className="text-ink">
        숫자 힌트로 완성하는
        <br />
        네모로직 퍼즐, {site.appName}
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
