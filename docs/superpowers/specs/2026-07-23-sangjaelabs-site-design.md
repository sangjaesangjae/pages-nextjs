# sangjaelabs.com 서비스 페이지 설계

날짜: 2026-07-23
프로젝트: pages-nextjs (Next.js 16 + Tailwind 4, App Router)
목적: nemo 앱 출시에 필요한 웹페이지(개인정보 처리방침·지원·마케팅 URL)와 AdMob `app-ads.txt`를 Vercel + sangjaelabs.com 도메인으로 호스팅한다.

## 결정 사항

| 항목 | 결정 |
|------|------|
| 프로젝트 | 기존 `pages-nextjs` 재사용 |
| 구조 | nemo 단일 (멀티앱 구조는 다음 앱 출시 때) |
| 언어 | 한국어만 |
| AdMob 게시자 ID | `pub-5672091686767584` |
| 공개 문의 이메일 | `sjsj00718@gmail.com` |
| 렌더링 | 전 페이지 정적(SSG), 서버 로직 없음 |

## 페이지 구조

```
sangjaelabs.com/
├─ /              ← nemo 랜딩 (마케팅 URL) — 앱 소개, 앱스토어 링크 자리(placeholder)
├─ /privacy       ← 개인정보 처리방침
├─ /support       ← 지원 페이지 (문의 이메일, 간단 FAQ)
└─ /app-ads.txt   ← public/app-ads.txt 정적 파일
```

### app-ads.txt

`public/app-ads.txt` 정적 파일 1개:

```
google.com, pub-5672091686767584, DIRECT, f08c47fec0942fa0
```

`f08c47fec0942fa0`은 Google 공통 인증 ID(TAG ID)로 모든 AdMob 계정 동일.

## SEO

- Next.js Metadata API: 페이지별 `title` / `description` / Open Graph
- `app/sitemap.ts`, `app/robots.ts`로 사이트맵·robots 자동 생성
- `<html lang="ko">`, `metadataBase` = `https://www.sangjaelabs.com`

## 콘텐츠

### 개인정보 처리방침 (/privacy)

1인 개발자 표준 구성. 핵심: 계정·자체 서버 없는 오프라인 퍼즐 게임이라 개발자가 직접 수집하는 개인정보 없음.

- 수집 항목: Google AdMob이 광고 제공 과정에서 수집하는 광고 식별자(IDFA)·기기 정보
- 이용 목적: 광고 제공
- 제3자: Google AdMob (Google 개인정보처리방침 링크 포함)
- 보관 기간: 개발자 직접 보관 없음
- 이용자 권리: 기기 설정에서 광고 추적 제한 방법 안내
- 문의처: sjsj00718@gmail.com
- 시행일 명시

### 지원 페이지 (/support)

- 문의 이메일 (mailto 링크)
- 간단 FAQ 2~3개 (진행 상황 저장, 광고 관련 등)

### 랜딩 (/)

- nemo 앱 소개 (네모로직/노노그램 퍼즐 게임)
- 앱스토어 다운로드 버튼 자리 (출시 전이므로 링크는 placeholder, 출시 후 교체)
- /privacy, /support 푸터 링크

### 디자인

기존 `src/design-system` 토큰(Tailwind 4) 활용. 데모용 컴포넌트(PricingCard, TerminalCard 등)는 수정하지 않고 필요한 것만 소비한다.

## 사용자 수동 작업 (코드 완성 후 순서대로)

1. GitHub repo 생성 + push (현재 로컬 git만 존재)
2. Vercel에서 GitHub repo Import → 자동 배포 연결
3. Vercel 프로젝트 → Domains에 `www.sangjaelabs.com` 추가, DNS 관리처에서 `www` CNAME → `cname.vercel-dns.com`
4. App Store Connect에 URL 3종 입력 (privacy / support / 마케팅)
5. 앱 스토어 등록 후 AdMob 콘솔에서 앱 연결 → app-ads.txt 자동 크롤링 확인 (최대 24시간)

## 범위 제외

- Universal Link / Asset Links (앱 출시 후 딥링크 필요 시)
- 영어 페이지
- 멀티앱 플랫폼 구조 (`/apps/{slug}` — 다음 앱 출시 때 개편)

## 테스트 / 검증

- `npm run build` 성공 (정적 생성 확인)
- 로컬 `npm run dev`에서 4개 경로 응답 확인 (`/`, `/privacy`, `/support`, `/app-ads.txt`)
- app-ads.txt 응답이 순수 텍스트 한 줄인지 확인
