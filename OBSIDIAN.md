# Obsidian 게시 연결

이 블로그는 Obsidian vault 전체를 자동 공개하지 않습니다. 실수로 비공개 노트가
올라가는 것을 막기 위해, 지정한 폴더 안에서 `publish: true`가 붙은 노트만
`src/content/posts`로 동기화합니다.

## 1. 게시 폴더 정하기

기본 게시 폴더는 이 저장소 안의 `obsidian-publish/`입니다. macOS가
`Documents` 폴더 접근을 막을 수 있으므로, 이 폴더를 Obsidian에서 별도 vault로
열어 쓰는 방식을 권장합니다.

예시:

```text
minsing-blog/
  obsidian-publish/
    첫 글.md
```

## 2. `.env`에 경로 연결

`.env.example`을 참고해 `.env`에 실제 경로를 넣습니다. 기본값은 이미 로컬
publish inbox를 가리킵니다.

```sh
OBSIDIAN_POSTS_DIR=obsidian-publish
```

## 3. Obsidian 노트 frontmatter

Hermes/Discord 승인 흐름을 쓸 때는 사용자가 직접 frontmatter를 넣지 않아도
됩니다. Obsidian에는 그냥 글을 쓰고, Hermes가 승인 시 필요한 값을 자동으로
추가합니다.

직접 수동 게시하거나 테스트할 때만 노트 맨 위에 아래 형식을 넣습니다.

```md
---
publish: true
title: "글 제목"
pubDatetime: 2026-06-13T09:00:00+09:00
description: "검색 결과와 공유 카드에 보일 설명"
tags: ["journey", "build-in-public"]
summary: "LLM과 독자가 먼저 읽을 핵심 요약"
concepts: ["build-in-public", "creator"]
related: ["start-public-journey"]
status: "evergreen"
---

본문
```

수동 게시 시 필수에 가까운 값:

- `publish: true`: 이 값이 있어야 동기화됩니다.
- `title`: 없으면 파일명을 제목으로 씁니다.
- `pubDatetime`: 없으면 파일 수정 시간을 사용합니다.
- `description`: 없으면 본문 첫 문단에서 자동 생성합니다.
- `summary`: 글 상세의 `LLM wiki` 블록과 `/llms.txt`에 노출됩니다.
- `concepts`: 글이 다루는 핵심 개념 목록입니다.
- `related`: 연결할 글의 slug 또는 제목 목록입니다.
- `status`: `working`, `evergreen`, `published`처럼 글의 상태를 표시합니다.

## 4. 동기화

먼저 dry-run으로 확인합니다.

```sh
pnpm obsidian:dry-run
```

문제가 없으면 실제 동기화합니다.

```sh
pnpm obsidian:sync
```

동기화 후 빌드, 커밋, 푸시까지 한 번에 실행하려면:

```sh
pnpm obsidian:publish
```

GitHub Actions 자동 배포 secret이 없을 때도 로컬 Wrangler 로그인으로 Cloudflare
Pages까지 배포하려면:

```sh
pnpm obsidian:publish:deploy
```

## 5. 자동 업데이트

터미널을 켜 둔 동안 자동으로 감시하려면:

```sh
pnpm obsidian:watch:deploy
```

Obsidian 노트가 바뀌면 아래 흐름을 자동 실행합니다.

1. `publish: true` 노트 동기화
2. `pnpm build`
3. `git commit`
4. `git push origin main`
5. Cloudflare Pages 배포

macOS 로그인 후에도 계속 자동 실행하려면 LaunchAgent를 설치합니다.

```sh
pnpm obsidian:install-auto
```

해제:

```sh
pnpm obsidian:install-auto -- --uninstall
```

현재 GitHub Actions 자동 배포는 `CLOUDFLARE_API_TOKEN` secret이 있어야 동작합니다.
secret이 없으면 `obsidian:watch:deploy` 또는 `obsidian:publish:deploy`처럼 로컬
Wrangler 배포 경로를 사용합니다.

## 동기화 규칙

- `draft: true`인 노트는 동기화하지 않습니다.
- Obsidian wiki link `[[글]]`은 블로그 내부 링크 `/posts/글/`로 변환합니다.
- Obsidian wiki link `[[글|라벨]]`은 `[라벨](/posts/글/)`로 변환합니다.
- Obsidian embed `![[image.png]]`는 `[첨부: image.png]` 텍스트로 변환합니다.
- 출력 파일명은 `slug` frontmatter가 있으면 그 값을, 없으면 파일명을 사용합니다.
- source 폴더의 하위 폴더 구조는 `src/content/posts` 아래에도 유지됩니다.

## Hermes / Discord 승인

Hermes가 연결된 Discord에서 승인 후 게시하려면 `HERMES.md`의 명령을 사용합니다.
사용자는 frontmatter를 쓰지 않고 글만 작성해도 됩니다. Hermes가 승인할 때
`publish`, `title`, `pubDatetime`, `description`, `tags`, `summary`, `status`를
자동으로 보강합니다.

핵심 명령은 아래와 같습니다.

```sh
pnpm hermes:approve -- --file "글.md" --deploy
```

거절은 아래처럼 처리합니다.

```sh
pnpm hermes:reject -- --file "글.md"
```

승인 전 초안은 `publish: pending` 또는 frontmatter 없음 상태라서 공개되지
않습니다. 승인하면 Hermes가 `publish: true`, `draft: false`로 바꾸고 기존
빌드/커밋/푸시/Cloudflare 배포 흐름을 실행합니다.
