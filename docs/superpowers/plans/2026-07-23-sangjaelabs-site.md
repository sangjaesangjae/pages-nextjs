# sangjaelabs.com 서비스 페이지 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** nemo 앱 출시에 필요한 웹페이지(랜딩·개인정보 처리방침·지원)와 AdMob `app-ads.txt`를 정적 페이지로 구현한다.

**Architecture:** Next.js App Router의 정적 생성(SSG)만 사용한다. 서버 로직 없음. 사이트 상수는 `src/lib/site.ts` 한 곳에 두고 모든 페이지·sitemap·robots가 이를 소비한다. UI는 기존 `src/design-system`의 `Text`·`Button`·`FaqRow`·`cn`·`typography`만 소비하고, 데모 컴포넌트는 수정하지 않는다.

**Tech Stack:** Next.js 16.2.10 (App Router), React 19, Tailwind CSS 4, TypeScript 5

**Spec:** `docs/superpowers/specs/2026-07-23-sangjaelabs-site-design.md`

## Global Constraints

- 작업 디렉토리: `/Users/kwonsangjae/Desktop/app/nemo-app/pages-nextjs`
- 모든 사용자 노출 콘텐츠는 **한국어**
- AdMob 게시자 ID: `pub-5672091686767584` (정확히 이 값)
- 공개 문의 이메일: `sjsj00718@gmail.com`
- 사이트 URL: `https://www.sangjaelabs.com`
- 전 페이지 정적 생성 — `next build` 라우트 테이블에서 모든 경로가 `○ (Static)`이어야 함
- `src/design-system/` 기존 파일은 **수정 금지** (소비만 한다)
- import alias: `@/*` → `./src/*`
- 테스트 프레임워크 없음 — 검증은 `npm run build` 성공 + 라우트 응답 확인으로 한다 (정적 콘텐츠 사이트라 단위 테스트 프레임워크 도입은 YAGNI)

---

### Task 1: app-ads.txt

**Files:**
- Create: `public/app-ads.txt`
- Delete: `public/next.svg`, `public/vercel.svg`, `public/file.svg`, `public/globe.svg`, `public/window.svg` (데모 잔재 — Task 5에서 랜딩을 재작성하면 아무도 참조하지 않음. 참조가 사라지기 전이지만 `src/app/page.tsx`는 Task 5에서 함께 교체되므로 이 시점엔 빌드가 깨지지 않는다 — `next/image`의 `src`는 문자열이라 빌드타임 존재 검증이 없음)

**Interfaces:**
- Produces: `https://<host>/app-ads.txt` 경로의 정적 텍스트 파일

- [ ] **Step 1: app-ads.txt 작성**

`public/app-ads.txt` 파일을 정확히 아래 한 줄(끝 개행 포함)로 생성:

```
google.com, pub-5672091686767584, DIRECT, f08c47fec0942fa0
```

- [ ] **Step 2: 데모 SVG 삭제**

```bash
cd /Users/kwonsangjae/Desktop/app/nemo-app/pages-nextjs
rm public/next.svg public/vercel.svg public/file.svg public/globe.svg public/window.svg
```

- [ ] **Step 3: 파일 내용 검증**

Run: `cat public/app-ads.txt`
Expected: `google.com, pub-5672091686767584, DIRECT, f08c47fec0942fa0`

Run: `ls public/`
Expected: `app-ads.txt` 만 존재

- [ ] **Step 4: Commit**

```bash
git add -A public/
git commit -m "feat: AdMob app-ads.txt 추가, 데모 SVG 제거"
```

---

### Task 2: 사이트 상수 + 레이아웃 메타데이터 + robots/sitemap

