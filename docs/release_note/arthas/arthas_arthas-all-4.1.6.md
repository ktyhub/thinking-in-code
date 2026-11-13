---
title: "arthas arthas-all-4.1.6"
project: "arthas"
repo: "alibaba/arthas"
tag: "arthas-all-4.1.6"
published: "2026-03-05"
type: "release"
lang: "en"
---

# arthas arthas-all-4.1.6

## 变更概览
- feat: Add object-size-limit GlobalOptions for ObjectView ([#3147](https://github.com/alibaba/arthas/pull/3147))
- feat(http api): `retransfrom` 命令增加增强的 id 返回 ([#3143](https://github.com/alibaba/arthas/pull/3143))
- fix(mcp): `watch`/`tt` 支持 `-M/--sizeLimit` ([#3144](https://github.com/alibaba/arthas/pull/3144))
- feat: profiler 输出支持 Markdown 报告生成
- feat: 正则表达式编译缓存功能，提升相关场景性能 ([#3131](https://github.com/alibaba/arthas/pull/3131))
- fix: 修复并发输出串扰问题 ([#3133](https://github.com/alibaba/arthas/pull/3133))

## 依赖升级
- upgrade bytekit to 0.1.6, asm to 9.9.1
- upgrade netty to 4.1.130.Final

## 其他改动
- add `.github/workflows/sync-to-gitee.yaml` ([#3137](https://github.com/alibaba/arthas/pull/3137))

## 对比
- https://github.com/alibaba/arthas/compare/arthas-all-4.1.5...arthas-all-4.1.6

---

> **Source** [alibaba/arthas](https://github.com/alibaba/arthas) · `arthas-all-4.1.6` · 2026-03-05 · [upstream release](https://github.com/alibaba/arthas/releases/tag/arthas-all-4.1.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
