import type { Metadata } from "next";
import { Button, Text } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const features = [
  {
    title: "말하듯 남기는 꿈 기록",
    description:
      "눈 뜨자마자 마이크 버튼 하나로 말하며 기록해요. 음성 인식은 기기 안에서만 처리되고, 쉬엄쉬엄 말해도 그대로 이어집니다.",
  },
  {
    title: "전통 해몽 사전 즉답",
    description:
      "기록에서 뱀·돼지·물 같은 상징을 자동으로 찾아 전통 해몽과 길흉을 바로 알려줘요. 사전 300개 상징은 오프라인에서도 열립니다.",
  },
  {
    title: "AI 정밀 해몽",
    description:
      "꿈풀이 선생님부터 감성 시인까지, 페르소나 4종이 꿈 전체 맥락을 읽고 정밀하게 풀이합니다. 기록이 쌓이면 먹꿈이가 꿈을 먹고 자라요.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 py-24 text-center">
      <Text as="h1" variant="display-xl" className="text-ink">
        눈 뜨자마자 말로 남기는 꿈 일기,
        <br />
        {site.appName}
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
