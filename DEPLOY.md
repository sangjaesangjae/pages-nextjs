# 배포 가이드 (수동 작업 체크리스트)

코드는 완성되어 있습니다. 아래는 계정 권한이 필요해 직접 하셔야 하는 작업입니다. 순서대로 진행하세요.

## 1. GitHub repo 생성 + push

1. https://github.com/new 에서 repo 생성 (예: `sangjaelabs-pages`, private 가능)
2. 로컬에서:
   ```bash
   cd /Users/kwonsangjae/Desktop/app/pages-nextjs
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
