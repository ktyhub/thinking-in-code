---
title: "headroom v0.41.0"
project: "headroom"
repo: "headroomlabs-ai/headroom"
tag: "v0.41.0"
version: "v0.41.0"
published: "2026-10-14"
type: "minor"
lang: "zh"
---

# headroom v0.41.0

## [0.41.0](https://github.com/headroomlabs-ai/headroom/compare/v0.40.0...v0.41.0) (2026-10-13)


### 特点

* **反重力：** 添加原生 Google 反重力 IDE 集成 ([#3817](https://github.com/headroomlabs-ai/headroom/issues/3817)) ([cd4367b](https://github.com/headroomlabs-ai/headroom/commit/cd4367b040bf80b7358f100da54994f6d5fbfcfe))
* **opencode:** 支持 OpenCode 2.x 插件 API ([#3999](https://github.com/headroomlabs-ai/headroom/issues/3999)) ([1d4b357](https://github.com/headroomlabs-ai/headroom/commit/1d4b357ca745549382e1ed9a3a6d39b5df52d3d5))
* **插件：** 添加 headroom-snip Claude Code mod，用于动画压缩 ([#3980](https://github.com/headroomlabs-ai/headroom/issues/3980)) ([17abee2](https://github.com/headroomlabs-ai/headroom/commit/17abee2721c1946bc8903d623bec91ff6e531c17))
* **代理：** Rust 代理的本机支出/储蓄统计数据 + 仪表板 ([#2321](https://github.com/headroomlabs-ai/headroom/issues/2321)) ([70b21c1](https://github.com/headroomlabs-ai/headroom/commit/70b21c12c41cd128c7b8700c33b29b687de567a4))
* **路由器：** 将 max_output_tokens 条件添加到 ModelRoute ([#3898](https://github.com/headroomlabs-ai/headroom/issues/3898)) ([01185e3](https://github.com/headroomlabs-ai/headroom/commit/01185e32d393c02ae63b104429f6dbfc6cdd1da0))
* **节省：** 历史检查点和汇总中的每个代理归因 ([#2627](https://github.com/headroomlabs-ai/headroom/issues/2627)) ([489de46](https://github.com/headroomlabs-ai/headroom/commit/489de468258584c69c90c798397d81e0b35ace67))
* 在仪表板、文档、llms.txt 和 release notes 中显示 Teams 优惠的 Headroom ([#3991](https://github.com/headroomlabs-ai/headroom/issues/3991)) ([1ad92f0](https://github.com/headroomlabs-ai/headroom/commit/1ad92f0cbc3dea27676e253588100f64a2af6994))


### 错误修复

* **anthropic:** 将 /api/hello 连接探针路由到 Anthropic ([#3336](https://github.com/headroomlabs-ai/headroom/issues/3336)) ([#4059](https://github.com/headroomlabs-ai/headroom/issues/4059)) ([931e5b9](https://github.com/headroomlabs-ai/headroom/commit/931e5b9666f4022feb38abadfbdb77c96c69e95a))
* **信标：** 停止 Cloudflare 记录发件人的 IP 地址 ([#4018](https://github.com/headroomlabs-ai/headroom/issues/4018)) ([db983ba](https://github.com/headroomlabs-ai/headroom/commit/db983bacc616fec3d622e8a039b47135b1ad4166))
* **缓存：** 当 Claude Code 重新序列化其最后回复时保持缓存模式 ([#4003](https://github.com/headroomlabs-ai/headroom/issues/4003)) ([aeb09f8](https://github.com/headroomlabs-ai/headroom/commit/aeb09f8d1884318d27b05b440b44c603e1c0d727))
* **缓存：** 为提供程序缓存生命周期保留前缀跟踪器 ([#4023](https://github.com/headroomlabs-ai/headroom/issues/4023)) ([9553d42](https://github.com/headroomlabs-ai/headroom/commit/9553d4292f949224105bfee8c29f4979a2c3092a))
* **缓存：** 停止 Claude Code 分叉冷启动对话的沿袭 ([#4043](https://github.com/headroomlabs-ai/headroom/issues/4043)) ([1cf4d05](https://github.com/headroomlabs-ai/headroom/commit/1cf4d053d2bae276280dd3b71ebcf00cfd4d9cfc))
* **ccr:** 当模型与 client 工具一起调用 headroom_retrieve 时，提供 headroom_retrieve ([#4034](https://github.com/headroomlabs-ai/headroom/issues/4034)) ([01d9194](https://github.com/headroomlabs-ai/headroom/commit/01d9194854233ef6ed04005cf0a5b8c32bf65d6d))
* **cli:** 命名损坏的 Codex 配置，自动写入初始化配置，保留身份检查 ([#4129](https://github.com/headroomlabs-ai/headroom/issues/4129)) ([976aa71](https://github.com/headroomlabs-ai/headroom/commit/976aa714ef3e19174dc0cb586cee7b20d064e4ef))
* **cli:** 将配置的 SSL 上下文传递给 stdlib urlopen 调用 ([#4011](https://github.com/headroomlabs-ai/headroom/issues/4011)) ([22d0905](https://github.com/headroomlabs-ai/headroom/commit/22d0905a73d1498e1a3658427687416373c1d4a1))
* **cli:** 说出代理启动失败的原因 ([#4120](https://github.com/headroomlabs-ai/headroom/issues/4120)) ([f3d240b](https://github.com/headroomlabs-ai/headroom/commit/f3d240bcae5f12d87925b5fa46d36eecff19ba2d))
* **codex:** 使解包 codex 删除余量初始化路由 ([#3920](https://github.com/headroomlabs-ai/headroom/issues/3920)) ([3260795](https://github.com/headroomlabs-ai/headroom/commit/326079517b40d2bbec6d2c7a453b22be9b8b6755))
* **codex:** 通过 Headroom 保留 auth.json API 密钥 ([#3355](https://github.com/headroomlabs-ai/headroom/issues/3355)) ([a6523b1](https://github.com/headroomlabs-ai/headroom/commit/a6523b19678af49ed1039fe946ae0cfee2181509))
* **副驾驶：** 默认情况下尊重 GitHub 广告的商业/企业主机 ([#4155](https://github.com/headroomlabs-ai/headroom/issues/4155)) ([1dc7a18](https://github.com/headroomlabs-ai/headroom/commit/1dc7a183f55db35188aefa95f9cd4aed18377862))
* **copilot:** 将 VS Code 下一个编辑请求发送到完成主机 ([#4188](https://github.com/headroomlabs-ai/headroom/issues/4188)) ([22a1296](https://github.com/headroomlabs-ai/headroom/commit/22a1296cfabc855f9bc6e36a1bcb0f9e788f75a5))
* **仪表板：** 在轻型模式下保持储蓄配置文件可见 ([#2544](https://github.com/headroomlabs-ai/headroom/issues/2544)) ([4e4f49d](https://github.com/headroomlabs-ai/headroom/commit/4e4f49d058846c44ae6061edd5a53776c03a0507))
* **仪表板：** 显示设置枚举选择中的有效值 ([#4032](https://github.com/headroomlabs-ai/headroom/issues/4032)) ([20ce054](https://github.com/headroomlabs-ai/headroom/commit/20ce054f8d34af50106daa0c8aa518231e17004b))
* **deps:** 将 RUSTSEC-2026-0338..0342 的 quinn-proto 升级为 0.11.19 ([#4178](https://github.com/headroomlabs-ai/headroom/issues/4178)) ([49751ec](https://github.com/headroomlabs-ai/headroom/commit/49751ec4c797c9ff8ae7e3cdfed6c8372c7fbfcd))
* **deps:** 清除安全工作流程失败的两个高 npm 建议 ([#4004](https://github.com/headroomlabs-ai/headroom/issues/4004)) ([5a516b5](https://github.com/headroomlabs-ai/headroom/commit/5a516b54afd50156521638645a9063992e395a7b))
* **部门：** 推荐 headroom-ai 作为可选附加功能 ([#4046](https://github.com/headroomlabs-ai/headroom/issues/4046)) ([f1bc260](https://github.com/headroomlabs-ai/headroom/commit/f1bc260948c159549d6937e9c4d2cf969256f2bb))
* **依赖项：** 支持 Intel macOS ONNX 运行时分辨率 ([#3823](https://github.com/headroomlabs-ai/headroom/issues/3823)) ([51ec6e8](https://github.com/headroomlabs-ai/headroom/commit/51ec6e8ffef8d3c76b0dc7b283c8c5eabcd6acc2))
* **docker:** 添加了 litellm 配置目录的挂载 ([#2454](https://github.com/headroomlabs-ai/headroom/issues/2454)) ([64a661d](https://github.com/headroomlabs-ai/headroom/commit/64a661d5b4898d97061bfcaa10caad477b319b37))
* **gateway:** 报告为什么 /v1/compress/response 拒绝主体 ([#4081](https://github.com/headroomlabs-ai/headroom/issues/4081)) ([5cac7ab](https://github.com/headroomlabs-ai/headroom/commit/5cac7ab693c2f1e3d8dbbe4756f0e7f6fa0687d6))
* **grok:** 属性 api.x.ai 聊天结果作为提供商 xai，识别 grok-shell UA ([#2626](https://github.com/headroomlabs-ai/headroom/issues/2626)) ([b1fb162](https://github.com/headroomlabs-ai/headroom/commit/b1fb162b622327102832f15b2ca14a4613da9fcd))
* **install/windows:** 通过始终开启的任务支持持久服务 ([#1866](https://github.com/headroomlabs-ai/headroom/issues/1866)) ([#2460](https://github.com/headroomlabs-ai/headroom/issues/2460)) ([5682883](https://github.com/headroomlabs-ai/headroom/commit/5682883bb03472caeb510d6ff84070d5558d0f62))
* **安装：**区分状态中的协议目标 ([#4040](https://github.com/headroomlabs-ai/headroom/issues/4040)) ([79f2c27](https://github.com/headroomlabs-ai/headroom/commit/79f2c2781a1e6d5a13c75ae233e01c6d8d910ef1))
* **安装：** 在 Windows PowerShell 5.1 上保留明确为空的仪表板允许列表 ([#4012](https://github.com/headroomlabs-ai/headroom/issues/4012)) ([c195a12](https://github.com/headroomlabs-ai/headroom/commit/c195a1220f8d3525879c87486bd63d96e870e648))
* **安装：** 在重新激活期间保留 OpenCode 编辑 ([#4022](https://github.com/headroomlabs-ai/headroom/issues/4022)) ([40955b0](https://github.com/headroomlabs-ai/headroom/commit/40955b0eef2e509aad1a200db9cfa0762ca457ce))
* **学习：** 解码清理后的模式 ID 标记并保留可见文本重复数据删除键 ([#3956](https://github.com/headroomlabs-ai/headroom/issues/3956)) ([ec1ba70](https://github.com/headroomlabs-ai/headroom/commit/ec1ba70c974fb0729870bfd444cdc1152a1b4301))
* **学习：** 使用共享错误分类器进行实时流量学习 ([#4110](https://github.com/headroomlabs-ai/headroom/issues/4110)) ([e6eaa41](https://github.com/headroomlabs-ai/headroom/commit/e6eaa411791750884a7eb2594d0b86f9e4100f81))
* **学习：** 将学习到的详细级别固定在缓存模式代理上 ([#4033](https://github.com/headroomlabs-ai/headroom/issues/4033)) ([71663b4](https://github.com/headroomlabs-ai/headroom/commit/71663b44e26fc2e0ad7d52c0b264aa7500926900))
* **日志记录：** 为异常、URL、ID 和重复警告添加有效负载安全帮助程序 ([#4138](https://github.com/headroomlabs-ai/headroom/issues/4138)) ([bebe559](https://github.com/headroomlabs-ai/headroom/commit/bebe5593ea4abaf326215c7236586b38e7b325a5))
* **onnx:** 停止 Magika 的 ORT 操作内池旋转空闲核心 ([#4189](https://github.com/headroomlabs-ai/headroom/issues/4189)) ([2016dc6](https://github.com/headroomlabs-ai/headroom/commit/2016dc6d6064926790b9c843fbf1798d2e660524))
* **openclaw:** 保留工具调用思想签名 ([#4038](https://github.com/headroomlabs-ai/headroom/issues/4038)) ([37f3f9e](https://github.com/headroomlabs-ai/headroom/commit/37f3f9efe16f6b1ff94e03dbae85a27e387097a2))
* **插件/openclaw:** 保持压缩系统提示通知缓存稳定 ([#3811](https://github.com/headroomlabs-ai/headroom/issues/3811)) ([f885187](https://github.com/headroomlabs-ai/headroom/commit/f8851878a4feb0b64df8a5b22a89ebb198199bdf))
* **定价：** 使缓存计费与特定于模型的 LiteLLM 费率保持一致 ([#3033](https://github.com/headroomlabs-ai/headroom/issues/3033)) ([463c1a4](https://github.com/headroomlabs-ai/headroom/commit/463c1a43e30fc33cb256a3f455daf28043e53b05))
* **providers:** 删除隐藏的 POST /v1/messages 路由规范 ([#4075](https://github.com/headroomlabs-ai/headroom/issues/4075)) ([69a16cb](https://github.com/headroomlabs-ai/headroom/commit/69a16cb59c0fe4b8233caf5824e34e5772f48d81))
* **代理/基岩：**记录 InvokeModel 结果的真实上游状态 ([#4025](https://github.com/headroomlabs-ai/headroom/issues/4025)) ([159daa2](https://github.com/headroomlabs-ai/headroom/commit/159daa25a0886fb5c5808e37d62fe8cf4971290a))
* **代理/流：** 容忍格式错误的上游 SSE 事件 ([#2558](https://github.com/headroomlabs-ai/headroom/issues/2558)) ([d091fbd](https://github.com/headroomlabs-ai/headroom/commit/d091fbd9f2ccc522de87350c0bc7a85f0de230eb))
* **代理:** astgrep 磁盘验证截断 ([#3192](https://github.com/headroomlabs-ai/headroom/issues/3192)) ([1fb4cba](https://github.com/headroomlabs-ai/headroom/commit/1fb4cbaea0dcc62aa092bac3af04991d994207d0))
* **代理：**打破真实上下文窗口附近的紧凑每回合循环 ([#2942](https://github.com/headroomlabs-ai/headroom/issues/2942)) ([76cceeb](https://github.com/headroomlabs-ai/headroom/commit/76cceeb48728a4f179626e43f1ec23d1f7cebd79))
* **代理：**将失败的流分类为失败的请求 ([#3747](https://github.com/headroomlabs-ai/headroom/issues/3747)) ([42d4f58](https://github.com/headroomlabs-ai/headroom/commit/42d4f58b434bdca8f81cabf5f00d6e8e02a7fb2c))
* **代理：** 不要重试在退避上限内无法成功的 429/529 ([#3992](https://github.com/headroomlabs-ai/headroom/issues/3992)) ([a961a6f](https://github.com/headroomlabs-ai/headroom/commit/a961a6fea083a9a739df40d1371e1e7ec108516d))
* **代理：** 不要发送未应答的 client 工具调用的内存延续 ([#4009](https://github.com/headroomlabs-ai/headroom/issues/4009)) ([#4013](https://github.com/headroomlabs-ai/headroom/issues/4013)) ([87e05b6](https://github.com/headroomlabs-ai/headroom/commit/87e05b68b8aa578f1439abfc8006b38cd09db14d))
* **代理：** 在流路径上转发 x-litellm-key-* 标头 ([#2532](https://github.com/headroomlabs-ai/headroom/issues/2532)) ([33ade5b](https://github.com/headroomlabs-ai/headroom/commit/33ade5b0e1019adf34d9fd888cc105d4bc23935e))
* **代理：** 测量转钩工具增量时忽略 defer_loading ([#4056](https://github.com/headroomlabs-ai/headroom/issues/4056)) ([f8212a3](https://github.com/headroomlabs-ai/headroom/commit/f8212a39dcc5b03a75e98b60a8ecdef81a0f48ed))
* **代理：** 保留 Claude Haiku 5.5 对话中系统消息 ([#4153](https://github.com/headroomlabs-ai/headroom/issues/4153)) ([a9eb2a7](https://github.com/headroomlabs-ai/headroom/commit/a9eb2a7b6fe6b75042646284109846da46939649))
* **代理：**保持领先的人类系统有效负载（[#3671]（https://github.com/headroomlabs-ai/headroom/issues/3671））（[d9e29bb]（https://github.com/headroomlabs-ai/headroom/commit/d9e29bb2600a746dea80caa7721f0fb98109589c））
* **代理：** 记录当前消失的节省和指标失败 ([#4084](https://github.com/headroomlabs-ai/headroom/issues/4084)) ([2800932](https://github.com/headroomlabs-ai/headroom/commit/2800932e1827400cf41be1cff6154f78f691ccce))
* **代理：**从message_delta读取流缓存使用情况；将 Fireworks 会话保留在一个副本上 ([#4174](https://github.com/headroomlabs-ai/headroom/issues/4174)) ([30b22df](https://github.com/headroomlabs-ai/headroom/commit/30b22df7fda6163c576c8f720982bf1ca48762c3))
* **代理：** 记录提供商在流式传输中的计费输入计数 ([#4052](https://github.com/headroomlabs-ai/headroom/issues/4052)) ([a9815bb](https://github.com/headroomlabs-ai/headroom/commit/a9815bbb5fa2d2347ceeeac0f01cc9f041e2ded2))
* **proxy:** 说明为什么 proxy.log 丢失以及为什么旋钮或扩展被忽略 ([#4088](https://github.com/headroomlabs-ai/headroom/issues/4088)) ([72302a3](https://github.com/headroomlabs-ai/headroom/commit/72302a3998104a400765fa7e21177ed59f429f38))
* **发布：** 同步可编辑uv锁定版本 ([#4054](https://github.com/headroomlabs-ai/headroom/issues/4054)) ([3f99066](https://github.com/headroomlabs-ai/headroom/commit/3f990663cca5b9dd2ed0ca26343b0619bbab0aa7))
* **路由器：** 每个请求绑定 ML 压缩，而不仅仅是每个块 ([#3721](https://github.com/headroomlabs-ai/headroom/issues/3721)) ([f37980f](https://github.com/headroomlabs-ai/headroom/commit/f37980f7f7612e7ae58b4f3b5b98f185e216fd91))
* **路由器：**通过压缩保留嵌套的 JSON 记录 ([#3680](https://github.com/headroomlabs-ai/headroom/issues/3680)) ([fd06703](https://github.com/headroomlabs-ai/headroom/commit/fd067033da185f1abf48ea58e63c6d71d4d11ec1))
* ** Savings,ccr:** 记录被默默吞没的账本和 MCP 故障 ([#4105](https://github.com/headroomlabs-ai/headroom/issues/4105)) ([97680e7](https://github.com/headroomlabs-ai/headroom/commit/97680e7782423308b8e35c5560fea5b1d9434e1b))
* **节省：** 不要让细小的坚持臂决定标题数字 ([#3127](https://github.com/headroomlabs-ai/headroom/issues/3127)) ([2a12e03](https://github.com/headroomlabs-ai/headroom/commit/2a12e035a3239bdfbb4fe75e1246923c144aabef))
* **安全性：** 解决 23 个打开的 CodeQL 警报 ([#4045](https://github.com/headroomlabs-ai/headroom/issues/4045)) ([a88e2d5](https://github.com/headroomlabs-ai/headroom/commit/a88e2d51452f7a2fa1882639585d482e1f05d92f))
* **安全性：** 解决高严重性 CodeQL 警报 ([#4005](https://github.com/headroomlabs-ai/headroom/issues/4005)) ([dea9092](https://github.com/headroomlabs-ai/headroom/commit/dea9092e19385f286b7f67a64f4d85de2708d756))
* **智能破碎机：** 在应用中保留包装的检索结果 ([#4149](https://github.com/headroomlabs-ai/headroom/issues/4149)) ([9762a14](https://github.com/headroomlabs-ai/headroom/commit/9762a14a40bde4d3f58a027c086b6ac75fbd5ed2))
* **订阅：** 记录失败的 OTEL 窗口更新，而不是静默传递 ([#4131](https://github.com/headroomlabs-ai/headroom/issues/4131)) ([7d9dd55](https://github.com/headroomlabs-ai/headroom/commit/7d9dd55e7c4bbd2a95b054de7e5722c4cf20ce50))
* **toin:** 使诊断模式标识符可寻址 ([#4021](https://github.com/headroomlabs-ai/headroom/issues/4021)) ([def6d41](https://github.com/headroomlabs-ai/headroom/commit/def6d41185d3091d4ef42ae379829087deeaf38f))
* **转换：** 使用回溯记录失败的转换 ([#3981](https://github.com/headroomlabs-ai/headroom/issues/3981)) ([a654558](https://github.com/headroomlabs-ai/headroom/commit/a65455804ce6c16670af6fe253bd9f8f6105bfe3))
* **wrap:** 将共享代理的扩展转移到专用 Copilot 代理 ([#4154](https://github.com/headroomlabs-ai/headroom/issues/4154)) ([feea130](https://github.com/headroomlabs-ai/headroom/commit/feea130f81953030bda222ffe88abb61fbb60ee8))
* **wrap:** 让 `wrap opencode` 定位第三方 OpenAI 兼容上游 ([#3125](https://github.com/headroomlabs-ai/headroom/issues/3125)) ([0d7d61d](https://github.com/headroomlabs-ai/headroom/commit/0d7d61d5ccaee25d399ae3209e8ce067e8673b30))
* **wrap:** 拒绝代理不会路由的已保存 bob 网关 URL ([#3975](https://github.com/headroomlabs-ai/headroom/issues/3975)) ([944eafc](https://github.com/headroomlabs-ai/headroom/commit/944eafc6d4bcebbe6624cff95681f5af8b257868))
* **wrap:** 修剪 claude 启动横幅 ([#3900](https://github.com/headroomlabs-ai/headroom/issues/3900)) ([aba75cb](https://github.com/headroomlabs-ai/headroom/commit/aba75cbf6d2fe1e4c728e4af258907d9c28028d0))
* **wrap:** 当重用代理忽略压缩设置时发出警告 ([#4019](https://github.com/headroomlabs-ai/headroom/issues/4019)) ([278bbc8](https://github.com/headroomlabs-ai/headroom/commit/278bbc8771938eec18e89df942e1594b6ddf41d4))


### 性能改进

* **代理：**避免急切的依赖项导入 ([#3546](https://github.com/headroomlabs-ai/headroom/issues/3546)) ([59bd482](https://github.com/headroomlabs-ai/headroom/commit/59bd482fa1661293d86834e73fe90f0ee21130c5))


### 代码重构

* **后端：** 在any-llm 后端重用 LiteLLM 工具转换器 ([#4076](https://github.com/headroomlabs-ai/headroom/issues/4076)) ([03538f2](https://github.com/headroomlabs-ai/headroom/commit/03538f2f2f55cafc0cec4ddf1b22e3189e2a0a24))
* **cli:** 每个换行命令都会出现一个丢失二进制错误 ([#4122](https://github.com/headroomlabs-ai/headroom/issues/4122)) ([2c2357a](https://github.com/headroomlabs-ai/headroom/commit/2c2357ad342de69d4576f0e38efc58646f054913))
* **cli:** 从包装、代理和 mcp 中删除仅测试和死助手 ([#4118](https://github.com/headroomlabs-ai/headroom/issues/4118)) ([73f59a3](https://github.com/headroomlabs-ai/headroom/commit/73f59a32ccda8fe9de385031ccd032d1007be650))
* **压缩：** 弃用仅测试的 UniversalCompressor 包 ([#4095](https://github.com/headroomlabs-ai/headroom/issues/4095)) ([fc8ff5a](https://github.com/headroomlabs-ai/headroom/commit/fc8ff5a7619271ffe306ffad50f2ee936d5d2158))
* **核心：** 删除未引用的帮助器、属性和隐藏模块 ([#4091](https://github.com/headroomlabs-ai/headroom/issues/4091)) ([08fce18](https://github.com/headroomlabs-ai/headroom/commit/08fce1831067005f048cb81f0033abc17a89e9fd))
* **图：** 删除定制的 codebase-memory-mcp 下载器，没有任何调用 ([#4102](https://github.com/headroomlabs-ai/headroom/issues/4102)) ([30d23fb](https://github.com/headroomlabs-ai/headroom/commit/30d23fb799674a5d9a3c531baf09a307d62c2bf2))
* **mcp_registry:** 共享规范助手并将 GrokRegistrar 折叠到 Codex TOML 注册器 ([#4121](https://github.com/headroomlabs-ai/headroom/issues/4121)) ([6e14ee0](https://github.com/headroomlabs-ai/headroom/commit/6e14ee0bc2dde72378b841f708f73cdf79df6e2d))
* **内存、学习、缓存：** 删除未引用的类、方法和常量 ([#4112](https://github.com/headroomlabs-ai/headroom/issues/4112)) ([abbf36f](https://github.com/headroomlabs-ai/headroom/commit/abbf36f052fca643a3cd5f7cadd21b5a7d4bf406))
* **内存：** 弃用从未连线的代理内存编写器 ([#4101](https://github.com/headroomlabs-ai/headroom/issues/4101)) ([2e497cb](https://github.com/headroomlabs-ai/headroom/commit/2e497cbec3c26c1d2c83adcc94794164cbab3268))
* **内存：**弃用孤立的 Mem0SystemAdapter ([#4114](https://github.com/headroomlabs-ai/headroom/issues/4114)) ([7387b8c](https://github.com/headroomlabs-ai/headroom/commit/7387b8cc11ecdf4775faa6042e7cc15d114b4942))
* **内存：**删除未使用的提取提示和工具架构 ([#4100](https://github.com/headroomlabs-ai/headroom/issues/4100)) ([6d23895](https://github.com/headroomlabs-ai/headroom/commit/6d23895dc003e865c3c5d4690853551406e7cdc8))
* **内存：** 删除未使用的内存预算管理器 ([#4099](https://github.com/headroomlabs-ai/headroom/issues/4099)) ([e7ac6ca](https://github.com/headroomlabs-ai/headroom/commit/e7ac6ca6f81834549a66fc0832b1ddb2470da245))
* **proxy:** 删除未使用的 memory_tool_adapter 模块 ([#4071](https://github.com/headroomlabs-ai/headroom/issues/4071)) ([7e5d97f](https://github.com/headroomlabs-ai/headroom/commit/7e5d97fe29073af0751cc0abc7bdf6a6d3bd74a2))
* **代理：** 删除仅测试内存排序器和文件支持的本机内存操作 ([#4072](https://github.com/headroomlabs-ai/headroom/issues/4072)) ([fc5ac70](https://github.com/headroomlabs-ai/headroom/commit/fc5ac70b4a1eac8f49d86ad386c76c67bab40372))
* **代理：**在一处解析 HEADROOM_OUTPUT_HOLDOUT ([#4082](https://github.com/headroomlabs-ai/headroom/issues/4082)) ([1a4e419](https://github.com/headroomlabs-ai/headroom/commit/1a4e4194a0b26e4f09026c18ac6b8935c6a99c0c))
* **代理：** 从助手、body_forwarding、forwarded_headers 中删除死别名和包装器 ([#4080](https://github.com/headroomlabs-ai/headroom/issues/4080)) ([63cc9af](https://github.com/headroomlabs-ai/headroom/commit/63cc9afa9d282aeae127e6af20d9a9efa2eebd7e))
* **代理：**从 server.py 中删除无效接线和未使用的重新导出 ([#4073](https://github.com/headroomlabs-ai/headroom/issues/4073)) ([58387c1](https://github.com/headroomlabs-ai/headroom/commit/58387c1174e6f7f526c3677b72986079da554a8a))
* **代理：** 从处理程序中删除仅测试和失效的助手 ([#4117](https://github.com/headroomlabs-ai/headroom/issues/4117)) ([31d378b](https://github.com/headroomlabs-ai/headroom/commit/31d378b0e5337bf8c572ca272e8649762457dc5f))
* **代理：** 从响应负载压缩器中删除无法访问的调试分支 ([#4116](https://github.com/headroomlabs-ai/headroom/issues/4116)) ([132cd58](https://github.com/headroomlabs-ai/headroom/commit/132cd583daeb968dd4121f0163677f5b1605f29c))
* **代理：** 从响应单元路由器中删除无法访问的调试分支 ([#4115](https://github.com/headroomlabs-ai/headroom/issues/4115)) ([25cc2d5](https://github.com/headroomlabs-ai/headroom/commit/25cc2d586316fee5cb67b7a25ef2927198a0ae6b))
* **代理：** 删除未引用和仅测试的帮助程序 ([#4074](https://github.com/headroomlabs-ai/headroom/issues/4074)) ([e5cbec5](https://github.com/headroomlabs-ai/headroom/commit/e5cbec5f1a860eb51e4e49507b8eb26742abba22))
* 删除 rollout 和 agent_ savings 中仅测试的兼容性帮助程序 ([#4089](https://github.com/headroomlabs-ai/headroom/issues/4089)) ([310c108](https://github.com/headroomlabs-ai/headroom/commit/310c108c24caef1839a538a28878b6709f8987f9))
* 删除订阅中的只写和只测试代码并安装 ([#4123](https://github.com/headroomlabs-ai/headroom/issues/4123)) ([c191bee](https://github.com/headroomlabs-ai/headroom/commit/c191beef59cc9bde622cf7db251ac94eb2a20c70))
* **转换：** 弃用未使用的 Python AnchorSelector 端口 ([#4104](https://github.com/headroomlabs-ai/headroom/issues/4104)) ([9b1971d](https://github.com/headroomlabs-ai/headroom/commit/9b1971dd82c941d683902014b203de4bf617cc61))
* **转换：** 弃用未使用的 compress_with_stats、extract_batch 和align_for_cache ([#4098](https://github.com/headroomlabs-ai/headroom/issues/4098)) ([e4a1ec1](https://github.com/headroomlabs-ai/headroom/commit/e4a1ec19be787a312624fdca52e2184b9a4127b9))
* **转换：** 删除 Rust 日志选择器的 Python 镜像 ([#4096](https://github.com/headroomlabs-ai/headroom/issues/4096)) ([a20c76c](https://github.com/headroomlabs-ai/headroom/commit/a20c76c26b15557a1bf176c4ef84f46121550297))
* **转换：** 删除 Rust 搜索选择器的 Python 镜像 ([#4103](https://github.com/headroomlabs-ai/headroom/issues/4103)) ([47f8710](https://github.com/headroomlabs-ai/headroom/commit/47f8710817ddc6612127662714b5fcecf83dc644))
* **转换：**删除未使用的summary_dropped_items ([#4093](https://github.com/headroomlabs-ai/headroom/issues/4093)) ([eaa7308](https://github.com/headroomlabs-ai/headroom/commit/eaa7308a52620ad803b13c7f66300d7196f63212))
* **转换：** 删除未使用的便利包装器和助手 ([#4097](https://github.com/headroomlabs-ai/headroom/issues/4097)) ([5c72d82](https://github.com/headroomlabs-ai/headroom/commit/5c72d824f4d1ab0d46a960f8f61a14d000482591))

<!-- 净空团队页脚 -->

---

**团队的 Headroom：** 12 个月的计划可免费获得 3 个月的 Headroom Enterprise。 [领取福利→](https://headroom-perks.vercel.app/?source=github&utm_source=github&utm_medium=release-notes&utm_content=v0.41.0)

---

> 📦 仓库：[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · 🏷️ 版本：`v0.41.0` · 📅 发布：2026-10-14 · [查看英文原版 Release](https://github.com/headroomlabs-ai/headroom/releases/tag/v0.41.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
