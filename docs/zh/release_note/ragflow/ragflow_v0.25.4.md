---
title: "ragflow v0.25.4"
project: "ragflow"
repo: "infiniflow/ragflow"
tag: "v0.25.4"
version: "v0.25.4"
published: "2026-05-14"
type: "patch"
lang: "zh"
---

# ragflow v0.25.4

## 总结

### 新功能

- 添加通用的、配置驱动的 RESTful API 数据源连接器。

### 改进

- 具有过滤和排序功能的代理标签管理。
- 小部件定制和持久性。

### 模型支持

- 将 gpt-5.4-mini 和 gpt-5.4-nano 添加到 OpenAI 模型列表中

### 错误修复

修复了数据集文档下载路径。

## 发生了什么变化
* https://github.com/infiniflow/ragflow/pull/13545 中@ahmadintisar 的功能/通用 api 连接器
* 修复：使用 pdfplumber 的上下文管理器来防止 @gambletan 在 https://github.com/infiniflow/ragflow/pull/13512 中的资源泄漏
* 在 https://github.com/infiniflow/ragflow/pull/14603 中添加 @47NoahThompson 的小部件定制和持久化
* 文档：v0.25.3 release notes 草案的编辑更新。作者：https://github.com/infiniflow/ragflow/pull/14903 中的 @writinwaters
* 壮举：通过 @plind-junior 在 https://github.com/infiniflow/ragflow/pull/14799 中为具有过滤和排序功能的代理添加标签管理 (#14774)
* Go：实施提供商：Voyage AI by @tmimmanuel in https://github.com/infiniflow/ragflow/pull/14811
* 修复https://github.com/infiniflow/ragflow/pull/14909中@yingfeng的文档格式
* 通过 @sirj0k3r 在 https://github.com/infiniflow/ragflow/pull/14908 中添加 gpt-5.4-mini 和 gpt-5.4-nano
* 文档：@writinwaters 在 https://github.com/infiniflow/ragflow/pull/14913 中最终确定了 v0.25.3 release note
* 修复：https://github.com/infiniflow/ragflow/pull/14910中@buua436的数据集文档下载路径
* 文档：更新 https://github.com/infiniflow/ragflow/pull/14912 中 @asiroliu 的自述文件和文档中对 v0.25.4 的版本引用
* 文档：添加了 v0.25.4 release notes 草案。作者：https://github.com/infiniflow/ragflow/pull/14914 的 @writinwaters

## 新贡献者
* @47NoahThompson 在 https://github.com/infiniflow/ragflow/pull/14603 中做出了第一个贡献
* @plind-junior 在 https://github.com/infiniflow/ragflow/pull/14799 中做出了第一个贡献
* @sirj0k3r 在 https://github.com/infiniflow/ragflow/pull/14908 中做出了第一个贡献

**完整 Changelog**：https://github.com/infiniflow/ragflow/compare/v0.25.3...v0.25.4

---

> 📦 仓库：[infiniflow/ragflow](https://github.com/infiniflow/ragflow) · 🏷️ 版本：`v0.25.4` · 📅 发布：2026-05-14 · [查看英文原版 Release](https://github.com/infiniflow/ragflow/releases/tag/v0.25.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
