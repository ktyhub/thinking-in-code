---
title: "browser-use 0.13.9"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.9"
version: "0.13.9"
published: "2026-09-04"
type: "patch"
lang: "zh"
---

# browser-use 0.13.9

## 发生了什么变化
* 修复（llm）：再次将 bu-2-0 设置为 ChatBrowserUse 默认值，并在 https://github.com/browser-use/browser-use/pull/5488 中保留@sauravpanda 的迷你选择加入
* ci：删除 https://github.com/browser-use/browser-use/pull/5491 中@sauravpanda 死掉的 cloud_evals 镜像构建触发器
* 修复（文件系统）：报告 https://github.com/browser-use/browser-use/pull/5498 中的 @uczltw6 替换文件中缺少目标文本
* 修复（文件系统）：在 https://github.com/browser-use/browser-use/pull/5502 中@primorLee 生成的 PDF 中转义纯文本
* 文档：在 https://github.com/browser-use/browser-use/pull/5551 中突出显示 @MagMueller 的可重新运行的云脚本
* 文档（云）：CLI 3.0 的更新工具指南（@MagMueller 在 https://github.com/browser-use/browser-use/pull/5553 中）
* 修复（deps）：在 https://github.com/browser-use/browser-use/pull/5382 中通过 @sauravpanda 碰撞依赖版本
* 修复：https://github.com/browser-use/browser-use/pull/5563 中@DipsyHou 将 DeepSeek 默认模型更新为 deepseek-v4-flash
* 修复（llm）：停止将格式/流放入 https://github.com/browser-use/browser-use/pull/5561 中 @official-burak 的 Ollama 选项中
* 修复（deps）：通过 @green3sf 在 https://github.com/browser-use/browser-use/pull/5526 中更新易受攻击的 Click、MCP 和 pypdf 引脚
*修复（浏览器）：通过存储域清除cookie，而不是https://github.com/browser-use/browser-use/pull/5562中@MrLeit的网络
* 修复（文件系统）：在 https://github.com/browser-use/browser-use/pull/5540 中 @leilei3167 的 PDF 导出中渲染 Markdown 强调
*修复（llm）：忽略https://github.com/browser-use/browser-use/pull/5545中@ECD5A的空推理模型模式
*修复（dom）：通过https://github.com/browser-use/browser-use/pull/5541中的@UniversePeak公开clickable元素的图像上下文
* 构建：在 https://github.com/browser-use/browser-use/pull/5507 中需要 @MagMueller 的浏览器框架 0.1.10
* 修复（注册表）：用 https://github.com/browser-use/browser-use/pull/5570 中的 @LambIessz 替换元组参数内的敏感占位符
* 修复 https://github.com/browser-use/browser-use/pull/5373 中 @Soundcreates 在重新连接窗口期间 WebSocket 丢失的问题
* 文档（云）：用 https://github.com/browser-use/browser-use/pull/5578 中 @MagMueller 的 V4 替换已退役的 V1 API 示例
* 由 @sauravpanda 在 https://github.com/browser-use/browser-use/pull/5588 中将数据模型代码生成器升级到 0.75.1
* 修复：在 https://github.com/browser-use/browser-use/pull/5576 中 @aniketwaghh 从任务文本中提取的 URL 中保持平衡的尾部括号
* 文档：通过 https://github.com/browser-use/browser-use/pull/5583 中的 @MagMueller 将远程浏览器技能迁移到 CLI 3.0
* 修复：允许 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5577 中使用 pydantic 2.13
* 文档：@MagMueller 在 https://github.com/browser-use/browser-use/pull/5602 中正确的云注册信用
* 修复（浏览器）：在 https://github.com/browser-use/browser-use/pull/5475 中的 @jiffyaneesh 中尊重 BrowserProfile 中的 BROWSER_USE_HEADLESS (#5420)
* 修复(llm/google): 当 @aniketwaghh 在 https://github.com/browser-use/browser-use/pull/5597 中设置 include_system_in_user 时保留第一条用户消息
* 文档：@MagMueller 在 https://github.com/browser-use/browser-use/pull/5601 中正确的云浏览器会话价格
* 文档（云）：在 https://github.com/browser-use/browser-use/pull/5591 中添加 @MagMueller 的 API v4 技能参考
* 修复（llm）：在 https://github.com/browser-use/browser-use/pull/5605 中保留 @MagMueller 的模式关键字字段名称
* 修复（llm）：https://github.com/browser-use/browser-use/pull/5348 中@cosin2077 为人类基岩保留零 max_retries
* 修复（代理）：https://github.com/browser-use/browser-use/pull/5493 中 @JayLay0310 将 URL 否定作为整个单词进行匹配
*修复（代理）：在https://github.com/browser-use/browser-use/pull/5453中保留@oysz下载的文件路径顺序
* 修复（浏览器）：通过 @r266-tech 在 https://github.com/browser-use/browser-use/pull/5359 中将持久存储状态读取为 UTF-8
* 修复（浏览器）：在 https://github.com/browser-use/browser-use/pull/5621 中保留 @MagMueller 的默认 Chrome arg 顺序
* 通过 @XiaoHuo888-hue 在 https://github.com/browser-use/browser-use/pull/5451 添加 OrcaRouter 作为指定的 LLM 提供者
* 修复（openrouter）：验证 client 并响应 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5599 中的输入
* 通过 @MagMueller 在 https://github.com/browser-use/browser-use/pull/5650 中向代理显示预填充输入的实时值
* 修复（工具）：https://github.com/browser-use/browser-use/pull/5500 中的 @Faseeh06 将失败的选项卡切换报告为错误，而不是静默成功
* 修复（浏览器）：在 https://github.com/browser-use/browser-use/pull/5582 中支持 @IENVYshanks 在 send_keys 中添加文字
* 修复（dom）：通过 @r266-tech 在 https://github.com/browser-use/browser-use/pull/5586 中直接公开 clickable 图像的图像上下文
* 修复：https://github.com/browser-use/browser-use/pull/4599 中的 @octo-patch 在 _wait_for_cdp_url 中检测浏览器进程提前退出
* 修复（浏览器）：在 https://github.com/browser-use/browser-use/pull/5230 中 @lisa0314 重置事件总线后恢复会话处理程序
* 琐事：在 https://github.com/browser-use/browser-use/pull/5666 中发布 0.13.9 和 @MagMueller 的浏览器线束 0.1.12