**Files:**
- Create: `src/lib/site.ts`
- Modify: `src/app/layout.tsx` (전체 교체)
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`

**Interfaces:**
- Produces: `site` 상수 — Task 3~5가 소비한다.
  ```ts
  export const site: {
    url: "https://www.sangjaelabs.com";
    name: "Sangjae Labs";
    appName: "네모";
    description: string;
    supportEmail: "sjsj00718@gmail.com";
  };
  ```

- [ ] **Step 1: `src/lib/site.ts` 작성**

```ts
export const site = {
  url: "https://www.sangjaelabs.com",
  name: "Sangjae Labs",
  appName: "네모",
  description:
    "가로·세로 숫자 힌트로 숨겨진 그림을 완성하는 네모로직 퍼즐 게임, 네모.",
  supportEmail: "sjsj00718@gmail.com",
} as const;
```

- [ ] **Step 2: `src/app/layout.tsx` 전체 교체**

```tsx
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Display face only — body and code stay on the OS-native stack (see design-system/tokens.css)
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.appName} — 네모로직 퍼즐 | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
```

변경점: `lang="ko"`, `metadataBase`, title template, OG 기본값. 구조는 기존 그대로.

- [ ] **Step 3: `src/app/robots.ts` 작성**

```ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/design-system",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
```

(`/design-system`은 내부 데모 페이지라 색인 제외)

- [ ] **Step 4: `src/app/sitemap.ts` 작성**

```ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/privacy`, priority: 0.5 },
    { url: `${site.url}/support`, priority: 0.5 },
  ];
}
```

- [ ] **Step 5: 빌드 검증**

Run: `cd /Users/kwonsangjae/Desktop/app/nemo-app/pages-nextjs && npm run build`
Expected: 빌드 성공. 라우트 테이블에 `/robots.txt`, `/sitemap.xml`이 `○ (Static)`으로 표시.

- [ ] **Step 6: Commit**

```bash
git add src/lib/site.ts src/app/layout.tsx src/app/robots.ts src/app/sitemap.ts
git commit -m "feat: 사이트 상수·한국어 메타데이터·robots·sitemap"
```

---

### Task 3: 개인정보 처리방침 (/privacy)

**Files:**
- Create: `src/app/privacy/page.tsx`

**Interfaces:**
- Consumes: `site` (`@/lib/site`), `Text` (`@/design-system`)
- Produces: `/privacy` 정적 페이지 — Task 5의 푸터가 링크한다.

- [ ] **Step 1: `src/app/privacy/page.tsx` 작성**

```tsx
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
```

- [ ] **Step 2: 빌드 검증**

Run: `cd /Users/kwonsangjae/Desktop/app/nemo-app/pages-nextjs && npm run build`
Expected: 빌드 성공. `/privacy`가 `○ (Static)`으로 표시.

- [ ] **Step 3: Commit**

```bash
git add src/app/privacy/page.tsx
git commit -m "feat: 개인정보 처리방침 페이지"
```

---

### Task 4: 지원 페이지 (/support)

**Files:**
- Create: `src/app/support/page.tsx`

**Interfaces:**
- Consumes: `site` (`@/lib/site`), `Text`·`FaqRow` (`@/design-system`)
- Produces: `/support` 정적 페이지 — Task 5의 푸터가 링크한다.

- [ ] **Step 1: `src/app/support/page.tsx` 작성**

```tsx
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
            question="퍼즐 진행 상황은 어디에 저장되나요?"
            answer="모든 진행 상황은 이용자의 기기 안에만 저장됩니다. 앱을 삭제하면 진행 상황도 함께 삭제되니 주의해 주세요."
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
```

- [ ] **Step 2: 빌드 검증**

Run: `cd /Users/kwonsangjae/Desktop/app/nemo-app/pages-nextjs && npm run build`
Expected: 빌드 성공. `/support`가 `○ (Static)`으로 표시.

- [ ] **Step 3: Commit**

```bash
git add src/app/support/page.tsx
git commit -m "feat: 지원 페이지 (문의 이메일·FAQ)"
```

---

### Task 5: 랜딩 페이지 (/) + 공용 푸터

**Files:**
- Create: `src/components/SiteFooter.tsx`
- Modify: `src/app/layout.tsx` (푸터 추가 — 아래 전체 코드 제공)
- Modify: `src/app/page.tsx` (전체 교체)

