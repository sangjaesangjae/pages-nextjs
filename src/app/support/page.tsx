import type { Metadata } from "next";
import { FaqRow, Text, cn, typography } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "지원",
  description: `${site.appName} 앱 문의처와 자주 묻는 질문입니다.`,
  alternates: { canonical: "/support" },
};

// 원문 단일 진실: dream-app/shared/store-metadata/support.md
const faqs = [
  {
    q: "꿈 기록이 다른 기기와 동기화되나요?",
    a: "아니요. 모든 기록은 기기 안에만 저장됩니다(개인정보 보호를 위한 설계). 앱을 삭제하면 기록도 함께 삭제되니 주의해 주세요.",
  },
  {
    q: "AI 해몽이 “준비 중”이라고 나와요.",
    a: "일시적인 서버 점검이거나 네트워크 문제일 수 있습니다. 잠시 후 다시 시도해 주세요.",
  },
  {
    q: "음성 기록이 안 돼요.",
    a: "설정 > 먹꿈에서 마이크·음성 인식 권한이 켜져 있는지 확인해 주세요. 권한이 꺼져 있어도 텍스트로 기록할 수 있습니다.",
  },
  {
    q: "구독은 어떻게 해지하나요?",
    a: "iPhone 설정 > Apple 계정 > 구독에서 언제든 해지할 수 있습니다. 앱의 설정 탭 > 구독 관리에서도 바로 이동할 수 있습니다.",
  },
  {
    q: "구매 복원은 어떻게 하나요?",
    a: "앱의 설정 탭 > 구매 복원을 눌러 주세요.",
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Text as="h1" variant="display-lg" className="text-ink">
        지원
      </Text>
      <Text variant="body-md" className="mt-4 text-body">
        {site.appName}을 이용하다 궁금한 점이나 문제가 있으면 편하게 문의해
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
          {["기기 모델명 (예: iPhone 17)", "iOS 버전", "문제가 발생한 화면과 상황"].map(
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
