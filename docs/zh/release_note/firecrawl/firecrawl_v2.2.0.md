---
title: "firecrawl v2.2.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.2.0"
version: "v2.2.0"
published: "2025-09-12"
type: "minor"
lang: "zh"
---

# firecrawl v2.2.0

## v2.2.0

### 特点
- MCP 版本 3 已上线。稳定支持 HTTP 传输和 SSE 模式的云 mcp。兼容 v2 和 v1。
- Webhooks：现在我们支持签名+提取支持+事件失败
- 地图速度现在提高了 15 倍 + 支持更多网址
- 搜索可靠性改进
- 现在通过 API 密钥跟踪使用情况
- 支持其他地点（CA、CZ、IL、IN、IT、PL 和 PT）
- 队列状态端点
- 为 v2 scrape API 添加了 `maxPages` 参数，用于 pdf 解析

### 改进
- **API：**  
  - 新的 `/team/queue-status` 端点。  
  - 添加了 `nuq` 功能。  
  - 添加了 `VIASOCKET` 集成。  
  - 具有扩展数据的历史信用/代币使用端点。
- **学生计划**：支持更多大学+学生通过我们的学生计划获得免费学分
- **地图**：速度提高 15 倍，并将限制增加到 100k
- **抓取 API：** 为 PDF 解析器添加了 `maxPages` 参数。
- **Python SDK：**  
  - 将 `get_queue_status` 添加到 aio + 搜索结果中文档的标准化。
  - **SDKs：**添加了下一个光标分页和集成参数支持。
- **基础设施：** 添加了静态 IP 代理池 + 代理位置支持。
- **Webhooks：**实现了签名，重构了发送，添加了抓取错误事件。
- **性能：**优化地图，将 Rust 原生转换为单个 NAPI 库。
- **CI/CD：** 改进了 CI，添加了预提交挂钩、跨平台工具。


### 🐛 修复
- 更正了并发限制缩放。
- 修复了搜索结果链接/描述以及空结果的重试机制。
- 重新签名过期的屏幕截图 URL。
- 从 PDF 标题中修剪空字符 + 固定编码。
- 修复了站点地图解析并添加了 `.gz` 站点地图支持。
- 修复了 js-sdk `zod-to-json-schema` 导入。
- 修复了 webhook 数据格式回归。
- 改进了帐户对象中的信用处理。

### 🛠️ 家务及其他
- 删除了未使用的依赖项，更新了 CONTRIBUTING.md。
- 添加了调试日志记录，在 CI 构建期间忽略了脚本。
- 各种依赖项碰撞和构建改进。

