---
title: "promptfoo 0.123.0"
project: "promptfoo"
repo: "promptfoo/promptfoo"
tag: "0.123.0"
version: "0.123.0"
published: "2026-09-10"
type: "minor"
lang: "zh"
---

# promptfoo 0.123.0

## [0.123.0](https://github.com/promptfoo/promptfoo/compare/0.122.2...0.123.0) (2026-09-10)


### ⚠ 重大变更

* **提供商：** 默认 GPT-5.6+ 到响应（[#10803](https://github.com/promptfoo/promptfoo/issues/10803)）

### 特点

* **断言：** 使用 llm-rubric 对原生音频进行分级 ([#10814](https://github.com/promptfoo/promptfoo/issues/10814)) ([39c4fb5](https://github.com/promptfoo/promptfoo/commit/39c4fb55516a405bbb04f6e300a09e6168006c08))
* **提供者：** 添加克劳德寓言和神话 5.1 ([#10601](https://github.com/promptfoo/promptfoo/issues/10601)) ([ac6ba5b](https://github.com/promptfoo/promptfoo/commit/ac6ba5b7bfacf9da728219ebf2c9d813f0832240))
* **提供商：** 添加 GPT-6 Astra 支持 ([#10625](https://github.com/promptfoo/promptfoo/issues/10625)) ([cd4c68b](https://github.com/promptfoo/promptfoo/commit/cd4c68bd5a143b42b507ebc7b8cce1a0d9511539))
* **提供者：** 添加 grok-4.6、grok-imagine-image-2.0 和 grok-imagine-video-1.5 ([#10587](https://github.com/promptfoo/promptfoo/issues/10587)) ([48a71cd](https://github.com/promptfoo/promptfoo/commit/48a71cd0163b01ba8efb2954eb0165dd810a6c6e))
* **提供商：** 默认 GPT-5.6+ 到响应 ([#10803](https://github.com/promptfoo/promptfoo/issues/10803)) ([b051efd](https://github.com/promptfoo/promptfoo/commit/b051efdc6a9d2eaa0c6a209d4878484db8e1ead7))
* **提供者：** 在响应元数据中公开 MCP 工具调用 ([#10516](https://github.com/promptfoo/promptfoo/issues/10516)) ([891d870](https://github.com/promptfoo/promptfoo/commit/891d870990b8a3f51bfd5f2db44669ac82ccb63e))
* **提供商：** 支持 Gemini 3.8 Flash ([#10616](https://github.com/promptfoo/promptfoo/issues/10616)) ([b89a25d](https://github.com/promptfoo/promptfoo/commit/b89a25d4dbb15889ffb602927747ebcb24d91efe))
* **提供商：** 支持 GPT 映像 2.5 生成 ([#10812](https://github.com/promptfoo/promptfoo/issues/10812)) ([71346b0](https://github.com/promptfoo/promptfoo/commit/71346b0f8b13f19a86e5c5abc2de65d636349193))
* **提供商：** 支持 GPT 转录文件上传 ([#10813](https://github.com/promptfoo/promptfoo/issues/10813)) ([c85b395](https://github.com/promptfoo/promptfoo/commit/c85b395d9b6b3487a219ea477540024393968a6c))
* **提供商：** 支持 Muse Spark 1.3 ([#10617](https://github.com/promptfoo/promptfoo/issues/10617)) ([8e0de03](https://github.com/promptfoo/promptfoo/commit/8e0de03b5934392168f471a192ac7a061f1e2eac))


### 错误修复

* **断言：** 解析多行工具调用并阐明指南 ([#10789](https://github.com/promptfoo/promptfoo/issues/10789)) ([5f0324f](https://github.com/promptfoo/promptfoo/commit/5f0324fc4f5b928c21cb7ae800d86988b1cd9f22))
* **断言：** 识别 tool-call-f1 中的 OpenAI 响应 function_call 项 ([#10665](https://github.com/promptfoo/promptfoo/issues/10665)) ([028282c](https://github.com/promptfoo/promptfoo/commit/028282cc77f84093cf145c73dc2cffbe8ae91deb))
* **claude-agent-sdk:** 识别记录的模型选择器 ([#10741](https://github.com/promptfoo/promptfoo/issues/10741)) ([c7e32f6](https://github.com/promptfoo/promptfoo/commit/c7e32f6d23fb63623bd51c8a4f2d987f303f3804))
* **claude-agent:** 为 stdio MCP 服务器保留每服务器环境 ([#10557](https://github.com/promptfoo/promptfoo/issues/10557)) ([6fd4c41](https://github.com/promptfoo/promptfoo/commit/6fd4c41bcc58c4563ba5794c2543a3aabd848083))
* **cli:** 删除已停用的 GitHub 示例下载 ([#10876](https://github.com/promptfoo/promptfoo/issues/10876)) ([bf09397](https://github.com/promptfoo/promptfoo/commit/bf0939743711ed641eb1f352488387f0c33488b9))
* **cloudflare:** 使用版本化的 Mistral 网关路由 ([#10734](https://github.com/promptfoo/promptfoo/issues/10734)) ([ea6d6d3](https://github.com/promptfoo/promptfoo/commit/ea6d6d393c255aa0c35207005371fb0927d39ede))
* **配置：**避免缺少可选配置的堆栈跟踪 ([#10523](https://github.com/promptfoo/promptfoo/issues/10523)) ([3d67680](https://github.com/promptfoo/promptfoo/commit/3d676805ca5cf40f5a4e92d65db21836cb7391a3))
* **db:** 在锁定失败后和关闭期间保留写入 ([#9009](https://github.com/promptfoo/promptfoo/issues/9009)) ([130389e](https://github.com/promptfoo/promptfoo/commit/130389e4c08d78d001fe5933534f74904617f8ee))
* **deps:** 保留浏览器生产依赖项 ([#10755](https://github.com/promptfoo/promptfoo/issues/10755)) ([0b4ccbe](https://github.com/promptfoo/promptfoo/commit/0b4ccbe4f936e03db4fd90a1bded52ba05403370))
* **deps:** 更新人类包 ([#10571](https://github.com/promptfoo/promptfoo/issues/10571)) ([93f963d](https://github.com/promptfoo/promptfoo/commit/93f963d880831fbe4de6a049afbf88f68301114e))
* **deps:** 更新人类包 ([#10679](https://github.com/promptfoo/promptfoo/issues/10679)) ([152c423](https://github.com/promptfoo/promptfoo/commit/152c4234968cbff8755218d880fae2b47e3b64a6))
* **deps:** 将依赖项 @inquirer/core 更新为 v12 ([#10554](https://github.com/promptfoo/promptfoo/issues/10554)) ([90fa399](https://github.com/promptfoo/promptfoo/commit/90fa399b941364363f57288fbf305b6d6aaff7ed))
* **deps:** 将依赖项 ai 更新为 ^6.0.264 ([#10585](https://github.com/promptfoo/promptfoo/issues/10585)) ([da073db](https://github.com/promptfoo/promptfoo/commit/da073db4261af95bff25a23f517b1d67b89f132e))
* **deps:** 将依赖项 js-yaml 更新为 v5.4.0 ([#10629](https://github.com/promptfoo/promptfoo/issues/10629)) ([58fe7cc](https://github.com/promptfoo/promptfoo/commit/58fe7cce225e0ab8937f170fea27434093accaa2))
* **deps:** 将依赖项 zod 更新为 v4.5.4 ([#10788](https://github.com/promptfoo/promptfoo/issues/10788)) ([03b0564](https://github.com/promptfoo/promptfoo/commit/03b0564d1aeb4a500dbbbfe683d22b67974af609))
* **部门：** 将 Hono 更新为 v4.13.5 ([#10815](https://github.com/promptfoo/promptfoo/issues/10815)) ([6a7568d](https://github.com/promptfoo/promptfoo/commit/6a7568ddd99a0b98fe5864703a8f5d7cd15ea61b))
* **deps:** 将 js-yaml 更新为 5.4.1 ([#10680](https://github.com/promptfoo/promptfoo/issues/10680)) ([bd18712](https://github.com/promptfoo/promptfoo/commit/bd187127654c187d1d06a94bdc4e1118c8faf81b))
* **依赖项：** 将 OpenCode SDK 更新为 v1.18.21 ([#10565](https://github.com/promptfoo/promptfoo/issues/10565)) ([93b9f8c](https://github.com/promptfoo/promptfoo/commit/93b9f8c04fbbf8265f94c920e7cdea0b73ec4b40))
* **deps:** 将 webpack 更新为 v5.110.3 ([#10863](https://github.com/promptfoo/promptfoo/issues/10863)) ([fbfc5fb](https://github.com/promptfoo/promptfoo/commit/fbfc5fb782f43e61fef3840ca79f0e9d207e6476))
* **评估：** 在观看模式观看时保持 CLI 处于活动状态 ([#10562](https://github.com/promptfoo/promptfoo/issues/10562)) ([89d4138](https://github.com/promptfoo/promptfoo/commit/89d41387f5f1b0d9746d7175c23b8c0c9c8cfa52))
* **eval:** 监视模式忽略标量和生成器 `tests` 引用 ([#10169](https://github.com/promptfoo/promptfoo/issues/10169)) ([71499e3](https://github.com/promptfoo/promptfoo/commit/71499e3ed2c1292df16ab9f77cd11dbcf8f791ee))
* **示例：** 荣誉框架模型选择 ([#10781](https://github.com/promptfoo/promptfoo/issues/10781)) ([34cfb68](https://github.com/promptfoo/promptfoo/commit/34cfb68489d646eecd5043ada91675703c1575ad))
* **示例：** 使用选定的 CrewAI 凭证 ([#10799](https://github.com/promptfoo/promptfoo/issues/10799)) ([e2cabfa](https://github.com/promptfoo/promptfoo/commit/e2cabfa76923571546c8f8b47737b7103eac446d))
* **go-provider:** 支持导入包 ([#10540](https://github.com/promptfoo/promptfoo/issues/10540)) ([10deb31](https://github.com/promptfoo/promptfoo/commit/10deb31cc3ac953a28ee88fe43530cfc4d2c7927))
* **google:** 通过交互路由稳定的 Omni ([#10737](https://github.com/promptfoo/promptfoo/issues/10737)) ([9ef3c96](https://github.com/promptfoo/promptfoo/commit/9ef3c96d4119c56e80863138c1d11a2a82e2a348))
* 保护空漂移统计数据并澄清提供商选项 ([#10645](https://github.com/promptfoo/promptfoo/issues/10645)) ([bfcd067](https://github.com/promptfoo/promptfoo/commit/bfcd0674689c538df416b7cfac4e762614149fb7))
* 强化评估和提供者边缘情况 ([#10576](https://github.com/promptfoo/promptfoo/issues/10576)) ([1adb6e5](https://github.com/promptfoo/promptfoo/commit/1adb6e5e16084f3ebde04b1d2fb340fbdb99cf1f))
* **http:** 由于缺少私钥而签名失败时清除错误上下文 ([#10586](https://github.com/promptfoo/promptfoo/issues/10586)) ([7abf349](https://github.com/promptfoo/promptfoo/commit/7abf349d897b58efdf860aa5b87e1574dc95d7df))
* **http:** 支持多部分中的 Windows 驱动器号和 file:// 源路径 ([#10566](https://github.com/promptfoo/promptfoo/issues/10566)) ([22468f4](https://github.com/promptfoo/promptfoo/commit/22468f45be80ee1cb40f18bf843c18b96c86aef5))
* **huggingface：** 标准化分类和嵌入响应 ([#10735](https://github.com/promptfoo/promptfoo/issues/10735)) ([d31716d](https://github.com/promptfoo/promptfoo/commit/d31716d04184d036a2f48bab98c6de423f239c49))
* **mcp:** 使用有效的提供者模型选择器 ([#10806](https://github.com/promptfoo/promptfoo/issues/10806)) ([8bcf17d](https://github.com/promptfoo/promptfoo/commit/8bcf17dc91ba9705a7eafaa255904ec4ba4a4401))
* **n8n:** 省略 HEAD webhook 的请求主体 ([#10730](https://github.com/promptfoo/promptfoo/issues/10730)) ([7f897cf](https://github.com/promptfoo/promptfoo/commit/7f897cfcc4b578b7951d3a5a1c33d35cc3f5a7f7))
* **openai:** 保留模型路由和历史兼容性 ([#10810](https://github.com/promptfoo/promptfoo/issues/10810)) ([460e221](https://github.com/promptfoo/promptfoo/commit/460e221b2c0c39472111137e40d8fadc17abeecb))
* **openclaw:** 对服务器挑战时间戳进行签名 ([#10739](https://github.com/promptfoo/promptfoo/issues/10739)) ([517e181](https://github.com/promptfoo/promptfoo/commit/517e1814785c044a624ecb33ea625db9d0952e5c))
* **提供商：**解决 AI 代码质量问题 ([#10552](https://github.com/promptfoo/promptfoo/issues/10552)) ([9cd1924](https://github.com/promptfoo/promptfoo/commit/9cd19241a0706fcf59dd609167f4218612fc4beb))
* **提供商：** 调整计费费率和零令牌使用 ([#10743](https://github.com/promptfoo/promptfoo/issues/10743)) ([0a2852c](https://github.com/promptfoo/promptfoo/commit/0a2852c06dedd00e484bc514b42f97cb03d80851))
* **提供者：**对齐双曲线音频请求和元数据 ([#10786](https://github.com/promptfoo/promptfoo/issues/10786)) ([e680c7f](https://github.com/promptfoo/promptfoo/commit/e680c7fcf299ceedda11819e254bd873dbd3d377))
* **提供商：** 将 Vercel 一代与 AI SDK 6 对齐 ([#10728](https://github.com/promptfoo/promptfoo/issues/10728)) ([6514ebc](https://github.com/promptfoo/promptfoo/commit/6514ebcb7419ecbaa3edf4bb65d6113cf34cd2e6))
* **提供程序：**允许零参数 MCP 命令 ([#10647](https://github.com/promptfoo/promptfoo/issues/10647)) ([1d32ab1](https://github.com/promptfoo/promptfoo/commit/1d32ab1c94a22d3731266f751bc23f4c3e58cbdf))
* **提供者：**正确的基岩嵌入和知识库请求 ([#10751](https://github.com/promptfoo/promptfoo/issues/10751)) ([3f0787b](https://github.com/promptfoo/promptfoo/commit/3f0787bc367cfd93f22acafc6227f77ce2e11375))
* **提供者：**正确的 Databricks 服务端点请求 ([#10747](https://github.com/promptfoo/promptfoo/issues/10747)) ([b0b3874](https://github.com/promptfoo/promptfoo/commit/b0b38742cf021cd22f987ad0207e4080a4fec389))
* **提供商：** 修正过时的基岩定价、区域费率和 Nova 缓存计费 ([#10593](https://github.com/promptfoo/promptfoo/issues/10593)) ([dad89cd](https://github.com/promptfoo/promptfoo/commit/dad89cda85c28425491ddc04d9a7641eecafa5cf))
* **提供商：** 推迟 FAL SDK 加载直至推理 ([#10792](https://github.com/promptfoo/promptfoo/issues/10792)) ([3afb563](https://github.com/promptfoo/promptfoo/commit/3afb5634f1f8a513fe5c8d4a50101cfc9f05a419))
* **提供商：** 删除无法解析的 Claude 模型 ID ([#10635](https://github.com/promptfoo/promptfoo/issues/10635)) ([281f8d4](https://github.com/promptfoo/promptfoo/commit/281f8d42984771608baf6e925ca24bb090554027))
* **提供商：**完成 GitHub 型号退役 ([#10849](https://github.com/promptfoo/promptfoo/issues/10849)) ([b67f9e0](https://github.com/promptfoo/promptfoo/commit/b67f9e02aa62d87980242fd6ed82405575877fd9))
* **提供商：**转发 Azure 请求设置 ([#10729](https://github.com/promptfoo/promptfoo/issues/10729)) ([685b354](https://github.com/promptfoo/promptfoo/commit/685b3546547a136e73f4649d087e19ae4d930f59))
* **提供商：** 转发审核取消 ([#10804](https://github.com/promptfoo/promptfoo/issues/10804)) ([5a4288e](https://github.com/promptfoo/promptfoo/commit/5a4288e8d4b0b0bd1638b1f11422ae2d01b1a2dd))
* **提供者：** 处理 Vercel 流取消 ([#10805](https://github.com/promptfoo/promptfoo/issues/10805)) ([753c4e4](https://github.com/promptfoo/promptfoo/commit/753c4e48675557bd221d07a4853bbf1a7921e920))
* **提供者：** 隔离 FAL SDK client 配置 ([#10749](https://github.com/promptfoo/promptfoo/issues/10749)) ([e3bbad6](https://github.com/promptfoo/promptfoo/commit/e3bbad609ffe108b6cf5ae42dd10369211c5587c))
* **提供者：** 隔离 SageMaker 完成缓存 ([#10731](https://github.com/promptfoo/promptfoo/issues/10731)) ([8e0a58f](https://github.com/promptfoo/promptfoo/commit/8e0a58f63a56b71952b72d7413815d0985427ac4))
* **提供商：** 保持 SageMaker 请求和缓存设置一致 ([#10808](https://github.com/promptfoo/promptfoo/issues/10808)) ([f81947d](https://github.com/promptfoo/promptfoo/commit/f81947d792ca9480e6648ecfc40d0af23254dc67))
* **提供者：** 标准化类型化响应消息 ([#10600](https://github.com/promptfoo/promptfoo/issues/10600)) ([a966cc5](https://github.com/promptfoo/promptfoo/commit/a966cc5d1fb3701900b2d27b409bc6f685afde5e))
* **提供者：** 省略未设置的基岩生成设置 ([#10774](https://github.com/promptfoo/promptfoo/issues/10774)) ([189c458](https://github.com/promptfoo/promptfoo/commit/189c458d039854d1ecb658049bc608e04730f22b))
* **提供商：** 保留基岩卷轴 ID 并明确服务路线 ([#10807](https://github.com/promptfoo/promptfoo/issues/10807)) ([2bc1354](https://github.com/promptfoo/promptfoo/commit/2bc135467284f9f07acbac56c0e731c5cf99e222))
* **提供者：** 保留本地模型参数 ([#10732](https://github.com/promptfoo/promptfoo/issues/10732)) ([c8e606c](https://github.com/promptfoo/promptfoo/commit/c8e606c11e59e8a92992bc2027e89bd84b40ff6d))
* **提供者：** 保留 MiniMax 和 Moonshot 请求覆盖 ([#10745](https://github.com/promptfoo/promptfoo/issues/10745)) ([01f4d9c](https://github.com/promptfoo/promptfoo/commit/01f4d9cd77f1668362aea630c4d7f0aa7b877daf))
* **提供商：** 保留 OpenRouter BYOK 和缓存成本 ([#10801](https://github.com/promptfoo/promptfoo/issues/10801)) ([790e768](https://github.com/promptfoo/promptfoo/commit/790e768c7a4962217de1c6b48d6a64d417004fac))
* **提供者：** 保留 Perplexity 使用和搜索数据 ([#10809](https://github.com/promptfoo/promptfoo/issues/10809)) ([c105c2c](https://github.com/promptfoo/promptfoo/commit/c105c2c91105c10ce4e543998145c2d8948d06e4))
* **提供者：** 在取消时保留复制创建共享 ([#10773](https://github.com/promptfoo/promptfoo/issues/10773)) ([884f2b0](https://github.com/promptfoo/promptfoo/commit/884f2b0dde0febaf2a827c20c9094b6bcf7ed667))
* **提供者：** 保留选定的凭证源 ([#10811](https://github.com/promptfoo/promptfoo/issues/10811)) ([1ca6fe2](https://github.com/promptfoo/promptfoo/commit/1ca6fe2f10cf87e66e68f04d8f8cc891ef93268b))
* **提供商：** 保留服务连接设置 ([#10742](https://github.com/promptfoo/promptfoo/issues/10742)) ([c8aa59d](https://github.com/promptfoo/promptfoo/commit/c8aa59dabff415ac24dd4a4d9f9247a662f3fee3))
* **提供商：** 保留 WatsonX 呼叫者取消 ([#10861](https://github.com/promptfoo/promptfoo/issues/10861)) ([3113c6f](https://github.com/promptfoo/promptfoo/commit/3113c6fa9ec0f90625b43731e64782bd8e101b90))
* **提供程序：** 防止重复的实时提示和正确的转录指标 ([#10868](https://github.com/promptfoo/promptfoo/issues/10868)) ([7e4e706](https://github.com/promptfoo/promptfoo/commit/7e4e706641e3accde074ce7446131aadafa9c02c))
* **提供商：** 价格自动质量 xai 图像编辑 ([#10613](https://github.com/promptfoo/promptfoo/issues/10613)) ([8e06f14](https://github.com/promptfoo/promptfoo/commit/8e06f149edbc3625721d963a182b151611b66521))
* **提供商：** 提高同等的克劳德思维代币预算 ([#10498](https://github.com/promptfoo/promptfoo/issues/10498)) ([ae3615a](https://github.com/promptfoo/promptfoo/commit/ae3615a9a09c8eb008a97b75b3e037f96889bd9e))
* **提供者：** 识别 Daybreak 推理别名 ([#10723](https://github.com/promptfoo/promptfoo/issues/10723)) ([b9ce5cc](https://github.com/promptfoo/promptfoo/commit/b9ce5ccbead36c73f9a289aa0ffce4b766d85a57))
* **提供商：** 恢复网关模型发现 ([#10778](https://github.com/promptfoo/promptfoo/issues/10778)) ([ff69bd3](https://github.com/promptfoo/promptfoo/commit/ff69bd38b7d7c864a4a4bdfaa74d98fb109a0c9b))
* **提供商：** 删除已退役的 OpenAI 模型 ([#10636](https://github.com/promptfoo/promptfoo/issues/10636)) ([3f4280b](https://github.com/promptfoo/promptfoo/commit/3f4280b22eca11ea991d01d82aa50d3d5390971f))
* **提供商：** 保留失败的安全扫描成本 ([#10521](https://github.com/promptfoo/promptfoo/issues/10521)) ([04e36f3](https://github.com/promptfoo/promptfoo/commit/04e36f3b139be643a72d6b08649fe14527b0a4d0))
* **提供商：** 停用 GitHub 模型推理 ([#10746](https://github.com/promptfoo/promptfoo/issues/10746)) ([cf7adb7](https://github.com/promptfoo/promptfoo/commit/cf7adb7da35766942941f4ee7edc137cb52a6a9b))
* **提供商：** 在基岩上路由 Grok 4.6 推理配置文件 ([#10589](https://github.com/promptfoo/promptfoo/issues/10589)) ([48bad74](https://github.com/promptfoo/promptfoo/commit/48bad74d5ee616889acff49a81a511692e581570))
* **提供者：**范围双曲传统音频字段 ([#10796](https://github.com/promptfoo/promptfoo/issues/10796)) ([819a3d9](https://github.com/promptfoo/promptfoo/commit/819a3d91da2b6b441c680748d07bcbd2d7f17080))
* **提供商：**范围 WatsonX 定价元数据 ([#10802](https://github.com/promptfoo/promptfoo/issues/10802)) ([9cc4a36](https://github.com/promptfoo/promptfoo/commit/9cc4a362e37af0b20a64eb7aef93c60aa3f8026b))
* **提供者：** 显式选择 TrueFoundry 任务 ([#10790](https://github.com/promptfoo/promptfoo/issues/10790)) ([83b12b9](https://github.com/promptfoo/promptfoo/commit/83b12b9224fc375df667605e740de56db0144ae3))
* **提供商：**单独的 Azure 聊天和嵌入默认值 ([#10784](https://github.com/promptfoo/promptfoo/issues/10784)) ([79454fa](https://github.com/promptfoo/promptfoo/commit/79454fadd6bc467d7ee6375599d3cbfea2e430aa))
* **提供商：**单独的连接和模型设置 ([#10681](https://github.com/promptfoo/promptfoo/issues/10681)) ([35f3434](https://github.com/promptfoo/promptfoo/commit/35f343479aae4c68071f475eb3eccd2cadd3ea58))
* **提供者：** 快照 SageMaker 请求缓存键 ([#10798](https://github.com/promptfoo/promptfoo/issues/10798)) ([3b40040](https://github.com/promptfoo/promptfoo/commit/3b40040c9364550bc79ea77a03c61796d3bd040a))
* **providers:** 停止将 portkey 提供程序配置作为 HTTP 标头转发 ([#10536](https://github.com/promptfoo/promptfoo/issues/10536)) ([3f94284](https://github.com/promptfoo/promptfoo/commit/3f942845637918a72111e632952b16daf9fb2066))
* **提供者：** 支持 Abliteration Large V2 推理 ([#10615](https://github.com/promptfoo/promptfoo/issues/10615)) ([51b8f12](https://github.com/promptfoo/promptfoo/commit/51b8f125d14ca28e5aae2d2e1f9696ea49db2a10))
* **提供者：** 将 Claude Sonnet 5 视为默认思考 ([#10631](https://github.com/promptfoo/promptfoo/issues/10631)) ([5bf2ad1](https://github.com/promptfoo/promptfoo/commit/5bf2ad1ada2780871e1661d78db2f1a46f6d39fb))
* **提供商：** 在 Azure 上恢复 Grok 和多模式响应提示 ([#10592](https://github.com/promptfoo/promptfoo/issues/10592)) ([d7ce7ec](https://github.com/promptfoo/promptfoo/commit/d7ce7ec2e68e2ca18c9ee63c65197bf0ed50e5fb))
* **提供商：**更新 OpenAI 模型和默认值 ([#10865](https://github.com/promptfoo/promptfoo/issues/10865)) ([607c820](https://github.com/promptfoo/promptfoo/commit/607c820f68d35b08b48e64130c2e9e6627ddbef2))
* **提供商：** 使用 OpenRouter 报告的成本 ([#10777](https://github.com/promptfoo/promptfoo/issues/10777)) ([ef82931](https://github.com/promptfoo/promptfoo/commit/ef829315ee3a86a6e794143140f34199df421905))
* **redteam:** 标准化目标响应归因 ([#10862](https://github.com/promptfoo/promptfoo/issues/10862)) ([01f9e87](https://github.com/promptfoo/promptfoo/commit/01f9e87deac6f53c55ef9aca2aa8d91efd4abd10))
* **复制：** 当评估中止时停止本地轮询 ([#10740](https://github.com/promptfoo/promptfoo/issues/10740)) ([2cbfcd8](https://github.com/promptfoo/promptfoo/commit/2cbfcd8cc5e5538b38de823b185fd7a0a1b66c49))
* **安全性：** 不区分大小写地匹配环境凭证名称，并停止编辑供应商名称 ([#10638](https://github.com/promptfoo/promptfoo/issues/10638)) ([e5767f2](https://github.com/promptfoo/promptfoo/commit/e5767f290f8b57d132fe4dbe4629679552d447e7))
* **安全性：** 编辑持久环境映射中的凭据命名变量 ([#10628](https://github.com/promptfoo/promptfoo/issues/10628)) ([811158e](https://github.com/promptfoo/promptfoo/commit/811158ee380d0bdcc909ba466f24a6806240b9ed))
* **slack:** 保留范围身份验证和返回的 DM 对话 ([#10738](https://github.com/promptfoo/promptfoo/issues/10738)) ([c0aa003](https://github.com/promptfoo/promptfoo/commit/c0aa00334bab8e8b0a9ff5c863486b1d6f8db4d7))

---

> 📦 仓库：[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) · 🏷️ 版本：`0.123.0` · 📅 发布：2026-09-10 · [查看英文原版 Release](https://github.com/promptfoo/promptfoo/releases/tag/0.123.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
