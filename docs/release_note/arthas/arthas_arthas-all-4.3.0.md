---
title: "arthas arthas-all-4.3.0"
project: "arthas"
repo: "alibaba/arthas"
tag: "arthas-all-4.3.0"
published: "2026-06-15"
type: "release"
lang: "en"
---

# arthas arthas-all-4.3.0

## 变更概览

- feat: 新增 `line` 命令，支持在指定源码行插入探针，观察方法参数、局部变量、表达式结果和当前调用栈，见 #3210
- feat: 为 agent/AI 场景增加 quiet terminal mode，减少批处理、WebSocket 和 MCP 执行时的交互噪音，见 #3213
- feat: 新增 Arthas MCP version tool，支持通过 MCP 工具查询当前 Arthas 版本，见 #3211
- fix: 修复 advice listener snapshot 注册逻辑，避免增强监听器快照不一致，见 #3209
- fix: 修复 `classloader` 展示中多行 classloader 名称的转义问题，避免终端表格输出错位，见 #3208
- docs: 更新 Spring Boot Starter 支持版本说明

## 对比

- https://github.com/alibaba/arthas/compare/arthas-all-4.2.2...arthas-all-4.3.0

---

> **Source** [alibaba/arthas](https://github.com/alibaba/arthas) · `arthas-all-4.3.0` · 2026-06-15 · [upstream release](https://github.com/alibaba/arthas/releases/tag/arthas-all-4.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