**🔗 完整 Changelog:** [v2.1.0...v2.2.0](https://github.com/firecrawl/firecrawl/compare/v2.1.0...v2.2.0)


## 发生了什么变化
* feat(sdks): @rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2067 中的下一个光标分页
* 壮举：通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2047 中将 maxPages 参数添加到 v2 scrape API 中的 PDF 解析器
* 修复（并发限制）：规模！通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/2071
* feat(api)：通过@mogery在https://github.com/firecrawl/firecrawl/pull/2063中添加/team/queue-status端点
* 构建（deps）：https://github.com/firecrawl/firecrawl/pull/1998 中的 @dependabot[bot] 将操作/结帐从 3 次增加到 5 次
* 构建（deps）：https://github.com/firecrawl/firecrawl/pull/2028 中 @dependabot[bot] 将操作/设置-python 从 4 提升到 5
* build(deps)：https://github.com/firecrawl/firecrawl/pull/1996 中的 @dependabot[bot] 将 docker/login-action 从 1 提升到 3
* build(deps)：https://github.com/firecrawl/firecrawl/pull/1995 中的 @dependabot[bot] 将 docker/build-push-action 从 5 提升到 6
* 构建（deps）：https://github.com/firecrawl/firecrawl/pull/1997 中的 @dependabot[bot] 将操作/设置节点从 3 修改为 4
* 壮举：历史信用/代币使用端点 + 现有使用端点中的更多数据，作者：https://github.com/firecrawl/firecrawl/pull/2077 中的@mogery
* 修复(api/tsconfig): 在 https://github.com/firecrawl/firecrawl/pull/2078 中删除 @mogery 的 baseUrl
* 修复（搜索）：在 https://github.com/firecrawl/firecrawl/pull/2076 中正确获取 @mogery 的链接和描述
* 修复（api/crawler/sitemap）：https://github.com/firecrawl/firecrawl/pull/2079 中 @mogery 碰撞站点地图限制
* 修复（api/scrapeURL/index）：在https://github.com/firecrawl/firecrawl/pull/2080中由@mogery重新签名过期的屏幕截图URL
*修复（python-sdk）：在aio中添加了缺少的get_queue_status，并添加到https://github.com/firecrawl/firecrawl/pull/2081中的@rafaelsideguide的t…
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2082 中修复 Windows 上的 go-html-to-md (ENG-3398)
* 修复（js-sdk）：zod-to-json-schema 由 @rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2083 中导入
* 将 https://github.com/firecrawl/firecrawl/pull/2084 中 @amplitudesxd 的自定义地址验证函数替换为 ipaddr.js (ENG-3404)
* 修复（api/native/pdf-parser）：从https://github.com/firecrawl/firecrawl/pull/2086中@mogery的pdf标题中删除空字符
* 修复 https://github.com/firecrawl/firecrawl/pull/2085 中 @amplitudesxd 的站点地图解析 (ENG-3361)
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2087 中实现 webhook 签名 (ENG-3018)
* 格式化 api 并通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2088 中添加预提交挂钩 (ENG-3408)
* 通过 @amplitudesxd 修复 https://github.com/firecrawl/firecrawl/pull/2089 中的预提交钩子
* 在 https://github.com/firecrawl/firecrawl/pull/2090 中 @amplitudesxd 构建 CI 期间忽略脚本
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2091 中向爬虫添加更多调试日志记录
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2092 中添加代理位置支持以抓取和映射端点 (ENG-3361)
* @mogery 在 https://github.com/firecrawl/firecrawl/pull/2095 中进行的事件后更改
* feat(python-sdk)：通过 @rafaelsideguide 在 https://github.com/firecrawl/firecrawl/pull/2098 中规范搜索结果中的文档
* Feat(sdks)：https://github.com/firecrawl/firecrawl/pull/2096 中 @rafaelsideguide 的集成参数
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2094 中重构 webhook 发送 (ENG-3426)
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2106 中修复 webhook 数据格式回归
* 由 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2097 中更新 v2 异步搜索（SearchResponse → SearchData）的类型注释
* 针对抓取/批量抓取错误 (ENG-3463) 触发 webhook 事件，作者为 https://github.com/firecrawl/firecrawl/pull/2107 中的 @amplitudesxd
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2103 中添加静态 IP 代理池 (ENG-3420)
* 使用 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2105 中使用 NAPI (ENG-3397) 将所有 Rust 本机转换为单个库
* 通过https://github.com/firecrawl/firecrawl/pull/2102中的@amplitudesxd过滤掉无效的索引记录（ENG-3396）
*壮举（sdk）：@rafaelsideguide在https://github.com/firecrawl/firecrawl/pull/2108中添加了代理选项
*壮举（api）：https://github.com/firecrawl/firecrawl/pull/1984中@mogery的nuq
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2110 中使线束跨平台兼容 (ENG-3477)
* 通过 @devin-ai-integration[bot] 在 https://github.com/firecrawl/firecrawl/pull/2119 中更新自托管实例的错误消息
* 修改/extract在https://github.com/firecrawl/firecrawl/pull/2109中@micahstairs无法从URL获取内容时的错误消息
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2120 中修复帐户对象 (ENG-3495) 中的优雅信用处理
* 修复（scrapeURL/f-e/scrape）：https://github.com/firecrawl/firecrawl/pull/2123 中 @mogery 的错误失败模式
* feat(ci)：@mogery 在 https://github.com/firecrawl/firecrawl/pull/2124 中进行了改造
* 修复（api/native/pdf）：通过 @mogery 在 https://github.com/firecrawl/firecrawl/pull/2125 中获取正确编码的标题
* 杂务：删除未使用的依赖项 + @mogery 在 https://github.com/firecrawl/firecrawl/pull/2128 中进行的各种 CI 修复
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2131 中执行线束内部观察 (ENG-3514)
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2132 中添加 gzip 站点地图支持 (ENG-3520)
* 通过 https://github.com/firecrawl/firecrawl/pull/2134 中的 @amplitudesxd 从 `include` 条目中删除 .xml.gz
*修复（api）：重新架构爬行启动由@mogery在https://github.com/firecrawl/firecrawl/pull/2133中
* 由 @nickscamara 在 https://github.com/firecrawl/firecrawl/pull/2141 中更新 CONTRIBUTING.md
* 由 @nickscamara 在 https://github.com/firecrawl/firecrawl/pull/2142 中更新 CONTRIBUTING.md
*（修复/搜索）通过 @nickscamara 在 https://github.com/firecrawl/firecrawl/pull/2140 中实现空结果的重试机制
* 通过 @amplitudesxd 在 https://github.com/firecrawl/firecrawl/pull/2138 中优化地图 (ENG-3526)
*壮举（api）：通过@ftonato在https://github.com/firecrawl/firecrawl/pull/2143中添加VIASOCKET集成


**完整 Changelog**：https://github.com/firecrawl/firecrawl/compare/v2.1.0...v2.2.0

---

> 📦 仓库：[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · 🏷️ 版本：`v2.2.0` · 📅 发布：2025-09-12 · [查看英文原版 Release](https://github.com/firecrawl/firecrawl/releases/tag/v2.2.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
