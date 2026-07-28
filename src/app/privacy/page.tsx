import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Text } from "@/design-system";
import { site } from "@/lib/site";

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
        시행일: 2026년 7월 28일
      </Text>

      <Section title="1. 총칙">
        <Body>
          {site.name}(이하 &ldquo;개발자&rdquo;)는 카메라 앱
          &lsquo;{site.appName}&rsquo;(이하 &ldquo;앱&rdquo;) 이용자의
          개인정보를 소중히 여기며, 「개인정보 보호법」 등 관련 법령을
          준수합니다. 결론부터 말하면 — <strong>앱은 이용자의 어떤 정보도
          개발자에게 전송하지 않습니다.</strong> 모든 처리가 이용자의 기기
          안에서만 일어납니다.
        </Body>
      </Section>

      <Section title="2. 개발자가 수집하는 개인정보 — 없음">
        <Body>
          앱은 회원가입, 로그인, 계정 없이 동작하며, 개발자는 이름·이메일·
          전화번호 등 어떠한 개인정보도 수집하지 않습니다. 광고를 표시하지
          않으므로 광고 식별자(IDFA)도 수집하지 않으며, 분석(analytics)
          도구도 사용하지 않습니다.
        </Body>
      </Section>

      <Section title="3. 카메라 권한과 사진의 처리">
        <Bullets
          items={[
            <>
              <strong>카메라:</strong> 촬영 기능을 위해 카메라 접근 권한을
              요청합니다. 카메라 영상은 실시간 필터 미리보기와 촬영에만
              사용되며, 기기 밖으로 전송되지 않습니다.
            </>,
            <>
              <strong>촬영한 사진:</strong> 앱 내부 저장 공간(앱 샌드박스)에만
              저장됩니다. 시스템 사진 앱에는 이용자가 직접 공유·저장을 선택할
              때만 기록됩니다.
            </>,
            <>
              <strong>사진 불러오기:</strong> 시스템 사진 선택기(PHPicker)를
              사용합니다 — 이용자가 고른 사진에만 접근하며, 사진 보관함 전체에
              대한 접근 권한을 요구하지 않습니다.
            </>,
          ]}
        />
      </Section>

      <Section title="4. 제3자 제공 및 국외 이전">
        <Body>
          개발자는 이용자의 정보를 보유하지 않으므로 제3자에게 제공하거나
          판매하지 않으며, 국외로 이전하지도 않습니다. 앱에는 외부 광고·분석
          SDK가 포함되어 있지 않습니다.
        </Body>
      </Section>

      <Section title="5. 보유 및 파기">
        <Body>
          촬영한 사진과 설정 값은 이용자 기기에만 저장됩니다. 앱 안에서 사진을
          삭제하면 즉시 파기되며, 앱을 삭제하면 모든 데이터가 함께 삭제됩니다.
          삭제된 데이터는 복구할 수 없습니다.
        </Body>
      </Section>

      <Section title="6. 이용자의 권리와 행사 방법">
        <Bullets
          items={[
            <>
              <strong>카메라 권한 철회:</strong> 설정 → {site.appName} →
              카메라 접근 끄기 (촬영 기능만 제한되고 갤러리는 계속 사용 가능)
            </>,
            <>
              <strong>데이터 삭제:</strong> 앱 안에서 사진 삭제, 또는 앱
              삭제로 전체 데이터 파기
            </>,
          ]}
        />
      </Section>

      <Section title="7. 아동의 개인정보">
        <Body>
          앱은 아동을 주된 이용 대상으로 하지 않으며, 아동의 개인정보를 인지한
          상태로 수집하지 않습니다 (수집하는 정보 자체가 없습니다).
        </Body>
      </Section>

      <Section title="8. 처리방침의 변경">
        <Body>
          법령이나 서비스 내용의 변경에 따라 본 방침이 수정될 수 있습니다.
          변경 시 이 페이지에 게시하고 상단의 시행일을 갱신합니다. 광고 등
          새로운 정보 처리가 추가되는 경우 앱 업데이트 안내를 통해 함께
          알립니다.
        </Body>
      </Section>

      <Section title="9. 문의처">
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
