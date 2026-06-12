# Obsidian 게시 연결

이 블로그는 Obsidian vault 전체를 자동 공개하지 않습니다. 실수로 비공개 노트가
올라가는 것을 막기 위해, 지정한 폴더 안에서 `publish: true`가 붙은 노트만
`src/content/posts`로 동기화합니다.

## 1. 게시 폴더 정하기

Obsidian vault 안에 블로그용 폴더를 하나 만듭니다.

예시:

```text
My Vault/
  Blog/
    첫 글.md
```

## 2. `.env`에 경로 연결

`.env.example`을 참고해 `.env`에 실제 경로를 넣습니다.

```sh
OBSIDIAN_POSTS_DIR="/Users/jinminseong/path/to/My Vault/Blog"
```

## 3. Obsidian 노트 frontmatter

노트 맨 위에 아래 형식을 넣습니다.

```md
---
publish: true
title: "글 제목"
pubDatetime: 2026-06-13T09:00:00+09:00
description: "검색 결과와 공유 카드에 보일 설명"
tags: ["journey", "build-in-public"]
---

본문
```

필수에 가까운 값:

- `publish: true`: 이 값이 있어야 동기화됩니다.
- `title`: 없으면 파일명을 제목으로 씁니다.
- `pubDatetime`: 없으면 파일 수정 시간을 사용합니다.
- `description`: 없으면 본문 첫 문단에서 자동 생성합니다.

## 4. 동기화

먼저 dry-run으로 확인합니다.

```sh
pnpm obsidian:dry-run
```

문제가 없으면 실제 동기화합니다.

```sh
pnpm obsidian:sync
```

동기화 후 기존 배포 흐름대로 빌드, 커밋, 푸시, 배포합니다.

```sh
pnpm build
git add src/content/posts
git commit -m "Publish Obsidian posts"
git push origin main
```

현재 GitHub Actions 자동 배포는 `CLOUDFLARE_API_TOKEN` secret이 있어야 동작합니다.
secret이 없으면 push 후 Cloudflare Pages 수동 배포가 필요합니다.

## 동기화 규칙

- `draft: true`인 노트는 동기화하지 않습니다.
- Obsidian wiki link `[[글]]`은 일반 텍스트 `글`로 변환합니다.
- Obsidian embed `![[image.png]]`는 `[첨부: image.png]` 텍스트로 변환합니다.
- 출력 파일명은 `slug` frontmatter가 있으면 그 값을, 없으면 파일명을 사용합니다.
- source 폴더의 하위 폴더 구조는 `src/content/posts` 아래에도 유지됩니다.
