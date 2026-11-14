---
title: "TradingAgents v0.5.2"
project: "TradingAgents"
repo: "TauricResearch/TradingAgents"
tag: "v0.5.2"
version: "v0.5.2"
published: "2026-09-29"
type: "patch"
lang: "zh"
---

# TradingAgents v0.5.2

并行分析，无人值守的 CLI 运行，记录产生它们的报告，
过去的运行仅提供了当日已知的信息。

## 添加

- **并行分析师。** 选定的分析师同时运行，因此分析师阶段的时间大约与最慢的分析师相同； CLI 显示每个分析师的进度和完成时间，并且当所有报告都进入时辩论开始。（#1255，#433）
- **无人值守的 CLI 运行。** 标志回答每次运行的问题，`TRADINGAGENTS_*` 变量其余部分，因此计划的作业或脚本不询问任何内容：`tradingagents --ticker NVDA --date 2026-09-26 --analysts market,news --save --no-show`。如果没有终端，缺少答案会在运行开始之前停止运行并指定要设置的内容。 （＃1127，＃1133）
- **报告记录了生成它们的原因。** 每个报告都会打开，其中包含分析日期、版本、提供商、模型、分析师、回合和数据供应商；状态日志将它们保留为 `run_settings`。 （＃752，＃1197）
- **Docker 数据文件夹。** `TRADINGAGENTS_DATA_DIR` 将结果、报告和内存日志保存在主机文件夹中。 （#865）
- **分析师工具调用的上限。** 在 `max_tool_rounds` 轮（默认 20，`TRADINGAGENTS_MAX_TOOL_ROUNDS`）之后，分析师根据其现有信息撰写报告。 (#1420)
- `tradingagents backtest` 显示每个单元格的启动和 `--run-id` 的继续； `--analysts` 接受 `sentiment`。
- 台湾、韩国、新加坡和欧洲主要交易所的基准。 (#1392)
- Python 3.14 支持； Docker 映像运行 Python 3.13。

## 型号

- `deepseek-flash` 被视为思维模型，因此结构化输出有效。 (#1388)

## 从 0.5.1 升级

- 需要Python、3.11或更高版本；熊猫3已安装。
- 最低版本：yfinance 1.7.0、langchain-core 1.6.5、langchain-openai 1.6.6、langchain-anthropic 1.7.4、langchain-google-genai 4.4.0、langgraph 1.2.12、langgraph-checkpoint-sqlite 3.1.1、langchain-aws 1.7.9 （`bedrock` 额外）。
- 报表默认为 SEC EDGAR，然后为 Yahoo (`fundamental_data = "sec_edgar,yfinance"`)。
- 过去日期的运行不会得到雅虎或 Alpha Vantage 的声明或内幕交易，这些声明或内幕交易没有提交日期，只有公司当前的名称，如此标记。
- 内存日志是`tradingagents.memory`封装（原为`tradingagents.decision_log`）；沉降和反射从 `tradingagents.graph` 移到那里，并且 `Reflector` 不再从 `tradingagents.graph` 导出。
——删除了`process_signal`；评级是`propagate()`的第二个值或`final_state["final_rating"]`。
- 评级只能从其 `Rating:` 标签上读取；没有的自由文本决策是 `REVIEW`。
- 数据层函数采用`as_of_date=`（原为`curr_date=`）； `build_instrument_context`和`resolve_instrument_context`采用`trade_date=`。
- `VendorRateLimitError` 是 `VendorUnavailableError`。
- 数据工具使仪器脱离运行状态；工具调用不再携带 `symbol` 或 `ticker`。
- 状态日志：`trader_investment_plan`（原为 `trader_investment_decision`）、删除 `judge_decision`、添加 `final_rating` 和 `run_settings`。
- 0.5.1 中的检查点或在不同设置下保存的检查点不会恢复。

## 已修复

- 数据工具为运行的工具服务，即使模型传递了另一个符号。
- 失败的供应商请求将报告为不可用，而不是缺失或除名符号；一个供应商的“无数据”不再代表另一个供应商失败的链条。 (#1386)
- 评级是投资组合经理自己的，而不是其论文引用的评级（#1383）；它的行在其他输出语言中保留了英文标签（#1435）。
- 回测单元运行两次（#1415），结算将决策与其同一日期的基准进行比较。
- 没有价格的交易品种快照不再结束运行。
- 并发运行不再删除内存日志条目。
- 仅提供年初至今提交的 SEC EDGAR 季度数据，并标明其跨度。
- 雅虎股息收益率和债务股本比以百分比形式显示。 (#1414)
- FRED 更改行为其跨越的日期命名。 (#1397)
- `stream_run` 将图表自己的配置提供给其工具。
- 测试套件脱离网络且不存在于用户的文件中，并以任何顺序通过；使用 `-m integration` 运行集成测试。 (#1395)

## 贡献者

[@1Wizzy](https://github.com/1Wizzy)、[@Bi ChengWang](https://github.com/BichengWang)、[@Chaoqi31](https://github.com/Chaoqi31)、[@davidalmeida90](https://github.com/davidalmeida90)、[@djconnexion77](https://github.com/djconnexion77)、[@fuzing](https://github.com/fuzing)、 [@hailampy123](https://github.com/hailampy123)、[@hesam-shams](https://github.com/hesam-shams)、[@HEYALT](https://github.com/HEYALT)、[@Jackzigen](https://github.com/Jackzigen)、[@kagura-agent](https://github.com/kagura-agent)、[@loulanyue](https://github.com/loulanyue)、 [@mannubaveja007](https://github.com/mannubaveja007)、[@olivergpt](https://github.com/olivergpt)、[@rita112025-cpu](https://github.com/rita112025-cpu)、[@shuyan-code](https://github.com/shuyan-code)、[@SingTheCode](https://github.com/SingTheCode)、[@sjq597](https://github.com/sjq597)、 [@xiaodu55](https://github.com/xiaodu55)、[@Youholdme](https://github.com/Youholdme)。

---

> 📦 仓库：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) · 🏷️ 版本：`v0.5.2` · 📅 发布：2026-09-29 · [查看英文原版 Release](https://github.com/TauricResearch/TradingAgents/releases/tag/v0.5.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
