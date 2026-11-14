---
title: "openai-agents-python v0.22.1"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.22.1"
published: "2026-09-08"
type: "patch"
lang: "en"
summary: "feat(core): support image results in web search tools · feat(core): customize output guardrail blocked messages · feat(mcp): add server-wide guardrails to MCP tools"
---

# openai-agents-python v0.22.1

## What's Changed

* feat(core): support image results in web search tools by @seratch in https://github.com/openai/openai-agents-python/pull/4898
* feat(core): customize output guardrail blocked messages by @seratch in https://github.com/openai/openai-agents-python/pull/4594
* feat(mcp): add server-wide guardrails to MCP tools by @seratch in https://github.com/openai/openai-agents-python/pull/4632
* feat(sandbox): add configurable Unix-local environment isolation by @seratch in https://github.com/openai/openai-agents-python/pull/4640
* feat(sandbox): allow labels on Docker sandbox containers by @seanxuu in https://github.com/openai/openai-agents-python/pull/4564
* feat(voice): expose streamed transcription options by @seratch in https://github.com/openai/openai-agents-python/pull/4645
* fix(core): detach aggregated request usage entries by @green3sf in https://github.com/openai/openai-agents-python/pull/4519
* fix(core): fail closed on empty tool arguments by @hsusul in https://github.com/openai/openai-agents-python/pull/4545
* fix(core): strip created_by when replaying RunItems as input by @hsusul in https://github.com/openai/openai-agents-python/pull/4568
* fix(core): strict_schema error message, REPL whitespace input, debug docstrings by @simpleqt in https://github.com/openai/openai-agents-python/pull/4600
* fix(core): max_turns no longer clobbers a tripped input guardrail exception in streaming by @shoemoney in https://github.com/openai/openai-agents-python/pull/4606
* fix(core): preserve serialized approval resume ownership by @seratch in https://github.com/openai/openai-agents-python/pull/4613
* fix(core): read tool args without Pydantic property shadowing by @hsusul in https://github.com/openai/openai-agents-python/pull/4627
* fix(core): accept JSON Schema type arrays of object for tool outputs by @hsusul in https://github.com/openai/openai-agents-python/pull/4647
* fix(core): honor End of File hunks when the file ends in a newline by @lllakshit in https://github.com/openai/openai-agents-python/pull/4661
* fix(core): preserve tuple annotations for variadic tool arguments by @Excelius-Wang in https://github.com/openai/openai-agents-python/pull/4655
* fix(core): fix streamed response span losing response/input when consumer stops at completed event by @XuQuanxin04 in https://github.com/openai/openai-agents-python/pull/4692
* fix(core): apply **kwargs value annotation to each keyword value by @abhay-codes07 in https://github.com/openai/openai-agents-python/pull/4714
* fix(core): reject **kwargs keys that collide with named tool parameters by @rajarshidattapy in https://github.com/openai/openai-agents-python/pull/4674
* fix(core): reject fixed-length tuple annotations for variadic tool arguments by @subhashpolisetti in https://github.com/openai/openai-agents-python/pull/4735
* fix(core): preserve Field constraints on variadic tool parameters by @rioyu123 in https://github.com/openai/openai-agents-python/pull/4739
* fix(core): close model providers created by Runner by @Excelius-Wang in https://github.com/openai/openai-agents-python/pull/4785
* fix(core/voice): honor OpenAI provider options over default clients by @green3sf in https://github.com/openai/openai-agents-python/pull/4530
* fix(chat-completions): merge a streamed turn's message into its pending tool-call message by @mmjerge in https://github.com/openai/openai-agents-python/pull/4728
* fix(chat-completions): raise ModelBehaviorError on truncated empty completions by @weike-zhang in https://github.com/openai/openai-agents-python/pull/4513
* fix(chat-completions) reject unpaired function outputs in Chat Completions by @apcha-oai in https://github.com/openai/openai-agents-python/pull/4699
* fix(extensions): skip AdvancedSQLiteSession usage store when the branch has no turn by @rioyu123 in https://github.com/openai/openai-agents-python/pull/4822
* fix(extensions): nest extra_body on the any-llm chat path by @hsusul in https://github.com/openai/openai-agents-python/pull/4544
* fix(mcp): deep-copy cached tools before returning them by @hsusul in https://github.com/openai/openai-agents-python/pull/4525
* fix(mcp): clear active MCP servers after cleanup by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4586
* fix(mcp): deduplicate managed servers by @hsusul in https://github.com/openai/openai-agents-python/pull/4591
* fix(realtime): advance crossed guardrail thresholds by @hsusul in https://github.com/openai/openai-agents-python/pull/4590
* fix(realtime): preserve item status on retrieved conversation items by @shoutoutuoadi325 in https://github.com/openai/openai-agents-python/pull/4598
* fix(sandbox): finish dependency cleanup on cancellation by @hsusul in https://github.com/openai/openai-agents-python/pull/4607
* fix(sandbox): keep unbounded UnixLocal workspace I/O off the event loop by @ayaangazali in https://github.com/openai/openai-agents-python/pull/4700
* fix(sandbox): preserve UTF-8 boundaries in Cloudflare SSE by @Hughhhhcoder in https://github.com/openai/openai-agents-python/pull/4707
* fix(sandbox): clean up PTY startup cancellation by @Hughhhhcoder in https://github.com/openai/openai-agents-python/pull/4750
* fix(sandbox): settle PTY output before cleanup by @seratch in https://github.com/openai/openai-agents-python/pull/4738
* fix(sandbox): preserve workdir for shell command lists by @hsusul in https://github.com/openai/openai-agents-python/pull/4915
* fix(sessions): recover failed resumed Session writes before model calls by @seratch in https://github.com/openai/openai-agents-python/pull/4630
* fix(sessions): recover failed resumed Session writes on a renewed interruption by @ayaangazali in https://github.com/openai/openai-agents-python/pull/4650
* fix(sessions): persist resumed tool guardrail results by @FU-max-boop in https://github.com/openai/openai-agents-python/pull/4654
* fix(sessions): recover resumed handoffs after session append failures by @seratch in https://github.com/openai/openai-agents-python/pull/4725
* fix(sessions): settle conversation deletion before propagating cancellation by @Excelius-Wang in https://github.com/openai/openai-agents-python/pull/4790
* fix(sessions): preserve concurrent writes during compaction by @seratch in https://github.com/openai/openai-agents-python/pull/4736
* fix(sessions): reject resuming a run whose accepted terminal output was not persisted by @Ayushraj06-bit in https://github.com/openai/openai-agents-python/pull/4698
* fix(sessions): preserve Session transformations during generation tracking by @seratch in https://github.com/openai/openai-agents-python/pull/4917
* fix(tracing): flush buffered data after tracing is disabled by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4528
* fix(tracing): preserve response IDs in redacted traces by @seratch in https://github.com/openai/openai-agents-python/pull/4641
* fix(tracing): record the tool output on approval-gated function spans by @dfedoryshchev in https://github.com/openai/openai-agents-python/pull/4866
* fix(voice): support custom OpenAI TTS voice IDs by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4541
* fix(voice): forward streamed STT language and prompt by @seratch in https://github.com/openai/openai-agents-python/pull/4574
* fix(voice): honor client config for streamed STT by @seratch in https://github.com/openai/openai-agents-python/pull/4575
* fix(voice) reject ignored explicit-client options by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4527
* fix(voice): include current OpenAI TTS voices by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4535
* fix(voice): use monotonic STT event deadlines by @seratch in https://github.com/openai/openai-agents-python/pull/4593
* fix(voice): support context in single-agent workflow by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4636
* fix(voice): enforce public Voice class state coverage by @seratch in https://github.com/openai/openai-agents-python/pull/4644
* fix(voice): redact STT prompts from traces by @hsusul in https://github.com/openai/openai-agents-python/pull/4663
* fix(voice): redact TTS instructions from speech spans by @ayaangazali in https://github.com/openai/openai-agents-python/pull/4676
* fix(voice): accept every NumPy spelling of a supported TTS dtype by @Nikhils-G in https://github.com/openai/openai-agents-python/pull/4778
* fix(voice): wake stream when producer is cancelled by @Hughhhhcoder in https://github.com/openai/openai-agents-python/pull/4825
* fix(visualization): preserve nodes with duplicate names by @tandede in https://github.com/openai/openai-agents-python/pull/4512
* refactor: extract RunState agent graph identity by @seratch in https://github.com/openai/openai-agents-python/pull/4876
* refactor: share provider generation-span population by @seratch in https://github.com/openai/openai-agents-python/pull/4877

