---
title: "ruflo v3.76.0"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.76.0"
version: "v3.76.0"
published: "2026-11-11"
type: "minor"
lang: "zh"
---

# ruflo v3.76.0

## @claude-flow/cli，claude-flow 和 ruflo 3.76.0

### 新（选择加入）
- **最近质心代理路由器（ADR-527，#4953）。** 设置 `CLAUDE_FLOW_ROUTER_CENTROID=1` 以通过标记示例上最近的质心将任务路由到代理。在 ADR-391 测试拆分中，它在 63.7% 的时间内选择了正确的代理，而当前默认代理为 25.7%。默认路由器不变。在成为默认设置之前，它仍然需要对新任务进行每次验证解决成本测试。

### 修复
- **神经路由器资产现在在 npm 包中提供（#4958，修复 #4954）。** 使用 `CLAUDE_FLOW_ROUTER_NEURAL=1`，npm 安装现在加载捆绑的 KRR 模型、低/中/高桶专家及其校准器以及种子行。在此之前，只有回购检查才能加载它们。
- **darwin pin 移至 `~0.14.0`（#4956，修复#4952）。** 这修复了 `clean-install` 和 `pin-drift` CI 故障。如果没有代理配置，darwin 0.14.0 的行为与 0.13.1 相同。
- **桥接代理流到稳定的 3.5.4 (#4948)。** 现在它仅列出该版本公开的工具。
- **见证人将未构建的签出报告为“未构建”（#4946、#4885）。** 真正的故障不再隐藏在该状态后面。
- **MetaHarness 基准奇偶校验（#4949、#4930）。** 摘要中的 404 不再被错误分类为降级。
- **`task_complete` 仅记入仍持有任务的工作人员 (#4964)。** 再次完成重新打开的任务不再将相同的工作计算两次。谢谢@kevin9327。
- **设置风险扫描器标记 `node`、`deno`、`bun` 和 `php` 允许规则（#4961、#4960）。** `ruflo init --upgrade` 现在会在项目预先批准这些解释器时发出警告，就像对 `python`、`ruby` 和 `perl` 所做的那样。
- **当质心路由器决定时，**`hooks route` 显示“质心”作为方法**，而不是“关键字”。

### 依赖关系
- `@claude-flow/memory` 3.3.2 和 `agentdb` ^3.10.0 (#4955)。

`alpha` 和 `v3alpha` dist 标签保留在 3.75.2 (ADR-513)。

🤖 使用 [RuFlo](https://github.com/ruvnet/ruflo) 生成

---

> 📦 仓库：[ruvnet/ruflo](https://github.com/ruvnet/ruflo) · 🏷️ 版本：`v3.76.0` · 📅 发布：2026-11-11 · [查看英文原版 Release](https://github.com/ruvnet/ruflo/releases/tag/v3.76.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
