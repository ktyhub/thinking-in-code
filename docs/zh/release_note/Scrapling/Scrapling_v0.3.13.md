---
title: "Scrapling v0.3.13"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.3.13"
version: "v0.3.13"
published: "2026-01-01"
type: "patch"
lang: "zh"
---

# Scrapling v0.3.13

**这是一次重大更新，在许多地方进行了许多改进，但也有很多重大变化，这是有充分理由的。更新前请阅读以下内容**

* 由于多种原因，我们决定从现在开始，我们将完全停止使用Camoufox，如果它的发展继续下去，我们可能会在未来转回它。如果您希望像此版本之前一样继续使用 Camoufox，请参阅本[部分](https://scrapling.readthedocs.io/en/latest/fetching/stealthy/#using-camoufox-as-an-engine) 中的相关说明。

* 以前，我们在 `DynamicFetcher` 及其会话类中以隐身模式使用 patchright。现在，我们删除了它们的隐身模式，并开始在 `StealthyFetcher` 及其会话类中使用 patchright，并进行了大量改进，正如您将看到的，在 patchright 之上整体提高了隐身性。

**这使得 `StealthyFetcher` 及其会话类比以前快 101%，使用更少的内存和空间，并且代码长度缩短了约 400 行，但最重要的是，比我们之前使用 Camoufox 时更加稳定。**

这也将缩短 `scrapling install` 命令的安装时间，减小 Docker 映像的大小，提高 GitHub CI 中的测试平滑度，并使新用户不再感到混乱。

## 重大变更
1. `stealth` 参数已从 `DynamicFetcher` 类及其会话类中删除，而 `hide_canvas` 参数已移至 `StealthyFetcher` 及其会话类中。
2. `disable_webgl` 参数已从 `DynamicFetcher` 移至 `StealthyFetcher` 类，并重命名为 `allow_webgl`。所有课程也是如此。
3. `StealthyFetcher`类现在基本上是`DynamicFetcher`的新隐形版本，因此删除了以下参数：`block_images`、`humanize`、`addons`、`os_randomize`、`disable_ads`和`geoip`。我尝试在 Chromium 中复制它们，但每个都有自己的问题。这可能会随着 v0.4 之前的即将发布的版本而改变。

现在好消息是，我们已经改进并修复了很多东西:)

## 改进
- 您已经知道，`StealthyFetcher` 类及其会话类现在比以前快了 101%，但现在 `DynamicFetcher` 类及其会话类也快了 20%。
- Cloudflare 的求解器算法比以前有所改进，可以更快地完成并处理更多情况。此外，由于新的重构，预计求解器解决验证码的速度会提高两倍！
- 所有提取器现在使用更少的内存。
- MCP 服务器现在使用更少的代币来节省更多的钱！
- Docker 图像现在缩小了 60%。
- 整个文档网站已更新为新内容。同时，它变得更加明确，缩短了许多部分，添加了更多示例，包括了缺少的参数，用图表更新了 API 参考部分，并进行了许多其他改进。该网站现在加载速度提高了 130%，使用的数据更少，并且更适合 SEO。

## 修复
- 添加了之前在 Web Scraping shell 快捷方式中缺少的参数，并使它们更加准确。
- 修复了即使 URL 是 localhost/IP，`google_search` 参数也会创建 Google 引荐来源网址的问题。

_🙏 特别感谢我们的[Discord 社区](https://discord.gg/EMgGbDceNQ) 的持续测试和反馈_

---

### 向我们最大的赞助商致敬
<a href="https://www.scrapeless.com/en?utm_source=official&utm_term=scrapling" target="_blank" title="面向企业和开发人员的轻松 Web Scraping 工具包"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/scrapeless.jpg"></a><a href="https://www.thordata.com/?ls=github&lk=github" target="_blank" title="不可阻止的代理和 scraping 基础设施，提供实时、可靠的网络数据来支持 AI 模型和"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/thordata.jpg"></a><a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi 是您的瑞士优质代理提供商，起价 $0.49/GB"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png"></a><a href="https://serpapi.com/?utm_source=scrapling" target="_blank" title="抓取 Google 和其他搜索引擎SerpApi"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SerpApi.png"></a><a href="https://visit.decodo.com/Dy6W0b" target="_blank" title="免费尝试最高效的住宅代理"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/decodo.png"></a><a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky 提供先进的 VPS hosting."><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png"></a>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.3.13` · 📅 发布：2026-01-01 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.3.13)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
