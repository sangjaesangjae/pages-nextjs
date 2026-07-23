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

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Text as="h1" variant="display-lg" className="text-ink">
        개인정보 처리방침
      </Text>
      <Text variant="body-sm" className="mt-2 text-mute">
        시행일: 2026년 7월 23일
      </Text>

      <Section title="1. 개요">
        <Body>
          {site.name}(이하 &ldquo;개발자&rdquo;)는 모바일 퍼즐 게임
          &lsquo;{site.appName}&rsquo;(이하 &ldquo;앱&rdquo;)을 제공합니다. 본
          방침은 앱 이용 과정에서 처리되는 정보와 그 목적을 설명합니다.
        </Body>
      </Section>

      <Section title="2. 개발자가 직접 수집하는 개인정보">
        <Body>
          앱은 회원가입이나 로그인 없이 이용할 수 있으며, 개발자는 이용자의
          개인정보를 직접 수집하거나 별도 서버에 저장하지 않습니다. 퍼즐 진행
          상황, 설정 등 모든 데이터는 이용자의 기기 안에만 저장됩니다.
        </Body>
      </Section>

      <Section title="3. 광고 서비스 (Google AdMob)">
        <Body>
          앱은 광고 표시를 위해 Google AdMob을 사용합니다. AdMob은 광고 제공
          과정에서 광고 식별자(IDFA), 기기 정보, IP 주소 등을 수집할 수
          있습니다. 이 정보의 처리에 대한 자세한 내용은{" "}
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

      <Section title="4. 제3자 제공">
        <Body>
          개발자는 이용자의 개인정보를 보유하지 않으므로 제3자에게 제공하지
          않습니다. 광고 파트너(Google)가 광고 제공 과정에서 수집하는 정보는
          해당 사업자의 개인정보처리방침을 따릅니다.
        </Body>
      </Section>

      <Section title="5. 보관 및 파기">
        <Body>
          개발자가 직접 보관하는 개인정보는 없습니다. 기기에 저장된 앱 데이터는
          앱을 삭제하면 함께 삭제됩니다.
        </Body>
      </Section>

      <Section title="6. 이용자의 권리">
        <Body>
          iOS 설정 → 개인정보 보호 및 보안 → 추적에서 앱의 추적 요청을 거부할
          수 있으며, 같은 메뉴의 Apple 광고 항목에서 맞춤형 광고를 제한할 수
          있습니다.
        </Body>
      </Section>

      <Section title="7. 아동의 개인정보">
        <Body>앱은 아동의 개인정보를 수집하지 않습니다.</Body>
      </Section>

      <Section title="8. 문의">
        <Body>
          개인정보 관련 문의는{" "}
          <a
            href={`mailto:${site.supportEmail}`}
            className="text-ink underline"
          >
            {site.supportEmail}
          </a>
          로 연락해 주세요.
        </Body>
      </Section>

      <Section title="9. 방침의 변경">
        <Body>
          본 방침이 변경되는 경우 이 페이지를 통해 공지하며, 상단의 시행일을
          갱신합니다.
        </Body>
      </Section>
    </main>
  );
}
