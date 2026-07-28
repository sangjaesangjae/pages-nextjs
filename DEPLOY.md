# 배포 가이드 (Cloudflare Pages)

> Vercel Hobby는 약관상 비상업 용도 한정이라 **Cloudflare Pages**(무료 티어 상업 사용 허용, 정적 대역폭 무제한)로 운영한다. 빌드는 정적 export(`next.config.ts`의 `output: "export"` → 산출물 `out/`).

## 브랜치 운영 모델

- **main = 앱 중립 템플릿.** 앱별 콘텐츠는 두지 않는다 — `src/lib/site.ts` placeholder와 공용 구조만.
- **앱 하나 = 브랜치 하나 = Cloudflare Pages 프로젝트 하나.** 같은 GitHub 레포로 프로젝트를 여러 개 만들고, 각 프로젝트의 **production 브랜치를 그 앱 브랜치로** 지정한다 (예: 프로젝트 `nemo-pages` → production branch `nemo`). 커스텀 도메인은 각 프로젝트에 붙인다 — 브랜치별 도메인이 공식 지원 경로로 해결된다.
- 새 앱 추가: main에서 브랜치 따기 → `site.ts` 값 교체·페이지 채우기 → push → 아래 §1 절차로 프로젝트 생성·도메인 연결 → main README 앱 인덱스에 행 추가.

## 0. 최초 1회 준비 ✅ 완료 (2026-07-28)

- `wrangler login` ✅ — 이후 모든 배포·도메인 연결이 CLI/API로 가능
- `sangjaelabs.com` 네임서버 Cloudflare 이전 ✅ (megan/derek.ns.cloudflare.com) — 앱 도메인 연결까지 완전 자동. iCloud 메일 레코드 5종(MX×2·SPF·apple 인증·DKIM) 이전 검증 완료.

## 1. 앱 배포 (앱마다 — wrangler로 전부 자동, factory-ship이 실행)

앱 브랜치를 체크아웃한 상태에서:

```bash
npx wrangler pages project create <앱영문명>-pages --production-branch <앱브랜치>
npm run build
npx wrangler pages deploy out --project-name <앱영문명>-pages --branch <앱브랜치>
```

배포 확인: `https://<앱영문명>-pages.pages.dev`. 이후 페이지 수정 시 build+deploy 두 줄만 재실행 (direct-upload 방식 — git push 자동배포 대신 배포 명령을 스킬이 실행한다. 소스 진실은 여전히 이 레포의 앱 브랜치).

## 2. 커스텀 도메인 연결 (앱마다 1회 — API로 완전 자동)

wrangler v4에는 domain 서브커맨드가 **없다** — Cloudflare API를 직접 호출한다. 토큰은 단계별로 다르다 (정확한 명령은 `app-factory/skills/factory-ship/references/app-page.md` ⑤):

1. 존 DNS에 CNAME 생성: `POST /zones/<존ID>/dns_records` — `<앱>` → `<앱영문명>-pages.pages.dev`, proxied.
   **⚠️ wrangler OAuth 토큰으로는 불가**(스코프에 `dns_records:edit` 없음, zone:read뿐 — moodcam 연결 때 실증). **`~/.cloudflare/dns-token`**(Edit zone DNS 템플릿으로 발급한 API 토큰, sangjaelabs.com 존 한정)을 Bearer로 쓴다. 파일이 없으면 대시보드에서 1회 발급해 저장(권한 600).
2. Pages 프로젝트에 도메인 등록: `POST /accounts/<계정>/pages/projects/<앱영문명>-pages/domains` — 이건 wrangler OAuth 토큰(pages:write)으로 가능 (이미 등록돼 pending이면 `PATCH .../domains/<도메인>`으로 재검증)
3. 인증서 발급 1~5분 대기 → 확인: `https://<앱>.sangjaelabs.com/app-ads.txt` 200

대시보드 폴백: 프로젝트 → Custom domains → Set up a custom domain (존이 같은 계정이라 즉시 활성).

> **nemo 마이그레이션 순서 (무중단):** `nemo` 브랜치 체크아웃 → §1 명령으로 `nemo-pages` 생성·배포 → pages.dev 확인 → 도메인 전환(§2) → `https://nemo.sangjaelabs.com` 정상 확인 → 그때 Vercel 프로젝트 삭제 + main(템플릿) push 가능.

## 3. App Store Connect URL 입력 (앱마다)

- 개인정보 처리방침 URL: `https://<앱>.sangjaelabs.com/privacy`
- 지원 URL: `https://<앱>.sangjaelabs.com/support`
- 마케팅 URL: `https://<앱>.sangjaelabs.com`

## 4. AdMob app-ads.txt 인증

1. 앱이 App Store에 **게시된 후** AdMob 콘솔 → 앱 → 앱 설정에서 스토어 앱과 연결
2. App Store의 마케팅 URL이 이 사이트 도메인이어야 AdMob이 `app-ads.txt`를 크롤링합니다
3. AdMob 콘솔 → 앱 → app-ads.txt 탭에서 확인 (크롤링까지 최대 24시간)

## 출시 후 코드 수정 1건 (앱 브랜치에서)

- `src/app/page.tsx`의 "App Store 출시 준비 중" `Button`을 앱스토어 링크로 교체:
  ```tsx
  <a
    href="https://apps.apple.com/kr/app/<앱ID>"
    className="mt-10 inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-on-primary text-sm font-medium leading-none"
  >
    App Store에서 다운로드
  </a>
  ```

## 기록 (과거)

- 초기 배포는 Vercel(`pages-nextjs`, sangjae-9394s-projects)이었고 `nemo.sangjaelabs.com` CNAME이 `02f17b4bb7a74096.vercel-dns-017.com`을 가리켰다 — Cloudflare 이전 완료 후 Vercel 프로젝트는 삭제한다.
