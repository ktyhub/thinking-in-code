---
title: "ruflo v3.72.2"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.72.2"
version: "v3.72.2"
published: "2026-11-06"
type: "patch"
lang: "zh"
---

# ruflo v3.72.2

## 安全依赖修复

- **`@ruvector/attention` 2.2.3。**
  - `claude-flow` 3.72.1 声明了 `@ruvector/attention ^0.1.3`，而 `ruvector` 0.3.12 也依赖于 `^0.1.3`。两者都解析为 0.1.32，它缺少上游修复（RuVector #1365）：输入长度验证，并在 NAPI 边界捕获 Rust 恐慌，这样它们就不会中止 Node.js。
  - CLI、`claude-flow` 和 `ruflo` 中的 3.72.2 移至 `ruvector ^0.3.13`，这取决于 `attention ^2.2.3`。 `claude-flow`也直接声明`attention ^2.2.3`。
  - ruflo 发出的每个关注电话（Flash、MoE、Hyperbolic、AdamW、InfoNCE、Curriculum、`compute`）均在 0.1.32 和 2.2.3 上进行检查。结果匹配。
- **`@ruvector/sona` 0.1.11。** `@claude-flow/neural` 3.0.3（独立发布）引脚 `@ruvector/sona` 0.1.11，高于 0.1.5。在 0.1.5 上：
  - `applyMicroLora` 的错误长度输入在 Rust 中出现恐慌并中止节点（退出 134）；
  - `findPatterns` 训练后返回 0 个模式。

  在 0.1.11 上，错误的输入会引发可捕获的错误，并且学习会返回模式。

## 修复

- **`neural benchmark`：注意力基准现在运行。**它从未有过：
  - CommonJS 包的 `import()` 将其类放在 `default` 上；
  - 它称为 `computeRaw()`，没有发布版本，而不是 `compute()`。
- **插件 (#4842)，通过市场发货：**
  - `ruflo-ruvector` 0.4.0、`ruflo-browser` 0.3.8、`ruflo-console` 0.49.12 和 `ruflo-agentdb` 0.4.12 移至 ruvector 0.3.12。
  - 浏览器记录食谱使用了 ruvector 版本不接受的 `trajectory-*` 标志。它们是固定的。
  - CLI 的浏览器会话 npx 后备引脚 `ruvector@0.3.12`。

- **`claude-flow` 现在将 `@ruvector/attention` 列为常规依赖项。** 在 npm 10 / Node 20 上，`@ruvector/ruvllm-gpu-loop`（需要节点 >=22）作为可选安装失败，然后 npm 删除 ruvllm、ruvector 以及仅通过可选边缘到达的每个包。打补丁的注意现在总是安装的。

## 验证

注册表中的新 `npm install ruflo@3.72.2` 可以解决：

- `@claude-flow/cli` 3.72.2 和 `@claude-flow/neural` 3.0.3
- `ruvector` 0.3.13
- 每份副本为 `@ruvector/attention` 2.3.0，不含 0.1.x
- `@ruvector/graph-node` 2.1.2 和 `@ruvector/sona` 0.1.11

**已知，此处未修复：** zod GHSA-mrhx-c7xc-m3w5 需要 zod 4，这是一个重大迁移。 glob 和 minimatch 有中等建议。在 Node 20 上，由于 GPU 循环引擎底层的原因，ruvector 支持的功能缺失。

## 套餐

`@claude-flow/cli`、`claude-flow` 和 `ruflo` 3.72.2 位于 `latest` 上，`@claude-flow/neural` 3.0.3 也是如此。 `alpha` 和 `v3alpha` 保持不变 (ADR-513)。

---

> 📦 仓库：[ruvnet/ruflo](https://github.com/ruvnet/ruflo) · 🏷️ 版本：`v3.72.2` · 📅 发布：2026-11-06 · [查看英文原版 Release](https://github.com/ruvnet/ruflo/releases/tag/v3.72.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
