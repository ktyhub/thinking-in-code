---
title: "MinerU mineru-4.0.10-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.10-released"
version: "mineru-4.0.10-released"
published: "2026-09-29"
type: "release"
lang: "en"
summary: "WebUI：非安全上下文（如 HTTP 或非 localhost 访问）下 crypto.randomUUID 不可用时提供 UUID 回退实现，避免预览等功能失效 / WebUI: fall back to an alternative UUID implementation when crypto.randomUUID is unavailable in insecure contexts (e.g."
---

# MinerU mineru-4.0.10-released

## 更新内容 / What's Changed

**修复 / Fixes**
- WebUI：非安全上下文（如 HTTP 或非 localhost 访问）下 `crypto.randomUUID` 不可用时提供 UUID 回退实现，避免预览等功能失效 / WebUI: fall back to an alternative UUID implementation when `crypto.randomUUID` is unavailable in insecure contexts (e.g. HTTP or non-localhost)

**依赖 / Dependencies**
- docvortex 最低版本提升至 0.5.4 / Require docvortex>=0.5.4

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.0.9-released...mineru-4.0.10-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.0.10-released` · 2026-09-29 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.10-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
