---
title: "WeKnora v0.8.3"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.8.3"
version: "v0.8.3"
published: "2026-10-14"
type: "patch"
lang: "en"
summary: "fix(website-docs): serve everything but the homepage from /docs/ · test(website-docs): update integration test for the v0.8.2 header and release gallery · fix(session): keep auto-generated titles plain text"
---

# WeKnora v0.8.3

## What's Changed
* fix(website-docs): serve everything but the homepage from /docs/ by @lyingbug in https://github.com/Tencent/WeKnora/pull/3664
* test(website-docs): update integration test for the v0.8.2 header and release gallery by @lyingbug in https://github.com/Tencent/WeKnora/pull/3665
* fix(session): keep auto-generated titles plain text by @lyingbug in https://github.com/Tencent/WeKnora/pull/3633
* feat(models): add system admin model catalog console by @lyingbug in https://github.com/Tencent/WeKnora/pull/3662
* fix(ui): restore inner padding on form popups by @vinhchuquang in https://github.com/Tencent/WeKnora/pull/3673
* fix(browser): let shared-space agents drive the caller's local browser by @lyingbug in https://github.com/Tencent/WeKnora/pull/3670
* docs: restructure the English and Chinese READMEs by @lyingbug in https://github.com/Tencent/WeKnora/pull/3676
* docs(readme): website-matched design for all four READMEs by @lyingbug in https://github.com/Tencent/WeKnora/pull/3679
* fix(retriever/es): keep vectors and enabled state on CopyIndices by @lyingbug in https://github.com/Tencent/WeKnora/pull/3678
* fix(embed): warn at startup when no signing key is configured by @lyingbug in https://github.com/Tencent/WeKnora/pull/3680
* feat(docparser): support MinerU 4.0 V1 API for self-hosted MinerU by @lyingbug in https://github.com/Tencent/WeKnora/pull/3671
* fix(frontend): link docs to the public docs site instead of GitHub by @lyingbug in https://github.com/Tencent/WeKnora/pull/3674
* feat(retrieval): unify rerank across search APIs and expose diagnostics by @lyingbug in https://github.com/Tencent/WeKnora/pull/3675
* fix(desktop): pair the Lite browser against the local API listener by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3677
* fix(rss): reject oversized responses instead of accepting truncated content by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3658
* docs: new intro video, with its source by @lyingbug in https://github.com/Tencent/WeKnora/pull/3684
* feat(lite): install and run skills on the host by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3661
* docs(readme): surface agent tools in the overview and condense feature tables by @lyingbug in https://github.com/Tencent/WeKnora/pull/3688
* fix(retrieval): fix recall correctness, score scales, cost and agent tools by @lyingbug in https://github.com/Tencent/WeKnora/pull/3687
* feat(gallery): add an image gallery tab with schema-driven filters by @tayadwx in https://github.com/Tencent/WeKnora/pull/3694
* feat(gallery): rework the gallery toolbar, header tabs and image viewer by @lyingbug in https://github.com/Tencent/WeKnora/pull/3703
* feat(chat): open cited documents at the cited passage by @lyingbug in https://github.com/Tencent/WeKnora/pull/3700
* fix(knowledge): stop parses from getting stuck in processing or finalizing by @lyingbug in https://github.com/Tencent/WeKnora/pull/3696
* docs(readme): swap in the new intro video by @lyingbug in https://github.com/Tencent/WeKnora/pull/3685
* fix: harden agent tool execution, stream completion and LLM retries by @lyingbug in https://github.com/Tencent/WeKnora/pull/3706
* fix(docparser): make the MinerU parse timeouts configurable by @lyingbug in https://github.com/Tencent/WeKnora/pull/3707
* fix(weaviate): accept a class another worker created first by @po-et in https://github.com/Tencent/WeKnora/pull/3689
* fix(notion): abort incremental sync when resource discovery fails by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3682
* fix(feishu): stop Wiki pagination on repeated page tokens by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/3645
* fix(agent): 合并相邻 assistant 消息时保留 tool_calls，避免孤儿 tool 消息导致整轮 400 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3574
* fix(files): accept canonical storage:// paths in bare provider services by @dzc-bit in https://github.com/Tencent/WeKnora/pull/3166
* fix(im): handle unresolved Feishu resource images by @Jonesxq in https://github.com/Tencent/WeKnora/pull/2761
* docs: drop references to source files that no longer exist by @Jinzhengxu in https://github.com/Tencent/WeKnora/pull/3631
* docs(dev): clarify Swagger access in Docker Compose by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3620
* fix(container): propagate host project lookup errors by @dvd233 in https://github.com/Tencent/WeKnora/pull/3611
* fix(helm): pin application images to chart version by @dafyy321-pixel in https://github.com/Tencent/WeKnora/pull/3669
* fix(frontend): mount the settings modal only once on /platform/settings by @lyingbug in https://github.com/Tencent/WeKnora/pull/3717
* refactor(frontend): drop TTL resource caches and remove duplicate startup requests by @lyingbug in https://github.com/Tencent/WeKnora/pull/3562
* feat(wiki): 增加跨知识库 Wiki 搜索 POST /wiki-search by @MercuialC in https://github.com/Tencent/WeKnora/pull/3535
* fix(models): stop advertising graded thinking levels the wire format drops by @DerrickLinus in https://github.com/Tencent/WeKnora/pull/3552
* fix(datasource): validate cron schedules and persist manual-only mode by @Perfecto23 in https://github.com/Tencent/WeKnora/pull/3653
* fix(knowledge): reject invalid JSON uploads before async parse by @xiaojunxiang2023 in https://github.com/Tencent/WeKnora/pull/3360
* fix(client): accumulate multiline SSE data by @quan020406 in https://github.com/Tencent/WeKnora/pull/2122
* feat(confluence): add directory sync and private image assets by @jacentsao in https://github.com/Tencent/WeKnora/pull/3319
* fix(docreader): sanitize non-conforming styles.xml fills before openpyxl loads (#3637) by @vicfei in https://github.com/Tencent/WeKnora/pull/3638
* fix(docreader): drop data validation ranges openpyxl cannot parse instead of failing the sheet (#3599) by @po-et in https://github.com/Tencent/WeKnora/pull/3608
* feat(datasource/yuque): preserve TOC folder hierarchy for synced documents by @RichardChengshaojin in https://github.com/Tencent/WeKnora/pull/3476
* fix(frontend): initialize chat citation popover after botmsg props by @lyingbug in https://github.com/Tencent/WeKnora/pull/3732
* feat(plugin): plugin system foundation — builtin plugins, config schemas and workspace switches by @lyingbug in https://github.com/Tencent/WeKnora/pull/3711
* feat(plugin): install declarative plugins — MCP servers, skills and model vendors by @lyingbug in https://github.com/Tencent/WeKnora/pull/3716
* feat(plugin): code plugins — extension protocol, Go SDK, plugin host, web search and data source adapters by @lyingbug in https://github.com/Tencent/WeKnora/pull/3720
* feat(plugin): Host API with a key-value store, and document parsers from plugins by @lyingbug in https://github.com/Tencent/WeKnora/pull/3721
* feat(plugin): remote runtime, Python SDK and python host plugins (P2 batch 3) by @lyingbug in https://github.com/Tencent/WeKnora/pull/3724
* feat(plugin): standalone plugin hosts with Redis discovery (P2 batch 4) by @lyingbug in https://github.com/Tencent/WeKnora/pull/3725
* feat(plugin): sandboxed plugin pages and the @weknora/plugin-ui bridge (P2 batch 5) by @lyingbug in https://github.com/Tencent/WeKnora/pull/3727
* feat(plugin): event delivery and webhooks for plugins (P2 batch 6) by @lyingbug in https://github.com/Tencent/WeKnora/pull/3728
* feat(plugin): dynamic form options, OAuth connections and resource limits (P2 batch 7) by @lyingbug in https://github.com/Tencent/WeKnora/pull/3729
* feat(examples): Jira Cloud plugin with OAuth, dynamic options and a skill by @lyingbug in https://github.com/Tencent/WeKnora/pull/3730
* feat(plugin): agent tools served by plugins, with result views (P2 batch 8) by @lyingbug in https://github.com/Tencent/WeKnora/pull/3733
* revert: take the plugin system back out of main by @lyingbug in https://github.com/Tencent/WeKnora/pull/3735
* fix(dev): propagate dev.sh exit status and pull MinIO from pgsty/minio by @lyingbug in https://github.com/Tencent/WeKnora/pull/3738
* fix(chat): drop stale minimap-target class binding by @lyingbug in https://github.com/Tencent/WeKnora/pull/3754
* fix(citations): 修复原文定位、高亮范围与 DocReader 启动失败 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3794
* test(wiki): 表格夹具改用合成数据 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3795
* fix(faq): actually clean FAQ entry payloads before validation and storage by @VictorMaznyuk in https://github.com/Tencent/WeKnora/pull/3749
* test(skills): wait for the host install to release its lock before asserting by @VictorMaznyuk in https://github.com/Tencent/WeKnora/pull/3799
* docs: extract active tenant ID in the API quickstart by @kwsYegar in https://github.com/Tencent/WeKnora/pull/3719
* fix(frontend): label host-sandbox skill secret cards like the sandbox cards by @VictorMaznyuk in https://github.com/Tencent/WeKnora/pull/3736
* fix(chat): clear stale KB scope on session restore by @bigdu332 in https://github.com/Tencent/WeKnora/pull/3801
* fix: skip table-summary tasks for missing documents by @Perfecto23 in https://github.com/Tencent/WeKnora/pull/3742
* fix: reject empty table-summary model responses by @Perfecto23 in https://github.com/Tencent/WeKnora/pull/3740
* fix(sandbox): pass desktop slot timing to the renew goroutine by @VictorMaznyuk in https://github.com/Tencent/WeKnora/pull/3744
* fix(wiki): fan out follow-up triggers so backlogs drain at ingest_max_inflight by @BaiMoHan in https://github.com/Tencent/WeKnora/pull/3726
* fix(server): run ResourceCleaner on signal shutdown instead of racing Fatalf exit by @vicfei in https://github.com/Tencent/WeKnora/pull/3804
* fix(datasource/dingtalk): 跳过不再静默，展开叶子不再报错 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3784
* fix(datasource/dingtalk): 块级渲染不再静默丢内容（列表按线上真实形状渲染 + 未建模块类型可见） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3822
* fix(gitlab): compare snapshots directly during incremental sync by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3815
* fix(feishu): 云盘分页补上 #3645 给 wiki 加的重复 page token 防护 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3770
* fix(notion): replace stale content when pages are cleared by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3756
* fix(rss): retry full-text resolution after fallback by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3713
* fix(models): keep Retry-After on HTTPError and honour it in agent LLM retries by @VictorMaznyuk in https://github.com/Tencent/WeKnora/pull/3737
* fix(compaction): 流因取消而关闭时不得当成空摘要成功返回 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3772
* fix(repository): 关键词 LIKE/ILIKE 检索补显式 ESCAPE，修复 Lite 上静默漏结果 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3761
* test(weaviate): 消除并发建表用例的随机失败（假服务器在 barrier 之后才采样 exists） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3759
* fix(embed): 开启 Host context 后点击追问建议不再返回 400 by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3850
* fix(frontend): normalize style guard paths by @dajiaohuang in https://github.com/Tencent/WeKnora/pull/3860
* fix(docs): spawn nested npm through Node on Windows by @dajiaohuang in https://github.com/Tencent/WeKnora/pull/3858
* fix(frontend): 修复复制模型时模型名称被改写的问题 by @lizijing98 in https://github.com/Tencent/WeKnora/pull/3830
* feat(auth): 新增仅限邀请注册档位 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3900
* fix(sandbox): build real arm64 sandbox images and ship arm64 Cube variants by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3897
* docs(api): 补充模型复制接口说明 by @lizijing98 in https://github.com/Tencent/WeKnora/pull/3894
* fix(auth): 登录时 token 落库失败不再被忽略 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3892
* fix(ima): 笔记正文被清空后不再残留旧内容 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3888
* fix(gitlab): 仓库文件下载补体积上限，超限报错而不是无界读入 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3887
* feat(docparser): upgrade AnyDoc to 0.2.4 and parse assets once by @lyingbug in https://github.com/Tencent/WeKnora/pull/3904
* fix(embed): 内嵌网页只传图片不输入文字时不再返回 400 by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3866
* fix(notion): 查询撞厂商上限被截断时不再静默，截断轮次不下发删除 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3845
* fix(dataset): use supported default QA model by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/3965
* fix(sqlite): 检索后端批量更新索引副本失败不再吞掉错误 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3768
* fix(sqlite): 索引行写入失败不再被丢弃，BatchSave 回滚而不是留下「主行在、索引行不在」 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3843
* fix(retriever/es): _bulk 的 per-item 失败不再被吞，全部被拒时 BatchSave 返回错误 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3842
* fix(retriever): Qdrant/Milvus 关键词检索整批失败返回 error，不再当成「没有匹配」 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3847
* fix(milvus): CopyIndices 按源 chunk ID 分批读，不再用 offset 窗口 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3883
* fix(agent): query_knowledge_graph 的截断对模型与界面可见 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3885
* fix: use consistent qdrant env settings by @Goodnight77 in https://github.com/Tencent/WeKnora/pull/3960
* fix(milvus): validate connections and preserve gRPC resolver defaults by @TaylorChen in https://github.com/Tencent/WeKnora/pull/3654
* fix(graph): preserve relationship direction and document provenance by @knqiufan in https://github.com/Tencent/WeKnora/pull/3950
* fix(faq): preserve chunk content and index state during clone status sync by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3993
* fix: keep failed data-analysis table loads retryable by @Perfecto23 in https://github.com/Tencent/WeKnora/pull/3745
* fix(storage): use virtual-hosted addressing for Tencent COS through the S3 driver by @ankit373 in https://github.com/Tencent/WeKnora/pull/3722
* fix(summary): 坏 JSON 不再冒充文档摘要（截断/畸形 JSON 走失败路径，纯文本兜底保留） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3769
* fix(chunker): preserve source offsets for table child chunks by @kwsYegar in https://github.com/Tencent/WeKnora/pull/3969
* fix(chunker): count an escaped pipe as cell text when matching table widths by @L4XB in https://github.com/Tencent/WeKnora/pull/3979
* fix(yuque): don't acknowledge failed detail fetches in the incremental cursor by @LuckVd in https://github.com/Tencent/WeKnora/pull/3702
* fix(feishu): 多维表格字段分页补重复 page_token 防护与条数上限 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3840
* fix(gitlab): 分页循环补重复页防护与跳数上限 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3841
* fix(ima): 三处游标分页补重复游标防护与跳数上限 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3889
* fix(docreader): read EPUB chapters in spine order by @L4XB in https://github.com/Tencent/WeKnora/pull/3977
* fix(docparser): anydoc 内嵌 EMF/WMF 图片的扩展名与 Rust 序列化器对齐，不再静默丢图 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3938
* fix(models): honor OpenRouter native thinking for legacy defaults by @tsumon in https://github.com/Tencent/WeKnora/pull/3807
* fix(agent): preserve SQL literals during data analysis column reconciliation by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3812
* fix(agent): validate tool string lengths by Unicode code points by @icearia0219 in https://github.com/Tencent/WeKnora/pull/3937
* fix(agent): reject incomplete compaction summaries before checkpointing by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3994
* fix(agent): 子 goroutine 上的 panic 不再杀死进程（MCP 预热 / 检索扇出 / 看门狗） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3846
* fix(chat): clear stale file and tool selections on session restore by @Linxiushen in https://github.com/Tencent/WeKnora/pull/3802
* fix(mcp): keep the client secret from dynamic client registration by @po-et in https://github.com/Tencent/WeKnora/pull/3763
* fix(mcp): reconnect after the server forgets the session by @po-et in https://github.com/Tencent/WeKnora/pull/3765
* fix(mcp): pass embedded resources in tool results to the agent by @po-et in https://github.com/Tencent/WeKnora/pull/3766
* fix(mcp): include shared knowledge bases in endpoint scope by @dajiaohuang in https://github.com/Tencent/WeKnora/pull/3848
* fix(mcp): close legacy chat responses on HTTP errors by @KennyMcSimpson in https://github.com/Tencent/WeKnora/pull/3930
* fix(im/wecom): preserve image in mixed messages with text captions by @loganv in https://github.com/Tencent/WeKnora/pull/3901
* fix(knowledge): retry document processing after transient indexing failures by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3915
* fix(knowledge): close spans left open on terminal rows and superseded attempts by @asmh1989 in https://github.com/Tencent/WeKnora/pull/3855
* fix(wiki): preserve pending work when source lookups fail by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/3715
* fix(wiki): RebuildLinks 写失败不再静默，接口如实返回错误 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3884
* chore(deps): bump the cli-deps group in /cli with 2 updates by @dependabot[bot] in https://github.com/Tencent/WeKnora/pull/3920
* fix(docs): make `make docs` reproduce the committed Swagger again by @VictorMaznyuk in https://github.com/Tencent/WeKnora/pull/3751
* feat(ui): add search to Skills and MCP toolbox lists by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/3731
* fix(cli): propagate paginated response read errors by @dvd233 in https://github.com/Tencent/WeKnora/pull/3983
* fix(cli): render paginated API results in text mode by @dvd233 in https://github.com/Tencent/WeKnora/pull/3984
* fix(client): make multipart uploads replayable by @LeonSGP43 in https://github.com/Tencent/WeKnora/pull/3989
* fix(cli): apply list limits after filtering and sorting by @LeonSGP43 in https://github.com/Tencent/WeKnora/pull/3990
* fix(cli): preserve integer precision in jq output by @LeonSGP43 in https://github.com/Tencent/WeKnora/pull/3991
* fix(cli): classify wrapped SDK HTTP errors correctly by @LeonSGP43 in https://github.com/Tencent/WeKnora/pull/3992
* fix(client): accept optional spaces in SSE event fields by @fhgffy in https://github.com/Tencent/WeKnora/pull/3975
* fix(skills): skip vendored dep trees in install verification script enumeration by @vicfei in https://github.com/Tencent/WeKnora/pull/3943
* fix(sandbox): reclassify exec races with the idle sweep as NotFound so rebinding heals by @vicfei in https://github.com/Tencent/WeKnora/pull/3980
* fix(asynqdl): truncate dead-letter errors on a rune boundary by @kevin9327 in https://github.com/Tencent/WeKnora/pull/3964
* fix(middleware): stop buffering whole request bodies in the access log by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/3927
* fix(notion): 超过 block 上限截断时补 Warn，避免内容与子页面静默缺失 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3771
* fix(notion): paginatePages 与 GetBlockChildrenFlat 补重复游标防护与页数上限 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3890
* fix(docreader): keep the space held by a whitespace-only inline element by @L4XB in https://github.com/Tencent/WeKnora/pull/3978
* fix(data-analysis): skip style-only worksheets before DuckDB loading by @Perfecto23 in https://github.com/Tencent/WeKnora/pull/3660
* fix(frontend): render single tilde literally instead of GFM strikethrough by @MLYoshi in https://github.com/Tencent/WeKnora/pull/3963
* fix(qdrant): CopyIndices 用服务端返回的 next_page_offset 翻页，不再按页尾 id 回填 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3882
* fix(dataset): allow selecting the QA answer model by @LingYi-Liang in https://github.com/Tencent/WeKnora/pull/3944
* fix(cli): preserve directory structure in doc upload --recursive by @skywolf123 in https://github.com/Tencent/WeKnora/pull/3753
* fix(multimodal): bound remote image downloads by the file size limit by @SEVEN-us in https://github.com/Tencent/WeKnora/pull/3906
* fix(knowledge): delete written chunks when the storage quota check fails by @huiq777 in https://github.com/Tencent/WeKnora/pull/3656
* fix(agent): preserve untouched numeric tool arguments during casting by @icearia0219 in https://github.com/Tencent/WeKnora/pull/3936
* fix(frontend): keep target="_blank" on sanitized markdown links by @ruanhaiqiang in https://github.com/Tencent/WeKnora/pull/3818
* fix(datasource): 语雀/Notion/IMA/飞书连接器 API 响应体补体积上限 by @yetuge in https://github.com/Tencent/WeKnora/pull/3985
* fix(model): treat 400 as reachable in chat connection test again by @KoulLife in https://github.com/Tencent/WeKnora/pull/3929
* fix(docparser): 云解析超时改为跟随既有配置，不再硬编码 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3891
* feat(rerank): support Hugging Face TEI protocol by @bigdu332 in https://github.com/Tencent/WeKnora/pull/3956
* fix(rss): refresh titles and source links when article text is unchanged by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3824
* fix(docreader): preserve PPTX fallback image associations by @LingYi-Liang in https://github.com/Tencent/WeKnora/pull/3973
* fix(kb): let the update API set vlm_config by @5quan in https://github.com/Tencent/WeKnora/pull/3704
* fix(chat_pipeline): treat non-JSON model refusals as skipped graph extraction by @LuckVd in https://github.com/Tencent/WeKnora/pull/3606
* fix(frontend): avoid false unsaved changes warnings by @lyingbug in https://github.com/Tencent/WeKnora/pull/4019
* fix(datasource/dingtalk): Validate 不再因为某个工作区读不到就整库判失败 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3782
* feat(datasource): add Seafile data source connector by @Zaqqmm in https://github.com/Tencent/WeKnora/pull/3616
* feat(i18n): add Traditional Chinese (zh-TW) locale support by @junhao-ye in https://github.com/Tencent/WeKnora/pull/3916
* fix(i18n): add the zh-TW Seafile strings missing after #3616 and #3916 by @lyingbug in https://github.com/Tencent/WeKnora/pull/4027
* fix(chat): restore citation source navigation and soften highlights by @lyingbug in https://github.com/Tencent/WeKnora/pull/4026
* docs(models): state which rerank limits split requests and which fail the call by @lyingbug in https://github.com/Tencent/WeKnora/pull/4033
* fix(models): emit explicit empty content for assistant tool-call turns by @LuckVd in https://github.com/Tencent/WeKnora/pull/3605
* feat(rerank): support Pinecone Inference protocol by @bigdu332 in https://github.com/Tencent/WeKnora/pull/3957
* docs: count 29 built-in model vendors and list Hugging Face TEI and Pinecone by @lyingbug in https://github.com/Tencent/WeKnora/pull/4048
* feat: index and recall images with multimodal embedding models by @lyingbug in https://github.com/Tencent/WeKnora/pull/3683
* fix(settings): improve modal sizing and integration page layout by @lyingbug in https://github.com/Tencent/WeKnora/pull/4052
* fix(chunker): respect Markdown fences during heading detection by @Guo-Yixin in https://github.com/Tencent/WeKnora/pull/3952
* fix(agent): compare tool enum values without string coercion by @icearia0219 in https://github.com/Tencent/WeKnora/pull/3948
* fix(notion): preserve sync cursor when page block fetching fails by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3693
* fix(weaviate): CopyIndices 补游标防护，并修掉 GraphQL 报错时的 panic by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3881
* fix(im): retry Yunzhijia attachment downloads on timeout by @jacentsao in https://github.com/Tencent/WeKnora/pull/3809
* fix(wiki): resolve titles for unloaded backlinks by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/3931
* fix(chat): 在模型上下文中标注 FILTER_TOP_K 的子集截断，避免把前 N 条当作全集作答 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3758
* fix(wiki): 唯一写出口 UpdatePage 拦住丢表格行的机器重写（agent 整页写入不再静默改短页面） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3793
* feat(datasource/dingtalk): 摄取钉钉"上传文件"（docx/pptx/xlsx/pdf） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3786
* fix(session): allow tenant admins to manage channel sessions by @helloxjade in https://github.com/Tencent/WeKnora/pull/3939
* fix(docreader): resolve EPUB images relative to their chapters by @SuperSgdk in https://github.com/Tencent/WeKnora/pull/3924
* fix(mcp): report advertised directory failures in connection tests by @helloxjade in https://github.com/Tencent/WeKnora/pull/3905
* fix(knowledge): claim cloned and released document images in the resource catalog by @tayadwx in https://github.com/Tencent/WeKnora/pull/3752
* feat: judge image hits by their image in rerank and show them to vision models by @lyingbug in https://github.com/Tencent/WeKnora/pull/4013
* fix(sandbox): omit env overrides when creating Aliyun E2B sandboxes from snapshots by @nullptr-error in https://github.com/Tencent/WeKnora/pull/4054
* feat: 支持构建时配置 app 与 docreader 下载镜像源 by @lizijing98 in https://github.com/Tencent/WeKnora/pull/4073
* fix(websearch): return results for non-webpage Metaso scopes by @jdzhang1221 in https://github.com/Tencent/WeKnora/pull/4010
* fix(agent): align web_search count limit with the configured maximum by @jdzhang1221 in https://github.com/Tencent/WeKnora/pull/4011
* fix(models): align configuration and multimodal embedding workflows by @lyingbug in https://github.com/Tencent/WeKnora/pull/4080
* fix(sandbox): treat E2B in_progress template builds as building by @lyingbug in https://github.com/Tencent/WeKnora/pull/4108
* fix(frontend): follow configured upload limit in hints by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/4110
* fix(docker): install CA certificates before the browserskill mirror swap by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4104
* fix(chat): keep custom metadata on knowledge-chat references by @Sairaj-24 in https://github.com/Tencent/WeKnora/pull/4087
* refactor: 出站拨号超时默认 5s 并改为 env 可配 (WEKNORA_OUTBOUND_DIAL_TIMEOUT) by @tayadwx in https://github.com/Tencent/WeKnora/pull/4122
* feat(mcp): support 2026-07-28 alongside legacy clients by @Perfecto23 in https://github.com/Tencent/WeKnora/pull/4095
* perf(embedding): batch Qwen3-VL message inputs by @lyingbug in https://github.com/Tencent/WeKnora/pull/4126
* fix(observability): distinguish retrieval diagnostic spans by @lyingbug in https://github.com/Tencent/WeKnora/pull/4128
* fix(gallery): improve image detail panel readability by @lyingbug in https://github.com/Tencent/WeKnora/pull/4130
* fix(ocr): reject invalid output and record extraction failures by @lyingbug in https://github.com/Tencent/WeKnora/pull/4132
* fix(ocr): reject split repetition and preserve no-text responses by @lyingbug in https://github.com/Tencent/WeKnora/pull/4135
* fix(chat): smooth streamed citation reveal cadence by @lyingbug in https://github.com/Tencent/WeKnora/pull/4134
* fix(chat): keep queued follow-up answers attached to their own question by @LaiYuanRong in https://github.com/Tencent/WeKnora/pull/4112
* fix(preview): refine source citation highlights by @lyingbug in https://github.com/Tencent/WeKnora/pull/4139
* feat(embed): support pasting screenshots into chat by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/4114
* perf(reranking): accelerate MMR selection with sparse postings by @IIHGMII in https://github.com/Tencent/WeKnora/pull/4094
* fix(mcp): isolate slow connection teardown from other services by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/4081
* fix(mcp): stop advertising read-only endpoint tools as destructive by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4103
* test(service): assert RRF ranks ignore retrieval-list arrival order by @iceriverlin in https://github.com/Tencent/WeKnora/pull/4089
* fix(mcp): preserve structured tool results for agents by @Guo-Yixin in https://github.com/Tencent/WeKnora/pull/4074
* fix(im/wecom): accept custom wss long-connection endpoints behind SSRF host checks by @LuckVd in https://github.com/Tencent/WeKnora/pull/4070
* fix(frontend): preserve the caret when outdenting Markdown lists by @dvd233 in https://github.com/Tencent/WeKnora/pull/4071
* fix(datasource/dingtalk): tighten Validate sampling edges by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4079
* fix(agent): preserve steering order across persistence failures by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/4078
* fix(agent): enforce idle timeout while opening model streams by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/4063
* fix(sqlite): add MCP metadata migration by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/4060
* fix(qdrant): wait for writes to finish by @Goodnight77 in https://github.com/Tencent/WeKnora/pull/4061
* fix(mcp): preserve disabled state on service creation by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/4059
* fix(retrieval): skip KB retrieval for summarize intent by @AstonKrss in https://github.com/Tencent/WeKnora/pull/4062
* fix(i18n): correct Korean username rule message to match the pattern by @KoulLife in https://github.com/Tencent/WeKnora/pull/4025
* fix(agent): account for file paths in read pagination budgets by @icearia0219 in https://github.com/Tencent/WeKnora/pull/4018
* test(docreader): add unit tests for utils.split text-splitting helpers by @Jay0130-a in https://github.com/Tencent/WeKnora/pull/4020
* feat(sandbox): Docker 后端支持交互式终端 by @nullptr-error in https://github.com/Tencent/WeKnora/pull/4023
* feat(wiki): improve graph layout, theme captions and group focus by @lyingbug in https://github.com/Tencent/WeKnora/pull/4147
* style: polish sidebar, list pages, toolbox and citation UI by @lyingbug in https://github.com/Tencent/WeKnora/pull/4154
* feat(gallery): replace pagination with infinite masonry scrolling by @lyingbug in https://github.com/Tencent/WeKnora/pull/4156
* feat(system): add platform user management and streamline settings by @desksk in https://github.com/Tencent/WeKnora/pull/4153
* fix(models): stop sending temperature to Claude models that reject it by @pcbeingused333 in https://github.com/Tencent/WeKnora/pull/4155
* fix: align settings layouts and tolerate existing migration objects by @lyingbug in https://github.com/Tencent/WeKnora/pull/4164
* feat(models): add Claude Opus 5.5, Sonnet 5.5 and Haiku 5.5 to the catalog by @pcbeingused333 in https://github.com/Tencent/WeKnora/pull/4158
* fix(deploy): pass WEKNORA_OUTBOUND_DIAL_TIMEOUT through to the app container by @VictorMaznyuk in https://github.com/Tencent/WeKnora/pull/4157
* fix(mcp): close only the authorizing user's connection after OAuth by @ochanism in https://github.com/Tencent/WeKnora/pull/4138
* fix(database_query): preserve owner tenant in shared knowledge scopes by @HelloAndyZhang in https://github.com/Tencent/WeKnora/pull/4136
* fix(deploy): bump paradedb image to v0.25.11-pg17 by @LuckVd in https://github.com/Tencent/WeKnora/pull/4120
* feat(helm): allow Service name overrides with matching consumer references by @Perfecto23 in https://github.com/Tencent/WeKnora/pull/4109
* feat(rerank): add Cohere provider for the v2 rerank API by @kwsYegar in https://github.com/Tencent/WeKnora/pull/4090
* fix(feishu): add shared request pacing and improve HTTP 429 / error 99991400 retries in Feishu Wiki synchronization by @Lyang77 in https://github.com/Tencent/WeKnora/pull/4039
* docs: clarify frontend development proxy configuration by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4171
* fix(datasource/gitlab): emptied files no longer leave their old body searchable by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4008
* fix(qdrant): accept a collection another worker created first by @Goodnight77 in https://github.com/Tencent/WeKnora/pull/3999
* fix(agent): accept adjacent prefixed Python string literals by @icearia0219 in https://github.com/Tencent/WeKnora/pull/4006
* fix(mcp): bound resource listing pagination by @icearia0219 in https://github.com/Tencent/WeKnora/pull/4007
* docs: refresh LICENSE third-party notices by @lyingbug in https://github.com/Tencent/WeKnora/pull/4178
* docs: explain knowledge upload folder paths by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4177
* fix(mcp): ignore discover probe in resource list tests by @lyingbug in https://github.com/Tencent/WeKnora/pull/4179
* feat(gallery): filter images by source document by @tayadwx in https://github.com/Tencent/WeKnora/pull/4159
* refactor(gallery): turn source document filter into a toolbar popover by @lyingbug in https://github.com/Tencent/WeKnora/pull/4190
* docs(api): clarify knowledge-search scope union of knowledge_base_ids and knowledge_ids by @lyingbug in https://github.com/Tencent/WeKnora/pull/4191
* style(frontend): polish knowledge base settings hints and sub-sections by @lyingbug in https://github.com/Tencent/WeKnora/pull/4193
* fix(frontend): respect Markdown indentation selection boundaries by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4195
* fix(helm): configure app rollouts and document shared storage by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4180
* fix(agent): make agent tool selection match the tools the runtime registers by @ochanism in https://github.com/Tencent/WeKnora/pull/4211
* feat(agent): read chat attachments on demand by @lyingbug in https://github.com/Tencent/WeKnora/pull/4203
* feat(mcp): let callers without a browser obtain MCP OAuth tokens by @ochanism in https://github.com/Tencent/WeKnora/pull/4229
* fix(frontend): preserve inline images in EPUB previews by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4226
* fix(frontend): preserve nonempty lists when pressing Enter by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4224
* fix(knowledge): make the knowledge base description token budget configurable by @LuckVd in https://github.com/Tencent/WeKnora/pull/4230
* fix(docs): prebundle fastdom when mermaid imports it (#2899) by @Frank-zhu2000 in https://github.com/Tencent/WeKnora/pull/4208
* fix(mcp): keep OAuth token expiry independent of the process time zone by @ochanism in https://github.com/Tencent/WeKnora/pull/4207
* feat(models): add WeMM embedding presets and Transformers serving by @lyingbug in https://github.com/Tencent/WeKnora/pull/4238
* fix(skill): do not fail installs on non-blocking observations by @lyingbug in https://github.com/Tencent/WeKnora/pull/4246
* feat(chat): polish rewind confirm and mark sessions with unread replies by @lyingbug in https://github.com/Tencent/WeKnora/pull/4247
* fix(mcp): offer OAuth prompt after tool approval and tidy tools panel by @lyingbug in https://github.com/Tencent/WeKnora/pull/4248
* feat(chat): add global search to the @ mention menu and align its styling by @lyingbug in https://github.com/Tencent/WeKnora/pull/4249
* feat(agent): name the turn's chat model on the completion event by @ochanism in https://github.com/Tencent/WeKnora/pull/4252
* fix(chat): locate citations in manual Markdown documents by @lyingbug in https://github.com/Tencent/WeKnora/pull/4278
* fix(agent): clarify attachment image paths and chart readings by @lyingbug in https://github.com/Tencent/WeKnora/pull/4283
* chore(release): finalize v0.8.3 website and documentation by @lyingbug in https://github.com/Tencent/WeKnora/pull/4285

## New Contributors
* @dafyy321-pixel made their first contribution in https://github.com/Tencent/WeKnora/pull/3669
* @DerrickLinus made their first contribution in https://github.com/Tencent/WeKnora/pull/3552
* @Perfecto23 made their first contribution in https://github.com/Tencent/WeKnora/pull/3653
* @xiaojunxiang2023 made their first contribution in https://github.com/Tencent/WeKnora/pull/3360
* @RichardChengshaojin made their first contribution in https://github.com/Tencent/WeKnora/pull/3476
* @kwsYegar made their first contribution in https://github.com/Tencent/WeKnora/pull/3719
* @bigdu332 made their first contribution in https://github.com/Tencent/WeKnora/pull/3801
* @BaiMoHan made their first contribution in https://github.com/Tencent/WeKnora/pull/3726
* @dajiaohuang made their first contribution in https://github.com/Tencent/WeKnora/pull/3860
* @lizijing98 made their first contribution in https://github.com/Tencent/WeKnora/pull/3830
* @TaylorChen made their first contribution in https://github.com/Tencent/WeKnora/pull/3654
* @knqiufan made their first contribution in https://github.com/Tencent/WeKnora/pull/3950
* @L4XB made their first contribution in https://github.com/Tencent/WeKnora/pull/3979
* @tsumon made their first contribution in https://github.com/Tencent/WeKnora/pull/3807
* @icearia0219 made their first contribution in https://github.com/Tencent/WeKnora/pull/3937
* @KennyMcSimpson made their first contribution in https://github.com/Tencent/WeKnora/pull/3930
* @loganv made their first contribution in https://github.com/Tencent/WeKnora/pull/3901
* @LeonSGP43 made their first contribution in https://github.com/Tencent/WeKnora/pull/3989
* @fhgffy made their first contribution in https://github.com/Tencent/WeKnora/pull/3975
* @kevin9327 made their first contribution in https://github.com/Tencent/WeKnora/pull/3964
* @Tong-bit-art made their first contribution in https://github.com/Tencent/WeKnora/pull/3927
* @MLYoshi made their first contribution in https://github.com/Tencent/WeKnora/pull/3963
* @LingYi-Liang made their first contribution in https://github.com/Tencent/WeKnora/pull/3944
* @skywolf123 made their first contribution in https://github.com/Tencent/WeKnora/pull/3753
* @SEVEN-us made their first contribution in https://github.com/Tencent/WeKnora/pull/3906
* @huiq777 made their first contribution in https://github.com/Tencent/WeKnora/pull/3656
* @ruanhaiqiang made their first contribution in https://github.com/Tencent/WeKnora/pull/3818
* @yetuge made their first contribution in https://github.com/Tencent/WeKnora/pull/3985
* @KoulLife made their first contribution in https://github.com/Tencent/WeKnora/pull/3929
* @5quan made their first contribution in https://github.com/Tencent/WeKnora/pull/3704
* @Zaqqmm made their first contribution in https://github.com/Tencent/WeKnora/pull/3616
* @junhao-ye made their first contribution in https://github.com/Tencent/WeKnora/pull/3916
* @Guo-Yixin made their first contribution in https://github.com/Tencent/WeKnora/pull/3952
* @helloxjade made their first contribution in https://github.com/Tencent/WeKnora/pull/3939
* @SuperSgdk made their first contribution in https://github.com/Tencent/WeKnora/pull/3924
* @jdzhang1221 made their first contribution in https://github.com/Tencent/WeKnora/pull/4010
* @wangrui19971019 made their first contribution in https://github.com/Tencent/WeKnora/pull/4104
* @Sairaj-24 made their first contribution in https://github.com/Tencent/WeKnora/pull/4087
* @LaiYuanRong made their first contribution in https://github.com/Tencent/WeKnora/pull/4112
* @IIHGMII made their first contribution in https://github.com/Tencent/WeKnora/pull/4094
* @iceriverlin made their first contribution in https://github.com/Tencent/WeKnora/pull/4089
* @AstonKrss made their first contribution in https://github.com/Tencent/WeKnora/pull/4062
* @Jay0130-a made their first contribution in https://github.com/Tencent/WeKnora/pull/4020
* @desksk made their first contribution in https://github.com/Tencent/WeKnora/pull/4153
* @pcbeingused333 made their first contribution in https://github.com/Tencent/WeKnora/pull/4155
* @Lyang77 made their first contribution in https://github.com/Tencent/WeKnora/pull/4039
* @Jarvis636431 made their first contribution in https://github.com/Tencent/WeKnora/pull/4171
* @Frank-zhu2000 made their first contribution in https://github.com/Tencent/WeKnora/pull/4208

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.8.2...v0.8.3

https://weknora.weixin.qq.com/docs/07-releases/v0.8.3

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.8.3` · 2026-10-14 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.8.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
