---
title: "FastGPT v4.16.1"
project: "FastGPT"
repo: "labring/FastGPT"
tag: "v4.16.1"
published: "2026-08-21"
type: "patch"
lang: "en"
summary: "启用 Agent Sandbox 时，请在 fastgpt-app 和 fastgpt-pro 中同步检查以下配置。4.16.1 使用完整的运行态镜像地址："
---

# FastGPT v4.16.1

## 📦 升级指南

### 更新 Agent Sandbox 环境变量和运行态镜像

启用 Agent Sandbox 时，请在 `fastgpt-app` 和 `fastgpt-pro` 中同步检查以下配置。4.16.1 使用完整的运行态镜像地址：

```dotenv
# 普通非 root 镜像，默认配置
AGENT_SANDBOX_OPENSANDBOX_IMAGE=registry.cn-hangzhou.aliyuncs.com/fastgpt/fastgpt-agent-sandbox:v0.3.1
```

如果沙盒需要安装 apt 依赖，必须切换为 root 镜像；如需要，可配置 apt 镜像源：

```dotenv
AGENT_SANDBOX_OPENSANDBOX_IMAGE=registry.cn-hangzhou.aliyuncs.com/fastgpt/fastgpt-agent-sandbox-root:v0.3.1
AGENT_SANDBOX_APT_MIRROR=https://mirrors.tuna.tsinghua.edu.cn/ubuntu
```

中国大陆镜像源和全球镜像源的完整镜像列表、root/non-root 镜像选择，以及自定义依赖源配置，请参考 [OpenSandbox 配置](../../config/sandbox/opensandbox)。

### 迁移工具 JSON Schema 存储格式

请严格按以下版本顺序执行迁移：

1. 在确保执行完成 4.16.0 版本的 `initHttpToolSchema` 脚本，将手动 HTTP 工具的历史数组参数转换为标准 JSON Schema。
2. 升级到 4.16.1 后，再执行本节的 `initToolJsonSchemaStorage`。

4.16.1 会检查 4.16.0 负责的 HTTP 工具应用及其历史版本；如果这些数据仍包含旧数组类型，接口会拒绝执行，避免旧数据被直接转换为字符串。迁移只处理 MCP/HTTP 工具应用及其历史版本，不处理普通工作流应用。

4.16.1 将 MCP/HTTP 工具的 JSON Schema 统一为字符串存储。可先执行 dry-run 检查变更情况：

```bash
curl -X POST 'https://你的域名/api/admin/4161/initToolJsonSchemaStorage' \
  -H 'Content-Type: application/json' \
  -H 'rootkey: 你的ROOT_KEY' \
  -d '{"dryRun":true}'
```

确认 `total.changedDocumentCount` 后执行正式迁移：

```bash
curl -X POST 'https://你的域名/api/admin/4161/initToolJsonSchemaStorage' \
  -H 'Content-Type: application/json' \
  -H 'rootkey: 你的ROOT_KEY' \
  -d '{"dryRun":false}'
```

## 🚀 新增内容

1. 第三方发布渠道，支持多模态文件、音频转录、引用（如有）
2. 支持团队安装系统插件（进程模式，存在一定安全风险，未来版本支持 serverless 隔离运行）。
3. 沙盒支持自定义 apt 源。

## ⚙️ 优化

1. S3 key 命名，取消原文件名作为 key，防止超长。
2. MCP/HTTP json schema 采用 String 类型存储，防止自定义对象与 mongo 规则冲突。

## 🐛 修复

1. 工作流全局变量配置，字段名太长溢出。
2. AgentV2 调用子工作流，工作流内流输出内容未禁用。
3. 团队邀请链接，可重复接收同一个团队邀请。
4. 使用记录，日期选择器会多一天。

## 🛠️ 代码优化

