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
        시행일: 2026년 7월 23일
      </Text>

      <Section title="1. 총칙">
        <Body>
          {site.name}(이하 &ldquo;개발자&rdquo;)는 모바일 앱
          &lsquo;{site.appName}&rsquo;(이하 &ldquo;앱&rdquo;) 이용자의
          개인정보를 소중히 여기며, 「개인정보 보호법」 등 관련 법령을
          준수합니다. 본 방침은 앱 이용 과정에서 어떤 정보가 처리되는지, 그
          목적과 보관 방식, 그리고 이용자가 행사할 수 있는 권리를 설명합니다.
        </Body>
      </Section>

      <Section title="2. 개발자가 직접 수집하는 개인정보">
        <Body>
          앱은 회원가입, 로그인, 프로필 작성 없이 이용할 수 있으며, 개발자는
          이용자의 이름·이메일 주소·전화번호 등 어떠한 개인정보도 직접
          수집하거나 개발자의 서버로 전송·저장하지 않습니다.
        </Body>
        <Body>
          앱 이용 데이터(예: 진행 상황·설정 값 등)는 이용자 기기의 내부
          저장소에만 저장되며, 개발자는 여기에 접근할 수 없습니다.
          {/* 새 앱: 실제 수집 항목에 맞게 수정 */}
        </Body>
      </Section>

      <Section title="3. 광고 서비스를 통해 자동으로 수집되는 정보 (Google AdMob)">
        <Body>
          앱은 무료 서비스 제공을 위해 Google AdMob 광고를 표시합니다. 광고가
          게재되는 과정에서 Google은 다음과 같은 정보를 자동으로 수집할 수
          있습니다.
        </Body>
        <Bullets
          items={[
            "광고 식별자(IDFA) 또는 기기 식별자(IDFV)",
            "IP 주소 및 이를 통한 대략적인 위치 정보",
            "기기 모델, 운영체제 버전, 언어 설정 등 기기 정보",
            "광고 조회·클릭 등 광고와의 상호작용 기록",
          ]}
        />
        <Body>
          이 정보는 광고 게재와 게재 빈도 제한, 광고 성과 측정, 부정 클릭
          방지, 그리고 이용자가 추적에 동의한 경우 맞춤형 광고 제공을 위해
          사용됩니다. 자세한 내용은{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-ink underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google 개인정보처리방침
          </a>
          과{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            className="text-ink underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google 광고 기술 정책
          </a>
          을 참고해 주세요.
        </Body>
      </Section>

      <Section title="4. 앱 추적 투명성(ATT) 권한">
        <Body>
          앱은 iOS 정책에 따라 맞춤형 광고를 위한 추적을 시작하기 전에 Apple의
          앱 추적 투명성(App Tracking Transparency) 권한을 요청합니다. 추적을
          거부하더라도 앱의 모든 기능을 동일하게 이용할 수 있으며, 이 경우
          맞춤형이 아닌 일반 광고가 표시됩니다.
        </Body>
      </Section>

      <Section title="5. 제3자 제공 및 국외 이전">
        <Body>
          개발자는 이용자의 개인정보를 보유하지 않으므로 이를 제3자에게
          제공하거나 판매하지 않습니다. 광고 게재 과정에서 Google이 수집하는
          정보의 처리는 Google의 개인정보처리방침을 따르며, Google의 서버는
          국외(미국 등)에 위치할 수 있어 해당 정보는 국외에서 처리될 수
          있습니다.
        </Body>
      </Section>

      <Section title="6. 개인정보의 보유 및 파기">
        <Body>
          개발자가 직접 보유하는 개인정보는 없습니다. 기기에 저장된 앱 이용
          데이터는 이용자가 앱을 삭제하면 함께 삭제되며, 삭제된 데이터는
          복구할 수 없습니다.
        </Body>
      </Section>

      <Section title="7. 이용자의 권리와 행사 방법">
        <Bullets
          items={[
            <>
              <strong>추적 거부:</strong> 설정 → 개인정보 보호 및 보안 → 추적
              → &lsquo;{site.appName}&rsquo; 허용 끄기
            </>,
            <>
              <strong>맞춤형 광고 제한:</strong> 설정 → 개인정보 보호 및 보안
              → Apple 광고 → 맞춤형 광고 끄기
            </>,
            <>
              <strong>Google 광고 개인화 설정:</strong>{" "}
              <a
                href="https://adssettings.google.com"
                className="text-ink underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                adssettings.google.com
              </a>
              에서 관리
            </>,
            <>
              <strong>데이터 삭제:</strong> 앱을 삭제하면 기기에 저장된 모든
              앱 이용 데이터가 함께 삭제됩니다
            </>,
          ]}
        />
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
