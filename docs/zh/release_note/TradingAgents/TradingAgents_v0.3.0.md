---
title: "TradingAgents v0.3.0"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.3.0"
version: "v0.3.0"
published: "2026-06-22"
type: "minor"
lang: "zh"
---

# TradingAgents v0.3.0

## 总结

TradingAgents v0.3.0 是一个稳定性和可扩展性版本：经过验证的数据访问合约、扩展的提供商和数据供应商注册表、当前一代模型目录和 CI 门。

## 已验证的数据访问合同

符号标准化现在在每个供应商路径上运行（身份、退货、CLI、新闻）。配置的供应商列表是精确的解决链（不会静默回退到未选择的供应商），并且通过类型化的 `VendorError` 分类法显示故障。新闻窗口是前瞻性安全的，陈旧的 OHLCV 会被拒绝而不是报告为当前的，并且 yfinance 提取包括请求的结束日期。经过验证的市场数据快照支持价格和指标声明，而确定性的股票到公司决议可以阻止错误的公司幻觉。

## 提供商注册表

OpenAI 兼容的提供程序在单一规范后注册，通用 `openai_compatible` 端点涵盖 vLLM、LM Studio 和中继。添加了 NVIDIA NIM、Kimi (Moonshot)、Groq 和 Mistral，以及原生 Amazon Bedrock client。

## 数据供应商

FRED 宏观指标和 Polymarket 事件概率向新闻和宏观分析师展示。可选供应商降级为无数据哨兵，而不是中止运行。

## 型号目录

更新了跨提供商的当前一代产品线；退役的 `gpt-4.1`、Claude Sonnet 4.5 和 Gemini 2.5 系列。推理深度可通过 `TRADINGAGENTS_OPENAI_REASONING_EFFORT`、`TRADINGAGENTS_GOOGLE_THINKING_LEVEL` 和 `TRADINGAGENTS_ANTHROPIC_EFFORT` 进行配置，每个都连接到接受它的模型。

## 配置和CLI

明确的 `TRADINGAGENTS_*` 值或 CLI 标志现在胜过辩论和风险回合计数、`--checkpoint / --no-checkpoint` 和 Docker 提供商配置文件的交互式默认值；无效的布尔环境值会导致失败。分析师提示以当前日期开头，因此工具调用日期范围锚定到运行日期。

## 工具

GitHub Actions 在 Python 3.10-3.13、严格的 `ruff` 以及导入包和 CLI 的全新安装烟雾中运行 pytest 套件。对于无头和 API 运行，`TradingAgentsGraph.save_reports()` 编写与 CLI 生成的相同的报告树。

请参阅 [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md) 了解完整列表，包括贡献者致谢。

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.3.0` · 📅 发布：2026-06-22 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.3.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
