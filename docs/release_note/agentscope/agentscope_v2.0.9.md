---
title: "agentscope v2.0.9"
project: "agentscope"
repo: "agentscope-ai/agentscope"
tag: "v2.0.9"
version: "v2.0.9"
published: "2026-09-28"
type: "patch"
lang: "en"
summary: "Standard Operating Procedures (Experimental): Added the agentscope.sop module for splitting a task into ordered milestones, each verified before the next one starts, with run state that can be persisted and resumed."
---

# agentscope v2.0.9

## Highlight
- **Standard Operating Procedures (Experimental)**: Added the `agentscope.sop` module for splitting a task into ordered milestones, each verified before the next one starts, with run state that can be persisted and resumed. The agent service also exposes `/sop` endpoints to store procedures, start runs, and review steps by hand.
- **Team Pipeline**: Added a `TeamPipeline` class where a leader agent delegates tasks to member agents, which run concurrently and hand their results back.
- **More Realtime Voice Models**: Added OpenAI Realtime, Gemini Live, and xAI Grok Voice models to the realtime voice agent.
- **Terminal UI**: Introduced the `agentscope.tui` module, a full-screen terminal interface for chatting with agents and running realtime voice sessions via `launch_realtime_ui`.
- **AskUser Tool**: Added `AskUser`, an external tool that lets agents ask users multiple-choice questions.
- **MiniMax Model and Jev-based Model Routing**: Added the MiniMax chat model (M3 by default), and a `ModelRouterMiddleware` backed by the new `agentscope.classifier` module (with Jev support) that picks the chat model for each reply.
- **DingTalk Knowledge Base Tools**: Agents on DingTalk channels can now search DingTalk knowledge bases.
- **Safer Shell Permission Checks**: Tightened read-only command detection so destructive `git`, `sed`, and `tee` usages no longer skip permission confirmation.

