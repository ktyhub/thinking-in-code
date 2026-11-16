---
title: "promptfoo 0.123.1"
project: "promptfoo"
repo: "promptfoo/promptfoo"
tag: "0.123.1"
version: "0.123.1"
published: "2026-09-18"
type: "patch"
lang: "zh"
---

# promptfoo 0.123.1

## [0.123.1](https://github.com/promptfoo/promptfoo/compare/0.123.0...0.123.1) (2026-09-18)


### 特点

* **基石：**跨 HTTP 适配器刷新身份验证 ([#10123](https://github.com/promptfoo/promptfoo/issues/10123)) ([9d3f063](https://github.com/promptfoo/promptfoo/commit/9d3f063815568afc77786966e1096aec01e53177))
* **提供商：** 添加 Gemini 3.8 和 Vertex Live ([#10956](https://github.com/promptfoo/promptfoo/issues/10956)) ([1417f22](https://github.com/promptfoo/promptfoo/commit/1417f22b60f1268bb4bf8ead4df271853be6c512))
* **提供商：** 添加 GPT-Live 语音会话 ([#10891](https://github.com/promptfoo/promptfoo/issues/10891)) ([316a334](https://github.com/promptfoo/promptfoo/commit/316a3341fe69c59c55bc835964ab588d27b844a3))
* **提供商：** 添加 OpenAI 代理 API ([#10892](https://github.com/promptfoo/promptfoo/issues/10892)) ([ad3bee3](https://github.com/promptfoo/promptfoo/commit/ad3bee3299e3a9864ef6d47482298b2e7f1ceb37))
* **提供者：** 添加可移植的 HTTP 配置模式 ([#10968](https://github.com/promptfoo/promptfoo/issues/10968)) ([fcd0604](https://github.com/promptfoo/promptfoo/commit/fcd06045caab8ea338d6eab4655d07e656ff883f))
* **提供者：** 添加可移植的 MCP 配置模式 ([#10965](https://github.com/promptfoo/promptfoo/issues/10965)) ([f5ccb3c](https://github.com/promptfoo/promptfoo/commit/f5ccb3c8e8bb14a254bc95073b174739485ac054))
* **提供商：** 支持 Ollama 0.34 功能并刷新模型文档 ([#10964](https://github.com/promptfoo/promptfoo/issues/10964)) ([ac01a4f](https://github.com/promptfoo/promptfoo/commit/ac01a4fe9f8cb265ff8dcaebefcb3854bb5fa065))
* **提供者：**表面Ollama思维输出和完成原因 ([#10954](https://github.com/promptfoo/promptfoo/issues/10954)) ([27d4c22](https://github.com/promptfoo/promptfoo/commit/27d4c22834272e278fa5cbcf3a9bf638d82f7622))
* **提供商：**更新 Gemini 工具和媒体支持 ([#10172](https://github.com/promptfoo/promptfoo/issues/10172)) ([627bdd0](https://github.com/promptfoo/promptfoo/commit/627bdd0cb70081be0c6c6583448dbf39127a0c70))


### 错误修复

* **断言：**绑定嵌入工具调用解析 ([#10877](https://github.com/promptfoo/promptfoo/issues/10877)) ([78202a3](https://github.com/promptfoo/promptfoo/commit/78202a3a785655ef639658b0c0318daf628da2e5))
* **断言：**绑定工具调用解析器状态 ([#10887](https://github.com/promptfoo/promptfoo/issues/10887)) ([15290b4](https://github.com/promptfoo/promptfoo/commit/15290b4cd14392fbb6b12eb39c73c6663734cc4d))
* **断言：** 默认 RAG 断言阈值为 0.5 ([#10202](https://github.com/promptfoo/promptfoo/issues/10202)) ([4831b60](https://github.com/promptfoo/promptfoo/commit/4831b602d0cfdd67aef716df0fa66feb95b6a3da))，关闭 [#9910](https://github.com/promptfoo/promptfoo/issues/9910) [#9848](https://github.com/promptfoo/promptfoo/issues/9848)
* **断言：** 反转分数并传递搜索标题 ([#10103](https://github.com/promptfoo/promptfoo/issues/10103)) ([26e8f2f](https://github.com/promptfoo/promptfoo/commit/26e8f2f788a1e3725f7e86ba7ceab5b279ad2cb5))
* **断言：** 永远不会在非分类器和非搜索标题上反转分级机故障 ([#10904](https://github.com/promptfoo/promptfoo/issues/10904)) ([e049702](https://github.com/promptfoo/promptfoo/commit/e04970224fcca500c6a86d3f7ddafe7d560ebab6))
* **断言：** 拒绝格式错误的 Webhook 结果 ([#10955](https://github.com/promptfoo/promptfoo/issues/10955)) ([fc57736](https://github.com/promptfoo/promptfoo/commit/fc57736863f0a73860ebae67eab5dcc587cfb341))
* **断言：**拒绝非字符串搜索规则 ([#10934](https://github.com/promptfoo/promptfoo/issues/10934)) ([7bbb79e](https://github.com/promptfoo/promptfoo/commit/7bbb79e5806e39af37915578b1145f371d52ac30))
* **auth:** 强化自定义标头请求 ([#10524](https://github.com/promptfoo/promptfoo/issues/10524)) ([5325084](https://github.com/promptfoo/promptfoo/commit/5325084139f826160dbeda5a6867d919c3c8746a))
* **cli:** 在结果导出期间处理大值 ([#10884](https://github.com/promptfoo/promptfoo/issues/10884)) ([be798f4](https://github.com/promptfoo/promptfoo/commit/be798f4d30fc04c82c2e59ee1ff4eb6e9c0df1a3))
* **cli:** 保留扩展的内存中结果 ([#10885](https://github.com/promptfoo/promptfoo/issues/10885)) ([60483d9](https://github.com/promptfoo/promptfoo/commit/60483d94592c6fd58f5f91f7b9eaa19938e40ee6))
* **代码扫描：** extractValidLineRanges 在尾随换行符上逐一关闭 ([#10107](https://github.com/promptfoo/promptfoo/issues/10107)) ([2cbabdb](https://github.com/promptfoo/promptfoo/commit/2cbabdbeeb7d3f2223878ae21bf7bddd685f204d))
* **config:** 在包含引号的路径中保留发现 ([#10549](https://github.com/promptfoo/promptfoo/issues/10549)) ([d9b3927](https://github.com/promptfoo/promptfoo/commit/d9b392750592e1506a2beb4552af9011437aae05))
* **db:** 在持久性错误后保留共享 blob ([#10897](https://github.com/promptfoo/promptfoo/issues/10897)) ([3b353fb](https://github.com/promptfoo/promptfoo/commit/3b353fb8a66eba917fea723ca239e50f7d57358b))
* **deps:** 将依赖项 @anthropic-ai/sdk 更新为 v0.123.0 ([#10901](https://github.com/promptfoo/promptfoo/issues/10901)) ([14f7c06](https://github.com/promptfoo/promptfoo/commit/14f7c06ccceef47eb4f7e160dcf65ba97ebee8ae))
* **deps:** 将依赖项 @anthropic-ai/sdk 更新为 v0.124.0 ([#10940](https://github.com/promptfoo/promptfoo/issues/10940)) ([29a15d1](https://github.com/promptfoo/promptfoo/commit/29a15d1edb256c789d0035ce3f36ad7cf91db6bb))
* **deps:** 将engine.io更新为v6.6.10 ([#10915](https://github.com/promptfoo/promptfoo/issues/10915)) ([e54a968](https://github.com/promptfoo/promptfoo/commit/e54a9686ab2e592b7c07105a2c3f93d33d9c9c6b))
* **依赖：**更新opentelemetry ([#10886](https://github.com/promptfoo/promptfoo/issues/10886)) ([280bc5e](https://github.com/promptfoo/promptfoo/commit/280bc5ef72c0e79aa6ed160bd7699a74bd0f035d))
* **deps:** 更新类型定义 ([#10924](https://github.com/promptfoo/promptfoo/issues/10924)) ([01c6397](https://github.com/promptfoo/promptfoo/commit/01c6397974fc106ddc4e8592bb36f64680c4b7fb))
* 耗尽数据库写入并保留提供程序选项 ([#10911](https://github.com/promptfoo/promptfoo/issues/10911)) ([32bfa9e](https://github.com/promptfoo/promptfoo/commit/32bfa9edae56d36f526ab13b6637db8dfb82c73e))
* **评估：**保持并发派生指标一致 ([#10873](https://github.com/promptfoo/promptfoo/issues/10873)) ([2a3a3bd](https://github.com/promptfoo/promptfoo/commit/2a3a3bd973f293ae0f7ccc75257672eecf6067be))
* **eval:** 保留音频分级结果和顺序 ([#10822](https://github.com/promptfoo/promptfoo/issues/10822)) ([395d21e](https://github.com/promptfoo/promptfoo/commit/395d21e0a0cc203acd83a2ad7a774cf75b31f40b))
* **eval:** 保留云 UUID 配置语义 ([#7732](https://github.com/promptfoo/promptfoo/issues/7732)) ([8544fed](https://github.com/promptfoo/promptfoo/commit/8544feda8b15a04a6b27f401227f461f552a389a))
* **fetch:** 解码 URL 凭据并匹配授权（不区分大小写） ([#10909](https://github.com/promptfoo/promptfoo/issues/10909)) ([b8aa6ff](https://github.com/promptfoo/promptfoo/commit/b8aa6ff8270720dbfc4ce1ebaf33fe4bffeac801))
* **fetch:** 将credit_balance_exhausted 视为硬配额错误 ([#10881](https://github.com/promptfoo/promptfoo/issues/10881)) ([7f21bb2](https://github.com/promptfoo/promptfoo/commit/7f21bb253bfc901c64b769361f65482552362f6e))
* 尊重 SDK 选项并加载 AVIF/TIFF 图像 ([#10902](https://github.com/promptfoo/promptfoo/issues/10902)) ([15bba21](https://github.com/promptfoo/promptfoo/commit/15bba219d294e434d2aeb01dd9ea69c108f8b077))
* **集成：** Honor --env-file 和 Helicone key 和 Langfuse 基本 URL 的配置环境 ([#10942](https://github.com/promptfoo/promptfoo/issues/10942)) ([8bd9f37](https://github.com/promptfoo/promptfoo/commit/8bd9f3796592c99ef6810b50b1ba092851ed4564))
* **集成：** 在获取时读取 Langfuse env ([#10937](https://github.com/promptfoo/promptfoo/issues/10937)) ([033080c](https://github.com/promptfoo/promptfoo/commit/033080c64e42c1a5927a35be12dc5b98424fe25d))
* **集成：** 共享 Langfuse 提示获取并显示真实的 SDK 加载错误 ([#10943](https://github.com/promptfoo/promptfoo/issues/10943)) ([379ecd0](https://github.com/promptfoo/promptfoo/commit/379ecd060ba43371d16106a8f0b9b6f473ec34c5))
* **匹配器：** 标记上下文忠实度评分器失败 ([#9907](https://github.com/promptfoo/promptfoo/issues/9907)) ([77bc3ba](https://github.com/promptfoo/promptfoo/commit/77bc3badf21138c6faf126ace243461b5b872307))
* **匹配器：** 标记 RAG 分级机失败，因此逆断言无法通过 ([#10494](https://github.com/promptfoo/promptfoo/issues/10494)) ([b3d21d2](https://github.com/promptfoo/promptfoo/commit/b3d21d200363434a8f0a1a5627f529ee11d95dc9))
* **mcp:** 接受微调模型标识符 ([#10847](https://github.com/promptfoo/promptfoo/issues/10847)) ([9442129](https://github.com/promptfoo/promptfoo/commit/94421294af108de3d1d45b06de28579028e035f4))
* **opencode:** 从完整会话历史记录中捕获技能调用 ([#10011](https://github.com/promptfoo/promptfoo/issues/10011)) ([290973d](https://github.com/promptfoo/promptfoo/commit/290973d2f75d0b55561aa1e21345011c54a8265d))
* **提示：** 当设置了 basePrompt.label 时，CSV 行会折叠为重复的标签/ID ([#10102](https://github.com/promptfoo/promptfoo/issues/10102)) ([25963c3](https://github.com/promptfoo/promptfoo/commit/25963c3d4e9e45916c74288a979b102e6b6cda22))
* **提供商：** 调整 ElevenLabs 请求和音频输入 ([#10736](https://github.com/promptfoo/promptfoo/issues/10736)) ([de12341](https://github.com/promptfoo/promptfoo/commit/de123419c769d35ecb304b3a14e498b46d2e082e))
* **提供商：** 在用户配置传播后应用规范化的 Envoy 基本 URL ([#10642](https://github.com/promptfoo/promptfoo/issues/10642)) ([1b6e793](https://github.com/promptfoo/promptfoo/commit/1b6e793b07de366c2faeef3d85fa682f5c4d30c3))
* **提供商：**清除 ElevenLabs 请求和流计时器 ([#10919](https://github.com/promptfoo/promptfoo/issues/10919)) ([23d245b](https://github.com/promptfoo/promptfoo/commit/23d245b0cc8380078d2014b19171a9a18e734eb2))
* **providers:** 转发 Snowflake 提供程序配置 ([#10878](https://github.com/promptfoo/promptfoo/issues/10878)) ([7d0bacd](https://github.com/promptfoo/promptfoo/commit/7d0bacde37051ff78ae78a2d7a6d27a5c66850f1))
* **提供商：** 处理计费配额和可重试限制 ([#10866](https://github.com/promptfoo/promptfoo/issues/10866)) ([16fdeb6](https://github.com/promptfoo/promptfoo/commit/16fdeb6bd626004e58fa2d1d685481cb480ac782))
* **提供者：** 尊重 Foundry 覆盖和绑定获取读取 ([#10948](https://github.com/promptfoo/promptfoo/issues/10948)) ([6b153ad](https://github.com/promptfoo/promptfoo/commit/6b153adcbb800ddb0bddc01db2c4d7487628cfeb))
* **提供商：** 荣誉 Nova Sonic 推理配置 ([#10310](https://github.com/promptfoo/promptfoo/issues/10310)) ([aa2abb3](https://github.com/promptfoo/promptfoo/commit/aa2abb340161805bb5413c07d029fd8b773883e7))
* **提供商：** 遵守提示 Gemini 工具策略透传 ([#10890](https://github.com/promptfoo/promptfoo/issues/10890)) ([2fd7add](https://github.com/promptfoo/promptfoo/commit/2fd7addd8ab3c27464293a83061f0c16cadf0835))
* **提供者：** 隔离代理端点凭据 ([#10951](https://github.com/promptfoo/promptfoo/issues/10951)) ([f385d96](https://github.com/promptfoo/promptfoo/commit/f385d964daf383dcb96ebd095894641acf02d8bb))
* **提供商：** 将 Ollama 嵌入迁移到 /api/embed 并尊重配置 ([#10958](https://github.com/promptfoo/promptfoo/issues/10958)) ([6c33d1f](https://github.com/promptfoo/promptfoo/commit/6c33d1f7518daa784602493663c17553e919bffd))
* **提供商：**保留默认的 MCP 启用 ([#10661](https://github.com/promptfoo/promptfoo/issues/10661)) ([8a8a08b](https://github.com/promptfoo/promptfoo/commit/8a8a08b32a8cc3532a983cb12f84bc54ff20115d))
* **提供者：** 保留 HTTP 转换错误 ([#10454](https://github.com/promptfoo/promptfoo/issues/10454)) ([a7e4ffc](https://github.com/promptfoo/promptfoo/commit/a7e4ffcdbb5352c0e573f4c04134bb75e11acc23))
* **提供者：** 保留模式化的 OpenCode 技能历史记录 ([#10971](https://github.com/promptfoo/promptfoo/issues/10971)) ([ba0eeb4](https://github.com/promptfoo/promptfoo/commit/ba0eeb4d55b11d9428b2d20594ff15aa30b4b2d4))
* **提供者：** 保留流式 Ollama 工具调用 ([#10946](https://github.com/promptfoo/promptfoo/issues/10946)) ([7867eb2](https://github.com/promptfoo/promptfoo/commit/7867eb24b2635e259e1dc05999e50f775ba7a5e2))
* **提供商：** 路由 OpenClaw 默认代理 ([#9046](https://github.com/promptfoo/promptfoo/issues/9046)) ([139267a](https://github.com/promptfoo/promptfoo/commit/139267a1f45b886417bd59a62f25a5729df2421f))
* **提供商：**停止破坏TogetherAI模型参数（[#10846]（https://github.com/promptfoo/promptfoo/issues/10846））（[783d71f]（https://github.com/promptfoo/promptfoo/commit/783d71ff922d16c70d6b3cfadcd61c6fadae8d3f））
* **提供者：**停止将本地配置泄漏到请求主体中 ([#10845](https://github.com/promptfoo/promptfoo/issues/10845)) ([329b748](https://github.com/promptfoo/promptfoo/commit/329b748113d64d3b1bf88651de91a1dc036fe1ad))
* **提供者：** 表面 Ollama HTTP 错误而不是空输出 ([#10953](https://github.com/promptfoo/promptfoo/issues/10953)) ([c66b468](https://github.com/promptfoo/promptfoo/commit/c66b46874ee89c04efa7404a3b8ac45e65f520ab))
* **redteam:** 将 redteam-ollama 示例与其自述文件对齐 ([#10959](https://github.com/promptfoo/promptfoo/issues/10959)) ([ccb4b5a](https://github.com/promptfoo/promptfoo/commit/ccb4b5a19ea5519ba6e334af39e7ee3fe268ddf3))
* **redteam:** 对齐工具发现生成和分级 ([#10621](https://github.com/promptfoo/promptfoo/issues/10621)) ([d672144](https://github.com/promptfoo/promptfoo/commit/d672144df62d6b031596ef469155a0451438b58f))
* **红队：** 应用证据中的地面特工技能计划 ([#10903](https://github.com/promptfoo/promptfoo/issues/10903)) ([3c5429b](https://github.com/promptfoo/promptfoo/commit/3c5429b22e8124cdab5552b1b7bf7901b85a5f96))
* **redteam:** 在评分失败时保留漏洞 ([#10931](https://github.com/promptfoo/promptfoo/issues/10931)) ([37608b6](https://github.com/promptfoo/promptfoo/commit/37608b614c87bba1cf858e4be0bb08693519e661))
* **redteam:** 保留策略评分上下文 ([#10969](https://github.com/promptfoo/promptfoo/issues/10969)) ([08e91da](https://github.com/promptfoo/promptfoo/commit/08e91da010e102ebbebe47126fb450d34c4008d6))
* **验证器：**当provider.config未定义时，默认会话源为client ([#10086](https://github.com/promptfoo/promptfoo/issues/10086)) ([62dbbc0](https://github.com/promptfoo/promptfoo/commit/62dbbc0932fc044a0845817d2fd73ee33807d2ab))
* **webui:** 处理格式错误的登录重定向 ([#10460](https://github.com/promptfoo/promptfoo/issues/10460)) ([ebb1a6d](https://github.com/promptfoo/promptfoo/commit/ebb1a6d00005cc181ed8a3323f4bdf5b8c499c02))

---

> 📦 仓库：[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) · 🏷️ 版本：`0.123.1` · 📅 发布：2026-09-18 · [查看英文原版 Release](https://github.com/promptfoo/promptfoo/releases/tag/0.123.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
