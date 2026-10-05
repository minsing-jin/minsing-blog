# Minsing Log 게시 폴더

이 폴더를 Obsidian에서 별도 vault로 열어 글을 작성하세요.

1. Obsidian → Open folder as vault → `minsing-blog/obsidian-publish` 선택
2. `_templates/Minsing-Log-Post.md`를 템플릿으로 사용
3. 글 작성 후 frontmatter의 `publish: false`를 `publish: true`로 변경
4. 프로젝트에서 `pnpm obsidian:publish:deploy` 실행

`publish: false` 또는 `draft: true` 글은 공개되지 않습니다.
공개 카테고리는 `AI & Agents`, `Build Log`, `Open Source`, `Founder Notes`, `Data & ML`, `Programming & CS` 중 하나를 사용하세요.
