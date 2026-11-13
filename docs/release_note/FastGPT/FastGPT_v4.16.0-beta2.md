---
title: "FastGPT v4.16.0-beta2"
project: "FastGPT"
repo: "labring/FastGPT"
tag: "v4.16.0-beta2"
published: "2026-08-14"
type: "minor"
lang: "en"
summary: "本版本开始在系统模型初始化及保存时使用严格 Schema。此前版本保存的数字字符串、字符串形式的价格梯度或缺失字段可能导致初始化校验失败。升级后请先执行 dry-run，查看需要处理的模型配置；dry-run 不会修改数据或刷新缓存："
---

# FastGPT v4.16.0-beta2

## 📦 升级指南

### 1. 清洗历史系统模型配置

本版本开始在系统模型初始化及保存时使用严格 Schema。此前版本保存的数字字符串、字符串形式的价格梯度或缺失字段可能导致初始化校验失败。升级后请先执行 dry-run，查看需要处理的模型配置；dry-run 不会修改数据或刷新缓存：

```bash
curl -X POST 'https://你的域名/api/admin/dataClean/cleanSystemModelConfigs' \
  -H 'Content-Type: application/json' \
  -H 'rootkey: 你的ROOT_KEY' \
  -d '{"dryRun":true}'
```

确认 `invalidSamples` 中没有需要人工处理的数据后，执行正式清洗：

```bash
curl -X POST 'https://你的域名/api/admin/dataClean/cleanSystemModelConfigs' \
  -H 'Content-Type: application/json' \
  -H 'rootkey: 你的ROOT_KEY' \
  -d '{"dryRun":false}'
```

清洗会将合法数字字符串转换为 number、将字符串形式的 `priceTiers` 转换为数组，并删除非法的可选数字。非法或缺失的必填数字使用系统默认值：LLM 的 `maxContext/maxResponse/quoteMaxToken` 分别为 `16000/16000/13000`，Embedding 的 `defaultToken/maxToken` 分别为 `500/3000`，价格为 `0`。`functionCall` 保持可选，Embedding 缺失的 `weight` 补为 `0`。

正式执行会统一写入数据并立即刷新系统模型缓存；即使没有记录需要更新，也会重新构建运行时缓存。接口可安全重复执行；再次 dry-run 时，`wouldUpdate` 应为 `0`。无法通过当前完整模型 Schema 的记录不会写入，详情会全部返回在 `invalidSamples` 中。

## 🚀 新增内容

1. 工作流应用的系统配置移至画布左侧工具栏中的独立配置面板，新建工作流应用时会自动打开。
2. 开场白支持独立配置多个预设问题，并可拖拽排序。

## ⚙️ 优化

1. 重构发布渠道页面，按原生渠道和第三方渠道分组展示，并显示各渠道已配置数量。
2. 工具市场批量更新支持展示部分失败项、单独重试或卸载，并完善已安装版本和更新状态的展示。
3. 门户页快捷应用数量上限调整为 3 个，并兼容已超出上限的历史配置。
4. PDF 解析器动态边缘裁剪，而不是固定边缘裁剪，避免裁剪掉真实内容。

## 🐛 修复

1. 修复旧版工作流 HTTP 工具的动态参数未正确恢复默认输入方式的问题。
2. 修复新建工作流应用时，国际化资源未预加载导致初始配置文案异常的问题。
3. 修复工作流工具参数可能被重复渲染的问题。
4. 修复应用发布后，文件变量无法上传文件的问题。
5. 修复共享工作流工具的文件参数无法上传文件的问题。
6. 修复 S3 对象键和文件名包含空格、`%`、`#`、`?`、斜杠等特殊字符时，可能导致上传、解析、预览或下载异常的问题。
7. 修复系统默认模型未进行敏感信息过滤的问题，避免系统初始化接口响应返回模型 API Key、请求地址及内部配置。

## 🛠️ 代码优化

1. 审计日志归档，不再删除，改成转存到 S3 冷归档。
2. 增加对 admin 配置的数据校验和清洗。
3. 取消 account/\* 页面 SSR。

