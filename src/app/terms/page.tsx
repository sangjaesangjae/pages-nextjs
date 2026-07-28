import type { Metadata } from "next";
import type { ReactNode } from "react";
import NextLink from "next/link";
import { Text } from "@/design-system";
import { site } from "@/lib/site";

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
        시행일: 2026년 7월 28일
      </Text>

      <Article title="제1조 (목적)">
        <Body>
          이 약관은 {site.name}(이하 &ldquo;개발자&rdquo;)가 제공하는 모바일
          퍼즐 게임 &lsquo;{site.appName}&rsquo;(이하 &ldquo;서비스&rdquo;)의
          이용 조건과 절차, 개발자와 이용자의 권리·의무 및 책임 사항을 정하는
          것을 목적으로 합니다.
        </Body>
      </Article>

      <Article title="제2조 (정의)">
        <Bullets
          items={[
            <>
              <strong>서비스:</strong> 개발자가 iOS 앱으로 제공하는 네모로직
              퍼즐 게임과 그에 딸린 기능 일체
            </>,
            <>
              <strong>이용자:</strong> 이 약관에 따라 서비스를 이용하는 사람
            </>,
            <>
              <strong>게임 데이터:</strong> 퍼즐 진행 상황, 클리어 기록,
              타임어택 기록, 설정 값 등 서비스 이용 과정에서 생성되어 이용자
              기기에 저장되는 데이터
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
            "가로·세로 숫자 힌트로 그림을 완성하는 네모로직 퍼즐 제공",
            "타임어택 모드와 도안 갤러리 등 부가 기능 제공",
            "서비스는 무료로 제공되며, 회원가입 없이 이용할 수 있습니다",
            "무료 제공을 위해 앱 안에 광고가 표시될 수 있습니다",
          ]}
        />
      </Article>

      <Article title="제5조 (게임 데이터의 저장과 한계)">
        <Body>
          게임 데이터는 이용자 기기의 내부 저장소에만 저장되며, 개발자의 서버로
          전송·보관되지 않습니다. 따라서 앱을 삭제하거나 기기를 초기화하면 게임
          데이터가 함께 삭제되며, 개발자는 삭제된 데이터를 복구해 드릴 수
          없습니다.
        </Body>
      </Article>

      <Article title="제6조 (광고)">
        <Body>
          서비스에는 Google AdMob을 통한 광고가 게재될 수 있습니다. 광고 게재
          과정에서 처리되는 정보와 이용자의 선택권은{" "}
          <NextLink href="/privacy" className="text-ink underline">
            개인정보 처리방침
          </NextLink>
          에서 안내합니다. 광고 사업자가 제공하는 상품·서비스와 관련한 거래는
          이용자와 해당 사업자 사이의 문제이며, 개발자는 이에 대해 책임을 지지
          않습니다.
        </Body>
      </Article>

      <Article title="제7조 (지식재산권)">
        <Body>
          서비스에 포함된 퍼즐 도안, 캐릭터, 그래픽, 소리, 문구 등 콘텐츠에 대한
          저작권과 지식재산권은 개발자 또는 정당한 권리자에게 있습니다. 이용자는
          서비스를 개인적·비상업적 용도로만 이용할 수 있으며, 개발자의 사전 동의
          없이 콘텐츠를 복제·배포·전송·2차 가공할 수 없습니다.
        </Body>
      </Article>

      <Article title="제8조 (이용자의 의무)">
        <Body>이용자는 다음 행위를 해서는 안 됩니다.</Body>
        <Bullets
          items={[
            "앱을 역설계·디컴파일·분해하거나 소스 코드를 추출하려는 행위",
            "비정상적인 방법으로 기록을 조작하거나 서비스 운영을 방해하는 행위",
            "관련 법령 또는 이 약관을 위반하는 행위",
          ]}
        />
      </Article>

      <Article title="제9조 (미성년자의 이용)">
        <Body>
          만 14세 미만인 자는 법정대리인의 동의를 얻어 서비스를 이용해야 합니다.
        </Body>
      </Article>

      <Article title="제10조 (개인정보 보호)">
        <Body>
          개발자는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하며,
          자세한 내용은{" "}
          <NextLink href="/privacy" className="text-ink underline">
            개인정보 처리방침
          </NextLink>
          을 따릅니다.
        </Body>
      </Article>

      <Article title="제11조 (서비스의 변경과 중단)">
        <Body>
          개발자는 서비스의 내용을 개선하거나 변경할 수 있습니다. 서비스 전부를
          종료하는 경우 종료일 30일 전까지 앱 또는 서비스 웹페이지를 통해
          공지합니다. 게임 데이터는 이용자 기기에만 저장되므로 서비스 종료
          이후에도 이미 설치된 앱의 오프라인 기능은 계속 사용할 수 있으나,
          업데이트와 지원은 제공되지 않을 수 있습니다.
        </Body>
      </Article>

      <Article title="제12조 (면책)">
        <Bullets
          items={[
            "천재지변, 통신 장애 등 개발자가 통제할 수 없는 사유로 발생한 손해",
            "이용자 기기의 고장·분실·초기화로 인한 게임 데이터 손실",
            "이용자가 이 약관을 위반하여 발생한 손해",
          ]}
        />
        <Body>
          위 각 호에 대해 개발자는 책임을 지지 않습니다. 다만 개발자의 고의
          또는 중대한 과실로 인한 손해는 그러하지 않습니다.
        </Body>
      </Article>

      <Article title="제13조 (준거법과 분쟁 해결)">
        <Body>
          이 약관은 대한민국 법령에 따라 해석되며, 서비스 이용과 관련하여
          분쟁이 발생한 경우 민사소송법에 따른 관할 법원에서 해결합니다.
        </Body>
      </Article>

      <Article title="제14조 (문의)">
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
