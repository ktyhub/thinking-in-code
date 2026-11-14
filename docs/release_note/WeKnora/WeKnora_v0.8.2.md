---
title: "WeKnora v0.8.2"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.8.2"
version: "v0.8.2"
published: "2026-09-24"
type: "patch"
lang: "en"
---

# WeKnora v0.8.2

## What's Changed
* feat(session): show owner badge for API sessions in sidebar by @FincherYuan in https://github.com/Tencent/WeKnora/pull/3024
* fix(agent): web_fetch 兼容 LLM 双重序列化的 items 参数 by @asmh1989 in https://github.com/Tencent/WeKnora/pull/3019
* feat(miniprogram): zh/en i18n, tab icons, and base library compatibility by @ouhaibing5 in https://github.com/Tencent/WeKnora/pull/3010
* fix: widen audit log drawer by @hiasky in https://github.com/Tencent/WeKnora/pull/3001
* feat(agent): unify sandbox tools and drop host preloaded skills by @lyingbug in https://github.com/Tencent/WeKnora/pull/3033
* fix(feishu): preserve images embedded in post messages by @Legimity in https://github.com/Tencent/WeKnora/pull/3031
* fix(message): log why chat history indexing was skipped by @linhongyu510 in https://github.com/Tencent/WeKnora/pull/3030
* feat(mcp): add per-tool enable toggle by @myysophia in https://github.com/Tencent/WeKnora/pull/2989
* feat(session): show in-progress status in the sidebar by @lyingbug in https://github.com/Tencent/WeKnora/pull/3038
* feat(system): add admin UI for creating users by @mdrkrg in https://github.com/Tencent/WeKnora/pull/3034
* fix(system): keep one-time create-user passwords and copy full account details by @lyingbug in https://github.com/Tencent/WeKnora/pull/3039
* fix(security): reject traversal in local prefixes, task IDs, and wiki sort by @lyingbug in https://github.com/Tencent/WeKnora/pull/3066
* fix(chat): keep OCR/caption text of scanned-page image hits in merge by @LuckVd in https://github.com/Tencent/WeKnora/pull/3064
* fix(initialization): pass stored ExtraConfig to model connection test by @LuckVd in https://github.com/Tencent/WeKnora/pull/3063
* fix(knowledge): keep long non-ASCII folder names valid UTF-8 by @MaxFreedomPollard in https://github.com/Tencent/WeKnora/pull/3056
* feat(datasource): keep the source document's last-modified time through ingestion by @po-et in https://github.com/Tencent/WeKnora/pull/3055
* fix(frontend): finish knowledge base tour without creating a knowledge base by @yushangcan in https://github.com/Tencent/WeKnora/pull/3050
* feat(sandbox): run sandboxed execs as root by default by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3067
* fix(organization): 修正成员权限说明中编辑角色的共享知识库权限 by @WLH55 in https://github.com/Tencent/WeKnora/pull/3068
* feat(frontend): expose HTTP status on API responses via $httpStatus by @mdrkrg in https://github.com/Tencent/WeKnora/pull/3048
* refactor(system): extract reset-password popup into ResetPasswordDialog by @mdrkrg in https://github.com/Tencent/WeKnora/pull/3047
* fix: sanitize qdrant string payloads by @Roovelrz in https://github.com/Tencent/WeKnora/pull/2997
* fix: persist cleared IM knowledge bases by @linhongyu510 in https://github.com/Tencent/WeKnora/pull/3043
* fix(preview): stop routing legacy .doc/.ppt to the OOXML previewers by @dzc-bit in https://github.com/Tencent/WeKnora/pull/3041
* feat(mcp): support updating manual knowledge by @Jonesxq in https://github.com/Tencent/WeKnora/pull/2937
* fix: report embedding dimension mismatches by @Jonesxq in https://github.com/Tencent/WeKnora/pull/2919
* fix(wiki): treat rate-limit-shaped 403 responses as transient by @LuckVd in https://github.com/Tencent/WeKnora/pull/2933
* fix(ui): prevent invite registration form header overlap by @hiasky in https://github.com/Tencent/WeKnora/pull/2996
* fix(session): serve org-shared KB images through the message file proxy by @vicfei in https://github.com/Tencent/WeKnora/pull/3069
* fix(knowledge): confirm document deletion before reporting success by @lyingbug in https://github.com/Tencent/WeKnora/pull/3073
* fix(preview): lazy-load markdown images without dropping data URIs by @lyingbug in https://github.com/Tencent/WeKnora/pull/3075
* feat(integrations): add CLI setup page by @lyingbug in https://github.com/Tencent/WeKnora/pull/3081
* fix(wiki): keep folder names that look like page-type labels when placing pages by @coderdailyone in https://github.com/Tencent/WeKnora/pull/3076
* refactor(system): signal create-user idempotency via HTTP status by @mdrkrg in https://github.com/Tencent/WeKnora/pull/3077
* fix(chat): send one completion-token field per provider by @lyingbug in https://github.com/Tencent/WeKnora/pull/3082
* feat(i18n): add Japanese (ja-JP) locale support by @3a3 in https://github.com/Tencent/WeKnora/pull/3080
* fix(i18n): proofread ja-JP locale strings by @3a3 in https://github.com/Tencent/WeKnora/pull/3084
* feat(ui): multi-stage Docker frontend build (no host npm) by @huangcheng in https://github.com/Tencent/WeKnora/pull/3074
* feat(datasource): persist source created time; Feishu uses content edit time for source_updated_at by @xiaoyaner0201 in https://github.com/Tencent/WeKnora/pull/3083
* fix(frontend): recover the chat stream from an expired access token by @hjxccc in https://github.com/Tencent/WeKnora/pull/3028
* fix(wiki): make the category_path directory filter match on SQLite by @coderdailyone in https://github.com/Tencent/WeKnora/pull/3078
* feat(web-search): add Bocha AI Search provider by @vicfei in https://github.com/Tencent/WeKnora/pull/3036
* fix(i18n): restore natural Japanese in proofread strings by @3a3 in https://github.com/Tencent/WeKnora/pull/3085
* fix(agent): improve web search and persistent page reading by @lyingbug in https://github.com/Tencent/WeKnora/pull/3086
* docs: update website guides and improve writing style by @lyingbug in https://github.com/Tencent/WeKnora/pull/3095
* refactor(agent): discover and invoke MCP tools on demand by @lyingbug in https://github.com/Tencent/WeKnora/pull/3094
* fix(frontend): keep agent editor dependency loading alive for contributors by @vicfei in https://github.com/Tencent/WeKnora/pull/3096
* fix: remove GPL converter and bundle third-party license sources by @lyingbug in https://github.com/Tencent/WeKnora/pull/3105
* refactor(resource-access): unify scoped authorization and transfer recovery by @lyingbug in https://github.com/Tencent/WeKnora/pull/3097
* feat(sandbox): add an interactive terminal and files tab beside chat by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3110
* fix(mcp): require schema discovery before calls and render tool results by @lyingbug in https://github.com/Tencent/WeKnora/pull/3113
* fix(graph): feed OCR chunks to graph extraction instead of image-link placeholders by @3a3 in https://github.com/Tencent/WeKnora/pull/3092
* docs: add English and bilingual product tours to READMEs by @lyingbug in https://github.com/Tencent/WeKnora/pull/3117
* feat(mcp)!: persist tool catalogs and add guided configuration by @lyingbug in https://github.com/Tencent/WeKnora/pull/3118
* fix(skills): accept UTF-8 BOM in skill manifests by @lyingbug in https://github.com/Tencent/WeKnora/pull/3126
* feat(mcp)!: streamline setup and use short routing handles by @lyingbug in https://github.com/Tencent/WeKnora/pull/3127
* feat(chat): append messages to a running agent turn by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3123
* feat(sandbox): unify the interactive PTY prompt and reconnect running sandboxes by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3128
* fix(chat): preserve steering continuity and composer focus by @lyingbug in https://github.com/Tencent/WeKnora/pull/3136
* fix(embed): add missing chat and references i18n keys by @tsukiga-kirei in https://github.com/Tencent/WeKnora/pull/3137
* fix(chat): improve sandbox artifact navigation and steering consistency by @lyingbug in https://github.com/Tencent/WeKnora/pull/3138
* fix(chat): prevent pending steer messages from jittering during streaming by @lyingbug in https://github.com/Tencent/WeKnora/pull/3141
* fix(skills): verify runtime prerequisites and support installer steering by @lyingbug in https://github.com/Tencent/WeKnora/pull/3140
* fix(skills): pin install guidance and generalize runtime prompts by @lyingbug in https://github.com/Tencent/WeKnora/pull/3143
* fix(agent): prevent MCP answers from citing unrelated KB sources by @lyingbug in https://github.com/Tencent/WeKnora/pull/3144
* fix(preview): improve keyboard scrolling and fullscreen controls by @lyingbug in https://github.com/Tencent/WeKnora/pull/3152
* fix(preview): align header controls and artifact cards by @lyingbug in https://github.com/Tencent/WeKnora/pull/3153
* fix(preview): support storage in sandboxed HTML artifacts by @lyingbug in https://github.com/Tencent/WeKnora/pull/3155
* feat(faq): filter entries by enabled status by @langcaiye in https://github.com/Tencent/WeKnora/pull/3157
* feat(sandbox): add safe live file management to session sandboxes by @WHUTcjh-2024 in https://github.com/Tencent/WeKnora/pull/3181
* Revert "feat(sandbox): add safe live file management to session sandboxes" by @lyingbug in https://github.com/Tencent/WeKnora/pull/3188
* fix(agent): honor MCP service advanced_config.timeout for CallTool window by @LuckVd in https://github.com/Tencent/WeKnora/pull/3183
* feat(browser): connect local Chrome with task controls and display modes by @lyingbug in https://github.com/Tencent/WeKnora/pull/3180
* feat(browser): polish connection settings, open tasks in a new window, and streamline prompts by @lyingbug in https://github.com/Tencent/WeKnora/pull/3193
* fix(browser): support human handoffs and resume interrupted tasks by @lyingbug in https://github.com/Tencent/WeKnora/pull/3200
* fix(browser): complete task cancellation, screenshots, and result display by @lyingbug in https://github.com/Tencent/WeKnora/pull/3206
* fix(preview): repair PptxGenJS slide masters so previews render by @lyingbug in https://github.com/Tencent/WeKnora/pull/3208
* fix(tracing): keep sandbox RPC spans under their owning operations by @lyingbug in https://github.com/Tencent/WeKnora/pull/3207
* feat(sandbox): stream live shell and install command output by @lyingbug in https://github.com/Tencent/WeKnora/pull/3209
* fix(sandbox): use E2B BuildID as template version by @lyingbug in https://github.com/Tencent/WeKnora/pull/3211
* feat(browser): add picture-in-picture task preview by @lyingbug in https://github.com/Tencent/WeKnora/pull/3212
* fix(memory): preserve extraction progress and atomic memory updates by @lyingbug in https://github.com/Tencent/WeKnora/pull/3224
* fix(memory): rank memories by the query, not by importance by @lyingbug in https://github.com/Tencent/WeKnora/pull/3226
* fix(datasource): validate replacement credentials before saving by @lyingbug in https://github.com/Tencent/WeKnora/pull/3240
* fix(embed): enforce host origin allowlists on framed pages by @lyingbug in https://github.com/Tencent/WeKnora/pull/3241
* fix(skills): isolate skill drops from global file uploads by @lyingbug in https://github.com/Tencent/WeKnora/pull/3243
* fix: improve model editor connection tests and save flow by @lyingbug in https://github.com/Tencent/WeKnora/pull/3244
* fix(milvus): support multilingual BM25 retrieval by @Jonesxq in https://github.com/Tencent/WeKnora/pull/3235
* fix(models): protect auto-tag model references by @hjxccc in https://github.com/Tencent/WeKnora/pull/3242
* fix(datasource): preserve distinct GitLab files during deduplication by @lyingbug in https://github.com/Tencent/WeKnora/pull/3246
* feat(datasource): add DingTalk Docs integration with safe sync and localization by @WHUTcjh-2024 in https://github.com/Tencent/WeKnora/pull/2313
* fix(im): improve Yunzhijia WebSocket stale connection recovery by @jacentsao in https://github.com/Tencent/WeKnora/pull/3238
* feat(sandbox): add a graphical desktop to session sandboxes by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3245
* fix(agent): PUT no longer erases the avatar, and driver errors stay server-side by @VictorMaznyuk in https://github.com/Tencent/WeKnora/pull/3230
* fix(i18n): add missing MCP OAuth locale keys by @Zhao0335 in https://github.com/Tencent/WeKnora/pull/3202
* fix(retrieval): floor ES script_score cosine at 0 to stop 400s on negative similarity by @dzc-bit in https://github.com/Tencent/WeKnora/pull/3165
* fix: report qdrant update failures by @Goodnight77 in https://github.com/Tencent/WeKnora/pull/3115
* fix(agent): stop emitting terminal answer events for retryable empty stops by @vicfei in https://github.com/Tencent/WeKnora/pull/3104
* fix: clean up wiki data when deleting knowledge base by @ChenRussell in https://github.com/Tencent/WeKnora/pull/3109
* fix(feishu): preserve active streams during long-running QA by @acse-bq23 in https://github.com/Tencent/WeKnora/pull/3239
* feat(mcp): pass fileName and folder filters to knowledge APIs by @Zhao0335 in https://github.com/Tencent/WeKnora/pull/3204
* fix(im): stop streaming when agent execution completes by @jjj-n in https://github.com/Tencent/WeKnora/pull/3124
* feat(helm): expose the upload size limit as global.maxFileSizeMB by @po-et in https://github.com/Tencent/WeKnora/pull/3268
* test(datasource): keep yuque and ima config tests off live DNS by @po-et in https://github.com/Tencent/WeKnora/pull/3264
* fix(im): finalize replies after agent QA returns by @lyingbug in https://github.com/Tencent/WeKnora/pull/3261
* fix(knowledge): allow XMind files in knowledge imports by @jacentsao in https://github.com/Tencent/WeKnora/pull/3252
* fix(im): preserve errors emitted after agent completion by @lyingbug in https://github.com/Tencent/WeKnora/pull/3275
* fix(storage): use virtual-hosted addressing for OBS bucket requests by @vicfei in https://github.com/Tencent/WeKnora/pull/3273
* fix(ui): distinguish file types and enlarge chat resource chips by @lyingbug in https://github.com/Tencent/WeKnora/pull/3285
* Revert "fix(ui): distinguish file types and enlarge chat resource chips" by @lyingbug in https://github.com/Tencent/WeKnora/pull/3286
* feat(website): add product homepage and unified docs deployment by @lyingbug in https://github.com/Tencent/WeKnora/pull/3297
* feat(datasource): add Confluence sync by @jacentsao in https://github.com/Tencent/WeKnora/pull/3287
* feat(knowledge): add in-place file replacement primitive by @lyingbug in https://github.com/Tencent/WeKnora/pull/3303
* feat(knowledge): add batch file downloads by @ttommybot in https://github.com/Tencent/WeKnora/pull/3300
* chore: remove vendored archives and unused Python helpers by @lyingbug in https://github.com/Tencent/WeKnora/pull/3307
* fix: align client sessions and integration request handling by @lyingbug in https://github.com/Tencent/WeKnora/pull/3305
* feat(website): add WeChat and Tencent Cloud usage options by @lyingbug in https://github.com/Tencent/WeKnora/pull/3314
* refactor(frontend): remove unused components and share tag selection logic by @lyingbug in https://github.com/Tencent/WeKnora/pull/3321
* refactor(frontend): share skill installer model configuration by @lyingbug in https://github.com/Tencent/WeKnora/pull/3322
* refactor(frontend): share skill install progress subscriptions by @lyingbug in https://github.com/Tencent/WeKnora/pull/3323
* fix(browser): align BrowserSkill 0.3.0 and repair task lifecycle by @lyingbug in https://github.com/Tencent/WeKnora/pull/3335
* fix(milvus): preserve keyword retrieval scores by @Jonesxq in https://github.com/Tencent/WeKnora/pull/3280
* fix(retrieval): bound keyword-only BM25 scores before rerank by @lyingbug in https://github.com/Tencent/WeKnora/pull/3344
* fix(knowledge): stop deleting rows from blocking duplicate uploads by @vicfei in https://github.com/Tencent/WeKnora/pull/3339
* feat(web-search): add Serply provider by @googio in https://github.com/Tencent/WeKnora/pull/3330
* fix(repository): make message keyword search work on SQLite and MySQL by @coderdailyone in https://github.com/Tencent/WeKnora/pull/3325
* fix(skills): stop racing background install in retry tests by @lyingbug in https://github.com/Tencent/WeKnora/pull/3346
* fix(initialization): stamp the KB's tenant onto created models by @vicfei in https://github.com/Tencent/WeKnora/pull/3336
* feat(session): fork conversations from a historical user message by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3304
* fix(chat): refine fork feedback and user message actions by @lyingbug in https://github.com/Tencent/WeKnora/pull/3348
* fix(browser): soften handoff UI and prevent preview overlay flicker by @lyingbug in https://github.com/Tencent/WeKnora/pull/3347
* refactor(frontend): share citation popover lifecycle by @lyingbug in https://github.com/Tencent/WeKnora/pull/3349
* refactor: remove unused private Go helpers by @lyingbug in https://github.com/Tencent/WeKnora/pull/3354
* fix(sandbox): separate file access from artifact publishing by @lyingbug in https://github.com/Tencent/WeKnora/pull/3356
* refactor(datasource): share connector filename sanitization by @lyingbug in https://github.com/Tencent/WeKnora/pull/3355
* refactor(frontend): consolidate knowledge tag filters and remove stale styles by @lyingbug in https://github.com/Tencent/WeKnora/pull/3357
* fix(docker): upgrade ParadeDB for CPUs without AVX2 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3359
* perf(sandbox): reduce redundant remote calls by @lyingbug in https://github.com/Tencent/WeKnora/pull/3358
* feat(knowledge): make document summary generation optional by @lyingbug in https://github.com/Tencent/WeKnora/pull/3363
* docs: remove unsupported Homebrew installation guidance by @lyingbug in https://github.com/Tencent/WeKnora/pull/3365
* perf(chunk): speed up chunk ingestion and batch updates by @lyingbug in https://github.com/Tencent/WeKnora/pull/3369
* refactor(modelcontext): consolidate source_refs parsing, fixed data_analysis table, and identifier leak report by @lyingbug in https://github.com/Tencent/WeKnora/pull/3372
* feat(knowledge): derive knowledge base descriptions from document profiles by @lyingbug in https://github.com/Tencent/WeKnora/pull/3370
* feat(mcp): add built-in MCP server with per-workspace endpoints by @lyingbug in https://github.com/Tencent/WeKnora/pull/3371
* feat(mcp): show the endpoint token as the drawer's second step by @lyingbug in https://github.com/Tencent/WeKnora/pull/3374
* refactor(frontend): style consistency pass — shared shells, tokens, unified confirmations by @lyingbug in https://github.com/Tencent/WeKnora/pull/3376
* fix(knowledge): recover stranded deleting rows and align the KB count by @vicfei in https://github.com/Tencent/WeKnora/pull/3367
* fix(agent): report failed tool executions as tool_result, not error by @Greenplumwine in https://github.com/Tencent/WeKnora/pull/3340
* feat(artifacts): artifacts library page backed by a message_artifacts table by @lyingbug in https://github.com/Tencent/WeKnora/pull/3384
* refactor(agent): consolidate knowledge retrieval tools into search_knowledge, read_document, list_documents by @lyingbug in https://github.com/Tencent/WeKnora/pull/3381
* fix(frontend): scale upload timeout with payload size by @lvchenyang in https://github.com/Tencent/WeKnora/pull/3394
* fix(agent): make read_document queries keyword-based and bound its pages by @lyingbug in https://github.com/Tencent/WeKnora/pull/3395
* fix(agent): score search_knowledge reranks with the document title by @lyingbug in https://github.com/Tencent/WeKnora/pull/3396
* fix(agent): allow keyword retry after search_knowledge rerank rejection by @lyingbug in https://github.com/Tencent/WeKnora/pull/3397
* fix(frontend): remove overlapping pipeline offset labels by @hiasky in https://github.com/Tencent/WeKnora/pull/3398
* feat(frontend): show overall progress for knowledge file uploads by @lyingbug in https://github.com/Tencent/WeKnora/pull/3399
* fix(agent): search bound knowledge bases before answering, and pass suggested-question origins by @lyingbug in https://github.com/Tencent/WeKnora/pull/3400
* feat(audit): 知识库活动记录对 API Key 操作额外显示 Key 名称 by @MercuialC in https://github.com/Tencent/WeKnora/pull/3405
* fix(skills): upgrade outdated sandbox skills without rolling back the catalog or taking them offline by @lyingbug in https://github.com/Tencent/WeKnora/pull/3406
* feat(agent): persist compaction checkpoints across turns by @lyingbug in https://github.com/Tencent/WeKnora/pull/3407
* fix(chunking): 修复内联 HTML 表格与保护模式导致的超长 chunk by @neoczr in https://github.com/Tencent/WeKnora/pull/3404
* fix(migrations): renumber the context checkpoint migration to 000105 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3412
* fix(security): close cross-workspace access paths in shared spaces by @lyingbug in https://github.com/Tencent/WeKnora/pull/3408
* feat(agent): size agent history by the window and calibrate token estimates by @lyingbug in https://github.com/Tencent/WeKnora/pull/3413
* fix(security): close the low-severity shared-space findings by @lyingbug in https://github.com/Tencent/WeKnora/pull/3416
* fix(ui): 优化知识库文档交互与对话布局 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3420
* fix(ui): 优化对话布局、导航与产物和引用展示 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3427
* fix(wiki): batch taxonomy embeddings instead of one request per set by @po-et in https://github.com/Tencent/WeKnora/pull/3422
* fix(embedding): preserve WeKnoraCloud batch and concurrency limits by @lyingbug in https://github.com/Tencent/WeKnora/pull/3428
* fix(ui): 优化资源卡片、标签分组与共享空间创建布局 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3429
* fix(ui): 统一资源图标并调整会话分叉标识 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3430
* fix(storage): let object storage transfers outlive 30 seconds by @po-et in https://github.com/Tencent/WeKnora/pull/3368
* perf(chat): replay a stored stream a segment at a time by @po-et in https://github.com/Tencent/WeKnora/pull/3366
* fix(compose): target configured database in dev healthcheck by @yushangcan in https://github.com/Tencent/WeKnora/pull/3289
* fix(ima): traverse subfolders using list response media IDs by @yushangcan in https://github.com/Tencent/WeKnora/pull/3288
* fix(image): stop appending KB custom instructions to the OCR prompt OCR提示词不再错误的附加图片解析用户自定义提示词 by @tayadwx in https://github.com/Tencent/WeKnora/pull/3291
* fix(browser): update BrowserSkill and use native session lifecycle by @lyingbug in https://github.com/Tencent/WeKnora/pull/3434
* fix(ui): 为资源列表标题添加图标并高亮共享筛选 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3437
* fix(qdrant): treat a missing dimension collection as an empty delete target by @LeonPure in https://github.com/Tencent/WeKnora/pull/3419
* fix(storage): keep the SSRF redirect policy on the KS3 client by @po-et in https://github.com/Tencent/WeKnora/pull/3440
* docs(env): warn against SEARXNG_PORT colliding with APP_PORT by @Frank-zhu0404 in https://github.com/Tencent/WeKnora/pull/3385
* test(im): close the lifecycle test database and keep its name unique by @ankit373 in https://github.com/Tencent/WeKnora/pull/3433
* fix(wiki): clarify alias matching rules in deduplication prompt by @autumnseasonism in https://github.com/Tencent/WeKnora/pull/3418
* fix(frontend): stop seeding new answer events with prior-round text by @hata33 in https://github.com/Tencent/WeKnora/pull/3386
* feat(knowledge): rework the parse timeline panel's layout and failure card by @lyingbug in https://github.com/Tencent/WeKnora/pull/3448
* feat(artifacts): let users delete generated files by @lyingbug in https://github.com/Tencent/WeKnora/pull/3447
* fix(knowledge): stop two parse paths from stranding a row in processing by @lyingbug in https://github.com/Tencent/WeKnora/pull/3445
* fix(agent): end the turn when the completion cap truncates an answer by @lyingbug in https://github.com/Tencent/WeKnora/pull/3449
* docs(db): stop claiming MySQL is a supported DB_DRIVER by @lyingbug in https://github.com/Tencent/WeKnora/pull/3454
* feat(chat): rework the saved-answer Markdown editor by @lyingbug in https://github.com/Tencent/WeKnora/pull/3467
* ci(lint): filter new issues from git instead of the PR patch API by @lyingbug in https://github.com/Tencent/WeKnora/pull/3473
* feat(session): in-place rewind with workspace checkpoint reset by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3469
* fix(embedding): two wire-level bugs in the remote embedders by @lyingbug in https://github.com/Tencent/WeKnora/pull/3484
* refactor(models): rebuild vendor integration on protocol + catalog + vendor layers by @lyingbug in https://github.com/Tencent/WeKnora/pull/3470
* fix(models): correct four vendor request shapes that contradict the docs by @lyingbug in https://github.com/Tencent/WeKnora/pull/3489
* refactor(rerank): move the wire formats into protocol packages, and correct the vendor facts by @lyingbug in https://github.com/Tencent/WeKnora/pull/3488
* refactor(embedding): move the wire formats into protocol packages, and correct the vendor facts by @lyingbug in https://github.com/Tencent/WeKnora/pull/3500
* fix(queue): order ClaimBatch by fail_count so retries cannot starve new work by @Fuzzycorrect in https://github.com/Tencent/WeKnora/pull/3444
* fix(agent): scope the @Skill and @MCP pickers to the agent that will run by @lvchenyang in https://github.com/Tencent/WeKnora/pull/3475
* fix(suggestion): avoid echoing the current query by @hjxccc in https://github.com/Tencent/WeKnora/pull/2582
* fix(wiki): skip ambiguous single-Han auto-links by @JYao-Chen in https://github.com/Tencent/WeKnora/pull/2860
* fix(graph): increase entity extraction output budget by @JYao-Chen in https://github.com/Tencent/WeKnora/pull/2859
* fix(knowledge): hide mutation controls on read-only shared knowledge bases by @LuckVd in https://github.com/Tencent/WeKnora/pull/3103
* fix(wiki): degrade gracefully when revision snapshot is missing by @ChenRussell in https://github.com/Tencent/WeKnora/pull/3112
* fix(wiki): enrich cited chunk content with image captions in Reduce phase 实体/摘要页面引用子块时同样使用富文本内容 by @tayadwx in https://github.com/Tencent/WeKnora/pull/3292
* chore: remove empty root package-lock.json by @younggglcy in https://github.com/Tencent/WeKnora/pull/3482
* feat(localsandbox): add host OS sandbox core and macOS Seatbelt backend by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3472
* refactor(asr): move the wire format into protocol packages, and cover every vendor whose docs offer ASR by @lyingbug in https://github.com/Tencent/WeKnora/pull/3503
* fix: remove temp file when TempFileContext write fails inside __enter__ by @Linxiushen in https://github.com/Tencent/WeKnora/pull/3495
* fix(storage): strip storage-backend scope in local provider path normalization by @YG52052051 in https://github.com/Tencent/WeKnora/pull/2979
* fix(container): wire shared agent lookup for MCP handler by @lyingbug in https://github.com/Tencent/WeKnora/pull/3511
* refactor(models): delete the internal/models/provider façade by @lyingbug in https://github.com/Tencent/WeKnora/pull/3506
* fix(sandbox): resolve a session's pinned sandbox in the workspace that owns it by @lvchenyang in https://github.com/Tencent/WeKnora/pull/3471
* fix(parser): keep PDFs on builtin instead of defaulting to anydoc by @lvchenyang in https://github.com/Tencent/WeKnora/pull/3508
* test(rerank): pin every vendor's request, and correct three facts the table surfaced by @lyingbug in https://github.com/Tencent/WeKnora/pull/3513
* fix(browserskill): release connection capacity when members disconnect by @lyingbug in https://github.com/Tencent/WeKnora/pull/3519
* fix(upload): accept XMind files before parser engine discovery by @lyingbug in https://github.com/Tencent/WeKnora/pull/3521
* fix(chat): restore shared workspace images after stream completion by @lyingbug in https://github.com/Tencent/WeKnora/pull/3523
* fix(skill): count create-time sandbox env vars in the required check by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3543
* fix(mcp): MCP 端点会话按 StorageID 归属查找，修复 ask 工具必定失败 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3528
* fix(wiki): release inflight slot on task cancellation by @kerthans in https://github.com/Tencent/WeKnora/pull/3507
* fix(mcp): proxy server endpoints through frontend gateways by @lyingbug in https://github.com/Tencent/WeKnora/pull/3546
* fix(upload): clean multipart temporary files by @estongu in https://github.com/Tencent/WeKnora/pull/3541
* docs: link pgvector issues in retrieval engine guide by @younggglcy in https://github.com/Tencent/WeKnora/pull/3481
* fix(docker): pull MinIO images from quay.io instead of Docker Hub by @renchao8697 in https://github.com/Tencent/WeKnora/pull/3542
* fix(knowledge): bind extracted images to their document and unscope shared-KB parent lookups by @vicfei in https://github.com/Tencent/WeKnora/pull/3493
* fix(knowledge): stop synthesizing never-run stages as failed by @ankit373 in https://github.com/Tencent/WeKnora/pull/3460
* feat(sandbox): run unpinned Lite sessions on the host OS sandbox by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3549
* fix(docreader): stop a non-ASCII base64 payload from failing the whole parse by @vinhchuquang in https://github.com/Tencent/WeKnora/pull/3520
* docs: point the RAG pipeline and agent docs at internal/modelcontext by @Jinzhengxu in https://github.com/Tencent/WeKnora/pull/3545
* fix(chat): surface truncated quick answers by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/3515
* fix(helm): point the MinIO image at quay.io by @lyingbug in https://github.com/Tencent/WeKnora/pull/3553
* fix(mcp): assemble multiline SSE events before parsing by @wxggzz in https://github.com/Tencent/WeKnora/pull/3309
* fix(knowledge): stop documents from getting stuck in processing/finalizing by @lyingbug in https://github.com/Tencent/WeKnora/pull/3555
* feat(knowledge): flag documents that stop making progress by @lyingbug in https://github.com/Tencent/WeKnora/pull/3557
* fix(chat): show full date for older message timestamps by @lyingbug in https://github.com/Tencent/WeKnora/pull/3576
* fix(chat): align knowledge citation hover with outline cards by @lyingbug in https://github.com/Tencent/WeKnora/pull/3578
* fix(chat): prevent overscroll bounce from moving composer by @lyingbug in https://github.com/Tencent/WeKnora/pull/3579
* docs: 迁移有效文档至 website-docs 并清理旧文档 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3580
* fix(chat): keep composer fixed while messages overscroll by @lyingbug in https://github.com/Tencent/WeKnora/pull/3583
* fix(browser): use unmodified BrowserSkill upstream and remove downstream patches by @lyingbug in https://github.com/Tencent/WeKnora/pull/3563
* fix(browser): refine connection and preview UI with extension version by @lyingbug in https://github.com/Tencent/WeKnora/pull/3591
* fix(agent): give local_browser one text cap and per-method signatures by @lyingbug in https://github.com/Tencent/WeKnora/pull/3604
* fix(chat): report truncated model fallback answers by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/3573
* fix(graph): 给 Neo4j SearchNode 加上种子上限与行数兜底，避免一次查询拉回整个邻域 by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3550
* fix(wiki): reuse cross-type page for same-title items instead of creating twins by @LuckVd in https://github.com/Tencent/WeKnora/pull/3547
* fix(docparser): make PaddleOCR-VL request timeout configurable by @LeonPure in https://github.com/Tencent/WeKnora/pull/3537
* feat: add configurable sorting to document and resource lists by @ttommybot in https://github.com/Tencent/WeKnora/pull/3318
* feat(im): add per-channel reply locale by @jjj-n in https://github.com/Tencent/WeKnora/pull/3455
* fix(session): reject invalid QA queries before session lookup by @yushangcan in https://github.com/Tencent/WeKnora/pull/3477
* feat(security): add a whitelist-only outbound mode that refuses before DNS by @po-et in https://github.com/Tencent/WeKnora/pull/3393
* docs(ollama): document embedding model config and RAM guidance by @Frank-zhu0404 in https://github.com/Tencent/WeKnora/pull/3531
* fix(docreader): kill timed-out converter process groups by @baka-world in https://github.com/Tencent/WeKnora/pull/2990
* feat(lite): let new chats bind a host project directory by @nullptr-error in https://github.com/Tencent/WeKnora/pull/3554
* fix(tenant): stop wiki tasks of soft-deleted tenants from issuing model requests by @LuckVd in https://github.com/Tencent/WeKnora/pull/3602
* fix(wiki): 整页重写被补全预算截断时续写，续写用尽则拒绝写回（长名单 146→119） by @linus-liu-web in https://github.com/Tencent/WeKnora/pull/3582
* refactor(models): separate provider definitions, model catalogs, and runtime configuration by @lyingbug in https://github.com/Tencent/WeKnora/pull/3589
* feat(chat): add per-session reasoning controls and polish model setup by @lyingbug in https://github.com/Tencent/WeKnora/pull/3619
* fix(gitlab): prevent compare failures from triggering full resync by @hahahahahayesyeseys in https://github.com/Tencent/WeKnora/pull/3622
* fix(docs): update remaining references to migrated documentation by @lyingbug in https://github.com/Tencent/WeKnora/pull/3641
* fix(gitlab): paginate project resource discovery by @yeliheng-010 in https://github.com/Tencent/WeKnora/pull/3624
* docs: sync website-docs, homepage and changelog for v0.8.2 by @lyingbug in https://github.com/Tencent/WeKnora/pull/3632
* fix(mcp): expose wiki output in structured content by @dvd233 in https://github.com/Tencent/WeKnora/pull/3590
* fix(mcp): return accessible image URLs from existing tools by @lyingbug in https://github.com/Tencent/WeKnora/pull/3650
* chore: prepare v0.8.2 — release blocker fixes, version bump, release notes by @lyingbug in https://github.com/Tencent/WeKnora/pull/3651

