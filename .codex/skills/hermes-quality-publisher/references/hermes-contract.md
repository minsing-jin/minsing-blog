# Hermes Publishing Contract

## Categories

Use exactly one:

- `AI & Agents`
- `Build Log`
- `Open Source`
- `Founder Notes`

If classification is ambiguous, keep the note pending and ask the user.

## Required preview metadata

- `title`
- `description`
- `summary`
- `category`
- `tags`
- `concepts`
- `related`
- `language`
- English only: `translationOf` and `translationStatus`

## Commands

Inspect:

```sh
pnpm hermes:list
pnpm hermes:quality -- --file "<file>"
```

Create a pending draft:

```sh
pnpm hermes:draft -- --title "<title>" --body-file "<body-file>"
```

Publish only after explicit approval:

```sh
pnpm hermes:approve -- \
  --file "<file>" \
  --category "<category>" \
  --summary "<summary>" \
  --tags "<comma-separated-tags>" \
  --concepts "<comma-separated-concepts>" \
  --related "<comma-separated-related-posts>" \
  --deploy
```

Reject:

```sh
pnpm hermes:reject -- --file "<file>"
```

## Failure handling

- Quality failure: leave pending and report exact blockers.
- Ambiguous category: leave pending and ask one focused question.
- Build failure: do not use `--no-build`; fix or report the build problem.
- Push/deploy failure: preserve the local commit and report the failed stage.
- Missing public URL: verify deployment before claiming publication.