### Documentation & Other Changes

* docs: document v0.22.0 behavior changes by @seratch in https://github.com/openai/openai-agents-python/pull/4522
* docs: fix wording in handoff example prompts by @Chair403 in https://github.com/openai/openai-agents-python/pull/4520
* docs: preserve English heading anchors in translated pages by @saime428 in https://github.com/openai/openai-agents-python/pull/4580
* docs: refresh tracing integration links by @seratch in https://github.com/openai/openai-agents-python/pull/4634
* docs: clarify capability visibility and authorization by @seratch in https://github.com/openai/openai-agents-python/pull/4642
* docs: clarify database driver installation for SQLAlchemy sessions by @rioyu123 in https://github.com/openai/openai-agents-python/pull/4743
* docs: skip reference pages on Windows by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4761
* docs: clarify requested state consistency guarantees by @rksharma-owg in https://github.com/openai/openai-agents-python/pull/4903
* docs: make the encrypted session quick start self-contained by @rioyu123 in https://github.com/openai/openai-agents-python/pull/4909
* fix: freeze the public voice API contract by @seratch in https://github.com/openai/openai-agents-python/pull/4578
* fix: enforce public type alias contract coverage by @seratch in https://github.com/openai/openai-agents-python/pull/4595
* fix: route verification changes and require confirmed docs-only pushes by @seratch in https://github.com/openai/openai-agents-python/pull/4880
* fix: propagate the serial test runner's exit code on Windows by @MohammedAlkindi in https://github.com/openai/openai-agents-python/pull/4771
* fix: harden PyPI publishing and require manual release tags by @seratch in https://github.com/openai/openai-agents-python/pull/4726
* fix: require complete policy for new public TypedDicts by @seratch in https://github.com/openai/openai-agents-python/pull/4900
* fix: simplify verification and stabilize sandbox tests by @seratch in https://github.com/openai/openai-agents-python/pull/4916
* fix: consolidate Docker-backed integration tests by @seratch in https://github.com/openai/openai-agents-python/pull/4667
* chore(deps): bump actions/download-artifact from 4.3.0 to 8.0.1 by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4802
* chore(deps): bump actions/upload-artifact from 4.6.2 to 7.0.1 by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4803
* chore: run repository skill tests in dedicated CI by @seratch in https://github.com/openai/openai-agents-python/pull/4881
* refactor: separate release contract verification responsibilities by @seratch in https://github.com/openai/openai-agents-python/pull/4878
* perf: reduce async stability command startup overhead by @seratch in https://github.com/openai/openai-agents-python/pull/4874
* test: make async progress and trace-worker tests deterministic by @seratch in https://github.com/openai/openai-agents-python/pull/4875
* test: organize Realtime session tests by responsibility by @seratch in https://github.com/openai/openai-agents-python/pull/4879
* test(sandbox): skip unavailable Windows symlinks by @sylvesterkaczmarek in https://github.com/openai/openai-agents-python/pull/4853
* release: 0.22.1 by @seratch in https://github.com/openai/openai-agents-python/pull/4576

