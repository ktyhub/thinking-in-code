---
title: "openai-agents-python v0.21.1"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.21.1"
published: "2026-08-16"
type: "patch"
lang: "en"
summary: "feat(core): add model call timeouts · feat(sandbox): add run-scoped sandbox working directories · feat(sandbox): allow Docker sandboxes to disable networking · feat(sandbox): add Modal sandbox resource options"
---

# openai-agents-python v0.21.1

## What's Changed

* feat(core): add model call timeouts by @seratch in https://github.com/openai/openai-agents-python/pull/4428
* feat(sandbox): add run-scoped sandbox working directories by @seratch in https://github.com/openai/openai-agents-python/pull/4427
* feat(sandbox): allow Docker sandboxes to disable networking by @koadegno in https://github.com/openai/openai-agents-python/pull/4452
* feat(sandbox): add Modal sandbox resource options by @Filimoa in https://github.com/openai/openai-agents-python/pull/4455
* fix(core): honor exact call approval decisions by @seratch in https://github.com/openai/openai-agents-python/pull/4447
* fix(core): count Responses requests without usage by @seratch in https://github.com/openai/openai-agents-python/pull/4453
* fix(core): close all MultiProvider children after failures by @fszcd in https://github.com/openai/openai-agents-python/pull/4438
* fix(core): reject partially matched stacked anchors by @Coiggahou2002 in https://github.com/openai/openai-agents-python/pull/4431
* fix(chat-completions): Chat Completions reasoning replay by @seratch in https://github.com/openai/openai-agents-python/pull/4432
* fix(realtime): truncate audio at zero elapsed time by @Chirag6722 in https://github.com/openai/openai-agents-python/pull/4457
* fix(realtime): end iteration after clean server close by @seratch in https://github.com/openai/openai-agents-python/pull/4461
* fix(sessions): prevent advanced SQLite structure table conflicts by @seratch in https://github.com/openai/openai-agents-python/pull/4454
* fix(sessions): include compaction usage in run totals by @seratch in https://github.com/openai/openai-agents-python/pull/4446
* fix(sandbox): validate view_image raster content by @seratch in https://github.com/openai/openai-agents-python/pull/4462
* fix(sandbox): keep model paths POSIX-normalized by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4416
* fix(sandbox): normalize apply_patch paths as POSIX by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4437

### Documentation & Other Changes

* docs: updates for v0.21.0 release by @seratch in https://github.com/openai/openai-agents-python/pull/4381
* docs: list Tuning Engines tracing integration by @cerebrixos in https://github.com/openai/openai-agents-python/pull/4440
* fix: update cffi lock for Python 3.14 by @seratch in https://github.com/openai/openai-agents-python/pull/4448
* release: 0.21.1 by @seratch in https://github.com/openai/openai-agents-python/pull/4467

## New Contributors
* @Coiggahou2002 made their first contribution in https://github.com/openai/openai-agents-python/pull/4431
* @fszcd made their first contribution in https://github.com/openai/openai-agents-python/pull/4438
* @cerebrixos made their first contribution in https://github.com/openai/openai-agents-python/pull/4440
* @Filimoa made their first contribution in https://github.com/openai/openai-agents-python/pull/4455
* @koadegno made their first contribution in https://github.com/openai/openai-agents-python/pull/4452
* @Chirag6722 made their first contribution in https://github.com/openai/openai-agents-python/pull/4457

**Full Changelog**: https://github.com/openai/openai-agents-python/compare/v0.21.0...v0.21.1

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.21.1` · 2026-08-16 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.21.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
