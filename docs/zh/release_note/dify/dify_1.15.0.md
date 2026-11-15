---
title: "dify 1.15.0"
project: "dify"
repo: "langgenius/dify"
tag: "1.15.0"
version: "1.15.0"
published: "2026-06-25"
type: "minor"
lang: "zh"
---

# dify 1.15.0

# 迪迪 1.15.0 Release Note

## 发生了什么变化

### 用户体验和用户界面增强

<img width="1920" height="1044" alt="录屏2026-06-25 21 12 33" src="https://github.com/user-attachments/assets/c3ac7394-2ccf-4a66-873a-b7224a16897a" />


- **重新设计的登陆/登机**，以获得更轻松的首次运行体验（#37433、#37844、#37800）
- **更快的导航** - 改进的“去任何地方”调色板和自动聚焦搜索输入（＃32130，＃37175）
- **更安全的删除** — 删除应用程序之前进行一次 click 确认 (#37263)
- **带有可折叠面板的更清晰的工作流程编辑器** (#37276)
- **更清晰的通知** - 一致的 toast 完整显示长错误（#37382、#37581）
- **更容易访问** — 插件权限提示、恢复的联系我们菜单、跳过导航链接和键盘焦点优化（#37310、#37774、#37644）

### 新功能
**difyctl — 从命令行驱动 Dify** ([文档](https://docs.dify.ai/en/cli/overview))
- difyctl 是 Dify 的命令行 client：您现在可以直接从终端运行应用程序和工作流程，因此个人代理、脚本和 CI 管道可以调用 Dify 工作流程，而无需打开 Web UI (#37036)
- 使用单个命令将其安装在任何平台（macOS、Linux、Windows）上，无需访问令牌 - 二进制文件作为带有校验和验证的公共版本发布（#37036、#37454）
- 将作用域环境变量传递给 CLI 工具运行，并在 difyctl 和 `/openapi/v1` API 上获得更清晰、一致的错误消息（包括友好的速率限制处理）（#37324、#37285、#37313、#36896）

**请参阅工作流程和聊天流程以及 CLI 中的 CoT**
- 聊天流程/工作流程现在可以将模型的推理传输到专用的实时“思考”面板中，同时保持最终答案的简洁和可读。推理被保留，因此在页面刷新后它仍然存在，并且在 CLI 和工作流运行预览中可以看到相同的推理（#37460、#37828）

**更丰富的人机交互形式**
- 当工作流程暂停以询问人员输入时，表单现在可以包括下拉选择和文件/多文件上传（而不仅仅是自由文本），以便人们可以使用结构化选择和附件进行回答（#36322）

**支持缓慢、长时间运行的模型**
- 工作流程现在可以通过轮询机制使用需要很长时间响应的生成模型（例如图像或视频生成）：节点耐心等待最终结果而不是超时（#37462）

**来自更丰富的电子表格的知识**
- 现在，在知识导入期间提取嵌入 Excel 文件中的图像，因此依赖于图片（图表、屏幕截图、图表）的电子表格内容不再丢失 (#37104)

**更深入的可观察性**
- 为 Phoenix 设置您自己的跟踪会话 ID，以便跟踪与应用程序的会话保持一致，并按照跟踪中的文档检索步骤来了解 RAG 结果是如何生成的（#37056、#37283）

**工作流程创作润色**
- 刷新的开始节点使工作流如何开始更加清晰，更智能的输出节点使您可以更好地控制工作流返回的内容（#37348、#35511）
- 当应用程序或工作区 ID 格式错误时出现更友好的错误，而不是令人困惑的失败 (#37212)

**某些地区的插件安装速度更快**
- 插件守护进程现在会在启动时自动检测您的区域，并且在与 PyPI 的网络连接较差的情况下，自动选择附近的包镜像 - 因此安装插件更快、更可靠，无需任何手动设置。如果您愿意，您仍然可以固定特定的镜像 (dify-plugin-daemon#750)

### 安全更新

此版本修复了插件守护程序转发中的路径遍历问题 (cve-2026-41948)。

### 错误修复
- 强化出站 HTTP，对 Firecrawl、Jina、Watercrawl、Nacos 和 Marketplace 请求进行有限超时，并强化默认 SSRF 代理出口（#37638、#37637、#37515、#37444、#37424、#36332）
- 修复了由 `opensearch-py` 更新 (#37862) 和 Tongyi 凭证兼容性 (#37942) 引起的 Lindorm 矢量存储错误
- OAuth 刷新后凭证缓存无效 (#37630)
- 改进了工作流程执行错误处理，急切地验证对话以防止挂起，并防止遗留停止中断 GraphEngine 运行（#37919、#37224、#37129）
- 通过会话管理重构解决了 `DetachedInstanceError` (#37847) 和稳定的部署状态水合作用 (#37818)
- 修复了对话变量描述长度验证以防止 `varchar(255)` 截断 (#33038) 并将中文存储为 unicode，以便搜索有效 (#37446)
- 大量网页用户界面和可访问性/聚焦环优化修复

### 改进
- 跨服务重构会话管理，以通过依赖项注入显式接受 `db.session` 以保持一致性（#37639、#37832、#37695、#37694 及相关）
- 现代化打字（删除了多余的 `type: ignore`/`cast`，将 ABC 转换为 `Protocol`，用 `match-case` 替换了 `isinstance` 链）
- 减少了 Chatflow 的工作流程启动延迟 (#36773) 并降低了工作流程终止延迟，以便更快地停止运行 (#37106、#37129)
- 升级了 CVE 修复的依赖项（Bleach、PyJWT、starlette、存储组）（#37860、#37008、#37076、#37861）

## 环境变量更改

### 添加
- `DEVICE_FLOW_APPROVE_RATE_LIMIT_PER_HOUR` (`docker/envs/core-services/shared.env.example`)
- `DIFY_ENV_NACOS_CONNECT_TIMEOUT`、`DIFY_ENV_NACOS_REQUEST_TIMEOUT` (`api/.env.example`)
- `ENABLE_LEARN_APP` (`api/.env.example`)
- `ENABLE_OAUTH_BEARER` (`docker/envs/core-services/shared.env.example`)
- `MILVUS_SECURE`、`MILVUS_SERVER_NAME`、`MILVUS_SERVER_PEM_PATH` (`docker/envs/vectorstores/milvus.env.example`)
- `NEXT_PUBLIC_ENABLE_FEATURE_PREVIEW` (`docker/envs/core-services/web.env.example`)
- `OPENAPI_CORS_ALLOW_ORIGINS`、`OPENAPI_ENABLED`、`OPENAPI_KNOWN_CLIENT_IDS`、`OPENAPI_RATE_LIMIT_PER_TOKEN` (`docker/envs/core-services/shared.env.example`)
- `PLUGIN_MODEL_PROVIDERS_CACHE_TTL` (`api/.env.example`)
- `SERVER_CONSOLE_API_URL` (`docker/.env.example`)
- `SSRF_PROXY_ALLOW_PRIVATE_DOMAINS`、`SSRF_PROXY_ALLOW_PRIVATE_IPS`、`SSRF_SANDBOX_PROXY_HOST`、`SSRF_SANDBOX_PROXY_PORT` (`docker/envs/middleware.env.example`)
- `PIP_MIRROR_AUTO_DETECT`（插件守护进程；默认 `true`） — 在启动时自动选择附近的 PyPI 镜像，用于连接性较差的区域
- `PIP_MIRROR_URL`（插件守护进程；默认为空）——手动固定 PyPI 镜像；优先于自动检测


### 已删除
- `SSRF_REVERSE_PROXY_PORT`、`SSRF_SANDBOX_HOST` (`docker/envs/middleware.env.example`)

### 修改
- `UV_CACHE_DIR`: `/tmp/.uv-cache` → `/tmp/uv_cache`

### Docker 撰写文件
- `docker/docker-compose.yaml`（改装）
- `docker/docker-compose.middleware.yaml`（改装）
- `docker/docker-compose.pytest.ports.yaml`（已添加）

## 数据库迁移

此版本包括新的数据库迁移。更新代码后运行`flask db upgrade`（或`uv run --project api flask db upgrade`）。值得注意的架构添加：
- OAuth 访问令牌 (`ENABLE_OAUTH_BEARER`)
- 凭证可见性
- 人工输入上传表和对话链接
- **类别范围的插件自动升级策略** (`add_plugin_auto_upgrade_category`)
- 推荐应用程序上的应用程序星标、学习修改/仅限云标记
- 标准化的遗留最终用户类型

## 升级指南

### 模型类型迁移

> [!重要]
>
> **用于自托管升级的一次性旧模型类型迁移**
>
> 如果此部署是从早于 `1.15.0` 的 Dify 版本升级的，并且此迁移尚未应用，请在升级后运行它。
>
> 此迁移**不包含在 `flask db upgrade`** 中。如果没有它，旧模型记录可能会导致模型相关的 API 请求失败并出现错误，从而阻止加载或使用受影响的模型。
>
> 应用迁移之前备份数据库。该命令默认以空运行模式运行；在使用 `--apply` 重新运行之前检查输出。迁移是幂等的并且可以安全地重新运行。

#### Docker 撰写

从 `docker` 目录运行。

```bash
# Apply after reviewing the dry-run output
docker compose exec -T api flask data-migrate legacy-model-types --apply \
  > legacy-model-types-apply.jsonl
```

#### 源代码部署

完成 `flask db upgrade` 后从存储库根运行。

```bash
# Apply after reviewing the dry-run output
uv run --project api flask data-migrate legacy-model-types --apply \
  > legacy-model-types-apply.jsonl
```

应用迁移后，再次运行 dry-run 命令。如果报告没有额外的行更新或删除，请重新启动相关服务并验证现有模型是否可以成功加载和调用。

> [!重要]
>
> - 此版本包括新的数据库迁移。作为升级的一部分运行它们。
> - **现在按插件类别配置插件自动升级。** 运行 `flask db upgrade` 后，您还必须运行 `flask backfill-plugin-auto-upgrade` 将现有租户的自动升级设置迁移到新的类别范围模型中。如果跳过此步骤，用户之前配置的插件自动升级设置可能会停止生效。
> - 环境变量已更改（添加了 19 个，删除了 2 个，修改了 1 个）。查看环境变量更改部分并相应更新您的 `.env`。
> - Docker Compose 配置文件已更改。如果您维护自定义的 `docker-compose.yaml`，请仔细查看更改并重新应用本地自定义。

### Docker 组合部署
1. 备份您的自定义 docker-compose YAML 和 env 文件。
   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   cp .env .env.$(date +%s).bak 2>/dev/null || true
   ```
2. 获取`1.15.0`版本的最新代码。
   ```bash
   git fetch --tags
   git checkout 1.15.0
   ```
3. 停止服务（在 `docker` 目录内运行）。
   ```bash
   docker compose down
   ```
4. 备份数据。
   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```
5. 检查任何 env 文件更改并重新应用本地自定义。
6、升级服务。
   ```bash
   docker compose up -d
   ```
7. **回填类别范围的插件自动升级策略**（必需）。
   ```bash
   docker compose exec api flask backfill-plugin-auto-upgrade
   ```

### 源代码部署
1. 停止API服务器、Worker和Web前端服务器。
2. 获取`1.15.0`版本的最新代码。
   ```bash
   git fetch --tags
   git checkout 1.15.0
   ```
3.更新Python依赖项。
   ```bash
   cd api
   uv sync
   ```
4. 运行数据库迁移。
   ```bash
   uv run flask db upgrade
   ```
5. **回填类别范围的插件自动升级策略**（必需）。
   ```bash
   uv run flask backfill-plugin-auto-upgrade
   ```
6. 重新启动 API 服务器、Worker 和 Web 前端服务器。


## 完整变更列表
* feat(dify-ui): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36334 中添加共享表单原语
* 重构(web)：将https://github.com/langgenius/dify/pull/36370中@lyzno1的注释选择迁移到复选框组
* feat(dev-proxy)：通过https://github.com/langgenius/dify/pull/36371中的@lyzno1按目标隔离本地身份验证cookie
* 杂务（api）：在 https://github.com/langgenius/dify/pull/36331 中注释 @hyoban 的简单合约响应
* 修复（agenton）：在 https://github.com/langgenius/dify/pull/36361 中使用 @algojogacor 为 asynccontextmanager 使用 AsyncGenerator 返回注释
* test(api)：通过https://github.com/langgenius/dify/pull/36235中的@laipz8200本地管理后端pytest服务
* 重构(web)：通过https://github.com/langgenius/dify/pull/36381中的@lyzno1将多复选框列表迁移到CheckboxGroup
* 杂务：在 https://github.com/langgenius/dify/pull/36383 中@iamjoel 的默认模型设置中隐藏模型提供程序设置
* feat(dev-proxy): 在https://github.com/langgenius/dify/pull/36384中重新加载@lyzno1更改的env文件
*修复：防止代理工具信息弹出窗口在https://github.com/langgenius/dify/pull/36389中@iamjoel附近跳转
* 测试：稳定@escape0707在https://github.com/langgenius/dify/pull/36353中设置的触发器订阅名称唯一性
* 修复（api）：在 https://github.com/langgenius/dify/pull/36388 中添加 Phoenix 包装器跨度和 @Blackoutta 的错误跟踪
* 壮举：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/36284 添加新代理
* 杂务(codeowners)：通过https://github.com/langgenius/dify/pull/36394中的@laipz8200更新插件所有权
* 修复：https://github.com/langgenius/dify/pull/36390 中@iamjoel 导致工作流节点选择状态不同步的问题
* 杂务（网络）：删除https://github.com/langgenius/dify/pull/36402中@lyzno1的通用顺风技能
* 修复：修复 https://github.com/langgenius/dify/pull/36398 中 @fatelei 添加 uv_cache_dir env 的问题
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/36413 中更新部门
* 重构：通过https://github.com/langgenius/dify/pull/36364中的@xxiaoxiong将isinstance链转换为匹配/大小写模式
* 修复(web)：防止 https://github.com/langgenius/dify/pull/36420 中 @lyzno1 出现本地云分析脚本错误
* 重构：在 https://github.com/langgenius/dify/pull/36417 中迁移到 @hyoban 的 Tailwind v4 风格
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/36393 中进行 4 次更新，在 1 个目录中碰撞存储组
* 构建：修复 @hyoban 在 https://github.com/langgenius/dify/pull/36423 中构建的 api docker
* 杂务：https://github.com/langgenius/dify/pull/36385 中@wylswz 的 litellm 和 langsmith 的凹凸版本
* 修复：https://github.com/langgenius/dify/pull/36372 中@EvanYao826 修复当 SharePoint 文件夹为空时防止递归错误
* 修复（web）：解决https://github.com/langgenius/dify/pull/36422中@lyzno1的模型提供者控制台警告
* 杂务：在 https://github.com/langgenius/dify/pull/36407 中检查 @asukaminato0721 的更多文件
*修复（api）：修复https://github.com/langgenius/dify/pull/36412中@QuantumGhost更改电子邮件时无效令牌错误
* 杂务：[重构/杂务] 的示例在 https://github.com/langgenius/dify/pull/36425 中添加缺失覆盖装饰器 #36406 by @asukaminato0721
* Chore(codeowners)：通过https://github.com/langgenius/dify/pull/36430中的@laipz8200分配触发器调度程序所有权
* 修复(web): 在 https://github.com/langgenius/dify/pull/36421 中通过 @JzoNgKVO 更改电子邮件时取消电子邮件检查
* 杂务：将 API 就绪报告移至 https://github.com/langgenius/dify/pull/36433 中 @hyoban 的终端输出
* 杂务（api）：https://github.com/langgenius/dify/pull/36429 中 @laipz8200 限制非开发依赖主要版本
* 重构(web): 在https://github.com/langgenius/dify/pull/36431中使用@lyzno1的下拉数据属性
*修复（auth）：在ChangePasswordForm重置中使用有效性返回的令牌，由https://github.com/langgenius/dify/pull/36415中的@GareArc提交
* ci：在 https://github.com/langgenius/dify/pull/36436 中显示 @lyzno1 的 Web 测试分片失败
* 杂务：更新为仅 SaaS 可以查看 @iamjoel 在 https://github.com/langgenius/dify/pull/36440 中的模板
* 修复：https://github.com/langgenius/dify/pull/36438 中的 @wylswz 允许配置 pubsub 加入超时以降低运行后延迟
* 杂务：删除https://github.com/langgenius/dify/pull/36443中@xxiaoxiong在dataset.py中未使用的pyrefly忽略注释
* 杂务：通过https://github.com/langgenius/dify/pull/36442中的@lyzno1将基本ui升级到1.5.0
* feat(ui)：将无线电迁移到 Base UI 并通过 https://github.com/langgenius/dify/pull/36451 中的 @lyzno1 更新 Web 调用站点
* 杂务：https://github.com/langgenius/dify/pull/33274 中@fatelei 不存在兼容的对话
* 壮举：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/36437 中连接工作流代理节点运行时
* 修复：建议问题 API 在 https://github.com/langgenius/dify/pull/36459 中 @leslie2046 的遗留对话覆盖配置上崩溃
* 壮举：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36446 中添加 dify-ui 输入原语
* 修复（web）：在 https://github.com/langgenius/dify/pull/36471 中使用 @lyzno1 的触发样式的弹出式打开选择器
* 修复（ci）：@cqjjjzr 在 https://github.com/langgenius/dify/pull/36482 中的错误 pyinfra 类型覆盖报告评论
* 重构：通过 https://github.com/langgenius/dify/pull/36486 中的 @AlsoTheZv3n 将缺失的 @override 装饰器添加到 AppGenerateResponseConverter 子类中
* 重构(api)：通过https://github.com/langgenius/dify/pull/36450中的@cqjjjzr将console.datasets.metadata迁移到BaseModel
* feat(api)：Flask-RESTX `response()` 与 @cqjjjzr 在 https://github.com/langgenius/dify/pull/36488 中的实际返回值检查器
* 修复（api）：停止返回 204 和响应正文，并在 https://github.com/langgenius/dify/pull/36489 中添加 @cqjjjzr 的 CI 检查
* 重构：通过 https://github.com/langgenius/dify/pull/36490 中的 @AlsoTheZv3n 将缺失的 @override 装饰器添加到 AppQueueManager 子类中
* 重构：通过 https://github.com/langgenius/dify/pull/36491 中的 @AlsoTheZv3n 将缺失的 @override 装饰器添加到 GraphEngineLayer 子类中
* 杂务：添加类型以通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/36454 中进行测试
* 重构：通过 https://github.com/langgenius/dify/pull/36496 中的 @AlsoTheZv3n 将缺失的 @override 装饰器添加到代码执行器提供程序和转换器中
* 重构：通过 https://github.com/langgenius/dify/pull/36495 中的 @AlsoTheZv3n 将缺少的 @override 装饰器添加到文件访问控制器和工作流文件运行时
* 重构：通过 https://github.com/langgenius/dify/pull/36493 中的 @AlsoTheZv3n 将缺失的 @override 装饰器添加到 PluginModelRuntime
* 重构：通过 https://github.com/langgenius/dify/pull/36494 中的 @AlsoTheZv3n 将缺失的 @override 装饰器添加到数据源插件类中
* 重构：通过 https://github.com/langgenius/dify/pull/36492 中的 @AlsoTheZv3n 将缺失的 @override 装饰器添加到 Moderation 子类中
* 修复（api）：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/36455 中将 SSL 验证标志传递给 SSRF 代理挂载
*修复（api）：在https://github.com/langgenius/dify/pull/36478中保留@lord-Rheagar的远程文件URL查询参数
* 重构：https://github.com/langgenius/dify/pull/36500 中的 @lyzno1 简化工作流程上下文菜单生命周期
* 重构：通过 https://github.com/langgenius/dify/pull/36511 中的 @AlsoTheZv3n 将缺失的 @override 装饰器添加到代理运行器、工具缓存和日志扩展中
*修复（dify-ui）：在https://github.com/langgenius/dify/pull/36510中通过@lyzno1对齐表单标签指导
* 重构(web)：通过https://github.com/langgenius/dify/pull/36521中的@lyzno1改进检索和标签控制语义
* 修复(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36525 中稳定文档选择器搜索焦点
* 杂务：@hjlarry 在 https://github.com/langgenius/dify/pull/36514 中进行单独的向量空间配额查询
* 重构：通过 https://github.com/langgenius/dify/pull/36528 中的 @AlsoTheZv3n 将缺失的 @override 装饰器添加到剩余的 MCP、Jieba、嵌入和杂项子类中
* 重构(api)：通过https://github.com/langgenius/dify/pull/36480中的@cqjjjzr将console/service_api.dataset迁移到BaseModel
* 重构：通过 https://github.com/langgenius/dify/pull/36534 中的 @liaoyl830 将 isinstance 链转换为 otel 解析器中的匹配/大小写
* feat(plugin)：https://github.com/langgenius/dify/pull/36449中@laipz8200按租户缓存插件模型提供者
* 重构：将缺少的@override装饰器添加到https://github.com/langgenius/dify/pull/36501中@EvanYao826的方法覆盖中
* 修复：通过https://github.com/langgenius/dify/pull/36355中的@EvanYao826处理KnowledgeIndexNodeData中的nullsummary_index_setting
* 修复（api）：在 RAG 管道控制器中使用普通会话来防止 @KurodaKayn 在 https://github.com/langgenius/dify/pull/36392 中出现关闭事务错误
* 杂务：为 https://github.com/langgenius/dify/pull/36559 中的 @Lillian68 在 api/controllers/console/app 中的文件添加 UUID/str 类型注释到 api 端点
* 杂务：为 api/controllers/files 和 api/controllers/web 中的文件添加 UUID/str 类型注释到 api 端点，作者为 https://github.com/langgenius/dify/pull/36562 中的 @Lillian68
* 杂务：为 api/controllers/service_api 中的文件添加 UUID/str 类型注释到 api 端点，@Lillian68 在 https://github.com/langgenius/dify/pull/36561 中
* 杂务：为 api/controllers/console/datasets 中的文件添加 UUID/str 类型注释到 api 端点，@Lillian68 在 https://github.com/langgenius/dify/pull/36560 中
* 杂务：为 https://github.com/langgenius/dify/pull/36563 中的 @Lillian68 在 api/controllers/console 中的文件添加 UUID/str 类型注释到 api 端点
* 重构：通过 https://github.com/langgenius/dify/pull/36565 中的 @zhang-liz 将缺失的 @override 装饰器添加到 models/types.py 中的 TypeDecorator 子类中
* 壮举：通过 https://github.com/langgenius/dify/pull/36569 中的 @lyzno1 在 UI 和应用程序表面添加和统一分页组件
* 重构(dify-ui): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36539 中完善 switch 合约
* 杂务（网络）：删除https://github.com/langgenius/dify/pull/36554中@lyzno1正文中的选择自动
* 修复（网页）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36567 中清理标题徽标可访问性
* 修复：@hjlarry 在 https://github.com/langgenius/dify/pull/36591 中请求 /api/datasets 引发异常
*修复：外部检索模型响应拒绝https://github.com/langgenius/dify/pull/36577中@hsiong的空分数阈值错误
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/36599 中与 en-US 同步翻译
* feat(dify-agent): 在https://github.com/langgenius/dify/pull/36600中添加@BeautyyuYanli的历史层和结构输出层
* 重构（dify-ui）：通过https://github.com/langgenius/dify/pull/36605中的@lyzno1将切换组重命名为分段控件
* 杂务：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36606 中升级依赖项
* 壮举：通过https://github.com/langgenius/dify/pull/36603中的@zyssyz123将workflow_version添加到workflow_agent_node_bindings
* 修复：将 .distinct() 替换为 .group_by(Conversation.id)，以实现 PostgreSQL JSON 兼容性，@kuishou68 在 https://github.com/langgenius/dify/pull/36610 中
* 修复：https://github.com/langgenius/dify/pull/36612 中@Lillian68 的类型不匹配（路由显示 uuid：但处理程序显示 str）
* 修复：https://github.com/langgenius/dify/pull/36614 中 @lyzno1 居中对齐滑块拇指
*修复（api）：在https://github.com/langgenius/dify/pull/36611中保留@FFXN的数据集嵌套空形状
* feat(dify-ui)：通过@lyzno1在https://github.com/langgenius/dify/pull/36615中添加状态和进度原语
* 修复：https://github.com/langgenius/dify/pull/36512 中 @linw1995 通过重复数据删除、锁定和准确的新成员计数来限制成员邀请
* 琐事：在 https://github.com/langgenius/dify/pull/36619 中使用 @hjlarry 的 dify_config.BILLING_ENABLED
* 壮举：https://github.com/langgenius/dify/pull/36618 中 @zyssyz123 的输出声明和检查器
* 修复：https://github.com/langgenius/dify/pull/36621 中的 @lyzno1 规范应用程序图标选择器对话框状态
* 杂务：https://github.com/langgenius/dify/pull/36588 中 @asukaminato0721 的当前用户 id dep 注入示例
* 杂务：通过https://github.com/langgenius/dify/pull/36628中的@Tianlel将当前用户注入到控制台处理程序中
*修复：标准化summary_index_setting None以修复@EvanYao826在https://github.com/langgenius/dify/pull/36626中的预览错误
* 杂务：由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/36545 中为 sql 会话注入 dep
*修复（安全）：在https://github.com/langgenius/dify/pull/35796中的@xr843插件守护进程转发（GHSA-gvc6-fh3x-89xh）之前拒绝路径遍历序列
*修复：从https://github.com/langgenius/dify/pull/36627中@EvanYao826的Notion预导入查询中删除未使用的datasource_parameters
* 壮举：在 https://github.com/langgenius/dify/pull/36348 中添加 @wylswz 的 dify cli
* feat(dify-ui): 通过@lyzno1在https://github.com/langgenius/dify/pull/36547中添加textarea原语
* feat(dify-agent): 通过@BeautyyuYanli在https://github.com/langgenius/dify/pull/36633中同步代理进度
* 杂务：通过 https://github.com/langgenius/dify/pull/36652 中的 @Tianlel 将当前用户注入到探索消息处理程序中
* 杂务：在 https://github.com/langgenius/dify/pull/36654 中的@Tianlel 将租户 ID 注入到功能处理程序中
* 杂务：在 https://github.com/langgenius/dify/pull/36655 中的 @Tianlel 在文件处理程序中注入帐户上下文
* 杂务：通过 https://github.com/langgenius/dify/pull/36656 中的 @Tianlel 在扩展处理程序中注入租户 id
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/36595中的@dependabot[bot]将存储组中/api中的boto3从1.43.10提升到1.43.14
* 杂务：将 dependentabot 添加到 https://github.com/langgenius/dify/pull/36424 中的 @wylswz 的 lts 分支
* feat(api)：https://github.com/langgenius/dify/pull/36644 中的 @zyssyz123 的节点输出检查器服务 + 3 个 REST 端点（第 4 阶段 §8）
* 修复（dify-ui）：将选择器故事与https://github.com/langgenius/dify/pull/36680中@lyzno1的基本UI对齐
* 重构（api）：通过 DI 将控制台标签迁移到租户/用户，并通过 @cqjjjzr 在 https://github.com/langgenius/dify/pull/36658 中改进测试
* 重构(api)：通过https://github.com/langgenius/dify/pull/36660中的@cqjjjzr通过DI迁移租户/用户：apikey、扩展、data_source_bearer、oauth_server
* 杂务：通过 https://github.com/langgenius/dify/pull/36678 中的 @Lillian68 将 InstalledApp 类型注释添加到 api 端点
* 杂务：https://github.com/langgenius/dify/pull/36642 中的 @hjlarry 后端功能 api 排除向量空间
* 修复（聊天）：当 https://github.com/langgenius/dify/pull/36227 中的 @zeus1959 触发停止响应时，关闭流式 LLM 生成器
* 杂务：通过 https://github.com/langgenius/dify/pull/36677 中的 @Lillian68 将 EndUser 和 App 类型注释添加到 api 端点
* 杂务：通过 https://github.com/langgenius/dify/pull/36675 中的 @Lillian68 将 App 类型注释添加到 api 端点
* 修复（插件）：在 https://github.com/langgenius/dify/pull/36689 中通过 @lyzno1 对齐本地安装模式间距
* feat(api): 在https://github.com/langgenius/dify/pull/36520中引入@QuantumGhost的模型类型迁移脚本
* 壮举：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/36686 中添加代理后端插件层
* 修复（工具）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36694 中改进自定义集合模式滚动
* feat(openapi,cli)：https://github.com/langgenius/dify/pull/36651中@lin-snow的工作区切换+成员管理
* Chore(web)：限制https://github.com/langgenius/dify/pull/36701中@lyzno1的遗留服务获取导入
* 杂务（api）：https://github.com/langgenius/dify/pull/36707 中@QuantumGhost 遗留模型类型迁移脚本的 Polishhelp 输出
* 重构：将 isinstance 链转换为匹配/大小写（第 6 部分），由 @EvanYao826 在 https://github.com/langgenius/dify/pull/36705 中
* 杂务：通过@escape0707在https://github.com/langgenius/dify/pull/36531中添加pnpm管理的节点运行时
* 修复(web): 在https://github.com/langgenius/dify/pull/36712中添加@Jingyi-Dify的工具和知识列表的加载骨架
* feat(api)：支持 @amr-sheriff 在 https://github.com/langgenius/dify/pull/36265 中为 Milvus 矢量存储显式 TLS
* 重构(cli): 在https://github.com/langgenius/dify/pull/36687中通过@wylswz添加kvstore和平台接口
* 重构（api）：通过https://github.com/langgenius/dify/pull/36533中的@cqjjjzr将console/service_api.dataset.hit_testing迁移到BaseModel
* 修复(ui): https://github.com/langgenius/dify/pull/36720 中 @lyzno1 的芯片样式
*修复：修复DocumentSegment.keywords在https://github.com/langgenius/dify/pull/36715中不能通过@fatelei得到有效的json
* 重构：@zhuiguangzhe2003 在 https://github.com/langgenius/dify/pull/36716 中使用匹配大小写进行草稿变量序列化
* feat(ui): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36729 中添加 kbd 原语
* feat(openapi)：通过https://github.com/langgenius/dify/pull/36693中的@GareArc重新设计具有每个令牌类型路由的身份验证管道
* 测试：通过https://github.com/langgenius/dify/pull/36733中的@escape0707将删除帐户任务移至容器集成
* feat(api)：工作流代理节点的代理后端会话生命周期，作者：https://github.com/langgenius/dify/pull/36724 中的 @zyssyz123
* 琐事：在 https://github.com/langgenius/dify/pull/36735 中安装 @escape0707 可编辑的 dify-agent
* 重构：通过 https://github.com/langgenius/dify/pull/36751 中的 @Tianlel 在仅限租户的控制台处理程序中注入租户 id
* 杂务（代码所有者）：为 https://github.com/langgenius/dify/pull/36731 中的 @laipz8200 的服务 API 文档添加 Riskey
*修复（docker）：在https://github.com/langgenius/dify/pull/36756中固定@KurodaKayn的网络docker节点版本
* 测试：通过https://github.com/langgenius/dify/pull/36738中的@escape0707将工作区成员测试迁移到容器
*修复（docker）：通过https://github.com/langgenius/dify/pull/36757中的@GareArc将dify-agent源复制到生产阶段
* 重构：通过 https://github.com/langgenius/dify/pull/36755 中的 @NishchayMahor 将 @override 装饰器添加到存储后端子类 (#36406)
* 修复：在 https://github.com/langgenius/dify/pull/36767 中通过 @crazywola 处理空插件徽章
* 文档（api）：修复 https://github.com/langgenius/dify/pull/36741 中 @aliyevaladddin 的矢量迁移文档字符串中的拼写错误
* 壮举：在 https://github.com/langgenius/dify/pull/36765 中添加 @Blackoutta 的跨环境应用程序迁移工具包
* 修复：修复https://github.com/langgenius/dify/pull/36769中@fatelei无法从标量中提取元素的问题
* feat(docker)：通过https://github.com/langgenius/dify/pull/36752中的@GareArc将缺少的OPENAPI_*环境变量添加到shared.env.example
* 重构（cli）：在https://github.com/langgenius/dify/pull/36726中使用Store接口作为@wylswz的令牌存储
*测试：在https://github.com/langgenius/dify/pull/36740中通过@escape0707隔离容器测试中的Redis状态
* 琐事：类型检查测试容器测试由 @escape0707 在 https://github.com/langgenius/dify/pull/36790 中进行
* 壮举：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/36797 中为代理 api 添加 DTO
* 测试：@escape0707 在 https://github.com/langgenius/dify/pull/36524 中稳定模态上下文定价测试
* 修复：安装失败的插件不会在 https://github.com/langgenius/dify/pull/36811 中显示 @iamjoel 的图标
* 修复(api): 验证https://github.com/langgenius/dify/pull/36807中@WOLIKIMCHENG的注释列表分页查询
* 杂务：@iamjoel 在 https://github.com/langgenius/dify/pull/36816 中统一插件状态图标位置
* 修复（设备）：在 /device 上显示 SSO 错误，并修复 https://github.com/langgenius/dify/pull/36781 中 @GareArc 外部 SSO 登录时 CLI 空帐户崩溃问题
* 杂务：不在 https://github.com/langgenius/dify/pull/36814 中 @iamjoel 的 url 中存储搜索标签条件
* 重构(cli)：优化https://github.com/langgenius/dify/pull/36810中@wylswz标志解析中的错误处理
* 杂务：在 https://github.com/langgenius/dify/pull/36819 中部署 @hjlarry 的 saas 开发工作流程
*修复（cli）：修复https://github.com/langgenius/dify/pull/36821中@wylswz的样式
* 重构：在 https://github.com/langgenius/dify/pull/36823 中添加 @wylswz 对 web 和 cli 的 ts 通用样式检查
* 重构：将 isinstance 链转换为匹配/大小写（第 7 部分）(#35902) by @EvanYao826 in https://github.com/langgenius/dify/pull/36826
* 修复：删除不必要的 # 类型：忽略 @EvanYao826 在 https://github.com/langgenius/dify/pull/36825 中的注释 (#24494)
* 琐事：在 https://github.com/langgenius/dify/pull/36827 中使用 @hjlarry 进行 saas 开发的单个 SSH_SCRIPT
* 重构（web）：删除应用程序初始化程序并将身份验证启动逻辑移动到https://github.com/langgenius/dify/pull/36818中@lyzno1的路由边界
* 修复(web): 在https://github.com/langgenius/dify/pull/36832中使用@lyzno1的默认配置文件查询缓存
* 杂务：在 https://github.com/langgenius/dify/pull/36798 中的 @myshkin451 的应用程序读取路径中重用注入的 SQLAlchemy 会话
* 修复（auth）：避免https://github.com/langgenius/dify/pull/36847中@lyzno1在刷新重定向中泄漏请求源
* 重构（api）：通过https://github.com/langgenius/dify/pull/36522中的@cqjjjzr将console/service_api.dataset.segment迁移到BaseModel
* 修复（auth）：@lyzno1 在 https://github.com/langgenius/dify/pull/36851 登录后重置个人资料查询
* 重构（api）：通过https://github.com/langgenius/dify/pull/36506中的@cqjjjzr将console/service_api.dataset.document迁移到BaseModel
* 杂务：由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/36750 中为模型注入 dep
* 杂务：通过 https://github.com/langgenius/dify/pull/36859 中的 @krishkantiuj-ren 将缺少的 @override 装饰器添加到管道 WorkflowAppGenerateResponseConverter
* 杂务：由 @hjlarry 在 https://github.com/langgenius/dify/pull/36864 中拆分为单个 app_dsl_version API
* 修复（web）：使用https://github.com/langgenius/dify/pull/36843中@lyzno1生成的当前工作区查询
* 杂务：将 https://github.com/langgenius/dify/pull/36796 中的 @hjlarry 的试用模型拆分为单个 API
* feat(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36856 中添加服务器 oRPC client
* 重构(web)：https://github.com/langgenius/dify/pull/36860 中 @lyzno1 的范围工作流热键
* 修复（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36870 中的合约查询预取工作区和保护路由
* 重构：将 isinstance 链转换为匹配/大小写（第 8 部分）由 @EvanYao826 在 https://github.com/langgenius/dify/pull/36869 中
*修复：＃36585 dep通过@duongynhi000005-oss在https://github.com/langgenius/dify/pull/36845中注入当前用户ID
* 重构：将 isinstance 链转换为匹配/大小写（第 4 部分），由 @EvanYao826 在 https://github.com/langgenius/dify/pull/36274 中
* 重构：通过https://github.com/langgenius/dify/pull/36754中的@Tianlel将当前用户注入到仅用户控制器中
* 重构：通过 https://github.com/langgenius/dify/pull/36846 中的 @duongynhi000005-oss 转换 if isinstance 链以匹配大小写
* 重构：将 isinstance 链转换为匹配/大小写（第 5 部分），由 @EvanYao826 在 https://github.com/langgenius/dify/pull/36503 中
* 修复（api）：通过 @ShuntaroOkuma 在 https://github.com/langgenius/dify/pull/36742 中通过 session_id 删除插件 get_user 中的 EndUser 以进行反向调用
* 修复：MCP 搜索结果仅包含 https://github.com/langgenius/dify/pull/36871 中 @1795771535y-cell 的 MCP 提供商
* 重构：在 https://github.com/langgenius/dify/pull/36822 中使用 @wylswz 进行内部目录导入的绝对路径
* 文档：通过 @bmtriet 在 https://github.com/langgenius/dify/pull/36873 中添加安全策略
*修复（api）：在https://github.com/langgenius/dify/pull/36852中保留@WOLIKIMCHENG的分层估计规则
* 重构：通过 https://github.com/langgenius/dify/pull/36862 中的 @krishkantiuj-ren 将 isinstance 链转换为匹配/大小写语法
* 杂务（cli）：通过https://github.com/langgenius/dify/pull/36878中的@lyzno1将eslint配置移动到cli包中
* 杂务（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36882 中删除 TanStack 开发工具
* 修复（网络）：尊重 https://github.com/langgenius/dify/pull/36883 中 @lyzno1 模型选择器中的市场功能标志
* 杂务：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36884 中更新 deps
* 重构（web）：在https://github.com/langgenius/dify/pull/36857中通过@meaqua9420将工作流程运行道具标记为只读
* 杂务：通过 @cupkk 在 https://github.com/langgenius/dify/pull/36885 中将覆盖装饰器添加到核心存储库
* 壮举：https://github.com/langgenius/dify/pull/35468 中的@ForeignKeyCN 对插件凭据的每个凭据可见性控制
* 修复（web）：在https://github.com/langgenius/dify/pull/36887中由@lyzno1在独立启动中读取pnpm配置环境
* 重构(web)：将本地存储访问迁移到https://github.com/langgenius/dify/pull/36888中@lyzno1的react hook
* 重构(web): 迁移 https://github.com/langgenius/dify/pull/36890 中 @lyzno1 的本地存储钩子使用情况
* 重构（cli/http）：用 https://github.com/langgenius/dify/pull/36711 中 @lin-snow 的独立 HTTP client 替换 ky
* 修复(api): 通过https://github.com/langgenius/dify/pull/36399中的@laipz8200集中远程文件检索
* 杂务：不请求 @hjlarry 在 https://github.com/langgenius/dify/pull/36891 中的云版本的系统功能
* feat(web)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36894 中创建垂直系统功能
* 测试：满足https://github.com/langgenius/dify/pull/36791中@escape0707对迁移容器的严格pyrefly测试
* 文档：在 https://github.com/langgenius/dify/pull/36900 中添加 @lyzno1 的 client 州指南
* 修复（工具）：使用短期会话进行图标查找，以防止 https://github.com/langgenius/dify/pull/36903 中 @goingforstuying-ctrl 导致事务空闲
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/36911 中更新部门
* 杂务（api）：通过https://github.com/langgenius/dify/pull/36910中的@QuantumGhost调整a1b2c3d4e5f6的迁移时间戳元数据
* 琐事：忽略 https://github.com/langgenius/dify/pull/36914 中 @hyoban 的 .vinext
* 修复（web）：在 https://github.com/langgenius/dify/pull/36920 中延迟 @lyzno1 的反应扫描加载程序
* 重构（web）：迁移工作流程，以 @myshkin451 在 https://github.com/langgenius/dify/pull/36918 中折叠存储为特色
* 重构(web): 将NOTE_SHOW_AUTHOR_STORAGE_KEY迁移到https://github.com/langgenius/dify/pull/36915中@kuishou68的useLocalStorage/useSetLocalStorage
* feat(api)：代理应用程序类型 S1 — AppMode.AGENT + 在 https://github.com/langgenius/dify/pull/36829 中通过 @zyssyz123 创建流程 + 绑定
* 重构(cli)：统一Store后面的token存储+在https://github.com/langgenius/dify/pull/36830中通过@GareArc添加主机/帐户切换
* 重构（web）：通过 @popsiclelmlm 在 https://github.com/langgenius/dify/pull/36922 中迁移人为配额通知存储
* 修复（合约）：在 https://github.com/langgenius/dify/pull/36924 中的@lyzno1 在个人资料架构中包含帐户头像 url
*修复（cli）：使422上的应用程序元数据缓存无效，以通过https://github.com/langgenius/dify/pull/36921中的@GareArc清除陈旧数据
* 重构：通过 https://github.com/langgenius/dify/pull/36925 中的 @likalikali 在停止消息端点中注入当前用户 ID
* 修复：https://github.com/langgenius/dify/pull/36930 中 @zyssyz123 的用户令牌
* 重构：从 https://github.com/langgenius/dify/pull/36929 中的 @EvanYao826 从 end_user 和 Conversation_variable 字段中删除未使用的 Flask-RESTX 字段字典 (#28015)
* 修复（网络）：使用 @lyzno1 在 https://github.com/langgenius/dify/pull/36927 中生成的帐户配置文件合约
* feat(dify-agent): 在https://github.com/langgenius/dify/pull/36838中添加@BeautyyuYanli的shell层
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36938 中管理 goto 任何带有atom的打开状态
* 重构(web): 将 NEED_REFRESH_APP_LIST_KEY 迁移到 https://github.com/langgenius/dify/pull/36908 中 @ZongrongLi 的 useLocalStorage/useSetLocalStorage
* 重构（web）：迁移 rag 建议折叠存储（@myshkin451 在 https://github.com/langgenius/dify/pull/36940 中）
* 重构（web）：通过 @popsiclelmlm 在 https://github.com/langgenius/dify/pull/36932 中迁移问题分类器标签提示存储
* 重构：改进网络错误并允许 @wylswz 在 https://github.com/langgenius/dify/pull/36923 中进行详细输出
* ci：ruff cover agent by @asukaminato0721 in https://github.com/langgenius/dify/pull/36949
* 重构(web)：将教育验证存储迁移到 https://github.com/langgenius/dify/pull/36934 中 @yzhkali 的 useLocalStorage
* 重构(web)：将debug-and-preview-panel-width迁移到https://github.com/langgenius/dify/pull/36977中@shifang0511的useSetLocalStorage
* 重构(web)：将工作流变量inpsect-panel-height迁移到https://github.com/langgenius/dify/pull/36982中@shifang0511的useSetLocalStorage
* 重构（api）：通过https://github.com/langgenius/dify/pull/36971中的@cqjjjzr通过DI为多个端点迁移租户/用户
* 重构(web): 将workflow-node-panel-width迁移到https://github.com/langgenius/dify/pull/36983中@shifang0511的useSetLocalStorage
*修复：通过https://github.com/langgenius/dify/pull/36777中的@EvanYao826将json_schema从字符串规范化为VariableEntity中的字典
* 重构（web）：通过 @popsiclelmlm 在 https://github.com/langgenius/dify/pull/36963 中迁移聊天侧边栏折叠存储
*杂务：通过https://github.com/langgenius/dify/pull/36941中的@eryue0220将缺少的@override装饰添加到`api/extensions`
* 杂务：将 :str 添加到 https://github.com/langgenius/dify/pull/36913 中 @asukaminato0721 的 <path: 参数
* 修复：从模板模态创建应用程序没有 @iamjoel 在 https://github.com/langgenius/dify/pull/36987 中的背景
* 修复：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36958 中配置服务器控制台 api url
* 重构(web)：迁移@myshkin451在https://github.com/langgenius/dify/pull/36991中的帐户教育通知存储
* 修复（api）：收紧https://github.com/langgenius/dify/pull/36989中@lyzno1代理v2生成的合约
* 重构：在https://github.com/langgenius/dify/pull/36995中通过@WUMIKE233在内部api用户身份验证中使用显式会话
* 修复：pydantic_core._pydantic_core.ValidationError：https://github.com/langgenius/dify/pull/36753 中 @leslie2046 的 DatasetDetailResponse 的 2 个验证错误
* 壮举：在 https://github.com/langgenius/dify/pull/36980 中添加 @laipz8200 的 Milvus TLS env 示例
*修复（api）：在https://github.com/langgenius/dify/pull/36931中通过@GareArc强制执行工作区成员身份+身份验证管道中的角色检查
* 杂务：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36997 中更新克劳德技能链接
* 重构（api）：通过https://github.com/langgenius/dify/pull/37004中的@cqjjjzr通过DI为多个端点迁移租户/用户
* 修复（web）：https://github.com/langgenius/dify/pull/37003 中 @lyzno1 的身份验证表单状态管理
* 杂务：通过 https://github.com/langgenius/dify/pull/37006 中的 @siyux1927 将缺少的 @override 装饰器添加到 api/configs
* 杂务（deps）：通过 @wylswz 在 https://github.com/langgenius/dify/pull/37008 中将 pyjwt 提升到 2.13.0
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37011 中与 en-US 同步翻译
* 杂务：通过 https://github.com/langgenius/dify/pull/37012 中的 @eryue0220 将缺少的 @override 装饰器添加到 `api/libs`
*杂务：通过https://github.com/langgenius/dify/pull/37013中的@siyux1927将缺少的@override装饰器添加到api/core/rag/extractor
* 重构（api）：通过https://github.com/langgenius/dify/pull/36649中的@cqjjjzr将console.datasets.rag_pipeline部分迁移到BaseModel
* 重构（api）：通过https://github.com/langgenius/dify/pull/36624中的@cqjjjzr将console.datasets.data_source迁移到BaseModel
* feat(agent): 沙箱 / CLI 代理 (dify.shell) + https://github.com/langgenius/dify/pull/36984 中 @zyssyz123 的只读沙箱文件检查器
* feat(api)：通过https://github.com/langgenius/dify/pull/36322中的@QuantumGhost将选择、文件和文件列表表单输入类型引入到Human Input节点
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37035 中与 en-US 同步翻译
* 修复（代理）：完成 CLI 工具 + env shell 引导程序并通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/37033 中添加作曲家验证（ENG-367/368）
* 重构（api）：通过https://github.com/langgenius/dify/pull/37026中的@cqjjjzr通过DI为多个端点迁移租户/用户
*修复：代理工具选择器市场检查@leslie2046在https://github.com/langgenius/dify/pull/37037中的本地和内置工具
* feat(cli)：https://github.com/langgenius/dify/pull/36896中@lin-snow的统一帮助系统
* 修复（api）：https://github.com/langgenius/dify/pull/37057 中的@lyzno1 将代理时间戳返回为纪元秒
* 壮举：支持 @Blackoutta 在 https://github.com/langgenius/dify/pull/37056 中进行 Phoenix 跟踪的自定义跟踪会话 ID
* 壮举：在 https://github.com/langgenius/dify/pull/32130 中增强 @crazywola 的 go to everything
* 修复（ui）：在https://github.com/langgenius/dify/pull/37069中通过@lyzno1对齐表单控制对焦环
* 壮举：通过 @hjlarry 在 https://github.com/langgenius/dify/pull/35511 中改进输出节点
* 修复（api）：通过 @GareArc 在 https://github.com/langgenius/dify/pull/37083 中将设备流批准速率限制公开为环境变量
* 修复（探索）：在 https://github.com/langgenius/dify/pull/37086 中通过 @lyzno1 渲染人类输入预览句柄
* 修复（web）：在https://github.com/langgenius/dify/pull/37091中通过@CodingOnStar触发注册事件之前附加Amplitude用户ID
* 修复(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/37089 中稳定块选择器布局
* 修复：在 https://github.com/langgenius/dify/pull/37093 中通过 @bymle 合并文本进行摘要时避免重复行
* 修复（工作流程）：防止 @lyzno1 在 https://github.com/langgenius/dify/pull/37099 中检查触发文本换行
* 壮举：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/37098 中更新前端代码审查技能
*修复（difyctl）：通过https://github.com/langgenius/dify/pull/37054中的@GareArc改进身份验证登录主机提示UX
* 重构（web）：将搜索输入与https://github.com/langgenius/dify/pull/37101中的@lyzno1的dify ui对齐
* feat(web)：通过https://github.com/langgenius/dify/pull/36840中的@CourTeous33将转发用户身份切换添加到MCP提供者模式
* 修复（网络）：在人工输入表单中添加输入字段面板的样式问题…作者：https://github.com/langgenius/dify/pull/37102 中的@JzoNgKVO
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37105 中与 en-US 同步翻译
* 壮举：@FFXN 在 https://github.com/langgenius/dify/pull/37046 中的片段
* 杂务：通过 https://github.com/langgenius/dify/pull/37109 中的 @lyzno1 更新前端代码所有者
* 重构（api）：通过https://github.com/langgenius/dify/pull/37114中的@cqjjjzr通过DI为多个端点迁移租户/用户
* 重构（web）：由 @archievi 在 https://github.com/langgenius/dify/pull/37118 中将数据集/命中测试组件的 Props 标记为只读
* 杂务（api）：修复@cqjjjzr在https://github.com/langgenius/dify/pull/37119中的几个打字错误
* 重构（api）：删除 https://github.com/langgenius/dify/pull/37124 中 @EvanYao826 的冗余 Typing.cast 调用
* 修复（api）：通过 @PopperLi 在 https://github.com/langgenius/dify/pull/37125 中标准化空工作流程工具文件列表
* 杂务：通过 https://github.com/langgenius/dify/pull/37138 中的 @eryue0220 将缺少的 @override 装饰器添加到 `api/repositories`
* refactor(web): 将 explore/try-app/preview 组件的 Props 标记为只读 (#25219) by @archievi in https://github.com/langgenius/dify/pull/37135
* 修复：删除不必要的 # 类型：忽略 @EvanYao826 在 https://github.com/langgenius/dify/pull/37139 中的注释 (#24494)
*壮举（cli）：https://github.com/langgenius/dify/pull/37036中@GareArc的difyctl发布管道+无令牌安装程序
* feat(api): 支持@leslie2046在https://github.com/langgenius/dify/pull/37104知识导入中嵌入Excel图像
* style(dify-ui): 在https://github.com/langgenius/dify/pull/37144中通过@lyzno1对齐对焦环
* 修复（网页）：在 https://github.com/langgenius/dify/pull/37142 中通过 @lyzno1 对齐视口和覆盖可访问性
* feat(web)：https://github.com/langgenius/dify/pull/37094 中的 @crazywola 在功能预览标志后面设置 /create 和 /refine 斜杠命令
* feat(api)：在https://github.com/langgenius/dify/pull/36839中添加@CourTeous33的MCP用户身份转发
* 杂务：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/37156 中更新 npm deps
* ci：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/37018 中添加 linter 标志
* 修复（web）：https://github.com/langgenius/dify/pull/37163 中@JzoNgKVO 提示编辑器中变量选择器的 z 索引问题
* refactor(web): 将基础/组件的 Props 标记为只读 (#25219) by @EvanYao826 in https://github.com/langgenius/dify/pull/37161
* 杂务（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/37169 中同步 i18n
* feat(web): 支持https://github.com/langgenius/dify/pull/37175中@lyzno1的搜索输入自动对焦
* feat(cli)：采用@lin-snow在https://github.com/langgenius/dify/pull/37090中为一元端点生成的oRPC合约
* 杂务（api）：通过@caoergou在https://github.com/langgenius/dify/pull/37171中将MessagesCleanPolicy从ABC转换为Protocol
* 杂务(api)：https://github.com/langgenius/dify/pull/37182中@caoergou将RecommendAppRetrievalBase和WorkflowPauseEntity从ABC转换为Protocol
* 重构（web）：通过 @popsiclelmlm 迁移 https://github.com/langgenius/dify/pull/37195 中的代码生成器模型存储
* 修复（ui）：在https://github.com/langgenius/dify/pull/37204中通过@lyzno1对齐滚动区域焦点样式
* 杂务（api）：https://github.com/langgenius/dify/pull/37199中@caoergou将BaseTruncator从ABC转换为Protocol
* 杂务（api）：https://github.com/langgenius/dify/pull/37200中@caoergou将BaseQueueDispatcher从ABC转换为Protocol
* 杂务(api): 将 PipelineTemplateRetrievalBase 从 https://github.com/langgenius/dify/pull/37201 中的 @caoergou 的 ABC 转换为 Protocol
* 文档：在 https://github.com/langgenius/dify/pull/37121 中合并 @Jingyi-Dify 的前端代理指导
* 杂务(api)：https://github.com/langgenius/dify/pull/37203中@caoergou将AppContext从ABC转换为Protocol
* feat(agent): 代理文件/代理云存储 — api 后端 (ENG-589) by @zyssyz123 in https://github.com/langgenius/dify/pull/37172
* 修复（agent-v2）：https://github.com/langgenius/dify/pull/37210 中 @lyzno1 的完整控制台 API 合约模式
* 杂务：DI current_user && 在 https://github.com/langgenius/dify/pull/37084 中使用 @asukaminato0721 的检查
* 杂务：从https://github.com/langgenius/dify/pull/37206中@hjlarry的已安装应用程序列表API中过滤不可用的应用程序
*修复（数据集）：在https://github.com/langgenius/dify/pull/37181中@wylswz的命中测试响应中包含create_at段
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/37153 中进行 5 次更新，在 1 个目录中碰撞存储组
* 杂务（deps）：在https://github.com/langgenius/dify/pull/37077中由@dependabot[bot]在/dify-agent中将starlette从1.0.0撞到1.0.1
* 杂务（deps）：https://github.com/langgenius/dify/pull/37076中的@dependabot[bot]将/api中的starlette从1.0.0撞到1.0.1
* feat(api,cli)：https://github.com/langgenius/dify/pull/37212中@GareArc对app-id和workspace-id进行严格的UUID验证
* 测试（cli-e2e）：difyctl 的完整 E2E 测试套件 — auth / run / discovery / Framework / output / error-handling / agent by @gigglewang0417 in https://github.com/langgenius/dify/pull/36874
* 杂务（api）：https://github.com/langgenius/dify/pull/36969 中的 @cqjjjzr 默认抑制未知合约检查
* 重构(web): 将工作流/变量检查组件的 Props 标记为只读 (#25219) by @EvanYao826 in https://github.com/langgenius/dify/pull/37230
* 杂务：[重构/杂务] if isinstance to match case #35902 by @asukaminato0721 in https://github.com/langgenius/dify/pull/37087
* 修复：https://github.com/langgenius/dify/pull/37233 中 @wylswz 在 pr 上正确运行 ci
* feat(dify-ui): https://github.com/langgenius/dify/pull/37235 中 @lyzno1 的文件树
* 修复：代理模式缺少 https://github.com/langgenius/dify/pull/36746 中@cheatofrom 的 BINARY_LINK 和 FILE 类型工具输出的文件卡
* 测试：通过https://github.com/langgenius/dify/pull/37252中的@escape0707将信用池服务测试迁移到Testcontainers
* refactor(web): 将工具/组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37255
* 重构(web)：将计费/组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37249
* 重构(openapi)：在https://github.com/langgenius/dify/pull/37216中通过@lin-snow统一@accepts/@returns装饰器后面的请求验证
* feat(dify-agent)：同步 shell 并返回 https://github.com/langgenius/dify/pull/37159 中 @BeautyyuYanli 的代理更新
* refactor(web): 将工具/mcp 组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37251
* 重构（api）：通过https://github.com/langgenius/dify/pull/37240中的@cqjjjzr通过DI为多个端点迁移租户/用户
* 修复(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/37262 中统一工作流节点单次运行操作
* 重构(web)：在 https://github.com/langgenius/dify/pull/37254 中的@Rohit-Gahlawat 将剩余组件中的 useContext 替换为 use() (#25193)
* 重构(web)：在工作流组件中用 use() 替换 useContext (#25193) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37253
* 重构(web)：用 use() 替换 useContext (React 19) (Issue #25193) by @guangyang1206 in https://github.com/langgenius/dify/pull/36338
* feat: 在https://github.com/langgenius/dify/pull/37263中输入@HanqingZ需要删除的应用程序名称
* 修复：验证会话变量描述长度以防止 https://github.com/langgenius/dify/pull/33038 中 @Nov1c444 出现 varchar(255) 截断错误
* 修复（插件）：将插件列表端点计数与 https://github.com/langgenius/dify/pull/37179 中的 @leslie2046 的实时端点状态对齐
* 修复（api）：要求https://github.com/langgenius/dify/pull/37272中@hjlarry在列表过滤器中选择所有标签
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37269 中与 en-US 同步翻译
* 壮举：在 https://github.com/langgenius/dify/pull/37276 中添加 @lyzno1 的 dify-ui 可折叠原语和重构工作流程折叠用法
* 修复（e2e）：用 https://github.com/langgenius/dify/pull/37266 中的 @gigglewang0417 替换 auth/use.e2e.ts 和 global-flags.e2e.ts 中的非 UUID 工作区 ID
* 壮举：支持 CLI 中 @wylswz 在 https://github.com/langgenius/dify/pull/37232 中导入/导出 dsl
* 修复：在 https://github.com/langgenius/dify/pull/37281 中@hjlarry 邀请激活期间阻止冻结已删除帐户
* 壮举：https://github.com/langgenius/dify/pull/37268 中@zyssyz123 的代理斜线菜单后端
* 重构（web）：在 https://github.com/langgenius/dify/pull/37280 中通过@lyzno1 用 dify-ui 选项卡组成选项卡标题
* refactor(web): 将 header/account-setting 组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37293
* refactor(web): 将杂项组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37294
* 重构(web): 将 explore/ 组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37290
* refactor(web): 将 (commonLayout) 组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37291
* refactor(web): 将共享/组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37292
* refactor(web): 将数据集/组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37300
* 重构(web)：将应用程序/组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37301
* refactor(web): 将基础/组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37302
* refactor(web): 将插件/组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37303
* 重构（web）：将工作流程/组件的 Props 标记为只读（#25219），由 @Rohit-Gahlawat 在 https://github.com/langgenius/dify/pull/37304 中
* refactor(web): 将应用/注释组件的 Props 标记为只读 (#25219) by @Rohit-Gahlawat in https://github.com/langgenius/dify/pull/37299
* 重构：使用 Foxact 包来复制 @hyoban 在 https://github.com/langgenius/dify/pull/37308 中的钩子
* 重构（api）：迁移剩余的控制台 API 以使用 https://github.com/langgenius/dify/pull/37288 中 @cqjjjzr 注入的用户/租户
* 壮举：@wylswz 在 https://github.com/langgenius/dify/pull/37283 中跟踪文档检索
* feat(dify-agent)：在https://github.com/langgenius/dify/pull/37286中同步@BeautyyuYanli的询问人类更新
* 修复(web): 在 https://github.com/langgenius/dify/pull/37310 中显示 @Jingyi-Dify 的插件授权权限提示
* 修复(api): 在 https://github.com/langgenius/dify/pull/37319 中处理 @BeautyyuYanli 的代理延迟工具事件
* 修复（网络）：https://github.com/langgenius/dify/pull/37321 中@JzoNgKVO 创建者过滤器的拼写错误
* 修复(web): 正确的 https://github.com/langgenius/dify/pull/37326 中 @JzoNgKVO 的标签图标
* perf(api)：减少https://github.com/langgenius/dify/pull/36773中@leslie2046聊天流的工作流启动延迟
* feat(agent): 支持https://github.com/langgenius/dify/pull/37324中@zyssyz123的cli工具作用域环境
* 杂务（api）：通过https://github.com/langgenius/dify/pull/37168中的@QuantumGhost将graphon升级到v0.5.1
* 测试：通过 https://github.com/langgenius/dify/pull/33124 中的 @siewcapital 删除导致工具提供程序构造函数参数无效的死助手
* 杂务：在https://github.com/langgenius/dify/pull/37314中添加@wylswz对openapi组的集成测试
* 壮举：https://github.com/langgenius/dify/pull/37285 中 @GareArc 为 /openapi/v1 和 difyctl 统一 ErrorBody 合约
* 重构（web）：在https://github.com/langgenius/dify/pull/37289中通过@popsiclelmlm使用React作为上下文帮助器
* 重构：将剩余的 isinstance 链转换为匹配/大小写（第 9 部分）(#35902) by @EvanYao826 in https://github.com/langgenius/dify/pull/37340
* 杂务（api）：修复@cqjjjzr在https://github.com/langgenius/dify/pull/37237中的几个打字错误
* 修复(web)：正确的 MCP 前向身份标头副本； @CourTeous33 在 https://github.com/langgenius/dify/pull/37176 中保护切换水合
* 壮举：https://github.com/langgenius/dify/pull/37331 中@zyssyz123 的代理斜线菜单后端
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37351 中与 en-US 同步翻译
* 杂务：在 https://github.com/langgenius/dify/pull/37353 中为 @lyzno1 添加 a11y 的 eslint 规则
* 壮举：在 https://github.com/langgenius/dify/pull/37336 中由@crazywola 强化/创建和/细化边缘情况的工作流程生成
* 重构（代理）：用https://github.com/langgenius/dify/pull/37349中@BeautyyuYanli的沙箱API替换工作区检查器
* 重构（cli）：身份验证/工作区清理 - 由 @GareArc 在 https://github.com/langgenius/dify/pull/37219 中记录支持的令牌存储
* 修复：在https://github.com/langgenius/dify/pull/37350中通过@linw1995处理TriggerPostLayer中的GraphRunAbortedEvent
* 修复（web）：在https://github.com/langgenius/dify/pull/37357中@JzoNgKVO重新获取配置期间保留表单状态
* 重构：@zyssyz123 在 https://github.com/langgenius/dify/pull/37356 中的代理草案
* 杂务（api）：https://github.com/langgenius/dify/pull/37358 中的@gmrnlg1971 忽略干净的冗余类型（修复#24494）
* feat(workflow): 在https://github.com/langgenius/dify/pull/37348中通过@Jingyi-Dify更新起始节点UI
* 杂务(web)：支持 https://github.com/langgenius/dify/pull/37363 中 @JzoNgKVO 的开发代理的单独公共 API 目标
* 壮举：@lin-snow 在 https://github.com/langgenius/dify/pull/37313 中对统一 ErrorBody 合约（openapi + difyctl）进行 429 速率限制处理
* feat(api)：通过@CourTeous33在https://github.com/langgenius/dify/pull/37347中转发user_type以进行MCP身份转发（Web应用程序最终用户）
* 杂务（代码所有者）：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/37375 中更新 CLI 所有权
* 杂务：通过 https://github.com/langgenius/dify/pull/37316 中的 @asukaminato0721 更改 dep 更新到 openapi v3
* docs(dify-ui): https://github.com/langgenius/dify/pull/37376 中 @lyzno1 的文档滚动区域内容宽度
* 修复（ui）：在https://github.com/langgenius/dify/pull/37377中通过@lyzno1对齐信息提示弹出框焦点样式
* 修复（agent-v2）：https://github.com/langgenius/dify/pull/37368 中@lyzno1 过滤工作流邀请选项
* 修复(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/37379 中收紧起始块预览卡间距
* 修复：@hyoban 在 https://github.com/langgenius/dify/pull/37378 中获取查询参数 OpenAPI 合约
* 修复：将 toast 堆栈与 https://github.com/langgenius/dify/pull/37382 中的 @lyzno1 的 Base UI 对齐
*修复（ui）：在https://github.com/langgenius/dify/pull/37383中保持加载按钮可通过@lyzno1聚焦
* 杂务（api）：修复@cqjjjzr在https://github.com/langgenius/dify/pull/37248中的几个打字错误
* 重构：修复 @hyoban 在 https://github.com/langgenius/dify/pull/37387 中的 OpenAPI 合约生成模式
* 修复(dify-ui): 在https://github.com/langgenius/dify/pull/37393中恢复@lyzno1的分页跳转焦点
* 测试：迁移https://github.com/langgenius/dify/pull/37398中@escape0707推荐的应用服务测试
* 壮举（代理）：技能和文件有效链 — 驱动运行时暴露、检查器、生命周期、推断工具（https://github.com/langgenius/dify/pull/37370 中的@zyssyz123）
* 修复：在https://github.com/langgenius/dify/pull/37401中使用@Jingyi-Dify的AppIcon渲染市场模板图标
* 重构：https://github.com/langgenius/dify/pull/37412 中的 @gmrnlg1971 替换 if isinstance 为匹配大小写
* 重构：在 https://github.com/langgenius/dify/pull/37422 中输入 @yzhkali 剩余的裸字典注释
* 重构（api）：删除不必要的类型：在https://github.com/langgenius/dify/pull/37423中的@manan-tech的summary_index_service（#24494）中忽略
* 重构：https://github.com/langgenius/dify/pull/37413 中的 @lyzno1 标准化搜索输入和 dify-ui 焦点状态
* 文档：在 https://github.com/langgenius/dify/pull/37409 中添加 @lyzno1 的抽屉故事
*修复：删除https://github.com/langgenius/dify/pull/37404中@lyzno1的分页当前转换
* 重构：在 https://github.com/langgenius/dify/pull/37417 中 @nexiouscaliver 在RecommendedAppService 中显式接受 db.session
* 重构：TagService 在 https://github.com/langgenius/dify/pull/37416 中明确接受 @cn7shi 的 db.session
* 修复：通过 @wylswz 在 https://github.com/langgenius/dify/pull/37329 中将存储 apis 更改为异步
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/37427 中更新部门
* 修复：修复 @fatelei 在 https://github.com/langgenius/dify/pull/37435 中删除徽标不起作用的问题
* 壮举：@wylswz 在 https://github.com/langgenius/dify/pull/37443 中的 rbac 支架
* 修复：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/37442 中调整代理应用程序支持名册 API
* 修复（agent-v2）：https://github.com/langgenius/dify/pull/37441 中 @lyzno1 从草稿图中同步节点作业提示
* 修复：修复将中文存储为unicode，让https://github.com/langgenius/dify/pull/37446中@fatelei搜索失败的问题
*修复（api）：修复https://github.com/langgenius/dify/pull/37438中@QuantumGhost不正确的docker构建上下文
*修复：在https://github.com/langgenius/dify/pull/37448中保留@lyzno1插入的分段控制对焦环
*修复：修复https://github.com/langgenius/dify/pull/37452中的人工输入表单徽标替换为@fatelei
* 修复：在 https://github.com/langgenius/dify/pull/37455 中保留 @wylswz 的聊天流消息的内联图像
* feat(web)：通过 @Jingyi-Dify 在 https://github.com/langgenius/dify/pull/37433 中完善引导 UI
* feat(cli)：通过 @GareArc 在 https://github.com/langgenius/dify/pull/37454 中通过 Cloudflare R2 进行 difyctl 每次提交边缘分布
* 壮举：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/37465 中统一 Agent v2 控制台路由
*测试（dify-ui）：在https://github.com/langgenius/dify/pull/37459中添加@lyzno1严格的Storybook a11y检查
* 修复：https://github.com/langgenius/dify/pull/37467 中的@zyssyz123 项目代理节点输出到草稿图中
* 杂务：https://github.com/langgenius/dify/pull/37402 中 @asukaminato0721 为会话着色的示例
*修复（工作流程）：在https://github.com/langgenius/dify/pull/37469中@Jingyi-Dify重新打开时重置块选择器选项卡
* 杂务：示例在 https://github.com/langgenius/dify/pull/37470 中 @asukaminato0721 的测试中使用 caplog
* 测试：使用 caplog 在 https://github.com/langgenius/dify/pull/37473 中通过@popsiclelmlm 进行工作区权限日志记录
* 修复（api）：在 https://github.com/langgenius/dify/pull/37424 中为 @citizen204 的 Marketplace POST 请求添加有界超时
*壮举（api）：代理ask_ human HITL（第1阶段） - 工作流程节点+代理v2聊天 - https://github.com/langgenius/dify/pull/37437中@zyssyz123的ENG-635
* 测试：从参数传递 db.session 的示例。 #37403 by @asukaminato0721 在 https://github.com/langgenius/dify/pull/37471
* 重构：用 match-case 替换 isinstance 链 (#24487) by @EvanYao826 in https://github.com/langgenius/dify/pull/37482
* 重构：删除不必要的 # 类型：忽略 @EvanYao826 在 https://github.com/langgenius/dify/pull/37481 中的 yaml 导入 (#24494)
* 修复（工作流程）：在https://github.com/langgenius/dify/pull/37477中通过@Jingyi-Dify优化工具选择器副本
* 修复：在 https://github.com/langgenius/dify/pull/37480 中的 @EvanYao826 将 test_remove_app_and_lated_data_task 中的补丁记录器替换为 caplog (#37468)
* 修复(工作流程): https://github.com/langgenius/dify/pull/37474 中 @Jingyi-Dify 限制文件列表上传限制
* 修复（代理）：支持 https://github.com/langgenius/dify/pull/37483 中 @zyssyz123 的代理 ID 聊天和内联草稿绑定
* 修复（代理）：在 https://github.com/langgenius/dify/pull/37485 中 @zyssyz123 发布的参考文献中包含应用程序显示字段
* ci：添加由https://github.com/langgenius/dify/pull/37496中的@MRZHUH在部署/代理分支上触发的部署代理工作流程
* 修复(api): 在https://github.com/langgenius/dify/pull/37444中@manan-tech为Nacos远程设置HTTP请求添加有界超时
*修复（api）：代理v2聊天ask_ human - 超时恢复+跳过https://github.com/langgenius/dify/pull/37492中@zyssyz123恢复时的输入防护
* 修复(watercrawl): https://github.com/langgenius/dify/pull/37495中@luochen211绑定结果下载超时
* 修复(watercrawl): 在https://github.com/langgenius/dify/pull/37500中接受@luochen211的内容类型参数
* 修复（watercrawl）：处理https://github.com/langgenius/dify/pull/37498中@luochen211的非json身份验证错误
* 修复(jina): 在 https://github.com/langgenius/dify/pull/37502 中处理 @luochen211 的非 json 身份验证错误
* 测试：使用 caplog 在 https://github.com/langgenius/dify/pull/37493 中通过 @popsiclelmlm 进行邮件任务日志记录
*修复（cli/e2e）：从fixture DSL中删除LLM节点并修复https://github.com/langgenius/dify/pull/37463中@gigglewang0417的测试断言
* 修复：@zyssyz123 在 https://github.com/langgenius/dify/pull/37508 中的问题
* 杂务：https://github.com/langgenius/dify/pull/37516 中@hyoban 的审计部门
*修复（docker）：删除https://github.com/langgenius/dify/pull/37510中@laipz8200重复的内联样式env
* 测试（dify-ui）：在 https://github.com/langgenius/dify/pull/37519 中添加 @lyzno1 的 Storybook 交互覆盖
* 壮举：通过 @JzoNgKVO 在 https://github.com/langgenius/dify/pull/37517 中优化片段布局
* 修复：支持https://github.com/langgenius/dify/pull/37526中@zyssyz123的Agent v2插件工具运行时参数
*测试：在https://github.com/langgenius/dify/pull/37533中@WaterDimension将test_telemetry_log中的记录器补丁替换为caplog
* 修复（代理）：在https://github.com/langgenius/dify/pull/37534中保留@zyssyz123的代理应用程序提示消息
* 修复（代理）：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/37535 中对齐配置详细信息和输出合约
* 修复：https://github.com/langgenius/dify/pull/37555 中 @Jingyi-Dify 对齐应用程序和知识详细信息 shell 样式
*测试：在https://github.com/langgenius/dify/pull/37554中@jithu2111的版本和rag管道测试中用caplog替换记录器补丁
* 重构：在https://github.com/langgenius/dify/pull/37560中@EvanYao826的测试中用pytest caplog替换mock.patch记录器
* 重构：优化自由计划工作流程运行清理批处理由@zhaohao1004在https://github.com/langgenius/dify/pull/37227中
* 测试：https://github.com/langgenius/dify/pull/37562 中@jithu2111 将剩余测试文件中的记录器补丁替换为 caplog
* 壮举：在 https://github.com/langgenius/dify/pull/37566 中添加 @zyssyz123 的特工名册可观察性 APIs
* 修复（agent-v2）：在https://github.com/langgenius/dify/pull/37567中@lyzno1在代理列表中包含工作流程引用
*修复（api）：允许内联工作流代理灵魂由@zyssyz123保存在https://github.com/langgenius/dify/pull/37563中
*修复（api）：在https://github.com/langgenius/dify/pull/37570中隐藏@zyssyz123安装的应用程序中的代理应用程序
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37557 中与 en-US 同步翻译
* 杂务：https://github.com/langgenius/dify/pull/37568 中@hjlarry 的工作流程恢复沙箱升级
*修复（代理）：通过https://github.com/langgenius/dify/pull/37571中的@zyssyz123添加代理应用程序重复端点
* 修复（web）：防止https://github.com/langgenius/dify/pull/37576中@lyzno1的工作区触发对焦环clipping
* 壮举：@hyoban 在 https://github.com/langgenius/dify/pull/35670 中部署应用程序
* feat(agent): 将知识库检索连接到https://github.com/langgenius/dify/pull/37577中的@BeautyyuYanli运行时
* 修复：toast 长错误消息可能会导致 @iamjoel 在 https://github.com/langgenius/dify/pull/37581 中未全部显示
* 修复（api）：通过https://github.com/langgenius/dify/pull/37586中的@linw1995在管道生成器中强制执行文档创建限制
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37587 中与 en-US 同步翻译
* feat(agent): 在https://github.com/langgenius/dify/pull/37593中添加@BeautyyuYanli的Agent Stub驱动命令
* 修复：改进 https://github.com/langgenius/dify/pull/37592 中 @hyoban 的服务 API OpenAPI 合约
* 修复（代理）：通过 https://github.com/langgenius/dify/pull/37578 中的 @zyssyz123 调整名册可观察性日志合约
* 修复（代理）：在 https://github.com/langgenius/dify/pull/37597 中同步 @zyssyz123 生成的可观察性合约
* 修复：在 https://github.com/langgenius/dify/pull/37595 中添加 @hyoban 的服务 api openapi 描述
*壮举（api）：@QuantumGhost在https://github.com/langgenius/dify/pull/37462中支持LLM轮询
* 杂务：端口 isinstance 以匹配 @asukaminato0721 在 https://github.com/langgenius/dify/pull/37271 中的大小写
* 修复：https://github.com/langgenius/dify/pull/37600 中的@zyssyz123 流式传输代理应用程序后端增量
* 修复：https://github.com/langgenius/dify/pull/37601 中需要@zyssyz123 的代理应用程序角色
*修复：清理不必要的|无类型注释 (#35557) by @EvanYao826 in https://github.com/langgenius/dify/pull/36824
* 杂务：从参数传递 db.session 的示例。通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/37561
* 测试(cli/e2e): 在https://github.com/langgenius/dify/pull/37518中添加@gigglewang0417对error.server结构的ErrorBody合约测试
* feat(agent-v2)：将每晚更新同步到https://github.com/langgenius/dify/pull/37599中@BeautyyuYanli的主程序
* ci：由 @MRZHUH 在 https://github.com/langgenius/dify/pull/37606 中构建并推送 dify-agent-backend 镜像
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37611 中与 en-US 同步翻译
* 杂务：通过 https://github.com/langgenius/dify/pull/37479 中的 @hjlarry 改善邀请会员流程
*修复（docker）：通过@laipz8200在https://github.com/langgenius/dify/pull/36332中强化默认SSRF代理出口
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/37612 中集中访问主要导航路线
* 测试：https://github.com/langgenius/dify/pull/37618中@WaterDimension使用caplog进行注解服务日志记录
* 重构（测试）：在 https://github.com/langgenius/dify/pull/37617 中 @EvanYao826 在服务测试中用 caplog 替换 mock_logger (#37468)
*修复（代理）：在https://github.com/langgenius/dify/pull/37620中@zyssyz123在灵魂保存中保持调试器会话
* 文档：丰富@hyoban 在 https://github.com/langgenius/dify/pull/37615 中生成的服务 API 描述
* 修复（代理）：https://github.com/langgenius/dify/pull/37625 中的 @zyssyz123 将名册与应用程序配额分离
* 杂务（deps）：在 https://github.com/langgenius/dify/pull/37234 中通过 @dependabot[bot] 进行 13 次更新，在 1 个目录中碰撞 github-actions-dependencies 组
* 修复（网页）：https://github.com/langgenius/dify/pull/37633 中 @lyzno1 的导航链接聚焦环样式
*修复（代理）：通过https://github.com/langgenius/dify/pull/37626中的@zyssyz123解决花名册文件下载版本和日志过滤器
* 杂务（agent-v2）：将每晚更新同步到 https://github.com/langgenius/dify/pull/37610 中的@BeautyyuYanli 主站（2026-06-18）
* 壮举：https://github.com/langgenius/dify/pull/37107 中@WTW0313 的 RBAC
* 杂务：@asukaminato0721 在 https://github.com/langgenius/dify/pull/37603 中的 Caplog 类型
* 杂务：在https://github.com/langgenius/dify/pull/37609中@asukaminato0721的测试中添加更多类型
* 重构（api）：在https://github.com/langgenius/dify/pull/36945中通过@laipz8200输入带有枚举的最终用户记录
* 修复：https://github.com/langgenius/dify/pull/37666 中@EvanYao826 在resume_workflow_execution 中使用f 字符串作为错误消息
* 重构(web)：通过https://github.com/langgenius/dify/pull/37408中的@SukkaW将共享的localStorage迁移到createLocalStorageState
* 杂务：添加类型以通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/37191 中进行测试
* 杂务：在 https://github.com/langgenius/dify/pull/37656 中移动 @asukaminato0721 的一个 db.session
* 测试：迁移@escape0707在https://github.com/langgenius/dify/pull/37672中的命中测试转储记录测试
* 修复（代理）：https://github.com/langgenius/dify/pull/37686 中 @zyssyz123 返回重复代理名称的冲突
* 重构：在 https://github.com/langgenius/dify/pull/37682 中 @Rohit-Gahlawat 在 SavedMessageService 中显式接受 db.session
* 修复（watercrawl）：@luochen211 在 https://github.com/langgenius/dify/pull/37515 中绑定 client 请求超时
* 重构：https://github.com/langgenius/dify/pull/37694 中的 @Rohit-Gahlawat 在 FeedbackService 中显式接受 db.session
* 重构：https://github.com/langgenius/dify/pull/37693 中的 @Rohit-Gahlawat 在 APIBasedExtensionService 中显式接受 db.session
* 重构：https://github.com/langgenius/dify/pull/37695 中的 @Rohit-Gahlawat 在 FileService.get_upload_files_by_ids 中显式接受 db.session
* 重构（测试）：在 https://github.com/langgenius/dify/pull/37697 中@MeloMei 的计费和矢量服务测试中用 caplog 替换记录器模拟
* 重构：在 https://github.com/langgenius/dify/pull/37621 中的 @WaterDimension 在 core/rag 测试中用 caplog 替换补丁记录器 (#37468)
* 修复：在 https://github.com/langgenius/dify/pull/37669 中跳过@he-yufeng 遗留数据集配置提取中的空工具条目
* feat(web): 在https://github.com/langgenius/dify/pull/37644中添加@lyzno1的应用程序外壳跳过导航
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/37663中的@lyzno1将base-ui提升到v1.6.0
*修复（网络）：简化https://github.com/langgenius/dify/pull/37664中@lyzno1完成的抽屉关闭
* 测试（dify-ui）：将选择的表单故事与https://github.com/langgenius/dify/pull/37670中的@lyzno1的字段原语对齐
* 修复：https://github.com/langgenius/dify/pull/37630 中 @hjlarry 刷新 OAuth 后凭证缓存无效
* 杂务：通过 https://github.com/langgenius/dify/pull/37721 中的 @QuantumGhost 删除旧的 CI 配置
* 修复：为 https://github.com/langgenius/dify/pull/37637 中 @EvanYao826 的 Jina 凭证验证请求添加有限超时
* 修复：https://github.com/langgenius/dify/pull/37638 中的 @EvanYao826 在 Firecrawl 凭证验证中添加有界超时
* 修复（watercrawl）：不要在 https://github.com/langgenius/dify/pull/37685 中使用 @he-yufeng 的 timeout=None 禁用请求超时
* 杂务：清理 https://github.com/langgenius/dify/pull/37602 中的 @asukaminato0721 的一些 isinstance
* feat(cli)：恢复https://github.com/langgenius/dify/pull/37624中@lin-snow的省略和长度感知命令建议
*修复（cli）：将difyctl帮助文本与https://github.com/langgenius/dify/pull/37728中的@lin-snow的实际标志和错误信封对齐
* feat(web): 在 https://github.com/langgenius/dify/pull/37729 中隐藏 @JzoNgKVO 的片段
*壮举（代理）：在https://github.com/langgenius/dify/pull/37726中添加@zyssyz123检查API的技能
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/37731中的@lyzno1升级npm依赖项
* 修复：在 https://github.com/langgenius/dify/pull/37718 中添加 @hjlarry 的遗留代码片段权限
* 重构（测试）：在https://github.com/langgenius/dify/pull/37715中@EvanYao826在5个服务测试中用caplog替换mock_logger（#37468）
* 修复（cli）：https://github.com/langgenius/dify/pull/37737 中 @GareArc 的文档 HITL 暂停退出代码为 0，而不是 2
*修复（hitl）：在https://github.com/langgenius/dify/pull/37556中通过@GareArc通过CLI恢复表单时停止混淆404
* 修复(agent): 支持在 https://github.com/langgenius/dify/pull/37734 中恢复 @zyssyz123 的名册版本
*修复（cli）：通过https://github.com/langgenius/dify/pull/37733中的@GareArc将运行应用程序--对话模式列表与运行时门对齐
* 修复：https://github.com/langgenius/dify/pull/37425中@he-yufeng绑定的OperationService计费请求
* 杂务：删除https://github.com/langgenius/dify/pull/37724中@fatelei的重复代码
* 修复：通过 @WTW0313 在 https://github.com/langgenius/dify/pull/37732 中的各个组件中添加 RBAC 功能
* 修复（cli）：将 --think 过滤应用于 https://github.com/langgenius/dify/pull/37736 中 @lin-snow 的工作流应用程序输出
*修复（cli）：使身份验证设备撤销——是的，@GareArc在https://github.com/langgenius/dify/pull/37740中的一个真正的标志
* 重构（openapi/cli）：通过@GareArc在https://github.com/langgenius/dify/pull/37641中将应用程序使用界面与工作室应用程序构建界面分开
* 修复：在 https://github.com/langgenius/dify/pull/37745 中禁用@hyoban 的部署 DSL 导入
*修复：防止遗留停止中断https://github.com/langgenius/dify/pull/37129中@Blackoutta运行的GraphEngine
* 修复（代理）：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/37744 中添加稳定的调试对话
* 修复：在https://github.com/langgenius/dify/pull/37741中添加@hjlarry通知的轮廓按钮
* 修复：在 https://github.com/langgenius/dify/pull/37753 中添加 @linw1995 租户级 Redis 信用池扣减锁
* 壮举：在 https://github.com/langgenius/dify/pull/37752 中使用 @wylswz 的 rbac 保护 openapi
* 修复（代理）：通过 @zyssyz123 在 https://github.com/langgenius/dify/pull/37754 中将名册节点切换为内联
* 修复（测试）：增强 Toast 模拟并通过 @WTW0313 在 https://github.com/langgenius/dify/pull/37749 中添加仅预览的应用程序警告测试
* 修复(web): 从 https://github.com/langgenius/dify/pull/37758 中 @lyzno1 的热键派生发布快捷方式显示
*修复：在https://github.com/langgenius/dify/pull/37757中@EvanYao826的测试中用caplog替换mock_logger
* 重构(web)：通过 @hyoban 在 https://github.com/langgenius/dify/pull/37762 中使用 Jotai 管理创建发布表单
* 壮举（代理）：在 https://github.com/langgenius/dify/pull/37759 中添加 @zyssyz123 访问名册服务 api
* 杂务：不使用 https://github.com/langgenius/dify/pull/37421 中 @fatelei 的 request.scoped 会话
* 修复(web): 恢复https://github.com/langgenius/dify/pull/37774中@Jingyi-Dify的联系我们支持菜单
* 修复：https://github.com/langgenius/dify/pull/37766 中 @zyssyz123 按帐户隔离代理调试对话
* 重构(web): 整合https://github.com/langgenius/dify/pull/37765中@hyoban创建的发布状态
* 重构：通过 @hyoban 在 https://github.com/langgenius/dify/pull/37565 中调整产品前缀的文档链接
* 杂务：在 https://github.com/langgenius/dify/pull/37777 中添加 ENTERPRISE_RBAC_API_URL 检查和更新 @fatelei 的权限密钥
* 重构：通过 @wylswz 在 https://github.com/langgenius/dify/pull/37106 中改进流关闭 2
* 壮举：在 https://github.com/langgenius/dify/pull/37784 中添加代理调试对话刷新 API by @zyssyz123
* 修复（app）：从https://github.com/langgenius/dify/pull/37761中的@GareArc可列出的应用程序类型中派生get-app --mode白名单
* 重构：通过 @myshkin451 在 https://github.com/langgenius/dify/pull/37785 中将会话传递到命中测试服务
* 修复：https://github.com/langgenius/dify/pull/37788中支持@zyssyz123预览代理重复角色和技能文件
* 壮举（保留）：在 https://github.com/langgenius/dify/pull/37747 中添加 @41tair 运行存档包的 V2 工作流程
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/37783 中整合部署状态原子
* feat: 支持https://github.com/langgenius/dify/pull/37791中@fatelei启用的查询目录添加计费功能
* feat(agent-v2)：将每晚更新同步到 https://github.com/langgenius/dify/pull/37651 中的 @BeautyyuYanli 主站 (2026-06-22)
*壮举(cli)：准备@GareArc在https://github.com/langgenius/dify/pull/37794中发布alpha版本
* 修复：代码片段历史详细信息包括 https://github.com/langgenius/dify/pull/37797 中 @FFXN 的输入字段
* 修复（网络）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/37800 中完善主要导航和部署工具提示样式
* 修复（代理）：代理作曲家在 https://github.com/langgenius/dify/pull/37803 中通过 @linw1995 发布验证
* 修复：纠正https://github.com/langgenius/dify/pull/37796中@xiaweiwei67-stack的误导性密码长度验证消息
* 杂务：https://github.com/langgenius/dify/pull/37804 中 @fatelei 的兼容旧角色更新
*修复（api）：在https://github.com/langgenius/dify/pull/37806中禁用@wylswz的gunicorn控制袜子
*壮举（chatflow）：将 LLM 推理流式传输至 https://github.com/langgenius/dify/pull/37460 中 @lin-snow 的实时思维小组
* 重构（web）：从 https://github.com/langgenius/dify/pull/37811 中的 @hyoban 同步下一个路由的部署路由状态
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37802 中与 en-US 同步翻译
* 修复：修复https://github.com/langgenius/dify/pull/37812中@fatelei的逻辑
* 修复（代理）：在 https://github.com/langgenius/dify/pull/37815 中注入 env 内联命令，而不是通过 @linw1995 持久保存工作区文件
* 修复（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/37818 中稳定部署状态水合作用
* feat(agent)：通过https://github.com/langgenius/dify/pull/37813中的@zyssyz123将名册代理复制到工作流内联代理中
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37760 中与 en-US 同步翻译
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/37819 中使用原子管理部署异步状态
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/37823 中简化部署异步所有权
* 重构：用于db.session反馈服务。由https://github.com/langgenius/dify/pull/37763中的@Kunal152000导出反馈
* 重构（web）：在 https://github.com/langgenius/dify/pull/37825 中@hyoban 的部署中重用无限滚动钩子
* 重构：在https://github.com/langgenius/dify/pull/37832中通过@Kunal152000在ApiKeyAuthService中显式接受db.session
*修复（代理）：将工作流代理保存为https://github.com/langgenius/dify/pull/37848中@zyssyz123的控制台花名册应用程序
* 修复：通过 https://github.com/langgenius/dify/pull/37853 中的 @WTW0313 将 RBAC 功能切换添加到环境配置中
* 重构（web）：通过 @hyoban 在 https://github.com/langgenius/dify/pull/37851 中简化部署操作状态
* 重构：通过 @myshkin451 在 https://github.com/langgenius/dify/pull/37849 中将会话注入到音频 TTS 中
* 修复(web)：通过 @Jingyi-Dify 在 https://github.com/langgenius/dify/pull/37837 中调整市场 i18n 术语
* 修复：https://github.com/langgenius/dify/pull/37847 中@gmrnlg1971 通过会话管理重构解决 DetachedInstanceError
* 重构：通过https://github.com/langgenius/dify/pull/37639中的@EvanYao826将会话作为knowledge_retrieval_inner_service和agent_app_feature_service中的参数传递
* 修复（网页）：通过 @Jingyi-Dify 在 https://github.com/langgenius/dify/pull/37844 中完善入门主导航和首选项选项卡
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37855 中与 en-US 同步翻译
* 琐事：更新多种语言的权限密钥和描述，以简化 https://github.com/langgenius/dify/pull/37859 中的 @WTW0313 的应用程序和数据集管理短语
* 杂务：rm所有mock_logger by @asukaminato0721 in https://github.com/langgenius/dify/pull/37786
* 杂务(web)：清理https://github.com/langgenius/dify/pull/37854中@hyoban未使用的生产代码
* 杂务：使 AccountService.load_user 使用 https://github.com/langgenius/dify/pull/37764 中 @asukaminato0721 传递的会话
*修复（cli）：使应用程序信息缓存能够适应损坏的条目+通过https://github.com/langgenius/dify/pull/37852中的@GareArc的结构化信封（WTA-257）路由错误
* 壮举：CLI 中的表面分离模式 LLM 推理和 @lin-snow 在 https://github.com/langgenius/dify/pull/37828 中的工作流程运行预览
* 杂务（deps）：https://github.com/langgenius/dify/pull/37861 中 @wylswz 为 CVE 修复增加 dep 版本
* 修复：为 https://github.com/langgenius/dify/pull/37846 中 @hjlarry 的模板添加 is_cloud_only
* 修复：https://github.com/langgenius/dify/pull/37870 中 @lyzno1 对齐开关焦点轮廓
* 杂务(web)：删除https://github.com/langgenius/dify/pull/37866中@hyoban未使用的前端代码
* 修复：https://github.com/langgenius/dify/pull/37862中@AlwaysBluer更新opensearch-py导致的Lindorm向量存储错误
* 壮举：在 https://github.com/langgenius/dify/pull/37867 中过滤数据集运算符并通过@fatelei 添加错过权限密钥
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/37879 中的小屏幕中横幅存在 ui 问题
* 杂务（knip）：在 https://github.com/langgenius/dify/pull/37882 中添加 mdx 支持清理未使用的代码（@hyoban）
* 重构（测试）：在 https://github.com/langgenius/dify/pull/37889 中 @lin-hongkuan 的 Web 登录测试中使用 caplog
* 杂务（网络）：修剪 https://github.com/langgenius/dify/pull/37888 中@hyoban 未使用的 i18n 翻译
* 重构：在https://github.com/langgenius/dify/pull/37890中@Oxygen56的测试中用pytest caplog替换记录器补丁
* 修复：https://github.com/langgenius/dify/pull/37903 中 @Jingyi-Dify 尊重旧版插件权限，无需 RBAC
*壮举：删除成员删除https://github.com/langgenius/dify/pull/37904中@fatelei的rbac绑定
* 修复：在 https://github.com/langgenius/dify/pull/37909 中 @hyoban 过度滚动时保持主体背景一致
* 修复：在生成器之前急切地验证对话，以防止 @functionkiller 在 https://github.com/langgenius/dify/pull/37224 中挂起
* 杂务：添加类型以通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/37876 中进行测试
* 杂务（i18n）：https://github.com/langgenius/dify/pull/37891 中的 @github-actions[bot] 与 en-US 同步翻译
* 文档：在 https://github.com/langgenius/dify/pull/37913 中添加 @Jingyi-Dify 的 Dify Cloud 支持联系人
* 修复：通过 @WTW0313 修复 https://github.com/langgenius/dify/pull/37872 中的前端 rbac 问题
* 构建（deps）：通过 @gateway 在 https://github.com/langgenius/dify/pull/37860 中更新 Bleach 消毒剂安全修复程序
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/37916 中与 en-US 同步翻译
*修复：通过https://github.com/langgenius/dify/pull/37921中的@FFXN删除多余的片段权限
* 修复：改进 https://github.com/langgenius/dify/pull/37919 中@QuantumGhost 工作流程执行的错误处理
* 壮举：通过 https://github.com/langgenius/dify/pull/37933 中的 @WTW0313 增强应用程序权限和访问控制
* 重构（测试）：用 https://github.com/langgenius/dify/pull/37935 中 @manan-tech 的 test_dataset_models.py 中的真实 UploadFile 模型替换 SimpleNamespace
*壮举：通过@fatelei在https://github.com/langgenius/dify/pull/37937中更新监视器权限密钥和插件权限密钥
* 重构（测试）：用 https://github.com/langgenius/dify/pull/37922 中的 @xiejl001 的 caplog 替换记录器模拟（#37468）
* 修复：https://github.com/langgenius/dify/pull/37940 中@lyzno1 的抛光工具提供商选择和详细抽屉
* 修复(api): @linw1995 在 https://github.com/langgenius/dify/pull/37942 中的统一凭证兼容性
* 壮举：通过 @WTW0313 在 https://github.com/langgenius/dify/pull/37943 中添加水合支持和倒计时组件的回退
* 杂务：将 https://github.com/langgenius/dify/pull/37929 中的 @wylswz 版本升级为 1.15.0

## 新贡献者
* @algojogacor 在 https://github.com/langgenius/dify/pull/36361 中做出了第一个贡献
* @lord-Rheagar 在 https://github.com/langgenius/dify/pull/36478 中做出了第一个贡献
* @liaoyl830 在 https://github.com/langgenius/dify/pull/36534 中做出了第一个贡献
* @Lillian68 在 https://github.com/langgenius/dify/pull/36559 中做出了第一个贡献
* @zhang-liz 在 https://github.com/langgenius/dify/pull/36565 中做出了第一个贡献
* @Tianlel 在 https://github.com/langgenius/dify/pull/36628 中做出了第一个贡献
* @zeus1959 在 https://github.com/langgenius/dify/pull/36227 中做出了第一个贡献
* @amr-sheriff 在 https://github.com/langgenius/dify/pull/36265 中做出了第一个贡献
* @zhuiguangzhe2003 在 https://github.com/langgenius/dify/pull/36716 中做出了第一个贡献
* @NishchayMahor 在 https://github.com/langgenius/dify/pull/36755 中做出了第一个贡献
* @aliyevaladddin 在 https://github.com/langgenius/dify/pull/36741 中做出了第一个贡献
* @WOLIKIMCHENG 在 https://github.com/langgenius/dify/pull/36807 中做出了第一个贡献
* @myshkin451 在 https://github.com/langgenius/dify/pull/36798 中做出了第一个贡献
* @krishkantiuj-ren 在 https://github.com/langgenius/dify/pull/36859 中做出了第一个贡献
* @duongynhi000005-oss 在 https://github.com/langgenius/dify/pull/36845 中做出了第一个贡献
* @ShuntaroOkuma 在 https://github.com/langgenius/dify/pull/36742 中做出了第一个贡献
* @1795771535y-cell 在 https://github.com/langgenius/dify/pull/36871 中做出了第一个贡献
* @bmtriet 在 https://github.com/langgenius/dify/pull/36873 中做出了第一个贡献
* @meaqua9420 在 https://github.com/langgenius/dify/pull/36857 中做出了第一个贡献
* @cupkk 在 https://github.com/langgenius/dify/pull/36885 中做出了第一个贡献
* @ForeignKeyCN 在 https://github.com/langgenius/dify/pull/35468 中做出了第一个贡献
* @goingforstuying-ctrl 在 https://github.com/langgenius/dify/pull/36903 中做出了第一个贡献
* @popsiclelmlm 在 https://github.com/langgenius/dify/pull/36922 中做出了第一个贡献
* @likalikali 在 https://github.com/langgenius/dify/pull/36925 中做出了第一个贡献
* @ZongrongLi 在 https://github.com/langgenius/dify/pull/36908 中做出了第一个贡献
* @yzhkali 在 https://github.com/langgenius/dify/pull/36934 中做出了第一个贡献
* @shifang0511 在 https://github.com/langgenius/dify/pull/36977 中做出了第一个贡献
* @eryue0220 在 https://github.com/langgenius/dify/pull/36941 中做出了第一个贡献
* @WUMIKE233 在 https://github.com/langgenius/dify/pull/36995 中做出了第一个贡献
* @siyux1927 在 https://github.com/langgenius/dify/pull/37006 中做出了第一个贡献
* @bymle 在 https://github.com/langgenius/dify/pull/37093 中做出了第一个贡献
* @archievi 在 https://github.com/langgenius/dify/pull/37118 中做出了第一个贡献
* @PopperLi 在 https://github.com/langgenius/dify/pull/37125 中做出了第一个贡献
* @gigglewang0417 在 https://github.com/langgenius/dify/pull/36874 中做出了第一个贡献
* @cheatofrom 在 https://github.com/langgenius/dify/pull/36746 中做出了第一个贡献
* @Rohit-Gahlawat 在 https://github.com/langgenius/dify/pull/37255 中做出了第一个贡献
* @siewcapital 在 https://github.com/langgenius/dify/pull/33124 中做出了第一个贡献
* @gmrnlg1971 在 https://github.com/langgenius/dify/pull/37358 中做出了第一个贡献
* @manan-tech 在 https://github.com/langgenius/dify/pull/37423 中做出了第一个贡献
* @nexiouscaliver 在 https://github.com/langgenius/dify/pull/37417 中做出了第一个贡献
* @cn7shi 在 https://github.com/langgenius/dify/pull/37416 中做出了第一个贡献
* @citizen204 在 https://github.com/langgenius/dify/pull/37424 中做出了第一个贡献
* @MRZHUH 在 https://github.com/langgenius/dify/pull/37496 中做出了第一个贡献
* @luochen211 在 https://github.com/langgenius/dify/pull/37495 中做出了第一个贡献
* @WaterDimension 在 https://github.com/langgenius/dify/pull/37533 中做出了第一个贡献
* @jithu2111 在 https://github.com/langgenius/dify/pull/37554 中做出了第一个贡献
* @zhaohao1004 在 https://github.com/langgenius/dify/pull/37227 中做出了第一个贡献
* @SukkaW 在 https://github.com/langgenius/dify/pull/37408 中做出了第一个贡献
* @MeloMei 在 https://github.com/langgenius/dify/pull/37697 中做出了第一个贡献
* @he-yufeng 在 https://github.com/langgenius/dify/pull/37669 中做出了第一个贡献
* @xiaweiwei67-stack 在 https://github.com/langgenius/dify/pull/37796 中做出了第一个贡献
* @Kunal152000 在 https://github.com/langgenius/dify/pull/37763 中做出了第一个贡献
* @lin-hongkuan 在 https://github.com/langgenius/dify/pull/37889 中做出了第一个贡献
* @Oxygen56 在 https://github.com/langgenius/dify/pull/37890 中做出了第一个贡献
* @functionkiller 在 https://github.com/langgenius/dify/pull/37224 中做出了第一个贡献
* @gateway 在 https://github.com/langgenius/dify/pull/37860 中做出了第一个贡献
* @xiejl001 在 https://github.com/langgenius/dify/pull/37922 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.14.2...1.15.0

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.15.0` · 📅 发布：2026-06-25 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.15.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
