---
title: "deer-flow v2.2.0"
project: "deer-flow"
repo: "bytedance/deer-flow"
tag: "v2.2.0"
version: "v2.2.0"
published: "2026-11-04"
type: "minor"
lang: "en"
summary: "DeerFlow 2.2 turns the 2.1 super-agent harness into a deployment-grade platform with a focus on operating at scale and delegating with trust: scheduled tasks grow into goal-driven workflows with fair multi-owner…"
---

# deer-flow v2.2.0

# DeerFlow 2.2.0

DeerFlow 2.2 turns the 2.1 super-agent harness into a deployment-grade platform
with a focus on **operating at scale and delegating with trust**: scheduled
tasks grow into goal-driven workflows with fair multi-owner execution, every
subsystem from IM channels to workflows runs across multiple Gateway
instances, the extension platform ships full-stack plugins, knowledge
retrieval becomes provider-independent with verifiable citations, and models,
memory and channels gain production-grade management — hardened by fail-closed
defaults, at-rest credential encryption, and a much stricter uploads and paths
layer.

This release closes the [2.2.0 milestone](https://github.com/bytedance/deer-flow/milestone/3)
with **1068 merged PRs** since the 2.1.0 release.

> 📖 Full notes: [CHANGELOG.md](../CHANGELOG.md) · [中文版](../CHANGELOG_zh.md)

---

## ⚠️ Breaking changes

- **Local dev binds loopback** — `make dev` / `make start` no longer listen on
  all interfaces; ports 2026/8001/3000 and `/setup` stay off LAN/VPN. Set
  `BIND_HOST=0.0.0.0` in `.env` to expose the stack, and note that values
  nginx would misread (`0`, `1.2.3`, bracketed IPv6) are now rejected before
  any service stops. ([#6587], [#6635])
- **Stored credentials are encrypted at rest** — a new env-only
  `DEER_FLOW_CREDENTIALS_KEY` (Fernet, comma-separated for rotation) protects
  IM channel credentials and MCP OAuth refresh tokens; multi-instance
  deployments with `channel_connections` or refresh-token OAuth refuse to
  start without it. IM bot credentials move from plaintext
  `channels/runtime-config.json` into the shared `channel_runtime_configs`
  table — existing bots are imported once on first start, and a downgrade must
  re-enter UI-configured bots. ([#6611], [#7207], [#6988])
- **The multi-process gate is stricter** — `GATEWAY_WORKERS > 1` (or
  `deployment.multi_instance: true`, or `WEB_CONCURRENCY`) now requires the
  Redis stream bridge; the memory bridge no longer starts multi-process. The
  new `channels.leader_lease` section must stay enabled when a non-GitHub IM
  channel is configured. ([#6328], [#6746], [#6252])
- **Scheduler contracts change** — `/api/scheduled-tasks*` errors return a
  structured `{"detail": {"code", "message", "params"}}` envelope (read
  `detail.message`); a new `scheduler.max_concurrent_runs_per_user` (default
  2) caps one owner's concurrent scheduled runs; IM notices are honest,
  localized, and sent at most once per occurrence; DST-skipped `once` wall
  times are rejected with 422. ([#6378], [#6393], [#7281])
- **Thread deletion cascades** — deleting a thread now also removes its runs,
  run events and feedback, so deleted threads can no longer be read or
  inherited by recreated thread ids. ([#5535])
- **Model-bound history stays append-only** — superseded `write_file` payload
  elision becomes opt-in (`tool_output.elide_superseded_writes`, default
  false) because elision rewrote earlier request segments and invalidated
  provider prompt caches; skill `allowed-tools` is compatibility metadata only
  and no longer hides or blocks tools. ([#7319], [#7455], [#6935])
- **Tool authorization covers middleware tools** — plan-mode `write_todos` and
  extension middleware tools now pass Layer-1 authorization like any other
  tool; deployments with an explicit `tools` policy that omitted them stop
  binding them. ([#6105])
- **Fail-closed security defaults** — delegated `web_fetch`/`web_capture`
  backends (Browserless, Crawl4AI, Firecrawl, fastCRW) screen their base URL
  and refuse loopback/private defaults until confirmed; the SSRF guard refuses
  the CGNAT range `100.64.0.0/10` (tailnets need
  `allow_private_addresses: true`); IM `allowed_users` parse fail-closed on
  Slack, DingTalk, QQ and Telegram (an invalid list now denies everyone
  instead of silently allowing); external `system`/`developer` messages are
  rejected with 400; permission checks now cover routes that previously had
  authentication only, and `USER.md` is scoped per user.
  ([#6531], [#6202], [#6230], [#6742], [#6730], [#5651], [#4989])
- **Uploads and paths get strict** — Windows reserved device names (including
  superscript `COM¹`–`COM³` and `CONIN$`/`CONOUT$`) are rejected across
  uploads, sandbox writes and skill files; same-name uploads claim the next
  `_N` suffix instead of truncating; converted Markdown companions never
  replace an existing file; rejected attachments are recorded in
  `skipped_files` and `success` means at least one file stored; outline/preview
  records missing timestamps are rejected — re-upload to restore conversion.
  ([#6102], [#6148], [#6279], [#6149], [#7388], [#7054], [#7165], [#6165])
- **The composer slash menu is reduced** — `/` now lists only the built-in
  `/goal` and `/compact`; select skills as inline `@` references instead.
  ([#6154])
- **API shapes tighten** — malformed run bodies return 422/400 instead of 500;
  `wait` endpoints return an SDK-compatible error envelope for completed
  failed runs; an explicit empty `event_types` filter matches nothing; keyed
  resume fails closed (503) for RunStores that can't persist request identity;
  web-editor MCP connections become per-user; SQLite `file:` URIs are
  rejected; integer config fields reject YAML booleans; `gpt-6` family models
  default to the Responses API; `--print`/`--json` exit 1 on LLM-error
  fallback. ([#7362], [#6217], [#7352], [#6571], [#6499], [#5966], [#6069],
  [#6017], [#6171], [#6863], [#6056])

## ✨ Highlights

- **Scheduled tasks grow into goal-driven workflows** — conversation tools
  create and manage owner-bound schedules with per-run goals, stop conditions
  and safety caps ([#6229], [#6378]); lifecycle and limits are at parity
  across page, REST and chat, with a live task card in the web chat ([#6378]);
  fair execution slots cap each owner (`max_concurrent_runs_per_user`) and the
  waiting queue drains owner by owner ([#6393]); lifecycle events are recorded
  durably in the creating chat ([#6393]); IM notices are honest, localized and
  self-contained ([#6393]); tasks are searchable by title or prompt ([#5355]),
  and agent stops, auto-pauses and goal misses are explained in plain language
  with links to the deciding run. ([#6326])
- **Multi-instance readiness** — IM channels run on several Gateway instances
  via per-provider leader leases with fencing epochs and automatic failover
  ([#6843], [#6746]); Helm and compose gain a multi-replica story with a shared
  JWT secret, surge-then-drain rollouts and PodDisruptionBudgets ([#6347]);
  provisioner replicas keep sandbox creation alive through restarts ([#6543]);
  the workflows extension coordinates across Gateways over shared Postgres
  with an `ExecutionFence` ([#7138]) and authenticated restart recovery
  ([#7075]); and `make dev-multi` boots a two-Gateway cluster locally.
  ([#6613])
- **The extension platform matures** — full-stack plugins register browser
  pages, conversation actions and model tools in one namespace ([#5647]) with
  versioned manifests and credentialed ES-module graphs ([#5685]); plugins can
  contribute composer `@` mention providers ([#6189]) and drive full Agent
  runs through the Gateway's normal admission ([#6190]); packaged extensions
  can invoke host models under operator-granted limits ([#5796]); agent-teams
  lets Custom Agents collaborate as a team via `@` mentions, with a shared
  activity feed and durable team state ([#6243], [#7611]); a default-disabled
  Script workflows extension sequences and branches Agent runs in a
  capability-restricted QuickJS subprocess ([#6858], [#6920]); new Jev example
  plugins prune stale context, classify texts and flag injected instructions
  ([#5731], [#5735], [#5833]); the extension API advances 0.2.2 → 0.2.7 with
  run-evidence readers, structured `PluginToolResult` artifacts and guarded
  skill-evolution host APIs ([#5727], [#6861], [#5645]); and the Capability
  Center gallery ships a bundled extension catalog. ([#6188])
- **Knowledge retrieval goes provider-independent** — read-only provider
  catalogs are decoupled from RAGFlow through extension-API registration
  ([#6904]); retrieval results, capabilities and source evidence are unified
  across LightRAG and RAGFlow, and citations survive budgets, delegation and
  replay ([#6716]); RAGFlow results carry verifiable inline citations backed
  by bounded native excerpts ([#5551]); custom-agent chats can scope retrieval
  per message with fail-closed allowlists ([#5238]); and new WeKnora and
  knowledge-platform extensions add managed ingestion plus hierarchical
  logical spaces with inherited roles. ([#6950], [#7293], [#7417])
- **Models come under management** — administrators manage shared models from
  Settings → Models with an encrypted catalog, optimistic revision checks and
  provider presets ([#5596], [#6757]); a declarative reasoning capability
  contract (`thinking`, `dialect`, effort maps) normalizes thinking policy
  across lead agent, subagents and helpers and drives the frontend effort menu
  ([#5780]); scoped model controls resolve natural-language model selection
  per task/turn/conversation, with up to 16 aliases per model and per-child
  overrides ([#7249]); and new presets and providers arrive: Kimi K3.1
  ([#7566]), Opper ([#6399]), API Route ([#6579]), You.com ([#6515]), Webz
  News ([#5880]), Unbrowse ([#5981]), plus Exa-compatible endpoints via
  `EXA_BASE_URL`. ([#7306])
- **Channels become operations-grade** — a new QQ channel runs over Tencent's
  official Open Platform WebSocket with no public callback URL ([#6081]);
  WeChat pairs by scanning a QR code from the web UI ([#5582]); proactive
  notifications generalize to Feishu, QQ and WeCom with opt-in run-completion,
  failure and human-input notices from a durable outbox ([#6903], [#6850],
  [#4843]); Feishu renders clarifications as interactive button cards ([#6670]);
  `/model` switches an IM conversation's model in place ([#6534]); `/connect`
  bindings move to a persistent dialog with copyable codes ([#7591]); and IM
  runs survive Gateway restarts with `on_disconnect: continue` and idempotent
  redeliveries. ([#6876], [#7104])
- **Memory sharpens** — `user.cognitiveStyle` stores collaboration preferences
  separately from personal context ([#3182]); opt-in lexical relevance ranking
  blends IDF-weighted query coverage with confidence using a CJK bigram
  tokenizer ([#5251]); tolerant Markdown storage recovers corrupt or partially
  written files instead of crashing the agent ([#5545]); the management API
  and a new `memory_get` tool work per agent bucket ([#5565], [#6443]); opt-in
  TypeSafe pre-screening can skip extraction calls and classify
  reinforcement/correction signals ([#5906]); and extraction watermarks
  persist across restarts so already-extracted turns don't re-run. ([#7205])
- **Workspace** — the Capability Center unifies MCP, plugins, Lark CLI and
  skills into a searchable catalog with configuration forms ([#5497]); the
  composer gains inline `@` references to skills, project documents and other
  conversations, up to 16 per message ([#6063]); tool-produced paths, URLs and
  task ids become short stable `art_xxx` artifact handles that survive context
  compaction ([#4929]); the answer toolbar shows which skills a run loaded,
  with inspectable snapshots ([#5758]); Custom Agents export/import as portable
  packages ([#6127]); and projects gain a budgeted `search_project_documents`
  tool ([#7286]) and opt-in LLM summaries on the document shelf. ([#6581])
- **Runtime & observability** — an authoritative `run.terminal` trace event
  seals completed runs ([#7134]); run events carry per-LLM-call telemetry —
  caller category, provider, model, stop reason, token counts ([#6236]);
  `inspect_run_status` gives agents a content-free usage and context-fill
  snapshot ([#7297]); client context hints and the web UI locale travel into
  runs as sanitized request-only context ([#7051], [#7294]); and subagent
  batches gain browser result review with cited evidence ([#7006]),
  `read_batch_result` inspection ([#6416]), RAG evidence snapshots ([#6413]),
  and `csv-columns`/`json-valid` acceptance criteria. ([#6714], [#5947])
- **Persistence** — a checkpoint retention service prunes trailing
  duration-only leaves while protecting the resume head ([#5308]); a
  content-addressed blob store (sha256-verified, opt-in) lets load-balanced
  Gateways restore externalized tool results and viewed images from shared
  bytes instead of hitting broken local paths. ([#5361], [#6159], [#6160])
- **Auth & guardrails** — account suspension is enforced at every auth surface
  with a new admin Users page ([#6566], [#6641]); custom RBAC roles are
  assignable through the admin API ([#6382]); the `skills` policy governs
  visibility on listing surfaces without an existence oracle ([#5489]); opt-in
  deterministic PII redaction rewrites model-bound context with stable
  placeholders ([#5527]); an opt-in TypeSafe risk gate denies tool calls at a
  configurable threshold ([#5712]); and plugin actions and management routes
  are authorization-gated. ([#5842])

## 🚀 Performance

- Compaction skips the summarizer LLM call when the exact rendered prompt
  previously produced the unchanged summary. ([#6318])
- Opt-in sandbox prewarm overlaps authorized acquisition with the first model
  response for managed async runs and native subagents. ([#6998])
- MCP tools are cached per unchanged server and only missing/changed configs
  are rediscovered ([#6795]); config edits retire only the affected stdio
  sessions via connection fingerprints. ([#6487])
- Community tools stop blocking the event loop: You.com, GroundRoute,
  InfoQuest, Tavily, Firecrawl and DuckDuckGo image search become coroutines
  or offload to workers ([#7186], [#7183], [#5782], [#5784], [#5786],
  [#5788]); config reads, auth routes and route-permission resolution load in
  workers instead of stat+sha256 per request. ([#7580], [#7576], [#7557])
- Channels: DingTalk AI cards use the channel's bounded token instead of a
  blocking SDK call that stalled every stream ([#7597]); Feishu stores thread
  aliases once per reply instead of rewriting the store per chunk ([#7593]);
  channel `stop()` tears down SDK threads off the loop. ([#6134])
- Gateway: run creation resolves the agent factory via the assembly pool so a
  cold import no longer stalls all requests ([#6206]); subagent batch export
  reads 10 rows per page and item lists return previews, cutting hundreds of
  MB per request ([#6706], [#6781]); skills, user-profile and thread-deletion
  routes offload directory scans and rmtree to workers. ([#5945], [#5935],
  [#6319])
- SSE responses send `Cache-Control: no-cache, no-transform` so compressing
  proxies stop buffering run streams into bursts. ([#6393])
- `view_image` re-injection caps at four images / 28 MiB per request, so
  re-viewing an older image no longer resends the whole image history.
  ([#6828], [#6829])
- Document conversion offloads at every source size ([#6924], [#5830]); lazy
  shelf-document conversion writes outside the SQLite write lock. ([#6305])
- Linear algorithms and bounded payloads: `strip_think_blocks` ([#5854]) and
  skill-review link extraction ([#5884]) lose their quadratic paths;
  structured tool-output previews respect excerpt budgets ([#6422]); one-shot
  chat models build off-loop ([#7484]); memory pre-summary saves run in a
  worker ([#7530]); E2B reconciliation stops `connect()`-probing warm pools
  ([#5562]); thread skill-view freshness fingerprints end a full NFS recopy
  per acquire. ([#7333])

## 🔒 Security

- **SSRF screening everywhere** — every `web_search` provider screens result
  URLs through the shared public-URL policy ([#7037]); InfoQuest organic,
  news and image results are screened ([#7031]); image search shares one
  policy across DuckDuckGo, Brave and Serper with Unicode-host, NAT64 and
  multicast coverage ([#6740], [#6819]); the CGNAT range `100.64.0.0/10` is
  refused across web tools, browser and MCP ([#6202]); the agentic browser
  routes TCP through a per-session SOCKS5 proxy that resolves DNS under SSRF
  policy, defeating rebinding ([#6201]); and Unbrowse redacts authenticated
  `finalUrl`s from error responses. ([#7399])
- **Authorization gaps closed** — permission checks now cover routes that had
  authentication only, and `USER.md` is scoped per user ([#4989]); Live
  Browser WebSockets require `threads:write` ([#5621]); `view_image` requires
  `sandbox:execute` ([#5799]); the suggestions endpoint enforces `model:use`
  ([#5816]); skill activation is authorized at assembly, including via
  `read_file` of a `SKILL.md` ([#4541]); viewed-image blobs require
  owner-checked `threads:read` ([#7604]); and middleware-declared tools join
  Layer-1 tool authorization. ([#6105])
- **Server-owned state can't be steered** — restored sandbox references are
  scoped to the authenticated user and thread, and external `input.sandbox` is
  rejected ([#5736]); viewed-image host reads are scoped to the current thread
  ([#5824]); external `system`/`developer` messages are rejected before
  checkpoint writes ([#5651]); client uploads no longer write through symlinks
  and document conversion reads private descriptor-backed copies ([#5578],
  [#5611]); and Redis checkpoint purge escapes glob metacharacters so a custom
  prefix can't delete another namespace. ([#6709])
- **Credentials & egress** — modern `sk-` tokens, GitHub fine-grained PATs and
  Google API keys are detected in SkillScan and scrubbed from outgoing IM
  notifications ([#6394], [#6423]); MCP logs stop emitting credentials
  ([#6794]); 500 details no longer echo host paths for uploads, skills,
  custom agents and scheduled tasks ([#7217], [#7255], [#7155]); urllib3
  retry/header dumps redact signed URLs ([#5745]); and IM channel credentials
  gain at-rest encryption keyed by `DEER_FLOW_CREDENTIALS_KEY`. ([#6611])
- **SkillScan matches shapes, not spellings** — fork bombs are matched by
  structure ([#6689]); the `.` builtin is treated as a `source` execution
  context, including process-substitution forms ([#7247]); `curl | sudo -u`
  variants are caught ([#6372], [#6312]); binary magics are sniffed past up to
  63 bytes of padding and a BOM across preflight, extraction guard, scan and
  nested-zip checks ([#7081]); executable-content classification uses the
  shared `is_code_file` rule ([#7088]); Windows script suffixes count
  everywhere ([#6321]); secret rules parse Python via AST, cutting false
  positives ([#5648], [#6297], [#6428], [#6247], [#6276]); a planted 300 MB
  file can no longer OOM the scanner ([#6359]); and tool-discovery regexes are
  bounded against ReDoS. ([#6676])
- **Fail-closed configuration** — IM `allowed_users` parse strictly on
  Telegram, Slack, DingTalk, QQ and Buzz ([#6230], [#6742], [#6730], [#6811]);
  PII redaction covers the queued memory payload, `invalid_tool_calls`, and
  the `/goal` evaluator's inputs ([#5577], [#6387], [#6556]); first-admin
  claiming is atomic under concurrency ([#5776]); `image/svg` is classified as
  active content ([#5594]); and model-written `ms-msdt:`-style tool-step links
  are gated by a scheme allowlist. ([#5526])

## 🐛 Notable fixes

- **Runs & streaming** — cross-worker cancel takeover synthesizes END via an
  `orphan_recovered` stop reason ([#6674]); consumers recover when a producer
  dies between terminal persistence and stream END ([#7093]); disappeared
  Redis streams and ahead-of-retention cursors signal a replay gap instead of
  heartbeating forever ([#6951], [#6605], [#6812]); shutdown drains runs with
  staged-but-uncommitted terminal status ([#6620]); heartbeats keep leases
  through deferred terminal writes ([#6263]); interrupted runs persist their
  streamed assistant text ([#7153]); delta-mode resume refuses while
  checkpoints hold pending execution ([#7441]); JSONL stores survive torn
  final lines and remember deleted sequence watermarks ([#6520], [#6546]);
  Gateway-issued message ids let rejoining clients dedupe ([#7349]); and a
  per-thread event high-water mark prevents sequence reuse. ([#6477])
- **Sandbox providers** — provider shutdown is retryable across AIO, E2B,
  BoxLite, Tenki and OpenSandbox ([#6231], [#6244], [#6317], [#6283],
  [#7001]); `sandbox.bash_command_timeout` is enforced with server-side hard
  timeouts ([#5634], [#5662], [#6782]); ambiguous AIO session creation is
  tombstoned instead of replayed ([#5711]); AIO probe scripts run in a
  subshell so they can't wedge the persistent shell ([#5546]); remote
  glob/grep/read reach LocalSandbox parity — newline-only records, `-F`
  literal patterns, quoted `--include`, exact-cap probing ([#6585], [#6573],
  [#6952], [#6529], [#6969], [#5534]); the local path guard closes
  `$HOME`-prefix and awk-program bypasses ([#6930], [#7023]); PowerShell path
  escaping survives spaces, `$` and quotes ([#7245]); CRLF/LF and UTF-8
  fidelity hold on Windows and Git Bash ([#6343], [#6548], [#5905], [#6727]);
  E2B restores persisted workspace before exposure and releases slots when
  VMs vanish ([#6824], [#6547]); and OpenSandbox mirrors outputs before warm
  parking. ([#6699])
- **Channels** — DingTalk card/token paths stop stalling the event loop
  ([#7597]); channel stops surface `ChannelStopTimeout` and retain live
  workers instead of orphaning them ([#6798], [#6215], [#6333]); lifecycle
  mutations serialize per channel with epoch-versioned updates ([#6304],
  [#6503], [#6521]); multi-worker saves no longer overwrite each other's bots
  ([#6844]); IM redeliveries carry idempotency keys ([#7104]); Slack admits
  `file_share` messages and Discord admits file-only messages ([#6855],
  [#6857]); Telegram splits by UTF-16 code units so emoji replies don't 400
  ([#6067], [#6174]); Slack entity decoding is restored ([#6045]); concurrent
  attachment uploads claim filenames with `O_EXCL` ([#6476]); and
  Feishu/DingTalk inbound files get sandbox-readable permissions. ([#5998])
- **Models** — Claude prompt-caching markers are placed on copies and exclude
  thinking blocks, fixing HTTP 400 thread death ([#5892], [#6339]);
  extended-thinking budgets validate against real constraints ([#6060]);
  Retry-After handling is unified, including HTTP-date parsing and
  status-less streaming errors ([#7295], [#7151], [#6455], [#6897]);
  DeepSeek/Moonshot cache-write usage is restored ([#7428]); MiniMax keeps
  `reasoning_content` ([#6071]); Codex completes on `response.completed` and
  tolerates null usage and empty tool-call ids ([#6155], [#6335], [#6234]);
  MindIE extracts XML tool calls before decoding escaped newlines ([#6334],
  [#6030], [#6478]); vLLM falls back to legacy reasoning fields ([#6048]);
  credential loading tolerates malformed sources instead of losing valid
  fallbacks ([#7140], [#6323], [#5591], [#5601], [#6277]); and the circuit
  breaker fences settlements by generation with monotonic recovery. ([#5602],
  [#6806])
- **MCP** — persistent sessions tear down on thread deletion and Gateway
  shutdown ([#5956], [#5961]); notification launches are atomic with
  dead-lettering for deterministic rejections ([#5965], [#6693]); durable-task
  claims renew via heartbeat and fence stale writers ([#6780], [#6859],
  [#4966]); stdio bindings carry epochs and ownership domains so equal server
  names can't reuse the wrong session ([#6435], [#6133]); cache invalidation
  fires only on effective config changes, and error logs drop credentials
  ([#5750]); workspace-relative path correlation handles whitespace and
  Windows separators ([#5819], [#5815], [#5522]); and `ResourceLink` results
  become gated placeholders with read-time healing of poisoned threads.
  ([#6606])
- **Scheduler** — a reconciliation pass finalizes occurrences whose run rows
  are already terminal, so a failed completion hook no longer stalls schedules
  ([#7269]); manual trials no longer consume the recurring cursor or clear
  claim leases ([#7209], [#6512]); DST fall-back runs fixed-hour cron once and
  one-time edits preserve the saved instant ([#6066], [#6756], [#5330]);
  dispatch and lease races are closed under database locks ([#5860], [#5777],
  [#6975]); and only real conflicts retry — plain 409s fail the occurrence
  with the reason persisted. ([#7196])
- **Frontend** — message order stays stable across long runs and reconnects
  via journal-sequence re-anchoring ([#6128], [#6074]); failed sends keep the
  draft, quotes and attachments ([#6412], [#6407]); reconnect rejoins the live
  run and replays gaps safely ([#5536], [#6400], [#6662], [#6800]); HTML
  previews honor only a real `<base>` element ([#6176]); CSV/TSV samples
  splitting a CRLF no longer reject complete rows ([#6180]); artifact saves
  key on file identity so same-size replacements refresh ([#6195]);
  `Dockerfile`/`Makefile` open as editable source ([#6091]); unsaved drafts
  persist per account, conversation and path ([#6700]); isolated HTML previews
  get authenticated static resources ([#6701]); docs search ships a pinned
  pagefind index ([#6715]); truncation counts code points so emoji survive
  ([#7503], [#7452], [#7474]); and Escape/Enter stay with the IME during
  composition. ([#5741], [#6768])
- **Memory** — malformed Mem0/Honcho payloads follow the configured read
  policy instead of crashing runs ([#7561], [#7307], [#7202]); planning text
  carrying tool-call intent no longer becomes memory content ([#6379]); free
  form fact categories like `personal` are preserved ([#6733]); explicit
  `confidence: 0.0` ranks below the default ([#5586]); reads of
  deleted-since-listed facts no longer 500 ([#6255]); jieba tokenization drops
  punctuation-only tokens ([#6388]); quarantined summaries preserve the
  original bytes ([#7076]); and BOM-prefixed facts and summaries load.
  ([#7084], [#7116])
- **Skills** — malformed custom skills surface diagnostics in the Capability
  Center instead of vanishing ([#6623]); symlink cycles no longer cause
  multi-second rescans ([#5921]); managed skill discovery stops at
  `SKILL.md` package boundaries ([#5890]); skill toggles work without an
  existing `extensions_config.json` and reset caches on every replica
  ([#7048], [#6495], [#7099]); ppt-generation fixes EXIF orientation and
  alpha backgrounds ([#7193], [#7312]); data-analysis exports handle bare
  filenames, NaN, duplicate columns and Markdown escaping ([#7132], [#7456],
  [#7163], [#7305]); podcast, video and chart CLIs exit non-zero with stderr
  diagnostics ([#7236], [#7340], [#7395]); and github-research filters PRs out
  of issue listings and paginates fully. ([#7516])
- **Persistence & stores** — Gateway writes drain through cancellation so a
  disconnected client can't silently drop a commit, across agents, managed
  models, subagents, memory, MCP, projects and channels ([#6023], [#6024],
  [#6087], [#6092], [#6093], [#6198]); Postgres bootstrap survives
  duplicate-database races and preserves DSN query bytes ([#7489], [#5978]);
  advisory locks poll so long migrations don't time out ([#6306]); staged temp
  files register for cleanup before content is written ([#7504], [#7485]);
  schema-drift warnings compare the connected database's spellings ([#6865]);
  concurrent first ratings upsert instead of 500 ([#6852]); and integer
  metadata filters match without overflow. ([#6000])
- **Goal** — the active goal is exposed to the agent capped and escaped
  ([#5917]); evaluator evidence includes assistant tool calls, tool results
  and Human Input Card answers ([#6068], [#6082]); a satisfied goal survives
  failed artifact delivery ([#5980]); `loop_capped` stops continuations while
  preserving the goal ([#7167]); no-progress fingerprinting keys on observed
  operations instead of evaluator text ([#7271]); evaluator failures persist
  reasons ([#6073]); and invalid goal writes are rejected with 400. ([#6685])
- **TUI & CLI** — the composer becomes a multiline editor preserving pasted
  code ([#6168]); refused messages stay in the composer for editing ([#6666],
  [#6219]); each run owns its cancellation flag and delivery identity ([#6302],
  [#6249]); `/threads` and `/model` picker labels render as written ([#7631]);
  headless `--print`/`--json` failures print errors instead of tracebacks
  ([#5963]); and streamed deltas append as sent so repeated tokens render
  correctly. ([#7325])
- **Extensions & workflows** — QuickJS idle waits stop exchanging poll frames
  that exhausted the turn limit after ~209 s ([#7024]); agent-teams locks and
  workers isolate per team ([#6754], [#6298]); lark skill, launcher and shim
  publishes are atomic ([#6683], [#6671], [#6618]); and failed extension
  rollbacks restore `pyproject.toml`/`uv.lock`/`config.yaml` atomically with
  captured permission bits. ([#6366])

## 📦 Deploy & ops

- **Docker** — nginx is pinned to `nginx:1.31.2-alpine` in both compose files,
  dodging a musl 1.2.6 `pwritev2` seccomp denial that restart-looped
  containers on older Docker releases ([#7643]); hosts without IPv6 start
  ([#5900]); project-document uploads get their own 100 MB streamed location
  ([#5934]); the `/api/` catch-all and skills routes allow 600 s ([#5524]);
  `env_file` entries are optional so fresh checkouts run `make up` without a
  `.env` ([#6370]); `DEER_FLOW_COMPOSE_ENV_FILE` selects the root dotenv
  explicitly ([#6522]); and production launch paths `exec` the server so
  SIGTERM shuts down gracefully. ([#6836])
- **Kubernetes** — Helm and compose gain a multi-replica story: shared
  `AUTH_JWT_SECRET`, `DEER_FLOW_MULTI_INSTANCE`, surge-then-drain rollouts and
  PodDisruptionBudgets ([#6347]); `provisioner.replicas` keeps sandbox
  creation alive through provisioner restarts ([#6543]); a `databaseUserSecret`
  helper unifies Secret-name precedence ([#7291]); the provisioner receives
  `DEER_FLOW_HOST_BASE_DIR` for shared-PVC skill projections ([#5625]); lark-cli
  images are configurable ([#5835]); and the userdata PVC is declared once per
  sandbox pod and reused via subPaths. ([#7274])
- **Health & readiness** — `/health/ready` reports 503 while the Redis stream
  bridge is unreachable. ([#6447])
- **Configuration** — `DEER_FLOW_ENV_FILE` selects one explicit dotenv file
  ([#6227]); blank env vars are treated as unset instead of crashing startup
  ([#5840], [#5801]); `make config-upgrade` and `make doctor` honor
  `DEER_FLOW_CONFIG_PATH` and `.env` overrides ([#5991], [#5987], [#6934]);
  every Gateway sharing one `extensions_config.json` sees other processes'
  MCP/skill changes ([#6386]); numeric config fields gain range bounds and
  boolean rejection ([#6026], [#6009], [#6172]); and operator configs tolerate
  a leading UTF-8 BOM. ([#5983], [#7112])
- **Upgrades** — new migrations carry channel thread bindings, encrypted
  channel credentials, MCP OAuth tokens, resume-request identity, account
  suspension, per-thread event sequences, scheduled stop conditions and
  workflow execution leases ([#6558], [#6988], [#7207], [#6499], [#6566],
  [#6477], [#6378], [#7138]); Windows read-only files no longer wedge thread
  deletion or trash purge ([#7446], [#7499]); and `migrate_user_isolation.py`
  reads owners from the configured database. ([#6450])
- **CI & tooling** — a `skill-tests` CI job runs the public skill regression
  suite independently of package review ([#7350]); CI checks bundled extension
  packaging ([#6788]); `make test` runs four duration-balanced shards
  ([#6324]); `verify_versions.sh` rejects a stale `uv.lock` ([#6588]); `make
  dev`/`start` parse `.env` dotenv-style so values can't execute commands
  ([#7606]); `make clean` refuses to run while a live Docker Gateway mounts
  `backend/.deer-flow` ([#6351]); dev ports are reclaimed across sibling
  worktrees with spaces in their paths ([#5856]); `make doctor` validates real
  CLI credentials ([#5567]); and the setup wizard defaults Anthropic to
  `claude-sonnet-5-5`, replacing the retired model id. ([#7585])

## 🙌 Thanks

Huge thanks to the 213 contributors who landed 1068 merged PRs in the 2.2.0
milestone, and to everyone who filed issues, tested builds, and shared
feedback. DeerFlow 2.2 wouldn't exist without you.

In alphabetical order:

- @0xzkslr-ai
- @2017955725 — jiujiu
- @67-luck — Luck
- @97Three — creed
- @ajayr
- @alanhuangyoo
- @Aldenshile — BaiHeng Peng
- @Aling33
- @Amazingjun-j — Jun
- @AnnaSuSu — Wenchao An
- @Aoisop — Dragon ze
- @asts-top — asts
- @auge2u — Agustin M.
- @axsapronov — Aleksandr Sapronov
- @bbudaedu — TAI-YUAN GUO
- @Bdysj — Bob
- @bieh — Paul Hunkin
- @BlueX888 — 哈基米
- @BXL1015 — Bxl
- @camcalaquian — Carl Calaquian
- @cangen185-sudo
- @Carrot-Ve — Fake1new
- @ChaoDiDiaoAA — chaodidiao
- @Chaoqi31 — Chaoqi
- @chauvuusvn — Chau Vu
- @CodeAlex52
- @conghua1013
- @Cordis798
- @CorgiBoyG — RongJie G
- @CSXizhang
- @dakjdakd — Lucien
- @DaoyuanLi2816 — Daoyuan Li
- @dcaldr — Dan Caldr
- @DennyHo0917
- @DerrickJc — derrickLzw
- @destire-mio
- @drakeo338 — Younes Beriane
- @Eilen6316 — Eilen Shin
- @fallintoplace — Minh Vu
- @fancyboi999 — Xinmin Zeng
- @FanouZeng-TT
- @Felixkw12 — Felix
- @gdut4140 — 一片一片
- @ggnnggez — Nan Gao
- @gmll-star — Gusanity
- @GodBlf — Xuehao Xu
- @Gujiassh — Ryanba
- @Gumayusy
- @Guo-Yixin
- @hackermengzhi — BUG设计工程师
- @haomint — haochen
- @haotianqi666
- @hata33 — hataa
- @he-yufeng — Yufeng He
- @hehe764 — ShiYuan Xiong
- @heranliu — Heran Liu
- @Huang-404-Q
- @huangzz
- @Hugo-DDT — DDT
- @huidongchen148 — easT-T
- @huiq777 — Jin
- @huyengiang101086-spec
- @hyeonsang010716 — Hyeonsang Cho
- @inchang-ing
- @indexGin — ChengFa
- @Inference1 — Inference_
- @Insecshin
- @jamespud — spud
- @JasonBuildAI — Jason Cat
- @jasontd92 — Jason Draper
- @Jaxon1216 — EastonJiang
- @Jay0130-a — lukyturnflow
- @jayfeng7 — jay
- @Jerry2003826 — Jiarui Li
- @Jholly2008 — Jholly
- @jiangjiang248
- @jianyx1
- @Jinzhengxu — Zhengxu (Joshua) Jin
- @jswSpace
- @Jun516 — Qiu
- @JY-M666
- @kassdinzheng123 — Zheng Haoran
- @kbkb628
- @KennyMcSimpson — KennySimpson
- @KevinAndrewDong — Kevin Dong
- @Kiko0301
- @kunkun403
- @kwsYegar — Yeager0204
- @lachy3433 — Lachlan Allen
- @lakers-abing
- @LancerLee428 — 李靖
- @lau0708
- @laundry2 — laundry
- @lekt9
- @Lesereingrape — Grapette.L
- @lester076
- @Li-john1021
- @lihongyuan99
- @lin-nan366 — N
- @LingYi-Liang — LingYi
- @Linxiushen — 林SO
- @lisir202446 — 李刚 / Bryan Li
- @lisry-1
- @litescraper
- @liu584
- @liunianxuxie
- @liwenjie200543 — kuse
- @llb555
- @louisss1016 — Louisss
- @Lts1sds
- @luckiest-draw
- @LuckVd
- @McgAtom — SumEn
- @mikamikasuki — mika
- @mmhh256 — Wang Xinming
- @MsNBBc3R
- @nanhanq1 — NanHan Qing
- @ningkexin96
- @nothingyuancando — Tsai Yuan
- @ooiuuii
- @OUAO-FRANK — zhouh
- @pclin1212 — pclin
- @PeaceMaker-best
- @PerryLink
- @poijygfdyy — NanPan
- @ppdiedie — pp
- @pwd11 — wd_pan
- @quifox
- @ranjianghong526-hash
- @roli-lpci — Roli Bosch
- @ruirui6946 — yang rui
- @RXQ6 — XuRuuuy
- @RykerFeng — Ryker_Feng
- @saddddboi — Jie Ji
- @sclfcz — IronMurphy
- @ShallAbby
- @ShaoLOWu
- @ShenAC-SAC — AochenShen99
- @sherxlg-gif — NEEDI
- @shi-felix — Felix Shi
- @ShitK
- @simpleqt — 陈志谦
- @sisyfy-Zhang — sisyfyZhang
- @siye566 — 四野
- @Smilewithoutfalling
- @stanGSA
- @Starchaser1024
- @Stella-xixi
- @StormTian — Storm
- @subhash7476
- @sun-sh — Sun Shihao
- @sun04222
- @SuperSgdk — Linyao Du
- @sxh313 — sxh
- @sxl-lucky7
- @Theater-ahyeon — theater
- @tiammomo
- @TINGyu123644
- @tomyan007
- @Tong-bit-art — ordinary being
- @tonydzi — Anton Dziatkovskii
- @torrresagus — Agustin Torres
- @Totoro-qaq — Totoro
- @transparent21 — yijun Lin
- @treasuresyq
- @trent87
- @Tsubaki-01 — Weng Qiang
- @TYY-2005
- @uhhgxg
- @Undermoon1412
- @valueadd-lgtm — Value Add
- @Vanzeren — Zeren Wang
- @vency-799
- @vicfei
- @wannT-1
- @wcy12378 — Kris
- @wgwfn3
- @WillemJiang — Willem Jiang
- @Winoren
- @wjl8636 — 万家良
- @wswsadadbaba123 — zzr
- @wuwenbo0626 — WuWenbo
- @wuyi-github
- @wxhking — Fish
- @wyi184246-creator — 王一帆
- @wzxsdf — 杰尼龟
- @X77seven — X77
- @xbzz1018 — kuku
- @xiaodu55
- @xiaoyuCR7 — Evan
- @xihongshichaojidan8 — lilei
- @xjsns346 — illusion
- @XY-code1 — XY
- @xyi74976-del — yi-coding
- @XZQ173 — X
- @yang0228 — JasonH
- @yangfucheng123
- @yc2bgr8
- @yetuge
- @yinx65588-boop
- @YongxinFu
- @yu-xin-c — Stellar鱼
- @yu1128-L
- @YxinMiracle
- @zaoshangduziteng — 早上肚子疼
- @zeng-bohan
- @zhangbububu — Keswyk Cheung
- @zhangwei-way
- @zHaooJ — zenghao
- @Zhouyang66639 — ZHOU YANG
- @Zhuo2021
- @Zicheng-Xie — Zicheng (Axelsen) Xie
- @ZJPex

See the full author and PR list on the
[milestone page](https://github.com/bytedance/deer-flow/milestone/3).

---

> **Source** [bytedance/deer-flow](https://github.com/bytedance/deer-flow) · `v2.2.0` · 2026-11-04 · [upstream release](https://github.com/bytedance/deer-flow/releases/tag/v2.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
