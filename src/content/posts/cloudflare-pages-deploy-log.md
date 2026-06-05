---
author: "진민성"
pubDatetime: 2026-06-04T13:00:00+09:00
title: "Cloudflare Pages로 블로그를 배포하면서 배운 것"
featured: false
tags: ["cloudflare", "deploy", "astro"]
description: "노트북 서버가 아니라 Cloudflare Pages로 블로그를 올리며 정리한 배포 구조."
---

처음에는 블로그를 내 노트북에서 띄우면 되는지 생각했다. 하지만 노트북이 꺼지면
사이트도 꺼진다. 공개 블로그는 개인 장비가 아니라 배포 서비스 위에 있어야 한다.

이번에는 Cloudflare Pages를 사용했다.

## 배포 구조

코드는 GitHub에 있고, 빌드 결과물은 Cloudflare Pages에 올라간다. 방문자는 내
노트북이 아니라 Cloudflare의 CDN에서 사이트를 받는다.

이 구조의 장점은 단순하다.

- 서버 운영이 거의 없다
- 정적 블로그라 빠르다
- 무료로 시작할 수 있다
- 나중에 커스텀 도메인을 붙이기 쉽다

## 실제로 중요했던 것

템플릿은 AstroPaper를 사용했고, Node 버전은 22 이상이 필요했다. 로컬 Node가 낮은
경우 빌드는 실패할 수 있다. 배포 환경에서는 `NODE_VERSION=22.12.0`을 명시해야
한다.

작은 블로그일수록 복잡한 서버보다 단순한 정적 배포가 더 강하다.
