---
title: "hermes-agent v0.22.2"
project: "hermes-agent"
repo: "NousResearch/hermes-agent"
tag: "v0.22.2"
version: "v0.22.2"
published: "2026-10-15"
type: "patch"
lang: "zh"
---

# hermes-agent v0.22.2

#爱马仕代理v0.22.2

**发布日期：** 2026 年 10 月 15 日

v0.22.1 是根据错误的提交构建的。它提供了未发布的网关工作，并且 Microsoft Store 应用程序可以坚持“正在连接”。 0.22.2 是 0.22.1 的预期版本。

> **已知问题：** 在 0.22.1 网关下运行的会话无法在 0.22.2 中删除。

<!-- HERMES_BUILDS_TABLE -->

## 亮点

- **网关在重新启动后再次启动。** 重新启动后，Linux 可以将早期的 PID 交给不相关的进程，网关可能会将其误认为是正在运行的网关，因此受监督的网关（systemd、launchd、Docker）拒绝启动。 Hermes 现在会记录它启动的启动情况，当它无法判断时，它会询问主机锁，只有实时网关才拥有该主机锁。 （[#138594](https://github.com/NousResearch/hermes-agent/pull/138594)，修复[#133744](https://github.com/NousResearch/hermes-agent/issues/133744)）
- **长本地模型轮流在笔记本电脑上生存。** 本地请求始终以提示读取进度进行流式传输（在状态行中显示），停顿计时器会跳过机器休眠的时间，恢复的本地服务器会进行另一次尝试，而不是在以后的每条消息中都失败的断路器，并且当服务器仍在读取长对话时，压缩不再超时。在 Windows 统一内存计算机上，模型启动和提示缓存的大小可用于释放内存。 ([#138560](https://github.com/NousResearch/hermes-agent/pull/138560))

以下是自 v0.22.0 以来 0.22 发布系列中的所有内容：0.22.1 原本要发布的修复程序以及上面的两个修复程序。仅在 `main` 上进行的工作随 v0.23.0 一起提供。

## ✨ 特点

- **发布：** 将 Microsoft Store 捆绑包拆分为自己的 Windows 商店通道 ([`f9d8a740`](https://github.com/NousResearch/hermes-agent/commit/f9d8a74035101d95ef2a622fb01b2f9bbc34f0ef)) — @ethernet8023
- **代理：** 添加 nemotron super 3.5 默认参数 ([`c59d2994`](https://github.com/NousResearch/hermes-agent/commit/c59d299408e924c3682619e7d9d368891d4b709e)) — @elisam0
- **Cli:** 将 nemotron 添加到 NVIDIA NIM 默认型号列表 ([`cc55270e`](https://github.com/NousResearch/hermes-agent/commit/cc55270ec033729ed04f510fba3737aa65e027a7)) — @elisam0
- **Cli：** 在模型选择器列表的顶部添加精选模型列表 ([`e6835fd3`](https://github.com/NousResearch/hermes-agent/commit/e6835fd3cb3bb399ce06cac5356c36226483b889)) — @elisam0
- **发布：** 选择稳定版本构建并使用通道进行测试的内容 ([`36a8ee18`](https://github.com/NousResearch/hermes-agent/commit/36a8ee18cd77b05b42316b60a5e2809587e28e70)) — @ethernet8023
- **插件目录：** 添加 hermes-lang-ko — 韩语桌面语言包 ([`e5f49b6a`](https://github.com/NousResearch/hermes-agent/commit/e5f49b6a17a9bd623da961d86b779d523a09227c)) — @dandacompany
- 插件目录：添加 hermes-lang-pt-br （巴西葡萄牙语语言包）（[`0169e80c`](https://github.com/NousResearch/hermes-agent/commit/0169e80c7dbb6d2d2a33126310f5c5c075e1952a)） — @StudioCodeAI
- 贡献者：添加 2867297362mjb-sketch 电子邮件映射 ([`9ab40641`](https://github.com/NousResearch/hermes-agent/commit/9ab406415ca184c4f9b64b32cf5ced417babb2f2)) — @2867297362mjb-sketch
- 插件目录：添加 teamorouter（TeamoRouter 模型提供商）（[`ef223406`](https://github.com/NousResearch/hermes-agent/commit/ef223406225638a73e8f9c1536a734bb7addfe18)） — @2867297362mjb-sketch
- **插件目录：** 添加作者提要 ([`5f6d6836`](https://github.com/NousResearch/hermes-agent/commit/5f6d6836cc80051e297936b4467a91d7c4925039)) — @TakeshiTGAL
- **插件目录：** 将辅助分类帐提升至 1.4.0 ([`6048066e`](https://github.com/NousResearch/hermes-agent/commit/6048066e22f3019505d04caeab29577c803f4d71)) — @olric3015
- **插件目录：** 添加等待分类帐目录卡 ([`77cb58e5`](https://github.com/NousResearch/hermes-agent/commit/77cb58e56ac47d5e3aa1ee720d4bcd7a8c6a8513)) — @olric3015
- **插件目录：** 添加等待分类帐 ([`97e65322`](https://github.com/NousResearch/hermes-agent/commit/97e65322efebd1b8dc07d33634b685df078d5858)) — @olric3015
- 社区插件：lightningai + lightingai-rate-limit ([`07515466`](https://github.com/NousResearch/hermes-agent/commit/075154660043fe5656ec3ca48c93d6a6f9755494)) — @dinosauria123
- 目录：在经过审查的确切源引脚处添加 Hermes AAC 0.1.0 ([`7c9adda8`](https://github.com/NousResearch/hermes-agent/commit/7c9adda81a2d152ba4f63fe6aecf59385dfc3284)) — @TREE-Ind
- **插件目录：** 添加 openinvest ([`b6e86101`](https://github.com/NousResearch/hermes-agent/commit/b6e86101c29593785c81eb8d380e2faef2530d5f)) — @longsizhuo
- 目录：添加 Hermes-agent-mixer (v0.2.0 @ 04c4e13) ([`2e7e3859`](https://github.com/NousResearch/hermes-agent/commit/2e7e385959dc65ceb3053724724d8a5f526c675d)) — @Sahil-SS9
- **插件：** 将 Kumiho Memory 移动到内存目录架 ([`46f95e08`](https://github.com/NousResearch/hermes-agent/commit/46f95e086379a2d701595b981cb94733fd060384)) — @kaveone
- **发布：**从默认分支（[`667e6639`]（https://github.com/NousResearch/hermes-agent/commit/667e6639af61d827eb5be4764e6b71aa7f5d88ac））调度稳定版本 - @ethernet8023

## 🔧 改进
- **代理：** 将 Mistral 工具 id 规则保留在其唯一消费者旁边 ([`c5fc0958`](https://github.com/NousResearch/hermes-agent/commit/c5fc0958b49f415041c7f356c8bdf9f914037e89)) — @kshitijk4poor
- **配置文件：**构建一次种子路由视图；也展开 `enabled` ([`311155fa`](https://github.com/NousResearch/hermes-agent/commit/311155fade43d1993ea968909a2ad36762345bbc)) — @kshitijk4poor
- **配置文件：** 简化模型种子并修剪其测试 ([`d9dfb124`](https://github.com/NousResearch/hermes-agent/commit/d9dfb1243b20e72df6ef66782e3c7ad192e7fcca)) — @kshitijk4poor
- 更新 nemotron 超级 3.5 名称 ([`3224993a`](https://github.com/NousResearch/hermes-agent/commit/3224993af1860ffdb587e491560f32bf845c82ad)) — @elisam0
- **Hermes_cli:** 更新 nemotron 3.5 名称 ([`108ae4e7`](https://github.com/NousResearch/hermes-agent/commit/108ae4e7cd4c89a95545b1cdab3e1b72ce220755)) — @elisam0
- 目录：在没有上游自我更新检查的情况下重新固定到构建（[`6462f64a`]（https://github.com/NousResearch/hermes-agent/commit/6462f64aefba9271f9977edcd430d61141d4d760）） - @slchris
- 目录：将模型路由器更新为 v0.4.3 本机首选项 ([`6a097ee9`](https://github.com/NousResearch/hermes-agent/commit/6a097ee98d4c96eafa9ef76c98c3c39d6d65a0da)) — @meta Mindu

## 🐛 错误修复

- **网关：** 无法比较的记录启动纪元是无法证明的 ([`79b3b724`](https://github.com/NousResearch/hermes-agent/commit/79b3b7243535d02c785a4ffac6ae1cb9fa54f47b)) — @ethernet8023
- **本地：**在笔记本电脑上保持本地模型长时间运行（[`518ce272`]（https://github.com/NousResearch/hermes-agent/commit/518ce272b922ab24048696b3b2d322633ef7e6d1）） - @emozilla
- **网关：**只读主机记录检查永远不会创建锁定文件（[`91e63f84`]（https://github.com/NousResearch/hermes-agent/commit/91e63f843d7656e307fc2c7608d70570f5cf24a3）） - @kshitijk4poor
- **网关：**让主机锁决定看起来比此启动更旧的旧记录 ([`4d984677`](https://github.com/NousResearch/hermes-agent/commit/4d984677b655fe617a48acf159c90c072cfa3ccd)) — @ethernet8023
- **网关：**锚定启动时间上的旧主机记录检查，而不是实时 create_time ([`5b416e42`](https://github.com/NousResearch/hermes-agent/commit/5b416e423ba8c61667c09afbe4b91be3e07d4b0b)) — @ethernet8023
- **网关：** 从主机集合点活跃度中删除 argv 身份 ([`c7fa3cbf`](https://github.com/NousResearch/hermes-agent/commit/c7fa3cbfaa67c26842e26e5e3fc94c03f7895875)) — @sin5ddd
- **网关：**拒绝仅与开始刻度匹配的回收PID ([`7934442e`](https://github.com/NousResearch/hermes-agent/commit/7934442e567850c51b2f00a03d1261dfcb336f53)) — @sin5ddd
- **Tui:** 在新配置文件中保留 ${VAR} 裸自定义端点作为参考 ([`dd2db134`](https://github.com/NousResearch/hermes-agent/commit/dd2db134920ad4a2224c483c6d2cf7725dd7ee79)) — @kshitijk4poor
- **Tui:** 新的配置文件继承了裸 `custom` 启动模型及其端点 ([`463d4019`](https://github.com/NousResearch/hermes-agent/commit/463d40192d92805d2139c2f63e481bffa2151154)) — @kshitijk4poor
- **发布：** 仅适用于商店的 Windows 版本没有签名变量； Store-plus-macOS 只记录 macOS ([`a8cc19eb`](https://github.com/NousResearch/hermes-agent/commit/a8cc19ebfdc24fa3534af50346d250f2a71dfa8e)) — @ethernet8023
- **代理：** 保持 Mistral 路线上配对的复合工具 ID ([`0c1bfb7d`](https://github.com/NousResearch/hermes-agent/commit/0c1bfb7dfb477f1583231284f6dce7a363ce9bf5)) — @kshitijk4poor
- **代理：** 在 Mistral 看到分割工具 ID 之前重写它们 ([`b33ed359`](https://github.com/NousResearch/hermes-agent/commit/b33ed35968f00896e093fa41735af7c108e6bead)) — @xxxigm
- **发布：** 当没有收据时，macOS 会冒烟 ([`f546ea2f`](https://github.com/NousResearch/hermes-agent/commit/f546ea2f1d9bbee87d42041da45d3e5ca36d1d3c)) — @ethernet8023
- **Install-e2e:** 保留捆绑的 Windows 进程阵列 ([`6db1934d`](https://github.com/NousResearch/hermes-agent/commit/6db1934d0537c5b9676d46d0641762acc4f665e5)) — @Oceanswave
- **配置文件：** 在播种配置文件时匹配环境引用的端点名称 ([`7b755ed5`](https://github.com/NousResearch/hermes-agent/commit/7b755ed5195a9379871c8d35ecc5e56c274148a5)) — @kshitijk4poor
- **配置文件：** 合并时删除每个相同身份的目标条目 ([`9a9a6e43`](https://github.com/NousResearch/hermes-agent/commit/9a9a6e43e4c20c162c60efdbc99897feab42cb41)) — @kshitijk4poor
- **配置文件：** 按照运行时合并时的方式匹配端点标识 ([`ef57cbd9`](https://github.com/NousResearch/hermes-agent/commit/ef57cbd94613a96191d14f2e1dc8de17c7bbd365)) — @kshitijk4poor
- **配置文件：** 合并端点种子时保留无 URL 的目标条目 ([`2aa469f7`](https://github.com/NousResearch/hermes-agent/commit/2aa469f76c189c402a5595890bbcc9b18bcab775)) — @kshitijk4poor
- **配置文件：**继承的端点不会被配置文件自己的条目遮蔽（[`ac0b63af`]（https://github.com/NousResearch/hermes-agent/commit/ac0b63afacabad685dff8d1101ebce574565b92c）） - @kshitijk4poor
- **配置文件：** 从环境引用的提供程序中选择种子端点 ([`c85302a2`](https://github.com/NousResearch/hermes-agent/commit/c85302a269c8fe927ace7ef806e8a3f0af2e2cb4)) — @kshitijk4poor
- **配置文件：** 在模型种子中保留裸露的自定义提供程序调整 ([`424aa90f`](https://github.com/NousResearch/hermes-agent/commit/424aa90f22fb1083d2811fdac80b5e817cdc6b66)) — @kshitijk4poor
- **配置文件：**重用命名提供程序查找，无需凭据读取（[`c8a777ff`]（https://github.com/NousResearch/hermes-agent/commit/c8a777ffc2b3b71082da8d000e14d680c086d7df）） - @helix4u
- **配置文件：** 将模型种子与提供者分辨率对齐 ([`5fee8d77`](https://github.com/NousResearch/hermes-agent/commit/5fee8d77bf91ea2e34817817334f98fe93a5b8f6)) — @helix4u
- **配置文件：**继承规范和遗留自定义端点（[`2d3e75aa`]（https://github.com/NousResearch/hermes-agent/commit/2d3e75aab02f044000110137a0503b5fa2114367）） - @helix4u
- 从 CDN 阻止消息中删除 VPN/代理建议 ([`300228d2`](https://github.com/NousResearch/hermes-agent/commit/300228d24c593f779055204753921fbe9a2163c5))
- 将 no-cf-cache-status 块信号范围限定到我们的 R2 主机；保持429s ([`ec5fa1e4`](https://github.com/NousResearch/hermes-agent/commit/ec5fa1e437a8f653fb74048fbc0315f962c1014a))
- 命名 CDN 防火墙块，而不是裸露的 HTTP 403 (#128295) ([#128295](https://github.com/NousResearch/hermes-agent/pull/128295))
- **发布：** termux-only 声明完成，部分发布保留共享下载页面 ([`6743ab71`](https://github.com/NousResearch/hermes-agent/commit/6743ab711a2f354210ba5345aa0a39c551d5c4bc)) — @ethernet8023
- **Ci:** 打包更新接受重试连接重置的下载 ([`db4a6a9e`](https://github.com/NousResearch/hermes-agent/commit/db4a6a9e264e4e236ab06db04bba009eb8154c17)) — @ethernet8023
- **目录：** 在维护者审核后重新固定 Agent Mixer ([`4297a692`](https://github.com/NousResearch/hermes-agent/commit/4297a692d9570e039aa8c7bfde900ffca420eaff)) — @Sahil-SS9
- Pin 活动 v0.2.1 公共凭证路线 ([`3dac1f07`](https://github.com/NousResearch/hermes-agent/commit/3dac1f07d59f7f300f6f3433cef1bf8966b763c4)) — @hassan-kamel
- **插件目录：** 将 jp-egov-law 更新为 f1dd47e ([`c029046d`](https://github.com/NousResearch/hermes-agent/commit/c029046d7c87635833db1c1508af3e4f812f3c6a)) — @TakeshiTGAL
- **插件目录：** 将 switchbot-control 更新为 d0e6f77 ([`c4bf61b1`](https://github.com/NousResearch/hermes-agent/commit/c4bf61b126a60172d2598b923fd08b1d60b1e84f)) — @TakeshiTGAL
- **Install-e2e:** Windows 打包应用提要提供字节范围 ([`1f6c02c0`](https://github.com/NousResearch/hermes-agent/commit/1f6c02c07c697026888f1c66e634534fa2aae358))
- **Pm:** 重新合并由无种子图像标记的卷上的 uv 缓存种子 ([`1226894b`](https://github.com/NousResearch/hermes-agent/commit/1226894bf9bd0e9067f8c040a3ff32a3c800483e)) — @ethernet8023
- **发布：**发布取代了稳定头而不是仅创建（[`df8c3ca5`]（https://github.com/NousResearch/hermes-agent/commit/df8c3ca54e7dca3b907544b2d5bedfb1987a8d93））
- **发布：**通过使用控制器提交或取消推送来保持主系统的稳定运行（[`0dbd96ab`]（https://github.com/NousResearch/hermes-agent/commit/0dbd96ab7026157f2d43bf2aa73aad5efb818910）） - @ethernet8023
- **Pm:** 也为无版本可构建插件成员推出一个版本 ([`3d8dfc1d`](https://github.com/NousResearch/hermes-agent/commit/3d8dfc1da262e3f9cba23c091f8ead1082ed68d7)) — @ethernet8023
- **Pm:** 不要在声明其动态的成员上标记 project.version ([`2a10164c`](https://github.com/NousResearch/hermes-agent/commit/2a10164cd56fa1b9a46f036e04a4fc53a19426cd)) — @Ieqzya
- **Pm:** 为生成的虚拟工作空间成员提供一个project.version ([`357986e5`](https://github.com/NousResearch/hermes-agent/commit/357986e589c01f154adbdeba31e8d47a8e0cac09)) — @Ieqzya
- **Pm:** 当该步骤失败时，在不进行字节码编译的情况下重试同步 ([`10619939`](https://github.com/NousResearch/hermes-agent/commit/106199392a1818b390ad5440a556fadd65fc8bb2)) — @smfworks
- **Deps:** 碰撞 httpx2/httpcore2 2.7.0 -> 2.12.0 用于审计建议 ([`bc8545bd`](https://github.com/NousResearch/hermes-agent/commit/bc8545bd1abec63bb69a6dc464ed62ae95d224bc)) — @guthixboss1
- **Doctor：** 停止将根 npm 审核行错误标记为代理浏览器 ([`7b1dc974`](https://github.com/NousResearch/hermes-agent/commit/7b1dc974afc9262824344423eca3c7c7b9b971d9)) — @chelsealong
- **医生：**说重新创建相同的 Docker 图像并不能修复 npm 的发现 ([`dee35e1d`](https://github.com/NousResearch/hermes-agent/commit/dee35e1d536a80bad600333d0842e9c7409b16ff)) — @ethernet8023
- **医生：** 描述完整工作区 npm 审核范围 ([`b9dda06b`](https://github.com/NousResearch/hermes-agent/commit/b9dda06bbf6d08cca8112fbbbcf631abc06b241a)) — @dwaxe
- **医生：** 澄清 Docker npm 审计补救措施 ([`e21caa27`](https://github.com/NousResearch/hermes-agent/commit/e21caa27b75a880536ac3429f70c356ece19a330)) — @KoNit-K
- **部门：** 使 WhatsApp 桥锁突破其 npm 审核结果 ([`231cb757`](https://github.com/NousResearch/hermes-agent/commit/231cb757a4607e6b44e13c154696e869fd959102)) — @ethernet8023
- **Deps:** 登陆 source-map-js 1.2.2 并将工作区引脚同步到覆盖 ([`f57d12eb`](https://github.com/NousResearch/hermes-agent/commit/f57d12ebd4e6fe67485dcaee13db4375a1114710)) — @ethernet8023
- **部门：** 碰撞固定的 npm 软件包以清除 npm 审计结果 ([`732f0f17`](https://github.com/NousResearch/hermes-agent/commit/732f0f1769313828468161ad387ad399033bd0ba)) — @sajidhaleem
- **Windows：** packaged-npx 安装失败降级为普通 npx；有效负载 venv 必须是真实的 ([`84e2250b`](https://github.com/NousResearch/hermes-agent/commit/84e2250b1065ce7637553b94423fffa275a3dd72)) — @ethernet8023
- **Docker:** 将构建的 uv 缓存发送到 PM 种子路径 ([`f4e70b9d`](https://github.com/NousResearch/hermes-agent/commit/f4e70b9d843c2580a9a56de357baa6fa368d089d)) — @ethernet8023
- **发布：**再次发布最终的 vX.Y.Z Docker 标签 ([`c1100232`](https://github.com/NousResearch/hermes-agent/commit/c11002329bac69df3f1e5fefbef5232c804ec599)) — @ethernet8023
- **Pm:** PATH 上的 npm 是固定的 npm，而不是捆绑在节点内的副本 ([`8d3b5ab5`](https://github.com/NousResearch/hermes-agent/commit/8d3b5ab54452daaa7c848aba396a9cbdfcd50c3b)) — @ethernet8023
- **Windows：** 没有要复制的节点的 MSIX 在其打包节点上运行 npx MCP 服务器 ([`8ef7654b`](https://github.com/NousResearch/hermes-agent/commit/8ef7654bf53e76a4121f877b3acace56c367707d)) — @ethernet8023
- **Windows：** MSIX 终端和 MCP 子项获取在包外复制的节点、npm 和 python ([`c7abf4fb`](https://github.com/NousResearch/hermes-agent/commit/c7abf4fb728630bf5425cd5542011bc5423cdc6c)) — @ethernet8023
- **终端：** 用户自己的工具在终端中位于 Hermes 之前 ([`162b457c`](https://github.com/NousResearch/hermes-agent/commit/162b457c8e2a24ccc8041fba4ce9fb2c77b77a96)) — @ethernet8023
- **搜索：**本地文件搜索运行 Hermes 的固定 ripgrep，而不是 PATH 上的第一个 rg ([`9b4710b8`](https://github.com/NousResearch/hermes-agent/commit/9b4710b829ffb2d7660c5f7cdb134cc0dfe86a03)) — @ethernet8023
- **终端：**从子 PYTHONPATH 中剥离密封有效负载的 venv ([`671996b1`](https://github.com/NousResearch/hermes-agent/commit/671996b152e6b45953e0c539c4f8482d89b3f335)) — @ethernet8023

## 📚 文档

- **代理：** 使用已发布的型号名称 Nemotron 3.5 Super VL ([`79651b71`](https://github.com/NousResearch/hermes-agent/commit/79651b71bd56efd76d06f3de1df64dde09b58ff3)) — @j-nolan
- **代理：** 命名指导块并删除不受支持的声明 ([`ba498735`](https://github.com/NousResearch/hermes-agent/commit/ba498735a09b896596ab750270434a0705d0b047)) — @j-nolan
- **特工：**请注意，引导块在 Nemotron 上进行了测试，没有效果 ([`2b57b0db`](https://github.com/NousResearch/hermes-agent/commit/2b57b0dbe8431cd9688cce1efe6e21543b4ccfbc)) — @j-nolan
- **提供商：** 改写内容 ([`4f8df7e1`](https://github.com/NousResearch/hermes-agent/commit/4f8df7e14d0f75a9ed44482dbae218648b40ac96)) — @nv-pberard
- **Env:** 将 NVIDIA NIM 添加到 .env 示例 ([`3dd96101`](https://github.com/NousResearch/hermes-agent/commit/3dd961013c57398b4ba42d16f5bcc3772baa0701)) — @elisam0
- **提供商：** 使用本地 NIM 的非云示例密钥 ([`da463310`](https://github.com/NousResearch/hermes-agent/commit/da463310b1e31d8690b1aac6d3701798bb36a06e)) — @rroverin
- **提供商：** 将 NVIDIA NIM 示例更新为 Nemotron 3.5 Super VL ([`c5bab4af`](https://github.com/NousResearch/hermes-agent/commit/c5bab4afdf39de0062f8a2c1964556a5875c72e7)) — @rroverin
- 本地模型在 macOS、Windows 和 Linux 上默认处于启用状态 ([`1e8bf3ee`](https://github.com/NousResearch/hermes-agent/commit/1e8bf3ee46f60987799b2ac54ce6e73630741029))

## 🧪 测试

- **代理：** 在线路上引脚 Mistral 的 9 字符工具 ID ([`9a90a825`](https://github.com/NousResearch/hermes-agent/commit/9a90a825022e0283f0e4c339e4ca2f6e3e09454c)) — @xxxigm
- **配置文件：**固定无 URL 和禁用条目的相同身份驱逐 ([`0f447876`](https://github.com/NousResearch/hermes-agent/commit/0f447876cab9df48b225172cf167b3254b06f1a5)) — @kshitijk4poor
- **配置文件：** 固定模型种子仅复制选定的端点 ([`29db211b`](https://github.com/NousResearch/hermes-agent/commit/29db211b48c52ac248d5ab38af6a02dc466ed552)) — @kshitijk4poor
- **Agent:** 添加推理超时默认测试 ([`73a07104`](https://github.com/NousResearch/hermes-agent/commit/73a07104e9ede6f6cecdc4d6b9735dc2ec2c2d85)) — @elisam0
- **中继：** 当缓冲流时，OpenAI-stream e2e 不再自死锁 ([`6e84ce66`](https://github.com/NousResearch/hermes-agent/commit/6e84ce66fb577ceeaf43a1e2da773e70609953d2))
- **Pm：** 一项流同步测试涵盖了字节码编译重试 ([`7f21aad1`](https://github.com/NousResearch/hermes-agent/commit/7f21aad154b1573f08c450d6e055bf101c4d2c8e)) — @ethernet8023
- **Deps：**如果 httpx2 pin 或锁条目低于 2.12.0 ([`3ca10d88`](https://github.com/NousResearch/hermes-agent/commit/3ca10d881c388201e476ed05505afb3197306e35))，则构建失败 — @jarvistvil
- **博士：** 将根行标签测试指向 staged-npm 接缝 ([`40441695`](https://github.com/NousResearch/hermes-agent/commit/4044169558432a49d3e8bdda388d458f93149183)) — @ethernet8023
- **Pm:** 将解析棘轮中的打包 npx 节点查找列入允许列表 ([`c4f9a169`](https://github.com/NousResearch/hermes-agent/commit/c4f9a169d61c2d75762c18e57f458b1aee2fed5b)) — @ethernet8023

## 🏗️ 基础设施

- **发布：**允许从release/*分支发布稳定版本，而不仅仅是主分支（[`9686d55c`]（https://github.com/NousResearch/hermes-agent/commit/9686d55ca87ccb22f779f012dd1ced7cdf63e0b9）） - @ethernet8023
- sin5ddd 的地图贡献者电子邮件 (#133750 抢救) ([#133750](https://github.com/NousResearch/hermes-agent/pull/133750)) — @kshitijk4poor
- 将 Oceanswave noreply 电子邮件发送至 GitHub 登录 ([`f343bdff`](https://github.com/NousResearch/hermes-agent/commit/f343bdffbfde416773aa926b03ffd54debbf8675)) — @ethernet8023
- ashmoonori-afk 的地图贡献者电子邮件 ([`6a1ee825`](https://github.com/NousResearch/hermes-agent/commit/6a1ee8255047d08c78f48076c5eb1b26dabc0282))
- **插件：** 将 birkin-mnemosyne 固定到核心 0.7.1 ([`e216cd74`](https://github.com/NousResearch/hermes-agent/commit/e216cd746f9e6600cf40ab5622f5ad2119ef91cb)) — @ashmoonori-afk
- **目录：** 审查 huddo 的披露 ([`85d27a51`](https://github.com/NousResearch/hermes-agent/commit/85d27a51cf87327f6ea894a3a78302a207706f34))
- StudioCodeAI 的地图贡献者电子邮件 ([`c708b34f`](https://github.com/NousResearch/hermes-agent/commit/c708b34ff60cacbb2aa2a34d80e46febed1c2a1b))
- **插件目录：** 将 Telegram Client 更新为 1.3.1 ([`27aaade9`](https://github.com/NousResearch/hermes-agent/commit/27aaade97b75cf8961be8201f167624b46454d8b)) — @guberm
- **插件目录：** 将 Gmail 升级为 v1.0.20 ([`c6ac0565`](https://github.com/NousResearch/hermes-agent/commit/c6ac05655ca24c96c87ddd91d444f690ca9e621d)) — @guberm
- **插件目录：** 将 Gmail 升级为 v1.0.19 ([`74324f11`](https://github.com/NousResearch/hermes-agent/commit/74324f11f4c3e6018f5d9fdaa575a06c66e2d464)) — @guberm
- **插件目录：** 将 Gmail 更新为 v1.0.18 ([`8050d9ea`](https://github.com/NousResearch/hermes-agent/commit/8050d9ea4cb12a3d68eaafbd2c05d57128d4a7e4)) — @guberm
- **Kiwi:** 将引脚撞到 kiwi@0.12.5，插件 v1.2.2 ([`a08f5894`](https://github.com/NousResearch/hermes-agent/commit/a08f5894355ac410a4af46875ff3ac47e8f89f50)) — @harrylabsj
-dinosauria123 的地图贡献者电子邮件 ([`06c81873`](https://github.com/NousResearch/hermes-agent/commit/06c8187384f21312d0e4c50b3297b7d3e14e1742))
- Lightningai 速率限制为 v1.1.0（挂钟对齐窗口）([`e28d64e8`](https://github.com/NousResearch/hermes-agent/commit/e28d64e8b7b54258eae5c8cdc825f919421ca65a)) — @dinosauria123
- TREE-Ind 的地图贡献者电子邮件 ([`71f78b3f`](https://github.com/NousResearch/hermes-agent/commit/71f78b3fe2a5b6be2dc219c999fc64ab44053b47))
- **目录：** 审查 Hermes-aac 的披露信息 ([`0567d017`](https://github.com/NousResearch/hermes-agent/commit/0567d017c46c3fdb9dd66d5468ad2ed96dc3cfc3))
- **目录：** 审查 openinvest 的披露 ([`c179b286`](https://github.com/NousResearch/hermes-agent/commit/c179b286d448411f500c7318baf183769b6ba885))
- Sahil-SS9 ([`d8b5bd8a`](https://github.com/NousResearch/hermes-agent/commit/d8b5bd8a497f7f3e8f02acf966b1be6afce2cd91)) 的地图贡献者电子邮件
- **目录：** 审查 Hermes-agent-mixer 的披露信息 ([`a98cc310`](https://github.com/NousResearch/hermes-agent/commit/a98cc310f913bb6e7ac27622fa105a433e415138))
- **目录：** 审查 Hermes 活动的披露 ([`e891815c`](https://github.com/NousResearch/hermes-agent/commit/e891815c3ef35c1ba116bb4bb058594d3c4df2ec))
- 将活动目录更新为 v0.2.0 ([`908c525d`](https://github.com/NousResearch/hermes-agent/commit/908c525dee4f28ba96617b4faa5e051bb21da2d7)) — @hassan-kamel
- slchris 的地图贡献者电子邮件 ([`eaf08400`](https://github.com/NousResearch/hermes-agent/commit/eaf08400a6abd7dc2b1757ca5215dc41a9940c67))
- **目录：**经过严格审查的披露 + require_hermes >=0.21.6 ([`2ee820e7`](https://github.com/NousResearch/hermes-agent/commit/2ee820e771033539a5d5eac8356c317af9979245))
- Neboy72 的地图贡献者电子邮件 ([`d9971f13`](https://github.com/NousResearch/hermes-agent/commit/d9971f131bcd4b2cb99523792cb8b43074fe91d0))
- **目录：**审查关联披露（[`1a5f5c7b`](https://github.com/NousResearch/hermes-agent/commit/1a5f5c7b484f8ffccaa511ceb1639c3ce652e550)）
- **目录：**审查 kumiho-memory 的披露 ([`63da5f7b`](https://github.com/NousResearch/hermes-agent/commit/63da5f7b2033d3969b825425937143cbc2168851))
- **目录：** 审查模型路由器的披露信息 ([`92790c6d`](https://github.com/NousResearch/hermes-agent/commit/92790c6d79f0d743f532b9bf0c964bde6d893a29))
- **目录：** 审查解剖学博物馆、特工看门人的披露信息 ([`560b2507`](https://github.com/NousResearch/hermes-agent/commit/560b250762a707ad355f3cd9019bff48be954d53))
- **贡献者：** 将 ieqzya@gmail.com 映射到 Ieqzya ([`c98162bb`](https://github.com/NousResearch/hermes-agent/commit/c98162bbb8473eac59d5a5ca7a4609ce2c828cca)) — @ethernet8023
- **贡献者：** 将 Darthvader88@gmail.com 映射到 guthixboss1 ([`8c5c9ac4`](https://github.com/NousResearch/hermes-agent/commit/8c5c9ac489232d1553208f2eff8dab79297bef70)) — @ethernet8023
- **发布：**通过每个稳定通道（[`66facf4a`](https://github.com/NousResearch/hermes-agent/commit/66facf4a57215c2a89d80c8c97c48acea46aa175)）传递测试中的提交 - @ethernet8023

## 📦 其他变化

- 将 Hermes-insight 重新固定到 a61cdf6 (1.0.3) ([`0e427d78`](https://github.com/NousResearch/hermes-agent/commit/0e427d788d253630d38a3a51cd76849e73cd6925)) — @BrokeSkill
- 将 Hermes-insight 重新固定到 afb08fb (1.0.2) ([`51e663da`](https://github.com/NousResearch/hermes-agent/commit/51e663da9def59da047d05cd88f8dd300fca75ed)) — @BrokeSkill
- 插件目录：将 huddo 改为 0.9.0 ([`eeacc00a`](https://github.com/NousResearch/hermes-agent/commit/eeacc00ac0b6cfd25c7daee9709d428d3cc66213)) — @hellohanchen
- 插件目录：将 hermes-lang-pt-br 重新固定到 7548ff1（包验证器 + CI）（[`82fbd41f`](https://github.com/NousResearch/hermes-agent/commit/82fbd41fd41998124a0ae15477306aba65ba6e29)） — @StudioCodeAI
- 插件目录：将 Hermes-lang-pt-br 重新固定到 69efb2f（制作人员/时间线自述文件）（[`2c20d9a3`](https://github.com/NousResearch/hermes-agent/commit/2c20d9a350a09c3cf36f3109d6fbf0e3431fde82)） — @StudioCodeAI
- 目录：将言语碰撞到 0.1.1 ([`3a5b9e84`](https://github.com/NousResearch/hermes-agent/commit/3a5b9e84b15b3f6d878e40045e2b26f170415759)) — @Lokeshm24
- 目录：将 qdrant-memory 重新固定到 0.2.1 (e14adc06) ([`720552bb`](https://github.com/NousResearch/hermes-agent/commit/720552bb3083aa7a68087ee98b46b52214fbecc9)) — @cnkang
- 目录：repin Hermes AAC 0.1.1 SDK-仅减少功能（[`473e2847`]（https://github.com/NousResearch/hermes-agent/commit/473e284730b8047d1623f038bafd94c77da2f124）） — @TREE-Ind
- 插件目录：openinvest 重新固定到 106e5ba（有界后端部门，0.41.6）（[`6cc9a434`](https://github.com/NousResearch/hermes-agent/commit/6cc9a4347b351ca6d4f4b084e572322c9d6f824c)） — @longsizhuo
- 插件目录：openinvest 重新固定到 3a0c816（审查修复，后端 0.41.4）（[`00c311c8`]（https://github.com/NousResearch/hermes-agent/commit/00c311c834c0184f5eecc36635e8abc0e665dbf9）） — @longsizhuo
- 插件目录：openinvest 重新固定到 3e1a9d7（审查修复）([`cb223633`](https://github.com/NousResearch/hermes-agent/commit/cb223633d2d8dc84782254563d32902d4213a943)) — @longsizhuo
- 插件目录：将计划模式改为 0.4.4 ([`2a5617f8`](https://github.com/NousResearch/hermes-agent/commit/2a5617f858a22ab852ee0332460e164af8bbbc3a)) — @100yenadmin
- 插件目录：将计划模式改为 0.4.3 ([`6fafdd4f`](https://github.com/NousResearch/hermes-agent/commit/6fafdd4f06b35ec4e09adccf6769b547a470ac69)) — @100yenadmin
- 目录：固定 Showly 社区插件 ([`5da3156c`](https://github.com/NousResearch/hermes-agent/commit/5da3156c8607f15206de74b22a69a015c073d09e)) — @slchris
- 目录（nexus）：将 sha 重新固定到 4392e6d — /embed 和 /mcp 需要每个安装密钥（[`64425a06`](https://github.com/NousResearch/hermes-agent/commit/64425a0663de5e2d660b498013a9a89a4b68f920)） — @Neboy72
- 目录（nexus）：重新固定到 v0.22.24 - 嵌入器来自服务，而不是来自阴影路径（[`0ee11795`]（https://github.com/NousResearch/hermes-agent/commit/0ee11795cfff24a44f17a5bccf9cb7c984b17360）） - @Neboy72
- Catalog(nexus)：重新固定到 v0.22.23 — 插件再次达到自己的 venv ([`a442c9a5`](https://github.com/NousResearch/hermes-agent/commit/a442c9a57732ef7f8aa025d17dd9d87554b6d511)) — @Neboy72
- Catalog(nexus)：将引擎固定到已审核提交的完整 sha ([`1f295ae0`](https://github.com/NousResearch/hermes-agent/commit/1f295ae0fff2bc895a744eade123bd8e08c11397)) — @Neboy72
- 目录（nexus）：重新固定到 v0.22.22 - 引擎版本是一个可解析的标签，文档与代码匹配（[`7f495184`]（https://github.com/NousResearch/hermes-agent/commit/7f495184c433fcc7eaea2b9dc61b7bd039b81b0a）） - @Neboy72
- 目录（关系）：重新固定到 v0.22.21 - 关闭了五个访问级别间隙（[`0f8a2a17`]（https://github.com/NousResearch/hermes-agent/commit/0f8a2a1767c68bace57ac176e95058f4e58d7e82）） - @Neboy72
- 目录（nexus）：重新固定到 v0.22.20 - 对话历史记录是私人的（[`14aaf8e1`]（https://github.com/NousResearch/hermes-agent/commit/14aaf8e12c1b4daf9bbae42242d9900e10cf61c1）） - @Neboy72
- 目录（nexus）：重新固定到v0.22.18（克劳德代码再次写入内存）（[`2165eed9`]（https://github.com/NousResearch/hermes-agent/commit/2165eed96be42a4b4165b159bf6573d50a610ebf）） - @Neboy72
- 目录（nexus）：重新固定到v0.22.17（内存提供程序可以再次嵌入）（[`f60e16fc`]（https://github.com/NousResearch/hermes-agent/commit/f60e16fced7a111d247b7ee7cec8787c8c9d5222）） - @Neboy72
- Catalog（nexus）：重新固定到v0.22.16（根包中的命名向量修复）（[`dab47696`]（https://github.com/NousResearch/hermes-agent/commit/dab47696a5915f3c4170c9c0c0ceb87b55294d50）） - @Neboy72
- 目录（nexus）：repin到v0.22.15（审查结果：更严格的trust匹配）（[`3952f2b5`]（https://github.com/NousResearch/hermes-agent/commit/3952f2b527920451f33c6971ee39b92c9ab6f108）） - @Neboy72
- 目录（nexus）：重新固定到3f77b2a（插件.yaml版本奇偶校验）（[`ca1c2261`]（https://github.com/NousResearch/hermes-agent/commit/ca1c22617558e74d6bbf49b0832cd4cdb4ef3a52）） - @Neboy72
- 目录（nexus）：重新固定到v0.22.13（命名集合模型）（[`c7b035c1`]（https://github.com/NousResearch/hermes-agent/commit/c7b035c1f1edf8ab241f7bacdd70e031ebb3d783）） - @Neboy72
- 插件目录：将帐户池提升至 4.0.2 ([`e5d2cebe`](https://github.com/NousResearch/hermes-agent/commit/e5d2cebe17e94a3bba69867a8127d98bdf2cc05b)) — @roqianjas
- 插件目录：将 alans-way 和 alans-way-computer 升级为 0.21.5 ([`a8d61e30`](https://github.com/NousResearch/hermes-agent/commit/a8d61e309fc8e7f22e7e4c9e3a48a11fb1f19a47)) — @capthvnsen
- 插件目录：将tinyfish撞到0.2.2 ([`6ebd92d9`](https://github.com/NousResearch/hermes-agent/commit/6ebd92d93852b7f33ca3bdb2c6c3d0fc997ce46f)) — @Zechereh
- 插件目录：nvidia 引脚 -> de75692（广播故障排除使用 tool_search，而不是 shell 探针）([`66cd37c9`](https://github.com/NousResearch/hermes-agent/commit/66cd37c997fcc63423dfefbd5202e121641f49ca)) — @alt-glitch
- 插件目录：nvidia-app + nvidia-broadcast pin -> 729e25c（应用程序端未准备好时首次运行设置）([`f18948e4`](https://github.com/NousResearch/hermes-agent/commit/f18948e4cdc88b38104c0c4572dd8f00269c3eed)) — @alt-glitch
- 目录：代理看门人（来自#137875）（[#137875](https://github.com/NousResearch/hermes-agent/pull/137875)） — @ZidoCode
- 目录：解剖博物馆（来自#138166）（[#138166]（https://github.com/NousResearch/hermes-agent/pull/138166）） — @danrudy33
- 目录：secure-env-ingress (来自 #132272) ([#132272](https://github.com/NousResearch/hermes-agent/pull/132272)) — @web3blind

## 👥 贡献者

感谢所有为此版本做出贡献的人！

- @ethernet8023（33 次提交）
- @kshitijk4poor（17 次提交）
- @Neboy72（13 次提交）
- @elisam0（7 次提交）
- @guberm（4 次提交）
- @longsizhuo（4 次提交）
- @helix4u（3 次提交）
- @j-nolan（3 次提交）
- @StudioCodeAI（3 次提交）
- @TakeshiTGAL（3 次提交）
- @olric3015（3 次提交）
- @sin5ddd（2 次提交）
- @xxxigm（2 次提交）
- @roverin（2 次提交）
- @BrokeSkill（2 次提交）
- @2867297362mjb-sketch（2 次提交）
- @dinosauria123（2 次提交）
- @TREE-Ind（2 次提交）
- @100yenadmin（2 次提交）
- @Sahil-SS9（2 次提交）
- @hassan-kamel（2 次提交）
- @slchris（2 次提交）
- @alt-glitch（2 次提交）
- @Ieqzya（2 次提交）
- @emozilla（1 次提交）
- @predatorheard-byte（1 次提交）
- @Oceanswave（1 次提交）
- @nv-pberard（1 次提交）
- @dandacompany（1 次提交）
- @ashmoonori-afk（1 次提交）
- @hellohanchen（1 次提交）
- @Lokeshm24（1 次提交）
- @harrylabsj（1 次提交）
- @cnkang（1 次提交）
- @kaveone（1 次提交）
- @roqianjas（1 次提交）
- @capthvnsen（1 次提交）
- @Zechereh（1 次提交）
- @meta Mindu（1 次提交）
- @ZidoCode（1 次提交）
- @danrudy33（1 次提交）
- @web3blind（1 次提交）
- @smfworks（1 次提交）
- @jarvistwl（1 次提交）
- @guthixboss1（1 次提交）
- @chelsealong（1 次提交）
- @dwaxe（1 次提交）
- @KoNit-K（1 次提交）
- @sajidhaleem（1 次提交）

## 更新中

- CLI 和安装程序脚本桌面安装：`hermes update`，或重新运行安装程序一行。这使得 v0.22.1 的安装重新回到发布线上。
- Microsoft Store：通过商店更新。
- Docker / 爱马仕云：`nousresearch/hermes-agent:stable`（或`:latest`）。

**完整 Changelog**：[v0.22.0...v0.22.2（发布线）](https://github.com/NousResearch/hermes-agent/compare/v0.22.0...4ccc58062c0db3010520d7dfd49e869ef74a8e89)

---

> 📦 仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 🏷️ 版本：`v0.22.2` · 📅 发布：2026-10-15 · [查看英文原版 Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
