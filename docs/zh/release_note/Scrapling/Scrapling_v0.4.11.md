---
title: "Scrapling v0.4.11"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.11"
version: "v0.4.11"
published: "2026-07-12"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.11

**可靠的更新带来了第一个平台蜘蛛模板、更快的解析器和重要修复🎉**

> [!注意]
> **[在 X 上关注我们，获取日常提示和技巧](https://x.com/Scrapling_dev)**

## 🚀 新事物和生活质量的变化

- **添加了 `ShopifySpider`，第一个平台蜘蛛模板！** 通过其 JSON API 从任何 Shopify 支持的商店中提取每件产品，而无需接触网站的 HTML。将其子类化，设置商店的域，然后就完成了（检查[文档](https://scrapling.readthedocs.io/en/latest/spiders/platform-templates/)）
  ```python
  from scrapling.spiders import ShopifySpider

  class MyStore(ShopifySpider):
      target_website = "example.com"

  result = MyStore().start()
  ```
- **将 `--executable-path` 添加到 CLI 浏览器命令**。 `scrapling extract fetch` 和 `scrapling extract stealthy-fetch` 现在都接受自定义的 Chromium 兼容浏览器可执行文件，并在未传递该选项时回退到 `SCRAPLING_EXECUTABLE_PATH` 环境变量，从而与 MCP 服务器实现完全奇偶校验（解决 [#371](https://github.com/D4Vinci/Scrapling/issues/371)）
  ```bash
  scrapling extract fetch "https://example.com" page.html --executable-path "/path/to/chromium"
  ```
## 🤖 生活质量的变化
- **当 `first_match` 启用（默认）时，通过惰性包装元素使搜索在第一个匹配处停止，使 `find_by_text` 和 `find_by_regex` 的速度提高约 2 倍**，@yetval 在 [#370](https://github.com/D4Vinci/Scrapling/pull/370) 中
- **使用针对所有库的最新版本的新数字更新了基准测试。**
- **更新贡献规则**

## 🐛 错误修复

- **修复了 MCP 服务器的获取工具在包含控制字符的页面上崩溃**并出现错误 `All strings must be XML compatible`，由 @yetval 在 [#368](https://github.com/D4Vinci/Scrapling/pull/368) 中实现（修复了 [#366](https://github.com/D4Vinci/Scrapling/issues/366)）


_🙏 特别感谢社区的持续测试和反馈_

---

**强烈感谢我们的白金赞助商：**

<div style="text-align: center;">
  <a href="https://proxidize.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=scrapling&utm_content=d4vinci" target="_blank" title="干净的代理，没有废话。">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/proxidize.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://coldproxy.com/" target="_blank" title="适用于 Web Scraping 的住宅、IPv6 和数据中心代理">
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
  <a href="https://go.nodemaven.com/scraplingjune" target="_blank" title="IP 分数最高的代理">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.svg”宽度=“240”高度=“100”>
  </a>
</div>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.11` · 📅 发布：2026-07-12 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.11)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
