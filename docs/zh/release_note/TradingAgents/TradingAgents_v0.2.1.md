---
title: "TradingAgents v0.2.1"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.2.1"
version: "v0.2.1"
published: "2026-03-15"
type: "patch"
lang: "zh"
---

# TradingAgents v0.2.1

## 总结

TradingAgents v0.2.1 带来了扩大的模型覆盖范围、改进的稳健性和安全强化。

### 模型覆盖范围
- OpenAI GPT-5.4 和 GPT-5.4 Pro 支持 1M 令牌上下文
- Anthropic Claude Opus 4.6 和 Sonnet 4.6 支持
- Google Gemini 3.1 Pro 和 3.1 Flash Lite 支持
- CLI 中的直观订购简化了型号选择

### 稳健性
- 弹性股票数据解析，自动处理格式错误的 CSV 和 NaN 值
- 强大的指标工具，可以优雅地处理来自法学硕士的逗号分隔输入
- 完整的辩论状态初始化，防止边缘情况配置中的 KeyError
- 可配置的辩论轮次现在可以正确传递到 ConditionalLogic
- 跨平台 UTF-8 文件编码，兼容 Windows

### 安全
- 修复了依赖漏洞（CVE-2026-22218）

### 维护
- 对 93 个开放 PR 进行分类，关闭已解决和过时的提交
- 清理了已弃用的模型条目
- 修复了 `pip install` 包元数据

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.2.1` · 📅 发布：2026-03-15 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.2.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