**Interfaces:**
- Consumes: `site` (`@/lib/site`), `Text`·`Button`·`cn`·`typography` (`@/design-system`), Task 3·4의 `/privacy`·`/support` 경로
- Produces: `SiteFooter` 컴포넌트 (props 없음), 전 페이지에 푸터 노출

- [ ] **Step 1: `src/components/SiteFooter.tsx` 작성**

```tsx
import NextLink from "next/link";
import { cn, typography } from "@/design-system";
import { site } from "@/lib/site";

const links = [
  { label: "홈", href: "/" },
  { label: "개인정보 처리방침", href: "/privacy" },
  { label: "지원", href: "/support" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline px-6 py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              className={cn(typography["caption-sm"], "text-body")}
            >
              {link.label}
            </NextLink>
          ))}
        </nav>
        <span className={cn(typography["caption-sm"], "text-body")}>
          © {new Date().getFullYear()} {site.name}
        </span>
      </div>
    </footer>
  );
}
```

(데모용 `Footer` 컴포넌트는 링크가 하드코딩되어 있어 사용하지 않고, 사이트 전용 푸터를 새로 만든다. `src/design-system/`은 수정 금지 제약 유지.)

- [ ] **Step 2: `src/app/layout.tsx`에 푸터 추가 (전체 교체)**

```tsx
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteFooter } from "@/components/SiteFooter";

// Display face only — body and code stay on the OS-native stack (see design-system/tokens.css)
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.appName} — 네모로직 퍼즐 | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: `src/app/page.tsx` 전체 교체**

```tsx
import type { Metadata } from "next";
import { Button, Text } from "@/design-system";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const features = [
  {
    title: "차근차근 즐기는 퍼즐",
    description: "쉬운 레벨부터 차례로 풀며 네모로직에 자연스럽게 익숙해집니다.",
  },
  {
    title: "타임어택 모드",
    description: "같은 퍼즐을 더 빠르게 — 최고 기록에 도전해 보세요.",
  },
  {
    title: "함께하는 마스코트",
    description: "퍼즐을 푸는 동안 화면 속 마스코트가 곁에서 응원합니다.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 py-24 text-center">
      <Text as="h1" variant="display-xl" className="text-ink">
        숫자 힌트로 완성하는
        <br />
        네모로직 퍼즐, {site.appName}
      </Text>
      <Text variant="body-md" className="mt-6 max-w-md text-body">
        {site.description}
      </Text>
      <Button disabled className="mt-10">
        App Store 출시 준비 중
      </Button>

      <section className="mt-section grid w-full gap-8 text-left sm:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title}>
            <Text as="h2" variant="heading-sm" className="text-ink">
              {feature.title}
            </Text>
            <Text variant="body-sm" className="mt-1 text-body">
              {feature.description}
            </Text>
          </div>
        ))}
      </section>
    </main>
  );
}
```

(App Store 버튼은 출시 전이라 `disabled` — 출시 후 앱스토어 링크 `<a>`로 교체한다. 스펙에 명시된 의도적 placeholder.)

- [ ] **Step 4: 빌드 검증**

Run: `cd /Users/kwonsangjae/Desktop/app/nemo-app/pages-nextjs && npm run build`
Expected: 빌드 성공. `/`, `/privacy`, `/support`, `/design-system` 모두 `○ (Static)`.

- [ ] **Step 5: Commit**

```bash
git add src/components/SiteFooter.tsx src/app/layout.tsx src/app/page.tsx
git commit -m "feat: nemo 랜딩 페이지·공용 푸터"
```

---

### Task 6: 전체 검증 + 배포 가이드

**Files:**
- Create: `DEPLOY.md`

**Interfaces:**
- Consumes: Task 1~5의 전체 결과물

- [ ] **Step 1: 린트**

Run: `cd /Users/kwonsangjae/Desktop/app/nemo-app/pages-nextjs && npm run lint`
Expected: 에러 0건 (기존 데모 페이지 경고는 무시 가능, 새 파일 에러는 수정)

- [ ] **Step 2: 프로덕션 서버로 전 경로 검증**

```bash
cd /Users/kwonsangjae/Desktop/app/nemo-app/pages-nextjs
npm run build
npm run start & SERVER_PID=$!
sleep 3
curl -s -o /dev/null -w "%{http_code} /\n" http://localhost:3000/
curl -s -o /dev/null -w "%{http_code} /privacy\n" http://localhost:3000/privacy
curl -s -o /dev/null -w "%{http_code} /support\n" http://localhost:3000/support
curl -s -o /dev/null -w "%{http_code} /robots.txt\n" http://localhost:3000/robots.txt
curl -s -o /dev/null -w "%{http_code} /sitemap.xml\n" http://localhost:3000/sitemap.xml
curl -s http://localhost:3000/app-ads.txt
kill $SERVER_PID
```

Expected: 다섯 경로 모두 `200`, 마지막 출력이 정확히 `google.com, pub-5672091686767584, DIRECT, f08c47fec0942fa0`

- [ ] **Step 3: `DEPLOY.md` 작성 (사용자 수동 작업 가이드)**

```markdown
# 배포 가이드 (수동 작업 체크리스트)

