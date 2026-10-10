# Minsing Log 게시 폴더

실제 Obsidian 원본은 vault 전체가 아니라 아래 `Blog` 디렉터리 하나뿐입니다.

```text
/Users/jinminseong/Documents/Obsidian Vault/SecondBrain/Blog
```

Obsidian에서 기존 `SecondBrain` vault를 열고 `Blog` 폴더를 만든 뒤 그 안에
게시할 Markdown 파일을 넣으세요. `Blog` 밖의 파일과 폴더는 스캔하지 않습니다.

1. Finder에서 `SecondBrain` vault를 열고 `Blog` 폴더를 만듭니다.
2. Obsidian에서 기존 vault를 다시 열면 왼쪽 파일 목록에 `Blog`가 나타납니다.
3. `_templates/Minsing-Log-Post.md` 내용을 새 `Blog` 글의 맨 위에 붙여 넣습니다.
4. 글을 공개할 때만 `publish: true`, `draft: false`로 바꿉니다.
5. 프로젝트에서 `pnpm obsidian:publish:deploy`를 실행합니다.

새 폴더를 터미널에서 만들려면 다음 명령을 사용할 수 있습니다.

```sh
mkdir -p "/Users/jinminseong/Documents/Obsidian Vault/SecondBrain/Blog"
```

경로와 접근 권한은 다음 명령으로 확인합니다.

```sh
pnpm obsidian:doctor
```

`publish: false` 또는 `draft: true` 글은 공개되지 않습니다.
공개 카테고리는 `AI & Agents`, `Build Log`, `Open Source`, `Founder Notes`, `Data & ML`, `Programming & CS` 중 하나를 사용하세요.
