---
title: "DocsGPT 0.19.0"
project: "DocsGPT"
repo: "arc53/DocsGPT"
tag: "0.19.0"
version: "0.19.0"
published: "2026-08-13"
type: "minor"
lang: "zh"
---

# DocsGPT 0.19.0

## 发生了什么变化
* 修复：在 Windows 上通过 @mmustafasenoglu 在 https://github.com/arc53/DocsGPT/pull/2574 中启用 Docker 中 Vite HMR 的 Chokidar 轮询
* @ManishMadan2882 在 https://github.com/arc53/DocsGPT/pull/2571 中改进 UI
*（壮举）工作流程：通过 @ManishMadan2882 在 https://github.com/arc53/DocsGPT/pull/2582 中添加撤消/重做
* 杂务（deps-dev）：通过 https://github.com/arc53/DocsGPT/pull/2540 中的 @dependabot[bot] 将 /frontend 中的 vitest 从 3.2.4 提升到 4.1.9
* 杂务（deps-dev）：通过https://github.com/arc53/DocsGPT/pull/2541中的@dependabot[bot]将/frontend中的@tailwindcss/postcss从4.2.4撞到4.3.2
* 杂务（deps）：由https://github.com/arc53/DocsGPT/pull/2542中的@dependabot[bot]在/frontend中将日期fns从4.2.1撞到4.4.0
* 杂务（deps）：由https://github.com/arc53/DocsGPT/pull/2543中的@dependabot[bot]将/frontend中的radix-ui从1.4.3提升到1.6.2
* 杂务（deps-dev）：由https://github.com/arc53/DocsGPT/pull/2544中的@dependabot[bot]在/frontend中将lint-staged从16.4.0提升到17.0.8
* 工件和沙盒代码执行：https://github.com/arc53/DocsGPT/pull/2568 中 @dartpain 的工具、工作流程和文档 I/O
* @dartpain 在 https://github.com/arc53/DocsGPT/pull/2593 中的端点改进
* 修复：https://github.com/arc53/DocsGPT/pull/2595 中@dartpain 准确的每次调用令牌使用和超大上下文防护
* @pabik 在 https://github.com/arc53/DocsGPT/pull/2594 中预览块
*（壮举）聊天：shadcn 消息滚动条，通过 @ManishMadan2882 在 https://github.com/arc53/DocsGPT/pull/2591 中修复抖动
* 修复 @dartpain 在 https://github.com/arc53/DocsGPT/pull/2599 中的多工具调用问题
* 修复：https://github.com/arc53/DocsGPT/pull/2603 中的@dartpain 优雅地处理 Daytona 中无效的沙箱
* 修复：https://github.com/arc53/DocsGPT/pull/2604 中 @dartpain 将奇怪的空完成内容处理为错误
* 修复：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2605 中实现更持久的暂停
* 修复：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2608 中的 api 工具编码错误
* 修复：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2609 中上传 openai 兼容文件的错误
*修复：清理模型，更好地重试@dartpain在https://github.com/arc53/DocsGPT/pull/2611中的策略
* 文档：修复语法并行性并清理https://github.com/arc53/DocsGPT/pull/2606中@roshanroy-lang自述文件中的markdown链接
* 杂务（deps-dev）：通过https://github.com/arc53/DocsGPT/pull/2583中的@dependabot[bot]将/frontend中的eslint-plugin-prettier从5.5.5提升到5.5.6
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2584中由@dependabot[bot]在/frontend中将react-dom从19.2.5提升到19.2.8
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2585中由@dependabot[bot]在/frontend中将i18next从26.0.4提升到26.3.6
* 工作流程：@ManishMadan2882 在 https://github.com/arc53/DocsGPT/pull/2600 中对 UI/UX 进行了小幅改进
* 修复：将 print() 替换为 https://github.com/arc53/DocsGPT/pull/2565 中 @immuhammadfurqan 中的 crypto.py 和 classic_rag.py 中的记录器
* 壮举：在 https://github.com/arc53/DocsGPT/pull/2620 中通过 @dartpain 在提示符和端点中传达功能
* 错误修复：https://github.com/arc53/DocsGPT/pull/2625 中 @ManishMadan2882 的消息输入和对话气泡
* 壮举：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2634 中明确限制 docling 附件文件大小
* https://github.com/arc53/DocsGPT/pull/2622 中 @pabik 的代理密钥轮换
* 由 @dartpain 在 https://github.com/arc53/DocsGPT/pull/2635 中修复/工作流程错误和附件降级
* 修复/docling解析错误和@dartpain在https://github.com/arc53/DocsGPT/pull/2637中的调度状态
* 由 @dartpain 在 https://github.com/arc53/DocsGPT/pull/2638 中创建 0027_user_logs_agent_lookup_idx.py
* 杂务（deps）：在 https://github.com/arc53/DocsGPT/pull/2612 中通过 @dependabot[bot] 进行 5 次更新，将 npm_and_yarn 组跨越 1 个目录
* 杂务（deps-dev）：通过https://github.com/arc53/DocsGPT/pull/2615中的@dependabot[bot]在/frontend中将@typescript-eslint/eslint-plugin从8.59.1撞到8.66.0
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2616中由@dependabot[bot]在/frontend中将react-router-dom从7.18.1提升到7.18.2
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2617中由@dependabot[bot]在/frontend中将react-dropzone从15.0.0撞到20.0.0
* 杂务（deps-dev）：在https://github.com/arc53/DocsGPT/pull/2618中由@dependabot[bot]在/frontend中从3.6.2到3.9.6更漂亮
* 修复：https://github.com/arc53/DocsGPT/pull/2645 中@dartpain 的源授权、静默检索失败和提示结构
* 修复：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2647 中更多地跟踪代理创建错误
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2640中由@dependabot[bot]在/frontend中将@radix-ui/react-dialog从1.1.19撞到1.1.23
* 杂务（deps-dev）：通过 https://github.com/arc53/DocsGPT/pull/2641 中的 @dependabot[bot] 将 /frontend 中的 vite 从 8.1.5 提升到 8.2.1
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2642中由@dependabot[bot]在/frontend中将美人鱼从11.15.0撞到11.16.1
* 杂务（deps-dev）：在https://github.com/arc53/DocsGPT/pull/2643中通过@dependabot[bot]将/frontend中的@types/lodash从4.17.20撞到4.17.25
* 杂务（deps-dev）：通过 https://github.com/arc53/DocsGPT/pull/2644 中的 @dependabot[bot] 在 /frontend 中将 @vitejs/plugin-react 从 6.0.1 提升到 6.0.5
* 杂务（deps）：在 https://github.com/arc53/DocsGPT/pull/2650 中 @dependabot[bot] 进行 3 次更新，将 npm_and_yarn 组跨越 1 个目录
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2454中由@dependabot[bot]在/extensions/react-widget中将流箱从0.311.0撞到0.326.0
* 杂务（deps-dev）：将 @typescript-eslint/parser 从 8.59.1 中的 8.59.1 更改为 https://github.com/arc53/DocsGPT/pull/2455 中的 @dependabot[bot] 在 /extensions/react-widget 中的 8.66.0
* 杂务（deps-dev）：通过 https://github.com/arc53/DocsGPT/pull/2461 中的 @dependabot[bot] 将 npm_and_yarn 组中 /extensions/react-widget 中的 @babel/plugin-transform-modules-systemjs 从 7.29.0 撞到 7.29.8 中的 1 个目录
* 杂务（deps）：在 https://github.com/arc53/DocsGPT/pull/2648 中通过@dartpain 增加 47 个后端依赖项
* 壮举：提高 @dartpain 在 https://github.com/arc53/DocsGPT/pull/2652 中长时间调用时工具调用的耐用性
* (feat)ui/chat：@ManishMadan2882 在 https://github.com/arc53/DocsGPT/pull/2636 中进行推理和工具调用的内联流步骤
*（修复）ui/chat：删除气泡头像镀铬，通过@dartpain在https://github.com/arc53/DocsGPT/pull/2665中统一实时步骤状态
* 壮举：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2664 中初始化护栏
* 杂务：将文档依赖项提升到 https://github.com/arc53/DocsGPT/pull/2666 中@dartpain 的最新版本
* 修复（react-widget）：通过 @ManishMadan2882 在 https://github.com/arc53/DocsGPT/pull/2653 中解析已发布依赖关系树中的 npm 审计建议
* 杂务：在 https://github.com/arc53/DocsGPT/pull/2667 中由 @dartpain 碰撞 docling
* 杂务（前端）：目标 Node 22 并修复 https://github.com/arc53/DocsGPT/pull/2668 中 @ManishMadan2882 的 Vite 本机配置加载器警告
* 壮举：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2669 中重构图像
* 杂务（deps-dev）：通过https://github.com/arc53/DocsGPT/pull/2654中的@dependabot[bot]将/frontend中的eslint-plugin-promise从6.6.0提升到7.3.0
* 杂务（deps-dev）：在https://github.com/arc53/DocsGPT/pull/2656中通过@dependabot[bot]将/frontend中的@types/react从19.2.14撞到19.2.18
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2657中由@dependabot[bot]在/frontend中将@radix-ui/react-popover从1.1.19撞到1.1.23
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2659中由@dependabot[bot]在/frontend中将@shadcn/react从0.2.1撞到0.3.0
* 杂务（deps）：在https://github.com/arc53/DocsGPT/pull/2661中由@dependabot[bot]在/frontend中将@radix-ui/react-slot从1.3.0撞到1.3.3
* 壮举：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2670 中的附件出处
* 修复：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2671 中提供更好的消息输入武装
* 壮举：@dartpain 在 https://github.com/arc53/DocsGPT/pull/2672 中提供更好的附件预发送防护

## 新贡献者
* @mmustafasenoglu 在 https://github.com/arc53/DocsGPT/pull/2574 中做出了第一个贡献
* @roshanroy-lang 在 https://github.com/arc53/DocsGPT/pull/2606 中做出了第一个贡献
* @immuhammadfurqan 在 https://github.com/arc53/DocsGPT/pull/2565 中做出了第一个贡献

**完整 Changelog**：https://github.com/arc53/DocsGPT/compare/0.18.0...0.19.0

---

> 📦 仓库：[arc53/DocsGPT](https://github.com/arc53/DocsGPT) · 🏷️ 版本：`0.19.0` · 📅 发布：2026-08-13 · [查看英文原版 Release](https://github.com/arc53/DocsGPT/releases/tag/0.19.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
