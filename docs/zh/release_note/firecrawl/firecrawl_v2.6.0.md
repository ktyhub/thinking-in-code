---
title: "firecrawl v2.6.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.6.0"
version: "v2.6.0"
published: "2025-11-14"
type: "minor"
lang: "zh"
---

# firecrawl v2.6.0

#v2.6.0

## 亮点
- **统一计费模型** - 积分和代币合并到单一系统中。 Extract 现在使用积分（15 个代币 = 1 个积分），现有代币可以在任何地方使用。
- **全面发布品牌格式** - 全面支持 Playground、MCP、JS 和 Python SDK。
- **更改跟踪** - 更快、更可靠地检测网页内容更新。
- **可靠性和速度改进** - 所有端点的速度显着加快，可靠性也得到提高。
- **即时积分购买** - 直接从仪表板购买积分包，无需等待自动充值。
- **改进 Markdown 解析** - 增强 Markdown 转换和主要内容提取准确性。
- **核心稳定性修复** - 修复了更改跟踪问题、PDF 超时并改进了错误处理。

## 发生了什么变化
* 修复（mu）：https://github.com/firecrawl/firecrawl/pull/2345 中 @tomkosm 对 v2 exp 的错误修复
* 允许 https://github.com/firecrawl/firecrawl/pull/2346 中 @amplitudesxd 与 waitFor (ENG-3481) 一起使用索引
* 修复自动充电返回，在 https://github.com/firecrawl/firecrawl/pull/2341 中添加@abimaelmartell 的顶级防护
* 修复：从 types.ts 导入 MAX_MAP_LIMIT 以解析 https://github.com/firecrawl/firecrawl/pull/2333 中 @prashu0705 的 1000 个 URL 上限
* 琐事：通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2348 中改进 llm 提取日志记录
*修复：https://github.com/firecrawl/firecrawl/pull/2349中@amplitudesxd的错误截断
* feat(go-html-to-md)：通过强大的 PRE 和 @rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2321 中增强 Markdown 转换
* 壮举（计费）：在 https://github.com/firecrawl/firecrawl/pull/2352 中合并 @mogery 的积分和代币
* 杂务：通过https://github.com/firecrawl/firecrawl/pull/2354中的@amplitudesxd更新geoip数据库
* 在 https://github.com/firecrawl/firecrawl/pull/2326 中实施@abimaelmartell 的品牌格式
* 通过 https://github.com/firecrawl/firecrawl/pull/2357 中的 @devin-ai-integration[bot] 过滤带有单独错误消息的非 HTTP(S) 协议
* 通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2360 中添加对 JS 和 Python SDKs 的品牌格式支持
* 修复：https://github.com/firecrawl/firecrawl/pull/2361 中@abimaelmartell 在元数据提取中优雅地处理无效的图标 URL
* 功能：允许在 https://github.com/firecrawl/firecrawl/pull/2367 中通过 @amplitudesxd 禁用 webhook 传递
* 壮举：通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2371 中按域模式添加引擎强制
* 恢复 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2376 中的 nuq 提交
* CI：从 https://github.com/firecrawl/firecrawl/pull/2385 中 @abimaelmartell 的服务器测试中删除 npm 审核
* ci：修复 @abimaelmartell 在 https://github.com/firecrawl/firecrawl/pull/2386 中的依赖性审核
* (fix/ctracking) 修复 https://github.com/firecrawl/firecrawl/pull/2391 中 @nickscamara 的更改跟踪问题
* 更新：添加对 `python-sdk` 递归模式的支持，并通过 @Chadha93 在 https://github.com/firecrawl/firecrawl/pull/2266 中选择模型
* 修复：https://github.com/firecrawl/firecrawl/pull/2244 中 @naaa760 在 Python SDK 中映射图像搜索字段
* 修复（api/scrape）：https://github.com/firecrawl/firecrawl/pull/2396 中 @delong3 的文档 + pdf 抓取循环

## 新贡献者
* @prashu0705 在 https://github.com/firecrawl/firecrawl/pull/2333 中做出了第一个贡献
* @naaa760 在 https://github.com/firecrawl/firecrawl/pull/2244 中做出了第一个贡献

**完整 Changelog**：https://github.com/firecrawl/firecrawl/compare/v2.5.0...v2.6.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v2.6.0` · 📅 发布：2025-11-14 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v2.6.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
