---
title: "WeKnora v0.8.0"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.8.0"
version: "v0.8.0"
published: "2026-09-03"
type: "minor"
lang: "en"
summary: "fix(tenant): clear stale home tenant after member removal · Feat/issue 2401 auto tag · fix(knowledge): harden auto-tagging and let it respect manual tags · feat(auth): add self-service change password in user profile"
---

# WeKnora v0.8.0

## What's Changed
* fix(tenant): clear stale home tenant after member removal by @jiahao6635 in https://github.com/Tencent/WeKnora/pull/2589
* Feat/issue 2401 auto tag by @Syt3s in https://github.com/Tencent/WeKnora/pull/2548
* fix(knowledge): harden auto-tagging and let it respect manual tags by @lyingbug in https://github.com/Tencent/WeKnora/pull/2595
* feat(auth): add self-service change password in user profile by @jiahao6635 in https://github.com/Tencent/WeKnora/pull/2591
* fix(auth): harden self-service change password after #2591 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2596
* fix(query-understand): LLM 输出不可解析时应回退到原始查询输入 by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2592
* docs: fix 登陆 typo to 登录 by @jiahao6635 in https://github.com/Tencent/WeKnora/pull/2598
* feat(files): add message-scoped proxy for shared-agent chat images by @lyingbug in https://github.com/Tencent/WeKnora/pull/2605
* fix(vlm): use max_completion_tokens for GPT-5 / o-series vision models by @renezander030 in https://github.com/Tencent/WeKnora/pull/2614
* fix: pptx/ppt attachment parsing fails — missing parser engine + markitdown extras by @putcn in https://github.com/Tencent/WeKnora/pull/2621
* fix(security): harden outbound URL SSRF protection by @lyingbug in https://github.com/Tencent/WeKnora/pull/2626
* feat: add Metaso web search provider by @hiasky in https://github.com/Tencent/WeKnora/pull/2625
* feat: 邀请链接在 invite_only 模式下改为登录后加入空间 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2627
* feat(invitation): add auto-accept switch for inviting registered users by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2633
* fix(invitation): harden auto-accept follow-ups from code review by @lyingbug in https://github.com/Tencent/WeKnora/pull/2638
* fix(im): persist session mode configuration by @jacentsao in https://github.com/Tencent/WeKnora/pull/2629
* feat(agent): prefill default rerank model on agent creation by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2631
* fix(frontend): dismiss stale card popover on folder navigation by @hiasky in https://github.com/Tencent/WeKnora/pull/2624
* fix(mcp): preserve omitted service update fields by @jay3cx in https://github.com/Tencent/WeKnora/pull/2622
* fix(test): use resolvable URLs in MCP service update test by @lyingbug in https://github.com/Tencent/WeKnora/pull/2640
* fix(cli): preserve agent update flags in retry_argv by @jiahao6635 in https://github.com/Tencent/WeKnora/pull/2599
* refactor(handler): extract shared searchResultFromMap by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2610
* fix(config): 补齐 WEKNORA_TENANT_ENABLE_CROSS_TENANT_ACCESS 的 env 读取 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2594
* feat(yunzhijia): support thread sessions by @jacentsao in https://github.com/Tencent/WeKnora/pull/2630
* feat(sandbox) by @nullptr-error in https://github.com/Tencent/WeKnora/pull/2301
* fix(i18n): add common update success translations by @hanxiantao in https://github.com/Tencent/WeKnora/pull/2649
* feat(auth): add /auth/oidc/start endpoint for direct 302 OIDC login by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2647
* feat(sandbox): 沙箱后端改为按空间配置，并补齐 E2B 模板与检测诊断 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2651
* fix: 修复共享空间下拉列表无法滚动 by @WHUTcjh-2024 in https://github.com/Tencent/WeKnora/pull/2644
* fix(embedding): validate WeKnoraCloud response indexes by @pengpengyi92 in https://github.com/Tencent/WeKnora/pull/2646
* feat: add Exa WebSearch by @Syt3s in https://github.com/Tencent/WeKnora/pull/2617
* feat(sandbox): unify remote sandbox on E2B protocol with self-hosted support by @lyingbug in https://github.com/Tencent/WeKnora/pull/2655
* feat(knowledge): add document download action by @hanxiantao in https://github.com/Tencent/WeKnora/pull/2654
* feat(i18n): 前端默认语言支持经 DEFAULT_LOCALE 环境变量运行时配置 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2658
* fix(i18n): harden DEFAULT_LOCALE runtime config after #2658 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2660
* feat(sandbox): enhance logging for sandbox operations and error diagnostics by @lyingbug in https://github.com/Tencent/WeKnora/pull/2659
* fix(docreader): preserve vertically merged table cells by @Lion-Leporidae in https://github.com/Tencent/WeKnora/pull/2657
* fix(frontend): keep knowledge view controls visible by @hiasky in https://github.com/Tencent/WeKnora/pull/2661
* feat: allow updating API key knowledge base scope by @estongu in https://github.com/Tencent/WeKnora/pull/2607
* fix(wiki): set MaxTokens for generateWithTemplate LLM calls by @jiahao6635 in https://github.com/Tencent/WeKnora/pull/2608
* feat: paginate document chunks by @hiasky in https://github.com/Tencent/WeKnora/pull/2664
* fix(frontend): harden document chunk pagination state handling by @lyingbug in https://github.com/Tencent/WeKnora/pull/2665
* fix(docreader): avoid chart serialization during xlsx preprocessing by @jiahao6635 in https://github.com/Tencent/WeKnora/pull/2663
* feat(datasource): add Tencent IMA datasource by @chengjoey in https://github.com/Tencent/WeKnora/pull/2662
* fix(frontend): refine user profile change-password popup UX by @lyingbug in https://github.com/Tencent/WeKnora/pull/2670
* fix(ui): 统一剪贴板复制为公共方法，HTTP 环境回退 execCommand by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2668
* fix: restore FAQ batch actions by @ttommybot in https://github.com/Tencent/WeKnora/pull/2669
* fix(agent): shared knowledge bases render doc_count=0 in runtime_context by @ShadowSmallBaby in https://github.com/Tencent/WeKnora/pull/2564
* feat(im): process file attachments in QA by @jacentsao in https://github.com/Tencent/WeKnora/pull/2667
* feat(datasource): 支持 GitLab 数据源文档同步 by @Numblgw in https://github.com/Tencent/WeKnora/pull/2656
* feat(im): support reverse proxy for feishu websocket long connection by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/2550
* fix(datasource/gitlab): 修复项目路径编码与连接器单例缓存问题 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2673
* fix: support folder drag-and-drop upload with directory structure preserved by @wheatzone in https://github.com/Tencent/WeKnora/pull/2677
* fix: allow clearing optional model selections by @ttommybot in https://github.com/Tencent/WeKnora/pull/2675
* fix(data-analysis): 修复 Excel 表格摘要丢失样本数据 by @Numblgw in https://github.com/Tencent/WeKnora/pull/2682
* fix(chunking): preserve parent-child text child embeddings by @sandaogouchen in https://github.com/Tencent/WeKnora/pull/2680
* fix(dev): use IPv4 loopback for local services by @hanxiantao in https://github.com/Tencent/WeKnora/pull/2683
* feat(memory): add cross-session long-term memory by @lyingbug in https://github.com/Tencent/WeKnora/pull/2689
* 修复：同步 knowledge-search 的 Swagger 路由与实际接口 by @T3L000 in https://github.com/Tencent/WeKnora/pull/2691
* fix(docparser): preserve filename extension in MinerU multipart uploads by @oscarlius in https://github.com/Tencent/WeKnora/pull/2695
* ci: add golangci-lint workflow gating new PR code by @lyingbug in https://github.com/Tencent/WeKnora/pull/2696
* fix(datasource): perform real sync deletions scoped per data source  by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2690
* 修复：完善 API Playground SSE 终态处理 by @T3L000 in https://github.com/Tencent/WeKnora/pull/2697
* fix(chunk-merge): stop dropping content when contiguous chunks repeat text by @ChenRussell in https://github.com/Tencent/WeKnora/pull/2686
* fix: filter menus by deployment capabilities by @ttommybot in https://github.com/Tencent/WeKnora/pull/2674
* fix(chat): 修复对话时间轴的三处失真（占位行样式、历史丢步骤、兜底计数） by @lyingbug in https://github.com/Tencent/WeKnora/pull/2699
* 【Fix】修复docker-compose.yml中配置的postgres 安全检查问题 by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/2704
* feat(docparser): 引入 anydoc 引擎，在 Go 进程内解析 office 文档 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2702
* fix(docker): copy anydoc-go go.mod before go mod download by @lyingbug in https://github.com/Tencent/WeKnora/pull/2719
* fix(anydoc): 升级到 0.1.9，为恶意 PDF 的解析开销加上上界 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2720
* fix(docker): 默认在 app 镜像中链接 anydoc 解析引擎 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2721
* fix(build): Enable Docker BuildKit in build_images.sh by @hbh112233abc in https://github.com/Tencent/WeKnora/pull/2287
* docs: update website screenshot tracker by @hata333 in https://github.com/Tencent/WeKnora/pull/2735
* fix(chunk): sanitize context headers before persistence by @oscarlius in https://github.com/Tencent/WeKnora/pull/2701
* docs(cli): align retry guidance with retry_argv by @Lem0nTea2002 in https://github.com/Tencent/WeKnora/pull/2731
* fix(hybrid-search): guard MatchCount=0 truncating all results by @toy0116 in https://github.com/Tencent/WeKnora/pull/1156
* Fix/hybrid search match count normalization by @iuyo5678 in https://github.com/Tencent/WeKnora/pull/2750
* fix(i18n): restore tenantless onboarding copy by @koishi514-Z in https://github.com/Tencent/WeKnora/pull/2739
* fix: localize builtin agent cards when config is persisted in DB by @LHMQ878 in https://github.com/Tencent/WeKnora/pull/2710
* fix(retrieval): 分段中删除的图片不再被检索到 by @lawrence1912 in https://github.com/Tencent/WeKnora/pull/2730
* fix: navigate chat references to document folder by @hiasky in https://github.com/Tencent/WeKnora/pull/2754
* fix(migrations): 补齐 Lite 模式缺失的 SQLite 版本化迁移 (fixes #2158) by @icatw in https://github.com/Tencent/WeKnora/pull/2749
* fix(deps): Upgrade dingtalk-stream-sdk-go to fix the crash caused by sending on a closed channel by @jettjia in https://github.com/Tencent/WeKnora/pull/2727
* feat: support editing document summaries by @hiasky in https://github.com/Tencent/WeKnora/pull/2752
* ci: 按路径裁剪 PR checks，避免 anydoc 与无关模块 lint 误触发 by @lyingbug in https://github.com/Tencent/WeKnora/pull/2755
* feat(frontend): 选择VLLM模型时添加supports_vision判断 by @cainbit in https://github.com/Tencent/WeKnora/pull/2741
* fix(session): bound the auto-generated session title to fit the column by @hjxccc in https://github.com/Tencent/WeKnora/pull/2738
* fix(frontend): isolate markdown preview renderers by @jacentsao in https://github.com/Tencent/WeKnora/pull/2732
* perf(agent): make knowledge_search MMR selection incremental by @hjxccc in https://github.com/Tencent/WeKnora/pull/2737
* Docs/cli wire vocab sweep by @iuyo5678 in https://github.com/Tencent/WeKnora/pull/2748
* docs: fix URL-encoded slash in Trendshift badge alt text by @bilibili336396-prog in https://github.com/Tencent/WeKnora/pull/2757
* fix(wiki): stop housekeeping from force-failing documents with durable Wiki backlog by @hjxccc in https://github.com/Tencent/WeKnora/pull/2715
* feat(docreader): add XMind outline parsing by @guiyangyuan in https://github.com/Tencent/WeKnora/pull/2713
* feat(system-admin): add endpoint for creating users by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2722
* feat(dsh-weknora): DeepSeek Harness plugin exposing WeKnora retrieval tools by @lyingbug in https://github.com/Tencent/WeKnora/pull/2759
* ci(dsh-weknora): cache pinned dsh install to speed up e2e by @lyingbug in https://github.com/Tencent/WeKnora/pull/2760
* ci(dsh-weknora): restore e2e timeout for cold dsh cache by @lyingbug in https://github.com/Tencent/WeKnora/pull/2764
* fix(anydoc): rebuild truncated patched crate instead of failing cargo by @lyingbug in https://github.com/Tencent/WeKnora/pull/2766
* fix(datasource): 修复同步删除关闭状态无法保存的问题 by @Numblgw in https://github.com/Tencent/WeKnora/pull/2765
* feat(agent): report and attribute per-turn LLM token usage by @ochanism in https://github.com/Tencent/WeKnora/pull/2772
* fix(i18n): add missing common locale keys by @hanxiantao in https://github.com/Tencent/WeKnora/pull/2773
* feat(sandbox): replace one-shot docker run with session-scoped containers by @lyingbug in https://github.com/Tencent/WeKnora/pull/2769
* fix(handler): validate knowledge search pagination by @pengpengyi92 in https://github.com/Tencent/WeKnora/pull/2776
* fix(docreader): apply PDF image SMask so embedded figures are not all-black by @649111698 in https://github.com/Tencent/WeKnora/pull/2775
* fix(im): handle DingTalk rich text messages by @waterbang in https://github.com/Tencent/WeKnora/pull/2777
* feat(sandbox): add tenant skill snapshot infrastructure by @nullptr-error in https://github.com/Tencent/WeKnora/pull/2781
* docs: clarify Docker image release tags by @hiasky in https://github.com/Tencent/WeKnora/pull/2784
* feat(chat): display message timestamps by @Jonesxq in https://github.com/Tencent/WeKnora/pull/2762
* feat(sandbox): add tenant skill install and remove service layer by @nullptr-error in https://github.com/Tencent/WeKnora/pull/2783
* fix: stop markdown table regex catastrophic backtracking by @sufan721 in https://github.com/Tencent/WeKnora/pull/2770
* fix(chat): insert timestamps as conversation flow dividers by @lyingbug in https://github.com/Tencent/WeKnora/pull/2788
* fix(frontend): expose history and retrieval retention to smart-reasoning agents by @ochanism in https://github.com/Tencent/WeKnora/pull/2787
* feat(sandbox): expose tenant skill management over HTTP and in the console by @nullptr-error in https://github.com/Tencent/WeKnora/pull/2789
* ui(sandbox): rename settings to skill sandbox and fix skill install by @lyingbug in https://github.com/Tencent/WeKnora/pull/2792
* fix(sandbox): skip identical skill installs and prune old snapshots by @lyingbug in https://github.com/Tencent/WeKnora/pull/2791
* feat(sandbox): install skills from ClawHub, SkillHub, and git URLs by @lyingbug in https://github.com/Tencent/WeKnora/pull/2795
* fix(frontend): sync settings nav with a single section query by @lyingbug in https://github.com/Tencent/WeKnora/pull/2797
* ui(chat): polish generated-files surfaces and shell_exec cards by @lyingbug in https://github.com/Tencent/WeKnora/pull/2801
* fix(sandbox): advertise only image skills and unstick installs by @lyingbug in https://github.com/Tencent/WeKnora/pull/2800
* fix(sandbox): hide Cube skill snapshots from the template catalog by @lyingbug in https://github.com/Tencent/WeKnora/pull/2802
* feat(sandbox): browse installed skill files from settings by @lyingbug in https://github.com/Tencent/WeKnora/pull/2804
* ui(agent): merge skills and sandbox into one editor tab by @lyingbug in https://github.com/Tencent/WeKnora/pull/2806
* feat(sandbox): Docker skill snapshots, Cube DNS, and freeze configs after skills by @lyingbug in https://github.com/Tencent/WeKnora/pull/2805
* feat(api): honor resource_urls=public on hybrid-search by @lyingbug in https://github.com/Tencent/WeKnora/pull/2814
* feat(sandbox): remove the Local host-process backend by @lyingbug in https://github.com/Tencent/WeKnora/pull/2815
* ui(sandbox): explain who still holds a config by @lyingbug in https://github.com/Tencent/WeKnora/pull/2816
* ui(agent): unify skill naming and icon across editor and mentions by @lyingbug in https://github.com/Tencent/WeKnora/pull/2818
* fix(agent): keep compacted sandbox streams in persisted history by @lyingbug in https://github.com/Tencent/WeKnora/pull/2821
* feat(agent): preview skill artifacts and verify installs without running them by @lyingbug in https://github.com/Tencent/WeKnora/pull/2823
* test(sandbox): drop TEST-NET DNS fixture from Cube tests by @lyingbug in https://github.com/Tencent/WeKnora/pull/2830
* fix(agent): stop using the chat model to rerank knowledge search by @lyingbug in https://github.com/Tencent/WeKnora/pull/2831
* fix(sandbox): pin Docker sessions so skill artifacts get collected by @lyingbug in https://github.com/Tencent/WeKnora/pull/2834
* fix(i18n): 修复内置智能体名称与描述不随界面语言切换的问题 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/2828
* feat(sandbox): inject per-user and workspace skill env vars at execution by @nullptr-error in https://github.com/Tencent/WeKnora/pull/2833
* feat(chat): add a question outline for long overflowing sessions by @nullptr-error in https://github.com/Tencent/WeKnora/pull/2839
* fix(sandbox): keep skill env declarations and first-install Docker exec by @lyingbug in https://github.com/Tencent/WeKnora/pull/2842
* ui(chat): refine the question outline to a tighter Codex-like rail by @lyingbug in https://github.com/Tencent/WeKnora/pull/2845
* ui(skills): split the skill catalog out of the sandbox editor by @lyingbug in https://github.com/Tencent/WeKnora/pull/2847
* fix(agent): keep skill-script stdout on failure for the model and UI by @lyingbug in https://github.com/Tencent/WeKnora/pull/2853
* feat(skills): tenant catalog with install-per-sandbox by @lyingbug in https://github.com/Tencent/WeKnora/pull/2852
* fix(im): handle WeCom 32-byte PKCS7 padding by @Roovelrz in https://github.com/Tencent/WeKnora/pull/2848
* ui(chat): show skill names on tool cards and render sandbox file lists by @lyingbug in https://github.com/Tencent/WeKnora/pull/2854
* fix(wiki): prevent concurrent duplicate page identities by @JYao-Chen in https://github.com/Tencent/WeKnora/pull/2850
* fix(agent): stage sandbox attachments and expose file tools by @nullptr-error in https://github.com/Tencent/WeKnora/pull/2856
* feat(agent): write workspace scripts and run them with installed skills by @lyingbug in https://github.com/Tencent/WeKnora/pull/2865
* fix(skills): map ClawHub @owner/slug to slug plus ownerHandle by @lyingbug in https://github.com/Tencent/WeKnora/pull/2866
* feat(agent): keep max completion tokens as default or a custom cap by @lyingbug in https://github.com/Tencent/WeKnora/pull/2867
* fix(skills): verify installs by loadability and repair missing deps by @lyingbug in https://github.com/Tencent/WeKnora/pull/2889
* fix(markdown): sanitize invalid UTF-8 and NUL bytes by @Jonesxq in https://github.com/Tencent/WeKnora/pull/2870
* fix(s3): disable optional checksums for compatible endpoints by @Jonesxq in https://github.com/Tencent/WeKnora/pull/2872
* fix(wiki): fall back to a knowledge QA model by @Jonesxq in https://github.com/Tencent/WeKnora/pull/2871
* fix: reconcile direct invites after share-link join by @hiasky in https://github.com/Tencent/WeKnora/pull/2864
* fix(frontend): keep streamed Mermaid diagrams from reverting to code by @lyingbug in https://github.com/Tencent/WeKnora/pull/2890
* fix(docreader): fail URL scrape instead of indexing error text by @lyingbug in https://github.com/Tencent/WeKnora/pull/2891
* fix(parser): default ppt/pptx to markitdown when no engine rules by @lyingbug in https://github.com/Tencent/WeKnora/pull/2892
* docs: link dsh-weknora to its npm package page by @lyingbug in https://github.com/Tencent/WeKnora/pull/2893
* fix(dsh-weknora): show knowledge-base figures in plugin answers (#2829) by @lyingbug in https://github.com/Tencent/WeKnora/pull/2895
* fix(docreader): handle Header object when stripping mhtml header by @ResistanceTo in https://github.com/Tencent/WeKnora/pull/2902
* fix(docreader): keep DOCX table content in parsed text by @LuckVd in https://github.com/Tencent/WeKnora/pull/2898
* fix(observability): nest follow-up and sandbox spans under the chat trace by @lyingbug in https://github.com/Tencent/WeKnora/pull/2904
* fix(frontend): tighten skill catalog cards and add an avatar shortcut by @lyingbug in https://github.com/Tencent/WeKnora/pull/2910
* fix(frontend): clarify agent skill picker and open install progress in-place by @lyingbug in https://github.com/Tencent/WeKnora/pull/2928
* fix(frontend): use latest system setting value by @cainbit in https://github.com/Tencent/WeKnora/pull/2926
* fix: verify OIDC id_token signature via JWKS (Fixes #2799) by @chiliec in https://github.com/Tencent/WeKnora/pull/2927
* feat: support complex password by @cainbit in https://github.com/Tencent/WeKnora/pull/2929
* feat: add LiteLLM as a model provider by @prodmanpd in https://github.com/Tencent/WeKnora/pull/2923
* fix(im/feishu): show progress card in full output mode by @LeonPure in https://github.com/Tencent/WeKnora/pull/2909
* fix(feishu): finalize streaming card state by @gongwen in https://github.com/Tencent/WeKnora/pull/2911
* fix: share IP classification between SSRF and sandbox URL guards by @lyingbug in https://github.com/Tencent/WeKnora/pull/2935
* feat: require opt-in for the Docker sandbox backend by @lyingbug in https://github.com/Tencent/WeKnora/pull/2936
* fix(auth): record last-active-tenant preference on SwitchTenant by @mdrkrg in https://github.com/Tencent/WeKnora/pull/2922
* fix(sandbox): grant appuser the docker.sock group inside the app container by @lyingbug in https://github.com/Tencent/WeKnora/pull/2939
* chore(deps): bump the cli-deps group in /cli with 2 updates by @dependabot[bot] in https://github.com/Tencent/WeKnora/pull/2947
* fix(agent): recover tool arguments with a stray trailing fragment by @lyingbug in https://github.com/Tencent/WeKnora/pull/2952
* perf(skills): batch install verification and live installer progress by @nullptr-error in https://github.com/Tencent/WeKnora/pull/2960
* fix(skills): count GitHub skill subtrees and polish catalog install UI by @lyingbug in https://github.com/Tencent/WeKnora/pull/2948
* fix(skill): @mention 不再收窄技能白名单 by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/2954
* fix(frontend): include nginx-api-proxy.conf in the UI image build by @lyingbug in https://github.com/Tencent/WeKnora/pull/2986
* fix(skill): 解析 stringified JSON 数组形式的 args by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/2955
* feat(agent): tell session agents their workspace and scope the sandbox tools to it by @lyingbug in https://github.com/Tencent/WeKnora/pull/2988
* fix(skills): install ClawHub skills.sh catalog pages via the install resolver by @lyingbug in https://github.com/Tencent/WeKnora/pull/2941
* fix(models): show usage details when deletion is blocked by @leon4z in https://github.com/Tencent/WeKnora/pull/2975
* feat(agent): keep long sandbox turns from truncating, overflowing, or rewriting files by @lyingbug in https://github.com/Tencent/WeKnora/pull/2994
* feat(agent): stream live +/- progress for sandbox write and edit by @lyingbug in https://github.com/Tencent/WeKnora/pull/3000
* feat(chat): keep prompt prefixes stable and send provider cache markers by @lyingbug in https://github.com/Tencent/WeKnora/pull/3002
* feat(sandbox): add tenant-configurable network policy by @nullptr-error in https://github.com/Tencent/WeKnora/pull/2995
* fix(sandbox): hide inbound radios and let Cube L7 rules be reordered by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3007
* chore: prepare v0.8.0 release by @lyingbug in https://github.com/Tencent/WeKnora/pull/3009

## New Contributors
* @Syt3s made their first contribution in https://github.com/Tencent/WeKnora/pull/2548
* @putcn made their first contribution in https://github.com/Tencent/WeKnora/pull/2621
* @jay3cx made their first contribution in https://github.com/Tencent/WeKnora/pull/2622
* @nullptr-error made their first contribution in https://github.com/Tencent/WeKnora/pull/2301
* @hanxiantao made their first contribution in https://github.com/Tencent/WeKnora/pull/2649
* @Lion-Leporidae made their first contribution in https://github.com/Tencent/WeKnora/pull/2657
* @estongu made their first contribution in https://github.com/Tencent/WeKnora/pull/2607
* @Numblgw made their first contribution in https://github.com/Tencent/WeKnora/pull/2656
* @wheatzone made their first contribution in https://github.com/Tencent/WeKnora/pull/2677
* @sandaogouchen made their first contribution in https://github.com/Tencent/WeKnora/pull/2680
* @T3L000 made their first contribution in https://github.com/Tencent/WeKnora/pull/2691
* @hata333 made their first contribution in https://github.com/Tencent/WeKnora/pull/2735
* @Lem0nTea2002 made their first contribution in https://github.com/Tencent/WeKnora/pull/2731
* @iuyo5678 made their first contribution in https://github.com/Tencent/WeKnora/pull/2750
* @LHMQ878 made their first contribution in https://github.com/Tencent/WeKnora/pull/2710
* @icatw made their first contribution in https://github.com/Tencent/WeKnora/pull/2749
* @jettjia made their first contribution in https://github.com/Tencent/WeKnora/pull/2727
* @cainbit made their first contribution in https://github.com/Tencent/WeKnora/pull/2741
* @hjxccc made their first contribution in https://github.com/Tencent/WeKnora/pull/2738
* @bilibili336396-prog made their first contribution in https://github.com/Tencent/WeKnora/pull/2757
* @guiyangyuan made their first contribution in https://github.com/Tencent/WeKnora/pull/2713
* @649111698 made their first contribution in https://github.com/Tencent/WeKnora/pull/2775
* @waterbang made their first contribution in https://github.com/Tencent/WeKnora/pull/2777
* @Jonesxq made their first contribution in https://github.com/Tencent/WeKnora/pull/2762
* @sufan721 made their first contribution in https://github.com/Tencent/WeKnora/pull/2770
* @Roovelrz made their first contribution in https://github.com/Tencent/WeKnora/pull/2848
* @JYao-Chen made their first contribution in https://github.com/Tencent/WeKnora/pull/2850
* @ResistanceTo made their first contribution in https://github.com/Tencent/WeKnora/pull/2902
* @LuckVd made their first contribution in https://github.com/Tencent/WeKnora/pull/2898
* @chiliec made their first contribution in https://github.com/Tencent/WeKnora/pull/2927
* @prodmanpd made their first contribution in https://github.com/Tencent/WeKnora/pull/2923
* @LeonPure made their first contribution in https://github.com/Tencent/WeKnora/pull/2909
* @gongwen made their first contribution in https://github.com/Tencent/WeKnora/pull/2911
* @leon4z made their first contribution in https://github.com/Tencent/WeKnora/pull/2975

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.7.2...v0.8.0

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.8.0` · 2026-09-03 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
