# 배포 가이드 (수동 작업 체크리스트)

코드는 완성되어 있습니다. 아래는 계정 권한이 필요해 직접 하셔야 하는 작업입니다. 순서대로 진행하세요.

## 1. GitHub repo 생성 + push ✅ 완료

- repo: https://github.com/sangjaesangjae/pages-nextjs (`main`)

## 2. Vercel 연동 (자동 배포) ✅ 완료

- 프로젝트: `pages-nextjs` (sangjae-9394s-projects)
- Framework Preset: **Next.js** (Import 때 "Other"로 잡혀 페이지가 전부 404 났었음 — 재발 시 Settings → Build & Development에서 확인)
- 이후 `git push`할 때마다 자동 배포됩니다

## 3. 도메인 연결 ✅ 완료

- 서비스 도메인: `nemo.sangjaelabs.com`
- 가비아 DNS: `nemo` CNAME → `02f17b4bb7a74096.vercel-dns-017.com` (Vercel Domains 화면에 표시된 값)
- 확인: https://nemo.sangjaelabs.com/app-ads.txt

## 4. App Store Connect URL 입력

앱 심사 제출 시:
- 개인정보 처리방침 URL: `https://nemo.sangjaelabs.com/privacy`
- 지원 URL: `https://nemo.sangjaelabs.com/support`
- 마케팅 URL: `https://nemo.sangjaelabs.com`

## 5. AdMob app-ads.txt 인증

1. 앱이 App Store에 **게시된 후** AdMob 콘솔 → 앱 → 앱 설정에서 스토어 앱과 연결
2. App Store의 마케팅 URL이 이 사이트 도메인이어야 AdMob이 `app-ads.txt`를 크롤링합니다
3. AdMob 콘솔 → 앱 → app-ads.txt 탭에서 확인 (크롤링까지 최대 24시간)

## 출시 후 코드 수정 1건

- `src/app/page.tsx`의 "App Store 출시 준비 중" `Button`을 앱스토어 링크로 교체:
  ```tsx
  <a
    href="https://apps.apple.com/kr/app/<앱ID>"
    className="mt-10 inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-on-primary text-sm font-medium leading-none"
  >
    App Store에서 다운로드
  </a>
  ```
