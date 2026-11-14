---
title: "TradingAgents v0.4.0"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.4.0"
version: "v0.4.0"
published: "2026-08-31"
type: "minor"
lang: "zh"
---

# TradingAgents v0.4.0

## 总结

跨数据和内存层的前瞻和时间点修复、更清晰的决策信号、工作 CLI 检查点恢复以及 GPT-5.6 / GLM-5.3 模型。

## 时间点/前瞻完整性

- **FRED 宏** 请求现在将数据年份固定到当前日期，因此回溯测试不再看到后来的修订 (#1275)。
- **社交情绪**（StockTwits、Reddit）通过新闻重复使用的一个共享 UTC 窗口规则被修剪到分析窗口，而不是显示今天的聊天内容 (#1220)。
- **决策日志内存**记录每个结果何时已知，并且仅注入在交易日期之前解决的经验教训（#1251）；在其持有窗口完全交易之前，决策不再得到解决（#1169）。
- **最新的 OHLCV 柱**在收盘价为 NaN 时不再默默下跌，并且日期已标准化 DST 且非美国市场安全 (#1201)。

## 更诚实的决策信号

- 不可解析的投资组合经理评级显示**审查**哨兵，而不是可交易的持有（#1170）。
- 辩论开场白不再**捏造**对手的论点（#1176）。
- **交易者** 现在收到技术市场报告，因此入场/止损水平锚定真实价格结构 (#1167)。

## 执行稳健性

- `--checkpoint` **实际上在 CLI 路径上恢复**，并且恢复不再重复消息 (#1249)。
- 可配置的 **输出令牌上限** (`TRADINGAGENTS_MAX_TOKENS`) 限制了发出无限推理的模型 (#1204)。
- 通过 OpenRouter (`deepseek/<id>`) 路由的 DeepSeek 现在重用本机 DeepSeek 功能 (#1199)。

## 型号

- 添加了**GPT-5.6**系列（`gpt-5.6` / `gpt-5.6-terra` / `gpt-5.6-luna`）和**GLM-5.3**（`glm-5.3`、`glm-5.3-flash`）；默认值现在为 `gpt-5.6`（深）/ `gpt-5.6-luna`（快）。

请参阅 [CHANGELOG.md](https://github.com/TauricResearch/TradingAgents/blob/main/CHANGELOG.md) 了解完整列表，包括贡献者致谢。

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.4.0` · 📅 发布：2026-08-31 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.4.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
