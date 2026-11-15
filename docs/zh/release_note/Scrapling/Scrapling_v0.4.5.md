---
title: "Scrapling v0.4.5"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.5"
version: "v0.4.5"
published: "2026-04-07"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.5

**一项重点更新，为蜘蛛开发者提供了一项重要的生活质量功能，并进行了一些重要修复 🎉**

> [!注意]
> **[在 X 上关注我们，获取日常提示和技巧](https://x.com/Scrapling_dev)**


## 🚀 新事物和生活质量的变化

- **蜘蛛开发模式**：迭代蜘蛛的 `parse()` 逻辑过去意味着每次运行时都会重新访问目标服务器，这是缓慢、嘈杂的，并且是在您仍在计算选择器时获得速率限制的好方法。新的开发模式会在第一次运行时缓存对磁盘的每个响应，并在每次后续运行时从磁盘重播它们，因此您可以调整回调并根据需要重新运行多次，而无需发出单个网络请求。使用一个类属性启用它：

    ```python
    class MySpider(Spider):
        name = "my_spider"
        start_urls = ["https://example.com"]
        development_mode = True

        async def parse(self, response):
            yield {"title": response.css("title::text").get("")}
    ```

    默认情况下，缓存位于 `.scrapling_cache/{spider.name}/` 中，并且可以使用 `development_cache_dir` 重定向到任何地方。两个新的统计计数器 `cache_hits` 和 `cache_misses` 可让您查看缓存的执行情况。缓存重播绕过 `download_delay`、速率限制和阻塞请求重试路径，因此迭代速度与磁盘允许的速度一样快。不要将蜘蛛与 `development_mode = True` 一起发布——它是一个开发工具，而不是生产缓存。请参阅 [文档](https://scrapling.readthedocs.io/en/latest/spiders/advanced.html#development-mode) 了解完整故事。

- **默认情况下更安全的重定向**：`follow_redirects` 现在在所有 HTTP 获取器、MCP 服务器和 shell 中默认为 `"safe"`。仍会遵循重定向，但针对内部/专用 IP（环回、专用网络、链路本地）的重定向将被拒绝。当 scraping 用户提供的 URL 时，这可以保护您免受 SSRF 的影响。传递 `follow_redirects="all"` 以获得旧行为，或传递 `False` 完全禁用重定向。

## 🐛 错误修复

- **强制停止不再丢失检查点**：在启用了 `crawldir` 的蜘蛛上按 Ctrl+C 两次（强制停止）用于与检查点写入竞争 - 取消范围将在 pickle 完成之前拆除任务，留下 `paused=False` 并触发*删除*前一个检查点的清理路径。结果是，强行停止长时间爬行可能会丢失您试图保存的所有进度。现在，引擎在调用 `cancel_scope.cancel()` **之前**写入检查点，因此强制停止始终保留最新的挂起状态。作者：@voidborne-d，在 [#230](https://github.com/D4Vinci/Scrapling/pull/230) 中。


_🙏 特别感谢社区的持续测试和反馈_

---

<div style="text-align: center;">
  <a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="针对 Akamai、DataDome、Incapsula 和 Kasada 的爬虫程序保护绕过 API">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://birdproxies.com/t/scrapling" target="_blank" title="在 Bird Proxies，我们消除了您的 IP 禁止、地理限制和高额费用等痛苦，让您可以专注于您的工作。">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/BirdProxies.jpg”宽度=“240”高度=“100”>
  </a>
  <a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi 是您的瑞士优质代理提供商，起价为 $0.49/GB">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad" target="_blank" title="释放社交媒体数据和人工智能的力量">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TikHub.jpg”宽度=“240”高度=“100”>
  </a>
  <a href="https://www.nsocks.com/?keyword=2p67aivg" target="_blank" title="AI 应用程序的可扩展 Web 数据访问">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/nsocks.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky 提供尖端的 VPS 托管。">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png”宽度=“240”高度=“100”>
  </a>
<a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="专门针对 Web Scraping 的 #1 时事通讯">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://proxy-seller.com/?partner=CU9CAA5TBYFFT2" target="_blank" title="Proxy-Seller 为 Web Scraping 提供可靠的代理基础设施">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/ProxySeller.png”宽度=“240”高度=“100”>
  </a>
  <a href="http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci" target="_blank" title="您可以信赖的代理：住宅、服务器和移动">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/MangoProxy.png”宽度=“240”高度=“100”>
  </a>
  <br/>
  <br/>
</div>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.5` · 📅 发布：2026-04-07 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
