# Hermes / Discord 게시 승인 흐름

Hermes는 블로그 저장소 전체를 직접 수정하지 않고, 안전한 게시 inbox인
`obsidian-publish/` 안의 Markdown만 생성하거나 승인합니다. 실제 공개는 기존
Obsidian 게시 파이프라인이 담당합니다.

## 목표 흐름

1. Discord에서 글 초안 작성 또는 Obsidian note 감지
2. Hermes가 미리보기와 메타데이터를 Discord에 보여줌
3. 사용자가 Discord에서 승인
4. Hermes가 `publish: true`로 바꾸고 게시 파이프라인 실행
5. 빌드, 커밋, 푸시, Cloudflare Pages 배포

## Hermes가 호출할 명령

초안 생성:

```sh
pnpm hermes:draft -- --title "글 제목" --body "본문"
```

긴 본문을 파일로 넘길 때:

```sh
pnpm hermes:draft -- --title "글 제목" --body-file /path/to/body.md
```

승인 후 배포:

```sh
pnpm hermes:approve -- --file obsidian-publish/글-제목.md --deploy
```

Discord에서 바로 공개 글을 만들고 배포:

```sh
pnpm hermes:publish -- --title "글 제목" --body "본문" --deploy
```

현재 inbox 상태 확인:

```sh
pnpm hermes:list
```

## LLM wiki 메타데이터

Hermes는 초안 생성 시 아래 필드를 함께 넣을 수 있습니다.

```sh
pnpm hermes:draft -- \
  --title "LLM wiki 적용 기록" \
  --body "본문" \
  --summary "이 글의 핵심 요약" \
  --concepts "llm-wiki,obsidian,hermes" \
  --related "start-public-journey,blog-growth-system"
```

지원 frontmatter:

- `summary`: LLM과 독자가 먼저 읽는 짧은 요약
- `concepts`: 글이 다루는 핵심 개념 목록
- `related`: 연결할 글의 slug 또는 제목
- `status`: `pending`, `published`, `evergreen`, `working` 같은 상태

이 메타데이터는 글 상세 페이지의 `LLM wiki` 블록과 `/llms.txt`에 노출됩니다.

## 안전 규칙

- Hermes CLI는 `OBSIDIAN_POSTS_DIR` 안의 Markdown만 생성하거나 승인합니다.
- `../` 경로, 숨김 폴더, `.obsidian` 내부 파일은 거부합니다.
- `obsidian-publish/` 원본은 git에 올라가지 않습니다.
- 공개 저장소에는 동기화된 `src/content/posts` 결과만 커밋됩니다.
- 승인 전 초안은 `publish: pending`, `draft: true`라서 블로그에 노출되지 않습니다.

## Discord 연결 방식

Hermes Discord bot 쪽에서는 slash command나 승인 버튼을 아래처럼 매핑하면 됩니다.

- `/blog draft title body`: `pnpm hermes:draft -- --title ... --body ...`
- `/blog approve file`: `pnpm hermes:approve -- --file ... --deploy`
- `/blog publish title body`: `pnpm hermes:publish -- --title ... --body ... --deploy`

배포까지 성공하면 Hermes가 Discord에 공개 URL을 회신하면 됩니다.
