// ⚠️ 템플릿(main 브랜치)의 placeholder — 새 앱 브랜치에서 이 파일의 값만 교체하면
// 페이지 전체(랜딩·privacy·support·sitemap·robots)가 그 앱으로 바뀐다.
// 절차: main에서 `git checkout -b <앱영문명>` → 이 값 교체 → push →
// DEPLOY.md §1(wrangler 배포)·§2(도메인 API 연결) → main README 인덱스 행 추가.
export const site = {
  url: "https://your-app.sangjaelabs.com",
  name: "Sangjae Labs",
  appName: "YOUR_APP_NAME",
  description: "YOUR_APP_DESCRIPTION — 앱을 한 문장으로 설명한다.",
  supportEmail: "sangjae@sangjaelabs.com",
} as const;