## 新贡献者
* @uczltw6 在 https://github.com/browser-use/browser-use/pull/5498 中做出了第一个贡献
* @primorLee 在 https://github.com/browser-use/browser-use/pull/5502 中做出了第一个贡献
* @DipsyHou 在 https://github.com/browser-use/browser-use/pull/5563 中做出了他们的第一个贡献
* @official-burak 在 https://github.com/browser-use/browser-use/pull/5561 中做出了第一个贡献
* @green3sf 在 https://github.com/browser-use/browser-use/pull/5526 中做出了第一个贡献
* @MrLeit 在 https://github.com/browser-use/browser-use/pull/5562 中做出了第一个贡献
* @leilei3167 在 https://github.com/browser-use/browser-use/pull/5540 中做出了第一个贡献
* @ECD5A 在 https://github.com/browser-use/browser-use/pull/5545 中做出了他们的第一个贡献
* @UniversePeak 在 https://github.com/browser-use/browser-use/pull/5541 中做出了第一个贡献
* @LambIessz 在 https://github.com/browser-use/browser-use/pull/5570 中做出了第一个贡献
* @Soundcreates 在 https://github.com/browser-use/browser-use/pull/5373 中做出了他们的第一个贡献
* @aniketwaghh 在 https://github.com/browser-use/browser-use/pull/5576 中做出了第一个贡献
* @jiffyaneesh 在 https://github.com/browser-use/browser-use/pull/5475 中做出了第一个贡献
* @cosin2077 在 https://github.com/browser-use/browser-use/pull/5348 中做出了第一个贡献
* @JayLay0310 在 https://github.com/browser-use/browser-use/pull/5493 中做出了他们的第一个贡献
* @oysz 在 https://github.com/browser-use/browser-use/pull/5453 中做出了第一个贡献
* @XiaoHuo888-hue 在 https://github.com/browser-use/browser-use/pull/5451 中做出了第一个贡献
* @Faseeh06 在 https://github.com/browser-use/browser-use/pull/5500 中做出了他们的第一个贡献
* @IENVYshanks 在 https://github.com/browser-use/browser-use/pull/5582 中做出了第一个贡献
* @octo-patch 在 https://github.com/browser-use/browser-use/pull/4599 中做出了第一个贡献
* @lisa0314 在 https://github.com/browser-use/browser-use/pull/5230 中做出了第一个贡献

**完整 Changelog**：https://github.com/browser-use/browser-use/compare/0.13.8...0.13.9

---

> 📦 仓库：[browser-use/browser-use](https://github.com/browser-use/browser-use) · 🏷️ 版本：`0.13.9` · 📅 发布：2026-09-04 · [查看英文原版 Release](https://github.com/browser-use/browser-use/releases/tag/0.13.9)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
