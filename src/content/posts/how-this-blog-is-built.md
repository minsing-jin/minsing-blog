---
author: "진민성"
pubDatetime: 2026-06-04T11:00:00+09:00
title: "이 블로그를 어떻게 만들었나"
featured: false
tags: ["astro", "cloudflare", "blog"]
description: "템플릿 기반으로 Astro 블로그를 만들고 Cloudflare Pages에 올리는 구조."
---

이 블로그는 처음부터 직접 만든 것이 아니라, Astro 기반 블로그 템플릿을
커스터마이즈해서 시작했다.

## 선택한 구조

- Astro 템플릿 기반
- Markdown/MDX로 글 작성
- Cloudflare Pages에 정적 배포
- 뉴스레터 폼 연결 가능
- AdSense 승인 후 광고 슬롯 활성화 가능

노트북에서 서버를 계속 켜두는 방식이 아니라, GitHub에 코드를 올리고 Cloudflare가
빌드한 정적 파일을 전 세계 CDN으로 제공하는 방식이다. 그래서 노트북이 꺼져도
사이트는 계속 열린다.

## 왜 정적 블로그인가

블로그 초반에는 로그인, DB, 서버 운영이 필요 없다. 빠른 로딩, 낮은 비용, 쉬운
백업, 좋은 SEO가 더 중요하다.

나중에 댓글, 멤버십, 유료 글 같은 기능이 필요해지면 그때 붙이면 된다.