코드는 완성되어 있습니다. 아래는 계정 권한이 필요해 직접 하셔야 하는 작업입니다. 순서대로 진행하세요.

## 1. GitHub repo 생성 + push

1. https://github.com/new 에서 repo 생성 (예: `sangjaelabs-pages`, private 가능)
2. 로컬에서:
   ```bash
   cd /Users/kwonsangjae/Desktop/app/nemo-app/pages-nextjs
   git remote add origin git@github.com:<계정>/sangjaelabs-pages.git
   git push -u origin main
   ```

## 2. Vercel 연동 (자동 배포)

1. https://vercel.com 에 GitHub 계정으로 로그인
2. Add New → Project → 위 repo Import
3. 설정 변경 없이 Deploy (Next.js 자동 감지)
4. 이후 `git push`할 때마다 자동 배포됩니다

## 3. 도메인 연결

1. Vercel 프로젝트 → Settings → Domains → `www.sangjaelabs.com` 추가
2. 도메인 구입처(DNS 관리) → `www` CNAME 레코드를 `cname.vercel-dns.com`으로 설정
3. apex(`sangjaelabs.com`)도 쓰려면 Vercel 안내에 따라 A 레코드(76.76.21.21) 추가 → www로 리다이렉트 설정
4. 전파 후 https://www.sangjaelabs.com/app-ads.txt 접속 확인

## 4. App Store Connect URL 입력

앱 심사 제출 시:
- 개인정보 처리방침 URL: `https://www.sangjaelabs.com/privacy`
- 지원 URL: `https://www.sangjaelabs.com/support`
- 마케팅 URL: `https://www.sangjaelabs.com`

## 5. AdMob app-ads.txt 인증

1. 앱이 App Store에 **게시된 후** AdMob 콘솔 → 앱 → 앱 설정에서 스토어 앱과 연결
2. App Store의 마케팅 URL이 이 사이트 도메인이어야 AdMob이 `app-ads.txt`를 크롤링합니다
3. AdMob 콘솔 → 앱 → app-ads.txt 탭에서 확인 (크롤링까지 최대 24시간)

## 출시 후 코드 수정 1건

- `src/app/page.tsx`의 "App Store 출시 준비 중" `Button`을 앱스토어 링크로 교체:
  ```tsx
  <a
    href="https://apps.apple.com/kr/app/<앱ID>"
    className="mt-10 inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-on-primary"
  >
    App Store에서 다운로드
  </a>
  ```
```

- [ ] **Step 4: Commit**

```bash
git add DEPLOY.md
git commit -m "docs: 배포 수동 작업 가이드"
```
