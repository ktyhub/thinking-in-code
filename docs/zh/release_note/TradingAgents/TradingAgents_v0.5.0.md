---
title: "TradingAgents v0.5.0"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.5.0"
version: "v0.5.0"
published: "2026-09-18"
type: "minor"
lang: "zh"
---

# TradingAgents v0.5.0

## 总结

每条日期路径上的时间点完整性、做出决策时记录的、对股票和日期网格的回溯测试、调用者的投资组合作为运行输入以及归档的 SEC EDGAR 基本面。

## 提交的基础知识

- **SEC EDGAR** 按运行日期提供美国公司报表：已结束但尚未提交的期间不予提供，稍后重述的数字仍按首次报告的方式读取。无钥匙，通过供应商链选择加入。
- 任何一个基本面供应商都不再提供**历史运行**作为当今的公司概况（#1300）。

## 时间点和诚实的归因

- **过时的工具**从图形状态中获取运行日期，因此省略或晚于的日期无法到达供应商（#1331、#1319、#1118）。
- **内幕申报和预测市场赔率**受运行日期限制，内幕行规定交易在提交表格 4 后即公开。
- **供应商故障被报告为供应商故障**：yfinance 会提出错误，而不是以文本形式返回错误，中断不会报告为没有数据的公司，并且每个供应商都不可用的连锁店都会这样说，而不是结束运行。
- **从未观察到窗口的提要**在新闻、Reddit 和 StockTwits 中将其报告为不可用而不是缺失。

## 决策和评估

- **回溯测试**：`run_backtest` 在代码和日期网格上运行管道到其自己的决策日志中，并且 `summarize` 对已解决的单元格进行评分 (#1234)。
- **投资组合背景**：`propagate(..., portfolio=...)` 和 `--portfolio` 让交易者、风险和投资组合代理人根据实际持有量确定规模；没有一本的运行永远不会被视为一本平淡的书。
- **决定按做出的方式记录**：不可读的决定将被标记为待审查，而不是成为可交易的持有，并且反对的评级不再被视为看涨期权。
- **评分读取每个评级声称的方向**，并且结果窗口是可配置的（`holding_period_days`）。

## CLI

- `tradingagents backtest`，用 `--run-id` 继续中断的扫描（#1234）。
- 上次运行的选择将作为提示默认值返回（#1236、#920）。
- 没有可读评级的运行说明了这一点，并且实时视图不再滚动（#649，#784）。

## 型号

- 每个提供商的当前阵容：GPT-6 Astra 和 GPT-5.6 系列、Gemini 3.8 Flash、Claude Opus 5 和 Fable 5.1、Grok 4.6、DeepSeek Flash、Qwen 3.8、GLM-5.3、MiniMax M3、Kimi K3 和当前的 Mistral 快照。
- 每个提供商都接受选择器未列出的模型 ID。
- GLM 流量进入其密钥所属的平台，Ollama 结构化输出不再发送它拒绝的 tool_choice (#1062)。

请参阅 [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md) 了解完整列表，包括贡献者致谢。

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.5.0` · 📅 发布：2026-09-18 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.5.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
