---
title: "AutoGPT preview-seed-fixture"
project: "AutoGPT"
repo: "Significant-Gravitas/AutoGPT"
tag: "preview-seed-fixture"
published: "2026-08-06"
type: "pre"
lang: "en"
summary: "Rolling, fully SYNTHETIC preview-database seed fixture baked from dev@14ee5bd1f497 (migration head: 20261109120000addfeedbackprompt). Preview environments restore fixture.dump.gz (custom-format, gzipped, platform schema…"
---

# AutoGPT preview-seed-fixture

Rolling, fully SYNTHETIC preview-database seed fixture baked from dev@14ee5bd1f497 (migration head: 20261109120000_add_feedback_prompt). Preview environments restore fixture.dump.gz (custom-format, gzipped, platform schema only, including _prisma_migrations) BEFORE running a PR's own migrations, so schema changes run against populated tables. RESTORE: apply restore-preamble.sql to the target database first (it creates the platform schema and installs the vector + pg_trgm extensions into it, which pg_dump --schema=platform omits), then run 'gunzip -c fixture.dump.gz | pg_restore -d <db> --no-owner' WITHOUT --exit-on-error (the dump's own CREATE SCHEMA collides benignly with the preamble's). SECURITY INVARIANT: this bake holds no cloud credentials and has no read path to any real database — it runs entirely against a throwaway Postgres container and contains only synthetic rows (Faker-generated, plus the hand-written preview marketplace) and the already-public marketplace agent exports checked into autogpt_platform/backend/agents/. This asset is regenerated on every eligible dev push and weekly; treat it as disposable.

---

> **Source** [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · `preview-seed-fixture` · 2026-08-06 · [upstream release](https://github.com/Significant-Gravitas/AutoGPT/releases/tag/preview-seed-fixture)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
