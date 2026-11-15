---
title: "browser-use 0.13.8"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.8"
version: "0.13.8"
published: "2026-08-16"
type: "patch"
lang: "zh"
---

# browser-use 0.13.8

## 发生了什么变化
* 通过 @ryanl-cerebras 在 https://github.com/browser-use/browser-use/pull/5323 中更新 Cerebras 模型 ID 和默认值
* 当模型将 https://github.com/browser-use/browser-use/pull/5330 中的 @ElayGelbart 的调用序列化为文本时，恢复 Anthropic 工具参数
* 文档：用 https://github.com/browser-use/browser-use/pull/5332 中的 @Hardik180704 替换损坏的配置文件同步链接
* 修复（代理）：通过 @itxaiohanglover 在 https://github.com/browser-use/browser-use/pull/5103 中保护 last_action() 免受空操作列表的影响
* 修复（代理）：通过 @itxaiohanglover 在 https://github.com/browser-use/browser-use/pull/5107 中防止 _inject_budget_warning ZeroDivisionError
* 修复（浏览器）：当 @itxaiohanglover 在 https://github.com/browser-use/browser-use/pull/5114 中创建临时目录时，从 validate_user_data_dir 返回路径
* 使用 UTF-8 来处理 @Ghraven 在 https://github.com/browser-use/browser-use/pull/5309 中写入的代理文件
* 修复（dom）：将最终块 char_end 钳位到 len（内容），以通过 https://github.com/browser-use/browser-use/pull/5175 中的@Diwak4r 进行尾随换行
* 修复（注册表）：不要通过 https://github.com/browser-use/browser-use/pull/5204 中的 @abhay-codes07 在空 URL 上公开域限制操作
* 修复（代理）：通过 https://github.com/browser-use/browser-use/pull/5205 中的 @abhay-codes07 为每个 MessageManager 提供自己的状态（可变的默认参数）
* 修复(dom): 修复 https://github.com/browser-use/browser-use/pull/5104 中 @itxaiohanglover 的 stackingContexts 访问类型不匹配问题
* 修复：在 https://github.com/browser-use/browser-use/pull/5182 中导出 @Karunasagar12 记录的 LLM 聊天模型
* 修复 https://github.com/browser-use/browser-use/pull/5089 中 @Gaurav0807 处理 Element.click() 中的变量阴影错误
* 修复（下载）：在 https://github.com/browser-use/browser-use/pull/5264 中触发@sergioperezcheco 远程浏览器下载的完整回调
* 修复（llm）：从 https://github.com/browser-use/browser-use/pull/5240 中 @VenkateswarluNagineni 的 Groq 工具调用模型的工具调用中读取结构化输出
* 修复https://github.com/browser-use/browser-use/pull/5233中@chuenchen309在空response.content列表上的ChatAnthropicBedrock.ainvoke() IndexError
* 修复（异步）：避免 @GautamSharma99 在 https://github.com/browser-use/browser-use/pull/5285 中重新引发任务回调错误
* 修复（浏览器）：当 @ayaangazali 在 https://github.com/browser-use/browser-use/pull/5262 中作为内存中的字典传递时，应用 storage_state cookie
* 修复（工具）：在 https://github.com/browser-use/browser-use/pull/5318 中恢复 @LHMQ878 的 SearchGoogleAction 向后兼容别名
* 修复了 @chuenchen309 在 https://github.com/browser-use/browser-use/pull/5231 中将 Mouse.scroll() 静默重定向显式 x=0/y=0 到视口中心的问题
* 修复了 DOMTreeSerializer 将绘画顺序遮挡文本泄漏到 https://github.com/browser-use/browser-use/pull/5225 中 @chuenchen309 的 LLM
* 修复（mcp）：在 https://github.com/browser-use/browser-use/pull/5246 中使用 @ayaangazali 的 readOnlyHint 注释标记只读 MCP 工具
* 修复（mcp）：将 CallToolResult.isError 表面为 @chuenchen309 在 https://github.com/browser-use/browser-use/pull/5235 中失败的 ActionResult
* 修复（代理）：https://github.com/browser-use/browser-use/pull/5105 中的 @itxaiohanglover 在 GIF 创建后关闭 PIL 图像以防止资源泄漏
* 修复：在坐标 click 中包含异常详细信息，并在 https://github.com/browser-use/browser-use/pull/5379 中添加@shotsan 缺失的错误日志
* 文档：通过 @Alezander9 在 https://github.com/browser-use/browser-use/pull/5388 中刷新开源与云 v4 的对比图
* 文档：在 https://github.com/browser-use/browser-use/pull/5394 中 @Alezander9 的自述文件中显示托管代理 API 调用
*修复（utils）：防止https://github.com/browser-use/browser-use/pull/5211中@santhreal的redact_sensitive_string级联损坏
* 通过 @sauravpanda 在 https://github.com/browser-use/browser-use/pull/5326 中添加 aiohttp 和 pypdf 安全引脚
*修复（代理）：在https://github.com/browser-use/browser-use/pull/5401中遵守@wesleyzhangwq的零消息压缩阈值
* 修复（mcp）：在 https://github.com/browser-use/browser-use/pull/5448 中通过 @scmii 更新已弃用的 Bedrock Claude 模型标识符
* 文档：在 https://github.com/browser-use/browser-use/pull/5463 中修剪 @MagMueller 的 README 演示视频
* 文档：在 https://github.com/browser-use/browser-use/pull/5464 中恢复 @MagMueller 的社交视频预览
* feat(llm)：默认聊天浏览器用于 @sauravpanda 在 https://github.com/browser-use/browser-use/pull/5465 中进行 bu-2-0-mini-preview
* 修复（deps）：通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5477 中使用丰富的 14.3.3 解锁 OpenHands
* 壮举：在 https://github.com/browser-use/browser-use/pull/5476 中添加 @MagMueller 的第一方 OpenClaw 技能支持
* 通过 @gregpr07 在 https://github.com/browser-use/browser-use/pull/5481 中发布带有浏览器框架 0.1.9 的 0.13.8

