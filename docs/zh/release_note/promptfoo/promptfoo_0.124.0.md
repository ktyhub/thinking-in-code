---
title: "promptfoo 0.124.0"
project: "promptfoo"
repo: "promptfoo/promptfoo"
tag: "0.124.0"
version: "0.124.0"
published: "2026-10-06"
type: "minor"
lang: "zh"
---

# promptfoo 0.124.0

## [0.124.0](https://github.com/promptfoo/promptfoo/compare/0.123.1...0.124.0) (2026-10-06)


### ⚠ 重大变更

* **提供商：** 删除托管的 ChatKit 提供商 ([#11434](https://github.com/promptfoo/promptfoo/issues/11434))
* **提供商：** 让 WatsonX SDK 选择加入 ([#11359](https://github.com/promptfoo/promptfoo/issues/11359))
* **部门：** 选择 Langfuse SDK ([#11351](https://github.com/promptfoo/promptfoo/issues/11351))
* **部门：** 选择 Slack SDK ([#11349](https://github.com/promptfoo/promptfoo/issues/11349))
* **提供商：** 显式安装 OpenAI Agents ([#11177](https://github.com/promptfoo/promptfoo/issues/11177))
* **提供商：** 选择加入 Codex Security SDK ([#11325](https://github.com/promptfoo/promptfoo/issues/11325))
* **提供商：** 使浏览器 SDK 显式安装（[#11163](https://github.com/promptfoo/promptfoo/issues/11163)）
* **deps:** 使本地 Transformers 选择加入 ([#11119](https://github.com/promptfoo/promptfoo/issues/11119))

### 特点

* **cli:** 支持 --filter-metadata 中逗号分隔的 OR 值 ([#11320](https://github.com/promptfoo/promptfoo/issues/11320)) ([b7cae9f](https://github.com/promptfoo/promptfoo/commit/b7cae9ff5b756fdca72af54e0d3dcc25d5238d4c))
* **提供商：** 添加 Claude Opus 5.5 支持 ([#11037](https://github.com/promptfoo/promptfoo/issues/11037)) ([ae2aded](https://github.com/promptfoo/promptfoo/commit/ae2adedd9e7a5c170728f5777f9694cb9a2c863a))
* **提供者：** 添加 Claude Sonnet 5.5 支持 ([#11295](https://github.com/promptfoo/promptfoo/issues/11295)) ([4a23db1](https://github.com/promptfoo/promptfoo/commit/4a23db16aa13695ac148ac40170afb8813adf37c))
* **提供者：** 添加 GPT-6 Sol 和 Luna ([#11043](https://github.com/promptfoo/promptfoo/issues/11043)) ([92dd929](https://github.com/promptfoo/promptfoo/commit/92dd929548c0949faf86b38df807810a7be37346))
* **提供商：** 添加 Grok 4.7 支持 ([#11046](https://github.com/promptfoo/promptfoo/issues/11046)) ([4f7c400](https://github.com/promptfoo/promptfoo/commit/4f7c400e4e54374b86eebca6e125ef5e9108d4e3))
* **提供商：** 添加 OpenAI 安全标识符 ([#11330](https://github.com/promptfoo/promptfoo/issues/11330)) ([5d620e2](https://github.com/promptfoo/promptfoo/commit/5d620e2c0f47d8d252d8fd68152ecfceb7ffc3e9))
* **提供程序：** 添加 TypeSafe Jev 提供程序 ([#11299](https://github.com/promptfoo/promptfoo/issues/11299)) ([6265741](https://github.com/promptfoo/promptfoo/commit/62657415e789c369ae388a01ac707c39f70be7b1))
* **提供商：**恢复暂停的克劳德服务器工具轮流 ([#11286](https://github.com/promptfoo/promptfoo/issues/11286)) ([f8ba0bc](https://github.com/promptfoo/promptfoo/commit/f8ba0bc90f8ee66d75cfe9b4a710dc1c7012c412))
* **提供者：** 在隔离的工作空间中运行编码代理 ([#11063](https://github.com/promptfoo/promptfoo/issues/11063)) ([822caba](https://github.com/promptfoo/promptfoo/commit/822caba35e9fda7a5f300721477efe7c9194865a))
* **提供商：** 支持 GPT-6.1 Sol 和超快 ([#11303](https://github.com/promptfoo/promptfoo/issues/11303)) ([c58ec23](https://github.com/promptfoo/promptfoo/commit/c58ec23813599e855c6a01afdbd29a980549dfd8))
* **提供商：**更新当前模型支持 ([#11065](https://github.com/promptfoo/promptfoo/issues/11065)) ([37fc270](https://github.com/promptfoo/promptfoo/commit/37fc270c0db70bb1006d7347336541eab8d84f34))


### 错误修复

* **anthropic:** 将 OAuth Claude Code 用户代理提升为 2.1.285 ([#11323](https://github.com/promptfoo/promptfoo/issues/11323)) ([29bddde](https://github.com/promptfoo/promptfoo/commit/29bddde3103465b873c03b5417cd0f80213c9ebf))
* **app:** 跨消费者共享云配置请求 ([#11193](https://github.com/promptfoo/promptfoo/issues/11193)) ([ef7923c](https://github.com/promptfoo/promptfoo/commit/ef7923c19665bd4bad88a26ab5ec304028d66dc7))
* **断言：**接受早期版本记录的分级机结果形状 ([#11391](https://github.com/promptfoo/promptfoo/issues/11391)) ([3233b37](https://github.com/promptfoo/promptfoo/commit/3233b37e6869a0d9f97bda5a99ce9c52c21f0bc6))
* **断言：** 等待流星处理程序，因此缺少自然 dep 等级作为失败 ([#11312](https://github.com/promptfoo/promptfoo/issues/11312)) ([6b00513](https://github.com/promptfoo/promptfoo/commit/6b0051379a31a949b071d2101f1ad5f7f83911d3))
* **断言：** 将逆 RAG 分数限制在记录的 0-1 范围内 ([#11082](https://github.com/promptfoo/promptfoo/issues/11082)) ([eee76e2](https://github.com/promptfoo/promptfoo/commit/eee76e2b9c51ebea39a907dd83d9fa1ff0b7ce89))
* **断言：** 尊重模型分级封闭质量和事实性的 not- 前缀 ([#11185](https://github.com/promptfoo/promptfoo/issues/11185)) ([8a1d6a7](https://github.com/promptfoo/promptfoo/commit/8a1d6a7f7801f0f3e5dfd3d1e0052eafa7b141da))
* **断言：** 忽略空白 BLEU 引用 ([#11278](https://github.com/promptfoo/promptfoo/issues/11278)) ([eee7e74](https://github.com/promptfoo/promptfoo/commit/eee7e74eb239655860d7ae747bec30b527e85102))
* **断言：** 在上下文相关性评分中忽略评分者散文 ([#10251](https://github.com/promptfoo/promptfoo/issues/10251)) ([016aad3](https://github.com/promptfoo/promptfoo/commit/016aad36ffb7c2e7c815c4a6f67b552f648bdfe9))
* **断言：** 当否定脚本断言失败时保留自定义原因 ([#11246](https://github.com/promptfoo/promptfoo/issues/11246)) ([0f11b51](https://github.com/promptfoo/promptfoo/commit/0f11b510b87cec1c4ce5ca7538e0267220214fb3))
* **断言：** 记录为什么选择最佳评分失败 ([#11396](https://github.com/promptfoo/promptfoo/issues/11396)) ([941f738](https://github.com/promptfoo/promptfoo/commit/941f73899dd87a62446fe76275e3df0f73757a0f))
* **断言：** 在空分数之前验证 BLEU 权重 ([#9858](https://github.com/promptfoo/promptfoo/issues/9858)) ([0251010](https://github.com/promptfoo/promptfoo/commit/0251010ee90d574d1e94ef5088747f7adbaf2b16))
* **断言：** 验证自定义评分结果 ([#11079](https://github.com/promptfoo/promptfoo/issues/11079)) ([f34fe4e](https://github.com/promptfoo/promptfoo/commit/f34fe4e42161c9295a4b9ae9599eabd5e41edc32))
* **cli:** 允许在 --filter-metadata 值中使用文字逗号 ([#11397](https://github.com/promptfoo/promptfoo/issues/11397)) ([d206bb3](https://github.com/promptfoo/promptfoo/commit/d206bb3d4f4e03aa74155d32367377fede9a7f9a))
* **cli:** 正确的云组织指南 ([#11078](https://github.com/promptfoo/promptfoo/issues/11078)) ([de8a542](https://github.com/promptfoo/promptfoo/commit/de8a542aff080eb1413640ec3b7883672ff9c63c))
* **cli:** 当目标错误停止评估时退出代码失败 ([#11400](https://github.com/promptfoo/promptfoo/issues/11400)) ([84fbc8e](https://github.com/promptfoo/promptfoo/commit/84fbc8e60548f391354a8623b5b1201558adfc40))
* **cli:** 处理异步浏览器启动错误 ([#11115](https://github.com/promptfoo/promptfoo/issues/11115)) ([11a4ce2](https://github.com/promptfoo/promptfoo/commit/11a4ce2cecec5c4d0a1189fc0263c12bf2230fdc))
* **cli:** 在令牌组织中保留云登录 ([#11026](https://github.com/promptfoo/promptfoo/issues/11026)) ([b85c2f1](https://github.com/promptfoo/promptfoo/commit/b85c2f151ea9f03d6073d0aca079ca7b684d4b8c))
* **cli:** 保留云团队选择 ([#11018](https://github.com/promptfoo/promptfoo/issues/11018)) ([3379c9e](https://github.com/promptfoo/promptfoo/commit/3379c9ee2dd79934f04e88c853c26e96239e29b5))
* **cli:** 静音内部减压警告 ([#11346](https://github.com/promptfoo/promptfoo/issues/11346)) ([c0017f6](https://github.com/promptfoo/promptfoo/commit/c0017f6dd047e5011aa92c1a58f791191786c796))
* **代码扫描：** 包括大型未知文本文件 ([#11129](https://github.com/promptfoo/promptfoo/issues/11129)) ([3d65dce](https://github.com/promptfoo/promptfoo/commit/3d65dce00b6d045b81adc03de233fc81d2b4df03))
* **代码扫描：** 在 Windows 上启动文件系统 MCP ([#11244](https://github.com/promptfoo/promptfoo/issues/11244)) ([9759f34](https://github.com/promptfoo/promptfoo/commit/9759f3436d80c9ca1d479dad0db0be006e80e063))
* **代码扫描：**引脚 MCP 启动并等待关闭 ([#11285](https://github.com/promptfoo/promptfoo/issues/11285)) ([b0c124f](https://github.com/promptfoo/promptfoo/commit/b0c124fe6e3ca3a68c98474cd261d4aa0b7d1c0c))
* **代码扫描：**共享差异范围解析 ([#11204](https://github.com/promptfoo/promptfoo/issues/11204)) ([9a55724](https://github.com/promptfoo/promptfoo/commit/9a557245528f8ff5e031d7ec2d82df62ea5a7e23))
* **config:** 接受数字和布尔环境值 ([#11386](https://github.com/promptfoo/promptfoo/issues/11386)) ([20b1ffe](https://github.com/promptfoo/promptfoo/commit/20b1ffeff60c6324b80c407c556ad4aff6dd2622))
* **配置：** 在单字符串测试中扩展 glob ([#11097](https://github.com/promptfoo/promptfoo/issues/11097)) ([874f44a](https://github.com/promptfoo/promptfoo/commit/874f44a321d1256ea5d816660802e77cdcd96965))
* **配置：** 隔离评估上下文并保留重播状态 ([#10893](https://github.com/promptfoo/promptfoo/issues/10893)) ([8d5e81e](https://github.com/promptfoo/promptfoo/commit/8d5e81e9f69dff49cca76cbf3b04accddbfd5c19))
* **config:** 保留导入的测试文件路径解析 ([#11283](https://github.com/promptfoo/promptfoo/issues/11283)) ([78a76bd](https://github.com/promptfoo/promptfoo/commit/78a76bd421db227937c67133d1195818b659967c))
* **config:** 恢复文件提示的相对标签 ([#11384](https://github.com/promptfoo/promptfoo/issues/11384)) ([29a2e4f](https://github.com/promptfoo/promptfoo/commit/29a2e4fcdb17ebcc9d7e3270d7bf7fa822e38f44))
* **config:** 恢复相对变量文件路径 ([#11380](https://github.com/promptfoo/promptfoo/issues/11380)) ([c4863c9](https://github.com/promptfoo/promptfoo/commit/c4863c94b4d932ba3ede9997723df9c5b72b6218))
* 约束提供者和 shell 输入 ([#11318](https://github.com/promptfoo/promptfoo/issues/11318)) ([b93b2e7](https://github.com/promptfoo/promptfoo/commit/b93b2e7800439e15efe6c741ce6b231e8d681ca8))
* **csv:** 在没有 CSV 默认值的情况下保留断言类型的显式阈值 ([#11337](https://github.com/promptfoo/promptfoo/issues/11337)) ([7ab9e6e](https://github.com/promptfoo/promptfoo/commit/7ab9e6e7358a8977f61e00606e7c8108980731d4))
* **deps-dev:** 在 1 个目录的 npm_and_yarn 组中将大括号从 1.1.18 提升到 1.1.21 ([#11316](https://github.com/promptfoo/promptfoo/issues/11316)) ([74eda9a](https://github.com/promptfoo/promptfoo/commit/74eda9a5d3dd4d7919e82853e0a1a50bd60fec1d))
* **deps-dev:** 将 npm_and_yarn 组中的 http-cache-semantics 从 4.2.0 提升到 4.3.0 跨 1 个目录 ([#11439](https://github.com/promptfoo/promptfoo/issues/11439)) ([1287cfd](https://github.com/promptfoo/promptfoo/commit/1287cfd4bca8b9e4d64b8b0a532555ccfb9a473a))
* **依赖项：** 融合 Azure 和 IBM SDK 补丁 ([#11164](https://github.com/promptfoo/promptfoo/issues/11164)) ([cdb544d](https://github.com/promptfoo/promptfoo/commit/cdb544d0015e4baf64a0f5040572734abfec7548))
* **deps:** 将 simple-git 迁移到 4.0.2 ([#11428](https://github.com/promptfoo/promptfoo/issues/11428)) ([7504383](https://github.com/promptfoo/promptfoo/commit/7504383cfbb6f9c37e72219b5a002db8e567a196))
* **deps:** 补丁序列化-javascript escaping ([#11332](https://github.com/promptfoo/promptfoo/issues/11332)) ([ae1e7d5](https://github.com/promptfoo/promptfoo/commit/ae1e7d56cf3d2f5cbd058f998a87edf95ef7cfda))
* **依赖：** 将 ansi-tokenize 固定到 0.3.0 ([#10990](https://github.com/promptfoo/promptfoo/issues/10990)) ([a89e3cc](https://github.com/promptfoo/promptfoo/commit/a89e3cc42eba5fbc43050959bb81581ef0f89d07))
* **deps:** 保留终端 OpenAI 流事件 ([#11143](https://github.com/promptfoo/promptfoo/issues/11143)) ([d405281](https://github.com/promptfoo/promptfoo/commit/d4052816545d25e15b8bd0a75afd8d16738c05cd))
* **deps:** 替换有漏洞的存档和图像解析器 ([#11106](https://github.com/promptfoo/promptfoo/issues/11106)) ([71b8b5a](https://github.com/promptfoo/promptfoo/commit/71b8b5a1b70229119deb23c32fdf6d06cf3bc25f))
* **deps:** 需要 csv 解析 7.0.3 ([#11372](https://github.com/promptfoo/promptfoo/issues/11372)) ([61666d5](https://github.com/promptfoo/promptfoo/commit/61666d5a951e09b1bb2922d1233f3a36ec9853cc))
* **deps:** 恢复兼容的观察者和代理版本 ([#11120](https://github.com/promptfoo/promptfoo/issues/11120)) ([8386dc4](https://github.com/promptfoo/promptfoo/commit/8386dc4336083713262fc1b2afd3e3ea1963f564))
* **deps:** 更新人类包 ([#11009](https://github.com/promptfoo/promptfoo/issues/11009)) ([a33f261](https://github.com/promptfoo/promptfoo/commit/a33f26160e26106256590c53ef45297b34cf1f28))
* **deps:** 更新人类包 ([#11073](https://github.com/promptfoo/promptfoo/issues/11073)) ([9d24937](https://github.com/promptfoo/promptfoo/commit/9d24937976cc74d19ee7c7b54ea7776c6c0bb7ac))
* **deps:** 更新人类包 ([#11264](https://github.com/promptfoo/promptfoo/issues/11264)) ([d6f0419](https://github.com/promptfoo/promptfoo/commit/d6f041984044d767e6d28db0f80c0794d166e0d2))
* **deps:** 将 Claude Agent SDK 更新为 v0.3.278 ([#11292](https://github.com/promptfoo/promptfoo/issues/11292)) ([1de8a1e](https://github.com/promptfoo/promptfoo/commit/1de8a1ec42623347369df078473f6c7a33020f4b))
* **deps:** 将依赖项 @anthropic-ai/claude-agent-sdk 更新为 v0.3.276 ([#11256](https://github.com/promptfoo/promptfoo/issues/11256)) ([33bb323](https://github.com/promptfoo/promptfoo/commit/33bb32342b8d59614c49f9e99fc226ced0f9f7e6))
* **deps:** 将依赖项 ai 更新为 ^6.0.286 ([#11343](https://github.com/promptfoo/promptfoo/issues/11343)) ([0e1e076](https://github.com/promptfoo/promptfoo/commit/0e1e076298e1f2fd27fd80fd6a413047293c0eae))
* **deps:** 将依赖项 js-yaml 更新为 v5.4.2 ([#11038](https://github.com/promptfoo/promptfoo/issues/11038)) ([d59f045](https://github.com/promptfoo/promptfoo/commit/d59f045c4cda1193574380aae639d84380dbf5f2))
* **deps:** 将依赖项 zod 更新为 v4.6.1 ([#11000](https://github.com/promptfoo/promptfoo/issues/11000)) ([dd144d5](https://github.com/promptfoo/promptfoo/commit/dd144d594be023cf8245e3ff1939265ce811c8e2))
* **deps:** 将 DOMPurify 更新为 3.4.16 ([#11326](https://github.com/promptfoo/promptfoo/issues/11326)) ([eb5f2e1](https://github.com/promptfoo/promptfoo/commit/eb5f2e12a34d581a44c28937805c827fc8762754))
* **部门：** 更新 Drizzle ORM 和套件 ([#11344](https://github.com/promptfoo/promptfoo/issues/11344)) ([0640453](https://github.com/promptfoo/promptfoo/commit/0640453ccd30cebf3caa89e26710ec4c14b8bbe7))
* **deps:** 将 Engine.IO client 更新为 6.6.7 ([#11423](https://github.com/promptfoo/promptfoo/issues/11423)) ([70575c4](https://github.com/promptfoo/promptfoo/commit/70575c466abdd42faf5613aabd8c6047c274182c))
* **deps:** 将engine.io更新为v6.6.11 ([#11403](https://github.com/promptfoo/promptfoo/issues/11403)) ([78783ea](https://github.com/promptfoo/promptfoo/commit/78783ea9faf4b01445ba31d6edba16a7bc4267e3))
* **deps:** 更新示例依赖项 ([#11418](https://github.com/promptfoo/promptfoo/issues/11418)) ([26492a8](https://github.com/promptfoo/promptfoo/commit/26492a8ac1bf0bbfc9f63b70983afc58460d2a41))
* **deps:** 将 fast-uri 更新为 v3.1.8 ([#11279](https://github.com/promptfoo/promptfoo/issues/11279)) ([5ba35f7](https://github.com/promptfoo/promptfoo/commit/5ba35f78352d98e8ba9502446f84e4ff555f71a6))
* **deps:** 将 Google 表格更新为 18.0.1 ([#11389](https://github.com/promptfoo/promptfoo/issues/11389)) ([ef45a94](https://github.com/promptfoo/promptfoo/commit/ef45a94c301944f3a6b655a102c28af33279915b))
* **deps:** 将 Hono 更新为 4.13.9 ([#11417](https://github.com/promptfoo/promptfoo/issues/11417)) ([e73b6dd](https://github.com/promptfoo/promptfoo/commit/e73b6dd43037abf8c3b539e739fe1b09102bff85))
* **deps:** 将hono更新为v4.13.8 ([#11257](https://github.com/promptfoo/promptfoo/issues/11257)) ([76bdf58](https://github.com/promptfoo/promptfoo/commit/76bdf585cab8cb7d86835aa2106cf5330b617e6b))
* **deps:** 将 ibm-cloud-sdk-core 更新为 v5.6.1 ([#10986](https://github.com/promptfoo/promptfoo/issues/10986)) ([17b5a0a](https://github.com/promptfoo/promptfoo/commit/17b5a0a6a6640e968380b4db50c7cb09bd3cd1f7))
* **deps:** 将 IP 地址更新为 v10.7.1 ([#11064](https://github.com/promptfoo/promptfoo/issues/11064)) ([7110bef](https://github.com/promptfoo/promptfoo/commit/7110bef84da9bb48ae0d516ef5f4455b23cff82c))
* **deps:** 将 lru 缓存更新为 v11.5.3 ([#11287](https://github.com/promptfoo/promptfoo/issues/11287)) ([fa59117](https://github.com/promptfoo/promptfoo/commit/fa5911753862a989329f8037c2d0a5dc4e46cad2))
* **deps:** 将 MCP SDK 更新为 1.32.0 以进行重定向安全修复 ([#11412](https://github.com/promptfoo/promptfoo/issues/11412)) ([07346fe](https://github.com/promptfoo/promptfoo/commit/07346fed274a92ad57884a0f672409396909923e))
* **依赖：** 将 OpenCode SDK 更新为 1.18.32 ([#11413](https://github.com/promptfoo/promptfoo/issues/11413)) ([863271e](https://github.com/promptfoo/promptfoo/commit/863271e780fe2f99e6bd27add3900e5f8bf0dbba))
* **deps:** 将开放代码 sdk 更新为 v1.18.31 ([#11252](https://github.com/promptfoo/promptfoo/issues/11252)) ([1c6df33](https://github.com/promptfoo/promptfoo/commit/1c6df33c595dec16be356f1c4fd78cc777bcc43a))
* **deps:** 将架构引用解析器更新为 16.0.3 ([#11328](https://github.com/promptfoo/promptfoo/issues/11328)) ([b86456d](https://github.com/promptfoo/promptfoo/commit/b86456d1e6e7f25a7dc5ff3293502f2631e5f43c))
* **deps:** 将 Socket.IO client 更新为 4.8.4 ([#11424](https://github.com/promptfoo/promptfoo/issues/11424)) ([8d66ecf](https://github.com/promptfoo/promptfoo/commit/8d66ecff8862cabf03290be0fe34a90566cffd76))
* **deps:** 将 Socket.IO 服务器更新为 4.8.4 ([#11427](https://github.com/promptfoo/promptfoo/issues/11427)) ([f202c5c](https://github.com/promptfoo/promptfoo/commit/f202c5c476aa12418d31e7666152ade7624323c2))
* **deps:** 更新类型定义 ([#11010](https://github.com/promptfoo/promptfoo/issues/11010)) ([8174e60](https://github.com/promptfoo/promptfoo/commit/8174e6017902ffbd5ee8692db8caa24c437864e1))
* **env:** Honor --env-file 和配置 env 用于提示分隔符和断言并发 ([#11059](https://github.com/promptfoo/promptfoo/issues/11059)) ([851641e](https://github.com/promptfoo/promptfoo/commit/851641eb978043f2c80a47c713662ee7fec1535c))
* **eval:** HuggingFace 数据集页面上限为 100 行 ([#11421](https://github.com/promptfoo/promptfoo/issues/11421)) ([f5738e3](https://github.com/promptfoo/promptfoo/commit/f5738e36bbb4cddbe3bc8d056ef34b97cc26ebeb))
* **eval:** 当预取失败时保留 HuggingFace 行 ([#11419](https://github.com/promptfoo/promptfoo/issues/11419)) ([13f82c3](https://github.com/promptfoo/promptfoo/commit/13f82c3f15fedc62a7d667b33cce28d05870cfd8))
* **eval:** 清理 JUnit 报告中的无效 XML 字符 ([#10994](https://github.com/promptfoo/promptfoo/issues/10994)) ([5502626](https://github.com/promptfoo/promptfoo/commit/5502626c3e0db3af896672192692bd69c5df1a8c))
* **eval:** 验证角色响应数组 ([#11297](https://github.com/promptfoo/promptfoo/issues/11297)) ([7f73160](https://github.com/promptfoo/promptfoo/commit/7f731609444bb6145096f69e93b73afb02563e54))
* **示例：** 对齐 LiteLLM 提示和设置 ([#11147](https://github.com/promptfoo/promptfoo/issues/11147)) ([36bee67](https://github.com/promptfoo/promptfoo/commit/36bee677fdfe3a3609421654cb300327d2c4e05e))
* **示例：** 完成最小 LangGraph Python 设置 ([#11155](https://github.com/promptfoo/promptfoo/issues/11155)) ([63df964](https://github.com/promptfoo/promptfoo/commit/63df96478e7bf6d7404c1d229325240089a2963d))
* **示例：** 刷新 CrewAI 异步执行 ([#11142](https://github.com/promptfoo/promptfoo/issues/11142)) ([c219d9c](https://github.com/promptfoo/promptfoo/commit/c219d9c1a527dbeb4df7c7bf9201fc399deaff97))
* **示例：** 刷新 Google ADK 集成 ([#11152](https://github.com/promptfoo/promptfoo/issues/11152)) ([98ebda0](https://github.com/promptfoo/promptfoo/commit/98ebda04aade40c3164fbfe0ae83b519a2a73654))
* **示例：** 刷新 Python 提供程序依赖项 ([#11108](https://github.com/promptfoo/promptfoo/issues/11108)) ([5493966](https://github.com/promptfoo/promptfoo/commit/5493966c2cdd5191e99e775b6c52a7024393bd93))
* **示例：** 修复 F 分数指标并刷新依赖项 ([#11114](https://github.com/promptfoo/promptfoo/issues/11114)) ([e6bcec9](https://github.com/promptfoo/promptfoo/commit/e6bcec947cb971ea181a0b333d34717567cdf89f))
* **示例：** 简化和验证浏览器演示 ([#11124](https://github.com/promptfoo/promptfoo/issues/11124)) ([edaebce](https://github.com/promptfoo/promptfoo/commit/edaebce469abb2ddccfce9778ed90b9afed5798c))
* **示例：** 简化 Docker 沙箱依赖项 ([#11125](https://github.com/promptfoo/promptfoo/issues/11125)) ([9876eda](https://github.com/promptfoo/promptfoo/commit/9876eda81fabdc6e6f05b91cb8bbc34e3fde9fd2))
* **示例：** 使用受支持的 E2B 沙箱控件 ([#11146](https://github.com/promptfoo/promptfoo/issues/11146)) ([5035fee](https://github.com/promptfoo/promptfoo/commit/5035fee9222379c1323f23ec00d829e87e8d5696))
* 强化代理示例和网关错误 ([#11096](https://github.com/promptfoo/promptfoo/issues/11096)) ([fe63b90](https://github.com/promptfoo/promptfoo/commit/fe63b901225e4c4af9a7fc21b4d975a787183f78))
* 强化人工智能发现边缘情况 ([#10997](https://github.com/promptfoo/promptfoo/issues/10997)) ([757ff56](https://github.com/promptfoo/promptfoo/commit/757ff56a508b5959050c98dda5e40c4a55e0aeca))
* 隔离 Foundry clients 并保留变换 ([#11236](https://github.com/promptfoo/promptfoo/issues/11236)) ([51a1585](https://github.com/promptfoo/promptfoo/commit/51a15859af40c32f4a4409c1ae7d511b8a014be8))
* 隔离 HTTP 签名并验证 Webhook 分数 ([#10976](https://github.com/promptfoo/promptfoo/issues/10976)) ([27c866b](https://github.com/promptfoo/promptfoo/commit/27c866b456654f0889ad54370b05ebfb0c60afe3))
* **输出：** 保留 JUnit 清理后的名称标识 ([#11033](https://github.com/promptfoo/promptfoo/issues/11033)) ([d833727](https://github.com/promptfoo/promptfoo/commit/d833727ce8387eb96dc67e82dfa7972cd2b07a14))
* **软件包：** 支持 CommonJS API 消费者 ([#10765](https://github.com/promptfoo/promptfoo/issues/10765)) ([23a90ab](https://github.com/promptfoo/promptfoo/commit/23a90abb2a47946147319facd01d4d3a3974ce10))
* 保留日志上下文并验证媒体路径 ([#11379](https://github.com/promptfoo/promptfoo/issues/11379)) ([aae7bff](https://github.com/promptfoo/promptfoo/commit/aae7bff7c64c889067ee445142e37dd8054381eb))
* 保留日志消息和提供商响应 ([#11407](https://github.com/promptfoo/promptfoo/issues/11407)) ([0e911c9](https://github.com/promptfoo/promptfoo/commit/0e911c9c8e0878b2512bf26a18d53b22d3a068f3))
* 保留路径统计信息、提供程序元数据和视频文本 ([#11363](https://github.com/promptfoo/promptfoo/issues/11363)) ([a16d12b](https://github.com/promptfoo/promptfoo/commit/a16d12bf6f7a4bd6d169bb533c786dd9f0925e6a))
* **提示：** 通过文件加载保留描述符配置 ([#11219](https://github.com/promptfoo/promptfoo/issues/11219)) ([730969c](https://github.com/promptfoo/promptfoo/commit/730969c47911af7d8e3cfef86b3ab2721b1911ac))
* 传播文件系统 blob 删除失败 ([#11179](https://github.com/promptfoo/promptfoo/issues/11179)) ([e7283b8](https://github.com/promptfoo/promptfoo/commit/e7283b8cfeef96434669a1f15a62ed95a18749e1))
* **提供商：** 在多轮对话中接受 Ollama 工具回调 ([#10980](https://github.com/promptfoo/promptfoo/issues/10980)) ([27ad4b9](https://github.com/promptfoo/promptfoo/commit/27ad4b9505a98dc733d2f4abd49b887d3c9f408d))
* **提供商：** 解决 [#10635](https://github.com/promptfoo/promptfoo/issues/10635) 和 [#10632](https://github.com/promptfoo/promptfoo/issues/10632) ([#10637](https://github.com/promptfoo/promptfoo/issues/10637)) ([d1aa582](https://github.com/promptfoo/promptfoo/commit/d1aa582c9d799d4c04c32ad4dd3e35effbbd2114)) 的审核结果
* **提供者：** 对齐 Anthropic 工具和输出 ([#10821](https://github.com/promptfoo/promptfoo/issues/10821)) ([f74b2f4](https://github.com/promptfoo/promptfoo/commit/f74b2f44757ea073578ea3fa7bb41f9a5ef70251))
* **提供商：** 在 Vertex 和 Bedrock 上应用 Claude 采样规则 ([#11284](https://github.com/promptfoo/promptfoo/issues/11284)) ([c753817](https://github.com/promptfoo/promptfoo/commit/c7538179d1e6864b59eddda2e62e105913a28c64))
* **提供商：**避免重复的 Azure 回退警告 ([#11029](https://github.com/promptfoo/promptfoo/issues/11029)) ([e5d3386](https://github.com/promptfoo/promptfoo/commit/e5d3386071e85e5c2585e20a031ee7477d1e7116))
* **提供者：** 绑定 Azure Foundry 工具循环并共享凭据设置 ([#11030](https://github.com/promptfoo/promptfoo/issues/11030)) ([56b1058](https://github.com/promptfoo/promptfoo/commit/56b105876a1df705c7ba826ee5f243ced8cdeb52))
* **提供者：**控制 Foundry 执行和取消 ([#11086](https://github.com/promptfoo/promptfoo/issues/11086)) ([68ce0f7](https://github.com/promptfoo/promptfoo/commit/68ce0f7be992d85095190c37d5fb9c6eaa298b76))
* **提供者：**正确的显式 Mantle 端点建议 ([#11408](https://github.com/promptfoo/promptfoo/issues/11408)) ([b5505e5](https://github.com/promptfoo/promptfoo/commit/b5505e51671299b93bfb590dbe5b084bb73131a0))
* **提供商：** 删除重复的 Google 工具声明 ([#10982](https://github.com/promptfoo/promptfoo/issues/10982)) ([b3f6587](https://github.com/promptfoo/promptfoo/commit/b3f6587bae3c1fbc39d29b6572883b581f63b0cd))
* **提供程序：** 在格式错误的 Ollama 响应上优雅降级 ([#10984](https://github.com/promptfoo/promptfoo/issues/10984)) ([d536238](https://github.com/promptfoo/promptfoo/commit/d53623875190336fa85c383698693a06f928ad7b))
* **提供商：** 填补最近的模型目录空白 ([#11350](https://github.com/promptfoo/promptfoo/issues/11350)) ([f5c9b85](https://github.com/promptfoo/promptfoo/commit/f5c9b85598770bc76ae4c5bfc12972fc3780139f))
* **提供者：**转发 OpenCode 环境和跟踪上下文 ([#10606](https://github.com/promptfoo/promptfoo/issues/10606)) ([1db5b5e](https://github.com/promptfoo/promptfoo/commit/1db5b5e4369512409bd2c950ee5868f2e50e07d8))
* **提供商：** 尊重基岩区域覆盖 ([#11052](https://github.com/promptfoo/promptfoo/issues/11052)) ([2b0d41a](https://github.com/promptfoo/promptfoo/commit/2b0d41a3410101359a4b0edddb7e1671693c2abf))
* **提供程序：** Ollama 完成提供程序中的荣誉bustCache ([#10979](https://github.com/promptfoo/promptfoo/issues/10979)) ([c0ba816](https://github.com/promptfoo/promptfoo/commit/c0ba816679f226093f4ecedeb0ed61102765a23c))
* **提供者：** 尊重每次调用缓存覆盖 ([#10917](https://github.com/promptfoo/promptfoo/issues/10917)) ([56e361b](https://github.com/promptfoo/promptfoo/commit/56e361bfa29dedccceb9d65794d8a88d11dc07c9))
* **提供程序：** 在提供程序路径中的模型名称中保留冒号 ([#11216](https://github.com/promptfoo/promptfoo/issues/11216)) ([b0c0773](https://github.com/promptfoo/promptfoo/commit/b0c07734c351944ad97cf3078152156f6c381bf0))
* **提供商：** 为 Claude Agent SDK 保持不同的 MCP 服务器（[#10841](https://github.com/promptfoo/promptfoo/issues/10841)）（[87434e5](https://github.com/promptfoo/promptfoo/commit/87434e5e3dce29bade250f76636344c3ff86cab1)）
* **提供商：** 在 ElevenLabs WER 中保留非 ASCII 单词 ([#11406](https://github.com/promptfoo/promptfoo/issues/11406)) ([a76630e](https://github.com/promptfoo/promptfoo/commit/a76630eda6cbaf7f5e8e1014fe53909bcf564585))
* **提供者：** 在 Windows 上启动 npm 安装的 Codex 应用服务器 ([#11282](https://github.com/promptfoo/promptfoo/issues/11282)) ([3e8220f](https://github.com/promptfoo/promptfoo/commit/3e8220f727b39e0871f9a8733c2b652b9d762aac))
* **提供者：** 标准化缺失的 Ollama 工具参数 ([#11005](https://github.com/promptfoo/promptfoo/issues/11005)) ([74d8f90](https://github.com/promptfoo/promptfoo/commit/74d8f903f373c451563b6f17647475df07df68d9))
* **提供商：** 规范 Vercel 完成原因 ([#11076](https://github.com/promptfoo/promptfoo/issues/11076)) ([103b24f](https://github.com/promptfoo/promptfoo/commit/103b24f0aaffc60165b8b5afb5fc0453d1f386bc))
* **提供商：** 将自定义系统提示传递给旧版 Claude Agent SDKs ([#11392](https://github.com/promptfoo/promptfoo/issues/11392)) ([9cc10fe](https://github.com/promptfoo/promptfoo/commit/9cc10fe91100ccc0a5cb2cb340f159bc6d026c90))
* **提供者：** 保留 Foundry 响应状态和使用情况 ([#11081](https://github.com/promptfoo/promptfoo/issues/11081)) ([fdb5e64](https://github.com/promptfoo/promptfoo/commit/fdb5e6485d31bda36b19e6da8d0830d7af331d60))
* **提供商：** 防止 n8n webhook 重播 ([#11240](https://github.com/promptfoo/promptfoo/issues/11240)) ([06b44fb](https://github.com/promptfoo/promptfoo/commit/06b44fbf98289d439b8c194a153138cdc0b694a4))
* **提供程序：** 防止调度程序重播有状态 n8n 调用 ([#11229](https://github.com/promptfoo/promptfoo/issues/11229)) ([8b09087](https://github.com/promptfoo/promptfoo/commit/8b090876f98f07ab23392587a4b6c4b55979d106))
* **提供商：** 协调模型目录、路线和成本 ([#9792](https://github.com/promptfoo/promptfoo/issues/9792)) ([3e6ad35](https://github.com/promptfoo/promptfoo/commit/3e6ad358a7c7e2a6c1cff48655810f7406f26cda))
* **提供商：** 恢复和共享 Azure 身份验证 ([#11080](https://github.com/promptfoo/promptfoo/issues/11080)) ([f66a47c](https://github.com/promptfoo/promptfoo/commit/f66a47cfad67e3012fc6f27069f6648007afbb42))
* **提供商：**拒绝所有地理上撤回的基岩模型 ([#10825](https://github.com/promptfoo/promptfoo/issues/10825)) ([ada9cbe](https://github.com/promptfoo/promptfoo/commit/ada9cbed850d6de4f738d212805351c1af75d86f))
* **提供者：**在保留重用的同时释放资源 ([#11432](https://github.com/promptfoo/promptfoo/issues/11432)) ([bbd7795](https://github.com/promptfoo/promptfoo/commit/bbd7795e86ed2608c8facf9c0734ed270e4c4b07))
* **提供商：**修复文档审核中发现的提供商配置错误 ([#10989](https://github.com/promptfoo/promptfoo/issues/10989)) ([455b702](https://github.com/promptfoo/promptfoo/commit/455b7026f17099b3f0ce089a95abc31c54d82d3e))
* **提供商：** 报告每次调用 Claude 使用情况 ([#11266](https://github.com/promptfoo/promptfoo/issues/11266)) ([3ac0d9e](https://github.com/promptfoo/promptfoo/commit/3ac0d9e401020a2a519af5a6864ecd23a5e9481a))
* **提供商：** 尊重 ElevenLabs TTS 的缓存策略 ([#11194](https://github.com/promptfoo/promptfoo/issues/11194)) ([3b5ca95](https://github.com/promptfoo/promptfoo/commit/3b5ca95b7c41f69be8b90546f7dce90973921a8b))
* **提供程序：** 恢复文件环境覆盖优先级 ([#11364](https://github.com/promptfoo/promptfoo/issues/11364)) ([65585a7](https://github.com/promptfoo/promptfoo/commit/65585a7ef84ea4896e73b7a45da2c322b1e89fe1))
* **提供商：**范围准备的云提供商分辨率 ([#11440](https://github.com/promptfoo/promptfoo/issues/11440)) ([86e69ca](https://github.com/promptfoo/promptfoo/commit/86e69cab3d5c67586e0a509415469e7334284d53))
* **providers:** 显示选择加入 SDKs 的全局安装命令 ([#11394](https://github.com/promptfoo/promptfoo/issues/11394)) ([23da761](https://github.com/promptfoo/promptfoo/commit/23da761e20492fe2b66c31479626d92113eee9b3))
* **提供商：** 简化 Vercel 响应处理 ([#11077](https://github.com/promptfoo/promptfoo/issues/11077)) ([67cdd30](https://github.com/promptfoo/promptfoo/commit/67cdd30f10dcbe1ed86a30c596d277f79ea08204))
* **提供商：** 停止使用 OPENAI_MAX_TOKENS 限制 GPT-6 聊天 ([#11393](https://github.com/promptfoo/promptfoo/issues/11393)) ([a799bbc](https://github.com/promptfoo/promptfoo/commit/a799bbcc702d26523bc7dc78ee5bae34bc69b766))
* **提供商：** 将 Bedrock GPT-6 Sol 和 Luna 视为推理模型 ([#11040](https://github.com/promptfoo/promptfoo/issues/11040)) ([e576652](https://github.com/promptfoo/promptfoo/commit/e57665279d131834e611e8e901441b0cd675990e))
* **提供者：** 将 null Ollama 工具参数视为空 ([#11023](https://github.com/promptfoo/promptfoo/issues/11023)) ([ccf5d68](https://github.com/promptfoo/promptfoo/commit/ccf5d6803534a528dbf85573d6bb2a2e5c573c24))
* **提供商：** 验证 OpenAI Agents 令牌计数 ([#11019](https://github.com/promptfoo/promptfoo/issues/11019)) ([a1cb8af](https://github.com/promptfoo/promptfoo/commit/a1cb8af548e45a3961116d95d3c422df8a6fa05e))
* **提供商：** 对部分 Azure 服务主体配置发出警告 ([#11003](https://github.com/promptfoo/promptfoo/issues/11003)) ([90df930](https://github.com/promptfoo/promptfoo/commit/90df93056d6447007a5c81517f180ffaaf71764a))
* **redteam:** 在迭代、渐强和迭代中尊重显式的 redteamProvider:tree ([#11004](https://github.com/promptfoo/promptfoo/issues/11004)) ([4edf6b8](https://github.com/promptfoo/promptfoo/commit/4edf6b84b8814b4185be1c1ad8ca0031db63bfea))
* **redteam:** 保留零采样值 ([#11238](https://github.com/promptfoo/promptfoo/issues/11238)) ([eace58c](https://github.com/promptfoo/promptfoo/commit/eace58cf207d04b8a0fd8183e1241262b86d3a63))
* **redteam:** 刷新 LangChain 示例依赖项和代币报告 ([#11140](https://github.com/promptfoo/promptfoo/issues/11140)) ([0933e02](https://github.com/promptfoo/promptfoo/commit/0933e025f6cbed215c3d20691fa31b59ad91014e))
* **redteam:** 拒绝无效的 VLSU 并发 ([#11313](https://github.com/promptfoo/promptfoo/issues/11313)) ([6df001e](https://github.com/promptfoo/promptfoo/commit/6df001e2653729dc8baef7ecaeea314dce329637))
* **redteam:** 报告分级机标记的回合 ([#11032](https://github.com/promptfoo/promptfoo/issues/11032)) ([30ca142](https://github.com/promptfoo/promptfoo/commit/30ca142721ac3c5bfd190149d6b49b8f86078adb))
* **redteam:** 简化 API 演示 Python 依赖项 ([#11137](https://github.com/promptfoo/promptfoo/issues/11137)) ([9991218](https://github.com/promptfoo/promptfoo/commit/999121831be3f08577f3568a7dec2c88cd9af66e))
* 消除阵列采样中的偏差 ([#11307](https://github.com/promptfoo/promptfoo/issues/11307)) ([2c628e6](https://github.com/promptfoo/promptfoo/commit/2c628e62672ed493af6728bcd97096f54a109c54))
* 删除未使用的旧媒体 sidecar 写入 ([#11178](https://github.com/promptfoo/promptfoo/issues/11178)) ([d3653fd](https://github.com/promptfoo/promptfoo/commit/d3653fd56036f9f0e66ecd96da485356d1a25e41))
* **存储：** 将旧媒体索引保持为只读 ([#11226](https://github.com/promptfoo/promptfoo/issues/11226)) ([b698a4a](https://github.com/promptfoo/promptfoo/commit/b698a4a07eb304df7b3e36c1afb33d9b68846de9))
* **存储：** 重试 Windows blob 发布争用 ([#11341](https://github.com/promptfoo/promptfoo/issues/11341)) ([1c6f570](https://github.com/promptfoo/promptfoo/commit/1c6f570abfc301e496d286588a3b241292f7bbb8))
* **顶点：** 保留零克劳德采样参数 ([#11243](https://github.com/promptfoo/promptfoo/issues/11243)) ([588e089](https://github.com/promptfoo/promptfoo/commit/588e08941147a41a67dbe06eca843c7d149229e8))
* **webui:** 在直方图中计算统一的自定义整数分数 ([#11309](https://github.com/promptfoo/promptfoo/issues/11309)) ([017f4c8](https://github.com/promptfoo/promptfoo/commit/017f4c85d79bb7230c17682df8a1a3d8004ce560))
* **webui:** 保持下载的评估配置可导入 ([#11387](https://github.com/promptfoo/promptfoo/issues/11387)) ([185f292](https://github.com/promptfoo/promptfoo/commit/185f292a9653decc55359ffffb9a3b895725018c))
* **webui:** 重置替换 Toast 的生命周期 ([#11197](https://github.com/promptfoo/promptfoo/issues/11197)) ([0a0c136](https://github.com/promptfoo/promptfoo/commit/0a0c136804862bf2a373cebae98f4d2245aed32a))
* **webui:** 共享安全编辑器，突出显示后备 ([#11207](https://github.com/promptfoo/promptfoo/issues/11207)) ([0910b3a](https://github.com/promptfoo/promptfoo/commit/0910b3ab4cf7ffd6ad84f4aa1c0c620715cdb3f3))
* **webui:** 在列标题中使用每列命名的指标总计 ([#11075](https://github.com/promptfoo/promptfoo/issues/11075)) ([9770bd6](https://github.com/promptfoo/promptfoo/commit/9770bd6e533c8cbf41e6cdaca2f38b96266a4475))


### 性能改进

* **cli:** 推迟未使用的遥测 SDK 加载 ([#11175](https://github.com/promptfoo/promptfoo/issues/11175)) ([a09dc70](https://github.com/promptfoo/promptfoo/commit/a09dc70f528554e93290d7301225debe6d03ee84))
* **config:** 渲染环境模板时合并环境覆盖一次 ([#11395](https://github.com/promptfoo/promptfoo/issues/11395)) ([498c744](https://github.com/promptfoo/promptfoo/commit/498c744b6b2930ef8e21a7dd5f10a75c1e439330))
* **部门：** 让 Langfuse SDK 选择加入 ([#11351](https://github.com/promptfoo/promptfoo/issues/11351)) ([07a1895](https://github.com/promptfoo/promptfoo/commit/07a1895174161bac4026f04c09d1b8e525403c93))
* **deps:** 使本地变形金刚选择加入 ([#11119](https://github.com/promptfoo/promptfoo/issues/11119)) ([38dc1d7](https://github.com/promptfoo/promptfoo/commit/38dc1d71a907a50b5db4801c315741885297e60d))
* **deps:** 使 Slack SDK 选择加入 ([#11349](https://github.com/promptfoo/promptfoo/issues/11349)) ([3c021c0](https://github.com/promptfoo/promptfoo/commit/3c021c0f6fe590a4cd4c00e519a8ac6646b8e25b))
* **deps:** 用本机子进程替换 Execa ([#11352](https://github.com/promptfoo/promptfoo/issues/11352)) ([9c42ce5](https://github.com/promptfoo/promptfoo/commit/9c42ce53734dcf034972f35fbd9b832a94210612))
* **提供商：** 使浏览器 SDK 显式安装 ([#11163](https://github.com/promptfoo/promptfoo/issues/11163)) ([91e2abb](https://github.com/promptfoo/promptfoo/commit/91e2abb282c253533483596fdecc7eda080916fe))
* **提供商：** 显式安装 OpenAI Agent ([#11177](https://github.com/promptfoo/promptfoo/issues/11177)) ([8120699](https://github.com/promptfoo/promptfoo/commit/8120699b9cf00c2679eed1096819b944873ddd88))
* **提供商：** 让 WatsonX SDK 选择加入 ([#11359](https://github.com/promptfoo/promptfoo/issues/11359)) ([8e6b3fa](https://github.com/promptfoo/promptfoo/commit/8e6b3fa79d882ed5c83ccdb8656d3bd0648dbd9d))


### 杂务

* **提供商：**删除托管的 ChatKit 提供商 ([#11434](https://github.com/promptfoo/promptfoo/issues/11434)) ([35bd151](https://github.com/promptfoo/promptfoo/commit/35bd1517de7d727efcbb599098a0018183264b55))


### 代码重构

* **提供商：** 选择加入 Codex Security SDK ([#11325](https://github.com/promptfoo/promptfoo/issues/11325)) ([b495445](https://github.com/promptfoo/promptfoo/commit/b49544587754dff7d7e1b14a163ffbe9abf0192f))

---

> 📦 仓库：[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) · 🏷️ 版本：`0.124.0` · 📅 发布：2026-10-06 · [查看英文原版 Release](https://github.com/promptfoo/promptfoo/releases/tag/0.124.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
