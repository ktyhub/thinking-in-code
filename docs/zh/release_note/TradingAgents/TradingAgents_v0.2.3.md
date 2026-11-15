---
title: "TradingAgents v0.2.3"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.2.3"
version: "v0.2.3"
published: "2026-03-29"
type: "patch"
lang: "zh"
---

# TradingAgents v0.2.3

## 总结

TradingAgents v0.2.3 增加了多语言输出、GPT-5.4 系列模型，并提高了回测保真度。

### 多语言支持
- CLI 中的输出语言选择（第 3 步），具有 11 种语言和自定义输入
- 以所选语言呈现的分析师报告和最终决策
- 为了推理质量，内部特工辩论仍以英语进行

### 模型覆盖范围
- GPT-5.4 Mini 和 GPT-5.4 Nano 支持
- 统一模型目录作为 CLI 和验证的单一事实来源
- 针对无法识别的模型名称的模型验证警告

### 回测保真度
- 跨所有 OHLCV、基本面和新闻端点获取日期感知数据
- 每个符号共享缓存，以实现高效的批量回测

### 提供商集成
- 所有提供商（Google、Anthropic、OpenAI）统一 `api_key` 参数
- 对 Google 和 Anthropic clients 的代理和自定义基本 URL 支持
- 优雅地处理工具调用中的无效指标名称

### 稳定性
- yfinance 新闻端点的速率限制重试覆盖范围
- CLI 步骤重新排序以改善用户流程

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.2.3` · 📅 发布：2026-03-29 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.2.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
