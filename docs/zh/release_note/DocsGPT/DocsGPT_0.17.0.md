---
title: "DocsGPT 0.17.0"
project: "DocsGPT"
repo: "arc53/DocsGPT"
tag: "0.17.0"
version: "0.17.0"
published: "2026-04-21"
type: "minor"
lang: "zh"
---

# DocsGPT 0.17.0

用户数据现在位于 Postgres 中。现有的 0.16.x 部署必须在升级之前完成 [Postgres 迁移](https://docs.docsgpt.cloud/Deploying/Postgres-Migration) - 不要先对 docker 撰写拉取。

## 发生了什么变化
* 添加 INCIDENT_RESPONSE.md 并通过 @dartpain 在 https://github.com/arc53/DocsGPT/pull/2379 中从 SECURITY.md 引用它
* 杂务（deps-dev）：通过 https://github.com/arc53/DocsGPT/pull/2319 中的 @dependabot[bot] 在 npm_and_yarn 组中的 /frontend 中的 /frontend 中的 3.4.1 到 3.4.2 跨越 1 个目录
* 在 https://github.com/arc53/DocsGPT/pull/2383 中添加 @dartpain 的 GitHub Actions zizmor 安全工作流程
*杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2363中由@dependabot[bot]在/application中将json指针从3.0.0撞到3.1.1
* 杂务（deps）：在 https://github.com/arc53/DocsGPT/pull/2364 中 @dependabot[bot] 在 /application 中将 langsmith 从 0.7.23 提升到 0.7.26
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2365中由@dependabot[bot]在/application中将langchain核心从1.2.23提升到1.2.26
* 杂务（deps）：通过https://github.com/arc53/DocsGPT/pull/2366中的@dependabot[bot]将/application中的tzdata从2025.3提升到2026.1
* 杂务（deps）：通过 https://github.com/arc53/DocsGPT/pull/2389 中的 @dependabot[bot] 在 1 个目录中的 pip 组中的 /application 中将加密从 46.0.6 提升到 46.0.7
* 杂务（deps-dev）：在https://github.com/arc53/DocsGPT/pull/2309中通过@dependabot[bot]将/extensions/react-widget中的@babel/core从7.24.6提升到7.29.0
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2387中由@dependabot[bot]在/frontend中将美人鱼从11.13.0撞到11.14.0
* 杂务（deps-dev）：通过https://github.com/arc53/DocsGPT/pull/2388中的@dependabot[bot]将/frontend中的tailwindcss从4.2.1提升到4.2.2
* 杂务（deps-dev）：通过https://github.com/arc53/DocsGPT/pull/2386中的@dependabot[bot]将/frontend中的@tailwindcss/postcss从4.1.16撞到4.2.2
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2385中通过@dependabot[bot]在/frontend中碰撞react-dom和@types/react-dom
* 杂务（deps-dev）：在 https://github.com/arc53/DocsGPT/pull/2311 中通过 @dependabot[bot] 将 /extensions/react-widget 中的 @babel/preset-env 从 7.24.6 提升到 7.29.2
* 杂务（deps-dev）：通过 https://github.com/arc53/DocsGPT/pull/2384 中的 @dependabot[bot] 将 /frontend 中的 eslint-plugin-n 从 17.23.1 提升到 17.24.0
* 杂务（deps-dev）：通过 https://github.com/arc53/DocsGPT/pull/2322 中的 @dependabot[bot] 将 /extensions/react-widget 中的 svgo 从 3.3.3 提升到 4.0.1
* 在https://github.com/arc53/DocsGPT/pull/2391中添加@dartpain的公共威胁模型文档（.github/THREAT_MODEL.md）
* 杂务（deps-dev）：通过 https://github.com/arc53/DocsGPT/pull/2393 中的 @dependabot[bot] 将 /frontend 中的 eslint-plugin-prettier 从 5.5.4 提升到 5.5.5
* 杂务（deps）：由 https://github.com/arc53/DocsGPT/pull/2396 中的 @dependabot[bot] 在 /frontend 中将 lucide-react 从 0.562.0 提升到 1.8.0
* 第 4 页，@dartpain，https://github.com/arc53/DocsGPT/pull/2390
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2399中由@dependabot[bot]在/frontend中将react-router-dom从7.13.1提升到7.14.1
* 杂务（deps-dev）：通过https://github.com/arc53/DocsGPT/pull/2403中的@dependabot[bot]将/frontend中的@types/react从19.2.2撞到19.2.14
* 杂务（deps）：在 https://github.com/arc53/DocsGPT/pull/2407 中通过 @dependabot[bot] 进行 4 次更新，将 npm_and_yarn 组跨越 1 个目录
* 杂务（deps）：在 https://github.com/arc53/DocsGPT/pull/2392 中 @dependabot[bot] 在 /application 中将 11labs 从 2.41.0 提升到 2.43.0
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2394中由@dependabot[bot]在/application中将fastmcp从3.2.0提升到3.2.4
* 杂务（deps）：在 https://github.com/arc53/DocsGPT/pull/2395 中 @dependabot[bot] 在 /application 中将 google-genai 从 1.69.0 提升到 1.73.1
* 杂务（deps）：在 https://github.com/arc53/DocsGPT/pull/2398 中 @dependabot[bot] 在 /application 中将 openai 从 2.30.0 提升到 2.31.0
* 杂务（deps）：在 https://github.com/arc53/DocsGPT/pull/2326 中 @dependabot[bot] 将 /extensions/react-widget 中的类方差权威从 0.7.0 提升到 0.7.1
* 杂务（deps）：将 npm_and_yarn 组跨越 3 个目录，由 @dependabot[bot] 在 https://github.com/arc53/DocsGPT/pull/2411 中进行 10 次更新
* 杂务（deps）：通过https://github.com/arc53/DocsGPT/pull/2413中的@dependabot [bot]进行2次更新，在1个目录中碰撞npm_and_yarn组
* 杂务（deps）：通过https://github.com/arc53/DocsGPT/pull/2400中的@dependabot[bot]将/extensions/react-widget中的样式组件从6.3.12撞到6.4.0
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2402中由@dependabot[bot]在/extensions/react-widget中将流箱从0.306.0撞到0.309.0
* 杂务（deps）：通过 https://github.com/arc53/DocsGPT/pull/2406 中的 @dependabot[bot] 在 npm_and_yarn 组中的 /extensions/react-widget 中将 dompurify 从 3.3.3 提升到 3.4.0 跨 1 个目录
* 杂务（deps）：https://github.com/arc53/DocsGPT/pull/2397中的@dependabot[bot]在/extensions/react-widget中碰撞react和@types/react


**完整 Changelog**：https://github.com/arc53/DocsGPT/compare/0.16.1...0.17.0

---

> 📦 仓库：[arc53/DocsGPT](https://github.com/arc53/DocsGPT) · 🏷️ 版本：`0.17.0` · 📅 发布：2026-04-21 · [查看英文原版 Release](https://github.com/arc53/DocsGPT/releases/tag/0.17.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
