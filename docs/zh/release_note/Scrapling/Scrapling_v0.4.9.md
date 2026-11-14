---
title: "Scrapling v0.4.9"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.9"
version: "v0.4.9"
published: "2026-06-07"
type: "patch"
lang: "zh"
---

# Scrapling v0.4.9

**维护更新包含社区报告的修复🛠️**

> [!注意]
> **[在 X 上关注我们，获取日常提示和技巧](https://x.com/Scrapling_dev)**

## 🚀 新事物和生活质量的变化

- **更新了所有浏览器和指纹**。更新后运行 `scrapling install --force` 来刷新它们。
- **通过 [#303](https://github.com/D4Vinci/Scrapling/pull/303) 中的@ETM-Code 将 `--version` 标志添加到 CLI**（解决了 [#299](https://github.com/D4Vinci/Scrapling/issues/299)）

## 🐛 错误修复

- **修复了会话级 `proxy` 参数在 HTTP 会话中被默默忽略的问题**，这可能会泄露您的真实 IP（解决了 [#295](https://github.com/D4Vinci/Scrapling/issues/295)）。请注意，将会话级 `proxy` 与每个请求的 `proxies` 参数混合（反之亦然）现在会引发错误，而不是默默地删除错误。
- **修复了将 `init_script` 与 `user_data_dir` 组合时浏览器导航失败的问题**（解决了 [#294](https://github.com/D4Vinci/Scrapling/issues/294)）。
- **修复了网站在 [#323](https://github.com/D4Vinci/Scrapling/pull/323) 中 @Bortlesboat 引用 `Content-Type` 标头中的字符集值时的编码检测。
- **在 [#340](https://github.com/D4Vinci/Scrapling/pull/340) 中@Mubashirrrr 启用 `auto_save` 时，修复了自适应元素重定位中的 `IndexError`**。
- **修复了 Windows 上蜘蛛的检查点和缓存保存崩溃**，由 @MrStarkEG 在 [#344](https://github.com/D4Vinci/Scrapling/pull/344) 中完成。
- **修复了 `find_similar` 中属性计数不匹配的元素的不正确相似性评分**（解决了 [#322](https://github.com/D4Vinci/Scrapling/issues/322)）。

## 文档

- **澄清默认安装仅包括解析器引擎**，并且获取器/蜘蛛需要额外的东西（解决[#343](https://github.com/D4Vinci/Scrapling/issues/343)）。
- **在[#315](https://github.com/D4Vinci/Scrapling/pull/315)中由@evanclan修复了剩余示例中的Docker图像名称**。
- **修复了贡献指南中的损坏链接**，由 @Bortlesboat 在 [#320](https://github.com/D4Vinci/Scrapling/pull/320) 中完成。

_🙏 特别感谢社区的持续测试和反馈_

---

### 向我们的白金赞助商致敬

<div style="text-align: center;">
  <a href="https://coldproxy.com/" target="_blank" title="适用于 Web Scraping 的住宅、IPv6 和数据中心代理">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/coldproxy.png”宽度=“240”高度=“100”>
  </a>
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
  <a href="https://petrosky.io/d4vinci" target="_blank" title="PetroSky 提供尖端的 VPS 托管。">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/petrosky.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling" target="_blank" title="专门针对 Web Scraping 的 #1 时事通讯">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TWSC.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://www.swiftproxy.net/?ref=D4Vinci" target="_blank" title="可扩展的 Web 数据访问解决方案">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/SwiftProxy.png”宽度=“240”高度=“100”>
  </a>
  <a href="https://9proxy.com/pricing?tab=traffic&utm_source=Github&utm_campaign=D4vinci" target="_blank" title="实现最高成功率的顶级住宅代理解决方案">
    <img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/9proxy.jpg”宽度=“240”高度=“100”>
  </a>
  <a href="https://go.nodemaven.com/scrapling" target="_blank" title="IP 分数最高的代理">
<img src =“https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/NodeMaven.png”宽度=“240”高度=“100”>
  </a>
</div>

---

> 📦 仓库：[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · 🏷️ 版本：`v0.4.9` · 📅 发布：2026-06-07 · [查看英文原版 Release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.9)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
