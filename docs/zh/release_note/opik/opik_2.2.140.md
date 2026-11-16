---
title: "opik 2.2.140"
project: "opik"
repo: "comet-ml/opik"
tag: "2.2.140"
version: "2.2.140"
published: "2026-11-04"
type: "patch"
lang: "zh"
---

# opik 2.2.140

## 发生了什么变化
* [NA] [BE] 修复：将 ClickHouse 查询日志注释保留为 https://github.com/comet-ml/opik/pull/9375 中 @miguelgrc 的纯文本
* [OPIK-9052] [BE] 修复：将大写型号名称与 @aadereiko 在 https://github.com/comet-ml/opik/pull/9309 中的小写型号名称进行定价
* [NA] [SDK] [DOCS] 通过 https://github.com/comet-ml/opik/pull/9338 中的 @CometActions 自动更新 OpenAPI 规范和 Fern 代码
* 杂务（deps）：通过 https://github.com/comet-ml/opik/pull/9343 中的 @comet-ci-bot[bot] 更新 e2e npm
* 杂务（deps）：通过 https://github.com/comet-ml/opik/pull/9279 中的 @comet-ci-bot[bot] 将依赖项 litellm 更新为 v1.100.4 [安全]
* 杂务（deps）：通过 https://github.com/comet-ml/opik/pull/9383 中的 @comet-ci-bot[bot] 更新基础镜像（非主要）
* 杂务（deps）：通过 @comet-ci-bot[bot] 在 https://github.com/comet-ml/opik/pull/9380 中更新 Python SDK 冷却上限
* [NA] [GHA] PR linter：跳过 https://github.com/comet-ml/opik/pull/9401 中 @GuySaar8 的两个新 Renovate 机器人
* Chore(deps)：通过 https://github.com/comet-ml/opik/pull/9415 中的 @comet-renovate-security[bot] 将依赖项 uuid 更新为 v13 [SECURITY]
* 杂务（deps）：通过 https://github.com/comet-ml/opik/pull/9422 中的 @comet-renovate-security[bot] 将依赖项 @sentry/react 更新到 v11
* 杂务（deps）：通过 https://github.com/comet-ml/opik/pull/9424 中的 @comet-renovate-security[bot] 将依赖项 @types/diff 更新为 v8
* 杂务（deps）：通过 https://github.com/comet-ml/opik/pull/9425 中的 @comet-renovate-security[bot] 将依赖项 @types/uuid 更新为 v11
* [OPIK-9029] [BE] 修复：允许 @thiagohora 在 https://github.com/comet-ml/opik/pull/9311 中的 SpanDAO.getById 中的多个项目中使用一个跨度 ID
* [OPIK-9053] [BE] 修复：保留一个 OTel 批次，其顶级跨度属于 @thiagohora 在 https://github.com/comet-ml/opik/pull/9312 中的现有跟踪
* [OPIK-8706] [BE] 重构：在 https://github.com/comet-ml/opik/pull/9025 中删除 @thiagohora 的跨度周监听器和 spanWeeksWriteEnabled
* [issue-9326] [SDK] 修复：在 https://github.com/comet-ml/opik/pull/9327 中@feiiiiiii5 的导出 CLI 中报告失败的跟踪导出
* 杂务（deps）：通过 @comet-ci-bot[bot] 在 https://github.com/comet-ml/opik/pull/9389 中更新 github 操作（主要）（主要）
* 杂务（deps）：通过 @comet-renovate[bot] 在 https://github.com/comet-ml/opik/pull/9410 中更新 github 操作（非主要）
* [NA] [SDK] 修复：规范 https://github.com/comet-ml/opik/pull/9107 中 @uttamdeb 的评估线程过滤器中漂移的法官判决和转义引号
* [NA] [INFRA] 杂务：将 litellm 限制在重大版本以下，并将 ClickHouse 保留在 https://github.com/comet-ml/opik/pull/9429 中 @AndreiCautisanu 的 LTS 上
* [NA] [HELM] 修复：更新图表图像标签并重新生成 https://github.com/comet-ml/opik/pull/9397 中 @AndreiCautisanu 的图表自述文件
* [NA] [BE][FE] 琐事：在 https://github.com/comet-ml/opik/pull/9417 中同步 @CometActions 的提供者模型定义
* [NA] [FE] 修复：将 yaml 更新为 2.8.3 并保留 @AndreiCautisanu 在 https://github.com/comet-ml/opik/pull/9382 中的 YAML 输出中引用的“<<”
* [OPIK-8927] [FE] 壮举：https://github.com/comet-ml/opik/pull/9198 中@aadereiko 在目录设置面板上的 Gemini 和 Vertex AI

## 新贡献者
* @comet-renovate-security[bot] 在 https://github.com/comet-ml/opik/pull/9415 中做出了第一个贡献
* @comet-renovate[bot] 在 https://github.com/comet-ml/opik/pull/9410 中做出了第一个贡献

**完整 Changelog**：https://github.com/comet-ml/opik/compare/2.2.139...2.2.140

---

> 📦 仓库：[comet-ml/opik](https://github.com/comet-ml/opik) · 🏷️ 版本：`2.2.140` · 📅 发布：2026-11-04 · [查看英文原版 Release](https://github.com/comet-ml/opik/releases/tag/2.2.140)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