## 新贡献者
* @ryanl-cerebras 在 https://github.com/browser-use/browser-use/pull/5323 中做出了第一个贡献
* @ElayGelbart 在 https://github.com/browser-use/browser-use/pull/5330 中做出了第一个贡献
* @Hardik180704 在 https://github.com/browser-use/browser-use/pull/5332 中做出了第一个贡献
* @itxaiohanglover 在 https://github.com/browser-use/browser-use/pull/5103 中做出了第一个贡献
* @Ghraven 在 https://github.com/browser-use/browser-use/pull/5309 中做出了第一个贡献
* @Diwak4r 在 https://github.com/browser-use/browser-use/pull/5175 中做出了第一个贡献
* @abhay-codes07 在 https://github.com/browser-use/browser-use/pull/5204 中做出了第一个贡献
* @Karunasagar12 在 https://github.com/browser-use/browser-use/pull/5182 中做出了第一个贡献
* @Gaurav0807 在 https://github.com/browser-use/browser-use/pull/5089 中做出了第一个贡献
* @sergioperezcheco 在 https://github.com/browser-use/browser-use/pull/5264 中做出了第一个贡献
* @VenkateswarluNagineni 在 https://github.com/browser-use/browser-use/pull/5240 中做出了第一个贡献
* @chuenchen309 在 https://github.com/browser-use/browser-use/pull/5233 中做出了他们的第一个贡献
* @GautamSharma99 在 https://github.com/browser-use/browser-use/pull/5285 中做出了第一个贡献
* @ayaangazali 在 https://github.com/browser-use/browser-use/pull/5262 中做出了第一个贡献
* @LHMQ878 在 https://github.com/browser-use/browser-use/pull/5318 中做出了第一个贡献
* @shotsan 在 https://github.com/browser-use/browser-use/pull/5379 中做出了第一个贡献
* @santhreal 在 https://github.com/browser-use/browser-use/pull/5211 中做出了第一个贡献
* @wesleyzhangwq 在 https://github.com/browser-use/browser-use/pull/5401 中做出了第一个贡献
* @scmii 在 https://github.com/browser-use/browser-use/pull/5448 中做出了第一个贡献

**完整 Changelog**：https://github.com/browser-use/browser-use/compare/0.13.7...0.13.8

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`0.13.8` · 📅 发布：2026-08-16 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/0.13.8)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
