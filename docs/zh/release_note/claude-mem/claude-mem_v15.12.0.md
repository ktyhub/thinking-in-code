---
title: "claude-mem v15.12.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.12.0"
version: "v15.12.0"
published: "2026-11-07"
type: "minor"
lang: "zh"
---

# claude-mem v15.12.0

## 图片默认保留并显示在“我的作品”中

- **默认保留：** 您的代理读取或制作的屏幕截图和图像现在被保留并链接到该回合的观察结果，而不将它们发送到人工智能模型。图像推断保持关闭状态 (#5426)。
- **“保留图像”开关：**内存查看器的设置有一个新的**图像**部分。关闭**保留图像**将停止保留新图像；图像已经保留下来。你自己拯救的 `"false"` 会受到尊重 (#5426)。
- **我的作品中的画廊：**请求卡显示图像计数和前四个缩略图；请求抽屉显示每个链接的图像；任何缩略图都会打开带有键盘导航的全尺寸图库（#5427）。
- **新数据库：** 我的工作再次列出了新创建的数据库上的观察活动（#5427）。
- **您可以信赖的本地转换：** 捕获的屏幕截图现在可以在您自己的计算机上进行转换，而不会因繁忙或超时而失败。转换等待轮流进行，每次需要 20 秒，并且每个存储的副本都是有损 WebP，因此它保持较小 (#5431)。
- **云配额：** 每个所有者可以在 cmem.ai 上存储最多 25 GiB 的图像，Pro 强制执行相同的限制 (#5467)。

## 修复

- **会话：** 在查看器中删除会话后，会再次捕获同一已恢复对话中的新工作 (#5463)。
- **会话：** 工作进程重新启动后不再重播已提交的记录条目（#5321，感谢 @lamimiahmed45-droid）。
- **钩子：** Grok Build 的驼峰式钩子负载被接受（#4282，感谢@nathan-v）。
- **Hooks：** PreToolUse 内存查找的范围仅限于当前平台，因此一个工具不再获得另一个工具的观察结果（#5008，感谢 @SuperMarioYL）。
- **我的工作：** 计划的刷新保留在配置的代理上，而不是退回到另一个代理（#5245，感谢@Dev-0710）。
- **Claude CLI：** 当 `CLAUDE_CODE_PATH` 更改时，会再次找到 Claude CLI（#5460，感谢 @WhitePepperLambSoup）。
- **安全性：** `CLAUDE_MEM_DATA_DIR` 和 `CLAUDE_MEM_WORKER_HOST` 无法再通过 `POST /api/settings` 进行更改，并且 OpenClaw 重新安装会保留所有现有设置（#5147，感谢 @Wenjix）。
- **设置：** Grok Bot 意识试点代理 ID 不再作为默认值提供（#4970，感谢 @zichen0116）。
- **同步：** 积压的同步会耗尽而不是停止，并且 `projection_busy` 回复携带 `Retry-After` (#3488)。
- **同步集线器：**每个请求写入的持久对象行更少（#4424，感谢@necatisozer），并且在计算字节数时每个操作不会重新序列化页面（#4937，感谢@devkancheti4-design）。

## 也在这个版本中

- **我的工作：** 以正在发生的事情为主导，按状态对卡片进行分组并以动画形式呈现实时变化（#5365）。
- **我的工作：** 文本以所有者的语言编写，并具有选择加入的语言设置（#5156，感谢@mehmetcelik7）。
- **界面：** 选择简体中文作为工作界面（#5325，感谢 @h6rime）。
- **观察者健康状况：**更清晰的 SessionStart 配额通知 (#5134)。
- **安装程序：** 可选电子邮件和“我们如何提供帮助”问题又回来了，仅在交互式终端中询问一次；登录仅适用于 CMEM Pro (#5218)。
- **Claude 应用程序插件：** 重命名为 `cmem-pro`，带有 cmem.ai 连接器，并且不再将内存查找捕获回内存中 (#4570)。
- **提供商：** Cheapaimodel (#5158，感谢 @nicho810) 和 Obscurify.ai (#5165，感谢 @tonydavis629) OpenAI 兼容提供商的预设。
- **智能阅读：** Delphi/Pascal 支持（#4953，感谢 @nm3xyz）。
- **技能：**新的社区扫荡技能（#4374）； oh-my-issues 开始其集群盲通并添加开放 PR 通行证 (#3617)；版本碰撞技能拒绝在​​ thedotmack/claude-mem 之外运行（#45​​75，感谢 @somil14）。
- **文档：** 自述文件说观察者试验通过付款方式结账（#5087，感谢 @Iyanuoluwa007）。

**完整 changelog:** https://github.com/thedotmack/claude-mem/compare/v15.11.1...v15.12.0

---

> 📦 仓库：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · 🏷️ 版本：`v15.12.0` · 📅 发布：2026-11-07 · [查看英文原版 Release](https://github.com/thedotmack/claude-mem/releases/tag/v15.12.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
