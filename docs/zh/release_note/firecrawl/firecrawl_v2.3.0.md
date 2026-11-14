---
title: "firecrawl v2.3.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.3.0"
version: "v2.3.0"
published: "2025-09-19"
type: "minor"
lang: "zh"
---

# firecrawl v2.3.0

## v2.3.0

### 新功能
- **YouTube 支持：** 您现在可以获得 YouTube 成绩单
- **企业自动充值：** 添加了对自动充值的企业支持  
- **odt和.rtf**：现在支持odt和rtf文件解析
- **Docx 解析**：docx 解析速度提高 50 倍
- **K8s 部署：** 添加了 NuQ Worker 部署示例  
- **自托管**：为我们的自托管用户提供了大量改进

### 改进和修复
- **稳定性：**修复了超时竞争条件、无限抓取循环和位置查询错误  
- **工具：** 将 ts-prune 替换为 knip，将 pnpm 更新为minimumReleaseAge  
- **文档：** 添加了 Rust 到 CONTRIBUTING 并修复了拼写错误  
- **安全性：**修复了 `pkgvuln` 问题

## 发生了什么变化
* 通过 @micahstairs 在 https://github.com/firecrawl/firecrawl/pull/2150 中更新阻止列表
* 文档：修复 https://github.com/firecrawl/firecrawl/pull/2149 中 @jarrensj 的 CONTRIBUTING.md 中的拼写错误和标点符号
* 通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2144 中修复 ENG-3372 的超时错误消息竞争条件
* 通过 @micahstairs 在 https://github.com/firecrawl/firecrawl/pull/2156 中添加例外到阻止列表
* 修复：@mogery 在 https://github.com/firecrawl/firecrawl/pull/2158 中的 pkgvuln
* 将 https://github.com/firecrawl/firecrawl/pull/2148 中 @amplitudesxd 的 ts prune 替换为 knip (ENG-3540)
* 壮举（自动充值）：@mogery in https://github.com/firecrawl/firecrawl/pull/2127 的 enterprise
* feat(scrapeURL/index)：@mogery 在 https://github.com/firecrawl/firecrawl/pull/2160 中的索引指标
* 更新 pnpm 并通过 https://github.com/firecrawl/firecrawl/pull/2162 中的@amplitudesxd 添加minimumReleaseAge (ENG-3560)
* feat(api/scrapeURL)：在https://github.com/firecrawl/firecrawl/pull/2157中添加@mogery对YouTube观看页面的特殊支持
* 修复(scrapeURL/index): https://github.com/firecrawl/firecrawl/pull/2164 中 @mogery 的位置数组查询错误
* 修复 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2147 中 scraping 禁止网页 (ENG-3339) 时的无限循环
* 将 Rust 添加到 https://github.com/firecrawl/firecrawl/pull/2180 中 @oalsing 的贡献中
*壮举（scrapeURL/summary）：在https://github.com/firecrawl/firecrawl/pull/2174中使用@mogery的gpt-5-mini
* @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2159 中自定义 Rust 文档解析器 (ENG-3489)
* 壮举：通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2163 中将 NuQ 工作线程部署添加到 Kubernetes 示例
* feat(api)：通过https://github.com/firecrawl/firecrawl/pull/2186中的@mogery将阻止列表移动到数据库

## 新贡献者
* @jarrensj 在 https://github.com/firecrawl/firecrawl/pull/2149 中做出了第一个贡献
* @oalsing 在 https://github.com/firecrawl/firecrawl/pull/2180 中做出了第一个贡献

**完整 Changelog**：https://github.com/firecrawl/firecrawl/compare/v2.2.0...v2.3.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v2.3.0` · 📅 发布：2025-09-19 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v2.3.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
