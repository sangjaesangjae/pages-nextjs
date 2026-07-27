# pages-nextjs — 앱 웹페이지 모음

Sangjae Labs 앱들의 공식 페이지(랜딩·개인정보 처리방침·지원)를 한 레포에서 관리한다.

- **main = 템플릿.** 앱 콘텐츠를 두지 않는다 — placeholder(`src/lib/site.ts`)와 공용 구조만.
- **앱 하나 = 브랜치 하나.** 각 앱 페이지는 main에서 딴 브랜치에 산다.
- 배포는 Vercel 자동 (push 시). 앱 도메인(`<앱>.sangjaelabs.com`)은 Vercel에서 해당 브랜치에 지정한다.

## 앱 인덱스

| 앱 | 설명 | 페이지 | 브랜치 |
|----|------|--------|--------|
| 네모네모 | 가로·세로 숫자 힌트로 숨겨진 그림을 완성하는 네모로직 퍼즐 게임 | https://nemo.sangjaelabs.com | `nemo` |

> 새 앱을 추가하면 이 표에 행을 추가한다 (main 브랜치에서 커밋).

## 새 앱 페이지 만들기

1. `git checkout main && git pull && git checkout -b <앱영문명>`
2. `src/lib/site.ts`의 값 교체 (url·appName·description — 파일 상단 주석 참조)
3. 필요 시 페이지 문구·정책 내용 커스텀 → `npm run build` 확인 → push
4. Vercel 대시보드 → pages-nextjs → Settings → Domains → `<앱>.sangjaelabs.com` 추가 후 Git Branch를 이 브랜치로 지정 (가비아 DNS CNAME은 DEPLOY.md 참조)
5. main으로 돌아와 위 앱 인덱스에 행 추가 커밋

앱스토어 심사에 넣는 URL: 개인정보 처리방침 `https://<앱>.sangjaelabs.com/privacy`, 지원 `https://<앱>.sangjaelabs.com/support`, 마케팅 `https://<앱>.sangjaelabs.com`

## 개발

```bash
npm install && npm run dev   # http://localhost:3000
```
