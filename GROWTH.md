# 성장, 검색, 광고 체크리스트

## 검색 노출

- Google Search Console에 `https://misning-blog.pages.dev`를 등록합니다.
- Sitemap URL은 `https://misning-blog.pages.dev/sitemap-index.xml`입니다.
- RSS URL은 `https://misning-blog.pages.dev/rss.xml`입니다.
- 글 제목은 검색 가능한 문제 중심으로 씁니다.
- 모든 글은 직접 경험, 선택 이유, 결과를 포함해야 합니다.

## 팬 만들기

- 글 하단 뉴스레터 CTA를 유지합니다.
- 매주 최소 1개의 빌드 로그를 발행합니다.
- `Now` 페이지를 한 달에 한 번 갱신합니다.
- 조회수보다 재방문, 구독, 공유를 먼저 봅니다.

## AdSense 신청 전

- 원본 글 10개 이상을 유지합니다.
- `/about/`, `/contact/`, `/privacy/` 페이지를 공개합니다.
- `public/ads.txt`의 publisher id를 실제 값으로 바꿉니다.
- 승인 전에는 광고 슬롯이 안내 박스로 표시됩니다.
- 승인 후 환경변수 `PUBLIC_ADSENSE_CLIENT`, `PUBLIC_ADSENSE_SLOT`을 설정합니다.

## 커스텀 도메인

도메인을 구매한 뒤 Cloudflare Pages의 Custom domains에서 연결합니다.

추천 도메인 형태:

- `jinmin.dev`
- `misning.dev`
- `minseong.blog`
- `journeyofminseong.com`

도메인 연결 후 `astro-paper.config.ts`의 `site.url`과 `profile`을 새 도메인으로 바꾸고 재배포합니다.