## What's Changed
* feat(tool-marketplace): support partial plugin update retries by @FinleyGe in https://github.com/labring/FastGPT/pull/7444
* fix: allow shared workflow tool file uploads by @xqvvu in https://github.com/labring/FastGPT/pull/7472
* Doc by @c121914yu in https://github.com/labring/FastGPT/pull/7471
* feat(outlink): new configuration page by @Nixieboluo in https://github.com/labring/FastGPT/pull/7456
* docs: add 4.16.0-beta2 publish channel notes by @c121914yu in https://github.com/labring/FastGPT/pull/7476
* fix(docs): include SWC ESM helpers in standalone output by @c121914yu in https://github.com/labring/FastGPT/pull/7481
* ci(docs): publish deployment images to GHCR by @c121914yu in https://github.com/labring/FastGPT/pull/7482
* chore(helm): move charts and release workflow to fastgpt-pro by @DigHuang in https://github.com/labring/FastGPT/pull/7463
* fix: localize invalid coupon errors by @c121914yu in https://github.com/labring/FastGPT/pull/7483
* docs(upgrade): add v4.14.30 upgrade guide by @FinleyGe in https://github.com/labring/FastGPT/pull/7484
* sanitize s3 key by @xqvvu in https://github.com/labring/FastGPT/pull/7468
* fix(agent): use app owner tmbId for sandbox skill authentication by @DigHuang in https://github.com/labring/FastGPT/pull/7486
* feat(app): move system settings configuration by @DigHuang in https://github.com/labring/FastGPT/pull/7454
* docs: update v4.16.0-beta2 release notes by @c121914yu in https://github.com/labring/FastGPT/pull/7489
* feat: deduplicate CRM lifecycle reports by @c121914yu in https://github.com/labring/FastGPT/pull/7490
* fix(global): add .js extension to ajv ESM subpath imports by @ctlaltlaltc in https://github.com/labring/FastGPT/pull/7492
* fix(app): make dataset search configurable in agent v2 by @YYH211 in https://github.com/labring/FastGPT/pull/7494
* Improve API documentation sidebar styling by @c121914yu in https://github.com/labring/FastGPT/pull/7493
* fix: align Zod contracts with runtime data by @c121914yu in https://github.com/labring/FastGPT/pull/7499
* fix(app): show image recognition for vision-only models by @YYH211 in https://github.com/labring/FastGPT/pull/7501
* fix(workflow): node debug file upload uses draft config and session chatId by @xqvvu in https://github.com/labring/FastGPT/pull/7504
* fix(chat): standardize preview layout and content width by @DigHuang in https://github.com/labring/FastGPT/pull/7502
* fix(workflow): project external variables as inputs by @FinleyGe in https://github.com/labring/FastGPT/pull/7506
* fix: polish app modals and configuration handling by @c121914yu in https://github.com/labring/FastGPT/pull/7505
* fix: fallback tool input descriptions by @c121914yu in https://github.com/labring/FastGPT/pull/7508
* fix(workflow): preserve explicit external variable input modes by @c121914yu in https://github.com/labring/FastGPT/pull/7510
* fix(docs): handle missing static assets correctly by @c121914yu in https://github.com/labring/FastGPT/pull/7511
* fix(sandbox): use Cilium isolation for Kubernetes OpenSandbox by @DigHuang in https://github.com/labring/FastGPT/pull/7514
* refactor(sandbox): OpenSandbox stream handling and replace with filesystem API by @DigHuang in https://github.com/labring/FastGPT/pull/7500
* fix: do not treat reasoning-only tool_calls finish as empty response by @LHMQ878 in https://github.com/labring/FastGPT/pull/7517
* fix(s3): allow deleting legacy object keys rejected by validation by @xqvvu in https://github.com/labring/FastGPT/pull/7509
* docs: fix broken star history chart in READMEs by @Dessalines39394 in https://github.com/labring/FastGPT/pull/7518
* refactor: migrate account pages to client i18n by @c121914yu in https://github.com/labring/FastGPT/pull/7515
* fix: sanitize default models in system init data by @c121914yu in https://github.com/labring/FastGPT/pull/7519
* perf: publish multi-arch images directly to aliyun by @c121914yu in https://github.com/labring/FastGPT/pull/7521

## New Contributors
* @LHMQ878 made their first contribution in https://github.com/labring/FastGPT/pull/7517
* @Dessalines39394 made their first contribution in https://github.com/labring/FastGPT/pull/7518

**Full Changelog**: https://github.com/labring/FastGPT/compare/v4.16.0-beta1...v4.16.0-beta2

---

> **Source** [labring/FastGPT](https://github.com/labring/FastGPT) · `v4.16.0-beta2` · 2026-08-14 · [upstream release](https://github.com/labring/FastGPT/releases/tag/v4.16.0-beta2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
