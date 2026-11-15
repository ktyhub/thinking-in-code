---
title: "hyperframes v0.9.53"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.53"
version: "v0.9.53"
published: "2026-11-15"
type: "patch"
lang: "zh"
---

# hyperframes v0.9.53

# 超帧 v0.9.53

发布于 2026 年 11 月 15 日。

现在，包含许多中文、日文或韩文字符的页面会在几个小请求中加载其字体，因此它们会渲染而不是超时。云渲染不再拒绝仅以未使用的页面命名的文件，并且上传现在列出它们从项目外部携带的每个文件。

## 特点

- **CLI：** 上传列出从项目外部携带的每个文件（[e426ce4eb]（https://github.com/heygen-com/hyperframes/commit/e426ce4eb44517db3f65105f1e05cb7b762cd950），[#7831]（https://github.com/heygen-com/hyperframes/pull/7831））。

## 修复

- **制作人：** 当页面无法合成着色器过渡时，着色器过渡会混合在节点中（[fb1a383bd](https://github.com/heygen-com/hyperframes/commit/fb1a383bde6a0716fdc6041bf68b9bc1da9726b5)、[#7840](https://github.com/heygen-com/hyperframes/pull/7840)）。
- **CLI：** 上传剪切测试在繁忙的 Windows 运行程序上停止失败（[2ea78c0ab](https://github.com/heygen-com/hyperframes/commit/2ea78c0ab462e506cec44d3c969513d8aa244749)、[#7843](https://github.com/heygen-com/hyperframes/pull/7843)）。
- **引擎：** 受限下载应用捕获代理的地址规则（[125a9446b](https://github.com/heygen-com/hyperframes/commit/125a9446be3c0736a190c16cef9003108b0a981c)、[#7839](https://github.com/heygen-com/hyperframes/pull/7839)）。
- LAN 主机预览和播放页面拒绝其他站点而不获取元数据（[2ceb682f9](https://github.com/heygen-com/hyperframes/commit/2ceb682f925c867faf16fc68ce7872333286e66c)、[#7836](https://github.com/heygen-com/hyperframes/pull/7836)）。
- **CLI:** 基准保持接收文件的规则；收到的 .env 密钥永远不会取代登录（[a7266e4c8](https://github.com/heygen-com/hyperframes/commit/a7266e4c8385dfbf9d7b7a81813fe984c46f9dad)、[#7837](https://github.com/heygen-com/hyperframes/pull/7837)）。
- **CLI：** 云渲染不再仅拒绝未使用的页面名称的文件（[45cc331e5]（https://github.com/heygen-com/hyperframes/commit/45cc331e54b28040694a47e540ddc2d100cacdf3），[#7812]（https://github.com/heygen-com/hyperframes/pull/7812））。
- **核心：** 包含许多 CJK 字符的页面在多个请求中获取字体（[6a8f4b5b4](https://github.com/heygen-com/hyperframes/commit/6a8f4b5b46762e6b1631e02d6d77b29b950c88ee)、[#7823](https://github.com/heygen-com/hyperframes/pull/7823)）。
- **CLI：** 超帧音频永远不会在另一台计算机的共享上查找媒体（[eaf33bc65]（https://github.com/heygen-com/hyperframes/commit/eaf33bc658fbd2612753a48574fed6f9e376a511），[#7826]（https://github.com/heygen-com/hyperframes/pull/7826））。
- **CLI：** 上传忽略外部脚本； .ts 仅当其为 1 时才算作视频（[04202e8a4](https://github.com/heygen-com/hyperframes/commit/04202e8a4c2e7f334636bf1e3b07dd38c77e5b43)、[#7818](https://github.com/heygen-com/hyperframes/pull/7818)）。
- **CLI：** 播放并呈现检查主机的预览；本地渲染会忽略接收到的合成的外部文件（[ac0247410](https://github.com/heygen-com/hyperframes/commit/ac02474105bc6d2893a0ef1a79526f2952645aca)、[#7792](https://github.com/heygen-com/hyperframes/pull/7792)）。
- Studio 媒体路由拒绝跨站点加载，CLI 转义终端文本，批处理输出保留在其文件夹中（[c4d60c347](https://github.com/heygen-com/hyperframes/commit/c4d60c347f324eb58dacfccee866a0b9bba7fe61)、[#7779](https://github.com/heygen-com/hyperframes/pull/7779)）。
- **CLI：** 发现模板内已安装的场景（[a75e61f31]（https://github.com/heygen-com/hyperframes/commit/a75e61f31c76d79016894e849799bdc456ac0b54），[#7822]（https://github.com/heygen-com/hyperframes/pull/7822））。
- **Studio Server：** 历史锁定记录被替换，从未通过链接写入（[0248ea033](https://github.com/heygen-com/hyperframes/commit/0248ea033c74c31527f5657419abf83ec3602091)、[#7821](https://github.com/heygen-com/hyperframes/pull/7821)）。
- **生产者：** 将渲染服务器保留在本地，除非有令牌保护它（[f667111d1]（https://github.com/heygen-com/hyperframes/commit/f667111d179ec93edb8e8e9b29d846c20d15ed0f），[#7814]（https://github.com/heygen-com/hyperframes/pull/7814））。
- **Engine,cli:** 播放列表文件夹检查会像 ffmpeg 一样读取 HLS；快照也运行它（[797a622be]（https://github.com/heygen-com/hyperframes/commit/797a622be96143439d3fce94da169b9665106293），[#7810]（https://github.com/heygen-com/hyperframes/pull/7810））。
- **引擎，生产者：** 渲染网络设置读起来像一个开关；渲染服务探针停留在检查的输入上（[be740d021](https://github.com/heygen-com/hyperframes/commit/be740d0215f027f6987d69dfa75602279ab5af25)、[#7807](https://github.com/heygen-com/hyperframes/pull/7807)）。
- **CLI:** 打印的 Windows 命令在每个 shell 中逐字读取文件夹名称（[a07d4cf73](https://github.com/heygen-com/hyperframes/commit/a07d4cf738c83eb113b4b2a640ca293ba4b0ce92)、[#7769](https://github.com/heygen-com/hyperframes/pull/7769)）。
- **CLI:** 嵌套接收记录仅添加；收到的 .env 永远不会选择该帐户；字体名称不包含在代理文件中（[80b09cc94](https://github.com/heygen-com/hyperframes/commit/80b09cc94aad9b85484adbc8617cdc648206d6b3)、[#7808](https://github.com/heygen-com/hyperframes/pull/7808)）。
- Cloud Run 渲染仅到达公共地址；帧缓存文件夹对其用户而言是私有的（[55b514709](https://github.com/heygen-com/hyperframes/commit/55b51470980ce8ef0c5533b26de01c116d4c4987)、[#7777](https://github.com/heygen-com/hyperframes/pull/7777)）。
- **部门：**刷新bun.lock中的zod、smol-toml、aws-cdk-lib和相关分辨率（[28d4ba50f](https://github.com/heygen-com/hyperframes/commit/28d4ba50f1263b97bbb3d9ca1655833e0f3dad53)、[#7741](https://github.com/heygen-com/hyperframes/pull/7741)）。
- **部门：** 将 @mcp-b/global 更改为 6.1.0 以清除 @modelcontextprotocol/server 建议（[beeb17e85](https://github.com/heygen-com/hyperframes/commit/beeb17e85af0dfa696d9621c634f50250c539b8d)、[#7742](https://github.com/heygen-com/hyperframes/pull/7742)）。
- **引擎：** 失败的并行捕获会命名失败的工作线程，而不是它停止的对等节点（[db6b7478a](https://github.com/heygen-com/hyperframes/commit/db6b7478a7e66415b8c35da4126dcaee687026de)、[#7803](https://github.com/heygen-com/hyperframes/pull/7803)）。
- **引擎：** 渲染拒绝命名 IPv6 映射或 NAT64 主机携带的地址（[04ee926d9](https://github.com/heygen-com/hyperframes/commit/04ee926d9740e4112a458c8f7946e7be069caee2)、[#7802](https://github.com/heygen-com/hyperframes/pull/7802)）。
- **生产者：** 仅接受环回、IP 或列出的主机名下的浏览器请求（[03e6a1a18](https://github.com/heygen-com/hyperframes/commit/03e6a1a1807d2a98d83b86cc364fcc2fd69d4c40)、[#7798](https://github.com/heygen-com/hyperframes/pull/7798)）。
- **解析器：**切勿在另一台计算机的共享上查找媒体（[2de5c027f](https://github.com/heygen-com/hyperframes/commit/2de5c027fa02baed483a7ffc6cc5d9c18f92a79e)、[#7797](https://github.com/heygen-com/hyperframes/pull/7797)）。
- **CLI：** 上传档案始终忽略环境文件和私人记录（[477a3aea1]（https://github.com/heygen-com/hyperframes/commit/477a3aea139a3fca372562cd0681f297843f0a1b），[#7796]（https://github.com/heygen-com/hyperframes/pull/7796））。
- **引擎：** 按大小、编码和吞吐量绑定远程媒体下载（[5111cf384](https://github.com/heygen-com/hyperframes/commit/5111cf3840c37267f954f4e7a4f64a99b1bc0fdc)、[#7786](https://github.com/heygen-com/hyperframes/pull/7786)）。
- **CLI：** 仅从每个平台上的 trusted PATH 文件夹启动帮助程序（[83eae240f](https://github.com/heygen-com/hyperframes/commit/83eae240fb5f5747c94b6aabdc5448e59f119a5e)、[#7787](https://github.com/heygen-com/hyperframes/pull/7787)）。

## 性能

- **Lint：** 以线性时间扫描 CSS url 引用（[bcf3d177d](https://github.com/heygen-com/hyperframes/commit/bcf3d177d3476a1696b034544f5cfcf68404663b)、[#7829](https://github.com/heygen-com/hyperframes/pull/7829)）。
- CSS url、@import、@font-face、样式和注释扫描以线性时间运行（[ded5e3eec](https://github.com/heygen-com/hyperframes/commit/ded5e3eec25cd2da405fb30c2751d6406726607d)、[#7809](https://github.com/heygen-com/hyperframes/pull/7809)）。

## 目录

- **CLI：** 添加收到的配置注册表中的文件列表（[6a7b4df7c](https://github.com/heygen-com/hyperframes/commit/6a7b4df7c8bb04944b14820570b2dd7a32e76dc7)、[#7820](https://github.com/heygen-com/hyperframes/pull/7820)）。
- **目录：** 有效负载检查将可选的标题覆盖.json 视为不存在，而不是失败（[b7c26ff84]（https://github.com/heygen-com/hyperframes/commit/b7c26ff844ed1d0eea616be3536da1bb0dd404bc），[#7813]（https://github.com/heygen-com/hyperframes/pull/7813））。
- **注册表：** 标题关键字、表情符号和余震适用于 a-z 之外的单词（[8dbbc1d37](https://github.com/heygen-com/hyperframes/commit/8dbbc1d371ca73341d18eff5aba86737f6355309)、[#7804](https://github.com/heygen-com/hyperframes/pull/7804)）。
- **文档：** 检查目录链接值并将其排除在复制的命令之外（[7c7ff6d89](https://github.com/heygen-com/hyperframes/commit/7c7ff6d89e99e81002dc919ae6d7b34193d6d202)、[#7783](https://github.com/heygen-com/hyperframes/pull/7783)）。

## 完整 changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.52...v0.9.53

---

> 📦 仓库：[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · 🏷️ 版本：`v0.9.53` · 📅 发布：2026-11-15 · [查看英文原版 Release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.53)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
