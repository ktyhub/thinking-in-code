---
title: "context7 @upstash/context7-mcp@4.7.0"
project: "context7"
repo: "upstash/context7"
tag: "@upstash/context7-mcp@4.7.0"
version: "@upstash/context7-mcp@4.7.0"
published: "2026-11-12"
type: "release"
lang: "zh"
---

# context7 @upstash/context7-mcp@4.7.0

### 小改动

- d451493：向 `get-upgrade-guide` 研究预览工具添加 `page` 参数：现在有一份长指南分页，每页都有详细信息。第 1 页从迁移所需的所有内容开始（摘要、开始之前、代码修改、重大更改、弃用），当页面长度超过一页时，将在下一页继续；行为、配置和 API 更改如下。指南只有在完成后才会提供，因此它的页面总是可以组合在一起；在此之前，该工具会说它正在准备以及何时再次调用，或者它无法准备。

### 补丁变更

- f2daacb：`get-upgrade-guide` 不再告诉代理永远不要重试无法准备的指南：代理现在使用 `query-docs`，并且仅在给出答案后再次调用。遥测将不可用的指南记录为 `unavailable`，将最后一页记录为 `invalid`，而不是 `not_found`；两者都不会作为错误显示给代理。

---

> 📦 仓库：[upstash/context7](https://github.com/upstash/context7) · 🏷️ 版本：`@upstash/context7-mcp@4.7.0` · 📅 发布：2026-11-12 · [查看英文原版 Release](https://github.com/upstash/context7/releases/tag/%40upstash/context7-mcp%404.7.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
