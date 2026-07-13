---
name: hermes-quality-publisher
description: Review and publish Minsing Log posts through Hermes while preserving editorial quality and keeping AdSense separate from article prose. Use when Codex or Hermes needs to find Obsidian drafts, prepare metadata, assess publication quality, request approval, publish automatically after approval, or change ad placement without weakening reader experience.
---

# Hermes Quality Publisher

Publish through the existing Hermes and Obsidian pipeline. Treat reader trust as the primary goal and monetization as a layout concern.

## Required workflow

1. Read `HERMES.md` and run `pnpm hermes:list`.
2. Resolve the candidate only inside `OBSIDIAN_POSTS_DIR`.
3. Run the deterministic gate:

```sh
pnpm hermes:quality -- --file "<relative-or-absolute-note-path>"
```

4. Read the note and apply the editorial rubric in [references/editorial-quality.md](references/editorial-quality.md).
5. Prepare a preview containing:
   - title
   - three-line summary
   - category
   - tags, concepts, and related posts
   - evidence or firsthand detail found
   - quality warnings and proposed edits
   - ad impact: always `none` unless layout code changes
6. Ask for one explicit approval. Never infer approval from a request to draft, review, or improve.
7. Resolve every blocker and material warning before publishing.
8. After approval, run the command defined in [references/hermes-contract.md](references/hermes-contract.md) with complete metadata and `--deploy`.
9. Verify command success, the pushed commit, and the public URL. Report failures without changing `publish` back to true manually.

## Non-negotiable rules

- Never insert AdSense scripts, `<AdSlot>`, affiliate copy, or ad-targeted filler into Markdown.
- Never rewrite a personal post around high-value keywords or add unsupported claims for SEO.
- Keep ads in shared Astro layout components. The current post layout places one slot after the article and newsletter CTA.
- Do not add above-the-fold, mid-paragraph, sticky, interstitial, or accidental-click placements.
- Preserve the author's concrete experience, uncertainty, tradeoffs, and original voice.
- Never publish secrets, private conversations, account data, private diary material, or identifying third-party details.
- Never call `pnpm hermes:publish` for unreviewed text. Use draft, quality review, explicit approval, then `hermes:approve`.
- Never bypass a failed build, quality gate, or path-safety check with `--force`.

## Decision rule

Publish only when all are true:

```text
safe source + quality gate passes + editorial review passes
+ metadata is complete + user explicitly approves + deployment verifies
```

Otherwise keep `publish: pending` and `draft: true`, then return concrete revision requests.

## Resources

- Run `scripts/check-post-quality.mjs` through `pnpm hermes:quality`.
- Read [references/editorial-quality.md](references/editorial-quality.md) for prose and ad standards.
- Read [references/hermes-contract.md](references/hermes-contract.md) for commands, metadata, and failure handling.
