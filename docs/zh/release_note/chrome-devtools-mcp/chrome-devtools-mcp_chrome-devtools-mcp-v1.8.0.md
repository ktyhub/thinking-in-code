---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.8.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.8.0"
version: "chrome-devtools-mcp-v1.8.0"
published: "2026-08-25"
type: "release"
lang: "zh"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.8.0

## [1.8.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.7.0...chrome-devtools-mcp-v1.8.0) (2026-08-25)


### 🎉 特点

* 添加额外参数到 get_heapsnapshot_edges ([#2561](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2561)) ([b58c613](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b58c613f4b05ade36bbf0d6ba44d5a525ec4d19a))
* 将可选的堆栈跟踪添加到list_console_messages ([#2505](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2505)) ([85c73a0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/85c73a0abc85a2a4e8b7705955dddcede543ebae))
* 添加 PWA 自动化工具 ([#2430](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2430)) ([0ea5c8d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0ea5c8d15b8db68a279cc0935c28672ad606e466))，关闭 [#2270](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2270)
* 添加query_heapsnapshot MCP工具 ([#2553](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2553)) ([fadbf41](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fadbf41d96db84cea12e379592bc13b005c053b4))
* 允许evaluate_script跳过稳定的DOM等待 ([#2346](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2346)) ([781e2fb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/781e2fb98c6520f6dd0deb0d6ed77a18300d438f))
* 默认情况下，页面范围的工具需要 pageId ([#1777](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/1777)) ([50a16fa](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/50a16fae69c5c28990328160f79db50af260e256))
* 报告 get_heapsnapshot_summary 中的上下文保持活动的内存 ([#2570](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2570)) ([4103808](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4103808ea50e8709bdb080b952210dfa814a1da1))
* 显示边缘的自身尺寸和保留尺寸 ([#2529](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2529)) ([2a7eb76](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2a7eb76fb01d5e22cdb55f9f0115918d6696c3db))
* 支持使用 upload_file 上传多个文件 ([#2257](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2257)) ([c8a2393](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c8a2393df63da6f62bc76dcc3dc6c288c5fd5911))
* 使用人类可读大小的范围 ([#2589](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2589)) ([61e312f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/61e312f59314907bca32dfeb63cb002601a76cea))


### 🛠️修复

* **cli:** 调整 chrome-devtools 启动默认值 ([#2597](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2597)) ([c6cff23](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c6cff23fbfb1d8c7ee7e79ee3b74f7eb52e725eb))
* **cli:** 在 CLI 上启用需要 --memoryDebugging 的工具 ([#2585](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2585)) ([1c92ba0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1c92ba091ce059533f009dafac5a92f452cfddf5))
* **clI:** 在 CLI 中单独打印错误消息而不是 JSON ([#2580](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2580)) ([fce756a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fce756ad199af2ee0ebdab08d568b14c137b8142))
* **cli:** 更新 CLI 技能 ([#2569](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2569)) ([0e108ea](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0e108ea8c636aa999f07750f49a05d4861d217b5))
* 当先前选择的页面消失时，不要附加页面 url。 ([#2588](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2588)) ([6506425](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6506425a46ead4dcb9e6831befc4501ef1a3beee))
* 不要阻止根/列表上的工具调用，client 应答速度很慢 ([#2477](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2477)) ([d93e667](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d93e66701f29bf78f82b816c91d15509cdb5388b))，关闭 [#2476](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2476)
* 不要在性能跟踪中启用失效跟踪 ([#2500](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2500)) ([f00778d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f00778d6bd4008e69b29b405a56bb1233aab45ac))，关闭 [#2499](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2499)
* 不验证远程浏览器的本地文件 ([#2573](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2573)) ([c0a7417](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c0a74175f8b98c3ccab95a1cab59fe39c2c1cd0e))
* 确保开发工具跳过调试器语句 ([#2555](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2555)) ([f8572f0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f8572f04e4da404f333530854286acc5626efe94))
* 修复格式化程序错误 ([#2552](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2552)) ([b247315](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b24731572f184b9863b0ecbfda7eb8703f3f5885))
* 等待助手的不稳定 ([#2541](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2541)) ([12f989a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/12f989a75bf6d24309d80cc59a71108e0c6c3df4))
* **输入：** 通过文本选择空值选项 ([#2501](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2501)) ([b969c45](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b969c45c657ad42dcdb7d3e11475c483a959e1b3))
* 页面 id 路由的新标志移至指标 json 的末尾 ([#2613](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2613)) ([6dba5c7](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6dba5c7d9d4dab3f8929cc27893e304efeafd611))
* 木偶操作将不再遵循符号链接 ([#2592](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2592)) ([1bac85c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1bac85c90bcb38d5a695674eb8730015e51beb04))
* 需要 .heapsnapshot （或 .heaptimeline）作为文件扩展名（[#2579](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2579)）（[b750168](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b7501682e43e80b8c8d4fbaa6b8fd6e3c205fba4)）
* 尊重 HiDPI 显示器上的屏幕截图范围 ([#2536](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2536)) ([ebf58f2](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ebf58f2f4aa8f1dfbbae38e440fde4e5fef7deef))
* 对未知的 CLI 参数发出警告 ([#2577](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2577)) ([e450369](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e45036953d8e0ae409b4052fccded8ff02e51944))


### 📄 文档

* 添加 Bob MCP client 配置 ([#2364](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2364)) ([5c16940](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5c1694080925934c74d48f7c6faa74d94ea7c7f7))
* 修复命令 ([#2546](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2546)) ([9331b63](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9331b6395fe729f074a1825a78e66dc321e2fd12))


### 🏗️ 重构

* 使 validatePath 返回已解析的 url ([#2572](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2572)) ([57adfa9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/57adfa963ca6f97e4c167593d8010c2de71db6dd))
* 将配置文件移出 bin ([#2578](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2578)) ([5d02839](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5d0283969c34f26faf9ef4c34be437d1343cd930))
* 将文件移至更能代表其用途的文件夹 ([#2564](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2564)) ([06b7a5c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/06b7a5c3209ad8e17e1f9c5841d4c9eff1c5b9ed))
* **性能：** 使用 DevTools 中的默认跟踪类别 ([#2571](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2571)) ([cb89762](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/cb897625fe176e89862b87363401a82fd00fd82d))
* 用 NodeJS 原生替换调试 ([#2562](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2562)) ([f44f3c6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f44f3c60e8557d113446170cbfced44a7e97fc9b))

---

> 📦 仓库：[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · 🏷️ 版本：`chrome-devtools-mcp-v1.8.0` · 📅 发布：2026-08-25 · [查看英文原版 Release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.8.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
