---
title: "hypit v0.2.4"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.4"
version: "v0.2.4"
published: "2026-09-17"
type: "patch"
lang: "zh"
---

# hypit v0.2.4

## 合作伙伴网关提供商和媒体帧速率

此版本为第三方网关服务添加了四个捆绑提供程序，并修复了影响 ffmpeg 7.x 的本地媒体执行中的帧速率缺陷。

### 合作伙伴网关提供商

该发行版现在有四个提供商，为每个服务提供的已安装模型提供服务。每个都采用 API 密钥凭证并且不读取任何定价。每一个都仅映射分发已经描述的模型，在解析任何引用之前通过 `supports()` 报告每个服务的输入限制，并接受 Seedance `person-reference` 声明而不传输它们，因为这些 API 都不携带这样的字段。 (#282)

- `@hypit/provider-tokendance`，凭证 `tokendance.api-key`。 Seedance 2.0、2.0 Fast、2.0 Mini 和 2.5、Seedream 5 Lite 和 MiniMax H3，通过 Ark 和 MiniMax 协议 [TokenDance](https://tokendance.space) 文档。 MiniMax 输入通过 TokenDance 的文件 API 上传。
- `@hypit/provider-hiapi`，凭证 `hiapi.api-key`。 Seedance 2.0、2.0 Fast、2.0 Mini 和 2.5、Seedream 5 Lite、MiniMax H3、GPT Image 2、Nano Banana 2 和 Pro、Grok Imagine 视频和 1.5 Preview，每个都作为一项任务提交给 [HiAPI](https://www.hiapi.ai) 的 `POST /v1/tasks`，并带有`Idempotency-Key`，因此重试提交会返回原始任务。
- `@hypit/provider-pollo`，凭证 `pollo.api-key`。 MiniMax H3、Grok Imagine 1.5 Preview、GPT Image 2 以及 Nano Banana 2 和 Pro，通过 [Pollo AI](https://docs.pollo.ai) 的每个模型生成路径。 Pollo 不提供 Seedance 或 Seedream 模型。
- `@hypit/provider-monid`，凭证 `monid.api-key`。 Seedance 2.0、2.0 Fast、2.0 Mini 和 2.5 通过 [Monid](https://monid.ai) 的 `bytedance` 端点，并通过 Monid 工作区文件系统上传参考媒体。

[模型和部署服务](https://github.com/hypit-ai/hypit/blob/v0.2.4/docs/guide/service-partners.md) 描述了每项服务及其提供商所涵盖的内容。提供商指南和生成快速入门具有相同的列表，一旦用户命名其中一项服务，就会在服务页面上安装技能点。

### 本地媒体执行

`normalize` 和 `transform` 编译了一个精确的帧域并根据它断言编码结果，但没有告诉 ffmpeg 该帧速率是多少。两个过滤器链都以 `setpts` 结尾，这将过滤器图输出链路的帧速率标记为未知，而 `-frames:v` 限制帧计数而不建立速率。在 ffmpeg 7.x 上，编码器随后回落至 25 fps。请求高于 25 fps 的速率会产生不再符合计划的帧计数，并使操作自己的断言失败，因此无法标准化 30 fps 的项目。请求低于 25 fps 的速率会填满计数，并以错误的持续时间以 25 fps 写入容器，但没有任何报告。两个操作现在都通过了编译率，正如 `render-still-video` 已经做到的那样。 （＃284，在＃283中报告）

ffmpeg 6.1.6、8.1.2 和 9.0.1 正确导出速率并且从未受到影响。在这些版本上，编码输出在此更改之前和之后在两个编码器分支和两个输入分支上都是字节相同的。该存储库自己的 CI 在 Linux 上安装 ffmpeg 6.1.1，在 Windows 上安装 9.0.1，这就是为什么它的套件保持绿色，而缺陷对于运行 7.x 的任何人来说都是存在的。

## 合并拉取请求

|公关 |作者 |
| ---| ---|
| #282 feat(providers)：添加 TokenDance、HiAPI、Pollo 和 Monid 网关提供商 | @rponeawa |
| #284 修复（媒体执行）：将计划的帧速率传递给 ffmpeg | @rponeawa |
## 已解决的问题

第283章

## 贡献者

@rponeawa，@nickonai

## 更新

对于全局 CLI 安装：

```bash
npm install -g @hypit/hypit@0.2.4
hypit --version
```

对于项目本地安装：

```bash
npm install --save-exact @hypit/hypit@0.2.4
npm exec --no -- hypit --version
```

已安装的 Hypit Skill 通过用于安装它的工具单独更新。内部格式和逻辑模块标识符仍为 `@1`。 0.2.0 中的脚本语法没有变化。更新不会迁移或重写已保存的视频项目。

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.4` · 📅 发布：2026-09-17 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
