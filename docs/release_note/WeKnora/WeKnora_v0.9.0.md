---
title: "WeKnora v0.9.0"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.9.0"
version: "v0.9.0"
published: "2026-10-29"
type: "minor"
lang: "en"
summary: "fix(docs): stabilize anchor navigation and link release topics · feat(agent): persist human-in-the-loop prompts with a shared broker · feat(search): add RRF controls in a tabbed settings popover"
---

# WeKnora v0.9.0

## What's Changed
* fix(docs): stabilize anchor navigation and link release topics by @lyingbug in https://github.com/Tencent/WeKnora/pull/4287
* feat(agent): persist human-in-the-loop prompts with a shared broker by @lyingbug in https://github.com/Tencent/WeKnora/pull/4250
* feat(search): add RRF controls in a tabbed settings popover by @lyingbug in https://github.com/Tencent/WeKnora/pull/4300
* docs(swagger): document the real request and response types by @lyingbug in https://github.com/Tencent/WeKnora/pull/4304
* feat(agent): add the built-in WeKnora assistant with an operation catalog by @lyingbug in https://github.com/Tencent/WeKnora/pull/4302
* feat(agent): let the WeKnora assistant read the bundled documentation by @lyingbug in https://github.com/Tencent/WeKnora/pull/4303
* fix(ui): compact resource list headers in Lite mode by @lyingbug in https://github.com/Tencent/WeKnora/pull/4316
* fix(agent): admit catalog operations only from knowledge API areas by @lyingbug in https://github.com/Tencent/WeKnora/pull/4317
* fix(agent): let the WeKnora assistant search without its own rerank model by @lyingbug in https://github.com/Tencent/WeKnora/pull/4315
* feat(frontend): open the WeKnora assistant from anywhere with page context by @lyingbug in https://github.com/Tencent/WeKnora/pull/4314
* feat(agent): open more workspace operations to the WeKnora assistant by @lyingbug in https://github.com/Tencent/WeKnora/pull/4318
* feat(agent): let the assistant delete and move documents in batches by @lyingbug in https://github.com/Tencent/WeKnora/pull/4319
* docs(site): add the model leaderboard page by @begoniezhao in https://github.com/Tencent/WeKnora/pull/4333
* feat(agent): let the assistant manage FAQ entries by @lyingbug in https://github.com/Tencent/WeKnora/pull/4327
* feat(assistant): side panel, access levels and role-aware operations by @lyingbug in https://github.com/Tencent/WeKnora/pull/4342
* feat(assistant): manage agents and skills, separate history, refresh pages by @lyingbug in https://github.com/Tencent/WeKnora/pull/4344
* fix(assistant): reject restored ordinary sessions by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/4356
* feat(assistant): let the assistant manage knowledge bases by @lyingbug in https://github.com/Tencent/WeKnora/pull/4353
* refactor(image): turn the hard-coded image flow into configurable pipelines by @tayadwx in https://github.com/Tencent/WeKnora/pull/3746
* feat(datasource): deep-adapt Feishu/Lark sync with folder mirror, block parsing and embedded objects by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/3497
* fix(im): cap IM callback bodies before any adapter reads them by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4369
* fix(web-search): bound provider response bodies instead of buffering them whole by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4370
* fix(mcp): avoid replaying tools after ambiguous call failures by @Guo-Yixin in https://github.com/Tencent/WeKnora/pull/4124
* fix(embedding): read the pool's first-error guard under its own mutex by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4014
* fix(chat): persist failed quick-answer turns so errors survive refresh by @AstonKrss in https://github.com/Tencent/WeKnora/pull/4306
* fix(data-analysis): resolve workspace storage backends in quick answers by @kerthans in https://github.com/Tencent/WeKnora/pull/4214
* fix(mcp): separate SSE connection lifetime from request timeouts by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/4140
* fix(docparser): bound MinerU result packages and their expansion by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4396
* fix(embed): hide host context in user messages by @LuckVd in https://github.com/Tencent/WeKnora/pull/4388
* fix(embed): send images when an OpenAI-compatible row declares them by @JSJ189 in https://github.com/Tencent/WeKnora/pull/4389
* fix(models/api): cap non-streaming provider response bodies by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4397
* fix(tools): reject legacy binary .xls with an actionable error by @Jay0130-a in https://github.com/Tencent/WeKnora/pull/4374
* build(docker): mount the Go build cache when building the app image by @tayadwx in https://github.com/Tencent/WeKnora/pull/4320
* feat(assistant): trial runs, session grants, page links, and MCP/model/skill management by @lyingbug in https://github.com/Tencent/WeKnora/pull/4375
* fix(frontend): cap concurrent status requests in upload polling by @ignity21 in https://github.com/Tencent/WeKnora/pull/4348
* fix(frontend): label the parser engine the backend will actually pick by @NIU-123370 in https://github.com/Tencent/WeKnora/pull/4354
* fix(knowledge): leave the root span open while a retry is left by @NIU-123370 in https://github.com/Tencent/WeKnora/pull/4357
* feat(assistant): expand management operations and polish interaction UI by @lyingbug in https://github.com/Tencent/WeKnora/pull/4427
* feat(assistant): let the assistant find skills and MCP services on the web by @lyingbug in https://github.com/Tencent/WeKnora/pull/4429
* fix(anydoc): upgrade patched zip dependency to 9 by @lyingbug in https://github.com/Tencent/WeKnora/pull/4437
* fix(docreader): keep a pipe inside an HTML table cell in that cell by @L4XB in https://github.com/Tencent/WeKnora/pull/4433
* fix(agent): share one configurable budget for web_fetch by @Frank-zhu2000 in https://github.com/Tencent/WeKnora/pull/4432
* fix(docparser): keep JSON numbers and <, >, & as written in JSON uploads by @L4XB in https://github.com/Tencent/WeKnora/pull/4436
* fix(knowledge): 文件夹树显示递归文档数，不再把有子目录的文件夹显示成 0 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4428
* fix(chat): 消息历史与搜索的 limit 补上下界，limit=-1 不再取消 SQL LIMIT by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4409
* fix(wiki): 列 wiki 页面的 page_size 补上界，与兄弟路径一致 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4407
* fix(models): 图片解析复用仓储层的 provider scheme 表，对象存储上的图片不再原样交给厂商 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4405
* fix(mcp): clarify read_document query and pagination semantics by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4403
* fix(search): preserve chunk types in tool results by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4402
* fix(feishu): keep nested text in native table cells by @davien in https://github.com/Tencent/WeKnora/pull/4400
* feat(graph): add standalone JSON graph search API by @ZXLyyds100 in https://github.com/Tencent/WeKnora/pull/4395
* fix(docparser): keep every row and cell of a CSV upload in its table by @L4XB in https://github.com/Tencent/WeKnora/pull/4435
* fix(wiki): read scanned-page OCR when the text chunks are only images by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4430
* feat(resource): 相同图片字节复用一个 handle，不再重复写字节与重复注册 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4419
* fix(docreader): Excel 百分比被读小 100 倍 —— 加开关（默认关） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4423
* fix(helm): make the data-files claim access modes configurable by @Jay0130-a in https://github.com/Tencent/WeKnora/pull/4425
* feat(datasource/dingtalk): 保留来源目录结构（开关控制，默认关） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4422
* fix(datasource/dingtalk): Validate 只校验所选范围，不再扫全租户 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4421
* fix(datasource): 数据源类型图标的 alt 用本地化显示名，不再用裸 type by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4420
* fix(yuque): 两处 offset 分页补跳数上限、重复页检测与 meta.total 提前结束 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4415
* fix(notion): 附件下载失败中止本轮不再推进游标，附件不再永久缺失 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4413
* fix(notion): 递归子块分页补重复游标与跳数上限，兜底不再被空页绕过 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4411
* test(mcp): cover read_document query and pagination contract by @Activer007 in https://github.com/Tencent/WeKnora/pull/4426
* fix(frontend): bundle PDF.js wasm decoders by @LuckVd in https://github.com/Tencent/WeKnora/pull/4382
* feat(docreader): 上传 HTML 只索引正文，与 URL 导入路径对齐（开关，默认关） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4424
* fix(feishu): stop logging tenant access token fragments by @davien in https://github.com/Tencent/WeKnora/pull/4399
* feat(assistant): add durable multi-agent collaboration and live task views by @lyingbug in https://github.com/Tencent/WeKnora/pull/4438
* fix(agent): let open_page finish the turn with the answer above it by @lyingbug in https://github.com/Tencent/WeKnora/pull/4472
* style(assistant): tone down the running child agent highlight by @lyingbug in https://github.com/Tencent/WeKnora/pull/4476
* fix: reject invalid image inputs before multimodal extraction by @lyingbug in https://github.com/Tencent/WeKnora/pull/4489
* feat(agent): unified agent permission model with grants and run modes by @lyingbug in https://github.com/Tencent/WeKnora/pull/4490
* fix: preserve business session identity in model requests by @lyingbug in https://github.com/Tencent/WeKnora/pull/4491
* feat(chat): fold long streaming timelines and steady their height by @lyingbug in https://github.com/Tencent/WeKnora/pull/4496
* feat(automation): scheduled agent runs with in-app notifications by @lyingbug in https://github.com/Tencent/WeKnora/pull/4492
* feat(sandbox): 双模式沙箱分配的基础（门控关闭，线上行为不变） by @nullptr-error in https://github.com/Tencent/WeKnora/pull/4507
* fix(automation): enforce execution identity, cancellation, and scheduling limits by @lyingbug in https://github.com/Tencent/WeKnora/pull/4506
* feat(sandbox): 按分配记录定位共享沙箱（门控仍关闭） by @nullptr-error in https://github.com/Tencent/WeKnora/pull/4509
* feat(sandbox): 共享机器的用户模式闭环（删除、回收、管理与桌面） by @nullptr-error in https://github.com/Tencent/WeKnora/pull/4510
* feat(automation): improve model settings, task controls, and notification inbox by @lyingbug in https://github.com/Tencent/WeKnora/pull/4514
* fix(agent): route new knowledge through document ingestion by @lyingbug in https://github.com/Tencent/WeKnora/pull/4525
* refactor(automation): run scheduled tasks through the assistant by @lyingbug in https://github.com/Tencent/WeKnora/pull/4522
* fix: preserve source references and refine chat automation UI by @lyingbug in https://github.com/Tencent/WeKnora/pull/4534
* feat(chat): animate active timeline icons by @lyingbug in https://github.com/Tencent/WeKnora/pull/4535
* fix(settings): keep direct settings closes inside the app by @jiangjiang248 in https://github.com/Tencent/WeKnora/pull/4524
* feat(sandbox): 共享沙箱短会话目录 + 移除工具层目录限制 by @nullptr-error in https://github.com/Tencent/WeKnora/pull/4533
* fix(mcp): invalidate stale OAuth dialog requests by @dakjdakd in https://github.com/Tencent/WeKnora/pull/4531
* perf(sourceloc): index align matches in one document scan by @sun-sh in https://github.com/Tencent/WeKnora/pull/4544
* fix(auth): let retrieve-scoped API keys discover shared knowledge bases by @u7-u7 in https://github.com/Tencent/WeKnora/pull/4523
* fix(datasource): enforce sync log retention policies by @dakjdakd in https://github.com/Tencent/WeKnora/pull/4532
* fix(qa): resolve shared KB chat models in their owner tenant by @lyingbug in https://github.com/Tencent/WeKnora/pull/4557
* fix(web_fetch): decode non-UTF-8 HTML pages by declared charset by @kerthans in https://github.com/Tencent/WeKnora/pull/4556
* fix(db): stop logging bound parameters in GORM slow-query logs by @Frank-zhu2000 in https://github.com/Tencent/WeKnora/pull/4561
* fix(export): sort conversation messages by timestamp instants by @fengyue-xve in https://github.com/Tencent/WeKnora/pull/4559
* fix(citations): match canonically equivalent Unicode text by @fengyue-xve in https://github.com/Tencent/WeKnora/pull/4560
* fix(datasource): truncate failed sync detail at rune boundary by @kerthans in https://github.com/Tencent/WeKnora/pull/4555
* fix(router): truncate dead-letter knowledge errors at rune boundary by @kerthans in https://github.com/Tencent/WeKnora/pull/4554
* fix(agent): show legacy empty MCP config as all in editor by @wzxsdf in https://github.com/Tencent/WeKnora/pull/4558
* fix(automation): reject nonexistent one-shot local times by @fengyue-xve in https://github.com/Tencent/WeKnora/pull/4551
* feat(confluence): support personal access token authentication by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4549
* fix(rerank): preserve literal fenced code in model passages by @mmhh256 in https://github.com/Tencent/WeKnora/pull/4521
* fix(rerank): accept bare array responses from self-hosted runtimes by @u7-u7 in https://github.com/Tencent/WeKnora/pull/4518
* fix(download): honor language tags in extended filenames by @fengyue-xve in https://github.com/Tencent/WeKnora/pull/4517
* fix(preview): distinguish image and audio ISO media brands by @fengyue-xve in https://github.com/Tencent/WeKnora/pull/4515
* fix(postgres): 兼容 pgsearch 关键词评分函数 by @panjiedev in https://github.com/Tencent/WeKnora/pull/4502
* fix(im): resolve resource URLs through bound storage backends by @lyingbug in https://github.com/Tencent/WeKnora/pull/4578
* feat(image): add opt-in, bounded preprocessing before OCR by @tayadwx in https://github.com/Tencent/WeKnora/pull/4381
* fix(web-search): keep error previews valid UTF-8 by @sun-sh in https://github.com/Tencent/WeKnora/pull/4583
* fix(faq): preserve disabled state when importing entries by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4581
* feat(background): shared background-work runtime by @nullptr-error in https://github.com/Tencent/WeKnora/pull/4579
* feat(shell): async shell jobs for web and Lite by @nullptr-error in https://github.com/Tencent/WeKnora/pull/4580
* fix(frontend): ignore stale document detail responses by @dakjdakd in https://github.com/Tencent/WeKnora/pull/4627
* fix(rss): preserve full text during article refresh failures by @dakjdakd in https://github.com/Tencent/WeKnora/pull/4625
* fix(knowledge): preserve shared resources during clone rollback by @dakjdakd in https://github.com/Tencent/WeKnora/pull/4623
* fix(gallery): cancel stale image fetches before Blob allocation by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4588
* fix(ui): avoid full list reloads while awaiting batch reparse by @jiangjiang248 in https://github.com/Tencent/WeKnora/pull/4618
* fix(datasource): truncate connector error previews at rune boundaries by @yetuge in https://github.com/Tencent/WeKnora/pull/4614
* fix(errors): truncate error messages at rune boundaries by @sun-sh in https://github.com/Tencent/WeKnora/pull/4609
* fix(import): accept formats advertised by parser engines by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4602
* fix(feishu): 支持知识库快捷方式子文档同步 by @Lyang77 in https://github.com/Tencent/WeKnora/pull/4565
* fix(wiki): restore rewritten wkimg placeholders instead of persisting broken links by @u7-u7 in https://github.com/Tencent/WeKnora/pull/4552
* fix(agent): reject oversized sandbox appends before reading by @icearia0219 in https://github.com/Tencent/WeKnora/pull/4577
* fix(agent): honor read_file match limits when searching by @icearia0219 in https://github.com/Tencent/WeKnora/pull/4575
* fix(data-analysis): allow safe scalar casts in SQL validation by @kerthans in https://github.com/Tencent/WeKnora/pull/4215
* fix(openaicompletions): keep streamed tool calls without an index apart by @pcbeingused333 in https://github.com/Tencent/WeKnora/pull/4593
* fix(googlegenai): map the remaining safety finish reasons to content_filter by @pcbeingused333 in https://github.com/Tencent/WeKnora/pull/4592
* fix(agent): treat model_context_window_exceeded as a length finish reason by @pcbeingused333 in https://github.com/Tencent/WeKnora/pull/4589
* fix(logger): namespace log format configuration and isolate log tests by @lyingbug in https://github.com/Tencent/WeKnora/pull/4639
* fix(agent): preserve multimodal content during message sanitization by @icearia0219 in https://github.com/Tencent/WeKnora/pull/3949
* fix(docparser): treat anydoc resource limits as permanent parse failures by @Frank-zhu2000 in https://github.com/Tencent/WeKnora/pull/4573
* fix(retriever): bound vector indexing memory with saved windows by @mmhh256 in https://github.com/Tencent/WeKnora/pull/4584
* fix(docreader): crop the original image after detecting on a probe by @tayadwx in https://github.com/Tencent/WeKnora/pull/4586
* fix: store inline images and apply AI budget in document order by @jacentsao in https://github.com/Tencent/WeKnora/pull/4121
* fix(frontend): preserve numeric literals in JSON preview by @Zicheng-Xie in https://github.com/Tencent/WeKnora/pull/4620
* fix(preview): reject invalid UTF-8 before decoding CSV by @XY-code1 in https://github.com/Tencent/WeKnora/pull/4479
* fix(wiki): support similar page lookup on SQLite by @huong8373tt-beep in https://github.com/Tencent/WeKnora/pull/4605
* fix(docreader): release raw PDF images after encoding by @uhhgxg in https://github.com/Tencent/WeKnora/pull/4562
* fix(sandbox): rebind when attachment staging loses its container by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4220
* feat(faq): add list view toggle by @Arc10p in https://github.com/Tencent/WeKnora/pull/4566
* fix(lite): reclaim superseded reparse chunks by @huong8373tt-beep in https://github.com/Tencent/WeKnora/pull/4595
* fix(im): only reply to Feishu group messages mentioning this bot by @johnnyjy in https://github.com/Tencent/WeKnora/pull/3505
* fix(vectorstore): clarify PostgreSQL requirements by @huong8373tt-beep in https://github.com/Tencent/WeKnora/pull/4655
* fix(knowledge): keep document toolbar actions inside the pane by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4653
* fix(datasource): escape filenames in generated multipart uploads by @sun-sh in https://github.com/Tencent/WeKnora/pull/4647
* perf(wiki): coalesce graph label updates and skip hidden SVG layout by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4646
* fix(login): keep the sign-in form visible on phones by @huong8373tt-beep in https://github.com/Tencent/WeKnora/pull/4645
* fix(datasource): honor skip conflict strategy by @LuckVd in https://github.com/Tencent/WeKnora/pull/4643
* perf(chunker): avoid quadratic protected span sorting by @po-et in https://github.com/Tencent/WeKnora/pull/4633
* fix(docreader): keep Markdown block structure in EPUB chapters by @MaxFreedomPollard in https://github.com/Tencent/WeKnora/pull/4632
* fix(docreader): reclaim memory after large read requests by @helloxjade in https://github.com/Tencent/WeKnora/pull/4628
* fix(knowledge): hide parser hint for read-only users by @LuckVd in https://github.com/Tencent/WeKnora/pull/4487
* fix(search): isolate multi-KB embedding dimensions by @sun-sh in https://github.com/Tencent/WeKnora/pull/4659
* fix(mcp): offload chat metadata lookups from event loop by @Linxiushen in https://github.com/Tencent/WeKnora/pull/4499
* fix(docreader): preserve transparency in PPTX fallback images by @LingYi-Liang in https://github.com/Tencent/WeKnora/pull/4678
* fix(docreader): preserve external EPUB image references by @po-et in https://github.com/Tencent/WeKnora/pull/4676
* fix(wiki): respect word boundaries in SQLite trigram candidates by @wcy12378 in https://github.com/Tencent/WeKnora/pull/4679
* fix(agent): clear the exhausted-compaction mark when a compaction succeeds by @ydflow in https://github.com/Tencent/WeKnora/pull/4677
* fix(system): keep sandbox deep-check probe previews valid UTF-8 by @ydflow in https://github.com/Tencent/WeKnora/pull/4675
* fix(sandbox): keep stderr previews in user-facing errors valid UTF-8 by @ydflow in https://github.com/Tencent/WeKnora/pull/4674
* fix(agent): truncate tool-call hints by runes, not bytes by @ydflow in https://github.com/Tencent/WeKnora/pull/4673
* fix(agent): compact the unsanitized history on overflow recovery by @ydflow in https://github.com/Tencent/WeKnora/pull/4672
* fix(client): cap SDK error response bodies at 1 MiB by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4721
* fix(chat): keep distinct facts in partial-overlap dedup by @Frank-zhu2000 in https://github.com/Tencent/WeKnora/pull/4719
* fix(docparser): recover malformed PDFs with the builtin reader by @acse-bq23 in https://github.com/Tencent/WeKnora/pull/4716
* fix(docreader): bound embedded PDF image selection memory by @acse-bq23 in https://github.com/Tencent/WeKnora/pull/4715
* fix: preserve shared sandboxes across skill updates by @lyingbug in https://github.com/Tencent/WeKnora/pull/4729
* fix(settings): preserve retrieval changes during autosave by @wuning159 in https://github.com/Tencent/WeKnora/pull/4722
* fix: show async postprocess duration in trace by @FOWEPJF255 in https://github.com/Tencent/WeKnora/pull/4711
* fix(rerank): describe score scales by endpoint output by @mmhh256 in https://github.com/Tencent/WeKnora/pull/4701
* fix(sqlite): support organization and wiki searches by @wzxsdf in https://github.com/Tencent/WeKnora/pull/4698
* fix(knowledge): cap the knowledge-base definition body at 1 MiB by @yetuge in https://github.com/Tencent/WeKnora/pull/4730
* docs(api): document VLM setup when creating a knowledge base by @Linxiushen in https://github.com/Tencent/WeKnora/pull/4695
* fix(knowledge): configurable question-generation token budget by @LuckVd in https://github.com/Tencent/WeKnora/pull/4690
* fix(knowledge): feed OCR chunks to auto-tag classification by @LuckVd in https://github.com/Tencent/WeKnora/pull/4689
* fix(organization): ignore stale member search responses by @wuning159 in https://github.com/Tencent/WeKnora/pull/4726
* fix(cli): trim env credentials in auth token output by @ydflow in https://github.com/Tencent/WeKnora/pull/4696
* fix(docreader): prevent XLSX chunking timeouts by @wzxsdf in https://github.com/Tencent/WeKnora/pull/4683
* fix(agent): stop repeated failed tool calls by @LuckVd in https://github.com/Tencent/WeKnora/pull/4334
* fix(docreader): report the file size limit in MB by @LingYi-Liang in https://github.com/Tencent/WeKnora/pull/4670
* fix(cli): carry --modified-args/--reason in the exit-10 retry argv by @ydflow in https://github.com/Tencent/WeKnora/pull/4686
* fix(docparser): budget the CSV table render before padding it out by @ydflow in https://github.com/Tencent/WeKnora/pull/4702
* fix(knowledge): cap the hybrid-search body at 1 MiB by @yetuge in https://github.com/Tencent/WeKnora/pull/4731
* fix(docreader): preserve regex semantics when splitting text by @LingYi-Liang in https://github.com/Tencent/WeKnora/pull/4669
* fix(docreader): preserve declared XLSX shared string parts by @LingYi-Liang in https://github.com/Tencent/WeKnora/pull/4666
* fix(skills): truncate a downloaded skill error body at a rune boundary by @yetuge in https://github.com/Tencent/WeKnora/pull/4665
* fix(docreader): bound streamed PDF image memory by @LuckVd in https://github.com/Tencent/WeKnora/pull/4664
* fix(memory): resolve shared-agent memory in the caller's workspace by @cainbit in https://github.com/Tencent/WeKnora/pull/4663
* fix(agent): treat model_context_window_exceeded as a length stop in compaction by @ydflow in https://github.com/Tencent/WeKnora/pull/4681
* fix(modelcontext): preserve citations in JSON strings by @errpunk in https://github.com/Tencent/WeKnora/pull/4733
* fix(models): ask Claude for summarized thinking in adaptive mode by @pcbeingused333 in https://github.com/Tencent/WeKnora/pull/4184
* fix(agent): preserve native integer literals during parameter casting by @icearia0219 in https://github.com/Tencent/WeKnora/pull/4483
* fix(agent): normalize Python physical newlines before quote checks by @icearia0219 in https://github.com/Tencent/WeKnora/pull/4482
* fix(docparser): escape standalone image filenames in Markdown by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4475
* fix(settings): ignore stale member list search responses by @wuning159 in https://github.com/Tencent/WeKnora/pull/4735
* fix(docparser): attach api key in MinerU protocol detection by @JSJ189 in https://github.com/Tencent/WeKnora/pull/4470
* fix(search): keep vector hits when keyword retrieval fails by @LuckVd in https://github.com/Tencent/WeKnora/pull/4459
* feat(assistant): add contextual entry points and guided actions by @lyingbug in https://github.com/Tencent/WeKnora/pull/4757
* feat(assistant): tailor welcome questions to the current page by @lyingbug in https://github.com/Tencent/WeKnora/pull/4758
* fix(mcp): add VS Code setup and pin the stdio fallback by @playb0t in https://github.com/Tencent/WeKnora/pull/4363
* fix(multimodal): fall back to knowledge base VLM when document model is unavailable by @LuckVd in https://github.com/Tencent/WeKnora/pull/4743
* fix(feishu-drive): skip OS metadata files instead of failing the sync by @u7-u7 in https://github.com/Tencent/WeKnora/pull/4738
* fix(web-fetch): report a Chromium deadline as a retryable timeout by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4468
* fix(feishu): checkpoint sync rounds that skip every node by @u7-u7 in https://github.com/Tencent/WeKnora/pull/4736
* fix(helm): derive safe app rollout strategy for RWO storage by @wzxsdf in https://github.com/Tencent/WeKnora/pull/4756
* fix(models): prevent heartbeats from restoring released concurrency leases by @ydflow in https://github.com/Tencent/WeKnora/pull/4755
* fix(cli): classify keychain read failures as keychain_denied, not token_expired by @ydflow in https://github.com/Tencent/WeKnora/pull/4684
* fix(im): preserve attachment filenames by @sun-sh in https://github.com/Tencent/WeKnora/pull/4752
* fix(client): expose knowledge-base parser engine rules by @jiangjiang248 in https://github.com/Tencent/WeKnora/pull/4753
* fix(sandbox): rebind a file op when the container has already stopped by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4749
* fix(modelcontext): keep literal ref text out of citation expansion by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4748
* fix(metric): keep every sentence in BLEU and ROUGE scores by @xiashao in https://github.com/Tencent/WeKnora/pull/4746
* refactor(wiki): remove unused string truncation helper by @xiashao in https://github.com/Tencent/WeKnora/pull/4744
* fix(docparser): 限制 CSV 转换膨胀并支持取消 by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4485
* fix(parser): route PPTX vector media through docreader by @mmhh256 in https://github.com/Tencent/WeKnora/pull/4705
* fix(googlegenai): count tool-use prompt tokens as input tokens by @pcbeingused333 in https://github.com/Tencent/WeKnora/pull/4594
* fix(web-search): truncate the DuckDuckGo result title at a rune boundary by @yetuge in https://github.com/Tencent/WeKnora/pull/4615
* fix(knowledge): bound batch polling and ignore stale responses by @wuning159 in https://github.com/Tencent/WeKnora/pull/4648
* feat(server): allow explicit frontend directory in standard edition by @alikatgh in https://github.com/Tencent/WeKnora/pull/4637
* fix(docreader): honor explicit MHTML root parts by @po-et in https://github.com/Tencent/WeKnora/pull/4636
* fix(docreader): preserve code fences during table normalization by @fengyue-xve in https://github.com/Tencent/WeKnora/pull/4494
* feat(vlm): make max_tokens configurable via VLM_MAX_TOKENS by @OUAO-FRANK in https://github.com/Tencent/WeKnora/pull/4478
* feat(mcp): support document-scoped knowledge search by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4463
* fix(chat): generate concise sidebar session titles by @Annabelle0726 in https://github.com/Tencent/WeKnora/pull/4465
* fix(web-search): make default provider changes atomic by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/4454
* fix(docreader): keep spreadsheet cells that say N/A, None or NULL by @L4XB in https://github.com/Tencent/WeKnora/pull/4452
* fix(docreader): keep the text of DOCX content controls and tracked insertions by @L4XB in https://github.com/Tencent/WeKnora/pull/4448
* fix(docreader): keep the footer rows of an HTML table in that table by @L4XB in https://github.com/Tencent/WeKnora/pull/4441
* fix(preview): 知识库文档预览的 Markdown 排版（标题层级/间距/代码块/去重标题） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4439
* fix(agent): describe uploads when the chat model cannot see images by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4219
* fix(data-analysis): read legacy xls workbooks by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4218
* fix(client): close the response body on the duplicate-URL path by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4202
* fix(cli): emit bool retry_argv flags in the form pflag can parse back by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4197
* fix(frontend): distinguish graph availability errors from disabled state by @yeungmingyik in https://github.com/Tencent/WeKnora/pull/4172
* fix(docreader): keep Excel header labels unique by @ranjianghong526-hash in https://github.com/Tencent/WeKnora/pull/4160
* feat(helm): support app.extraVolumes and app.extraVolumeMounts by @kalandramo in https://github.com/Tencent/WeKnora/pull/4332
* fix(housekeeping): scan the queues once per sweep, not once per row by @ignity21 in https://github.com/Tencent/WeKnora/pull/4360
* fix(docreader): preserve numeric rows in PDF text extraction by @dvd233 in https://github.com/Tencent/WeKnora/pull/3228
* fix(frontend): tolerate malformed EPUB paths and clean up failed previews by @Jarvis636431 in https://github.com/Tencent/WeKnora/pull/4324
* perf(search): reuse fixed query-expansion regexps by @xiashao in https://github.com/Tencent/WeKnora/pull/4309
* fix(audit_log): stop the retention loop in the ticker cadence test by @AnonymousLesserPanda in https://github.com/Tencent/WeKnora/pull/4308
* fix(repository): SearchUsers 兼容 SQLite 方言并转义 LIKE 通配符 by @Winoren in https://github.com/Tencent/WeKnora/pull/3996
* fix(agent): preserve user requests during context overflow recovery by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/4280
* fix(ui): preserve explicit zero chunk_overlap when loading KB settings by @Li-john1021 in https://github.com/Tencent/WeKnora/pull/4274
* fix(frontend): keep distinct reasoning visible beside final answers by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4267
* fix(docreader): preserve all modern XMind topic groups by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4266
* fix(frontend): release queued refreshes when browser storage fails by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4265
* fix(client): preserve agent reasoning effort during updates by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4264
* test: cover qdrant copy pagination by @Goodnight77 in https://github.com/Tencent/WeKnora/pull/4162
* test(security): cover NAT64 encodings in TestIsRestrictedIP_IPv6 (fixes #4092) by @RerankerGuo in https://github.com/Tencent/WeKnora/pull/4263
* fix(mcp): honor a leading UTF-8 BOM in chat streams by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4262
* fix(cli): report chunk truncation only when rows are omitted by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4260
* fix(cli): reject invalid jq syntax before polling by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4258
* fix(cli): preserve raw MCP document download bytes by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4256
* fix(client): encode file type filters as a comma-separated value by @xili-ytl in https://github.com/Tencent/WeKnora/pull/4240
* fix(ui): allow Owner to demote themselves on the members page by @Li-john1021 in https://github.com/Tencent/WeKnora/pull/4213
* fix(knowledge): drop generated questions when the switch is off by @wangrui19971019 in https://github.com/Tencent/WeKnora/pull/4096
* fix(embed): keep allowed_origins when a channel update omits it by @VictorMaznyuk in https://github.com/Tencent/WeKnora/pull/4205
* fix(skills): explain unfederated skills.sh imports by @tsumon in https://github.com/Tencent/WeKnora/pull/4196
* fix(agent): invalidate context checkpoints when rewinding steered turns by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/4143
* fix(session): cap text attachments at 32 KiB instead of failing on long lines by @Jinzhengxu in https://github.com/Tencent/WeKnora/pull/4148
* fix(frontend): 通用选择器创建临时数据源前先校验可创建 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/4050
* fix: reject missing qdrant embeddings by @Goodnight77 in https://github.com/Tencent/WeKnora/pull/4165
* fix qdrant collection matching by @Goodnight77 in https://github.com/Tencent/WeKnora/pull/3089
* fix(chat): lazy-load noVNC only when opening sandbox desktop by @JYao-Chen in https://github.com/Tencent/WeKnora/pull/4034
* fix(build): inject version metadata into compose-built app images by @DerrickLinus in https://github.com/Tencent/WeKnora/pull/4123
* fix(embed): preserve draft when attachment read fails by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/4118
* fix(sandbox): support Docker Desktop socket permissions by @helloxjade in https://github.com/Tencent/WeKnora/pull/3088
* fix(lite): load dotenv files before server startup by @tsumon in https://github.com/Tencent/WeKnora/pull/3618
* fix(chat): preselect the answer's knowledge base when saving to a KB by @Yi-111-a in https://github.com/Tencent/WeKnora/pull/3853
* fix(agent): validate graph relation evidence in every query scope by @knqiufan in https://github.com/Tencent/WeKnora/pull/3955
* fix(mineru): split large Cloud PDFs without checkpoint storage by @JYao-Chen in https://github.com/Tencent/WeKnora/pull/4030
* fix(download): preserve existing files when transfers fail by @LeonSGP43 in https://github.com/Tencent/WeKnora/pull/3988
* fix(agent): retain new file paths when compaction tracking is full by @icearia0219 in https://github.com/Tencent/WeKnora/pull/4003
* fix(agent): reject overlapping matches in unique sandbox edits by @icearia0219 in https://github.com/Tencent/WeKnora/pull/4002
* feat(assistant): give each settings page its own starter questions by @lyingbug in https://github.com/Tencent/WeKnora/pull/4762
* fix(datasource): make knowledge replacement transactional by @younggglcy in https://github.com/Tencent/WeKnora/pull/4473
* fix(datasource): retain retry cursors on ingestion failure by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3852
* fix(automation): prevent premature SQLite automation claims by @LuckVd in https://github.com/Tencent/WeKnora/pull/4501
* fix(agent): recover final-answer context overflow and propagate synthesis errors by @rtmalikian in https://github.com/Tencent/WeKnora/pull/4629
* fix(models): preserve string fields in streamed tool arguments by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4253
* fix(models): assemble multiline provider SSE packets by @rudycelekli in https://github.com/Tencent/WeKnora/pull/4255
* fix(chat-pipeline): honor normalized graph search targets by @dakjdakd in https://github.com/Tencent/WeKnora/pull/4530
* fix(kb-delete): give wiki cleanup its own longer timeout budget by @tsumon in https://github.com/Tencent/WeKnora/pull/4292
* fix(sandbox): 被超时杀掉的文件系统操作不再误报为请求错误 by @Goodeve0 in https://github.com/Tencent/WeKnora/pull/3921
* fix(knowledge): add missing POST /knowledge-bases/:id/rebuild-index route by @tsumon in https://github.com/Tencent/WeKnora/pull/4621
* fix(docparser): decode GBK and UTF-16 text files in the simple reader by @L4XB in https://github.com/Tencent/WeKnora/pull/4446
* fix(docreader): recognize Unicode BOMs before legacy decoding by @fengyue-xve in https://github.com/Tencent/WeKnora/pull/4498
* fix(chunker): preserve explicit zero chunk_overlap on ingest by @Li-john1021 in https://github.com/Tencent/WeKnora/pull/4276
* fix(knowledge): strip think blocks from generated questions and summaries by @stanleys12 in https://github.com/Tencent/WeKnora/pull/4691
* fix(chat): retry history loading after transient failures by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/4186
* fix(tenant): honor default storage quota across creation paths by @tianhaotian in https://github.com/Tencent/WeKnora/pull/3213
* fix(datasource): 保留钉钉超限文件失败后的定时同步 by @panjiedev in https://github.com/Tencent/WeKnora/pull/4505
* fix(ui): keep knowledge folders readable and shrink tag editing by @lyingbug in https://github.com/Tencent/WeKnora/pull/4765
* fix(agent): discard failed stream drafts before retry by @sun-sh in https://github.com/Tencent/WeKnora/pull/4780
* fix(mcp): reject malformed knowledge base selectors by @ydflow in https://github.com/Tencent/WeKnora/pull/4773
* fix(config): reject malformed environment-expanded YAML by @xiashao in https://github.com/Tencent/WeKnora/pull/4770
* fix(models): preserve Responses API refusal text by @ydflow in https://github.com/Tencent/WeKnora/pull/4766
* fix(agent): show matches in long file search lines by @ydflow in https://github.com/Tencent/WeKnora/pull/4774
* fix(metric): normalize MAP by all relevant documents by @xiashao in https://github.com/Tencent/WeKnora/pull/4771
* feat(lite): ask before host deletes and widen the sandbox on approval by @nullptr-error in https://github.com/Tencent/WeKnora/pull/4076
* fix(frontend): 持久化审批卡片直接显示后台等待 by @lyingbug in https://github.com/Tencent/WeKnora/pull/4824
* feat: add workspace default settings for models and web search by @lyingbug in https://github.com/Tencent/WeKnora/pull/4822
* fix(openaicompletions): recover leaked DSML tool calls safely by @lyingbug in https://github.com/Tencent/WeKnora/pull/4851
* fix(agent): preserve manual markdown whitespace by @ydflow in https://github.com/Tencent/WeKnora/pull/4844
* fix(mcp): reject chat streams without completion by @ydflow in https://github.com/Tencent/WeKnora/pull/4843
* fix(vlm): bound WeKnoraCloud vision response bodies by @Tong-bit-art in https://github.com/Tencent/WeKnora/pull/4806
* fix(agent): disable thinking during final answer synthesis by @errpunk in https://github.com/Tencent/WeKnora/pull/4783
* fix(chat): carry Ollama's done_reason on the final stream chunk by @pcbeingused333 in https://github.com/Tencent/WeKnora/pull/4845
* fix(metric): preserve zero precision in unsmoothed BLEU by @xiashao in https://github.com/Tencent/WeKnora/pull/4833
* fix(metric): normalize NDCG against the full ideal ranking by @xiashao in https://github.com/Tencent/WeKnora/pull/4832
* fix(lite): skip empty tokenized FTS queries by @u7-u7 in https://github.com/Tencent/WeKnora/pull/4819
* feat: prepare v0.9.0 release with assistant onboarding by @lyingbug in https://github.com/Tencent/WeKnora/pull/4836
* docs: finalize v0.9.0 release notes and upgrade guidance by @lyingbug in https://github.com/Tencent/WeKnora/pull/4864

## New Contributors
* @JSJ189 made their first contribution in https://github.com/Tencent/WeKnora/pull/4389
* @ignity21 made their first contribution in https://github.com/Tencent/WeKnora/pull/4348
* @NIU-123370 made their first contribution in https://github.com/Tencent/WeKnora/pull/4354
* @davien made their first contribution in https://github.com/Tencent/WeKnora/pull/4400
* @ZXLyyds100 made their first contribution in https://github.com/Tencent/WeKnora/pull/4395
* @Activer007 made their first contribution in https://github.com/Tencent/WeKnora/pull/4426
* @jiangjiang248 made their first contribution in https://github.com/Tencent/WeKnora/pull/4524
* @dakjdakd made their first contribution in https://github.com/Tencent/WeKnora/pull/4531
* @sun-sh made their first contribution in https://github.com/Tencent/WeKnora/pull/4544
* @u7-u7 made their first contribution in https://github.com/Tencent/WeKnora/pull/4523
* @fengyue-xve made their first contribution in https://github.com/Tencent/WeKnora/pull/4559
* @wzxsdf made their first contribution in https://github.com/Tencent/WeKnora/pull/4558
* @mmhh256 made their first contribution in https://github.com/Tencent/WeKnora/pull/4521
* @panjiedev made their first contribution in https://github.com/Tencent/WeKnora/pull/4502
* @Zicheng-Xie made their first contribution in https://github.com/Tencent/WeKnora/pull/4620
* @XY-code1 made their first contribution in https://github.com/Tencent/WeKnora/pull/4479
* @huong8373tt-beep made their first contribution in https://github.com/Tencent/WeKnora/pull/4605
* @uhhgxg made their first contribution in https://github.com/Tencent/WeKnora/pull/4562
* @Arc10p made their first contribution in https://github.com/Tencent/WeKnora/pull/4566
* @johnnyjy made their first contribution in https://github.com/Tencent/WeKnora/pull/3505
* @wcy12378 made their first contribution in https://github.com/Tencent/WeKnora/pull/4679
* @ydflow made their first contribution in https://github.com/Tencent/WeKnora/pull/4677
* @wuning159 made their first contribution in https://github.com/Tencent/WeKnora/pull/4722
* @FOWEPJF255 made their first contribution in https://github.com/Tencent/WeKnora/pull/4711
* @errpunk made their first contribution in https://github.com/Tencent/WeKnora/pull/4733
* @playb0t made their first contribution in https://github.com/Tencent/WeKnora/pull/4363
* @xiashao made their first contribution in https://github.com/Tencent/WeKnora/pull/4746
* @alikatgh made their first contribution in https://github.com/Tencent/WeKnora/pull/4637
* @OUAO-FRANK made their first contribution in https://github.com/Tencent/WeKnora/pull/4478
* @Annabelle0726 made their first contribution in https://github.com/Tencent/WeKnora/pull/4465
* @yeungmingyik made their first contribution in https://github.com/Tencent/WeKnora/pull/4172
* @ranjianghong526-hash made their first contribution in https://github.com/Tencent/WeKnora/pull/4160
* @kalandramo made their first contribution in https://github.com/Tencent/WeKnora/pull/4332
* @AnonymousLesserPanda made their first contribution in https://github.com/Tencent/WeKnora/pull/4308
* @Winoren made their first contribution in https://github.com/Tencent/WeKnora/pull/3996
* @Li-john1021 made their first contribution in https://github.com/Tencent/WeKnora/pull/4274
* @rudycelekli made their first contribution in https://github.com/Tencent/WeKnora/pull/4267
* @RerankerGuo made their first contribution in https://github.com/Tencent/WeKnora/pull/4263
* @xili-ytl made their first contribution in https://github.com/Tencent/WeKnora/pull/4240
* @Yi-111-a made their first contribution in https://github.com/Tencent/WeKnora/pull/3853
* @rtmalikian made their first contribution in https://github.com/Tencent/WeKnora/pull/4629
* @Goodeve0 made their first contribution in https://github.com/Tencent/WeKnora/pull/3921
* @stanleys12 made their first contribution in https://github.com/Tencent/WeKnora/pull/4691
* @tianhaotian made their first contribution in https://github.com/Tencent/WeKnora/pull/3213

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.8.3...v0.9.0

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.9.0` · 2026-10-29 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