## What's Changed
* feat(realtime): support xAI Grok voice API model by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2553
* ci(github): track pr state with awaiting review / awaiting changes labels by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2560
* feat(realtime): support OpenAI Realtime API model by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2552
* feat(realtime): support Gemini Live API model by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2556
* feat(tool): add AskUser, an external tool for asking the user by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2573
* feat(channel): add DingTalk knowledge base tools by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2464
* feat(tui): add rich textual chat interface by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2507
* fix(utils): preserve property names during schema flattening by @Tsubaki-01 in https://github.com/agentscope-ai/agentscope/pull/2575
* fix(agent): include paths in tool validation errors by @liugy789 in https://github.com/agentscope-ai/agentscope/pull/2584
* feat(sop): standard operating procedures — fixed milestones, each verified by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2393
* docs: announce AgentScope v2 skill support by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2578
* fix(realtime): request a response after a caller-committed turn by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2559
* fix(channel): preserve wakeups for messages arriving during run finalization by @CoralGarden52 in https://github.com/agentscope-ai/agentscope/pull/2521
* fix(realtime): report tool call arguments in the event stream by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2593
* fix(app): assign unique AG-UI message IDs to tool results by @liugy789 in https://github.com/agentscope-ai/agentscope/pull/2555
* fix(utils): preserve instance values during schema flattening by @Tsubaki-01 in https://github.com/agentscope-ai/agentscope/pull/2592
* test(mcp): derive the expected tool description from __doc__ by @fszcd in https://github.com/agentscope-ai/agentscope/pull/2611
* fix(storage): make packaged alembic.ini ASCII-safe for non-UTF-8 locales by @fszcd in https://github.com/agentscope-ai/agentscope/pull/2607
* docs: fix dead realtime docs links in README and news by @Shxiao101 in https://github.com/agentscope-ai/agentscope/pull/2600
* docs: point eslint plugin links to the npm package pages by @Shxiao101 in https://github.com/agentscope-ai/agentscope/pull/2602
* docs: fix broken apple container install link by @Shxiao101 in https://github.com/agentscope-ai/agentscope/pull/2601
* feat(tui): add launch_realtime_ui for voice sessions by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2594
* fix(sop): write out what a step actually kept by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2616
* fix(realtime): reconnect before sending text input by @wuwenbo0626 in https://github.com/agentscope-ai/agentscope/pull/2591
* fix(realtime): drop the previous session's terminal events on reconnect by @L4XB in https://github.com/agentscope-ai/agentscope/pull/2588
* fix(tool): only validate external result metadata on success by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2623
* test(read): use portable missing file path by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2620
* fix(tool): bound glob search tool output by @liugy789 in https://github.com/agentscope-ai/agentscope/pull/2572
* feat(model): add ollama model cards for qwen3-7b, llama3.2, and phi4-mini by @nuthalapativarun in https://github.com/agentscope-ai/agentscope/pull/1753
* fix(agent): preserve reply usage in final messages by @liugy789 in https://github.com/agentscope-ai/agentscope/pull/2562
* test(workspace): skip POSIX-shell-dependent tests on Windows hosts without coreutils by @fszcd in https://github.com/agentscope-ai/agentscope/pull/2609
* fix(formatter): keep media from tool results after all tool messages of a turn by @alanhuangyoo in https://github.com/agentscope-ai/agentscope/pull/2613
* fix(model): preserve Anthropic streaming content blocks by @RICARDO51167 in https://github.com/agentscope-ai/agentscope/pull/2495
* fix(formatter): drop empty Gemini text parts by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2641
* fix(formatter): drop empty hint text by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2656
* fix(rag): read the text inside grouped shapes in PPTParser by @L4XB in https://github.com/agentscope-ai/agentscope/pull/2660
* fix(formatter): preserve first rendered history marker by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2643
* docs: update ecosystem image in READMEs by @Osier-Yi in https://github.com/agentscope-ai/agentscope/pull/2673
* fix(examples): rename the default MCP client to match the server it runs by @L4XB in https://github.com/agentscope-ai/agentscope/pull/2644
* fix(tui): hide realtime messages that fail to send by @wuwenbo0626 in https://github.com/agentscope-ai/agentscope/pull/2646
* fix(tool): stop classifying tee as a read-only command by @harbinresearcher in https://github.com/agentscope-ai/agentscope/pull/2629
* fix(message_bus): expire the in-memory try_lock claim after ttl_secs by @L4XB in https://github.com/agentscope-ai/agentscope/pull/2654
* fix(console): propagate caller cancellation by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2658
* fix(app): pass model card's context_size to chat model by @code-code567 in https://github.com/agentscope-ai/agentscope/pull/2597
* fix(tool): validate AskUser question constraints by @wuwenbo0626 in https://github.com/agentscope-ai/agentscope/pull/2586
* ci(issue-triage): verify new bug reports with an agent by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2678
* fix(ci): let the triage workflows create their environment by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2680
* fix(realtime): include reply ID in interrupt events by @Tsubaki-01 in https://github.com/agentscope-ai/agentscope/pull/2692
* fix(rag): drop empty and whitespace-only chunks in ApproxTokenChunker by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2687
* fix(embedding): expose DashScope multimodal capability by @Tsubaki-01 in https://github.com/agentscope-ai/agentscope/pull/2701
* fix(tool): copy the tool lists a ToolGroup is constructed with by @sxh313 in https://github.com/agentscope-ai/agentscope/pull/2721
* feat(model): add model cards for the latest models by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2727
* fix(agent): propagate cancellation after interruption cleanup by @Cryocell77 in https://github.com/agentscope-ai/agentscope/pull/2650
* fix(middleware): prevent KeyError in budget middleware when ReplyEndEvent is swallowed by @Terminator666666 in https://github.com/agentscope-ai/agentscope/pull/2419
* fix(rag): preserve image-only and header-only Excel sheets by @yang0228 in https://github.com/agentscope-ai/agentscope/pull/2666
* fix(tool): sort ripgrep output by path so Grep pagination is stable by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2726
* fix(embedding): avoid blocking the event loop by @Tsubaki-01 in https://github.com/agentscope-ai/agentscope/pull/2703
* fix(agent): keep tool-result metadata and timestamps when truncating by @Lesereingrape in https://github.com/agentscope-ai/agentscope/pull/2754
* fix(realtime): reset local transport across restarts by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2740
* feat(workflows): cap open issues and claims at five per contributor by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2761
* fix(formatter): fall back to the media placeholder in xAI tool results by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/2751
* fix(tool): check every sed -e expression against the denylist by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/2747
* fix(tool): count written lines the way Read numbers them by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/2734
* fix(storage): keep native datetimes for promoted DateTime columns by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/2749
* fix(utils): honour set_timestamp_factory in all entities by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/2733
* feat(classifier): add Jev support and chat model routing middleware by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2758
* fix(rag): support float metadata filters in Qdrant by @Shy7777 in https://github.com/agentscope-ai/agentscope/pull/2783
* fix(embedding): keep the cache when a batch cannot fit its size limit by @sxh313 in https://github.com/agentscope-ai/agentscope/pull/2790
* fix(tool): judge sed long options that carry an inline value by @sxh313 in https://github.com/agentscope-ai/agentscope/pull/2795
* fix(formatter): forward the images of collapsed messages in xAI multi-agent history by @Lesereingrape in https://github.com/agentscope-ai/agentscope/pull/2808
* docs: fix commit format examples in contributing guides by @yc2bgr8 in https://github.com/agentscope-ai/agentscope/pull/2811
* fix(scheduler): normalize standard cron weekday numbering by @dafyy321-pixel in https://github.com/agentscope-ai/agentscope/pull/2770
* fix(workspace): skip agentscope deps when building the gateway image by @sxh313 in https://github.com/agentscope-ai/agentscope/pull/2803
* fix(middleware): stop inheriting the previous reply's routed model by @sxh313 in https://github.com/agentscope-ai/agentscope/pull/2793
* fix(workspace): deregister stateless MCPs from sandbox gateway by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2777
* fix(rag): keep text inside nested Word tables by @ydflow in https://github.com/agentscope-ai/agentscope/pull/2759
* fix(memory): deduplicate selected files before limiting retrieval by @Shy7777 in https://github.com/agentscope-ai/agentscope/pull/2776
* chore(version): bump version to 2.0.9 by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2887
* fix(response): honor configured timestamp factory by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2822
* fix(a2a): keep observed messages when the reply is rejected before sending by @ydflow in https://github.com/agentscope-ai/agentscope/pull/2875
* fix(tool): respect empty model input types by @wuwenbo0626 in https://github.com/agentscope-ai/agentscope/pull/2857
* chore(credential): remove the empty _kimi module left over from the moonshot rename by @kyy-logs in https://github.com/agentscope-ai/agentscope/pull/2884
* fix(rag): normalize Word and Excel parser errors by @iluv7 in https://github.com/agentscope-ai/agentscope/pull/2881
* docs: point the PyPI documentation link to the v2 docs by @zaher-m in https://github.com/agentscope-ai/agentscope/pull/2882
* style: correct two typos in comments by @kbkb628 in https://github.com/agentscope-ai/agentscope/pull/2836
* fix(formatter): respect xAI image input types by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2823
* fix(tool): clarify Windows asyncio subprocess error in LocalBackend by @lwylab in https://github.com/agentscope-ai/agentscope/pull/2837
* fix(tool): refresh the read cache after Edit and Write by @ydflow in https://github.com/agentscope-ai/agentscope/pull/2865
* fix(rag): preserve images in PowerPoint picture placeholders by @twei43846-afk in https://github.com/agentscope-ai/agentscope/pull/2851
* fix(tui): count changed lines that start with a diff marker by @lihongyuan99 in https://github.com/agentscope-ai/agentscope/pull/2830
* fix(pipeline): keep multimodal goals intact in verifier retry instructions by @ydflow in https://github.com/agentscope-ai/agentscope/pull/2860
* fix(formatter): preserve DeepSeek images and Moonshot videos by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2825
* feat(models): add MiniMax chat model support (M3 default) by @octo-patch in https://github.com/agentscope-ai/agentscope/pull/1764
* feat(pipeline): support leader-member delegation in a `TeamPipeline` class by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2764
* fix(model): enable image and video input for Kimi K2.7 Code models by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2890
* fix(tool): parse attached sed short-option values by @wangtaotaotao95 in https://github.com/agentscope-ai/agentscope/pull/2824
* fix(tool): stop git subcommands from passing the read-only fast path with destructive arguments by @ydflow in https://github.com/agentscope-ai/agentscope/pull/2883
* fix(workspace): return the registered client from add_mcp by @qbc2016 in https://github.com/agentscope-ai/agentscope/pull/2781
* fix(agent): interpolate current time into the compression prompt by @ydflow in https://github.com/agentscope-ai/agentscope/pull/2867
* fix(rag): keep text and NA-like values intact in ExcelParser by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2893
* feat(app): standard operating procedures at the service layer by @DavdGao in https://github.com/agentscope-ai/agentscope/pull/2617
* fix(app): guard parked inbox continuations by @014-code in https://github.com/agentscope-ai/agentscope/pull/2849

## New Contributors
* @Tsubaki-01 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2575
* @fszcd made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2611
* @L4XB made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2588
* @wangtaotaotao95 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2620
* @alanhuangyoo made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2613
* @harbinresearcher made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2629
* @code-code567 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2597
* @sxh313 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2721
* @Cryocell77 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2650
* @Terminator666666 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2419
* @Lesereingrape made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2754
* @lihongyuan99 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2751
* @Shy7777 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2783
* @yc2bgr8 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2811
* @dafyy321-pixel made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2770
* @ydflow made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2759
* @kyy-logs made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2884
* @zaher-m made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2882
* @kbkb628 made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2836
* @lwylab made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2837
* @twei43846-afk made their first contribution in https://github.com/agentscope-ai/agentscope/pull/2851

**Full Changelog**: https://github.com/agentscope-ai/agentscope/compare/v2.0.8...v2.0.9

---

> **Source** [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) · `v2.0.9` · 2026-09-28 · [upstream release](https://github.com/agentscope-ai/agentscope/releases/tag/v2.0.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
