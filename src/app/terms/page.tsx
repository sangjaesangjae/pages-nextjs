import type { Metadata } from "next";
import type { ReactNode } from "react";
import NextLink from "next/link";
import { Text } from "@/design-system";
import { site } from "@/lib/site";

// 먹꿈: 무광고(광고 조항 없음), 완전 로컬 저장, 유료 이용권(건당 소모성·월 구독) 있음.
// 해몽 콘텐츠는 오락·참고 목적 — 제5조가 이 앱 고유 조항이다.
// 원문 단일 진실: dream-app/shared/store-metadata/terms.md

export const metadata: Metadata = {
  title: "이용약관",
  description: `${site.appName} 앱의 이용약관입니다.`,
  alternates: { canonical: "/terms" },
};

function Article({ title, children }: { title: string; children: ReactNode }) {
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

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Text as="h1" variant="display-lg" className="text-ink">
        이용약관
      </Text>
      <Text variant="body-sm" className="mt-2 text-mute">
        시행일: 2026년 8월 4일
      </Text>

      <Article title="제1조 (목적)">
        <Body>
          이 약관은 {site.name}(이하 &ldquo;개발자&rdquo;)가 제공하는 모바일 앱
          &lsquo;{site.appName}&rsquo;(이하 &ldquo;서비스&rdquo;)의 이용 조건과
          절차, 개발자와 이용자의 권리·의무 및 책임 사항을 정하는 것을 목적으로
          합니다.
        </Body>
      </Article>

      <Article title="제2조 (정의)">
        <Bullets
          items={[
            <>
              <strong>서비스:</strong> 개발자가 iOS 앱으로 제공하는{" "}
              {site.appName}과 그에 딸린 기능 일체 — 꿈 기록(텍스트·음성),
              전통 해몽 사전, AI 정밀 해몽, 캐릭터 성장, 리포트
            </>,
            <>
              <strong>이용자:</strong> 이 약관에 따라 서비스를 이용하는 사람
            </>,
            <>
              <strong>앱 데이터:</strong> 서비스 이용 과정에서 생성되어 이용자
              기기에 저장되는 데이터 — 꿈 기록(본문·감정·인물 태그·상징),
              캐릭터 성장 상태, 이용권 사용 기록, 설정 값
            </>,
          ]}
        />
      </Article>

      <Article title="제3조 (약관의 효력과 변경)">
        <Body>
          이 약관은 서비스 웹페이지에 게시함으로써 효력이 발생합니다. 개발자는
          관련 법령을 위반하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시
          적용일과 변경 사유를 명시하여 적용일 7일 전부터 공지합니다. 이용자에게
          불리한 변경은 30일 전에 공지합니다.
        </Body>
      </Article>

      <Article title="제4조 (서비스의 내용)">
        <Bullets
          items={[
            "꿈 기록 — 텍스트 또는 온디바이스 음성 인식으로 꿈을 기록하고 감정·인물을 함께 남깁니다",
            "전통 해몽 사전 — 기록에서 감지된 상징의 전통 해몽과 길흉을 즉시 보여주고, 300개 상징을 검색·브라우즈할 수 있습니다",
            "AI 정밀 해몽 — 페르소나 4종 중 하나를 골라 꿈 전체 맥락의 풀이를 받습니다",
            "캐릭터 성장 — 기록이 쌓일수록 먹꿈이 캐릭터가 자랍니다",
            "서비스는 회원가입 없이 이용할 수 있으며, 광고가 표시되지 않습니다",
          ]}
        />
      </Article>

      <Article title="제5조 (해몽 콘텐츠의 성격)">
        <Body>
          서비스가 제공하는 전통 해몽·AI 해몽은 <strong>오락·참고 목적</strong>의
          콘텐츠이며, 의학적·법률적·재정적 조언이 아닙니다. 해몽 결과에 따른
          판단과 행동의 책임은 이용자에게 있습니다.
        </Body>
      </Article>

      <Article title="제6조 (이용권과 결제)">
        <Bullets
          items={[
            "AI 정밀 해몽은 주 1회 무료로 제공되며, 추가 이용은 건당 이용권(소모성) 또는 월 구독(매일 1회)으로 제공됩니다",
            "구독은 Apple App Store 계정 설정에서 언제든 해지할 수 있으며, 해지 시 현재 결제 주기 종료까지 이용할 수 있습니다",
            "결제·환불은 Apple App Store 정책을 따릅니다",
          ]}
        />
      </Article>

      <Article title="제7조 (앱 데이터의 저장과 한계)">
        <Body>
          앱 데이터는 이용자 기기의 내부 저장소에만 저장되며, 개발자의 서버로
          전송·보관되지 않습니다(백업 기능 미제공). 따라서 앱을 삭제하거나
          기기를 변경·초기화하면 앱 데이터가 함께 삭제되며, 개발자는 삭제된
          데이터를 복구해 드릴 수 없습니다.
        </Body>
      </Article>

      <Article title="제8조 (지식재산권)">
        <Body>
          서비스에 포함된 그래픽, 소리, 문구, 해몽 콘텐츠 등에 대한 저작권과
          지식재산권은 개발자 또는 정당한 권리자에게 있습니다. 이용자는 서비스를
          개인적·비상업적 용도로만 이용할 수 있으며, 개발자의 사전 동의 없이
          콘텐츠를 복제·배포·전송·2차 가공할 수 없습니다.
        </Body>
      </Article>

      <Article title="제9조 (이용자의 의무)">
        <Body>이용자는 다음 행위를 해서는 안 됩니다.</Body>
        <Bullets
          items={[
            "앱을 역설계·디컴파일·분해하거나 소스 코드를 추출하려는 행위",
            "자동화된 대량 호출, 서버 공격 등 서비스의 비정상적 이용 — 남용 방지를 위해 호출 한도가 적용될 수 있습니다",
            "관련 법령 또는 이 약관을 위반하는 행위",
          ]}
        />
      </Article>

      <Article title="제10조 (미성년자의 이용)">
        <Body>
          만 14세 미만인 자는 법정대리인의 동의를 얻어 서비스를 이용해야 합니다.
        </Body>
      </Article>

      <Article title="제11조 (개인정보 보호)">
        <Body>
          개발자는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하며,
          자세한 내용은{" "}
          <NextLink href="/privacy" className="text-ink underline">
            개인정보 처리방침
          </NextLink>
          을 따릅니다.
        </Body>
      </Article>

      <Article title="제12조 (서비스의 변경과 중단)">
        <Body>
          개발자는 서비스의 내용을 개선하거나 변경할 수 있습니다. 유료 기능에
          중대한 변경이 있는 경우 앱 업데이트 노트 등으로 고지하며, 서비스
          전부를 종료하는 경우 종료일 30일 전까지 앱 또는 서비스 웹페이지를
          통해 공지합니다.
        </Body>
      </Article>

      <Article title="제13조 (면책)">
        <Bullets
          items={[
            "천재지변, 통신 장애 등 개발자가 통제할 수 없는 사유로 발생한 손해",
            "이용자 기기의 고장·분실·초기화로 인한 앱 데이터 손실",
            "해몽 콘텐츠를 근거로 한 이용자의 판단·행동으로 발생한 손해",
            "이용자가 이 약관을 위반하여 발생한 손해",
          ]}
        />
        <Body>
          위 각 호에 대해 개발자는 책임을 지지 않습니다. 다만 개발자의 고의
          또는 중대한 과실로 인한 손해는 그러하지 않습니다.
        </Body>
      </Article>

      <Article title="제14조 (준거법과 분쟁 해결)">
        <Body>
          이 약관은 대한민국 법령에 따라 해석되며, 서비스 이용과 관련하여
          분쟁이 발생한 경우 민사소송법에 따른 관할 법원에서 해결합니다.
        </Body>
      </Article>

      <Article title="제15조 (문의)">
        <Body>
          이 약관에 관한 문의는{" "}
          <a href={`mailto:${site.supportEmail}`} className="text-ink underline">
            {site.supportEmail}
          </a>
          로 보내주세요.
        </Body>
      </Article>
    </main>
  );
}