1. 补全所有 devapi 接口文档。
2. 插件系统并发初始化以及日志优化。
3. 修复插件运行中的错误会抛出为系统错误的问题。
4. 修复插件在 Node.js 版本高于 v25 时由于 --allow-net 策略未设置导致的问题。

## What's Changed
* docs: improve upgrade history metadata by @c121914yu in https://github.com/labring/FastGPT/pull/7527
* doc by @c121914yu in https://github.com/labring/FastGPT/pull/7528
* docs: add release and update timestamps by @c121914yu in https://github.com/labring/FastGPT/pull/7529
* ci: publish docs images to ghcr only by @c121914yu in https://github.com/labring/FastGPT/pull/7530
* Add commercial contact dialog by @c121914yu in https://github.com/labring/FastGPT/pull/7533
* feat: add explicit source to contact links by @c121914yu in https://github.com/labring/FastGPT/pull/7535
* fix(docs): prevent stale HTML chunk references by @c121914yu in https://github.com/labring/FastGPT/pull/7536
* feat(outlink): support rich format in outlink messages by @Nixieboluo in https://github.com/labring/FastGPT/pull/7353
* feat: sync enterprise verification without visitor id by @c121914yu in https://github.com/labring/FastGPT/pull/7539
* feat(plugin): add team plugin management and tool selector filters by @FinleyGe in https://github.com/labring/FastGPT/pull/7485
* fix(workflow): unify offline tool errors with missing tools by @FinleyGe in https://github.com/labring/FastGPT/pull/7546
* Add OpenAPI contracts for Pro admin APIs by @c121914yu in https://github.com/labring/FastGPT/pull/7540
* style(app): optimize variable edit table layout and label truncation by @DigHuang in https://github.com/labring/FastGPT/pull/7545
* docs(upgrade): refine 4.16 initUserSandbox verification guide by @DigHuang in https://github.com/labring/FastGPT/pull/7532
* fix: decouple S3 object keys from filenames by @xqvvu in https://github.com/labring/FastGPT/pull/7547
* build(storage): update SDK dependencies and test tooling by @FinleyGe in https://github.com/labring/FastGPT/pull/7549
* feat(sandbox): support configuration for apt sources by @DigHuang in https://github.com/labring/FastGPT/pull/7537
* ci: allow read collaborators to publish previews by @c121914yu in https://github.com/labring/FastGPT/pull/7551
* fix(agent): hide tool child responses from UI by @FinleyGe in https://github.com/labring/FastGPT/pull/7550
* docs(upgrade): complete 4.16.1 release notes by @c121914yu in https://github.com/labring/FastGPT/pull/7554
* feat(core/app): store tool schemas as strings by @FinleyGe in https://github.com/labring/FastGPT/pull/7497
* docs(upgrade): update 4.16.1 release notes by @c121914yu in https://github.com/labring/FastGPT/pull/7564
* refactor(app): extract AppConfigItem to unify app config row layouts by @DigHuang in https://github.com/labring/FastGPT/pull/7557
* fix(invitationLink): add unique index and exist check by @shortlight5980 in https://github.com/labring/FastGPT/pull/7563
* fix(tool-selector): hide hidden tool status labels by @FinleyGe in https://github.com/labring/FastGPT/pull/7565
* refactor: remove plugin request config from app by @c121914yu in https://github.com/labring/FastGPT/pull/7566
* fix: use VLM fallback for image caption retrieval by @c121914yu in https://github.com/labring/FastGPT/pull/7569
* docs(sandbox): update agent sandbox guides by @DigHuang in https://github.com/labring/FastGPT/pull/7567
* feat(mcp): align published server auth with API keys by @FinleyGe in https://github.com/labring/FastGPT/pull/7364


**Full Changelog**: https://github.com/labring/FastGPT/compare/v4.16.0...v4.16.1

---

> **Source** [labring/FastGPT](https://github.com/labring/FastGPT) · `v4.16.1` · 2026-08-21 · [upstream release](https://github.com/labring/FastGPT/releases/tag/v4.16.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
