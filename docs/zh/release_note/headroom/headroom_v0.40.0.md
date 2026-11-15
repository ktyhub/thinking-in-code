---
title: "headroom v0.40.0"
project: "headroom"
repo: "headroomlabs-ai/headroom"
tag: "v0.40.0"
version: "v0.40.0"
published: "2026-10-06"
type: "minor"
lang: "zh"
---

# headroom v0.40.0

## [0.40.0](https://github.com/headroomlabs-ai/headroom/compare/v0.39.1...v0.40.0) (2026-10-06)


### ⚠ 重大变更

* **代理：** 读取 HEADROOM_LICENSE 并选择加入使用情况报告 ([#3857](https://github.com/headroomlabs-ai/headroom/issues/3857))
*删除crewai额外的内容以从锁定文件中删除chromadb（[#3870]（https://github.com/headroomlabs-ai/headroom/issues/3870））

### 特点

* **压缩：** 添加每条消息压缩诊断 ([#3058](https://github.com/headroomlabs-ai/headroom/issues/3058)) ([fef99cc](https://github.com/headroomlabs-ai/headroom/commit/fef99cc5b444bb16ac33fe8ec70108f7c0271de1))
* **压缩：** 实时代理致密模式，无损且缓存安全 ([#1402](https://github.com/headroomlabs-ai/headroom/issues/1402)) ([84f0e84](https://github.com/headroomlabs-ai/headroom/commit/84f0e84dccd3736b4a0c6c817bc83da307a5fbb8))
* **仪表板：** 将 CO2 保存卡添加到仪表板和 /stats API ([#1369](https://github.com/headroomlabs-ai/headroom/issues/1369)) ([2bc9419](https://github.com/headroomlabs-ai/headroom/commit/2bc94194671548c5def53809f736340285e20e76))
* **仪表板：** 给出一套规范家庭的节省指标 ([#3320](https://github.com/headroomlabs-ai/headroom/issues/3320)) ([6af7efe](https://github.com/headroomlabs-ai/headroom/commit/6af7efe0d1fa9786d1fd5e5dc9884b7750c0f569))
* **学习：** 添加 agy (Antigravity CLI) 作为分析后端 ([#3939](https://github.com/headroomlabs-ai/headroom/issues/3939)) ([4ba231a](https://github.com/headroomlabs-ai/headroom/commit/4ba231ab3d51c409804af24ea03692aed33deb2e))
* **live-zone:** 连接源代码和纯文本调度臂 ([#3227](https://github.com/headroomlabs-ai/headroom/issues/3227)) ([49f69be](https://github.com/headroomlabs-ai/headroom/commit/49f69be2836e90cbd210e39d82b36d514404cc76))
* **内存：** 在重新启动时保留 TrafficLearner 待定证据 + 公开学习者统计信息 ([#3104](https://github.com/headroomlabs-ai/headroom/issues/3104)) ([4257ed4](https://github.com/headroomlabs-ai/headroom/commit/4257ed4df377a93cd2e0d526ef61d2a32cbc54cf))
* **代理：** 添加 x-headroom-keep-last-turns 标头以进行每个请求上下文修剪（问题 [#2858](https://github.com/headroomlabs-ai/headroom/issues/2858)）（[#3059](https://github.com/headroomlabs-ai/headroom/issues/3059)）（[246162d](https://github.com/headroomlabs-ai/headroom/commit/246162d70bbc68cc1b7d44a015ddaf320cd23a3d)）
* **代理：**通过本机转换路由 Gemini 插件流量 ([#2697](https://github.com/headroomlabs-ai/headroom/issues/2697)) ([0ad996a](https://github.com/headroomlabs-ai/headroom/commit/0ad996a82eef65183271243fa71bb0f5653be369))
* **代理：** 在 Unix 域套接字上服务 (--uds) ([#3151](https://github.com/headroomlabs-ai/headroom/issues/3151)) ([e7b3baf](https://github.com/headroomlabs-ai/headroom/commit/e7b3baf236b832e1d4d086c4425b8d32560d0d7c))
* **wrap:** 为 IBM Bob CLI 添加净空包裹 bob ([#3801](https://github.com/headroomlabs-ai/headroom/issues/3801)) ([0b7dab4](https://github.com/headroomlabs-ai/headroom/commit/0b7dab47c62a8372c7bf7031d744658d71745679))
* **wrap：** 将减少源安静默认值扩展到遥测/nag 横幅 ([#2550](https://github.com/headroomlabs-ai/headroom/issues/2550)) ([3a3a465](https://github.com/headroomlabs-ai/headroom/commit/3a3a465bb129ad74f6e04f7c50e0fe7489383ba2))


### 错误修复

* **人择：** 保留失败的 CCR 延续 ([#3843](https://github.com/headroomlabs-ai/headroom/issues/3843)) ([94bb055](https://github.com/headroomlabs-ai/headroom/commit/94bb055810dc1258bd248cd0a9d0e7c51df64844))
* **backends/anyllm:** 将 Anthropic tool_choice none 映射到 OpenAI none ([#3963](https://github.com/headroomlabs-ai/headroom/issues/3963)) ([d722a64](https://github.com/headroomlabs-ai/headroom/commit/d722a6414c3896ef092a0d8764c64d9681e07410))
* **backends/litellm:** 将流使用令牌与非流路径对齐 ([#2688](https://github.com/headroomlabs-ai/headroom/issues/2688)) ([90a68e0](https://github.com/headroomlabs-ai/headroom/commit/90a68e02910126373f3d3769158925e3a55ce411))
* **backends/litellm:** 在 send_message 错误上保持上游 4xx 状态 ([#3944](https://github.com/headroomlabs-ai/headroom/issues/3944)) ([e0e41cd](https://github.com/headroomlabs-ai/headroom/commit/e0e41cd2f57a80612ddbf1568e4ad245046a0131))
* **backends/litellm:** 将 Anthropic tool_choice none 映射到 OpenAI none ([#2689](https://github.com/headroomlabs-ai/headroom/issues/2689)) ([57a5708](https://github.com/headroomlabs-ai/headroom/commit/57a57088de8920091ecaaac0e3cadf3932698154))
* **backends/litellm:** 匹配调用方密钥承载方案，不区分大小写 (RFC 7235) ([#3965](https://github.com/headroomlabs-ai/headroom/issues/3965)) ([848d7a0](https://github.com/headroomlabs-ai/headroom/commit/848d7a04b489600d3c0de0ba4f7c47cdb8ed5cc2))
* **backends/litellm:** 在 OpenAI 流数据块中报告请求的模型 ([#2690](https://github.com/headroomlabs-ai/headroom/issues/2690)) ([8538a83](https://github.com/headroomlabs-ai/headroom/commit/8538a831531bb277a6083ed2a010312a849c3050))
* **缓存：** 在替换的系统尾部保留前缀沿袭 ([#3934](https://github.com/headroomlabs-ai/headroom/issues/3934)) ([16eaec1](https://github.com/headroomlabs-ai/headroom/commit/16eaec1e95cd39135ef06f6664b309c71b03e3ad))
* **ccr:** 在直接聊天路径上回答 headroom_retrieve 而不是转发它 ([#3816](https://github.com/headroomlabs-ai/headroom/issues/3816)) ([126e144](https://github.com/headroomlabs-ai/headroom/commit/126e144876d2bd01246b5066dd5d3379b7a0e2da))
* **ccr:** 在前缀温暖之前注入 headroom_retrieve，而不是在 ([#3810](https://github.com/headroomlabs-ai/headroom/issues/3810)) ([bb8c285](https://github.com/headroomlabs-ai/headroom/commit/bb8c285714b19dadf4f96305ba5a74877a0dd103)) 之后
* **ccr:** 仅主动扩展请求会话中存在的压缩 ([#3924](https://github.com/headroomlabs-ai/headroom/issues/3924)) ([9b9a883](https://github.com/headroomlabs-ai/headroom/commit/9b9a883e96ec28e361a3d95e34ec29ecd2ef8abb))
* **ccr:** 解包 Hermes 批量 tool_call，以便 headroom_retrieve 保持豁免 ([#3839](https://github.com/headroomlabs-ai/headroom/issues/3839)) ([2f07668](https://github.com/headroomlabs-ai/headroom/commit/2f076687b069f09c69a1ce3e6f3eaaa521b838f7))
* **ci:** 清除依赖审计和门 Docker 发布 ([#3984](https://github.com/headroomlabs-ai/headroom/issues/3984)) ([67ce7d0](https://github.com/headroomlabs-ai/headroom/commit/67ce7d0f3119883a873a53c1fb1e569c80d36d71))
* **ci:** 让硬看门狗远离 pytest 分片 ([#3845](https://github.com/headroomlabs-ai/headroom/issues/3845)) ([2527431](https://github.com/headroomlabs-ai/headroom/commit/25274310ca396aaf5761d78d07106de3dfde2951))
* **ci:** 容忍丢失 Docker 缓存 blob ([#3945](https://github.com/headroomlabs-ai/headroom/issues/3945)) ([540f4da](https://github.com/headroomlabs-ai/headroom/commit/540f4da19995ce9ec60240f991a8091466ee7e51))
* 阐明 CCR 标记内容保存 ([#3175](https://github.com/headroomlabs-ai/headroom/issues/3175)) ([005a4e1](https://github.com/headroomlabs-ai/headroom/commit/005a4e146f94e2388e8e0e7eaabe5a831676b26b))
* **cli:** 尊重 CODEX_HOME 并将 wrap/init/doctor 与实时代理端口对齐 ([#3855](https://github.com/headroomlabs-ai/headroom/issues/3855)) ([5bf6612](https://github.com/headroomlabs-ai/headroom/commit/5bf661232667fe2573caafcd9b48f86c6388b5bd))
* **cli:** 在注入之前剥离未标记的 headroom_memory TOML 表 ([#3490](https://github.com/headroomlabs-ai/headroom/issues/3490)) ([08dda4c](https://github.com/headroomlabs-ai/headroom/commit/08dda4cb0b5fe69bff8aa1deeabfb2111738087c))
* **codex:** 解释为什么打包的 Codex 在没有共享服务器的情况下运行 ([#3899](https://github.com/headroomlabs-ai/headroom/issues/3899)) ([1982b3a](https://github.com/headroomlabs-ai/headroom/commit/1982b3a773093ff8262887e69ffb12e342ce4ffc))
* **codex:** 在初始化配置中保留远程压缩 ([#3410](https://github.com/headroomlabs-ai/headroom/issues/3410)) ([6df4a96](https://github.com/headroomlabs-ai/headroom/commit/6df4a963ae4cfefa2269b751874e142b02feb726))
* **codex:** 解析每轮项目上下文 ([#2636](https://github.com/headroomlabs-ai/headroom/issues/2636)) ([0396ea2](https://github.com/headroomlabs-ai/headroom/commit/0396ea2fc22d72d95d1f3bfa63bfbdd0abd74a80))
* **codex:** 剥离响应子路径直通上的陈旧压缩帧 ([#3792](https://github.com/headroomlabs-ai/headroom/issues/3792)) ([0eba65c](https://github.com/headroomlabs-ai/headroom/commit/0eba65ca4a8f04b55d568fc35829eca053a7cfac))
* **副驾驶：** 推迟钥匙串身份验证查找 ([#2739](https://github.com/headroomlabs-ai/headroom/issues/2739)) ([81a8a28](https://github.com/headroomlabs-ai/headroom/commit/81a8a28da38f1837c6b8dd6217a35a5ebb98bc87))
* **copilot:** 将时区原生令牌到期时间读取为 UTC，而不是主机本地时间 ([#3216](https://github.com/headroomlabs-ai/headroom/issues/3216)) ([2b2dc1b](https://github.com/headroomlabs-ai/headroom/commit/2b2dc1b2c93c596ad5129dff914978c5679ef126))
* **copilot:** 当 VS Code 配置文件无法查看代理设置时发出警告 ([#3919](https://github.com/headroomlabs-ai/headroom/issues/3919)) ([7b68fc2](https://github.com/headroomlabs-ai/headroom/commit/7b68fc263a925f97116e1e648cd3fa22a0f04f1b))
* **deps:** 修补 E2E 锁文件中的大括号扩展 ([#3873](https://github.com/headroomlabs-ai/headroom/issues/3873)) ([5e0435d](https://github.com/headroomlabs-ai/headroom/commit/5e0435d2156229c04951da9fafeafdf74d2abf84))
* **deps:** 补丁 urllib3 和 Next.js 建议 ([#3896](https://github.com/headroomlabs-ai/headroom/issues/3896)) ([573e385](https://github.com/headroomlabs-ai/headroom/commit/573e385f120cfd4f5e4d54c791025f2253abf08a))
* **医生：** 识别 Claude 代码的 Azure Foundry 路由 ([#1339](https://github.com/headroomlabs-ai/headroom/issues/1339)) ([d5318ac](https://github.com/headroomlabs-ai/headroom/commit/d5318ac235595b9740fccb0910ec7139c42d51a0))
* **grok:** 在共享代理上将 CLI 流量路由到 api.x.ai ([#2693](https://github.com/headroomlabs-ai/headroom/issues/2693)) ([ef1c528](https://github.com/headroomlabs-ai/headroom/commit/ef1c528e92a2b037a170f94ec8adf917322ba630))
* 尊重容器启动和运行状况检查中配置的端口 ([#2436](https://github.com/headroomlabs-ai/headroom/issues/2436)) ([1b7977c](https://github.com/headroomlabs-ai/headroom/commit/1b7977cecd95e53cccf45f04248097a8e4137b3f))
* **安装/应用：** 添加 --no-rate-limit 标志，保留在 proxy_args 中 ([#1350](https://github.com/headroomlabs-ai/headroom/issues/1350)) ([#1365](https://github.com/headroomlabs-ai/headroom/issues/1365)) ([31d0344](https://github.com/headroomlabs-ai/headroom/commit/31d03449910fbacbefdde8c04ea2c10299f9bba6))
* **安装：** 解析 Windows 任务计划程序 XML 输出 ([#3830](https://github.com/headroomlabs-ai/headroom/issues/3830)) ([c32a4f4](https://github.com/headroomlabs-ai/headroom/commit/c32a4f4131934dee48d793156fb8a536a4b2617e))
* **安装：** 将 launchd 包装器替换为代理侦听器 ([#3224](https://github.com/headroomlabs-ai/headroom/issues/3224)) ([44db755](https://github.com/headroomlabs-ai/headroom/commit/44db755ee6d85d0eb74f1fc79ef737741f87debc))
* **安装：** 使用安全模型后端来提供持久服务 ([#3646](https://github.com/headroomlabs-ai/headroom/issues/3646)) ([7287589](https://github.com/headroomlabs-ai/headroom/commit/7287589d23b76911b036d97f58c3cc043a9693c8))
* **集成：** 以 UTC 格式记录指标时间戳，而不是本地时间 ([#3117](https://github.com/headroomlabs-ai/headroom/issues/3117)) ([76ef2c3](https://github.com/headroomlabs-ai/headroom/commit/76ef2c3bc9cc302f4b638fab83467ab53cb192c1))
* **kompress:** 当安装了本机 dep 但无法加载时会降级 ([#3133](https://github.com/headroomlabs-ai/headroom/issues/3133)) ([8f3d677](https://github.com/headroomlabs-ai/headroom/commit/8f3d677354f50df9181cbb3fa002003be4e3c237))
* **kompress：** pin ModernBERT 分词器和编码器修订版 ([#3808](https://github.com/headroomlabs-ai/headroom/issues/3808)) ([2de5828](https://github.com/headroomlabs-ai/headroom/commit/2de582875b7dd1ef8754df8a2905ab4d72dab581))
* **学习：** 删除失败的 cli 错误中的回显提示 ([#3928](https://github.com/headroomlabs-ai/headroom/issues/3928)) ([f00d425](https://github.com/headroomlabs-ai/headroom/commit/f00d42561402752e56666ff35962ad8da6f7966c))
* **学习：** 通过 .git/info/exclude 将 CLAUDE.local.md 保留在 git 之外 ([#3108](https://github.com/headroomlabs-ai/headroom/issues/3108)) ([c072251](https://github.com/headroomlabs-ai/headroom/commit/c072251c10a1334265974ed33f655487518d41d0))
* **学习：** 将转录衍生的内容保留在托管块内 ([#3850](https://github.com/headroomlabs-ai/headroom/issues/3850)) ([c46e74d](https://github.com/headroomlabs-ai/headroom/commit/c46e74d06b5ffa9643f420f28d2da6686fb7e487))
* **学习：** 将 git worktree 会话合并到存储库的项目中 ([#3854](https://github.com/headroomlabs-ai/headroom/issues/3854)) ([3fdf18e](https://github.com/headroomlabs-ai/headroom/commit/3fdf18ededa162e5f46f5a996a164a6ca9de283f))
* **学习：** 保留稳定的流量模式项 ([#2293](https://github.com/headroomlabs-ai/headroom/issues/2293)) ([1631cde](https://github.com/headroomlabs-ai/headroom/commit/1631cde6865cbc03a60ade5e9baaa28837add4e4))
* **学习：** 识别转义的持久模式 ID ([#3951](https://github.com/headroomlabs-ai/headroom/issues/3951)) ([2e74f06](https://github.com/headroomlabs-ai/headroom/commit/2e74f06ecec73d365e06de6832b13f7e9fe386b7))
* **学习：** 在禁用钩子的情况下运行 claude-cli 分析 ([#3926](https://github.com/headroomlabs-ai/headroom/issues/3926)) ([2a4d34c](https://github.com/headroomlabs-ai/headroom/commit/2a4d34c47676080336577bb4b227864258cb2c78))
* **学习：** 无需工具即可运行 claude-cli 分析 ([#3892](https://github.com/headroomlabs-ai/headroom/issues/3892)) ([db90b93](https://github.com/headroomlabs-ai/headroom/commit/db90b93da9f8decb9cac7fa007674de7974a1cdb))
* **log_compressor:** 保留并命名 pytest 简短摘要失败 ([#3828](https://github.com/headroomlabs-ai/headroom/issues/3828)) ([d90b320](https://github.com/headroomlabs-ai/headroom/commit/d90b32008dc47f25737d9cef8da942fd8dc1af76))
* 使 Headroom 在 Zscaler 和其他 TLS 检查网络后面工作 ([#3831](https://github.com/headroomlabs-ai/headroom/issues/3831)) ([66258c4](https://github.com/headroomlabs-ai/headroom/commit/66258c40a4589bb2fef934dec6fb69c527ae8b44))
* **mcp:** 绑定版本检测 git 子进程 ([#3038](https://github.com/headroomlabs-ai/headroom/issues/3038)) ([0712e04](https://github.com/headroomlabs-ai/headroom/commit/0712e048b034e7f15ce10c0fc4e99795cab082ff))
* **mcp:** 渲染 TOML 服务器块时转义控制字符 ([#3964](https://github.com/headroomlabs-ai/headroom/issues/3964)) ([a96154f](https://github.com/headroomlabs-ai/headroom/commit/a96154f03b65179f23496a1ff9682cfc476eaff5))
* **mcp:** 替换 Codex/Grok MCP 范围时保留其他应用程序的表 ([#3877](https://github.com/headroomlabs-ai/headroom/issues/3877)) ([d0fd56e](https://github.com/headroomlabs-ai/headroom/commit/d0fd56e4910c997a3121aa27ab578b998b260f5a))
* **mcp:** 解析 opencode.jsonc 以进行 MCP 注册 ([#2496](https://github.com/headroomlabs-ai/headroom/issues/2496)) ([f824a27](https://github.com/headroomlabs-ai/headroom/commit/f824a270f132516443deeef2555076bf4cd40a34))
* **内存：** 将项目路由与换行标头对齐 ([#3603](https://github.com/headroomlabs-ai/headroom/issues/3603)) ([b1b005a](https://github.com/headroomlabs-ai/headroom/commit/b1b005a9a867d75cbc6b459b1f5276c272e7ac50))
* **内存：**避免将工具注入到无工具请求中 ([#3677](https://github.com/headroomlabs-ai/headroom/issues/3677)) ([46755b5](https://github.com/headroomlabs-ai/headroom/commit/46755b5f72804c32dc7d6ded5595342a2cac6157))
* **内存：** 关闭内存/fts5/图形适配器中的 SQLite 连接 ([#3153](https://github.com/headroomlabs-ai/headroom/issues/3153)) ([231a627](https://github.com/headroomlabs-ai/headroom/commit/231a6277024938d28e0ebeda29378dea3822b527))
* **内存：** 处理内联内存注入中的列表形系统内容 ([#3794](https://github.com/headroomlabs-ai/headroom/issues/3794)) ([717527b](https://github.com/headroomlabs-ai/headroom/commit/717527bc8681665326c064ed47e3f5a0284b01a5))
* **内存：** 在配对 Bash 错误恢复时忽略前导 cd 前缀 ([#3776](https://github.com/headroomlabs-ai/headroom/issues/3776)) ([143a38d](https://github.com/headroomlabs-ai/headroom/commit/143a38d56f5bddb96dd486948c3318bd8dc93372))
* **内存：** 将 LF 固定在内存写入器上并保护学习写入器换行符合约 ([#3706](https://github.com/headroomlabs-ai/headroom/issues/3706)) ([b10dd8d](https://github.com/headroomlabs-ai/headroom/commit/b10dd8db6e71903e550edd1707ce044f3520f0b4))
* **oauth2:** 仅对上游请求进行铸造和注入 ([#3849](https://github.com/headroomlabs-ai/headroom/issues/3849)) ([f977d52](https://github.com/headroomlabs-ai/headroom/commit/f977d525e4cf4ac1cad64dd59cfc6d3e54cd8e36))
* **离线：** 通过一个阻塞点使 HEADROOM_OFFLINE 成为一个真正的气隙 ([#3729](https://github.com/headroomlabs-ai/headroom/issues/3729)) ([119d1a1](https://github.com/headroomlabs-ai/headroom/commit/119d1a19393697f22140da654f0b6a10c3866d79))
* **opencode:** 隐藏生成的 Windows 控制台窗口 ([#3743](https://github.com/headroomlabs-ai/headroom/issues/3743)) ([2157400](https://github.com/headroomlabs-ai/headroom/commit/2157400b005b858fb4ab96dadde022bb22d3d244))
* **opencode:** 仅通过 Headroom 路由 LLM 流量 ([#3884](https://github.com/headroomlabs-ai/headroom/issues/3884)) ([d75eecd](https://github.com/headroomlabs-ai/headroom/commit/d75eecd814d391f51c6b98b1594c0ea180e9103a))
* **输出节省：** 在整个第一条用户消息上播种保留密钥 ([#3209](https://github.com/headroomlabs-ai/headroom/issues/3209)) ([117ff72](https://github.com/headroomlabs-ai/headroom/commit/117ff72ec9aa6385c4e6afb23f06a4a6edb59f8e))
* **解析器：**停止对垃圾信号中的 HTML 注释进行两次计数 ([#3942](https://github.com/headroomlabs-ai/headroom/issues/3942)) ([d0e9c4c](https://github.com/headroomlabs-ai/headroom/commit/d0e9c4ca4810f36c8bd71cfc567be9e72c8c06d1))
* **解析器：** 空白浪费信号始终报告零 ([#1102](https://github.com/headroomlabs-ai/headroom/issues/1102)) ([f19bc9a](https://github.com/headroomlabs-ai/headroom/commit/f19bc9a9c344e846ef61de09652c55f8db835aa1))
* **插件：** 通过插件根启动器解析钩子 CLI ([#3053](https://github.com/headroomlabs-ai/headroom/issues/3053)) ([ef7605f](https://github.com/headroomlabs-ai/headroom/commit/ef7605fdbb82a5c1a75c9192432bc719aa92927d))
* **plugins/openclaw:** 返回消息，代理没有完全改变它们进来的样子 ([#3826](https://github.com/headroomlabs-ai/headroom/issues/3826)) ([d1ad189](https://github.com/headroomlabs-ai/headroom/commit/d1ad189819d0dd87137267a17233ab2703eb803c))
* 防止在离线模式下下载 HF 标记器 ([#3783](https://github.com/headroomlabs-ai/headroom/issues/3783)) ([d503c57](https://github.com/headroomlabs-ai/headroom/commit/d503c575eabd6dfed3f390754d391a337340d7d7))
* **定价：** 添加克劳德十四行诗 5.5 / 作品 5.5 / 寓言 5.1，正确的十四行诗 5 费率 ([#3841](https://github.com/headroomlabs-ai/headroom/issues/3841)) ([0d99c56](https://github.com/headroomlabs-ai/headroom/commit/0d99c56dc519c4684079a0e1107399068342104d))
* 保护文件读取链式 shell 命令 ([#2668](https://github.com/headroomlabs-ai/headroom/issues/2668)) ([ffc3599](https://github.com/headroomlabs-ai/headroom/commit/ffc359976b09f64388ac9cb8685904c5a5f59708))
* **提供商/顶点：** 顶点路由多区域位置 ([#3802](https://github.com/headroomlabs-ai/headroom/issues/3802)) ([a9c1ac5](https://github.com/headroomlabs-ai/headroom/commit/a9c1ac5368798382b0d7e081e910a6df2a728bb0))
* **代理/人类：**在中和 headroom_retrieve 历史记录时首先保留 tool_result 块 ([#3874](https://github.com/headroomlabs-ai/headroom/issues/3874)) ([ccd9fff](https://github.com/headroomlabs-ai/headroom/commit/ccd9fffce93cd93d694d78c601ec50eeff0bd256))
* **代理/批处理：** 在批处理路径上尊重 x-headroom-bypass ([#2570](https://github.com/headroomlabs-ai/headroom/issues/2570)) ([9b26a49](https://github.com/headroomlabs-ai/headroom/commit/9b26a49c14eacd8e14385bf8d28c67b2425b3c5c))
* **proxy:** 添加同源检查 /v1/retrieve/tool_call ([#3955](https://github.com/headroomlabs-ai/headroom/issues/3955)) ([2297b50](https://github.com/headroomlabs-ai/headroom/commit/2297b5059f27c0018b15f7857a5b3a7026a68bdd))
* **代理：** 对网关路径上的整个提示进行计费，以便节省显示为 true ([#3632](https://github.com/headroomlabs-ai/headroom/issues/3632)) ([befdb52](https://github.com/headroomlabs-ai/headroom/commit/befdb52fd565ff990e4ff1463f0550ba7df588b5))
* **proxy:** 通过SSE重新合成携带protective_results ([#3958](https://github.com/headroomlabs-ai/headroom/issues/3958)) ([f37ef59](https://github.com/headroomlabs-ai/headroom/commit/f37ef591894c6b89bc25ea628b64b40bdd1037fb))
* **代理：** 对 Pi Codex 响应别名进行分类 ([#2583](https://github.com/headroomlabs-ai/headroom/issues/2583)) ([a493f55](https://github.com/headroomlabs-ai/headroom/commit/a493f559a1a85a5462fc3bf3f363d64c3c9444ce))
* **代理：** 不要缓存以 http 200 形式传递的错误回复 ([#3930](https://github.com/headroomlabs-ai/headroom/issues/3930)) ([1132a54](https://github.com/headroomlabs-ai/headroom/commit/1132a54b21482332f6ffeeebe8c9935a69709afa))
* **proxy:** 删除命名搜索工具本身的 tool_reference ([#3172](https://github.com/headroomlabs-ai/headroom/issues/3172)) ([b73adaa](https://github.com/headroomlabs-ai/headroom/commit/b73adaa0ce36a2e65a98f5590c46ea555751b445))
* **代理：** F3 — 每个租户 TOIN 学习密钥 ([#404](https://github.com/headroomlabs-ai/headroom/issues/404)) ([f90a56b](https://github.com/headroomlabs-ai/headroom/commit/f90a56b0388f3dcb6455425a3405b40b67da6858))
* **代理：**通过代理转发运营商列出的受保护的上游 ([#3804](https://github.com/headroomlabs-ai/headroom/issues/3804)) ([4b7e5d2](https://github.com/headroomlabs-ai/headroom/commit/4b7e5d246e54b856af22cd1a90b47d93b26226cb))
* **代理：** 冻结并重播 Gemini 路径上转发的前缀 ([#3394](https://github.com/headroomlabs-ai/headroom/issues/3394)) ([#3865](https://github.com/headroomlabs-ai/headroom/issues/3865)) ([dd84321](https://github.com/headroomlabs-ai/headroom/commit/dd84321daa0c3c9dca9264098bb396a75d9e52cd))
* **代理：**控制原始请求正文，而不仅仅是其 Content-Length 标头 ([#3338](https://github.com/headroomlabs-ai/headroom/issues/3338)) ([c946b6b](https://github.com/headroomlabs-ai/headroom/commit/c946b6b0b0ae048c576940d1a57071b84cb05fb6))
* **代理：** 当本机调用获取 GIL 时转储并退出的硬看门狗 ([#3180](https://github.com/headroomlabs-ai/headroom/issues/3180)) ([79daeb5](https://github.com/headroomlabs-ai/headroom/commit/79daeb590f46c8f74483e975647c202d09f01fbb))
* **代理：**将内存上下文注入到尾随系统消息之后 ([#3948](https://github.com/headroomlabs-ai/headroom/issues/3948)) ([3948dbe](https://github.com/headroomlabs-ai/headroom/commit/3948dbe409eba48c065a3ecb2af9fa2f51921787))
* **代理：**将cache_control保留在聊天完成client放置的内容块之外（[#3895]（https://github.com/headroomlabs-ai/headroom/issues/3895））（[a6d6c14]（https://github.com/headroomlabs-ai/headroom/commit/a6d6c14cf781a7725e4e8366e8cd86b1e4e44ba9））
* **代理：** 将异常文本和代理令牌保留在 client 输出之外 ([#3851](https://github.com/headroomlabs-ai/headroom/issues/3851)) ([861e94d](https://github.com/headroomlabs-ai/headroom/commit/861e94d8c173bcca1ec4ae4f84a3e7ef477c4a19))
* **代理：** 在缓存模式增量压缩中逐字保存最新的用户消息 ([#3923](https://github.com/headroomlabs-ai/headroom/issues/3923)) ([613ae92](https://github.com/headroomlabs-ai/headroom/commit/613ae9215058c1d5cabc67186f3b47089b22eddb))
* **代理：** 除非调用者经过身份验证，否则关键速率受到对等方的限制 ([#3860](https://github.com/headroomlabs-ai/headroom/issues/3860)) ([6fb7cad](https://github.com/headroomlabs-ai/headroom/commit/6fb7cadfe4c54c2be6b90e9fdea36e91da7b2945))
* **代理：** 终止图像工作者超时调用放弃 ([#3940](https://github.com/headroomlabs-ai/headroom/issues/3940)) ([793bb85](https://github.com/headroomlabs-ai/headroom/commit/793bb85659d9aa907115ec16ea3356c5459f6299))
* **代理：** 标签普通 OpenAI 聊天流量 openai，非自定义 ([#3912](https://github.com/headroomlabs-ai/headroom/issues/3912)) ([7df8bd8](https://github.com/headroomlabs-ai/headroom/commit/7df8bd87b54725174e1ea88e2dcd428b66cb608f))
* **代理：** 在 proxy_inbound_response 中记录response_content_length ([#2701](https://github.com/headroomlabs-ai/headroom/issues/2701)) ([cfa479a](https://github.com/headroomlabs-ai/headroom/commit/cfa479af8e551d5d2710debf80adb86fd72b16e5))
* **代理：** 保留基岩体限制错误方言 ([#3871](https://github.com/headroomlabs-ai/headroom/issues/3871)) ([ffc6edb](https://github.com/headroomlabs-ai/headroom/commit/ffc6edb4ba7a775d2f6440769b626132a66aa7d3))
* **代理：** 当 Rust 核心被阻止时保留 Windows 服务 ([#2989](https://github.com/headroomlabs-ai/headroom/issues/2989)) ([eaa16d9](https://github.com/headroomlabs-ai/headroom/commit/eaa16d9f6343f9d5364863c7522734f6b86b1844))
* **代理：**仅在一半池卡住时进行隔离压缩 ([#3932](https://github.com/headroomlabs-ai/headroom/issues/3932)) ([be2b205](https://github.com/headroomlabs-ai/headroom/commit/be2b205c51430236404177bb7d80930a2d299d5a))
* **代理：** 读取 HEADROOM_LICENSE 并选择加入使用情况报告 ([#3857](https://github.com/headroomlabs-ai/headroom/issues/3857)) ([7460389](https://github.com/headroomlabs-ai/headroom/commit/746038991cf2b4dbb31dd2227d607db7bc273da7))
* **代理：** 一旦没有包装 client 剩余，就获得包装生成的代理 ([#3202](https://github.com/headroomlabs-ai/headroom/issues/3202)) ([4227bd2](https://github.com/headroomlabs-ai/headroom/commit/4227bd2419e72a922149d5dfaf416808d8e08139))
* **代理：** 编辑上游错误详细信息并添加选择加入/指标环回门 ([#2589](https://github.com/headroomlabs-ai/headroom/issues/2589)) ([a05717f](https://github.com/headroomlabs-ai/headroom/commit/a05717f6ec2b0514ccaa42b9bd1b3c95d3465730))
* **代理：**拒绝无令牌非环回绑定，门操作员路由（[#3852]（https://github.com/headroomlabs-ai/headroom/issues/3852））（[ee731d7]（https://github.com/headroomlabs-ai/headroom/commit/ee731d7ea84503ad844eb2759fcb5bbf04a1ae0e））
* **代理：** 当选择克劳德官方时重置 cc-switch 上游 ([#3166](https://github.com/headroomlabs-ai/headroom/issues/3166)) ([fed7281](https://github.com/headroomlabs-ai/headroom/commit/fed7281120af5b476d3911ca1ebf4dc66d5ca1ea))
* **代理：** 在安全门和车身天花板内运行扩展中间件 ([#3847](https://github.com/headroomlabs-ai/headroom/issues/3847)) ([1854fd7](https://github.com/headroomlabs-ai/headroom/commit/1854fd7fd3f52bb4cc0b17803de0a04a850eb8f7))
* **代理：** 在流转上运行注入内存工具服务器端 ([#3947](https://github.com/headroomlabs-ai/headroom/issues/3947)) ([1cf4966](https://github.com/headroomlabs-ai/headroom/commit/1cf496612e781ef8d67ff87ee4f78037492f0bc7))
* **代理：** 在响应请求中共享一个压缩截止日期 ([#3938](https://github.com/headroomlabs-ai/headroom/issues/3938)) ([4d27d02](https://github.com/headroomlabs-ai/headroom/commit/4d27d024b09fe04f6e32b158063538f084d7febb))
* **代理：** 跳过直通的定价查找：* 型号 ([#2585](https://github.com/headroomlabs-ai/headroom/issues/2585)) ([f87848c](https://github.com/headroomlabs-ai/headroom/commit/f87848cf78db43dcd4b7e9b6aca3859245348456))
* **代理：** 停止余量记录器抑制传播到 stdout/stderr ([#3096](https://github.com/headroomlabs-ai/headroom/issues/3096)) ([f78e66f](https://github.com/headroomlabs-ai/headroom/commit/f78e66f7cc5e00d5db04c493f702ef4ebe7035b0))
* **相关性：** max_chars 绑定段大小 ([#2518](https://github.com/headroomlabs-ai/headroom/issues/2518)) ([0ef7b2a](https://github.com/headroomlabs-ai/headroom/commit/0ef7b2a7fdd7daf4dbb8628c616c28a233ce7910))
* **报告：** 为储蓄瓷砖定价，而不是制造 $0.00 ([#3821](https://github.com/headroomlabs-ai/headroom/issues/3821)) ([f519fa8](https://github.com/headroomlabs-ai/headroom/commit/f519fa8b97aa9ccef369f5973f1d476af2a65edf))
* **路由器：** 当外部压缩机通过时回退到内置 ([#3893](https://github.com/headroomlabs-ai/headroom/issues/3893)) ([2c4b20f](https://github.com/headroomlabs-ai/headroom/commit/2c4b20fcba6da0366c1c637a2a3cc61e843012a7))
* **路由器：**通过编排器包装器保留 ccr_retrieve 豁免 ([#3915](https://github.com/headroomlabs-ai/headroom/issues/3915)) ([6151ed1](https://github.com/headroomlabs-ai/headroom/commit/6151ed1f52f3d0dd24eb28e0fa666226150a0055))
* **rust-proxy：** 逐字转发请求路径并固定 rustls 提供程序 ([#3853](https://github.com/headroomlabs-ai/headroom/issues/3853)) ([9d98ea5](https://github.com/headroomlabs-ai/headroom/commit/9d98ea59082ca6b00be2508f00b85ef90c94f744))
* **节省：** 在折叠标题旁边不相交地记录工具模式美元 ([#3170](https://github.com/headroomlabs-ai/headroom/issues/3170)) ([c719d4a](https://github.com/headroomlabs-ai/headroom/commit/c719d4af55ebca177c81c98f74531bfaca831366))
* **节省：** 停止根据全球平均值对未观察到的层进行评分 ([#3128](https://github.com/headroomlabs-ai/headroom/issues/3128)) ([f864525](https://github.com/headroomlabs-ai/headroom/commit/f8645257c074b7e5babd949e705d7ca4e8366ae4))
* **sdk：** 通过 OpenAI 往返将工具名称保留在 Vercel 工具结果部分上 ([#3883](https://github.com/headroomlabs-ai/headroom/issues/3883)) ([b715671](https://github.com/headroomlabs-ai/headroom/commit/b7156714acf1f06cd37f642044455e23e2f89d47))
* **sdk:** 在消息转换中保留 Gemini 媒体部分，而不是放弃回合 ([#3882](https://github.com/headroomlabs-ai/headroom/issues/3882)) ([038c923](https://github.com/headroomlabs-ai/headroom/commit/038c923b4bcd01305f18d993e301b837d668c343))
* **sdk:** 停止 JSON-在 Anthropic 适配器中包装结构化工具_结果内容 ([#3797](https://github.com/headroomlabs-ai/headroom/issues/3797)) ([2e4a60a](https://github.com/headroomlabs-ai/headroom/commit/2e4a60ae3730fc7ea8f5afebbc29961d5fd0af11))
* **搜索：** 阻止上下文行的主体成为其行标记 ([#3788](https://github.com/headroomlabs-ai/headroom/issues/3788)) ([f3f2e00](https://github.com/headroomlabs-ai/headroom/commit/f3f2e0077ae67d492bfc5922e9a49427036e32e0))
* **安全性：** 创建仅限所有者的内存存储和其他状态文件 ([#3848](https://github.com/headroomlabs-ai/headroom/issues/3848)) ([5119b6e](https://github.com/headroomlabs-ai/headroom/commit/5119b6eb545e35b617e2d08b183e968d0104d548))
* **安全性：** 仅免除来自代理令牌的 GET 运行状况探测 ([#3921](https://github.com/headroomlabs-ai/headroom/issues/3921)) ([d99779d](https://github.com/headroomlabs-ai/headroom/commit/d99779dae69d44c934d2115ffd8ee1f1a6cbb898))
* **安全性：** 按凭证和主体对响应缓存进行分区 ([#3862](https://github.com/headroomlabs-ai/headroom/issues/3862)) ([ee6cfcc](https://github.com/headroomlabs-ai/headroom/commit/ee6cfcccf6a8944225344c2a468f509783934239))
* **安全性：** 仅使用操作员自己的凭据轮询使用情况 ([#3863](https://github.com/headroomlabs-ai/headroom/issues/3863)) ([65e63c0](https://github.com/headroomlabs-ai/headroom/commit/65e63c08835410149bec4acba8e3737366eb0586))
* **安全：** 停止将代理令牌转发给上游提供商 ([#3891](https://github.com/headroomlabs-ai/headroom/issues/3891)) ([0147cf0](https://github.com/headroomlabs-ai/headroom/commit/0147cf02207fd76be8a14932bcc65a9709bfdb59))
* **设置：** 报告实时代理配置 ([#3177](https://github.com/headroomlabs-ai/headroom/issues/3177)) ([58b1454](https://github.com/headroomlabs-ai/headroom/commit/58b1454282f2b2dee49616c6637fa135ccb885b7))
* **智能破碎机：** 在自适应数组限制处递归 ([#3770](https://github.com/headroomlabs-ai/headroom/issues/3770)) ([7790bde](https://github.com/headroomlabs-ai/headroom/commit/7790bdeebda290b9fdbf899df1cbf9a05e0bc5e9))
* **存储：**页面JSONL排序后查询([#3872](https://github.com/headroomlabs-ai/headroom/issues/3872))([91237ca](https://github.com/headroomlabs-ai/headroom/commit/91237cae70771e8e19cbc06ca65d328ac6cb0878))
* **订阅：** 不区分大小写地匹配 Codex 使用投票的承载方案 (RFC 7235) ([#3966](https://github.com/headroomlabs-ai/headroom/issues/3966)) ([fe88461](https://github.com/headroomlabs-ai/headroom/commit/fe884612c07d2e8a4454615ccc5b6d4feed1d7dd))
* **订阅：** 使用刷新的凭据文件 OAuth 令牌进行轮询 ([#3916](https://github.com/headroomlabs-ai/headroom/issues/3916)) ([2dc9fc2](https://github.com/headroomlabs-ai/headroom/commit/2dc9fc22f09ec85d8e73c916e7c1f6f565d271ec))
* 表面 Codex 响应仪表板中的流量 ([#399](https://github.com/headroomlabs-ai/headroom/issues/399)) ([ecc4967](https://github.com/headroomlabs-ai/headroom/commit/ecc496709b7f2c2657de25d1e3f8de3f226b32e5))
* **遥测：** 从固定提供商集标记自定义基础聊天上游 ([#3759](https://github.com/headroomlabs-ai/headroom/issues/3759)) ([f0ec2bb](https://github.com/headroomlabs-ai/headroom/commit/f0ec2bb37697b1addccb416bd626e7bf3c5ea835))
* **思考：** 不要将模型的日期后缀视为其次要版本 ([#3791](https://github.com/headroomlabs-ai/headroom/issues/3791)) ([afaaaa8](https://github.com/headroomlabs-ai/headroom/commit/afaaaa88049357bac7ec186ea33678f406d02609))
* **transforms/kompress:** 在 Kompress 中保留行边界和表格输出 ([#3119](https://github.com/headroomlabs-ai/headroom/issues/3119)) ([fe2ed2b](https://github.com/headroomlabs-ai/headroom/commit/fe2ed2b545e4b3c97d21872232d5446cb54aedc2))
* **转换：** 判断由其输出读取的 Codex exec 信封 ([#3878](https://github.com/headroomlabs-ai/headroom/issues/3878)) ([922924e](https://github.com/headroomlabs-ai/headroom/commit/922924ef44ebd7501ff00923cc0c2007f06cfade))
* **转换：** 判断 token 中的 code_aware Kompress 后备 ([#3881](https://github.com/headroomlabs-ai/headroom/issues/3881)) ([6326965](https://github.com/headroomlabs-ai/headroom/commit/63269650462c1a565c259cfe3fc3bd67ac942f5a))
* **转换：** 将记录承载 JSON 保留在 Kompress 之外 ([#3673](https://github.com/headroomlabs-ai/headroom/issues/3673)) ([#3880](https://github.com/headroomlabs-ai/headroom/issues/3880)) ([8dbbd1d](https://github.com/headroomlabs-ai/headroom/commit/8dbbd1d8967f719acfaa21e2c1668e9f3193dbe8))
* **wrap:** 切勿在代理端口上重用非 Headroom 侦听器 ([#3799](https://github.com/headroomlabs-ai/headroom/issues/3799)) ([3ffa57e](https://github.com/headroomlabs-ai/headroom/commit/3ffa57ec25a6f05dff073c0ad0b14c90ce264fd8))
* **wrap:** 切勿重用具有不兼容路由配置的代理 ([#3201](https://github.com/headroomlabs-ai/headroom/issues/3201)) ([f69e246](https://github.com/headroomlabs-ai/headroom/commit/f69e2463a0c29cea7943af5efe4b2a2170a1e863))
* **wrap:** 保留预设的 ANTHROPIC_BASE_URL 作为代理上游 ([#1358](https://github.com/headroomlabs-ai/headroom/issues/1358)) ([bb1ab6a](https://github.com/headroomlabs-ai/headroom/commit/bb1ab6afd35a5c22b6c11b549aba4075fb7791ec))
* **wrap:** 范围 Serena 的 MCP 注册到打包项目 ([#2787](https://github.com/headroomlabs-ai/headroom/issues/2787)) ([#2992](https://github.com/headroomlabs-ai/headroom/issues/2992)) ([8cfeb69](https://github.com/headroomlabs-ai/headroom/commit/8cfeb692ca0cad9598160020a144c5c671cd2fc3))
* **wrap:** 设置 ANTHROPIC_HOST 以便 `wrap goose` 实际上代理 Anthropic ([#2619](https://github.com/headroomlabs-ai/headroom/issues/2619)) ([c07fad0](https://github.com/headroomlabs-ai/headroom/commit/c07fad0f37d44b7f6886e6ce774d424463636242))
* **wrap:** 在重新启动检查中从运行代理版本中剥离 -dev ([#3200](https://github.com/headroomlabs-ai/headroom/issues/3200)) ([bd0296b](https://github.com/headroomlabs-ai/headroom/commit/bd0296b5e7b62b620df7b37b41ce573d57958e71))


### 性能改进

* 添加储蓄审计输出 ([#1211](https://github.com/headroomlabs-ai/headroom/issues/1211)) ([9a72bc0](https://github.com/headroomlabs-ai/headroom/commit/9a72bc024263e2470626fae7f20430db682e0042))
* **压缩/代码：** 避免字节到字符映射中每个代码块的 UTF-8 复制 ([#3169](https://github.com/headroomlabs-ai/headroom/issues/3169)) ([d5e5534](https://github.com/headroomlabs-ai/headroom/commit/d5e5534b4763b14d7710908153e0d6a89423eea9))
* **图像：** OCR 和 SigLIP 每个图像一次，而不是每轮一次 ([#3941](https://github.com/headroomlabs-ai/headroom/issues/3941)) ([a8561fb](https://github.com/headroomlabs-ai/headroom/commit/a8561fb4be1bdc17bf8bf86ac97c17651e2820b7))
* **内存：** 使用重复数据删除窗口绑定流量学习器 _persisted_ids ([#3341](https://github.com/headroomlabs-ai/headroom/issues/3341)) ([7e73438](https://github.com/headroomlabs-ai/headroom/commit/7e73438dc5f923c90ad0c1f2f07cb6de221c9f08))
* **指标：** 将入站请求路径基数限制为绑定内存 ([#3340](https://github.com/headroomlabs-ai/headroom/issues/3340)) ([88a1f4e](https://github.com/headroomlabs-ai/headroom/commit/88a1f4e52ba220b5ddb34d94ac0a201391c16027))
* **代理：**较轻的请求路径：为消息快照别名，保持令牌缓存重新计数，解压缩事件循环 ([#3909](https://github.com/headroomlabs-ai/headroom/issues/3909)) ([c873d13](https://github.com/headroomlabs-ai/headroom/commit/c873d13fe07d09be71d5dcbfd640a78ec5b3f0d7))
* **标记器：** 记忆 OpenAI 标记计数，如 Anthropic 计数器 ([#3168](https://github.com/headroomlabs-ai/headroom/issues/3168)) ([0a2c80d](https://github.com/headroomlabs-ai/headroom/commit/0a2c80d5207642a5e58ba9eb65e19cd004018642))


### 依赖关系

* 针对 CVE-2026-102274 的凹凸 pyjwt 2.13.0 -> 2.15.1 ([#3861](https://github.com/headroomlabs-ai/headroom/issues/3861)) ([37b9c46](https://github.com/headroomlabs-ai/headroom/commit/37b9c46069f11a2b2a477ae4ef25dd33bf359684))
* 将 /docs 中的 source-map-js 从 1.2.1 映射到 1.2.2 ([#3986](https://github.com/headroomlabs-ai/headroom/issues/3986)) ([e06631a](https://github.com/headroomlabs-ai/headroom/commit/e06631a7a78d18432c90cfb44b30e461424cfd30))
* 将 /plugins/openclaw 中的 source-map-js 从 1.2.1 映射到 1.2.2 ([#3988](https://github.com/headroomlabs-ai/headroom/issues/3988)) ([4be83b3](https://github.com/headroomlabs-ai/headroom/commit/4be83b35e683df077b11af4c4b37b301c4a65547))
* 在 /plugins/opencode 中将 source-map-js 从 1.2.1 映射到 1.2.2 ([#3987](https://github.com/headroomlabs-ai/headroom/issues/3987)) ([478dd9e](https://github.com/headroomlabs-ai/headroom/commit/478dd9e0a34cd592fdc0e313019297bc23b17db3))
* 将 /sdk/typescript 中的 source-map-js 从 1.2.1 映射到 1.2.2 ([#3985](https://github.com/headroomlabs-ai/headroom/issues/3985)) ([62cde35](https://github.com/headroomlabs-ai/headroom/commit/62cde35b939d7405735b72d1e50aa7c1407e5892))
* 将 npm-minor-patch 组跨越 2 个目录，进行 11 项更新 ([#3903](https://github.com/headroomlabs-ai/headroom/issues/3903)) ([afe4f4e](https://github.com/headroomlabs-ai/headroom/commit/afe4f4eca58977ae9382dfb2899a8097b46c0909))
* 将 npm-minor-patch 组跨越 3 个目录，进行 11 项更新 ([#3910](https://github.com/headroomlabs-ai/headroom/issues/3910)) ([ff1a0d6](https://github.com/headroomlabs-ai/headroom/commit/ff1a0d69f4a83f7c5583a7af2d2961025587801e))
* 将 webpki 根从 0.26.11 提升到 1.0.8 ([#3905](https://github.com/headroomlabs-ai/headroom/issues/3905)) ([fee53b4](https://github.com/headroomlabs-ai/headroom/commit/fee53b4daa3a0ac2b2378a692278f24f0062d584))
*删除crewai extra以从锁定文件中删除chromadb ([#3870](https://github.com/headroomlabs-ai/headroom/issues/3870)) ([59b8cef](https://github.com/headroomlabs-ai/headroom/commit/59b8cefc24e48539974787e0677298f335b2720e))


### 代码重构

* **ccr:** 通过extract_user_query读取扩展查询 ([#2707](https://github.com/headroomlabs-ai/headroom/issues/2707)) ([dcec845](https://github.com/headroomlabs-ai/headroom/commit/dcec845851d8202ce3361022a14b3716fdeb59c0))
* **wrap:** 从 WrapTarget 注册表生成 goose/openhands/openclaude ([#3800](https://github.com/headroomlabs-ai/headroom/issues/3800)) ([de4cf7e](https://github.com/headroomlabs-ai/headroom/commit/de4cf7e7a1ece51ce6c60d25bc34f46897e972c9))

---

> 📦 仓库：[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · 🏷️ 版本：`v0.40.0` · 📅 发布：2026-10-06 · [查看英文原版 Release](https://github.com/headroomlabs-ai/headroom/releases/tag/v0.40.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
