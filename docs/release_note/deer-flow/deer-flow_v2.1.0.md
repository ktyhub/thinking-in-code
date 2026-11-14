---
title: "deer-flow v2.1.0"
project: "deer-flow"
repo: "bytedance/deer-flow"
tag: "v2.1.0"
version: "v2.1.0"
published: "2026-09-24"
type: "minor"
lang: "en"
summary: "DeerFlow 2.1 builds on the 2.0 super-agent harness with a focus on trust, scale, and operability: verifiable agent execution, durable batch delegation, pluggable memory backends, four new sandbox providers, an…"
---

# deer-flow v2.1.0

# DeerFlow 2.1.0

DeerFlow 2.1 builds on the 2.0 super-agent harness with a focus on **trust,
scale, and operability**: verifiable agent execution, durable batch delegation,
pluggable memory backends, four new sandbox providers, an out-of-tree extension
system, and enterprise-grade authentication and authorization — wrapped in a
much richer workspace with projects, conversation branching, and referenced
conversations.

This release closes the [2.1.0 milestone](https://github.com/bytedance/deer-flow/milestone/2)
with **772 merged PRs** since the 2.0.0 release.

> 📖 Full notes: [CHANGELOG.md](CHANGELOG.md) · [中文版](CHANGELOG_zh.md)

---

## ⚠️ Breaking changes

- **Trace ids are unconditional** — every Gateway HTTP response carries an
  `X-Trace-Id` header, and `logging.enhance.enabled` now controls log output
  only. Client-supplied `deerflow_trace_id` values in run metadata are
  overwritten so header, logs, and the persisted run cannot disagree — send
  the `X-Trace-Id` request header to pin a correlation id. ([#5119])
- **`/mnt/skills` is reserved** for managed enabled-only skill projections.
  `DEER_FLOW_HOST_SKILLS_PATH` / `SKILLS_HOST_PATH` are no longer used, and
  E2B operator mounts targeting that path are skipped with a warning.
  ([#4178])
- **`sandbox.replicas` is enforced** for E2B as a capacity limit; the default
  `wait` policy can now fail the agent turn instead of growing past the cap.
  ([#4391])
- **A `SKILL.md` directory is a runtime package boundary** — nested `SKILL.md`
  files are supporting data, no longer registered as independent skills.
  ([#4098])
- **Memory is pluggable** (`memory.manager_class`): DeerMem-private settings
  move into `memory.backend_config` (auto-migrated with a warning),
  `/memory/config` changed shape, `storage_path` is now a root directory
  (legacy file-style values are dropped with a warning), custom storage classes
  move to a new path and take `config` in `__init__`, and a backend without
  `search()` fails fast in `tool` mode. ([#4122], [#4023], [#4324])
- **`database.checkpoint_delta_snapshot_frequency`** moved to
  `database.checkpoint_delta.snapshot_frequency` and its default changed from
  `1000` to `10` — set it explicitly to keep the old cadence. ([#4516])
- **Docker binds loopback by default** — the published entry port binds
  `127.0.0.1` in both compose files, matching the documented local-trust
  deployment model; set `BIND_HOST` to expose the stack on other interfaces.
  ([#4618])

## ✨ Highlights

- **Verifiable agent execution** — every tool call carries a tamper-evident,
  runtime-stamped receipt and a bounded receipt ledger reaches the model
  context; subagent reports must cite tool receipts with verifiable deliverable
  handles that the lead agent cross-checks; and `acceptance_criteria` on
  delegations are checked deterministically parent-side (file existence,
  recorded test-command exit status), with anything undecidable reported
  UNVERIFIED. ([#4659], [#5076], [#5090], [#5109], [#4365])
- **Subagents at scale** — a system-maintained delegation ledger prevents
  redundant re-delegation and a total cap bounds fan-out ([#3877], [#4115]);
  one process-wide capacity controller governs concurrency, and the opt-in
  `batch_task` tool runs large collections of independent items as durable,
  resumable SQL-backed batches with leases, retries, pause/resume/cancel, and
  a chat progress panel ([#4998], [#5289]); `task(context_mode="snapshot")`
  carries a dispatch-time copy of the parent conversation ([#5367]); and
  subagent step history is persisted and displayed in the thread. ([#3845])
- **Scheduled tasks grow up** — `interval` schedules join `once` and `cron`
  ([#5291]); upcoming cron occurrences can be previewed before saving
  ([#5381]); run history filters server-side by status and pages backwards in
  the UI ([#5384], [#5363]); tasks can pin `lead_agent` or a custom agent
  ([#5286], [#5288]); busy occurrences queue durably across restarts
  ([#4918]); and multi-instance recovery no longer interrupts live runs.
  ([#4713])
- **Pluggable memory** — new OpenViking, mem0, and Honcho backends over HTTP
  ([#4509], [#4528], [#4730]); a built-in FTS5/BM25 retrieval adapter
  ([#4360]); LLM-assisted consolidation and staleness pruning ([#3996],
  [#3860], [#4143]); incremental per-agent fact storage ([#4279]); a hybrid
  eviction policy ([#4789]); guaranteed correction-fact injection ([#3592]);
  and opt-in write-side fact dedup. ([#5254])
- **More sandboxes, tighter control** — new E2B, BoxLite (micro-VM with warm
  pool), Tenki, and OpenSandbox providers ([#3883], [#3940], [#3951], [#4382],
  [#4877]); opt-in `isolated` / domain-`allowlist` network egress for local
  Docker sandboxes, with denied domains approvable through the Human Input
  card ([#5152]); and hardened local containers — bridge-gateway port binds,
  default seccomp, dropped capabilities. ([#4986])
- **Out-of-tree extensions** — Python extensions contribute middleware,
  lifecycle and system-model observers, Gateway services, and HTTP routers,
  managed with `deerflow extensions install/upgrade/enable/disable/remove`
  ([#4636], [#4684], [#4780], [#5347]); a 0.2 extension API lets extensions
  observe what the agent did ([#4863]); and a new `RunEvidenceReader` contract
  drives durable, cursor-based changed-run discovery. ([#5405])
- **Enterprise auth & authorization** — generic OIDC/SSO with Keycloak support
  ([#3506]); personal access tokens with scoped route policies ([#5041]); a
  built-in RBAC provider with tool, model, and sandbox authorization enforced
  at both assembly and runtime ([#4260], [#4370], [#4540], [#4911], [#4439]);
  local self-registration can be closed to SSO-only provisioning ([#4311]);
  and account preferences survive a cleared browser. ([#5397])
- **MCP as production infrastructure** — a durable task runtime survives
  Gateway restarts and reports progress in the chat UI ([#4665], [#4690],
  [#4833]); shared servers can inject per-user credentials or map
  request-scoped secrets to headers ([#4868], [#5010]); servers are managed
  from Settings ([#5022]); and a hung stdio server can no longer stall the
  Gateway or agent assembly. ([#4657], [#5217])
- **Richer runtime** — per-run token budgets shared additively across the lead
  agent and subagents ([#3412]); goal continuations with a tracked, capped
  count ([#3858]); dual-mode checkpoint storage cuts long-run thread storage
  from O(N²) to near-linear ([#4292], [#4638]); durable context survives
  summarization ([#3556], [#3887], [#3906]); opt-in task notes and
  compacted-history recall ([#5382]); a run can read referenced earlier
  conversations, grantable from the SDK and the composer ([#5399], [#5463],
  [#5465]); structured clarification form fields ([#4406]); and configurable
  recursion limits for Gateway and scheduled runs. ([#5390], [#4848])
- **Models & knowledge** — per-agent model and generation settings ([#4347]);
  an optional request-admission limiter paces calls per provider ([#5432]);
  per-user model favorites ([#5441]); a Z.AI GLM-5.3-Flash profile and MiniMax
  Code ACP support ([#5074], [#4846]); opt-in `knowledge_search` over RAGFlow
  or LightRAG ([#4955], [#5209]); Playwright-backed agentic browser control
  ([#4187]); and new search providers — Serply, Tencent Cloud WSA, Sofya,
  GroundRoute, Crawl4AI, fastCRW, and Parallel — with native recency filters.
  ([#5023], [#5057], [#5099], [#5239], [#3675], [#3821], [#3585], [#3881],
  [#3866], [#5028])
- **Workspace** — Projects organize chats, with per-project instructions, a
  document shelf, and two-way file promotion ([#5265], [#5443]); assistant
  turns branch into side conversations with distinguishing titles ([#3950],
  [#3934], [#4983]); the latest answer regenerates and user turns edit and
  rerun in place ([#3637], [#4377]); chats archive, restore, and pin
  ([#5236], [#4442]); a conversation outline navigates long chats ([#5025]);
  CSV/TSV artifacts preview as tables ([#5284]); text artifacts stream over
  byte ranges and a run's files download as one zip ([#5056], [#5117]);
  MCP servers, integrations, and skills move into a dedicated Capability
  Center ([#5468]); and Custom Agents get display names, a deployment-level
  subagent catalog, and stateless `memory_enabled: false` mode. ([#5324],
  [#4887], [#5167])
- **Channels** — a new Buzz (Nostr) connector ([#4649], [#4727]); `/agent
  list` / `/agent use` IM commands switch a conversation to the owner's
  Custom Agents ([#5168]); Postgres-backed webhook dedup lets several pods
  serve the same channel ([#4210]); and DingTalk gains file/image
  attachments. ([#4423])

## 🚀 Performance

- Dual-mode checkpoint storage with LangGraph `DeltaChannel` cuts thread
  storage from O(N²) to near-linear for long research/coding runs. ([#4292])
- Chat streams request `messages-tuple` + `updates` + `custom` instead of full
  `values` snapshots — retransmitted history was ~75% of SSE payload. ([#5159])
- Index `MemoryRunStore` by `thread_id` and `MemoryRunEventStore` events by
  `run_id` to eliminate O(n) scans. ([#3562], [#3686])
- `read_file` reads only the requested line range from the sandbox instead of
  fetching the whole file first. ([#3824])
- `view_image` injects content via `wrap_model_call`, so up to 20 MB of base64
  no longer sits in two checkpoints per viewed image. ([#5014])
- Cache sandbox path-rewrite and output-masking regexes per instance.
  ([#3648], [#3713])
- Frontend: coalesce streaming renders to a frame budget, stop re-deriving
  message content on every chunk, cache settled copy-data derivation, and
  enforce route JS/CSS budgets. ([#4425], [#4441], [#5095])
- Browser Live frames encode as JPEG, cutting progress payload size. ([#4836])
- Bound gateway memory after terminal runs. ([#5112])
- Deduplicate streamed AI messages via a seen-id set (O(n²) → O(n)). ([#3687])
- Index tool-call results per group. ([#4411])

## 🔒 Security

- **Skill review gate** — SkillScan now receives every file byte for byte
  (binaries, nested archives, and NUL bytes no longer escape scanning),
  archive extraction is capped by member count as well as size, and installer,
  export guard, and scanner share one code-file/executable-magic definition.
  ([#5431], [#4241])
- **Prompt-injection defenses** — new input-sanitization middleware with both
  bypasses closed; untrusted content in model prompts (memory facts,
  `SOUL.md`, subagent descriptions, skill metadata) HTML-escaped; MindIE
  tool-response framing escaped; and `web_capture` and MCP-sourced tool
  results sanitized through the same trust boundary as the built-in web tools.
  ([#3662], [#5375], [#4028], [#4253], [#4839])
- **Sandbox hardening** — local Docker sandboxes bind published ports to the
  Docker bridge gateway, run Docker's default seccomp profile, drop all
  capabilities, and get `no-new-privileges`; `SSH_AUTH_SOCK` is scrubbed from
  the sandbox environment; and projected skill files are copies, not
  hardlinks, so a sandboxed write cannot mutate the canonical source.
  ([#4986], [#5145], [#4825], [#4830])
- **Secrets** — inherited secret environment variables are scrubbed from the
  skill environment; MCP stdio launcher arguments and env vars are constrained
  at the config API; credentials that cannot travel as HTTP header values are
  rejected at the config boundary; and skill toggles no longer persist
  resolved `$VAR` secrets into `extensions_config.json`. ([#4018], [#4617],
  [#5066], [#5357])
- **Artifacts** — the outputs-only write guard is no longer fooled by
  percent-encoded dot segments or symlinks, and XML artifacts (any `+xml`
  type included) are served as download attachments so active content cannot
  call the API with the viewer's session. ([#5321], [#5353])
- **Authorization** — an empty tool allowlist now denies instead of failing
  open; run-create is enforced on stateless stream/wait endpoints; a revoked
  `sandbox:execute` grant is re-checked before sandbox reuse; custom-Agent
  skill allowlists are enforced at the sandbox filesystem level; and
  cancel/rollback actions on GET stream joins are rejected with 405.
  ([#4067], [#5030], [#5006], [#5077], [#5092])
- **Other** — SSRF guard for self-hosted `web_fetch` providers; Lark CLI
  credential trees enforce private ACLs on Windows; and streamdown
  sanitization is restored in custom rehype chains. ([#3942], [#5141], [#4987])

## 🐛 Notable fixes

- **Runs & runtime** — cancel a run from any live gateway worker, not only the
  owner; cross-worker idempotent reuse no longer permanently blocks the
  thread; keyed retries resolve the request user consistently; the shutdown
  run drain survives repeated cancellation; and a repair migration heals
  databases that silently skipped the run-change clock schema. ([#4500],
  [#5393], [#5401], [#5487], [#5517])
- **Middleware** — loop detection keys `read_file` by exact line range, so
  paging through a file no longer trips the hard stop; `max_turns` now grants
  the turns it names (it was passed as LangGraph super-steps, ~7–8 per turn);
  token budgets hold across goal continuations; guards that remove tool calls
  no longer break every later Claude/Responses turn; and retried model calls
  re-deliver queued warnings. ([#5486], [#5485], [#5410], [#5447], [#5433])
- **Subagents** — a subagent keeps its instructions after context compaction;
  a delegated subagent's error no longer fails the parent run; repeatedly
  cancelled subagents no longer leak their execution slot; and Windows
  acceptance checks fail closed on out-of-scope commands. ([#5454], [#5407],
  [#5477], [#5162])
- **Sandbox tools** — remote `list_dir` / `glob` / `grep` report failures
  instead of inventing "empty directory" or "no matches"; `read_file`
  truncation is reported in lines with the exact resume point; host-path
  masking handles `$PATH`-style joins and forward-slash Windows spellings;
  concurrent subagents work past the AIO shell-session ceiling; and CJK tool
  output is no longer garbled in PowerShell. ([#5264], [#5422], [#5380],
  [#5474], [#5418], [#5373], [#5178], [#5440])
- **Models** — the Claude Code OAuth token is read once per process, so title,
  summarization, and subagent models stop losing their credential; models with
  `supports_reasoning_effort` no longer fail to build; Codex invalid tool
  calls are paired with their results; and `api_base` is honored on every
  `BaseChatOpenAI` subclass. ([#5411], [#5403], [#5509], [#4146])
- **Channels** — WeCom clips and splits over the 20 KB protocol cap instead of
  dropping the reply; one undecodable WeChat message no longer drops its
  batch; a dead Discord client no longer hangs outbound sends and freezes the
  channel pool; Telegram `rich_messages` renders only when the text actually
  contains rich constructs; and WeChat/WeCom inbound media is streamed,
  size-bounded, and host-allowlisted. ([#5148], [#4231], [#5227], [#5470],
  [#5225])
- **Skills & secrets** — toggling a skill no longer writes resolved secrets
  into `extensions_config.json`; restore `$VAR` references and rotate any
  credential exposed this way. ([#5357])
- **Scheduler** — the global `max_concurrent_runs` budget is enforced on
  SQLite (not just Postgres) and for manual triggers; and a dispatch race
  that could launch two runs for one task is closed. ([#5469], [#4769],
  [#4105])
- **MCP** — parallel synchronous calls to one stdio server no longer cancel
  each other's connection; the session pool holds its capacity limit under
  concurrent initialization; and durable task polling preserves pooled
  sessions across protocol timeouts. ([#5396], [#4962], [#5027])
- **Frontend** — message order stays stable across long runs and reconnects;
  human-input cards keep the turn that requested them; the user's input is
  restored after an incremental stream reconnect; sidebar chat deletion asks
  for confirmation first; and the client emits a streamed tool call once, with
  its complete arguments. ([#5293], [#4892], [#5428], [#5406], [#5408])

## 📦 Deploy & ops

- **Docker** — the published entry port binds loopback by default (see
  breaking changes); `make up` waits for a real Gateway health probe before
  declaring the stack ready; startup tolerates a missing `.env`; and Windows
  Git Bash preflight and socket handling work. ([#4618], [#4658], [#4806],
  [#5371], [#5402])
- **Kubernetes** — per-sandbox Services default to `ClusterIP` instead of
  `NodePort`, so sandboxes are reachable only inside the cluster ([#4190]);
  ClusterIP Services and scoped per-skill PVC mounts ([#4016], [#3928]); and
  an optional Lark credential broker sidecar keeps app secrets out of the
  sandbox filesystem. ([#4501])
- **Health & readiness** — the new `GET /health/ready` runs a bounded database
  probe and returns 503 while the database is unreachable; `/health` stays
  pure liveness. ([#5166])
- **Nginx** — thread routes that wait on a model call allow 600 seconds (a
  slow `/compact` no longer returns 504 for work that was applied), and long
  chat prompts pass `/api/langgraph/` without a raw 500. ([#5505], [#4277])
- **Configuration** — a custom PostgreSQL schema is selected via
  `postgres_schema` and created automatically ([#3442]); `recursion_limit` and
  `scheduler.recursion_limit` are deployment-configurable ([#5390], [#4848]);
  and `make dev` preserves the `ollama` uv extra across restarts. ([#5318])
- **Upgrades** — startup tolerates a database migrated to the reviewed newer
  revision, keeping rollback possible ([#5219]); legacy threads get run-event
  seed backfill ([#4590]); and Postgres connections survive idle timeouts via
  `pool_recycle`. ([#4230])
- **CI & packaging** — the backend unit-test workflow splits into four
  parallel shards with isolated Postgres/Redis ([#5137]); and the renamed
  `tenki` package replaces the PyPI-removed `tenki-sandbox`. ([#5087])

## 🙌 Thanks

Huge thanks to the 178 contributors who landed 772 merged PRs in the 2.1.0
milestone, and to everyone who filed issues, tested builds, and shared
feedback. DeerFlow 2.1 wouldn't exist without you.

In alphabetical order:

- @0717lee — Fengmin Li
- @ajayr
- @alanhuangyoo
- @Amazingjun-j — Jun
- @angus-guo — gus
- @aniketwaghh — Aniket Wagh
- @AnnaSuSu — Wenchao An
- @AnoobFeng
- @AoHanBei
- @axsapronov — Aleksandr Sapronov
- @AZE98 — 阿泽
- @Baldwinzc
- @Beautyl0ve
- @belharethsami — Sami Belhareth
- @BetterAndBetterII — Yuzhong Zhang
- @betterkite
- @Beverly621
- @bjtolo
- @BlueX888 — 哈基米
- @Boooobby
- @chaoxi007
- @chengjoey
- @chenjiahan — Jiahan Chen
- @chetan655 — Chetan Sharma
- @chuenchen309 — Andrew Chen
- @codeingforcoffee
- @CorgiBoyG — RongJie G
- @Creeper998
- @cuishuang — cui fliter
- @CyanYuMu
- @cybersentia
- @cyberspace-cs — buleboy
- @Czile-create — Czile
- @d33kayyy
- @dajiaohuang — Wu Shuwen
- @DaoyuanLi2816 — Daoyuan Li
- @dcaldr — Dan Caldr
- @deepcoldy — DeepCold
- @DengY11 — Yi Deng
- @diegodscamara — Diego Câmara
- @DorianZheng
- @ech0hol — Zhipeng Zheng
- @ehz0ah — z1gon
- @Eilen6316 — Eilen Shin
- @fallintoplace — Minh Vu
- @fancyboi999 — Xinmin Zeng
- @FanouZeng-TT
- @felix-windsor — Felix Wang
- @fgoll
- @fszcd — GGbond
- @georgeatparallel — George Pickett
- @georgelichen
- @ggnnggez — Nan Gao
- @GodBlf — Xuehao Xu
- @goloisme
- @googio — Serply
- @haimingZZ — Chris Z
- @HaotianChen616
- @hata33 — hataa
- @he-yufeng — Yufeng He
- @heart-scalpel
- @hetaoBackend — DanielWalnut
- @Huang-404-Q
- @Huixin615
- @hyeonsang010716 — Hyeonsang Cho
- @icn5381
- @imohammedansari — Mohammed Ansari
- @IshaanPotle — Ishaan Potle
- @jamespud — spud
- @Janlaywss — Janlay
- @Jholly2008 — Jholly
- @jianpingpei — muguo
- @jiaqiang000 — jiaqiang0000
- @jie101234 — jie
- @jp0xz
- @kapil971390
- @kassdinzheng123 — Zheng Haoran
- @KevinAndrewDong — dong
- @kongxiangxin — 明年我18
- @KXHXK — KXH
- @Leeminjing — Lee minjing
- @LittleChenLiya — Admire
- @liunianxuxie
- @LKL-ZREO
- @lllyfff
- @lucky798213 — blue
- @luojiyin1987 — luo jiyin
- @ly-wang19
- @lyxnbclass — shawn
- @March-77
- @MeiSiristhebest — Nefelibata
- @MeloMei
- @MiaoRuidx
- @Michael-Yu2978 — Michael
- @ming1523
- @Miracle778
- @mvanhorn — Matt Van Horn
- @nankingjing — 黄云龙
- @NewAmorend — Amorend
- @nicochow
- @nothingyuancando — Tsai Yuan
- @now-ing
- @Osamaali313 — Syed Osama Ali Shah
- @parthiban-sivakumar — Parthiban Sivakumar
- @patrick-andstar — Wu JiaCheng
- @pclin1212 — pclin
- @PeaceMaker-best
- @PiedPiper911
- @poijygfdyy — NanPan
- @praxstack — Prax Lannister
- @pwd11 — wd_pan
- @qin-chenghan
- @qingbo1011
- @rain02333z-spec
- @ranxi2001 — Onefly
- @rayhpeng
- @richardmilles
- @Ricky-7-Yan
- @RongfuShuiping
- @ruirui6946 — yang rui
- @RykerFeng — Ryker_Feng
- @ShenAC-SAC — AochenShen99
- @ShiroKSH — Kushida
- @ShitK
- @shoemoney — Jeremy Schoemaker
- @Shxiao101 — Shxiao
- @simpleqt — 陈志谦
- @sontianye — Tianye Song
- @sqsge
- @starslittle
- @sunshine-lang — Sunshine
- @Syt3s
- @Terminator666666
- @thefoolgy
- @therenansimoes
- @tiammomo
- @TNsparrow — Mason Zhou
- @Totoro-qaq — Totoro
- @Tsubaki-01 — Weng Qiang
- @TuNaiChao — Tu Naichao
- @tvost2 — Otavio Rodrigues Santana
- @tzlwn1 — SPEC
- @Undermoon1412
- @us — Recep S
- @Uygniqoar — Vicki
- @vantanco
- @Vanzeren — Zeren Wang
- @VectorPeak
- @wcy12378 — Kris
- @whhe — He Wang
- @WillemJiang — Willem Jiang
- @winklemad — Madan Kumar
- @Wsp030914 — Roc
- @Wuong
- @wutongyuonce — 梧桐雨
- @xiaodu55
- @xiaoqianbaobao — qian
- @xiawiie — Wei
- @XIIRUAN
- @yeejhyang
- @yjchen101
- @yong326 — yong
- @yu-xin-c — Stellar鱼
- @yusufgurdogan — Yusuf Gürdoğan
- @yym36991
- @YZJF
- @zaoshangduziteng — 早上肚子疼
- @ZenCGL — ChenglongZ
- @zeng-bohan
- @ZeroMadLife — ChiHaYa
- @zhangbububu — Keswyk Cheung
- @zhangwei-way
- @Zhengcy05
- @zhernrong92
- @zhfeng — Zheng Feng
- @zhuiyueya — ChaseMoon
- @zkforge — Zhou Kai
- @zwj110610 — zgenu


See the full author and PR list on the
[milestone page](https://github.com/bytedance/deer-flow/milestone/2).

---

> **Source** [bytedance/deer-flow](https://github.com/bytedance/deer-flow) · `v2.1.0` · 2026-09-24 · [upstream release](https://github.com/bytedance/deer-flow/releases/tag/v2.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
