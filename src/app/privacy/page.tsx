import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Text } from "@/design-system";
import { site } from "@/lib/site";

// 먹꿈: 무광고(AdMob·ATT 조항 없음), 완전 로컬 저장, AI 해몽 시에만 일시 전송.
// 원문 단일 진실: dream-app/shared/store-metadata/privacy-policy.md

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: `${site.appName} 앱의 개인정보 처리방침입니다.`,
  alternates: { canonical: "/privacy" },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <Text as="h2" variant="heading-sm" className="text-ink">
        {title}
      </Text>
      <div className="mt-2 flex flex-col gap-2">{children}</div>
    </section>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <Text variant="body-md" className="text-body">
      {children}
    </Text>
  );
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-1 pl-5">
      {items.map((item, index) => (
        <Text as="li" variant="body-md" className="text-body" key={index}>
          {item}
        </Text>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Text as="h1" variant="display-lg" className="text-ink">
        개인정보 처리방침
      </Text>
      <Text variant="body-sm" className="mt-2 text-mute">
        시행일: 2026년 8월 4일
      </Text>

      <Section title="1. 총칙">
        <Body>
          {site.name}(이하 &ldquo;개발자&rdquo;)는 모바일 앱
          &lsquo;{site.appName}&rsquo;(이하 &ldquo;앱&rdquo;) 이용자의
          개인정보를 소중히 여기며, 수집을 최소화하는 것을 원칙으로 「개인정보
          보호법」 등 관련 법령을 준수합니다. 본 방침은 앱 이용 과정에서 어떤
          정보가 처리되는지, 그 목적과 보관 방식, 그리고 이용자가 행사할 수
          있는 권리를 설명합니다.
        </Body>
      </Section>

      <Section title="2. 수집·저장하는 정보">
        <Body>
          앱은 회원가입·로그인 없이 이용할 수 있으며, 개발자는 이용자의
          이름·이메일 주소·전화번호 등 어떠한 개인정보도 직접 수집하거나
          개발자의 서버로 전송·저장하지 않습니다.
        </Body>
        <Bullets
          items={[
            <>
              <strong>꿈 기록</strong>(본문·감정·인물 태그·감지된 상징),{" "}
              <strong>캐릭터 성장 상태</strong>,{" "}
              <strong>이용권 사용 기록</strong>은 전부 이용자의{" "}
              <strong>기기 안에만</strong> 저장됩니다.
            </>,
            <>
              앱을 삭제하면 기기에 저장된 모든 기록이 함께 삭제되며, 복구할 수
              없습니다.
            </>,
          ]}
        />
      </Section>

      <Section title="3. AI 정밀 해몽 이용 시 전송되는 정보">
        <Bullets
          items={[
            <>
              AI 정밀 해몽을 실행하는 순간에만, 해당 꿈의 본문 텍스트·감지된
              상징 이름·선택한 페르소나·익명 기기 식별자(무작위 ID)가 해몽
              생성을 위해 중계 서버를 경유해 AI 모델(Anthropic Claude)로
              전송됩니다.
            </>,
            <>
              중계 서버는 꿈 본문을 <strong>저장하거나 로그로 남기지
              않습니다.</strong> 남용 방지를 위한 호출 횟수 카운트(익명 기기 ID
              기준)만 기록됩니다.
            </>,
            <>
              AI 해몽을 사용하지 않으면 어떤 데이터도 기기 밖으로 나가지
              않습니다.
            </>,
          ]}
        />
      </Section>

      <Section title="4. 앱 권한">
        <Bullets
          items={[
            <>
              <strong>마이크·음성 인식:</strong> 말로 꿈을 기록하는 기능에만
              사용합니다. 음성 인식은 기기 안에서만(온디바이스) 처리되며
              네트워크로 전송되지 않습니다. 권한을 거부해도 텍스트 입력으로
              모든 기능을 쓸 수 있습니다.
            </>,
            <>
              <strong>알림:</strong> 이용자가 설정한 기상 시간에 꿈 기록을
              안내하는 로컬 알림에만 사용합니다. 거부해도 앱의 다른 기능에
              제한이 없습니다.
            </>,
          ]}
        />
      </Section>

      <Section title="5. 결제 정보">
        <Body>
          이용권 구매(건당·월 구독)는 Apple App Store 결제 시스템(StoreKit)으로
          처리되며, 앱은 카드 번호 등 결제 수단 정보를 수집하거나 접근하지
          않습니다.
        </Body>
      </Section>

      <Section title="6. 제3자 제공 및 광고">
        <Body>
          앱은 광고 SDK를 포함하지 않으며, 이용자의 데이터를 제3자에게
          판매·제공하지 않습니다. (제3조의 AI 해몽 생성 목적의 일시 전송 제외 —
          해당 전송분의 국외 처리 가능성은 Anthropic의 개인정보처리방침을
          따릅니다.)
        </Body>
      </Section>

      <Section title="7. 개인정보의 보유 및 파기">
        <Body>
          개발자가 직접 보유하는 개인정보는 없습니다. 기기에 저장된 앱 이용
          데이터는 이용자가 앱을 삭제하면 함께 삭제되며, 삭제된 데이터는
          복구할 수 없습니다.
        </Body>
      </Section>

      <Section title="8. 아동의 개인정보">
        <Body>
          앱은 아동을 주된 이용 대상으로 하지 않으며, 아동의 개인정보를 인지한
          상태로 수집하지 않습니다.
        </Body>
      </Section>

      <Section title="9. 처리방침의 변경">
        <Body>
          법령이나 서비스 내용의 변경에 따라 본 방침이 수정될 수 있습니다.
          변경 시 이 페이지에 게시하고 상단의 시행일을 갱신하며, 중요한 변경이
          있는 경우 앱 업데이트 안내 등을 통해 함께 알립니다.
        </Body>
      </Section>

      <Section title="10. 문의처">
        <Body>
          개인정보 관련 문의, 의견, 권리 행사 요청은 아래로 연락해 주세요.
        </Body>
        <Bullets
          items={[
            <>운영자: {site.name}</>,
            <>
              이메일:{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-ink underline"
              >
                {site.supportEmail}
              </a>
            </>,
          ]}
        />
      </Section>
    </main>
  );
}
