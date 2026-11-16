---
title: "hyperframes v0.9.56"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.56"
version: "v0.9.56"
published: "2026-11-16"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.56

# 超帧 v0.9.56

发布于 2026 年 11 月 16 日。

Studio 的预览和本地服务器现在仅适用于它们自己的页面。 CLI 将其缓存、历史记录和恢复保留在项目内。 arm64 Lambda 映像仅提供经过审查的 ffmpeg 构建，并且大型预览的构建速度更快。

## 修复

- **Studio Server：** 合成文件服务器不再提供凭证或工具状态文件（[014326b40](https://github.com/heygen-com/hyperframes/commit/014326b40bf22bebb77a5cf08a50d5b0968c112e)、[#7889](https://github.com/heygen-com/hyperframes/pull/7889)）。
- **Studio Server：** Lint 和探测仅针对来自 Studio 自己页面的请求运行（[bbac8900e](https://github.com/heygen-com/hyperframes/commit/bbac8900ea9201dca8aacdd17387e3275a9e6d84)、[#7894](https://github.com/heygen-com/hyperframes/pull/7894)）。
- **Studio Server：** 历史记录还原保留在项目内部，并且仅使用完整副本（[478313ba0](https://github.com/heygen-com/hyperframes/commit/478313ba0e674d51c3b307afa862de8dd87afcf9)、[#7902](https://github.com/heygen-com/hyperframes/pull/7902)）。
- **Studio：** 将回放作品用于其服务器不透明的预览（[1e542956d](https://github.com/heygen-com/hyperframes/commit/1e542956d978ceb6be9e50c8396ffdcf2c0fc433)、[#7815](https://github.com/heygen-com/hyperframes/pull/7815)）。
- **Studio：** 预览帧将沙箱原点保留在其主机集（[b650d0d19](https://github.com/heygen-com/hyperframes/commit/b650d0d198bae4dfd440ba2bad32b4a2351862aa)、[#7886](https://github.com/heygen-com/hyperframes/pull/7886)）。
- **Studio：** 当前套牌仅在其自己的站点中打开，并且预览仅读取其自己的框架的消息（[4067efc45](https://github.com/heygen-com/hyperframes/commit/4067efc454382463979f0625e8e031a73ff05b9d)、[#7877](https://github.com/heygen-com/hyperframes/pull/7877)）。
- **核心：** 运行时桥在对其进行操作之前会检查每个控制消息（[97d8f26e7](https://github.com/heygen-com/hyperframes/commit/97d8f26e713987cbb9f2ba6cb7d45eb3481a9093)、[#7892](https://github.com/heygen-com/hyperframes/pull/7892)）。
- **CLI：** `render --docker` 将主机的页面网络限制保留在容器内（[5d8605eb8]（https://github.com/heygen-com/hyperframes/commit/5d8605eb8e56fa6de714482e99c9f63cd258581a），[#7890]（https://github.com/heygen-com/hyperframes/pull/7890））。
- **CLI:** `preview --stop` 仅停止系统报告持有端口的进程（[ace8a78dc](https://github.com/heygen-com/hyperframes/commit/ace8a78dcc14499b82b077301bcc4633c99e66c6)、[#7882](https://github.com/heygen-com/hyperframes/pull/7882)）。
- **CLI：** 检查缓存仅保存为项目记录，而不是通过链接文件（[7801e3ff3]（https://github.com/heygen-com/hyperframes/commit/7801e3ff346f65d994ef64d9c5d067f3dcd52b87），[#7884]（https://github.com/heygen-com/hyperframes/pull/7884））。
- **CLI：** 检查从项目文件夹读取的历史回合 ID 并编码发送（[6efa6b635](https://github.com/heygen-com/hyperframes/commit/6efa6b63536970758b56c210d12ec581c4e82261)、[#7883](https://github.com/heygen-com/hyperframes/pull/7883)）。
- **CLI：** 追赶仅列出应用程序在交接后添加的转弯（[0f23f40f8]（https://github.com/heygen-com/hyperframes/commit/0f23f40f8b06761a57922c85721209d6c4943f25），[#7874]（https://github.com/heygen-com/hyperframes/pull/7874））。
- **CLI：** 项目下文件夹中的接收文件记录对于渲染计数（[1c159c550](https://github.com/heygen-com/hyperframes/commit/1c159c550d27d267a9ee8d0d6759691147cd8a1d)、[#7900](https://github.com/heygen-com/hyperframes/pull/7900)）。
- **CLI：** 媒体用途仅复制其捆绑索引名称的声音效果（[ed93a1312]（https://github.com/heygen-com/hyperframes/commit/ed93a131251a1ae6c21fd3908c86f9972765d5c6），[#7895]（https://github.com/heygen-com/hyperframes/pull/7895））。
- **媒体使用：** 本地模型从项目外部的文件夹开始（[756c2c6c1](https://github.com/heygen-com/hyperframes/commit/756c2c6c1b3446873e0e5547f1f5c02697293acf)、[#7888](https://github.com/heygen-com/hyperframes/pull/7888)）。
- **引擎：** 仅当其文件与固定版本匹配时才使用缓存的浏览器（[56a2d0c53](https://github.com/heygen-com/hyperframes/commit/56a2d0c53ff8d3353ad0e0c56d518e8862484ac4)、[#7865](https://github.com/heygen-com/hyperframes/pull/7865)）。
- **引擎：** 时间轴帧预测保留在渲染帧内（[f5a74a567](https://github.com/heygen-com/hyperframes/commit/f5a74a567884443e136762a39b2c0bac1a9f43d9)、[#7885](https://github.com/heygen-com/hyperframes/pull/7885)）。
- **引擎：** 每个超集提取都在其自己的文件夹中工作（[a4139e9ea](https://github.com/heygen-com/hyperframes/commit/a4139e9ead02bea455feb3409c0076d2de050896)、[#7901](https://github.com/heygen-com/hyperframes/pull/7901)）。
- **解析器：** 在任何输入上读取画布脚手架的宽度和高度都需要同样短的时间（[b856a1d63](https://github.com/heygen-com/hyperframes/commit/b856a1d63fed7443bcdad5b2246983e33f7e3aac)、[#7873](https://github.com/heygen-com/hyperframes/pull/7873)）。
- **Lint：** 特工制作的场景和音效保留在一条时间线通道上（[98208241e](https://github.com/heygen-com/hyperframes/commit/98208241e7800122607db651d961bcc26a724077)、[#7775](https://github.com/heygen-com/hyperframes/pull/7775)）。
- **技能：** 独立安装也可以通过其启动器运行 CLI（[3fc3050bc](https://github.com/heygen-com/hyperframes/commit/3fc3050bc38a41f76a39ab50e075bdbf13120418)、[#7879](https://github.com/heygen-com/hyperframes/pull/7879)）。
- **AWS Lambda：** 仅当版本与在其构建旁边提交的摘要匹配时（[d9488119b](https://github.com/heygen-com/hyperframes/commit/d9488119beb6470015fcfb9e21f90a384baf822c)、[#7872](https://github.com/heygen-com/hyperframes/pull/7872)），才会发布arm64 ffmpeg。

## 性能

- **核心：** 预览版本会读取一个大页面，而无需在每次传递时复制它（[082d63683](https://github.com/heygen-com/hyperframes/commit/082d63683f8b599c35fda3567ca1ed0659a30cac)、[#7878](https://github.com/heygen-com/hyperframes/pull/7878)）。
- **生产者：** 编译和渲染遥测标签扫描所需的时间与页面大小同步（[82fdf406c]（https://github.com/heygen-com/hyperframes/commit/82fdf406c43851ac75a82a0d49aa944cdc955254），[#7896]（https://github.com/heygen-com/hyperframes/pull/7896））。
## 内部

- **发布：** 每个 npm 发布都会等待 npm-publish 批准（[a54de748e](https://github.com/heygen-com/hyperframes/commit/a54de748ee3d89d05ff8c0b0bedcf65c8714b661)、[#7870](https://github.com/heygen-com/hyperframes/pull/7870)）。
- **发布：** 预构建的 tarball 从不运行发布提交中的代码的作业中发布（[af0560c85](https://github.com/heygen-com/hyperframes/commit/af0560c8598a5196f51bb45baf406ae50a213c6b)、[#7869](https://github.com/heygen-com/hyperframes/pull/7869)）。
- **CI：** 发布工作流程仅针对主程序运行（[7bd6b9daf](https://github.com/heygen-com/hyperframes/commit/7bd6b9daf89faf95b6ed46dbd6b84ec8c5de1c00)、[#7875](https://github.com/heygen-com/hyperframes/pull/7875)）。
- **CI：** 测试装置不再看起来像真正的 HeyGen 钥匙，CI 拒绝了这样的钥匙（[5dc3b336a](https://github.com/heygen-com/hyperframes/commit/5dc3b336aa186f7e2e019ee8039f195befe8383a)、[#7876](https://github.com/heygen-com/hyperframes/pull/7876)）。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.55...v0.9.56

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.56` · 📅 发布：2026-11-16 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.56)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
