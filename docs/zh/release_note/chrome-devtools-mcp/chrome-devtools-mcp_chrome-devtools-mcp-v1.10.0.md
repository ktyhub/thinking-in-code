---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.10.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.10.0"
version: "chrome-devtools-mcp-v1.10.0"
published: "2026-09-23"
type: "release"
lang: "zh"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.10.0

## [1.10.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.9.0...chrome-devtools-mcp-v1.10.0) (2026-09-23)


### 🎉 特点

* 添加 css 格式化类 ([#2707](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2707)) ([f0b5fa4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f0b5fa4bde0afa30c53996ec0f987af6b6ab28ac))
* 添加 get_css_style 工具 ([#2612](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2612)) ([4454ae0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4454ae0a8a3d6072ea52d8931a9562907e8dbaae))
* **性能：** 用于大型录音的分块跟踪缓冲区解析器 ([#2721](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2721)) ([23b9a48](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/23b9a480010d803fc8962bb5d11017b1e2ad76b2))
* 为 get_css_styles 工具设置默认 pageSize 和 pageIdx ([#2799](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2799)) ([dc9d14d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/dc9d14dc6f08c289376655365adffedae8d04054))
* 支持配置文件 ([#2661](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2661)) ([314a5fa](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/314a5fabfec56f3067c8bd754a945e9e76bea4fb))
* **遥测：** 保留上次工具调用的日期。 ([#2705](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2705)) ([c54a493](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c54a49383a47e10c445ab9997fd0032fc7acf177))
* **遥测：** 记录 client 名称的清理版本 ([#2757](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2757)) ([55fbc57](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/55fbc576f7fe32b40f97bc7161cfe655c9bb99eb))
* **遥测：** 报告 Hermes client 使用情况。 ([#2703](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2703)) ([fb47e6c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fb47e6ca31d06874fa00daafee7a4823793dcb6b))
* 更新 css 格式化程序类以添加 AtRule、PositionTryRule、PropertyRule、FunctionRule ([#2717](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2717)) ([d4a0620](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d4a0620ce620a3ddc0c0f45703198536367b4f9b))
* 更新 css 格式化程序类以添加继承规则 ([#2715](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2715)) ([3d7e7bb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3d7e7bb4382971cedc313eb52d5d508284be7388))
* 更新 css 格式化程序类以添加匹配规则 ([#2713](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2713)) ([8c8616f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8c8616fcc4ad3f793f88ed0f358f4c7c0dd0d96e))
* 更新 css 格式化程序类以添加伪元素 ([#2716](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2716)) ([df1469a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/df1469af579163fbfee312661bcae3630fd89733))
* 更新 css 格式化程序以添加关键帧规则 ([#2718](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2718)) ([cdc365c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/cdc365ca95f53e67a724ec45d4fca7e62cff0824))


### 🛠️修复

* 每次导航时绑定 ConsoleCollector 保留 ([#2773](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2773)) ([e98a3ca](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e98a3ca40465c8f58ceb3b121ce7759811a5068a))
* **cli:** 在启动时转发显式错误选项 ([#2702](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2702)) ([d9a8cb6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d9a8cb6ec22aadf5cb964c5e97a8b047693046e2))
* **config:** 保留配置强制的原始值 ([#2747](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2747)) ([906c83b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/906c83b004320b7f8fc3ac558e96b0f9be9d2e07))
* 除非有要求，否则不要将 Puppeteer 日志记录到文件中 ([#2743](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2743)) ([4fbfbc4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4fbfbc4fd96b26e4a09712de6044dad39cc661c0))
* 解释以 root 身份运行导致的启动失败 ([#2634](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2634)) ([9d29223](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9d2922369bfa7f12723b3ffd4098ed95c5a6cb8c))
* 处理输入工具操作期间打开的 JavaScript 对话框 ([#2794](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2794)) ([266112b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/266112b988e04d9756f036bf95cde726961dc348))
* **性能：** 通过确定每次解析的跟踪引擎模型范围来防止内存泄漏 ([#2720](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2720)) ([d05cbc0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d05cbc0511c6f05396d0419bf56962fcd2498203))
* 跨同文档导航保留控制台历史记录 ([#2676](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2676)) ([aa25562](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/aa255629f29611a7ae0b7affffcd55dc0698e13b))
* 在输入工具操作中保留底层错误消息 ([#2792](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2792)) ([6e47dbb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6e47dbb560883a1a51f8e84f2542f38e80efe450))
* 在 lighthouse_audit 中设置 emulatedUserAgent 并使用 FinalDisplayedUrl ([#2795](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2795)) ([941f82a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/941f82a3ec43332a9cbe4f97e840b1eca1ddc112))
* WaitForHelper.ts 中的超时 ([#2772](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2772)) ([dc1d055](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/dc1d055e162a22dc3c63f902fa6a103f8029e28b))


### 📄 文档

* 添加 FLUJO client 配置 ([#2690](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2690)) ([65a679e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/65a679e389fbbd0722fea1cddf88fa1c1f652b15))
* 修复类别未正确配置的问题 ([#2807](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2807)) ([2250cdc](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2250cdcde4aad79d54101c80346df4190e0c2da7))
* 修复非布尔值的默认值 ([#2744](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2744)) ([342d243](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/342d2430cec6bcc4b234d119a2a76a78e52be56e))
* 更新页面路由选项名称 ([#2748](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2748)) ([8939965](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/89399657a1f2d5d486d38df9d70e5e9e3bbb980c))
* 更新 chrome-devtools 的技能以使用 get_css_styles 工具 ([#2760](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2760)) ([421011e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/421011e19fb53d8bc5fbd1de8c54136945b9fe99))


### 🏗️ 重构

* 禁用工具而不是不注册它们 ([#2636](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2636)) ([b455469](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b4554691cfffd3eed7b88d91e38e365b336cbfd0))
* 在 BrowserManager 类中提取浏览器 ([#2787](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2787)) ([3228f44](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3228f44af9164bb2da9c26477fd79dac7f23d624))
* 将 MCP SDK 迁移到 v2 ([#2408](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2408)) ([da3c406](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/da3c40609a2966ec4b8e02dcf3c6c0fe9046acc4))
* 将注释格式移至 CommentFormatter 类 ([#2719](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2719)) ([e3cded0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e3cded0f43b06a7e8f935a37223016bb93fa725a))
* 准备 SDK v2 ([#2771](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2771)) ([61780c7](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/61780c7498a447771127d1fd3b2454fc4ae4ba28))
* 简化我们的生成脚本 ([#2793](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2793)) ([5068584](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5068584894c8f508e98bb6ea87ac752e112a74c2))
* 统一调用类型并确保类型安全 ([#2659](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2659)) ([882f93e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/882f93e9a8809fe88eced35d793951fb456b7117))

---

> 📦 仓库：[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · 🏷️ 版本：`chrome-devtools-mcp-v1.10.0` · 📅 发布：2026-09-23 · [查看英文原版 Release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.10.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
