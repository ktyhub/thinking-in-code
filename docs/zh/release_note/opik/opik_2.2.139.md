---
title: "opik 2.2.139"
project: "opik"
repo: "comet-ml/opik"
tag: "2.2.139"
version: "2.2.139"
published: "2026-11-03"
type: "patch"
lang: "zh"
---

# opik 2.2.139

## 发生了什么变化
* [OPIK-7791] [QA] 发布 2.2.118、2.2.119、2.2.120、2.2.121、2.2.122、2.2.125、2.2.128、2.2.130、2.2.131、2.2.132、2.2.133、2.2.134 的 e2e 规格2.2.136、2.2.137 由 @comet-ci-bot[bot] 在 https://github.com/comet-ml/opik/pull/9181
* [OPIK-8651] [FE] 壮举：在 https://github.com/comet-ml/opik/pull/9329 中的 @JetoPistola 在线程侧面板的线程内搜索
* [OPIK-8748] [SDK] 修复：LLM 对 gpt-6 进行判断，Claude 4.7+/5.x 停止在 https://github.com/comet-ml/opik/pull/9154 中发送 @aadereiko 拒绝的采样参数
* [DND-2005] [INFRA] 修复：@GuySaar8 在 https://github.com/comet-ml/opik/pull/9315 中限制 ClickHouse 文件日志大小
* [DND-2027] [INFRA] 修复：https://github.com/comet-ml/opik/pull/9316 中的 @GuySaar8 将 ClickHouse 提升至 26.3.62.3 (CVE-2026-116366)
* [NA] [SDK] [CI] 壮举：在 @alexkuzmik 在 https://github.com/comet-ml/opik/pull/9273 中至少 3 天发布的版本中限制 Python SDK 的直接依赖项
* [issue-9139] [SDK] 修复：在 https://github.com/comet-ml/opik/pull/9140 中拒绝 @Jacqueline122 在陪审团共识中失败的法官评分
* [NA] [BE][FE] 杂务：同步 @CometActions 在 https://github.com/comet-ml/opik/pull/9365 中的提供者模型定义
* [NA] [BE] 通过 @CometActions 在 https://github.com/comet-ml/opik/pull/9364 中更新模型价格文件
* [OPIK-9086] [FE] 修复：已删除的 Ollie iframe 不再因 @JetoPistola 在 https://github.com/comet-ml/opik/pull/9363 中“读取 'setItem'”而使页面崩溃
* [NA] [QA] 测试(e2e)：清除 t1/t2 失败并将真正的 LLM 支出削减为 https://github.com/comet-ml/opik/pull/9372 中 @AndreiCautisanu 的每日金丝雀
* [NA] [INFRA] 修复：在前端依赖 PR 上运行 E2E 烟雾； @AndreiCautisanu 在 https://github.com/comet-ml/opik/pull/9373 中停止标签运行相互抵消
* [OPIK-4331] [BE][FE] 修复：让基岩提供者在 https://github.com/comet-ml/opik/pull/9294 中通过 @aadereiko 调用 Claude（人类消息）和 Nova（Converse）
* [issue-3493] [BE] [FE] [SDK] 壮举：通过 @anishmehta24 在 https://github.com/comet-ml/opik/pull/8724 中的评论过滤跟踪和线程
* [NA] [SDK] 修复：在 https://github.com/comet-ml/opik/pull/8721 中 @anishmehta24 的可读性分数后恢复 textstat 的语言
* [issue-8589] [SDK] 修复：按 @gjreddy 在 https://github.com/comet-ml/opik/pull/9305 中的 Equals 中的内容比较字典、列表和集合
* [issue-9089] [SDK] 修复：在 https://github.com/comet-ml/opik/pull/9092 中通过@pcbeingused333 在 LiteLLM 跟踪中保留流式工具调用
* [OPIK-8722] [FE] 壮举：在 https://github.com/comet-ml/opik/pull/9332 中为@JetoPistola 的 Pro 试用版过期的组织显示横幅
* [OPIK-9084] [INFRA] 琐事：在 https://github.com/comet-ml/opik/pull/9352 中的 @JetoPistola 的 test-env 触发器中使用无树稀疏结帐
* [OPIK-9083] [INFRA] 琐事：使用无 blob 部分克隆，其中工作流程比较或列出 @JetoPistola 在 https://github.com/comet-ml/opik/pull/9351 中的文件
* [OPIK-6676] [CI] 壮举：在 https://github.com/comet-ml/opik/pull/9324 中添加 @JetoPistola 的 betterleaks 秘密扫描预提交挂钩
* [NA] [FE] 修复：在 alpine-slim 上构建前端的 nginx 阶段以及 @AndreiCautisanu 在 https://github.com/comet-ml/opik/pull/9377 中的 otel 模块
* [NA] [DOCS] 修复：https://github.com/comet-ml/opik/pull/9306 中的 @miguelgrc 准确描述 Python 评估器执行策略
* [OPIK-9082] [INFRA] 琐事：在 https://github.com/comet-ml/opik/pull/9350 中的 @JetoPistola 不读取 git 历史记录的工作流程中使用浅层签出

## 新贡献者
* @Jacqueline122 在 https://github.com/comet-ml/opik/pull/9140 中做出了第一个贡献
* @gjreddy 在 https://github.com/comet-ml/opik/pull/9305 中做出了第一个贡献

**完整 Changelog**：https://github.com/comet-ml/opik/compare/2.2.138...2.2.139

---

> 📦 仓库：[comet-ml/opik](https://github.com/comet-ml/opik) · 🏷️ 版本：`2.2.139` · 📅 发布：2026-11-03 · [查看英文原版 Release](https://github.com/comet-ml/opik/releases/tag/2.2.139)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
