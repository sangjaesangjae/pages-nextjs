# pages-nextjs — 앱 웹페이지 모음

Sangjae Labs 앱들의 공식 페이지(랜딩·개인정보 처리방침·지원)를 한 레포에서 관리한다.

- **main = 템플릿.** 앱 콘텐츠를 두지 않는다 — placeholder(`src/lib/site.ts`)와 공용 구조만.
- **앱 하나 = 브랜치 하나.** 각 앱 페이지는 main에서 딴 브랜치에 산다.
- 배포는 **Cloudflare Pages** (wrangler direct-upload — push는 소스 백업, 배포는 DEPLOY.md §1 명령, 정적 export). 앱마다 Pages 프로젝트 1개 — production 브랜치를 그 앱 브랜치로 지정하고 도메인(`<앱>.sangjaelabs.com`)을 붙인다.

## 앱 인덱스

| 앱 | 설명 | 페이지 | 브랜치 |
|----|------|--------|--------|
| 네모네모 | 가로·세로 숫자 힌트로 숨겨진 그림을 완성하는 네모로직 퍼즐 게임 | https://nemo.sangjaelabs.com | `nemo` |
| MoodCam | Y2K 디카 감성 실시간 필터 카메라 (완전 로컬) | https://moodcam.sangjaelabs.com | `moodcam` |
| 먹꿈 | 말로 남기는 꿈 일기 + 전통·AI 해몽, 꿈 먹고 자라는 먹꿈이 | https://meokkum.sangjaelabs.com | `meokkum` |

> 새 앱을 추가하면 이 표에 행을 추가한다 (main 브랜치에서 커밋).

## 새 앱 페이지 만들기

1. `git checkout main && git pull && git checkout -b <앱영문명>`
2. `src/lib/site.ts`의 값 교체 (url·appName·description — 파일 상단 주석 참조)
3. 법적 페이지 손질: `terms`·`privacy`의 시행일 갱신 + 앱 특화 조항 구체화
   (terms 파일 상단 ⚠️ 주석 참조 — 무광고 앱이면 광고 조항 삭제) → 필요 시 페이지
   문구 커스텀 → `npm run build` 확인 → push (자동 배포 아님
   — 최초 배포·도메인 연결은 아래 4, 이후 재배포는 `npx wrangler pages deploy out
   --project-name <앱영문명>-pages --branch <앱브랜치>` 한 줄)
4. Cloudflare Pages 프로젝트 생성(production 브랜치=이 브랜치) + 도메인 연결 — DEPLOY.md §1·§2 참조
5. main으로 돌아와 위 앱 인덱스에 행 추가 커밋

앱스토어 심사에 넣는 URL: 개인정보 처리방침 `https://<앱>.sangjaelabs.com/privacy`, 지원 `https://<앱>.sangjaelabs.com/support`, 마케팅 `https://<앱>.sangjaelabs.com`

## 개발

```bash
npm install && npm run dev   # http://localhost:3000
```
