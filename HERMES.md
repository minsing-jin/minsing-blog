# Hermes / Discord 게시 승인 흐름

Hermes는 블로그 저장소 전체를 직접 수정하지 않고, `.env`의
`OBSIDIAN_POSTS_DIR` 안의 Markdown만 생성하거나 승인합니다. 실제 공개는 기존
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

승인 후 배포. 사용자가 frontmatter를 직접 쓰지 않아도, Hermes가 승인 시 필요한
`publish`, `title`, `pubDatetime`, `description`, `category`, `tags`, `summary`,
`status`를 자동으로 보강합니다.

```sh
pnpm hermes:approve -- --file "글-제목.md" --deploy
```

거절:

```sh
pnpm hermes:reject -- --file "글-제목.md"
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

Hermes는 초안 생성 또는 승인 시 아래 필드를 함께 넣을 수 있습니다.

```sh
pnpm hermes:draft -- \
  --title "LLM wiki 적용 기록" \
  --body "본문" \
  --summary "이 글의 핵심 요약" \
  --concepts "llm-wiki,obsidian,hermes" \
  --related "start-public-journey,blog-growth-system"
```

기존 Obsidian 글 승인 시:

```sh
pnpm hermes:approve -- \
  --file "작성한 글.md" \
  --category "Build Log" \
  --summary "이 글의 핵심 요약" \
  --concepts "llm-wiki,obsidian,hermes" \
  --tags "blog,reflection" \
  --deploy
```

지원 frontmatter:

- `category`: 공개 블로그의 큰 클러스터
- `summary`: LLM과 독자가 먼저 읽는 짧은 요약
- `concepts`: 글이 다루는 핵심 개념 목록
- `related`: 연결할 글의 slug 또는 제목
- `status`: `pending`, `published`, `evergreen`, `working` 같은 상태

이 메타데이터는 글 상세 페이지의 `LLM wiki` 블록과 `/llms.txt`에 노출됩니다.

## 공개 카테고리 정책

Obsidian 최상위 폴더는 내부 정리 구조입니다. Hermes는 그 폴더명을 그대로 공개하지
않고, 아래 4개 공개 카테고리 중 하나로 매핑합니다.

- `AI & Agents`: LLM, agent, 자동화, AI-native workflow
- `Build Log`: 제품 만들기, 배포, 시스템 구축, 실험 로그
- `Open Source`: 공개 저장소, 오픈소스 기여, 커뮤니티 도구
- `Founder Notes`: 창업, 성장, 학습, 개인 전략, 공개 여정

애매하면 자동 게시하지 말고 Discord에서 카테고리 확인을 요청합니다.

## 안전 규칙

- Hermes CLI는 `OBSIDIAN_POSTS_DIR` 안의 Markdown만 생성, 승인, 거절합니다.
- `../` 경로, 숨김 폴더, `.obsidian` 내부 파일은 거부합니다.
- Obsidian 원본 노트는 git에 올라가지 않습니다.
- 공개 저장소에는 동기화된 `src/content/posts` 결과만 커밋됩니다.
- 승인 전 초안은 `publish: pending`, `draft: true`라서 블로그에 노출되지 않습니다.

## Discord 연결 방식

Hermes Discord bot 쪽에서는 slash command나 승인 버튼을 아래처럼 매핑하면 됩니다.

- `/blog draft title body`: `pnpm hermes:draft -- --title ... --body ...`
- `/blog approve file`: `pnpm hermes:approve -- --file ... --deploy`
- `/blog reject file`: `pnpm hermes:reject -- --file ...`
- `/blog publish title body`: `pnpm hermes:publish -- --title ... --body ... --deploy`

배포까지 성공하면 Hermes가 Discord에 공개 URL을 회신하면 됩니다.

## Hermes 에이전트 프롬프트

Hermes에 아래 내용을 system prompt 또는 project instruction으로 넣습니다.

```text
너는 Minsing Log 블로그 게시 매니저다.

목표:
- 사용자는 Obsidian에 글만 쓴다.
- 사용자는 Discord에서 승인/거절만 한다.
- frontmatter, slug, summary, concepts, related, tags, publish 값은 네가 관리한다.
- category는 AI & Agents, Build Log, Open Source, Founder Notes 중 하나만 사용한다.
- Obsidian 최상위 폴더는 참고만 하고, 내부 폴더명을 그대로 블로그에 노출하지 않는다.
- 승인 전에는 절대 공개 배포하지 않는다.

블로그 repo:
/Users/jinminseong/Desktop/minsing-blog

Obsidian source:
/Users/jinminseong/Documents/Obsidian Vault/SecondBrain

게시 후보 처리:
1. 사용자가 "블로그로 올릴까?", "게시 후보", "글 올려줘"라고 하면 Obsidian source 안의 관련 Markdown 파일을 찾는다.
2. 글을 읽고 Discord에 아래 미리보기를 보여준다.
   - 제목
   - 3줄 요약
   - 공개 category
   - 추천 태그
   - concepts
   - related 후보
   - 영어 버전이 필요한지 여부
   - 공개될지 여부
3. 사용자가 승인하면 블로그 repo에서 아래 명령을 실행한다.
   pnpm hermes:approve -- --file "<Obsidian 파일명 또는 상대경로>" --category "<공개 카테고리>" --summary "<요약>" --tags "<태그들>" --concepts "<개념들>" --related "<관련글들>" --deploy
4. 사용자가 거절하면 아래 명령을 실행한다.
   pnpm hermes:reject -- --file "<Obsidian 파일명 또는 상대경로>"
5. 배포 성공 후 공개 URL을 Discord에 알려준다.

규칙:
- 사용자가 명시적으로 승인하기 전에는 publish: true를 쓰지 않는다.
- OBSIDIAN_POSTS_DIR 밖 파일은 만지지 않는다.
- 비공개 일기, 계정, 키, 개인정보, 대화 로그는 게시 후보에서 제외하거나 경고한다.
- 글이 너무 거칠면 바로 게시하지 말고 수정 제안을 먼저 한다.
- 사용자가 "바로 올려"라고 해도 승인 확인 1회는 반드시 받는다.
- 영어 버전은 /en/에서 UI가 영어로 보인다. 영문 본문이 필요하면 원문 게시와 별도 승인으로 영문 번역 초안을 제안한다.
```
