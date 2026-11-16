---
title: "promptfoo 0.122.1"
project: "promptfoo"
repo: "promptfoo/promptfoo"
tag: "0.122.1"
version: "0.122.1"
published: "2026-08-26"
type: "patch"
lang: "zh"
---

# promptfoo 0.122.1

## [0.122.1](https://github.com/promptfoo/promptfoo/compare/0.122.0...0.122.1) (2026-08-26)


### 特点

* **评估：**区分扫描足迹和产生的令牌使用（[#10497]（https://github.com/promptfoo/promptfoo/issues/10497））（[8df8ef0]（https://github.com/promptfoo/promptfoo/commit/8df8ef0148a838be26a08a1124a733563db178d7））
* **提供商：** 添加 Gemini 3.7 Flash 和 Flash-Lite ([#10389](https://github.com/promptfoo/promptfoo/issues/10389)) ([bc6b189](https://github.com/promptfoo/promptfoo/commit/bc6b189ba7a2f21098a2e52c9f46063c62a6f696))
* **redteam:** 多回合攻击者和分级代币的帐户 ([#10407](https://github.com/promptfoo/promptfoo/issues/10407)) ([33cc8bc](https://github.com/promptfoo/promptfoo/commit/33cc8bc90e07d6c4ba36c83001cca1b4726b7593))
* **redteam:** 报告生成、目标、攻击者和分级标记 ([#10408](https://github.com/promptfoo/promptfoo/issues/10408)) ([0891e4e](https://github.com/promptfoo/promptfoo/commit/0891e4e9e49d1c63df6379b1dfbb79bac659e331))
* **跟踪：** 添加测试用例根和通用目标跨度 ([#10328](https://github.com/promptfoo/promptfoo/issues/10328)) ([334586e](https://github.com/promptfoo/promptfoo/commit/334586ee4b21e56d16cff63c9b82134614d05486))
* **跟踪：** 将跨度与 OpenTelemetry GenAI 约定对齐 ([#10361](https://github.com/promptfoo/promptfoo/issues/10361)) ([e6f44f8](https://github.com/promptfoo/promptfoo/commit/e6f44f8b04cf961d7227ad4062c1c04dcb62c1f0))
* **跟踪：** 从 Grafana Tempo 获取外部跨度 ([#10327](https://github.com/promptfoo/promptfoo/issues/10327)) ([1b445b0](https://github.com/promptfoo/promptfoo/commit/1b445b0db4cf7e2ef87cfb9a09ab397ecae802e2))
* **跟踪：** 从 Braintrust 获取外部跟踪 ([#10329](https://github.com/promptfoo/promptfoo/issues/10329)) ([f372318](https://github.com/promptfoo/promptfoo/commit/f3723187d94479add2a51c5f36c4f61fb1999e80))
* **跟踪：** 从 Langfuse 获取外部跟踪 ([#10372](https://github.com/promptfoo/promptfoo/issues/10372)) ([f7809f6](https://github.com/promptfoo/promptfoo/commit/f7809f60e44fbb4898f5c2abc31990ac0712b5a8))
* **跟踪：** 强化跟踪跨度持久性 ([#10326](https://github.com/promptfoo/promptfoo/issues/10326)) ([d9d0e82](https://github.com/promptfoo/promptfoo/commit/d9d0e82254f265f8d299a7a9fb3e4ed9e99d7834))
* **追踪：** 乐器分级和红队执行 ([#10362](https://github.com/promptfoo/promptfoo/issues/10362)) ([a53ba32](https://github.com/promptfoo/promptfoo/commit/a53ba328e6af77fce98e67ab2ca69035f9f026ec))
* **跟踪：** 集成 OpenAI Agents 和 Vercel SDK 遥测 ([#10364](https://github.com/promptfoo/promptfoo/issues/10364)) ([8f89002](https://github.com/promptfoo/promptfoo/commit/8f890022486aac5884e614fc85d670fd0125d10d))
* **跟踪：** 标准化跨提供商的工具执行 ([#10363](https://github.com/promptfoo/promptfoo/issues/10363)) ([b54ccbd](https://github.com/promptfoo/promptfoo/commit/b54ccbd7b253d9a4f469766f581e0b3803681b24))
* **跟踪：** 支持 Claude 和 Codex 子进程遥测 ([#10365](https://github.com/promptfoo/promptfoo/issues/10365)) ([84c518f](https://github.com/promptfoo/promptfoo/commit/84c518f412ac6e08bdb2e17e21b2eb32312fc649))


### 错误修复

* **app:** 澄清红队评分行动 ([#10366](https://github.com/promptfoo/promptfoo/issues/10366)) ([84a5cf2](https://github.com/promptfoo/promptfoo/commit/84a5cf214f3bad068eb5a90bed0803c129a4e44f))
* **断言：** 避免 GLEU 和 SQL 解析中的正则表达式回溯 ([#10373](https://github.com/promptfoo/promptfoo/issues/10373)) ([57243cf](https://github.com/promptfoo/promptfoo/commit/57243cf84bd9625fa9b4d331806cfb240c75d247))
* **断言：**正确的反向 JSON 失败消息 ([#9824](https://github.com/promptfoo/promptfoo/issues/9824)) ([d1d8de3](https://github.com/promptfoo/promptfoo/commit/d1d8de31470b0dc238f67cf2de0a926bc0ed3416))
* **断言：**拒绝超出范围的跟踪跨度持续时间百分位数 ([#10089](https://github.com/promptfoo/promptfoo/issues/10089)) ([49c0f6d](https://github.com/promptfoo/promptfoo/commit/49c0f6d77496c022c6d32e362522993bb0d72d42))
* **断言：** 将无令牌 GLEU 输入评分为零 ([#9850](https://github.com/promptfoo/promptfoo/issues/9850)) ([cc8c0c6](https://github.com/promptfoo/promptfoo/commit/cc8c0c65f1378d80166b2a209747cd9c1a6302c2))
* **deps:** 将 Chevrotain CST 生成器与解析器对齐 ([#10360](https://github.com/promptfoo/promptfoo/issues/10360)) ([6ae80cd](https://github.com/promptfoo/promptfoo/commit/6ae80cd9e5bde81f976cfba65fcea5d05661c7f8))
* **deps:** Docker 构建中的块安装脚本 ([#10330](https://github.com/promptfoo/promptfoo/issues/10330)) ([c4454c4](https://github.com/promptfoo/promptfoo/commit/c4454c401c93d77a6a46fe1d883175f47adc1eff))
* **deps:** 捆绑运行时缓存依赖项 ([#10302](https://github.com/promptfoo/promptfoo/issues/10302)) ([b5f8ea3](https://github.com/promptfoo/promptfoo/commit/b5f8ea3b0a307adb91c31ed4e13a3d6896902841))
* **deps:** 在锁文件维护期间强制执行 npm 发布期限 ([#10396](https://github.com/promptfoo/promptfoo/issues/10396)) ([42c1076](https://github.com/promptfoo/promptfoo/commit/42c1076b9ba691f65b5c5cbd5bfedc3cbba8842c))
* **deps:** 将 jsdom 保持在我们的 Node 层无法安装的版本以下 ([#10351](https://github.com/promptfoo/promptfoo/issues/10351)) ([2dcb128](https://github.com/promptfoo/promptfoo/commit/2dcb128ce6ced450fd91d036d5695a29c8369681))
* **deps:** 将 tanstack 表保存在不兼容的 v9 下方 ([#10388](https://github.com/promptfoo/promptfoo/issues/10388)) ([fded938](https://github.com/promptfoo/promptfoo/commit/fded938b65a81e12070a66e90ca4ad2d42a8062e))
* **deps:** 在支持的 npm 主要上保留 Renovate ([#10393](https://github.com/promptfoo/promptfoo/issues/10393)) ([f5034c1](https://github.com/promptfoo/promptfoo/commit/f5034c1a33a6db26f25dfa77e7e587d8386d6b4a))
* **deps:** 限制 pnpm 安装脚本和新版本 ([#10331](https://github.com/promptfoo/promptfoo/issues/10331)) ([0dbf6c8](https://github.com/promptfoo/promptfoo/commit/0dbf6c8e0bbcaa232b2fe4447545080aa0e5bf18))
* **deps:** 修补易受攻击的传递 js-yaml 版本 ([#10356](https://github.com/promptfoo/promptfoo/issues/10356)) ([2626fd0](https://github.com/promptfoo/promptfoo/commit/2626fd0eddf687784f89e7b0aa791953e83b3e72))
* **deps:** 防止不兼容的 Chevrotain 解析器更新 ([#10306](https://github.com/promptfoo/promptfoo/issues/10306)) ([77c08d5](https://github.com/promptfoo/promptfoo/commit/77c08d5f0cf7720249648ff064dfdef2a3f23200))
* **部门：** 防止不兼容的 chevrotain-allstar 升级 ([#10399](https://github.com/promptfoo/promptfoo/issues/10399)) ([5357d06](https://github.com/promptfoo/promptfoo/commit/5357d067166b3b3a1eed49e2e5717855643a1188))
* **deps:** 恢复标准缓存依赖解析 ([#10314](https://github.com/promptfoo/promptfoo/issues/10314)) ([ca65846](https://github.com/promptfoo/promptfoo/commit/ca65846615f65a2316c3378adae0607488303e8f))
* **deps:** 更新人类包 ([#10426](https://github.com/promptfoo/promptfoo/issues/10426)) ([ef4cd6b](https://github.com/promptfoo/promptfoo/commit/ef4cd6bd234cb69f63c5fb6c61d3cd8483ab8f54))
* **deps:** 更新人类包 ([#10471](https://github.com/promptfoo/promptfoo/issues/10471)) ([ed5bae3](https://github.com/promptfoo/promptfoo/commit/ed5bae37f5c9d68184ea9378c53f69d456a9d6c2))
* **deps:** 将依赖项 @apidevtools/json-schema-ref-parser 更新为 v16 ([#10474](https://github.com/promptfoo/promptfoo/issues/10474)) ([7600c55](https://github.com/promptfoo/promptfoo/commit/7600c558c8dc1e6d8f245d2c2a122dc449d1963d))
* **deps:** 将依赖项 @hono/node-server 更新为 v2.1.0 ([#10385](https://github.com/promptfoo/promptfoo/issues/10385)) ([af026d0](https://github.com/promptfoo/promptfoo/commit/af026d02115c31dad4bebe0484ab5b6a3a62f6e2))
* **deps:** 将依赖项 @hono/node-server 更新为 v2.1.1 ([#10472](https://github.com/promptfoo/promptfoo/issues/10472)) ([24ef223](https://github.com/promptfoo/promptfoo/commit/24ef22354a86f8adf32fbc89d9dfe581a6671162))
* **deps:** 将依赖项 chalk 更新到 v6 ([#10309](https://github.com/promptfoo/promptfoo/issues/10309)) ([1c30e18](https://github.com/promptfoo/promptfoo/commit/1c30e183c4a464d953898398399dc6aa69786471))
* **deps:** 将依赖项 gcp-metadata 更新为 v9 ([#10350](https://github.com/promptfoo/promptfoo/issues/10350)) ([16cb1f3](https://github.com/promptfoo/promptfoo/commit/16cb1f3c251d2aa8227ead6fd802ee3b8790f5d2))
* **deps:** 将依赖项 js-yaml 更新为 v5.2.3 ([#10354](https://github.com/promptfoo/promptfoo/issues/10354)) ([fc36f28](https://github.com/promptfoo/promptfoo/commit/fc36f283493e4c23afee1e1ae9a2e7b127cf2ea3))
* **deps:** 将依赖项 js-yaml 更新为 v5.3.0 ([#10473](https://github.com/promptfoo/promptfoo/issues/10473)) ([e419aff](https://github.com/promptfoo/promptfoo/commit/e419aff5021543ff3d940c0ce408e552ca3d6e9b))
* **deps:** 将依赖项 openai 更新为 v7 ([#10318](https://github.com/promptfoo/promptfoo/issues/10318)) ([9a5f84b](https://github.com/promptfoo/promptfoo/commit/9a5f84b96976111376a586c48414014ddd8b42fd))
* **提供者：** 对所有回调加载器应用路径遍历保护 ([#9472](https://github.com/promptfoo/promptfoo/issues/9472)) ([87a5a42](https://github.com/promptfoo/promptfoo/commit/87a5a4267c548033398b351a91b72f371930d47f))
* **提供者：**避免雪花和 openrouter 中的空选择崩溃 ([#10418](https://github.com/promptfoo/promptfoo/issues/10418)) ([c149fcf](https://github.com/promptfoo/promptfoo/commit/c149fcf36c2aeaac83a215906c2caa659cafecff))
* **提供者：** 计算基岩上克劳德的缓存和思考令牌 ([#10492](https://github.com/promptfoo/promptfoo/issues/10492)) ([0170037](https://github.com/promptfoo/promptfoo/commit/0170037970dd4732f7542c60ceafa5f4951289de))
* **提供者：**计算 Claude Agent SDK 子代理令牌 ([#10455](https://github.com/promptfoo/promptfoo/issues/10455)) ([5cd3baa](https://github.com/promptfoo/promptfoo/commit/5cd3baae39922b704d5cf6e8ccbe4a8283e921e4))
* **提供者：** 面向未来的 Claude 采样，无别名冲突 ([#10359](https://github.com/promptfoo/promptfoo/issues/10359)) ([9a1e965](https://github.com/promptfoo/promptfoo/commit/9a1e9659bbe694c8b1122a415428a8daf5472b22))
* **提供商：** 强化编码代理工具策略 ([#9044](https://github.com/promptfoo/promptfoo/issues/9044)) ([7759d6f](https://github.com/promptfoo/promptfoo/commit/7759d6f9421499e6bf72b5e843113fb5d8a531d9))
* **提供商：** 荣誉克劳德代理 SDK 取消 ([#10459](https://github.com/promptfoo/promptfoo/issues/10459)) ([a488cb4](https://github.com/promptfoo/promptfoo/commit/a488cb498d3786befcdcf415b2373bc02fe1808f))
* **提供者：** 隔离人类凭证和元响应 ([#10110](https://github.com/promptfoo/promptfoo/issues/10110)) ([f24966a](https://github.com/promptfoo/promptfoo/commit/f24966ab7c3f4aab0403611e18de5f2590b3e052))
* **提供商：** 标准化 OpenRouter URL 并验证 SDK 范围 ([#10433](https://github.com/promptfoo/promptfoo/issues/10433)) ([a0b9c34](https://github.com/promptfoo/promptfoo/commit/a0b9c349fa2e0631d68a66042bda319ab4e707e0))
* **提供者：** 保留 Claude SDK 任务工具 ([#10489](https://github.com/promptfoo/promptfoo/issues/10489)) ([ac71008](https://github.com/promptfoo/promptfoo/commit/ac71008b68946c4cdb9c3e8c507a29565813d523))
* **提供者：** 保留计划的 Claude 任务结果 ([#10233](https://github.com/promptfoo/promptfoo/issues/10233)) ([b1999a0](https://github.com/promptfoo/promptfoo/commit/b1999a03d43918f3016e8bea83cd0cdb24f8500c))
* **提供商：** 将每条 Claude 路线上的 max_tokens 提高到人工思考预算之上 ([#10491](https://github.com/promptfoo/promptfoo/issues/10491)) ([73e0e1f](https://github.com/promptfoo/promptfoo/commit/73e0e1fb5dea61695acb3af9bcf7a13889bea913))
* **提供商：** 在清理后的输出中编辑 AWS SigV4 凭证 ([#10482](https://github.com/promptfoo/promptfoo/issues/10482)) ([eeebd72](https://github.com/promptfoo/promptfoo/commit/eeebd72abd54ebf0de9e47541a6547577db63e2b))
* **提供者：** 解决未编目模型的人择速记 ([#10490](https://github.com/promptfoo/promptfoo/issues/10490)) ([3c77783](https://github.com/promptfoo/promptfoo/commit/3c77783e19aa2df6b14699ec21eacac9c66d97ab))
* **提供商：**更新 GPT 模型成本 ([#10319](https://github.com/promptfoo/promptfoo/issues/10319)) ([9988fcb](https://github.com/promptfoo/promptfoo/commit/9988fcb02b1dc0b6aee11e4c2266b21c54c9a1da))
* **提供者：** 验证编码代理目标和缓存密钥 ([#10111](https://github.com/promptfoo/promptfoo/issues/10111)) ([2003fcc](https://github.com/promptfoo/promptfoo/commit/2003fcc659fa466f654c1be685475eda6fa9570a))
* **redteam:** 负责所有扫描时模型调用 ([#10479](https://github.com/promptfoo/promptfoo/issues/10479)) ([9b11bd8](https://github.com/promptfoo/promptfoo/commit/9b11bd8b5aea423c885cd56536cda78bf13e8422))
* **redteam:** 用于远程策略生成使用的帐户 ([#10445](https://github.com/promptfoo/promptfoo/issues/10445)) ([02c9209](https://github.com/promptfoo/promptfoo/commit/02c9209aeab1c0f72b8aa923967cf0a8f869de16))
* **redteam:** 计算不计量发电请求 ([#10429](https://github.com/promptfoo/promptfoo/issues/10429)) ([b74d5e0](https://github.com/promptfoo/promptfoo/commit/b74d5e05570b2b4fcc48986503764b1ca8bfe5ed))
* **redteam:** 保留缓存的生成并重试记账 ([#10507](https://github.com/promptfoo/promptfoo/issues/10507)) ([4868649](https://github.com/promptfoo/promptfoo/commit/486864972a8e4f6d75832a138f4410325ab6c0d0))
* **redteam:** 保留累积评分令牌使用情况 ([#10406](https://github.com/promptfoo/promptfoo/issues/10406)) ([be75b25](https://github.com/promptfoo/promptfoo/commit/be75b25b13a012d2c60820a244770bf1ef1241e0))
* **redteam:** 防止缓存和重复的令牌费用 ([#10417](https://github.com/promptfoo/promptfoo/issues/10417)) ([4ba76df](https://github.com/promptfoo/promptfoo/commit/4ba76df943f4488281830f7424f64136b6f419cd))
* **redteam:** 单独的恶作剧用户令牌使用 ([#10431](https://github.com/promptfoo/promptfoo/issues/10431)) ([f30f67d](https://github.com/promptfoo/promptfoo/commit/f30f67d0134558123ce3a9a3ad2f024439e98c93))
* **调度程序：** 解析 RFC 3339 速率限制重置标头 ([#10322](https://github.com/promptfoo/promptfoo/issues/10322)) ([12f0322](https://github.com/promptfoo/promptfoo/commit/12f0322ab108886215922495d4ae9dbddfc14af5))
* **跟踪：**捕获有效的 OpenAI 完成请求设置 ([#10368](https://github.com/promptfoo/promptfoo/issues/10368)) ([176215c](https://github.com/promptfoo/promptfoo/commit/176215c5a809cef59f38b27b682c07eef7a8dbc7))
* **追踪：** 选择有意义的模型和工具跨度进行红队 ([#10358](https://github.com/promptfoo/promptfoo/issues/10358)) ([be44f83](https://github.com/promptfoo/promptfoo/commit/be44f8389bcd234e7144861957f670548ce85326))
* **webui:** 页面卸载时停止媒体批量下载 ([#10487](https://github.com/promptfoo/promptfoo/issues/10487)) ([2309f65](https://github.com/promptfoo/promptfoo/commit/2309f65e1c64db9be66c785f5ccb6ee51eacec7d))

---

> 📦 仓库：[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) · 🏷️ 版本：`0.122.1` · 📅 发布：2026-08-26 · [查看英文原版 Release](https://github.com/promptfoo/promptfoo/releases/tag/0.122.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
