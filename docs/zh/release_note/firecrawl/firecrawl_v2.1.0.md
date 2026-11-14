---
title: "firecrawl v2.1.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.1.0"
version: "v2.1.0"
published: "2025-08-29"
type: "minor"
lang: "zh"
---

# firecrawl v2.1.0

#Firecrawl v2.1.0 来了！

## ✨ 新功能
- **搜索类别**：使用 `categories` 参数按特定类别过滤搜索结果：
    - `github`：在 GitHub 存储库、代码、问题和文档中搜索
    - `research`：搜索学术和研究网站（arXiv、Nature、IEEE、PubMed 等）
    - 更多即将推出
- **图像提取：** 添加了对 v2 抓取端点的图像提取支持。  
- **数据属性 Scraping：** 现在支持提取 `data-*` 属性。  
- **基于哈希的路由：** 爬网端点现在处理基于哈希的路由。  
- **改进了 Google Drive Scraping：** 添加了从 Google Drive 抓取 TXT、PDF 和表格的功能。  
- **PDF 增强功能：** 提取 PDF 标题并在元数据中显示它们。  
- **API 增强功能：**  
  - 地图端点支持最多 **100k 结果**。  
- **Helm Chart：** 为 Firecrawl 部署添加了初始 Helm 图表。  
- **安全性：** 改进了针对 XFF 欺骗的保护。

## 🛠 修复
- 修复了 Google 搜索抓取工具中的 UTF-8 编码。  
- 恢复了预览模式下的抓取状态。  
- 修复了 Python SDK 中缺失的方法。  
- 更正了使用 `scrapeOptions.formats` 进行 v2 搜索的 JSON 响应处理。  
- 修复了 v0 刮擦中 `credits_billed` 的现场人口。  
- 改进了 v2 搜索中的文档字段覆盖。

## 👥 新贡献者
- @kelter-antunes  
- @vishkrish200  
- @ieedan  

🔗 [**完整 Changelog**](https://github.com/firecrawl/firecrawl/compare/v2.0.1...v2.1.0)


## 发生了什么变化
* 修复：https://github.com/firecrawl/firecrawl/pull/1924 中的 @kelter-antunes 在 Google 搜索抓取工具中正确处理 UTF-8 编码
* feat(api)：通过https://github.com/firecrawl/firecrawl/pull/2008中的@vishkrish200向v2抓取端点添加图像提取支持
* feat(api)：支持https://github.com/firecrawl/firecrawl/pull/2006中的@vishkrish200在抓取端点中提取数据*属性
* 壮举：为 https://github.com/firecrawl/firecrawl/pull/1262 中的 @JakobStadlhuber 的 Firecrawl 部署添加初始 Helm 图表
* feat(api/crawl)：在https://github.com/firecrawl/firecrawl/pull/2031中支持@mogery基于哈希的路由
*修复（python-sdk）：https://github.com/firecrawl/firecrawl/pull/2050中@rafaelsideguide在client中缺少方法
* feat(countryCheck)：在 https://github.com/firecrawl/firecrawl/pull/2051 中更好地防止 @mogery 的 XFF 欺骗
* 修复：在 https://github.com/firecrawl/firecrawl/pull/2052 中使用 @ieedan 的 scrapeOptions.formats 时，在 v2 /search 响应中包含 json
* 壮举（scrapeURL/rewrite）：通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/2053 中抓取 Google Drive TXT/PDF 文件和表格
* 由 @nickscamara 在 https://github.com/firecrawl/firecrawl/pull/2060 中更新 README.md
*（修复/抓取）在https://github.com/firecrawl/firecrawl/pull/2061中@nickscamara在预览模式下重新启用抓取状态
* feat(pdf-parser)：通过 https://github.com/firecrawl/firecrawl/pull/2062 中的 @mogery 获取 PDF 标题并显示在元数据中
* 修复（v2/搜索）：https://github.com/firecrawl/firecrawl/pull/2054 中的 @mogery 通过扩展运算符覆盖文档字段
* feat(api)：通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/2049 中将 api_key_id 传播到计费功能
* feat(api/map)：使用新的 RPC + 在 https://github.com/firecrawl/firecrawl/pull/2065 中通过 @mogery 将最大限制设置为 100k
* 修复（api/v0/scrape）：通过@mogery在https://github.com/firecrawl/firecrawl/pull/2066中填充credits_billed字段

## 新贡献者
* @kelter-antunes 在 https://github.com/firecrawl/firecrawl/pull/1924 中做出了第一个贡献
* @vishkrish200 在 https://github.com/firecrawl/firecrawl/pull/2008 中做出了第一个贡献
* @ieedan 在 https://github.com/firecrawl/firecrawl/pull/2052 中做出了第一个贡献

**完整 Changelog**：https://github.com/firecrawl/firecrawl/compare/v2.0.1...v2.1.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v2.1.0` · 📅 发布：2025-08-29 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v2.1.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
