---
title: "opik 2.2.138"
project: "opik"
repo: "comet-ml/opik"
tag: "2.2.138"
version: "2.2.138"
published: "2026-11-02"
type: "patch"
lang: "zh"
---

# opik 2.2.138

## 发生了什么变化
* [issue-9080] [SDK] 修复：将 run_simulation 跟踪记录到 https://github.com/comet-ml/opik/pull/9081 中 @quetion667 给定的项目名称
* [OPIK-9041] [SDK] 修复：在 @miguelgrc 在 https://github.com/comet-ml/opik/pull/9302 中重播时保持名为 start_time / end_time / last_updated_at 的用户字段不变
* [NA] [DOCS] 修复：将队列环境变量与 config.yml 对齐，并通过 https://github.com/comet-ml/opik/pull/8164 中的 @simpleqt 更正 pytest 插件拼写错误
* [issue-8132] [BE] [FE] [SDK] 修复：支持 https://github.com/comet-ml/opik/pull/9001 中@karthiksenv 的跨度成本细分
* [issue-8396] [SDK] 修复：报告重新评分无法由 https://github.com/comet-ml/opik/pull/8404 中的 @feiiiiiii5 评分的任务跨度指标
* [issue-9249] [SDK] 修复：@feiiiiiii5 在 https://github.com/comet-ml/opik/pull/9250 中将零刷新超时视为过期预算
* [NA] [BE] 修复：在新项目中通过多个提示运行的数据集不再因 https://github.com/comet-ml/opik/pull/9161 中 @aadereiko 的“项目已存在”而失败
* [OPIK-9054] [BE] 修复：在 https://github.com/comet-ml/opik/pull/9307 中 @thiagohora 创建数据集的第一个版本时重试死锁
* [NA] [FE] 修复：通过 @AndreiCautisanu 在 https://github.com/comet-ml/opik/pull/9349 中将六个传递 dep 提升到其 CVE 修复版本

## 新贡献者
* @quetion667 在 https://github.com/comet-ml/opik/pull/9081 中做出了第一个贡献
* @karthiksenv 在 https://github.com/comet-ml/opik/pull/9001 中做出了第一个贡献

**完整 Changelog**：https://github.com/comet-ml/opik/compare/2.2.137...2.2.138

---

> 📦 仓库：[comet-ml/opik](https://github.com/comet-ml/opik) · 🏷️ 版本：`2.2.138` · 📅 发布：2026-11-02 · [查看英文原版 Release](https://github.com/comet-ml/opik/releases/tag/2.2.138)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
