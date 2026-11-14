---
title: "Scrapling v0.4.13"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.13"
version: "v0.4.13"
published: "2026-08-09"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.13

**新的更新带来了 feed 蜘蛛和更智能的 MCP 服务器🎉**

> [!注意]
> - **[在 X 上关注我们，了解日常提示和技巧](https://x.com/Scrapling_dev)**
> - 这很可能是 v0.5 重大更新之前的最后一次更新

## 🚀 新事物和生活质量的变化

- **新的 feed 蜘蛛模板**。 `XMLFeedSpider` 迭代任何 XML 提要（RSS、Atom、产品提要等）的节点，`CSVFeedSpider` 迭代作为字典的 CSV 行。两者都会自动解压缩 gzip 后的提要。 （查看[文档](https://scrapling.readthedocs.io/en/latest/spiders/generic-templates.html)）
  ```python
  from scrapling.spiders import XMLFeedSpider

  class RSSSpider(XMLFeedSpider):
      name = "rss"
      start_urls = ["https://example.com/feed.xml"]

      async def parse_node(self, response, node):
          yield {"title": node.findtext("title"), "link": node.findtext("link")}

  result = RSSSpider().start()
  ```
- **将 MCP 服务器升级到 MCP SDK v2 并使其更加智能**。服务器现在提供指令，教您的人工智能代理如何有效地使用这些工具；每个工具都声明注释，因此像 Claude Code 这样的 clients 可以自动批准只读注释；工具描述更精简，节省代币；服务器将其版本和徽标通告给 MCP clients。 （查看[文档](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html)）
- **添加了直接映射到 `scrapling mcp` 的 `scrapling-mcp` 命令**，因此使用 MCP clients 和需要单个命令的注册表注册 Scrapling 现在只需一行即可。
- **未固定的剧作家/补丁权和浏览器版本**。生成的浏览器用户代理现在始终与您安装的 Playwright/Patchright 驱动器的 Chromium 版本完全匹配，因此 Scrapling 不再固定其版本，您可以自由升级它们。更新后运行 `scrapling install --force` 以刷新浏览器。

## 🐛 错误修复

- **修复了当指纹数据包落后于浏览器版本时导入 Scrapling 崩溃并出现 `browserforge` ValueError**。 （修复 [#394](https://github.com/D4Vinci/Scrapling/issues/394)、[#396](https://github.com/D4Vinci/Scrapling/issues/396) 和 [#400](https://github.com/D4Vinci/Scrapling/issues/400)）
- **修复了 MCP 批量浏览器工具错误调整其页面池的大小**，这导致 `bulk_fetch` 在处理超过 50 个 URL 的批次时失败，并且 `bulk_stealthy_fetch` 通过单个选项卡获取所有 URL，作者为 [#393](https://github.com/D4Vinci/Scrapling/pull/393) 中的 @Yigtwxx。

## 项目

- **新的[人工智能贡献政策](https://github.com/D4Vinci/Scrapling/blob/main/AI_POLICY.md)**：欢迎人工智能辅助贡献，但必须在 PR 或问题中披露；看起来像是未公开的人工智能输出的提交内容会被标记并关闭。

_🙏 特别感谢社区的持续测试和反馈_

---

# 向我们的白金赞助商致谢

<div style="text-align: center;">
  <a href="https://go.nodemaven.com/scraplingjuly" target="_blank" title="IP 分数最高的代理">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.jpg”宽度=“240”高度=“100”>
  </a>
  <a href="https://proxidize.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=scrapling&utm_content=d4vinci" target="_blank" title="干净的代理，没有废话。">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/proxidize.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://coldproxy.com/?utm_source=scrapling&utm_medium=github&utm_campaign=coldproxy&utm_content=platinum_sponsor" target="_blank" title="住宅、IPv6 和数据中心 Web Scraping 代理">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/coldproxy.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="针对 Akamai、DataDome、Incapsula 和 Kasada 的爬虫程序保护绕过 API">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi 是您的瑞士优质代理提供商，起价为 $0.49/GB">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad" target="_blank" title="释放社交媒体数据和人工智能的力量">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TikHub.jpg”宽度=“240”高度=“100”>
  </a>
  <a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky 提供尖端的 VPS 托管。">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png”宽度=“240”高度=“100”>
  </a>
<a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="专门针对 Web Scraping 的 #1 时事通讯">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="可扩展的 Web 数据访问解决方案">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png”宽度=“240”高度=“100”>
  </a>
</div>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.13` · 📅 发布：2026-08-09 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.13)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
