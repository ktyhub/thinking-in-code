---
title: "FastGPT v4.15.7"
project: "FastGPT"
repo: "labring/FastGPT"
tag: "v4.15.7"
published: "2026-08-07"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/labring/FastGPT/compare/v4.15.6...v4.15.7"
---

# FastGPT v4.15.7

## 变更说明

1. 修复 MCP 使用 Streamable HTTP 连接失败并回退到 SSE 时，请求头可能被重复发送的问题。
2. 门户页快捷应用数量上限调整为 3 个，并兼容校验历史配置中超过上限的快捷应用。
3. 修复应用发布后，文件变量配置允许上传文件，但预签名上传接口错误判断为未开启文件上传的问题。

## What's Changed
* Fix 4.15.x by @c121914yu in https://github.com/labring/FastGPT/pull/7469


**Full Changelog**: https://github.com/labring/FastGPT/compare/v4.15.6...v4.15.7

---

> **Source** [labring/FastGPT](https://github.com/labring/FastGPT) · `v4.15.7` · 2026-08-07 · [upstream release](https://github.com/labring/FastGPT/releases/tag/v4.15.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
