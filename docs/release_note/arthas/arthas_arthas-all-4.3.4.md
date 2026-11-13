---
title: "arthas arthas-all-4.3.4"
project: "arthas"
repo: "alibaba/arthas"
tag: "arthas-all-4.3.4"
published: "2026-08-13"
type: "release"
lang: "en"
---

# arthas arthas-all-4.3.4

## 变更概览

- feat: 支持从 Kubernetes 临时调试容器跨 mount namespace attach 目标 JVM，自动处理 attach socket、Arthas Home 复制与清理，并在目标服务启动失败时给出明确诊断，见 #3247
- feat: 为跨 mount namespace attach 成功事件增加结构化日志，便于确认 attach 模式和目标服务监听信息，见 #3259

## 对比

- https://github.com/alibaba/arthas/compare/arthas-all-4.3.3...arthas-all-4.3.4

---

> **Source** [alibaba/arthas](https://github.com/alibaba/arthas) · `arthas-all-4.3.4` · 2026-08-13 · [upstream release](https://github.com/alibaba/arthas/releases/tag/arthas-all-4.3.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
