import type { Metadata } from "next";
import { Button, Text } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 py-24 text-center">
      <Text as="h1" variant="display-xl" className="text-ink">
        한 줄 소개 문구를 여기에,
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
