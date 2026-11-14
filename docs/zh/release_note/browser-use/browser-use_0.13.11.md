---
title: "browser-use 0.13.11"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.11"
version: "0.13.11"
published: "2026-10-07"
type: "patch"
lang: "zh"
---

# browser-use 0.13.11

此版本包括 Claude 的浏览器使用工具集，可从 `browser_use.integrations.toolsets_for_claude` 获取。集成需要包含 `anthropic.tools.browser` 的 Anthropic SDK 版本；目前公开的Anthropic SDK尚不包含它。

文档：https://docs.browser-use.com/open-source/customize/integrations/toolsets-for-claude

PyPI 发布贯穿受保护的发布工作流程，并且需要单独的审阅者批准。


## 发生了什么变化
* 杂务：在 https://github.com/browser-use/browser-use/pull/5669 中固定@MagMueller 发布工作流工具链
* 文件系统：write_file 可以为 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5280 中的上传流创建微小的二进制图像 (png/gif/jpg/webp)
*修复（代理）：编辑@Mohil-Ahuja在https://github.com/browser-use/browser-use/pull/5662中保存的历史记录中嵌套在列表边界下方的敏感数据
* 修复（anthropic）：https://github.com/browser-use/browser-use/pull/5636 中@leilei3167 不区分大小写地处理数据 URL 方案和媒体类型
*修复（llm）：停止在https://github.com/browser-use/browser-use/pull/5664中@Mohil-Ahuja的Gemini请求中删除系统消息
* 修复（llm）：通过 @nina-mir 在 https://github.com/browser-use/browser-use/pull/5673 中重新映射已退役的 Mistral pixtral-large 别名
* 修复（aws）：支持https://github.com/browser-use/browser-use/pull/5676中@VedanthB在基岩图像URL中的查询字符串
* 修复（dom）：在https://github.com/browser-use/browser-use/pull/5640中通过@y4ho0不区分大小写地匹配隐藏代码样式
* 修复（llm）：通过 @nina-mir 在 https://github.com/browser-use/browser-use/pull/5672 中显式解析 DeepSeek 和 Cerebras API 密钥
* 修复(cli): 支持https://github.com/browser-use/browser-use/pull/5552中@UniversePeak在Windows上的模块调用
* 修复：在 https://github.com/browser-use/browser-use/pull/5279 中@MagMueller 在云事件中使用规范的 LLM 模型属性
*修复：在https://github.com/browser-use/browser-use/pull/5695中尊重@MagMueller的MCP禁用安全环境设置
* 修复（openrouter）：通过https://github.com/browser-use/browser-use/pull/5703中的@shashank-100通过SDK extra_body传递自定义字段
* 文档：指导代理从免费积分到 @gregpr07 在 https://github.com/browser-use/browser-use/pull/5714 中运行的有界云
* 文档：用 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5752 中的硬基准 v2 替换 README 图
* 文档：在 https://github.com/browser-use/browser-use/pull/5753 中提供驾驶测试演示并阐明 @MagMueller 的浏览器使用产品选择
* 文档：在 https://github.com/browser-use/browser-use/pull/5754 中嵌入驾驶演示并阐明 @MagMueller 的三个浏览器使用路径
* 文档：对三个路径进行编号并简化 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5756 中的自述文件副本
* 文档：在 https://github.com/browser-use/browser-use/pull/5757 中刷新@MagMueller 的自述文件快速入门和常见问题解答
* 文档：由 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5758 中刷新 README 品牌和相关存储库
* 文档：恢复品牌标头并通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5759 中完善自述文件路径
* 文档：通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5761 中简化基准标题和链接 JS 工具
* 文档：https://github.com/browser-use/browser-use/pull/5762 中 @MagMueller 的 CLI 设置介绍中的名称代理
* 文档：将 AI 代理和爬虫指向 https://github.com/browser-use/browser-use/pull/5775 中 @MagMueller 的自述文件中的 llms.txt
* 文档：将 bu-30b-a3b-preview 指向自托管，而不是 https://github.com/browser-use/browser-use/pull/5774 中 @MagMueller 的云
* 文档：在 https://github.com/browser-use/browser-use/pull/5648 中添加 @Brohammad 的 PZERO OpenAI 兼容提供程序示例 (#5579)
* 修复 Actor 输入语义并通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5889 中添加 CDP 原语
* 在 https://github.com/browser-use/browser-use/pull/5966 中添加 @MagMueller 的 Anthropic 浏览器工具集驱动程序
* 通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5968 中澄清 Anthropic 快速入门、批准和远程文件
* 示例：在 https://github.com/browser-use/browser-use/pull/5978 中启用 @MagMueller 的完整 Anthropic 浏览器工具集
* 文档：通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5979 中简化 Anthropic 快速入门
* 文档：通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5980 中阐明可选的人择工具默认值
* 将 https://github.com/browser-use/browser-use/pull/5982 中 @gregpr07 的技能参考中的云注册积分更新为 1 美元
* 在 https://github.com/browser-use/browser-use/pull/6007 中使用 @MagMueller 的浏览器使用 Claude 品牌工具集
* 修复 @MagMueller 在 https://github.com/browser-use/browser-use/pull/6011 中的 Claude 工具集 README 图像渲染
* @MagMueller 在 https://github.com/browser-use/browser-use/pull/6012 中将 Bump 包版本升级为 0.13.11

## 新贡献者
* @Mohil-Ahuja 在 https://github.com/browser-use/browser-use/pull/5662 中做出了第一个贡献
* @nina-mir 在 https://github.com/browser-use/browser-use/pull/5673 中做出了第一个贡献
* @VedanthB 在 https://github.com/browser-use/browser-use/pull/5676 中做出了第一个贡献
* @y4ho0 在 https://github.com/browser-use/browser-use/pull/5640 中做出了第一个贡献
* @shashank-100 在 https://github.com/browser-use/browser-use/pull/5703 中做出了第一个贡献
* @Brohammad 在 https://github.com/browser-use/browser-use/pull/5648 中做出了第一个贡献

**完整 Changelog**：https://github.com/browser-use/browser-use/compare/0.13.10...0.13.11

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`0.13.11` · 📅 发布：2026-10-07 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/0.13.11)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
