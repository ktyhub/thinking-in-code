---
title: "ruflo v3.74.1"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.74.1"
version: "v3.74.1"
published: "2026-11-09"
type: "patch"
lang: "zh"
---

# ruflo v3.74.1

> **使用 3.74.1，而不是 3.74.0。** `@claude-flow/cli@3.74.0` tarball 附带过时的 `.claude/helpers` 文件（3.63.4 内容），而 `ruflo@3.74.0` 取决于该确切版本。 3.74.1 从 main 发送助手。如果助手与提交不同，发布脚本现在将拒绝发布 (#4900)。

## @metaharness/darwin 内置（ADR-526，#4898）

- **`@metaharness/darwin` 现在是 `@claude-flow/cli` 的常规依赖**。以前，它是可选的。 ADR-526 仅针对达尔文修订了 ADR-150 规则 2。
- **进程内调用：** `metaharness_bench --op verify` 和所有四个 `metaharness_gepa` 操作（基因组、验证、渲染、分析）现在在 MCP 服务器内的缓存 darwin 模块上运行。之前，每次调用都会生成一个脚本，而 `bench` 会为 darwin CLI 生成第二个进程。如果无法加载 darwin，工具将退回到脚本。
- **ruflo-metaharness 0.5.0：** `bench.mjs` 验证直接导入 darwin，并且在工具运行时从不安装任何内容。

测量，节点 22，20 次运行的中值：

|运营|子流程|处理中，第一次调用 |进程中，稍后调用 |
|---|---|---|---|
| gepa 验证 | 21.4 女士 | 2.9 女士 | 0.03 女士 |
| gepa 渲染 | 21.9 女士 | 0.3 女士 | 0.02 女士 |
|台架验证 | 59.7 女士 | 40.0 女士 | 0.05 女士 |

第一个电话支付一次性达尔文进口费用。收益来自不再产生进程，而不是来自更快的达尔文代码。

## 也在这个版本中

- **安全性 (#4895)：** `@claude-flow/security` 3.0.7 将输入验证迁移到 zod ^4.6.7 (GHSA-mrhx-c7xc-m3w5)。 `cli-core` 3.7.6 接受自定义代理类型的 zod 4 的 `invalid_value` 错误。
- **PageRank (#4899)：** `@claude-flow/memory` 3.2.6 和 `@claude-flow/plugins` 3.0.3 使用新的 PageRank 实现进行内存图和 GNN 排名。
- **发布安全性（#4900）：** `prepare-publish.mjs` 在签名之前和结束时将 `.claude/helpers` 与 HEAD 进行比较。

---

> 📦 仓库：[ruvnet/ruflo](https://github.com/ruvnet/ruflo) · 🏷️ 版本：`v3.74.1` · 📅 发布：2026-11-09 · [查看英文原版 Release](https://github.com/ruvnet/ruflo/releases/tag/v3.74.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
