import type { Metadata } from "next";
import { FaqRow, Text } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "지원",
  description: `${site.appName} 앱 문의처와 자주 묻는 질문입니다.`,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Text as="h1" variant="display-lg" className="text-ink">
        지원
      </Text>
      <Text variant="body-md" className="mt-4 text-body">
        {site.appName}를 이용하다 궁금한 점이나 문제가 있으면 아래 이메일로
        문의해 주세요. 최대한 빠르게 답변드리겠습니다.
      </Text>
      <a
        href={`mailto:${site.supportEmail}`}
        className="mt-3 inline-block text-ink underline"
      >
        {site.supportEmail}
      </a>

      <section className="mt-14">
        <Text as="h2" variant="heading-lg" className="text-ink">
          자주 묻는 질문
        </Text>
        <div className="mt-4">
          <FaqRow
            question="이용 데이터는 어디에 저장되나요?"
            answer="앱 이용 데이터는 이용자의 기기 안에만 저장됩니다. 앱을 삭제하면 데이터도 함께 삭제되니 주의해 주세요."
          />
          <FaqRow
            question="광고가 표시되지 않거나 앱이 느려요."
            answer="네트워크 연결 상태를 확인한 뒤 앱을 완전히 종료하고 다시 실행해 보세요. 문제가 계속되면 이메일로 알려주세요."
          />
          <FaqRow
            question="버그를 발견했어요. 어떻게 알려드리면 되나요?"
            answer="위 이메일로 기기 모델명, iOS 버전, 문제가 발생한 상황을 함께 보내주시면 확인에 큰 도움이 됩니다."
          />
        </div>
      </section>
    </main>
  );
}
