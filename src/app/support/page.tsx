import type { Metadata } from "next";
import { FaqRow, Text, cn, typography } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "지원",
  description: `${site.appName} 앱 문의처와 자주 묻는 질문입니다.`,
  alternates: { canonical: "/support" },
};

// ⚠️ 템플릿 placeholder — 새 앱 브랜치에서 FAQ를 앱에 맞게 채운다.
const faqs = [
  {
    q: "사진은 어디에 저장되나요?",
    a: "촬영한 사진은 앱 안에만 저장됩니다. 시스템 사진 앱에는 상세 화면에서 공유·저장을 선택할 때만 기록돼요. 앱을 삭제하면 앱 안의 사진도 함께 삭제되니 아끼는 사진은 미리 내보내 주세요.",
  },
  {
    q: "무음 촬영은 어떻게 하나요?",
    a: "카메라 화면의 무음 토글을 켜면 셔터음 없이 찍혀요. 무음 모드는 라이브 프리뷰 해상도로 저장되고, 끄면 풀해상도로 저장됩니다.",
  },
  {
    q: "필터를 이미 찍은 사진에도 적용할 수 있나요?",
    a: "네. 불러오기에서 사진을 고르면 8종 프리셋과 그레인·타임스탬프를 똑같이 적용해 저장할 수 있어요.",
  },
  {
    q: "버그를 발견했어요. 어떻게 알려드리면 되나요?",
    a: "아래 이메일로 기기 모델명, iOS 버전, 문제가 발생한 상황을 함께 보내주시면 확인에 큰 도움이 됩니다.",
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Text as="h1" variant="display-lg" className="text-ink">
        지원
      </Text>
      <Text variant="body-md" className="mt-4 text-body">
        {site.appName}를 이용하다 궁금한 점이나 문제가 있으면 편하게 문의해
        주세요. 영업일 기준 1~2일 안에 답변드려요.
      </Text>

      {/* 문의 카드 */}
      <section className="mt-8 rounded-lg border border-hairline bg-surface-soft p-6 sm:p-8">
        <Text as="h2" variant="heading-md" className="text-ink">
          이메일 문의
        </Text>
        <Text variant="body-sm" className="mt-2 text-body">
          아래 내용을 함께 보내주시면 더 빠르게 도와드릴 수 있어요.
        </Text>
        <ul className="mt-3 flex list-disc flex-col gap-1 pl-5">
          {["기기 모델명 (예: iPhone 15)", "iOS 버전", "문제가 발생한 화면과 상황"].map(
            (item) => (
              <Text as="li" variant="body-sm" className="text-body" key={item}>
                {item}
              </Text>
            ),
          )}
        </ul>
        <a
          href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(
            `${site.appName} 문의`,
          )}`}
          className={cn(
            typography["button-md"],
            "mt-6 inline-flex h-9 items-center rounded-full bg-primary px-5 text-on-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
          )}
        >
          {site.supportEmail}
        </a>
      </section>

      <section className="mt-14">
        <Text as="h2" variant="heading-lg" className="text-ink">
          자주 묻는 질문
        </Text>
        <div className="mt-4">
          {faqs.map((f) => (
            <FaqRow key={f.q} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>
    </main>
  );
}
