# 배포 가이드

이 블로그는 노트북에서 서버를 켜두는 방식이 아니라 Cloudflare Pages 같은 정적
호스팅에 배포하는 구조입니다. 노트북이 꺼져도 사이트는 계속 동작합니다.

## 추천 배포

Cloudflare Pages 무료 플랜을 추천합니다.

- Build command: `pnpm build`
- Build output directory: `dist`
- Node version: `22.12.0`
- Environment variable: `NODE_VERSION=22.12.0`

## GitHub 연결 흐름

1. GitHub에 새 저장소를 만듭니다.
2. 이 폴더를 push합니다.
3. Cloudflare Dashboard에서 Pages 프로젝트를 만들고 GitHub 저장소를 연결합니다.
4. Framework preset은 `Astro`를 선택합니다.
5. 환경변수를 설정합니다.

## 환경변수

- `PUBLIC_NEWSLETTER_ACTION`: Kit, Buttondown, beehiiv 등의 구독 form action URL
- `PUBLIC_ADSENSE_CLIENT`: AdSense 승인 후 발급되는 `ca-pub-...` 값
- `PUBLIC_ADSENSE_SLOT`: AdSense 광고 단위 slot id
- `PUBLIC_GOOGLE_SITE_VERIFICATION`: Google Search Console verification token

## 광고 수익 순서

1. About, Contact 성격의 소개 페이지를 갖춥니다.
2. 원본 글을 10개 이상 발행합니다.
3. 개인정보처리방침과 광고 안내 페이지를 추가합니다.
4. Google Search Console에 등록합니다.
5. AdSense를 신청합니다.
6. 승인 후 `PUBLIC_ADSENSE_CLIENT`와 실제 ad slot id를 넣습니다.
