---
title: "headroom v0.42.0"
project: "headroom"
repo: "headroomlabs-ai/headroom"
tag: "v0.42.0"
version: "v0.42.0"
published: "2026-10-26"
type: "minor"
lang: "zh"
---

# headroom v0.42.0

## [0.42.0](https://github.com/headroomlabs-ai/headroom/compare/v0.41.0...v0.42.0) (2026-10-26)


### 特点

* **管道：** 将每个请求保存的令牌放在 OutcomeSnapshot 上 ([#4231](https://github.com/headroomlabs-ai/headroom/issues/4231)) ([8cedf7b](https://github.com/headroomlabs-ai/headroom/commit/8cedf7be4decfb3a0da42e4e955b6a3301a66dc9))
* **代理：** 让转钩子重写 HTTP 和 WebSocket 上的 OpenAI 响应请求 ([#4232](https://github.com/headroomlabs-ai/headroom/issues/4232)) ([fbf7bc3](https://github.com/headroomlabs-ai/headroom/commit/fbf7bc3278c11975299b9bd0a2ecf200dfd25a05))
* **代理：** 报告网关 /v1/compress 上与代理路径相同的工具节省 ([#4467](https://github.com/headroomlabs-ai/headroom/issues/4467)) ([a904210](https://github.com/headroomlabs-ai/headroom/commit/a90421083a781990b877d34fdaba0bc1b6cf6c4d))
* **储蓄：** 添加每个请求的反事实储蓄记录 ([#4236](https://github.com/headroomlabs-ai/headroom/issues/4236)) ([2912b7b](https://github.com/headroomlabs-ai/headroom/commit/2912b7b620d7abd39828db73e4f326b9a041d309))


### 错误修复

* **批处理：** 在容量清理期间保留实时上下文 ([#4210](https://github.com/headroomlabs-ai/headroom/issues/4210)) ([2cbdd22](https://github.com/headroomlabs-ai/headroom/commit/2cbdd22a65789676d9ebbd9e2b6a908e7f8fad95))
* **批量：** 保留原生 Gemini 延续工具 ([#4211](https://github.com/headroomlabs-ai/headroom/issues/4211)) ([8757458](https://github.com/headroomlabs-ai/headroom/commit/875745889ff065208d3a32aa583881468ae7c41d))
* **缓存：**绑定路由器的压缩缓存，将其余部分保留在 SQLite 中 ([#4357](https://github.com/headroomlabs-ai/headroom/issues/4357)) ([b196424](https://github.com/headroomlabs-ai/headroom/commit/b196424e35df0afc0c8576aea1950ed16b00e027))
* **缓存：** 在 OpenAI 空白规范化中保持缩进行完整 ([#4343](https://github.com/headroomlabs-ai/headroom/issues/4343)) ([2480100](https://github.com/headroomlabs-ai/headroom/commit/248010091578e1f05ebcf65c8146bb57f9fb4e00))
* **缓存：** 在代理重新启动时保持前缀跟踪器状态 ([#4299](https://github.com/headroomlabs-ai/headroom/issues/4299)) ([62b3bed](https://github.com/headroomlabs-ai/headroom/commit/62b3bedaba988de87e38b1a58c11d28baaba7dbf))
* **ccr:** 识别 client 拥有的 MCP 检索别名 ([#4165](https://github.com/headroomlabs-ai/headroom/issues/4165)) ([89545fb](https://github.com/headroomlabs-ai/headroom/commit/89545fbdf3873f75461f71a03c89b1f9c64d650d))
* **ccr:** 流式传输缓冲的 CCR 上游请求，以便空闲终止网络无法切断它 ([#4206](https://github.com/headroomlabs-ai/headroom/issues/4206)) ([ca6ba34](https://github.com/headroomlabs-ai/headroom/commit/ca6ba3486c09badecb1bfe99ddabf562c9f01c77))
* **ci:** 在发布通知烟雾工作流程中进行引脚签出 ([#4399](https://github.com/headroomlabs-ai/headroom/issues/4399)) ([70273db](https://github.com/headroomlabs-ai/headroom/commit/70273db0af392e8f971d42e21484656676255d0b))
* **copilot:** 在 cli-main.js 中检测 Copilot CLI >= 1.0.93 ([#4450](https://github.com/headroomlabs-ai/headroom/issues/4450)) ([043fe09](https://github.com/headroomlabs-ai/headroom/commit/043fe09d8c620201045619bcbcd88e26e2c6e71f)) 的 COPILOT_API_URL
* **copilot:** 保留本机内联 OAuth 身份 ([#4144](https://github.com/headroomlabs-ai/headroom/issues/4144)) ([ad62166](https://github.com/headroomlabs-ai/headroom/commit/ad62166ba3056e5b98fc5bfee19f0c9b6c316e8d))
* **依赖：** 将 RUSTSEC-2026-0346..0349 的 rustls 提升到 0.23.46 ([#4222](https://github.com/headroomlabs-ai/headroom/issues/4222)) ([132dbc7](https://github.com/headroomlabs-ai/headroom/commit/132dbc76995cdbecc25b4f647dbf919351cd5f7f))
* **部门：** 修补 OpenClaw Undici 并缩小 E2E 审核异常 ([#4453](https://github.com/headroomlabs-ai/headroom/issues/4453)) ([1be699f](https://github.com/headroomlabs-ai/headroom/commit/1be699f68ee884c5c319cee9841ca304e448873c))
* **deps:** 需要 hf-xet>=1.6.0，这样集线器下载就不会在退出时使 Python 崩溃 ([#4192](https://github.com/headroomlabs-ai/headroom/issues/4192)) ([9e5dac7](https://github.com/headroomlabs-ai/headroom/commit/9e5dac7c74979abd8d1b9ad9615443b76e42b530))
* **依赖：** CVE-2026-59951 需要 mcp>=1.30.0 ([#4239](https://github.com/headroomlabs-ai/headroom/issues/4239)) ([2f7a83a](https://github.com/headroomlabs-ai/headroom/commit/2f7a83a91d3ca33a79b5c41b8095f6454b5bfb43))
* **网关：** 合并重新驱动器使用时保留 input_includes_cache ([#4423](https://github.com/headroomlabs-ai/headroom/issues/4423)) ([3f94144](https://github.com/headroomlabs-ai/headroom/commit/3f941446bfbeb0b66cf6eb4a1ddf254e17d0c2a4))
* **gemini:** 压缩时保留snake_case inline_data 和函数部分 ([#4290](https://github.com/headroomlabs-ai/headroom/issues/4290)) ([4bf1bf5](https://github.com/headroomlabs-ai/headroom/commit/4bf1bf55d175ad047c32cc3049aeff51126424c8))
* **图像：** 在每次 compress() 调用之前清除last_result ([#4341](https://github.com/headroomlabs-ai/headroom/issues/4341)) ([19c91a8](https://github.com/headroomlabs-ai/headroom/commit/19c91a870fac09f824001197e72c8929698ea0b8))
* **图像：** 在重新编码为 JPEG 之前将透明图像压平为白色 ([#4296](https://github.com/headroomlabs-ai/headroom/issues/4296)) ([9f5cfcf](https://github.com/headroomlabs-ai/headroom/commit/9f5cfcfd2bb90097f79144ff3821fc7db9fe36d5))
* **安装：** 将 HuggingFace 缓存保留在 Docker 预设中的可写安装上 ([#4207](https://github.com/headroomlabs-ai/headroom/issues/4207)) ([#4209](https://github.com/headroomlabs-ai/headroom/issues/4209)) ([7b6cb77](https://github.com/headroomlabs-ai/headroom/commit/7b6cb7790552ac10f0135013337ea4a09a9e951e))
* **kompress:** 设置远程端点时跳过本地模型下载 ([#4234](https://github.com/headroomlabs-ai/headroom/issues/4234)) ([ff36931](https://github.com/headroomlabs-ai/headroom/commit/ff3693165344410eaf2882209648e504f9d3eaf0))
* **kompress:** 对每个模型加载阶段进行计时，并在预热期间停止错误的未就绪警告 ([#4195](https://github.com/headroomlabs-ai/headroom/issues/4195)) ([89b229c](https://github.com/headroomlabs-ai/headroom/commit/89b229ce5feaeb8710f4e226a47697426231ca55))
* **学习：** 将托管块锚定在其最后一个开始标记上，没有结束标记时追加 ([#4342](https://github.com/headroomlabs-ai/headroom/issues/4342)) ([45dacc1](https://github.com/headroomlabs-ai/headroom/commit/45dacc1f94a4343c76a6e257143d22d67dc713f0))
* **学习：** 将摘要的循环部分保持在其预算范围内 ([#4269](https://github.com/headroomlabs-ai/headroom/issues/4269)) ([506ba16](https://github.com/headroomlabs-ai/headroom/commit/506ba16c4a7f231b177d28066bcda389133a5e91))
* **日志：** 计算删除行中省略的级别 ([#4141](https://github.com/headroomlabs-ai/headroom/issues/4141)) ([023dd1b](https://github.com/headroomlabs-ai/headroom/commit/023dd1bc5402dcebf52a5ed3cf6a2a2878a524d9))
* **mcp:** 接受包装并安装的 JSONC 开放代码配置已经接受 ([#4297](https://github.com/headroomlabs-ai/headroom/issues/4297)) ([9202948](https://github.com/headroomlabs-ai/headroom/commit/9202948c1e57a4ab8daa7c00c400605844c19f4f))
* **内存：** 嵌入之前绑定检索查询 ([#4244](https://github.com/headroomlabs-ai/headroom/issues/4244)) ([8c07cf4](https://github.com/headroomlabs-ai/headroom/commit/8c07cf4a0fff1b67da1b542dc746b0b4a0e952e6))
* **内存：**忽略附带的cwd散文 ([#4166](https://github.com/headroomlabs-ai/headroom/issues/4166)) ([3765439](https://github.com/headroomlabs-ai/headroom/commit/37654390b60ccb7658bb96a2f177b8666c7b7273))
* **内存：** 日志存储和 SQLite 故障当前导致检索失败（[#4111](https://github.com/headroomlabs-ai/headroom/issues/4111)）（[4e6e955](https://github.com/headroomlabs-ai/headroom/commit/4e6e955cad0bff318e30bd4f24e934a23f57e9c6)）
* **内存：**解析超出前 1000 条记录的部分 ID ([#4389](https://github.com/headroomlabs-ai/headroom/issues/4389)) ([c4ea31b](https://github.com/headroomlabs-ai/headroom/commit/c4ea31b156478adde015833074ad7278230b4512))
* **内存：** 将没有 UTF-8 形式的 cwd 视为未解析，而不是引发 ([#4167](https://github.com/headroomlabs-ai/headroom/issues/4167)) ([760c05e](https://github.com/headroomlabs-ai/headroom/commit/760c05e1b0ff8c34443f5d6eba0c4ff36f171eb2))
* **openai:** 读取响应cache_write_tokens 而不是推断写入 ([#4237](https://github.com/headroomlabs-ai/headroom/issues/4237)) ([4630602](https://github.com/headroomlabs-ai/headroom/commit/46306024e74b3a44aca17fb70c1416f96b2a0b53))
* **openai:** 重新压缩 CCR 条目过期的缓存响应单元 ([#4146](https://github.com/headroomlabs-ai/headroom/issues/4146)) ([8f7b419](https://github.com/headroomlabs-ai/headroom/commit/8f7b41998076727d08e5db4ee57c8bd579988c30))
* **opencode:** 不要重写无法解析的 OpenCode 配置 ([#4424](https://github.com/headroomlabs-ai/headroom/issues/4424)) ([0fe0a59](https://github.com/headroomlabs-ai/headroom/commit/0fe0a597c1929bcb4a7372e6689fd62410bad9d2))
* **opencode:** 恢复传输处理上的进程环境密钥 ([#4430](https://github.com/headroomlabs-ai/headroom/issues/4430)) ([d17bac8](https://github.com/headroomlabs-ai/headroom/commit/d17bac8d64dd74ade81638ac7170715851c9704b))
* **定价：** 抑制 litellm 的提供商列表横幅，该横幅会破坏性能 JSON ([#4197](https://github.com/headroomlabs-ai/headroom/issues/4197)) ([e01ad35](https://github.com/headroomlabs-ai/headroom/commit/e01ad350dc71d44f1a4e07df5ea4e45fa39a4773))
* **代理：**接受 HEADROOM_MEMORY_INJECTION_MODE=工具 ([#4395](https://github.com/headroomlabs-ai/headroom/issues/4395)) ([f89c928](https://github.com/headroomlabs-ai/headroom/commit/f89c9282a8216b8e168c29d85c6f13c5ce7d6301))
* **代理：** 由 client 模型字符串键控的绑定每个模型状态 ([#4407](https://github.com/headroomlabs-ai/headroom/issues/4407)) ([33e5f67](https://github.com/headroomlabs-ai/headroom/commit/33e5f67464286961f37d09298d31c5022d275a32))
* **代理：**复制缓存的工具压缩结果（强化）（[#4410]（https://github.com/headroomlabs-ai/headroom/issues/4410））（[a256231]（https://github.com/headroomlabs-ai/headroom/commit/a25623109d5075276af057e79c3ed3e309906563））
* **代理：**也计算来自 CRLF 帧 SSE 流的输出令牌 ([#4298](https://github.com/headroomlabs-ai/headroom/issues/4298)) ([755293d](https://github.com/headroomlabs-ai/headroom/commit/755293dd68d495b6fcec15fd47d324c3ce5eeefa))
* **代理：** 不要将失败的转钩重新驱动重建为 HTTP 200 ([#4398](https://github.com/headroomlabs-ai/headroom/issues/4398)) ([f59c8ff](https://github.com/headroomlabs-ai/headroom/commit/f59c8ffcd80f19564cf041d1fa4eb6247f2e1d01))
* **代理：**从没有 web_search 工具的响应请求中删除 web_search_call 历史记录 ([#4202](https://github.com/headroomlabs-ai/headroom/issues/4202)) ([2a70d12](https://github.com/headroomlabs-ai/headroom/commit/2a70d128195575cbc52129a5287a9a3ccc097744))
* **代理：** 在 Anthropic 批量创建中尊重旁路标头和许可证门 ([#4411](https://github.com/headroomlabs-ai/headroom/issues/4411)) ([4fd9cdd](https://github.com/headroomlabs-ai/headroom/commit/4fd9cddfd2e9cbbe38ab0b9d3acc6bc6f934a6e2))
* **代理：** 在运行时在基岩处理程序中导入响应 ([#4397](https://github.com/headroomlabs-ai/headroom/issues/4397)) ([51e4ae3](https://github.com/headroomlabs-ai/headroom/commit/51e4ae36a5751fc494c0b583d37e62213e5a08a9))
* **proxy:** 通过嵌入的 IPv4 判断 NAT64 上游地址 ([#4179](https://github.com/headroomlabs-ai/headroom/issues/4179)) ([486afaa](https://github.com/headroomlabs-ai/headroom/commit/486afaac7426fa1d6735fe2ce6ae37630d9d11ae))
* **代理：** 当达到条目上限时，将期间成本保留在预算分类账中 ([#4448](https://github.com/headroomlabs-ai/headroom/issues/4448)) ([41c15b3](https://github.com/headroomlabs-ai/headroom/commit/41c15b311cd5ab34d5108569eef4249a60973f96))
* **代理：** 在重新启动时保持负压缩节省 ([#4406](https://github.com/headroomlabs-ai/headroom/issues/4406)) ([bebe24c](https://github.com/headroomlabs-ai/headroom/commit/bebe24c5ff0e815ac87937d9ecb1633a5091ab64))
* **代理：** 保持 GitHub Copilot 上游工具延迟 ([#4356](https://github.com/headroomlabs-ai/headroom/issues/4356)) ([217b658](https://github.com/headroomlabs-ai/headroom/commit/217b658845389e32a02760d75886de20d60e2ba3))
* **proxy:** 让 HEADROOM_LOG_LEVEL=debug 打开 Headroom 自己的调试日志 ([#4137](https://github.com/headroomlabs-ai/headroom/issues/4137)) ([00093ce](https://github.com/headroomlabs-ai/headroom/commit/00093ceddcf42c3936a96ea5f280af2d0e1b2e47))
* **代理：** 使处理程序故障可从日志中调试 ([#4127](https://github.com/headroomlabs-ai/headroom/issues/4127)) ([7dc20b6](https://github.com/headroomlabs-ai/headroom/commit/7dc20b6fe027cf262c5e2d0415f0dbb2032ac73b))
* **代理：**网络工具转钩添加反对保存它的书（[#4057]（https://github.com/headroomlabs-ai/headroom/issues/4057））（[85520c2]（https://github.com/headroomlabs-ai/headroom/commit/85520c2941ed6b2c4cd4bfd9f747b24227a256aa））
* **代理：** 记录 client 在其终端事件完成后关闭的流 ([#4286](https://github.com/headroomlabs-ai/headroom/issues/4286)) ([762a337](https://github.com/headroomlabs-ai/headroom/commit/762a337bbeba268ae1e172c7a7de1e374231e32c))
* **代理：** 当直通流在字符中间结束时记录结果 ([#4429](https://github.com/headroomlabs-ai/headroom/issues/4429)) ([75cfbba](https://github.com/headroomlabs-ai/headroom/commit/75cfbba91d9bb2ff55df3949eddd4452dd9fb661))
* **代理：**报告启动时禁用 Kompress ([#4217](https://github.com/headroomlabs-ai/headroom/issues/4217)) ([430ea4f](https://github.com/headroomlabs-ai/headroom/commit/430ea4f4ebaeb0b217e237084963b64775bef24a))
* **代理：** 在缓存模式下报告读取成熟为惰性 ([#4198](https://github.com/headroomlabs-ai/headroom/issues/4198)) ([ba82453](https://github.com/headroomlabs-ai/headroom/commit/ba824539d6f80c3e056f299789c1cf079a4693fe))
* **代理：** 在 /stats extension_ savings 中显示转钩节省，包括。法典 WS ([#4233](https://github.com/headroomlabs-ai/headroom/issues/4233)) ([1d112cd](https://github.com/headroomlabs-ai/headroom/commit/1d112cd36c9aee765ec3b550773de0c93c6d79be))
* **代理：** 当转钩可以编辑原始消息时快照原始消息 ([#4241](https://github.com/headroomlabs-ai/headroom/issues/4241)) ([df11f27](https://github.com/headroomlabs-ai/headroom/commit/df11f2749862a0090db11f7fca3e7dc42a75b612))
* **相关性：** 从一个固定快照加载默认嵌入器 ([#4152](https://github.com/headroomlabs-ai/headroom/issues/4152)) ([f380692](https://github.com/headroomlabs-ai/headroom/commit/f380692b463637e90de84f1b5cc29c7ae9f7b969))
* **节省：** 在其线程上键入响应对话，而不是共享会话 ([#4440](https://github.com/headroomlabs-ai/headroom/issues/4440)) ([11f743d](https://github.com/headroomlabs-ai/headroom/commit/11f743dd90e9f60cf01805a23514bd06440dd2d2))
* **sdk:** 通过压缩保留 Vercel AI SDK 文件和图像部分 ([#4048](https://github.com/headroomlabs-ai/headroom/issues/4048)) ([1668a6c](https://github.com/headroomlabs-ai/headroom/commit/1668a6c0dd73cd8a1b9d7fc5eae297149e8f7d93))
* **安全性：**通过 NTFS ACL 限制 Windows 运行时日志，而不仅仅是警告 ([#4135](https://github.com/headroomlabs-ai/headroom/issues/4135)) ([125a703](https://github.com/headroomlabs-ai/headroom/commit/125a703a65c574e9db809f95eefdc70407e0250e))
* **smart-crusher：** 将审核安全的 protected_patterns 与未转义文本进行匹配 ([#4294](https://github.com/headroomlabs-ai/headroom/issues/4294)) ([e11afdb](https://github.com/headroomlabs-ai/headroom/commit/e11afdbdf8a729e50553681143d0f925b71fcd83))
* **存储：** 标准化时区感知 JSONL 时间过滤器 ([#4063](https://github.com/headroomlabs-ai/headroom/issues/4063)) ([bf34ccf](https://github.com/headroomlabs-ai/headroom/commit/bf34ccf58861a687e814abf1a158885987add9ae))
* **表格：**逐字传递具有重复标头名称的表 ([#4278](https://github.com/headroomlabs-ai/headroom/issues/4278)) ([ed3195b](https://github.com/headroomlabs-ai/headroom/commit/ed3195beef1dcfbb0219c2da9b59984167c81c01))
* **遥测：**为空项目压缩提供稳定的工具签名 ([#4396](https://github.com/headroomlabs-ai/headroom/issues/4396)) ([a79def4](https://github.com/headroomlabs-ai/headroom/commit/a79def4dd1b7217a75ce6c4eebd0b06ea3a70c1d))
* **遥测：** 让 HEADROOM_TELEMETRY=off 停止匿名信标 ([#4235](https://github.com/headroomlabs-ai/headroom/issues/4235)) ([1a40b3c](https://github.com/headroomlabs-ai/headroom/commit/1a40b3ce67ad9e155ba768e8d05cec4c872c7f99))
* **转换：** 保留为受保护标签传递的代码块的栅栏 ([#4292](https://github.com/headroomlabs-ai/headroom/issues/4292)) ([02958c6](https://github.com/headroomlabs-ai/headroom/commit/02958c6ffe41a1d3466c21558670875df87384ae))
* **转换：** 记录静默变为“无节省”的压缩失败 ([#4092](https://github.com/headroomlabs-ai/headroom/issues/4092)) ([580cc83](https://github.com/headroomlabs-ai/headroom/commit/580cc83a9a412123040978447a2c9b77c08670b0))
* **zcode:** 跳过指向 Headroom 代理本身的提供程序 ([#4413](https://github.com/headroomlabs-ai/headroom/issues/4413)) ([9ac1b52](https://github.com/headroomlabs-ai/headroom/commit/9ac1b52c2762bbc40d3e459e5f87cd4bbfbde8aa))


### 依赖关系

* 将base64从0.22.1映射到0.23.1 ([#4029](https://github.com/headroomlabs-ai/headroom/issues/4029)) ([8d468d4](https://github.com/headroomlabs-ai/headroom/commit/8d468d455c2e3c195cc2975bbc13e63d6b85ef59))
* 在 1 个目录的 pip-minor-patch 组中将 ruff 从 0.16.8 凹凸到 0.17.0 ([#4026](https://github.com/headroomlabs-ai/headroom/issues/4026)) ([de3f639](https://github.com/headroomlabs-ai/headroom/commit/de3f639803f1f172f65c05c165bfab92c0bec9e8))
* 在 1 个目录中添加 Cargo-minor-patch 组并进行 12 次更新 ([#4186](https://github.com/headroomlabs-ai/headroom/issues/4186)) ([683c9a6](https://github.com/headroomlabs-ai/headroom/commit/683c9a6120c309e84e4848378dbe3891d064f82e))
* 将 npm-minor-patch 组跨越 2 个目录，包含 16 个更新 ([#4218](https://github.com/headroomlabs-ai/headroom/issues/4218)) ([07c8bbf](https://github.com/headroomlabs-ai/headroom/commit/07c8bbf1edcc143a7fe97b9e29214355cc371a19))
* 将 npm-minor-patch 组跨越 3 个目录，包含 12 个更新 ([#4219](https://github.com/headroomlabs-ai/headroom/issues/4219)) ([1f71cb3](https://github.com/headroomlabs-ai/headroom/commit/1f71cb3d64e1586c97331a3482aae84558741102))
* 将 Huggingface-hub 要求从 <2.0,>=1.5.0 更新为 >=1.5.0,<3.0 ([#4027](https://github.com/headroomlabs-ai/headroom/issues/4027)) ([fcf3db8](https://github.com/headroomlabs-ai/headroom/commit/fcf3db8e70d15aef0d80a561cf5d0e45e918a338))


### 代码重构

* **集成：** 共享 asgi 和 litellm_callback 的本地/云压缩后端 ([#4124](https://github.com/headroomlabs-ai/headroom/issues/4124)) ([58caafb](https://github.com/headroomlabs-ai/headroom/commit/58caafb59b40c00b35ceee6237ef2289df71f25d))
* **转换：** 为 Rust 支持的压缩器共享一个 CCR 持久助手 ([#4094](https://github.com/headroomlabs-ai/headroom/issues/4094)) ([ea947ca](https://github.com/headroomlabs-ai/headroom/commit/ea947ca421ee6d6b8f15a9ed522c3a3bea5a3225))

<!-- 净空团队页脚 -->

---

**团队的 Headroom：** 12 个月的计划可免费获得 3 个月的 Headroom Enterprise。 [领取福利→](https://headroom-perks.vercel.app/?source=github&utm_source=github&utm_medium=release-notes&utm_content=v0.42.0)

---

> 📦 仓库：[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · 🏷️ 版本：`v0.42.0` · 📅 发布：2026-10-26 · [查看英文原版 Release](https://github.com/headroomlabs-ai/headroom/releases/tag/v0.42.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
