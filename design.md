# Minsing Log 디자인 가이드

이 문서는 블로그의 디자인 시스템과 개선 방향을 정의합니다. 기획 문서(README.md,
GROWTH.md)의 목표 — "공개 여정 기록으로 재방문 독자와 팬을 만든다" — 를 디자인
언어로 옮기는 것이 목적입니다.

## 디자인 원칙

1. **글이 주인공**: 장식보다 읽기 경험. 본문 가독성을 해치는 요소는 넣지 않는다.
2. **한국어 우선**: 한국어 블로그이므로 한글 타이포그래피를 1순위로 최적화한다.
3. **라이트/다크 일관성**: 두 테마가 같은 브랜드로 보여야 한다. 색만 반전되고
   인상은 유지될 것.
4. **여정의 인상**: 완성형 매거진보다 "만들면서 기록하는 사람"의 작업실 느낌.

## 타이포그래피

| 용도 | 폰트 | 비고 |
| --- | --- | --- |
| 본문/UI | Pretendard Variable | jsdelivr dynamic-subset CDN. 한글 최적화 가변 폰트 |
| 코드 | Google Sans Code | Astro fonts API로 셀프호스팅. `--font-mono`로 등록 |

- Pretendard는 `pretendardvariable-dynamic-subset.min.css`를 사용해 사용한
  글자만 내려받는다 (전체 한글 폰트 다운로드 방지).
- 폴백 스택: `"Pretendard Variable", Pretendard, -apple-system, "Apple SD
  Gothic Neo", "Noto Sans KR", sans-serif`.
- 한글 본문은 `word-break: keep-all`로 단어 단위 줄바꿈을 유지한다.

## 컬러 토큰

브랜드 액센트는 **블루 계열로 통일**한다. (기존: 라이트=파랑, 다크=주황으로
분열되어 있었고, 다크 보더가 `#ab4b08` 주황이라 테마 인상이 달랐다.)

| 토큰 | Light | Dark | 용도 |
| --- | --- | --- | --- |
| `--background` | `#fcfcfd` | `#1b202b` | 페이지 배경 |
| `--foreground` | `#23272e` | `#e8ebf1` | 본문 텍스트 |
| `--accent` | `#0a66a8` | `#7ab8f0` | 링크, 버튼, 포인트 |
| `--accent-foreground` | `#ffffff` | `#101521` | 액센트 위 텍스트 |
| `--muted` | `#eef0f3` | `#2a3142` | 박스 배경, 스크롤바 |
| `--muted-foreground` | `#5d6570` | `#a3aec2` | 보조 텍스트 |
| `--border` | `#e3e6ea` | `#333b4f` | 구분선, 테두리 |

- 다크 액센트(`#7ab8f0`)는 밝은 색이므로 그 위 텍스트는 어두운
  `--accent-foreground`를 쓴다 (뉴스레터 구독 버튼 등).
- 보더는 두 테마 모두 중립 톤. 색 보더는 쓰지 않는다.

## 레이아웃과 컴포넌트

### 히어로 (홈)

- 아이브로우(`BUILD IN PUBLIC`) → 제목 → 리드 문단 → 시작 가이드 링크 →
  소셜/RSS 순서의 명확한 위계.
- RSS 아이콘은 제목 옆에 띄우지 않고 소셜 링크 행에 함께 배치한다.

### 포스트 카드

- 제목(액센트, hover 밑줄) → 날짜(보조 톤) → 설명(보조 톤) 위계.
- 설명은 `--muted-foreground`로 낮춰 제목과의 대비를 만든다.

### 뉴스레터 CTA

- `rounded-2xl` + `bg-muted/40` 박스 유지. 페이지당 1회만 노출한다.

### 광고 슬롯 (AdSlot)

- 승인 전 안내 박스는 점선 보더 + 보조 톤으로 본문보다 눈에 덜 띄게 유지.

## 채워진 갭 (2026-06-12)

- [x] 한글 본문 폰트: Pretendard Variable 적용, 코드만 Google Sans Code 유지
- [x] 다크 테마 주황 보더/액센트 → 블루 계열로 통일
- [x] 히어로 위계 정리, RSS 아이콘 소셜 행으로 이동
- [x] 카드 설명 텍스트 보조 톤 적용
- [x] 소셜 플레이스홀더 정리: GitHub `minsing-jin`, 메일
      `developerminsing@gmail.com`, 미정인 X/LinkedIn은 제거
- [x] Contact 페이지 실제 이메일로 교체
- [x] OG 이미지 한글 렌더링: satori에 Noto Sans KR dynamic subset 로드
      (`src/utils/loadGoogleFont.ts`, 빌드 시 fetch 캐시 포함), 템플릿 색을 새
      팔레트로 교체, 정적 `default-og.jpg` 제거 → 동적 `/og.png` 사용
- [x] favicon을 브랜드(블루 액센트)에 맞게 교체
- [x] 날짜를 한국어 표기로 (`YYYY년 M월 D일`, Datetime 컴포넌트)
- [x] prose 정리: h3 가짜 이탤릭 제거(한글에 이탤릭 글리프 없음), 본문 링크
      accent 통일, 코드 하이라이트 토큰화
- [x] 보조 정보 muted 톤 통일: 페이지 설명, 공유 라벨, 태그, 브레드크럼,
      이전/다음 글 라벨, 검색 발췌문
- [x] 검색(pagefind) 하이라이트/placeholder를 토큰 기반으로 교체 (다크 모드
      형광 노랑 제거)
- [x] 404 개선: 이모티콘 잔재 제거, 안내 문구 + 전체 글 링크 추가
- [x] 태그 페이지 설명 한국어 어순 교정 (`tplStr` 사용)
- [x] 헤더/푸터 정리: 네비 한국어화, `aria-current` 적용, 아이콘 버튼 활성
      표시, 푸터 보조 톤
- [x] 공유 링크 한국어 컨텍스트로 정리 (whatsapp/pinterest 제거)
- [x] AdSlot 안내 박스는 개발 모드에서만 노출 (프로덕션은 승인 전 비표시)

## 남은 갭

- [ ] `public/ads.txt` publisher id 실제 값으로 교체 (AdSense 승인 후)
- [ ] `PUBLIC_NEWSLETTER_ACTION` 환경변수 연결 (뉴스레터 서비스 선택 후 —
      연결 전에는 RSS/이메일 안내가 대신 노출됨)
- [ ] X/LinkedIn 계정이 생기면 `astro-paper.config.ts` socials에 다시 추가
- [ ] 커스텀 도메인 연결 후 `site.url` 갱신 (GROWTH.md 참고)