## New Contributors

* @Chair403 made their first contribution in https://github.com/openai/openai-agents-python/pull/4520
* @green3sf made their first contribution in https://github.com/openai/openai-agents-python/pull/4519
* @tandede made their first contribution in https://github.com/openai/openai-agents-python/pull/4512
* @seanxuu made their first contribution in https://github.com/openai/openai-agents-python/pull/4564
* @simpleqt made their first contribution in https://github.com/openai/openai-agents-python/pull/4600
* @shoemoney made their first contribution in https://github.com/openai/openai-agents-python/pull/4606
* @shoutoutuoadi325 made their first contribution in https://github.com/openai/openai-agents-python/pull/4598
* @ayaangazali made their first contribution in https://github.com/openai/openai-agents-python/pull/4650
* @lllakshit made their first contribution in https://github.com/openai/openai-agents-python/pull/4661
* @Excelius-Wang made their first contribution in https://github.com/openai/openai-agents-python/pull/4655
* @XuQuanxin04 made their first contribution in https://github.com/openai/openai-agents-python/pull/4692
* @Hughhhhcoder made their first contribution in https://github.com/openai/openai-agents-python/pull/4707
* @rajarshidattapy made their first contribution in https://github.com/openai/openai-agents-python/pull/4674
* @mmjerge made their first contribution in https://github.com/openai/openai-agents-python/pull/4728
* @subhashpolisetti made their first contribution in https://github.com/openai/openai-agents-python/pull/4735
* @rioyu123 made their first contribution in https://github.com/openai/openai-agents-python/pull/4822
* @Nikhils-G made their first contribution in https://github.com/openai/openai-agents-python/pull/4778
* @MohammedAlkindi made their first contribution in https://github.com/openai/openai-agents-python/pull/4771
* @Ayushraj06-bit made their first contribution in https://github.com/openai/openai-agents-python/pull/4698
* @rksharma-owg made their first contribution in https://github.com/openai/openai-agents-python/pull/4903

**Full Changelog**: https://github.com/openai/openai-agents-python/compare/v0.22.0...v0.22.1

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.22.1` · 2026-09-08 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.22.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
