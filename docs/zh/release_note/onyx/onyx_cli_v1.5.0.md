---
title: "onyx cli/v1.5.0"
project: "onyx"
repo: "onyx-dot-app/onyx"
tag: "cli/v1.5.0"
version: "cli/v1.5.0"
published: "2026-11-10"
type: "release"
lang: "zh"
---

# onyx cli/v1.5.0

## 变化
* feat(cli): 添加 --document-set 过滤器到 onyx-cli 搜索和文档集命令 (#17504) (34d4307fe7)
* feat(chat): 在 CODE_MODE_ENABLED 后面启用代码模式 (#17339) (a9b8dfb4a9)
* feat(search)：添加 POST /search/raw 进行搜索，无需 LLM 调用 [#17035 的编辑] (#17261) (2ab9f2a3d3)
* feat(connectors): 添加事件源的注册接缝 (#16992) (e4ddc15ccf)
* feat(slack)：使 Slack 云可配置为 GovSlack (#16985) (c92ceadd0c)
* 壮举（连接器）：Azure Data Lake Storage 权限和组同步 (#16887) (d9377907d9)
* feat(deployment): 添加一个 webhook 服务器进程 (#16915) (d8bcf60363)
* 修复（聊天）：等待受支持的 clients 会话准备就绪 (#16773) (da1343ce29)
* feat(log-export)：收集 Kubernetes 上每个 pod 的标准输出、崩溃和事件 (#16836) (62e283e0da)
* 杂务（代码解释器）：碰撞到 0.4.10 (#16780) (146f19ed12)
* Chore(ci)：将 CI、测试和默认值从 gpt-4o/gpt-5 移至 gpt-6 模型 (#16643) (556f83e488)
* 修复（perm-sync）：在停滞的进度上停止文档权限同步，而不是在经过的时间上（＃16635）（4332f041ab）
* feat(craft)：从 Apps 打开静态 HTML 预览 (#16573) (ae8fb04ef2)
* 修复（部署）：在全新 Compose 安装上保持 MinIO 及其复制服务停止 (#16429) (ec1ed831c0)
*壮举（索引）：添加新的嵌入模型和仅升级模型选择（＃15351）（b86caa7332）
* 文档（部署）：从 v5 回滚之前降级架构 (#16424) (2f9ed2517e)
* 修复（部署）：当手动运行 Compose 升级将文件留在 MinIO 中时发出警告 (#16375) (fd996261f9)
* feat(indexing)：重新分块由旧分块器索引的表格文档 (#16153) (e6772d6f41)
* feat(youtrack): 权限同步 (#16136) (b16c1019a9)
* 杂务（权限）：删除权限和组同步的 Redis 状态 (#15977) (308ad098e4)
* feat(permissions): 运行时报告权限同步进度 (#15974) (d3e304e2b8)
* feat(indexing): 添加 SKIP_SPREADSHEET_CONTENT 仅按标题索引电子表格 (#16075) (81b2e2bed8)
* 修复(devtools): 停止本地工具通过符号链接写入并运行 fork hooks (#15992) (bcb5ff9fc9)
* feat(craft)：在社区版上展示 Craft 的业务追加销售 (#15901) (777b9bf1f7)
* feat(deployment): 在 docker compose 中默认运行 MCP 服务器 (#15963) (8ce6fab7c5)
* feat(hubspot)：HubSpot 记录查看者的权限同步 (#15788) (c4522a5262)
* 壮举（线性）：权限同步 (#15783) (0d5a7f8cf2)
* feat(llm): 门发行说明在 ONYX_AIRGAPPED 后面获取 (#15691) (2feffd6efa)
* feat(llm): 更喜欢主供应表中的实时模型目录作为离线楼层 (#15684) (55f866e90b)
* feat(craft)：支持仅 IPv6 的 Docker 沙箱 (#15677) (a1b8669c5c)
* feat(zoom): 定期同步录制权限 (#15020) (2d78a8cd9e)
* feat(zoom): 同步帐户名册中的域组 (#15019) (cb0509d748)
* 杂务：从部署、ods、CI 和测试中删除两个 EE 环境变量 (#15645) (54155760fd)
* Chore(deps): 更新 golang 基础镜像摘要 (#14934) (5c67b8e339)
* 修复(ci): 停止测试运行器上的 OpenSearch 磁盘水印碎片 (#15628) (232c99fa2b)
* 杂务（代码解释器）：碰撞到 0.4.9 (#15506) (24812944ef)
* 杂务：删除 Vespa 并整合文档索引接口 (#15336) (8ced9bc01f)
* feat(cli)：将安装和升级移动到对象存储 (#15251) (8d31e4bc93)
* feat(file-store): 将 MinIO 的文件复制到对象存储中并废弃它 (#15250) (bf98589c22)
* feat(file-store)：写入两个存储并在移动期间回退到 MinIO (#15249) (cfe73b7a72)
* 壮举（部署）：在 MinIO 旁边添加 SeaweedFS 对象存储服务 (#15248) (6df60263f7)
* 功能：同步 OneDrive 权限 (#14848) (ace1683109)
* feat(code-interpreter): 将代码解释器 0.4.8 与准入重试集成 (#15131) (817f41fc79)
* 杂务（部署）：在模板中公开 SharePoint 文件大小上限 (#15144) (c056a20b67)
* feat(config): env-overridable 权限同步和文档同步锁定 TTL (#15063) (df0f68b427)
* 修复（企业设置）：删除隐藏 Onyx 品牌切换 (#15112) (f61e05131f)
* 修复（部署）：从我们自己的 Docker Hub 镜像中拉取 MinIO (#15086) (9987d2b9f9)
* 修复（cli）：一次性询问后为聊天会话添加标题 (#15059) (706cfa212b)
* 修复（工具）：绑定 open_url 响应主体并阻止 IPv6 IMDS (#14990) (695d024fd9)
*修复（cli）：使远程服务会话远离主机配置（＃14986）（49530ec121）
* feat(connectors)：在附件选项后面的 Teams 频道中发布的索引文件 (#14851) (16c43a9032)
* 重构（cli）：排序结构字段以删除填充（＃14872）（a49fd0214b）
* 修复（连接器）：限制下载并保护临时凭证 (#14821) (92aee9f4b4)
* feat(connectors)：同步邮箱所有者和活动参与者的 Outlook 权限 (#14752) (a23baa4355)
* feat(connectors)：索引 Outlook 附件并接受证书凭据 (#14736) (adbdd89fed)
* 壮举(ods): 添加 `ods release cli` 和 `ods release ods` (#14724) (4190ba91c4)
* 构建：固定轮子构建环境并升级转到 1.27.1 (#14719) (16247eec9d)
* 修复（指标）：在收集停止时提供陈旧数据，添加 Redis 套接字截止时间 (#14643) (0fed336c6b)

---

> 📦 仓库：[onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) · 🏷️ 版本：`cli/v1.5.0` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/onyx-dot-app/onyx/releases/tag/cli/v1.5.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
