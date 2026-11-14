---
title: "hindsight v1.2.0"
project: "hindsight"
repo: "vectorize-io/hindsight"
tag: "v1.2.0"
version: "v1.2.0"
published: "2026-11-03"
type: "minor"
lang: "en"
summary: "docs: changelog and blog post for v1.1.0 · docs(blog): ChatGPT sign-in recording in the v1.1.0 post · fix(parsers): strip UTF-8 byte-order mark in markitdown text files"
---

# hindsight v1.2.0

## What's Changed
* docs: changelog and blog post for v1.1.0 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5935
* docs(blog): ChatGPT sign-in recording in the v1.1.0 post by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5939
* fix(parsers): strip UTF-8 byte-order mark in markitdown text files by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5949
* fix(embeddings): don't fail the call when the provider omits prompt_tokens by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5951
* fix(reflect): treat a non-list id field on done as empty instead of failing the reflect by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5952
* fix(reflect): treat a non-list memory_ids on expand as a tool error instead of failing the reflect by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5954
* fix(banks): delete a bank's LLM request history with the bank by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5948
* fix(metrics): a hard client disconnect no longer counts as a failed operation by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5955
* fix(embeddings): OpenAI-compatible embeddings send the hindsight User-Agent by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5950
* fix(admin): repair-bank removes observations whose source facts are gone (#5937) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5957
* fix(docker): build the control plane from the root lockfile by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5959
* fix(banks): delete a bank's maintenance queue rows with it; test that a bank delete leaves no row in any table by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5958
* test: fix two tests that fail outside the default setup by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5962
* fix(audit): always log destructive operations and name the tool in MCP call logs by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5961
* feat(openclaw): let cron, heartbeat and subagent sessions use memory when opted in (#5915) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5963
* feat(openclaw): offer Hermes's Hindsight tools on the agent's own bank (#5635) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5965
* fix(obsidian): unstick sync on already-deleted documents; option to date facts by last edit by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5967
* fix(obsidian): bump manifest.json + versions.json on release by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5972
* fix(consolidation): an older fact no longer overwrites a newer same-day amendment (#5938) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5966
* feat(extensions): ModelCallExtension, every model call with its input and output by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5936
* test(system): model call extension story allows a recall with no rerank call by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5978
* fix(docker): control-plane build no longer flakes on fonts or a missing SWC binding by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5987
* feat/helm api command probe strategy by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5988
* docs(integrations): add Hindsight Ingestion community integration by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5992
* fix(tests): run migration tests on the shared test server by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5989
* fix(openclaw): save a run from where it started, not from its last user message (#5994) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5995
* fix(consolidation): rebuild the VectorChord keyword index on observation rewrites and folds (#5299) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5991
* fix(consolidation): a skipped retry ends cancelled with superseded_by, not failed (#5434) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5990
* fix(control-plane): restore files a stray prettier run reformatted in #5989 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6002
* fix(hermes): six small plugin bugs by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6000
* fix(coding-agents): load on OpenCode 2.1 by package name, unquoted Antigravity commands on Windows by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6003
* docs: cheap memory model with failover recipe by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5997
* feat(openclaw): add Hindsight's knowledge-base tools to the agent tools (#5635) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6004
* fix(api): don't load fastmcp when MCP is disabled by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6001
* chore(integrations): remove the per-agent coding packages Coding Agents replaced by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6008
* fix(hermes): don't lose automatic retains when a write fails by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6013
* ci(hermes): install Hermes and the plugin the way users do by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6014
* refactor(engine): stop the engine importing the API layer and untangle import cycles by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5993
* fix(consolidation): stop sending each source memory's context (#5996) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6018
* fix(reflect): the search-query rewrite never ends reflect with an empty answer by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6022
* docs: remove versioned docs for 0.7 and 0.8 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6031
* fix(consolidation): drop create/update actions with empty text by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6024
* chore(deps): bump toml and vitest in coding-agents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6027
* chore(deps): bump vitest in ai-sdk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6028
* chore(deps): bump vitest in chat lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6029
* chore(deps): bump vitest in cloudflare-oauth-proxy lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6030
* chore(deps): bump vitest in eliza lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6032
* chore(deps): bump vitest in eve lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6033
* chore(deps): bump vitest in flowise lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6034
* chore(deps): bump vitest in n8n lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6035
* chore(deps): bump vitest in obsidian lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6037
* chore(deps): bump vitest in openclaw lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6038
* chore(deps): bump opentelemetry-api in agent-framework lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6041
* chore(deps): bump opentelemetry-api in autogen lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6042
* chore(deps): bump opentelemetry-api in crewai lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6043
* chore(deps): bump opentelemetry-api in pydantic-ai lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6044
* chore(deps): bump pypdf and opentelemetry-api in superagent lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6046
* chore(deps): bump vitest in nemoclaw lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6036
* chore(deps): bump opentelemetry-api in strands lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6045
* chore(deps): bump vitest in paperclip lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6039
* chore(deps): bump next, dompurify, vitest in root lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6026
* chore(deps): bump opentelemetry packages in root uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6040
* fix(worker): shutdown releases only the schemas the worker claimed in by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6047
* fix(reflect): return whole knowledge pages up to a token budget, not one page under 4k by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6009
* feat(extensions): operation runs - each operation's wall time and where it went by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6048
* fix(coding-agents): small retain, recall and survey fixes by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6050
* fix(coding-agents): put the memory block in the user message, not the system prompt by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6053
* fix(coding-agents): a session saves each turn once, across bank moves and forks by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6052
* fix(control-plane): replace removed next lint with eslint and Next's rule set by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6049
* fix(coding-agents): launch the codebase survey on Windows and stop retrying forever by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6054
* chore(deps): bump opentelemetry-api in google-adk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6066
* chore(deps): bump zod, body-parser, undici, fast-uri, serialize-javascript in root lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6079
* chore(deps): bump undici in cloudflare-oauth-proxy lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6080
* chore(deps): bump undici and fast-uri in coding-agents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6081
* chore(deps): bump undici in eve lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6082
* chore(deps): bump zod to v4 in flowise integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6083
* chore(deps): bump @paperclipai/plugin-sdk (zod v4) in paperclip lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6084
* chore(deps): bump undici and serialize-javascript in zapier lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6085
* chore(deps): bump filelock in crewai lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6086
* chore(deps): bump filelock in litellm lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6087
* chore(deps): bump filelock in smolagents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6088
* chore(deps): bump setuptools in llamaindex lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6090
* chore(deps): bump strands-agents in strands lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6089
* fix(retain): don't checkpoint documents a buffering retain session hasn't committed (#6099) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6100
* ci: swap retired gpt-4.1-nano for gpt-6-luna in LLM acceptance matrix by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6102
* fix(control-plane): hide the next-server console window on Windows by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6104
* fix(models): ONNX loaders no longer crash-loop startup next to a local model build by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6105
* fix(bank-template): export keeps entity_labels stored in the attributes envelope by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6106
* fix(llm): a logged-out LLM no longer crashes startup; failover skips it by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6108
* chore(deps): bump setuptools in root uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6091
* chore(deps): bump fastmcp to 3.4.11 in root uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6113
* fix(reranker): bench a failed failover-chain member so an outage does not slow every recall by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6112
* feat(decision-model): count the request ceiling and recall's caps in the model's own vocabulary by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6115
* feat(decision-model): one standalone file for recall's decision-rerank questions by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6128
* chore(reranker): deprecate the typesafe reranker provider in favour of the shared decision model by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6130
* system-evals: one file per operation, categorised cases, retain and recall capability suites by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6118
* fix(retain): store the 'where' dimension and fail instead of dropping an unsplittable chunk by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6133
* feat(recall): prune flag for the decision-model reranker by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6131
* fix(audit): an MCP tool call writes one audit row, not two (#6071) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6142
* fix(recall): break BM25 score ties on id so repeated recalls return the same list by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6143
* blog: what's new in Hindsight Cloud, October 2026 by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/6141
* fix(refresh): bound the delta gate per refresh; a late failure keeps its memory by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6153
* fix(embed): keep the user's HINDSIGHT_API_DATABASE_URL instead of replacing it with pg0 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6158
* fix(worker): shutdown no longer waits out a long maintenance job by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6092
* docs(dev): light start-docs that compiles pages on first visit (~1 GB instead of ~3.5 GB) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6159
* fix(docker,helm): give the API 60s to hand back in-flight tasks on shutdown by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6162
* feat(recall): name the serving reranker in the trace (opt-in) and tag recall log lines with one id by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6154
* docs(coding-agents): explain how OpenCode 2.2 finds the v2 entry, pin exports['.'] to v1 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6170
* docs(changelog): drop a non-change from coding-agents 0.8.3 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6173
* feat(recall): live dedup flag for the decision-model reranker, prune and dedup per request by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6139
* fix(refresh): delta edits keep table rows, drop departed members, and refuse spilled operations by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6171
* fix(recall): the decision model sees each memory's date; recall eval replays frozen banks at scale by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6168
* fix(db): require asyncpg>=0.32 so a dropped connection can't wedge the worker by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6107
* chore(deps): bump authlib in google-adk uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6180
* chore(deps): bump langgraph and langgraph-sdk in langgraph uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6182
* chore(deps): bump qs and @hono/node-server in coding-agents by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6183
* chore(deps): bump rustls in Rust client Cargo.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6185
* feat(decision-model): add a hosted provider option and a sign-in command by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6169
* docs: add OpenBot integration page by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/6160
* docs: add Hindsight Memory skill for OpenBot by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/6161
* feat(consolidation): one answer entry per fact, built for small models by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6164
* feat(llm): every tool call through a response schema; drop native tool calling by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6176
* hindsight provider: final model names (hs-decide-1-flash, hs-rerank-1, hs-embed-1) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6192
* feat(mcp): recall takes rerank prune/dedup, like the HTTP API by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6195
* blog: OpenBot integration, shared memory over MCP by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/6188
* fix(embed): control center Unicode profiles, unhealthy-daemon stop, safe delete by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6193
* fix(coding-agents): pi custom-message runs no longer throw; auto-update reads npm 12 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6214
* perf(lint): lint.sh 5-10x faster with the same checks; fix reflect done() crash (#6199) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6194
* feat(llm-trace): opt-in flag to delete a document's request history with the document by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6218
* fix(reflect): an alias inside an identifier is not a citation (#6150) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6215
* fix(anthropic): cache the prompt-injected schema in its own system block by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6216
* feat(retain): separate reasoning effort and call settings for the vision slot by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6210
* fix(metrics): count client-disconnect cancellations as success="cancelled" by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6212
* fix(llm): send images and files to Responses-API providers in Responses shape by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6213
* fix(startup): bound the startup LLM probe so a busy backend can't stall or fail boot by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6219
* chore(deps): bump qs in root package-lock.json by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6184
* chore(deps): bump litellm in litellm integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6181
* fix(llm-trace): write out buffered trace rows before a document delete removes them by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6221
* chore(deps): bump vite in embed control center UI package-lock.json by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6223
* feat(llm-requests): show how many days are kept, hourly 24h chart, split by model or operation by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6222
* chore(deps): bump authlib and dnspython in root uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6179
* fix: flaky tests — lock-order deadlocks, EvalPlanQual error, background-write races by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6225
* feat(embeddings): configurable extra body for OpenAI-compatible embedding requests by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6227
* fix(embeddings): run local embeddings on a fixed pool, not the default executor (#6110) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6226
* fix(retain): read times with no UTC offset in the content's zone, not UTC (#6208) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6224
* feat(knowledge): show the images behind a knowledge page's evidence by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6217
* fix(entities): keep mention_count exact under concurrent deletes and edits of one memory by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6233
* fix(consolidation): the decision model never writes observation text by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6211
* fix(reflect): every piece of evidence carries its dates, raw chunks included by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6236
* fix(reflect): the decision model's cut and verdict are retried on a rate limit by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6237
* perf(mental-models): let the memories store answer a model's staleness in one call by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6261
* fix(knowledge): a page's evidence shows its images on a store-owned bank by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6262
* fix(embeddings): fail loudly on a NaN/Inf embedding instead of at the pgvector bind by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6268
* fix(codex): send session-id so one operation's calls share the prompt cache by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6267
* fix(tracing): stamp hindsight.bank_id on every span in a bank operation by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6269
* fix(embed): find hindsight-api in the venv holding the package when another Python loads it (#6252) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6272
* fix(consolidation): a batch whose LLM call fails writes no triage verdict (#6239) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6273
* fix(transfer): export and import mental-model history a page at a time (#6259) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6274
* fix(api): answer 4xx, not 500, for malformed ids, priorities and unstorable text by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6276
* fix(retain): a bank's store_document_text=false holds on delta retain and import by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6270
* feat(reranker): default to hindsight-ai/hs-rerank-1 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/6263
* fix(metrics): count a validator rejection as rejected, not as a failed operation by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/6256


**Full Changelog**: https://github.com/vectorize-io/hindsight/compare/v1.1.0...v1.2.0

---

> **Source** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · `v1.2.0` · 2026-11-03 · [upstream release](https://github.com/vectorize-io/hindsight/releases/tag/v1.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
