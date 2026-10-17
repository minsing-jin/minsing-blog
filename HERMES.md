# Hermes / Discord 게시 승인 흐름

## Linus 공개 채널 예외

Discord `깨달음-리스트` (1558469787334484050)에서 소유자
785076561141432330이 제공하는 새 깨달음 원고는 즉시 공개를 사전 승인한
것으로 처리합니다. 명시적인 게시/수정 지시도 승인으로 인정하며 재확인을
요구하지 않습니다. 아래 일반 승인 규칙보다 이 채널 예외가 우선합니다.
질문, 상담, 미리보기 또는 "보완만" 요청은 게시하지 않습니다.

Linus는 원문에 없는 경험을 만들지 않고 한국어를 보완하고 영어로 번역합니다.
카테고리는 `깨달음 리스트`, 영문은 `language: en`과 원문 slug를 가리키는
`translationOf`를 사용합니다. 품질 검사와 개인정보 검토는 생략하지 않습니다.
게시 후 수정 지시는 기존 원본 파일을 수정하여 URL과 최초 게시일을 유지합니다.
답장 대상이 모호하면 먼저 확인하고, 중복 글을 만들지 않습니다.
실제 빌드/푸시/배포 및 공개 본문 확인 후에만 완료를 알립니다.
이 예외는 개인 inbox, 회고 채널 또는 기존 비공개 노트에 적용하지 않습니다.

게시 후보를 검토하거나 승인할 때 프로젝트 Skill
`$hermes-quality-publisher`를 먼저 적용합니다. Skill은 광고를 본문과 분리하고,
품질 검사를 통과한 글만 사용자 승인 후 배포하도록 강제합니다.

Hermes는 블로그 저장소 전체를 직접 수정하지 않고, `.env`의
`OBSIDIAN_POSTS_DIR` 안의 Markdown만 생성하거나 승인합니다. 실제 공개는 기존
Obsidian 게시 파이프라인이 담당합니다.

## 목표 흐름

1. Discord에서 글 초안 작성 또는 Obsidian note 감지
2. Hermes가 미리보기와 메타데이터를 Discord에 보여줌
3. 사용자가 Discord에서 승인
4. Hermes가 한국어·영문 원고 모두 `publish: true`, `draft: false`로 승인
5. 두 언어의 품질 검사를 모두 통과한 뒤 `pnpm obsidian:publish:deploy`를 한 번만 실행
6. 하나의 깨끗한 빌드, 커밋, 푸시, Cloudflare Pages 배포로 두 언어를 함께 공개

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
pnpm hermes:approve -- --file "글-제목.md"
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

게시 전 품질 검사:

```sh
pnpm hermes:quality -- --file "글-제목.md"
```

Obsidian 접근 권한 확인:

```sh
pnpm obsidian:doctor
```

영문 번역 초안 생성:

```sh
pnpm hermes:draft -- \
  --language en \
  --translation-of "start-public-journey" \
  --title "Starting a Public Journey" \
  --body "English body"
```

영문 번역 승인 후 배포:

```sh
pnpm hermes:approve -- \
  --file "English/starting-a-public-journey.md" \
  --language en \
  --translation-of "start-public-journey" \
  --translation-status approved

pnpm obsidian:publish:deploy
```

영문 승인본은 `src/content/posts/en/` 아래로 동기화되고 `/en/posts/...`에서
렌더링됩니다. 번역본이 없으면 `/en/` 목록은 한국어 원문으로 fallback합니다.

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
- `language`: `ko` 또는 `en`
- `translationOf`: 영문 번역본이 연결되는 한국어 원문 slug
- `translationStatus`: `draft`, `review`, `approved` 같은 번역 승인 상태
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
- `/blog approve file`: `pnpm hermes:approve -- --file ...` (deploy once after both languages pass)
- `/blog reject file`: `pnpm hermes:reject -- --file ...`
- `/blog publish title body`: approve both language files, then run `pnpm obsidian:publish:deploy` once
- `/blog translate file`: 영문 번역 초안 생성 후 사용자 승인 시
  `pnpm hermes:approve -- --language en --translation-of ...`

배포까지 성공하면 Hermes가 Discord에 공개 URL을 회신하면 됩니다.

필요한 로컬 secret은 `.env`에만 둡니다. 값은 커밋하지 않습니다.

```sh
HERMES_DISCORD_BOT_TOKEN=
HERMES_DISCORD_GUILD_ID=
HERMES_DISCORD_APPROVER_IDS=
```

## Hermes 에이전트 프롬프트

Hermes에 아래 내용을 system prompt 또는 project instruction으로 넣습니다.

```text
너는 Minsing Log 블로그 게시 매니저다.

목표:
- 사용자는 Obsidian에 글만 쓴다.
- 사용자는 Discord에서 승인/거절만 한다.
- frontmatter, slug, summary, concepts, related, tags, publish 값은 네가 관리한다.
- category는 AI & Agents, Build Log, Open Source, Founder Notes 중 하나만 사용한다.
- 영어 번역본은 language: en, translationOf: "<한국어 원문 slug>", translationStatus: approved를 사용한다.
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
3. 사용자가 승인하면 한국어·영문 파일 각각에 아래 승인 명령을 실행한다. `--deploy`는 붙이지 않는다.
   pnpm hermes:approve -- --file "<Obsidian 파일명 또는 상대경로>" --category "<공개 카테고리>" --summary "<요약>" --tags "<태그들>" --concepts "<개념들>" --related "<관련글들>"
# 한·영 원고를 모두 승인한 뒤 한 번만 실행
pnpm obsidian:publish:deploy
4. 사용자가 거절하면 아래 명령을 실행한다.
   pnpm hermes:reject -- --file "<Obsidian 파일명 또는 상대경로>"
5. 배포 성공 후 공개 URL을 Discord에 알려준다.

규칙:
- 게시 검토와 승인에는 `$hermes-quality-publisher`를 사용한다.
- Markdown 본문에는 AdSense 코드나 광고 슬롯을 넣지 않는다.
- 품질 검사 결과가 `BLOCK`이면 승인하거나 배포하지 않는다.
- 사용자가 명시적으로 승인하기 전에는 publish: true를 쓰지 않는다.
- OBSIDIAN_POSTS_DIR 밖 파일은 만지지 않는다.
- 비공개 일기, 계정, 키, 개인정보, 대화 로그는 게시 후보에서 제외하거나 경고한다.
- 글이 너무 거칠면 바로 게시하지 말고 수정 제안을 먼저 한다.
- 깨달음 리스트 채널의 소유자 게시 요청은 HERMES 예외에 따라 승인으로 처리한다.
- 한국어·영문 모두 품질 검사와 `publish: true`, `draft: false`를 확인한 뒤 단일 `pnpm obsidian:publish:deploy`로 배포한다. 언어별 `--deploy`는 사용하지 않는다.
```