## New Contributors
* @ouhaibing5 made their first contribution in https://github.com/Tencent/WeKnora/pull/3010
* @Legimity made their first contribution in https://github.com/Tencent/WeKnora/pull/3031
* @linhongyu510 made their first contribution in https://github.com/Tencent/WeKnora/pull/3030
* @myysophia made their first contribution in https://github.com/Tencent/WeKnora/pull/2989
* @MaxFreedomPollard made their first contribution in https://github.com/Tencent/WeKnora/pull/3056
* @po-et made their first contribution in https://github.com/Tencent/WeKnora/pull/3055
* @yushangcan made their first contribution in https://github.com/Tencent/WeKnora/pull/3050
* @WLH55 made their first contribution in https://github.com/Tencent/WeKnora/pull/3068
* @dzc-bit made their first contribution in https://github.com/Tencent/WeKnora/pull/3041
* @vicfei made their first contribution in https://github.com/Tencent/WeKnora/pull/3069
* @coderdailyone made their first contribution in https://github.com/Tencent/WeKnora/pull/3076
* @3a3 made their first contribution in https://github.com/Tencent/WeKnora/pull/3080
* @huangcheng made their first contribution in https://github.com/Tencent/WeKnora/pull/3074
* @xiaoyaner0201 made their first contribution in https://github.com/Tencent/WeKnora/pull/3083
* @VictorMaznyuk made their first contribution in https://github.com/Tencent/WeKnora/pull/3230
* @Zhao0335 made their first contribution in https://github.com/Tencent/WeKnora/pull/3202
* @acse-bq23 made their first contribution in https://github.com/Tencent/WeKnora/pull/3239
* @jjj-n made their first contribution in https://github.com/Tencent/WeKnora/pull/3124
* @googio made their first contribution in https://github.com/Tencent/WeKnora/pull/3330
* @lvchenyang made their first contribution in https://github.com/Tencent/WeKnora/pull/3394
* @MercuialC made their first contribution in https://github.com/Tencent/WeKnora/pull/3405
* @neoczr made their first contribution in https://github.com/Tencent/WeKnora/pull/3404
* @tayadwx made their first contribution in https://github.com/Tencent/WeKnora/pull/3291
* @Frank-zhu0404 made their first contribution in https://github.com/Tencent/WeKnora/pull/3385
* @ankit373 made their first contribution in https://github.com/Tencent/WeKnora/pull/3433
* @autumnseasonism made their first contribution in https://github.com/Tencent/WeKnora/pull/3418
* @hata33 made their first contribution in https://github.com/Tencent/WeKnora/pull/3386
* @Fuzzycorrect made their first contribution in https://github.com/Tencent/WeKnora/pull/3444
* @younggglcy made their first contribution in https://github.com/Tencent/WeKnora/pull/3482
* @Linxiushen made their first contribution in https://github.com/Tencent/WeKnora/pull/3495
* @YG52052051 made their first contribution in https://github.com/Tencent/WeKnora/pull/2979
* @linus-liu-web made their first contribution in https://github.com/Tencent/WeKnora/pull/3528
* @kerthans made their first contribution in https://github.com/Tencent/WeKnora/pull/3507
* @renchao8697 made their first contribution in https://github.com/Tencent/WeKnora/pull/3542
* @vinhchuquang made their first contribution in https://github.com/Tencent/WeKnora/pull/3520
* @Jinzhengxu made their first contribution in https://github.com/Tencent/WeKnora/pull/3545
* @hahahahahayesyeseys made their first contribution in https://github.com/Tencent/WeKnora/pull/3515
* @wxggzz made their first contribution in https://github.com/Tencent/WeKnora/pull/3309
* @baka-world made their first contribution in https://github.com/Tencent/WeKnora/pull/2990
* @yeliheng-010 made their first contribution in https://github.com/Tencent/WeKnora/pull/3624
* @dvd233 made their first contribution in https://github.com/Tencent/WeKnora/pull/3590

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.8.0...v0.8.2

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.8.2` · 2026-09-24 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.8.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
