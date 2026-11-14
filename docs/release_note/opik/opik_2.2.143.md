---
title: "opik 2.2.143"
project: "opik"
repo: "comet-ml/opik"
tag: "2.2.143"
version: "2.2.143"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "[OPIK-8934] [SDK] fix: Prompt() and ChatPrompt() use the default project · [OPIK-9097] [BE] feat: map ClickHouse TOO_MANY_BYTES to a clean 400 and cap free-form SQL bytes read · chore(deps): Lock file maintenance[bot]"
---

# opik 2.2.143

## What's Changed
* [OPIK-8934] [SDK] fix: Prompt() and ChatPrompt() use the default project by @thiagohora in https://github.com/comet-ml/opik/pull/9458
* [OPIK-9097] [BE] feat: map ClickHouse TOO_MANY_BYTES to a clean 400 and cap free-form SQL bytes read by @liyaka in https://github.com/comet-ml/opik/pull/9430
* chore(deps): Lock file maintenance by @comet-renovate-security[bot] in https://github.com/comet-ml/opik/pull/9455
* [OPIK-8732] [BE] [FE] feat: service account token auth with plain-text token replies by @miguelgrc in https://github.com/comet-ml/opik/pull/9446
* [OPIK-9101] [BE] feat: add an organization context with a default organization by @aadereiko in https://github.com/comet-ml/opik/pull/9378
* [NA] [BE] feat: always persist online-evaluation monitoring traces by @alexkuzmik in https://github.com/comet-ml/opik/pull/7317
* [OPIK-9127] [BE] feat: filter experiments by evaluation method by @JetoPistola in https://github.com/comet-ml/opik/pull/9456
* [OPIK-8712] [BE] feat: score online-eval Decision rules with gpt-6-luna through OpenAI's Decisions API by @alexkuzmik in https://github.com/comet-ml/opik/pull/9357
* [OPIK-9153] [FE] refactor: remove "Set a guardrail" button from the Logs page by @jverre in https://github.com/comet-ml/opik/pull/9466
* [issue-9403] [SDK] fix: don't log a false error for threads with no feedback scores by @quetion667 in https://github.com/comet-ml/opik/pull/9404
* [OPIK-8274] [BE] perf: late-materialize default-sorted experiment item compare pages by @thiagohora in https://github.com/comet-ml/opik/pull/9402
* [OPIK-8801] [CI] fix: speed up e2e image cleanup and stop orphaning e2e manifests by @JetoPistola in https://github.com/comet-ml/opik/pull/8962
* [DND-2054] [HELM] fix: skip recursive fsGroup chown on ClickHouse volumes by @GuySaar8 in https://github.com/comet-ml/opik/pull/9450
* [DND-2055] [HELM] docs: set S3_OBJECT_DISK_PATH before enabling the cold tier by @GuySaar8 in https://github.com/comet-ml/opik/pull/9467
* chore(deps): Update python:3.12.16-slim Docker digest to 4840d51 by @comet-renovate-security[bot] in https://github.com/comet-ml/opik/pull/9470
* [issue-9322] [SDK] fix: do not log skipped llm_unit tests as failed in the pytest plugin by @gjreddy in https://github.com/comet-ml/opik/pull/9323
* [NA] [CI] chore: move the remaining Node 22 jobs to Node 26 by @GuySaar8 in https://github.com/comet-ml/opik/pull/9438
* [OPIK-8546] [FE] fix: count annotators by person, not by score key by @jverre in https://github.com/comet-ml/opik/pull/9474
* chore(deps): Update nginx:1.30.6-alpine-slim Docker digest to e5249ed by @comet-renovate-security[bot] in https://github.com/comet-ml/opik/pull/9475
* [OPIK-9040] [SDK] fix: report traces the SDK drops at shutdown, on 429 and on queue overflow by @miguelgrc in https://github.com/comet-ml/opik/pull/9298
* [DND-1973] [BE] fix: pin jetty/hc.client5 loggers to INFO (log-hygiene hardening) by @liyaka in https://github.com/comet-ml/opik/pull/9379
* [OPIK-8802] [CI] fix: skip E2E image cleanup on fork PR close by @JetoPistola in https://github.com/comet-ml/opik/pull/8960


**Full Changelog**: https://github.com/comet-ml/opik/compare/2.2.142...2.2.143

---

> **Source** [comet-ml/opik](https://github.com/comet-ml/opik) · `2.2.143` · 2026-11-06 · [upstream release](https://github.com/comet-ml/opik/releases/tag/2.2.143)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
