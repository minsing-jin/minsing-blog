# Misning Log

진민성의 공개 여정 블로그입니다. AstroPaper 템플릿을 기반으로, 개발/AI/제품/창업/학습 과정을 기록하고 뉴스레터와 광고 수익화까지 확장할 수 있게 구성했습니다.

## 로컬 개발

```sh
pnpm install
pnpm dev
```

## 빌드

```sh
pnpm build
```

이 템플릿은 Node `22.12.0` 이상을 요구합니다. 로컬 Node가 낮으면 `.node-version`을 보고 `nvm`, `fnm`, `volta` 등으로 Node 22를 사용하세요.

## 글 쓰기

글은 `src/content/posts`에 Markdown 또는 MDX로 추가합니다.

```md
---
author: "진민성"
pubDatetime: 2026-06-04T09:00:00+09:00
title: "글 제목"
featured: false
tags: ["journey"]
description: "검색 결과와 공유 카드에 보일 설명"
---

본문
```

## 수익화 준비

AdSense 승인 전에는 광고 영역이 안내 박스로 표시됩니다. 승인 후 Cloudflare Pages 환경변수에 아래 값을 넣으면 광고가 활성화됩니다.

- `PUBLIC_ADSENSE_CLIENT`
- `PUBLIC_ADSENSE_SLOT`

뉴스레터 폼은 `PUBLIC_NEWSLETTER_ACTION`에 구독 폼 action URL을 넣으면 활성화됩니다.

## 배포

Cloudflare Pages 배포 절차는 [DEPLOY.md](./DEPLOY.md)를 참고하세요.
