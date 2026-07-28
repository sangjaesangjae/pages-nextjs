import type { Metadata } from "next";
import { FaqRow, Text, cn, typography } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "지원",
  description: `${site.appName} 앱 문의처와 자주 묻는 질문입니다.`,
  alternates: { canonical: "/support" },
};

const faqs = [
  {
    q: "퍼즐 진행 상황은 어디에 저장되나요?",
    a: "모든 진행 상황은 이용자의 기기 안에만 저장됩니다. 앱을 삭제하면 진행 상황도 함께 삭제되니 주의해 주세요.",
  },
  {
    q: "기기를 바꾸면 기록을 옮길 수 있나요?",
    a: "기록이 기기 안에만 저장되기 때문에 현재는 기기 간 이동을 지원하지 않아요. 더 나은 방법을 검토하고 있습니다.",
  },
  {
    q: "광고가 표시되지 않거나 앱이 느려요.",
    a: "네트워크 연결 상태를 확인한 뒤 앱을 완전히 종료하고 다시 실행해 보세요. 문제가 계속되면 이메일로 알려주세요.",
  },
  {
    q: "맞춤형 광고를 끄고 싶어요.",
    a: "iOS 설정 → 개인정보 보호 및 보안 → 추적에서 허용을 끄면 맞춤형이 아닌 일반 광고가 표시됩니다. 앱의 모든 기능은 동일하게 이용할 수 있어요.",
  },
  {
    q: "버그를 발견했어요. 어떻게 알려드리면 되나요?",
    a: "아래 이메일로 기기 모델명, iOS 버전, 문제가 발생한 상황을 함께 보내주시면 확인에 큰 도움이 됩니다.",
  },
  {
    q: "새 도안이나 기능을 제안하고 싶어요.",
    a: "언제든 환영이에요! 풀고 싶은 그림이나 있었으면 하는 기능을 이메일로 보내주시면 업데이트에 참고할게요.",
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
      <section className="mt-8 rounded-xl border border-hairline bg-paper p-6 sm:p-8">
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
            "mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-on-primary",
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
