---
title: "dify 1.14.1"
project: "dify"
repo: "langgenius/dify"
tag: "1.14.1"
version: "1.14.1"
published: "2026-05-12"
type: "patch"
lang: "zh"
---

# dify 1.14.1

## 🚀 v1.14.1 有什么新功能？

v1.14.1 是 v1.14.0 之后的一个补丁版本，专注于安全强化、工作流程和知识库稳定性、部署清理以及持续的 UI 平台迁移。

### 🔐 安全

- **自托管 `SECRET_KEY` 强化** — Docker 部署不再依赖公共默认密钥。当 `SECRET_KEY` 留空时，API 通过配置的存储后端生成并保留运行时密钥，而显式配置的密钥继续像以前一样工作。感谢 [#36049](https://github.com/langgenius/dify/pull/36049) 中的@laipz8200。
- **内部指标端点保护** - `/threads` 和 `/db-pool-stat` 经过强化，以避免未经身份验证的内部运行时和数据库池详细信息的暴露。感谢 [#35665](https://github.com/langgenius/dify/pull/35665) 中的 @orbisai0security。
- **帐户和工具隔离** — 修复了 `GET /account/avatar` 中的 IDOR 问题，并将内置工具默认凭据清理范围限定到当前租户。感谢 [#35771](https://github.com/langgenius/dify/pull/35771) 和 [#35887](https://github.com/langgenius/dify/pull/35887) 中的 @NeatGuyCoding 和 @GareArc。
- **依赖项安全性** — 针对 CVE-2026-42208 升级了 LiteLLM，并刷新了多个后端依赖项，包括 `urllib3`、`gunicorn`、`gitpython`、`mako`、Google SDK 包、存储库和 OpenTelemetry 导出程序包。感谢@crazywola [#35953](https://github.com/langgenius/dify/pull/35953)、[#35779](https://github.com/langgenius/dify/pull/35779)、[#35791](https://github.com/langgenius/dify/pull/35791)、[#35863](https://github.com/langgenius/dify/pull/35863)、[#35864](https://github.com/langgenius/dify/pull/35864)、[#35958](https://github.com/langgenius/dify/pull/35958)、 [#36011](https://github.com/langgenius/dify/pull/36011)、[#36012](https://github.com/langgenius/dify/pull/36012)、[#36013](https://github.com/langgenius/dify/pull/36013)、[#36017](https://github.com/langgenius/dify/pull/36017) 和 [#36050](https://github.com/langgenius/dify/pull/36050)。

### 🧩 工作流程、HITL 和应用程序运行时

- **工作流程稳定性** - 通过后端 API 恢复工作流程版本加载，修复大型应用程序列表的在线用户轮询，防止预览调整大小观察者循环，并避免试用工作流程中的模式模型冲突。感谢 [#35817](https://github.com/langgenius/dify/pull/35817)、[#35786](https://github.com/langgenius/dify/pull/35786)、[#35936](https://github.com/langgenius/dify/pull/35936) 和 [#36061](https://github.com/langgenius/dify/pull/36061) 中的 @hjlarry 和 @lyzno1。
- **工作流程创作改进** — 修复了子变量的变量引用选择器行为、工作流程节点标题溢出、条件运算符弹出窗口、工作流程清单语义和 KB 元数据筛选字段选择。感谢 [#35732](https://github.com/langgenius/dify/pull/35732)、[#35740](https://github.com/langgenius/dify/pull/35740)、[#35828](https://github.com/langgenius/dify/pull/35828)、[#36006](https://github.com/langgenius/dify/pull/36006) 中的 @iamjoel、@hjlarry、@lyzno1 和 @shawny011717，以及[#34149](https://github.com/langgenius/dify/pull/34149)。
- **工作流程执行正确性** - 保留单次运行输入变量类型，修复了 `structured_output_enabled` 验证，修复了节点输出显示中的文件预览 URL 处理，以及 v1.14.0 工作流程上畅通无阻的插件模型选择器工具。感谢 [#35710](https://github.com/langgenius/dify/pull/35710)、[#35747](https://github.com/langgenius/dify/pull/35747)、[#34150](https://github.com/langgenius/dify/pull/34150) 和 [#35794](https://github.com/langgenius/dify/pull/35794) 中的 @Jingyi-Dify、@fatelei、@shawny011717 和 @sawyer-shi。
- **人工输入** — 公开人机交互流程的选定操作值。感谢 [#35451](https://github.com/langgenius/dify/pull/35451) 中的 @Blackoutta。
- **问题分类器** — 添加了可编辑的类别标签。感谢 [#35430](https://github.com/langgenius/dify/pull/35430) 中的 @Blackoutta。

### 📚 数据、RAG 和知识

- **知识库图像渲染** — 修复了知识库中的图像渲染失败问题。感谢 [#35914](https://github.com/langgenius/dify/pull/35914) 中的@FFXN。
- **文档索引** — 在矢量嵌入之前跳过空文档并验证缺失的文本索引技术。感谢 [#35763](https://github.com/langgenius/dify/pull/35763) 和 [#35941](https://github.com/langgenius/dify/pull/35941) 中的 @princepal9120 和 @juyua9。
- **RAG 重复数据删除** — 使用 `doc_id` 作为跨提供商的重复数据删除密钥，而不仅仅是 Dify 托管的提供商。感谢 [#35759](https://github.com/langgenius/dify/pull/35759) 中的 @ki3nd。
- **数据集元数据过滤器** — 在 API 路径中保留数据集元数据过滤器并修复 KB 元数据过滤器字段选择。感谢 [#35700](https://github.com/langgenius/dify/pull/35700) 和 [#34149](https://github.com/langgenius/dify/pull/34149) 中的 @princepal9120 和 @shawny011717。
- **上传文件名处理** — 从 URL 解析干净的上传文件名，并在标准化数据源文件扩展名时避免双点。感谢 [#35706](https://github.com/langgenius/dify/pull/35706) 和 [#35808](https://github.com/langgenius/dify/pull/35808) 中的 @jonathanchang31 和 @Beandon13。

### 🎨 Web UI 和设计系统

- **Dify UI 迁移** — 从旧版覆盖层、工具提示、抽屉、选择器、标签和可搜索选择器继续迁移到 `@langgenius/dify-ui` 基元，包括新的 Drawer、选项卡、ToggleGroup、自动完成和组合框支持。感谢@lyzno1和@CodingOnStar在[#35675](https://github.com/langgenius/dify/pull/35675)、[#35715](https://github.com/langgenius/dify/pull/35715)、[#35720](https://github.com/langgenius/dify/pull/35720)、[#35721](https://github.com/langgenius/dify/pull/35721)、[#35774](https://github.com/langgenius/dify/pull/35774)、 [#35785](https://github.com/langgenius/dify/pull/35785)、[#35787](https://github.com/langgenius/dify/pull/35787)、[#35792](https://github.com/langgenius/dify/pull/35792)、[#35825](https://github.com/langgenius/dify/pull/35825)、[#35868](https://github.com/langgenius/dify/pull/35868)、[#35881](https://github.com/langgenius/dify/pull/35881)、 [#35892](https://github.com/langgenius/dify/pull/35892)、[#35896](https://github.com/langgenius/dify/pull/35896)、[#35917](https://github.com/langgenius/dify/pull/35917)、[#35961](https://github.com/langgenius/dify/pull/35961)、[#35962](https://github.com/langgenius/dify/pull/35962)、[#35963](https://github.com/langgenius/dify/pull/35963)、 [#35965](https://github.com/langgenius/dify/pull/35965)、[#35976](https://github.com/langgenius/dify/pull/35976)、[#35982](https://github.com/langgenius/dify/pull/35982) 和 [#36066](https://github.com/langgenius/dify/pull/36066)。
- **可访问性和语义** - 改进了网络可访问性，删除了不必要的 `data-testid` 使用，规范化选择值处理，改进了帮助字形语义，并改进了高级徽章按钮语义。感谢 [#35999](https://github.com/langgenius/dify/pull/35999)、[#36007](https://github.com/langgenius/dify/pull/36007)、[#36008](https://github.com/langgenius/dify/pull/36008) 和 [#36026](https://github.com/langgenius/dify/pull/36026) 中的 @lyzno1。
- **覆盖和导航可靠性** - 恢复应用程序导航创建子菜单交互，修复传输工作区下拉显示，规范化覆盖控制，对齐 Tailwind v4 CSS 迁移，将 CSP 随机数转发到主题脚本，以及对齐标签过滤器下拉图标。感谢 [#35681](https://github.com/langgenius/dify/pull/35681)、[#35876](https://github.com/langgenius/dify/pull/35876)、[#35832](https://github.com/langgenius/dify/pull/35832)、[#35829](https://github.com/langgenius/dify/pull/35829)、[#35960](https://github.com/langgenius/dify/pull/35960) 中的 @hjlarry、@iamjoel 和 @lyzno1，以及[#36041](https://github.com/langgenius/dify/pull/36041)。
- **发布者和启动流程** - 改进了发布者确认对话框处理并修复了预填充 WebApp 启动描述中的不匹配副本。感谢 [#35701](https://github.com/langgenius/dify/pull/35701) 和 [#35964](https://github.com/langgenius/dify/pull/35964) 中的 @CodingOnStar 和 @iamjoel。
- **音频和转录行为** — 显式恢复 `AudioContext` 并在第一次 TTS 加载时播放音频，并正确传递 `end_user.external_user_id` 来转录 ASR。感谢 [#35901](https://github.com/langgenius/dify/pull/35901) 和 [#35898](https://github.com/langgenius/dify/pull/35898) 中的 @ki3nd。

### 🔎 可观察性和追踪

- **Phoenix 跟踪** — 改进了 Phoenix 工作流程跟踪。感谢 [#35605](https://github.com/langgenius/dify/pull/35605) 中的@Blackoutta。
- **LangSmith 跟踪** — 修复了聊天流工作流程跟踪中的 `trace_id` 不匹配问题。感谢 [#35979](https://github.com/langgenius/dify/pull/35979) 中的 @ki3nd。

### ⚙️ 部署和运营

- **Docker env 布局** — 将 Docker Compose 环境变量拆分为有组织的 `docker/envs/**` 文件和更新的生成、清理和中间件设置流程。感谢 [#31586](https://github.com/langgenius/dify/pull/31586) 和 [#35938](https://github.com/langgenius/dify/pull/35938) 中的 @macatizm 和 @laipz8200。
- **中间件设置** — 更新了新中间件环境模板位置的本地设置和清理流程。感谢 [#35946](https://github.com/langgenius/dify/pull/35946) 中的@laipz8200。
- **数据库池行为** — 添加了 `SQLALCHEMY_POOL_RESET_ON_RETURN` 配置支持。感谢 [#31156](https://github.com/langgenius/dify/pull/31156) 中的@fatelei。
- **WebSocket 服务** — 分离 WebSocket 服务以实现更清晰的部署边界。感谢 [#35981](https://github.com/langgenius/dify/pull/35981) 中的 @hjlarry。
- **探索类别** — 探索推荐的应用程序现在支持多个可配置的类别和可调整的类别顺序。感谢 [#35723](https://github.com/langgenius/dify/pull/35723) 中的 @hjlarry。
- **TiDB 端点更新** — 修复了 TiDB 状态更改时端点更新的问题。感谢 [#35854](https://github.com/langgenius/dify/pull/35854) 中的 @zyssyz123。

## 升级指南

### 重要提示

- 此版本包括用于可配置探索应用程序类别的新数据库迁移。作为升级的一部分运行数据库迁移。
- Docker Compose 环境变量现在分为 `docker/envs/**` 下的分类文件。如果您维护自定义的 `docker-compose.yaml` 或 `.env`，请仔细检查新布局并重新应用本地自定义。
- 对于自托管部署，将继续遵循显式配置的 `SECRET_KEY` 值。如果 `SECRET_KEY` 为空，Dify 现在会自动生成并保留运行时密钥。

### Docker 组合部署

1. 备份您自定义的 docker-compose YAML 和 env 文件。

   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   cp .env .env.$(date +%s).bak 2>/dev/null || true
   ```

2. 从发布分支或标签获取最新代码。

   ```bash
   git fetch --tags
   git checkout 1.14.1
   ```

3. 停止服务。请在`docker`目录下执行。

   ```bash
   docker compose down
   ```

4. 备份数据。

   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5. 查看新的 `docker/envs/**` env 文件布局并重新应用所有本地自定义。

6、升级服务。

   ```bash
   docker compose up -d
   ```

### 源代码部署

1. 停止API服务器、Worker和Web前端服务器。

2. 从release标签获取最新的代码。

   ```bash
   git fetch --tags
   git checkout 1.14.1
   ```

3.更新Python依赖项。

   ```bash
   cd api
   uv sync
   ```

4. 运行迁移脚本。

   ```bash
   uv run flask db upgrade
   ```

5. 重新启动 API 服务器、Worker 和 Web 前端服务器。

---

## 发生了什么变化
* 修复：确保生成的密码满足https://github.com/langgenius/dify/pull/35672中@kurokobo的密码策略
* 杂务：更新 https://github.com/langgenius/dify/pull/35679 中 @lyzno1 的 eslint 抑制代码所有者
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/35673 更新到 pnpm 11
* 重构（web）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35675 中迁移丰富的工具提示覆盖
*修复：恢复应用程序导航在https://github.com/langgenius/dify/pull/35681中由@hjlarry创建子菜单交互
* 修复（web）：在 https://github.com/langgenius/dify/pull/35686 中 @lyzno1 构建 Docker 期间禁用 pnpm 依赖项检查
* 杂务：允许由 @hjlarry 在 https://github.com/langgenius/dify/pull/35683 中配置 Next.js 开发源
*修复（发布者）：通过https://github.com/langgenius/dify/pull/35701中的@CodingOnStar增强确认对话框处理并改进弹出交互
* 重构（auth）：通过https://github.com/langgenius/dify/pull/35702中的@CodingOnStar更新OAuth按钮和设置模式以改进状态管理和UI一致性
* 重构：由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/30923 中移植 WorkflowDraftVariableFile
* 重构(web)：通过https://github.com/langgenius/dify/pull/35715中的@lyzno1将短工具提示迁移到dify-ui
* 重构（web）：将订阅创建模式迁移到https://github.com/langgenius/dify/pull/35721中@lyzno1的对话框
* 修复：@eldoradoel 在 https://github.com/langgenius/dify/pull/35696 中同步工作流时 ToolEntity 数据验证失败
* 重构(web/select): 基础选择https://github.com/langgenius/dify/pull/35720中@lyzno1的dify-ui
* 修复（插件）：在 https://github.com/langgenius/dify/pull/35726 中通过 @xr843 保留多值 HTTP 响应标头
*修复：var引用选择器无法在https://github.com/langgenius/dify/pull/35732中选择@iamjoel的子var
* 杂务：通过 @hyoban 在 https://github.com/langgenius/dify/pull/35735 中生成企业控制台 API
* 修复：https://github.com/langgenius/dify/pull/35740 中 @hjlarry 防止工作流节点标题溢出
* 重构(web)：https://github.com/langgenius/dify/pull/35736 中@lyzno1 的工作流程热键和历史状态
* 修复：修复 https://github.com/langgenius/dify/pull/35747 中 @fatelei 的第二次验证中的 Structured_Output_enabled 缺失
* 杂务：通过 @hyoban 在 https://github.com/langgenius/dify/pull/35748 中从 api 生成联系人
* 重构：https://github.com/langgenius/dify/pull/35750 中 @aliworksx08 将 Any 替换为 [T] 语法
*修复（api）：在https://github.com/langgenius/dify/pull/35700中保留@princepal9120的数据集元数据过滤器
* ci：从https://github.com/langgenius/dify/pull/35768中的@asukaminato0721的自动修复工作流程中删除API合同生成步骤
* 修复：清理 https://github.com/langgenius/dify/pull/35706 中 @jonathanchang31 从 URL 解析的上传文件名
* 重构（测试）：在 https://github.com/langgenius/dify/pull/35766 中 @guangyang1206 在 test_storage_key_loader 中使用 db_session_with_containers
* 修复：https://github.com/langgenius/dify/pull/35771 中的 @NeatGuyCoding 在控制台 `GET /account/avatar` 上的 IDOR
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35779 中进行 2 次更新，在 /api 中碰撞 google 组
* 杂务（deps）：将 github-actions-dependencies 组中的 anthropics/claude-code-action 从 1.0.110 提升到 1.0.111，由 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35781 中实现
* 修复（网络）：https://github.com/langgenius/dify/pull/35751 中 @aliworksx08 的安全外部表单帮助链接
* 重构(web)：将 ValidatedStatus 枚举转换为 key-valida 中的 as-const ... by @guangyang1206 in https://github.com/langgenius/dify/pull/35749
* 修复：在 https://github.com/langgenius/dify/pull/35763 中 @princepal9120 进行矢量嵌入之前跳过空文档
* 重构（web）：将旧版工具提示迁移到https://github.com/langgenius/dify/pull/35774中@lyzno1的信息提示
* 重构(web)：通过https://github.com/langgenius/dify/pull/35785中的@lyzno1迁移工作流节点操作菜单
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/35782 中对 /api 中的开发组进行 6 次更新
* 修复：在https://github.com/langgenius/dify/pull/35710中通过@Jingyi-Dify保留单次运行输入变量类型
* 重构（web）：通过https://github.com/langgenius/dify/pull/35787中的@lyzno1迁移工作流面板上下文菜单原语
* 修复（rag）：对任何提供者使用 doc_id dedup 密钥，而不仅仅是 https://github.com/langgenius/dify/pull/35759 中的 @ki3nd 进行修改
* 重构（web）：通过 https://github.com/langgenius/dify/pull/35792 中的 @lyzno1 将 HITL 覆盖迁移到基础对话框
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/35791 中的 @dependabot[bot] 进行 2 次更新，将存储组跨越 1 个目录
* 修复：工作流程在线用户通过 @hjlarry 在 https://github.com/langgenius/dify/pull/35786 中轮询大型应用程序列表
* 重构：将工作流查询迁移到https://github.com/langgenius/dify/pull/35799中@lyzno1的合约
* 修复：修复 https://github.com/langgenius/dify/pull/35814 中 @fatelei 失败的 test_sharded_channel
* 修复：通过 https://github.com/langgenius/dify/pull/35819 中的 @fatelei 修复在应用程序上下文之外工作
* 修复：通过 https://github.com/langgenius/dify/pull/35817 中的 @hjlarry 通过后端 API 恢复工作流程版本
* 修复（file_factory）：在https://github.com/langgenius/dify/pull/35808中通过@Beandon13标准化数据源文件扩展名时删除双点
* Chore(tailwind-css): 首先通过https://github.com/langgenius/dify/pull/35754中的@lyzno1迁移到css
* 重构（webapp）：通过@lyzno1迁移https://github.com/langgenius/dify/pull/35825中的部分覆盖
* 修复：在 https://github.com/langgenius/dify/pull/35828 中迁移 @hjlarry 的条件运算符弹出窗口
* 修复(web): 在 https://github.com/langgenius/dify/pull/35829 中通过 @lyzno1 对齐 Tailwind v4 CSS 迁移
* 修复（工作流程）：通过 https://github.com/langgenius/dify/pull/35794 中的 @sawyer-shi 解锁 1.14.0 上的插件模型选择器工具
* 修复(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35832 中标准化 dify-ui 覆盖控制
* Chore(web)：在https://github.com/langgenius/dify/pull/35842中添加@hyoban的企业开发代理支持
* 杂务：提高教育付费进度 by @iamjoel in https://github.com/langgenius/dify/pull/35851
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/35853 中与 en-US 同步翻译
* 重构：https://github.com/langgenius/dify/pull/35840 中@lyzno1 垂直化标签管理和批量绑定
* ci: 由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/35862 进行碰撞
* 修复：https://github.com/langgenius/dify/pull/35854 中 @zyssyz123 更新 tidb 状态时更新端点
* 杂务（deps）：由https://github.com/langgenius/dify/pull/35863中的@dependabot[bot]将/api中的mako从1.3.11撞到1.3.12
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/35864 中的 @dependabot[bot] 将 /api 中的 gitpython 从 3.1.47 提升到 3.1.49
* 修复（工作流程）：在 https://github.com/langgenius/dify/pull/34149 中 @shawny011717 在 KB 元数据过滤器选择中使用正确的字段 ID
* feat(dev-proxy): @hyoban 在 https://github.com/langgenius/dify/pull/35852 中初始化包
* 重构：在 https://github.com/langgenius/dify/pull/30873 中添加 @asukaminato0721 进行测试的类型
* 壮举：在 https://github.com/langgenius/dify/pull/35868 中添加 @lyzno1 的 dify-ui 自动完成和组合框
* 杂务：通过 @Stream29 在 https://github.com/langgenius/dify/pull/35708 中更轻松、更简单地部署
* 重构：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35875 中改进模型选择器搜索
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/35876 中不显示传输工作区下拉列表
* 重构(web)：通过https://github.com/langgenius/dify/pull/35881中的@lyzno1将标签控件迁移到组合框
* 测试：通过https://github.com/langgenius/dify/pull/35884中的@escape0707将插件权限测试迁移到testcontainers
* 修复：通过@escape0707删除https://github.com/langgenius/dify/pull/35890中多余的api/libs/typing.py
* 重构（web）：在 https://github.com/langgenius/dify/pull/35892 中跟踪 @CodingOnStar 的 elem 迁移的门户
* 重构（api）：将控制台 apikey 响应迁移到 https://github.com/langgenius/dify/pull/35218 中 @ai-hpc 的 BaseModel
* 测试：在https://github.com/langgenius/dify/pull/35871中添加@asukaminato0721进行测试的类型
* 杂务：isinstance 的示例，由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/35903 中匹配大小写
* 重构：通过 https://github.com/langgenius/dify/pull/35896 中的 @lyzno1 将应用程序选择器迁移到组合框
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/35812 中更新部门
* 重构(web)：https://github.com/langgenius/dify/pull/35883中@lyzno1默认内联标签查询
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/35907 中更新部门
* 修复（web）：显式恢复 AudioContext 并在 https://github.com/langgenius/dify/pull/35901 中 @ki3nd 加载的第一个 TTS 上播放音频
* 修复(web): 通过https://github.com/langgenius/dify/pull/35898中的@ki3nd将end_user.external_user_id字符串传递给transcript_asr
* 修复：在 _app_stub (#34636) 中将 SimpleNamespace 替换为 https://github.com/langgenius/dify/pull/35897 中 @EvanYao826 的 MagicMock(spec=App)
* 修复（i18n）：更新 https://github.com/langgenius/dify/pull/35905 中 @bakiburakogun 的新字符串的土耳其语翻译
* 修复（工具）：https://github.com/langgenius/dify/pull/35887 中的 @GareArc 向租户清除范围内置工具默认凭据
* 壮举：支持 https://github.com/langgenius/dify/pull/35723 中 @hjlarry 的可配置探索应用程序类别
* 修复（工作流程）：在 https://github.com/langgenius/dify/pull/34150 中通过 @shawny011717 处理节点输出显示中的文件预览 URL
* feat(dify-ui): 通过@lyzno1在https://github.com/langgenius/dify/pull/35917中添加抽屉
* 杂务：在 @iamjoel 在 https://github.com/langgenius/dify/pull/35416 中启动 webapp 之前添加查询生成器
* 重构：将 isinstance 链转换为匹配/大小写 (#35902) by @EvanYao826 in https://github.com/langgenius/dify/pull/35922
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/35933 中与 en-US 同步翻译
*壮举：支持https://github.com/langgenius/dify/pull/31156中@fatelei的SQLALCHEMY_POOL_RESET_ON_RETURN配置
* 杂务（docker）：清理https://github.com/langgenius/dify/pull/35938中@laipz8200的环境示例
* 重构：在 https://github.com/langgenius/dify/pull/31586 中通过 @macatizm 将 docker-compose env 配置拆分为单独的文件
* 杂务：由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/35934 中为会话注入 dep
*修复：阻止工作流预览调整https://github.com/langgenius/dify/pull/35936中@lyzno1观察者循环的大小
*修复：通过https://github.com/langgenius/dify/pull/35948中的@fatelei更改写入数据库的顺序
* ci: auto gen api 文档和下载链接由 @asukaminato0721 在 https://github.com/langgenius/dify/pull/35919 中
* 杂务：在 https://github.com/langgenius/dify/pull/35953 中通过 @crazywola 碰撞 LiteLLM 的 CVE-2026-42208
* 杂务：添加类型以通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/35942 中进行测试
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/35958 中的 @dependabot[bot] 将 /api 中的 gitpython 从 3.1.49 提升到 3.1.50
* 修复(web): 将 csp nonce 转发到 https://github.com/langgenius/dify/pull/35960 中 @lyzno1 的主题脚本
* 修复（swagger）：添加 util 将 BaseModel 转换为 https://github.com/langgenius/dify/pull/35959 中 @cqjjjzr 查询参数的架构
* 重构（web）：通过@lyzno1在https://github.com/langgenius/dify/pull/35961中迁移旧的工具提示调用者
* 重构(web)：通过https://github.com/langgenius/dify/pull/35962中的@lyzno1将headless-ui组件迁移到dify-ui
* 修复：https://github.com/langgenius/dify/pull/35964 中@iamjoel 预填充的 WebApp 启动描述中的按钮标签不匹配
* 杂务（api）：通过https://github.com/langgenius/dify/pull/35469中的@laipz8200将graphon升级到v0.3.0
* ci：更新https://github.com/langgenius/dify/pull/35968中@asukaminato0721的评论
* 修复（swagger）：将 inline-nested-dicts 补丁应用到 https://github.com/langgenius/dify/pull/35952 中的 @cqjjjzr HTTP Swagger 端点
* feat(dify-ui): 通过@lyzno1在https://github.com/langgenius/dify/pull/35965中添加Tabs/ToggleGroup
* 重构(api)：通过https://github.com/langgenius/dify/pull/35967中的@cqjjjzr将console.app.workflow等迁移到BaseModel
* 修复：知识库中图像渲染失败的问题。作者：@FFXN，https://github.com/langgenius/dify/pull/35914
* 重构（web）：删除 headless-ui，通过 https://github.com/langgenius/dify/pull/35963 中的 @CodingOnStar 将覆盖层迁移到 dify-ui
* 重构（web）：通过https://github.com/langgenius/dify/pull/35976中的@lyzno1在dify-ui z-50上聚合覆盖分层
* 重构（web）：将抽屉组件迁移到 dify-ui 并删除 https://github.com/langgenius/dify/pull/35982 中@CodingOnStar 遗留的抽屉实现
*杂务：统一api &&清理https://github.com/langgenius/dify/pull/35984中@asukaminato0721忽略的某些类型
*杂务：api para type by @asukaminato0721 in https://github.com/langgenius/dify/pull/35985
* 杂务（web）：通过@lyzno1在https://github.com/langgenius/dify/pull/35990中删除抽屉覆盖导入限制
* 壮举：在 https://github.com/langgenius/dify/pull/35430 中支持 @Blackoutta 问题分类器中的可编辑类标签
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/35994 中与 en-US 同步翻译
* 修复（api）：https://github.com/langgenius/dify/pull/35891 中 @lin-snow 的自定义文件类型 + 内存后续 Chatflow 上的“文件验证失败”
* 壮举（人工输入）：通过 @Blackoutta 在 https://github.com/langgenius/dify/pull/35451 中公开选定的操作值
* 杂务：@hjlarry 在 https://github.com/langgenius/dify/pull/35981 中提供单独的 websocket 服务
* 修复（跟踪）：@ki3nd 在 https://github.com/langgenius/dify/pull/35979 中的聊天流工作流程跟踪中 LangSmith trace_id 不匹配
* 重构：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/31004 中移植 DatasetProcessRule
* feat(web): 改进 a11y 并通过 @lyzno1 在 https://github.com/langgenius/dify/pull/35999 中删除 data-testid
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/36009 中进行 2 次更新来提高 github-actions-dependencies 组
* 杂务（deps）：将opentelemetry-exporter-otlp-proto-grpc从1.41.0撞到opentelemetry组中/api中的1.41.1，由https://github.com/langgenius/dify/pull/36013中的@dependabot[bot]
* 杂务（网络）：在 https://github.com/langgenius/dify/pull/36015 中刷新 @hyoban 的特工技能
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/36017 中进行 2 次更新，对 /api 中的存储组进行碰撞
*杂务（deps）：将gunicorn从25.3.0撞到https://github.com/langgenius/dify/pull/36011中的烧瓶组/api中的26.0.0
*修复(web)：删除https://github.com/langgenius/dify/pull/36007中@lyzno1的不安全选择值转换
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/36019 中与 en-US 同步翻译
* 修复：通过 https://github.com/langgenius/dify/pull/36006 中的 @lyzno1 改进工作流程清单语义
* 修复：在 https://github.com/langgenius/dify/pull/36008 中使用 @lyzno1 的信息提示来获取帮助字形
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/36012 中的 2 个更新将 google 组跨越 1 个目录
* 修复（docker）：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/35946 中更新中间件环境设置
* 杂务（api）：通过https://github.com/langgenius/dify/pull/35987中的@QuantumGhost将graphon升级到v0.3.1
* 重构(web)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36026 中拆分高级徽章按钮语义
* 重构：用 https://github.com/langgenius/dify/pull/35904 中的 @satishkc7 中的 AppService 中的 BaseModel 替换 dict params
* 重构：通过 https://github.com/langgenius/dify/pull/36033 中的 @CodingOnStar 增强跨组件的模式布局和滚动行为
* 重构：移植一些 if else 以通过 https://github.com/langgenius/dify/pull/31841 中的 @asukaminato0721 进行匹配
* 壮举：通过 @Blackoutta 在 https://github.com/langgenius/dify/pull/35605 中改进 phoenix 工作流程跟踪
* 修复(web): 在https://github.com/langgenius/dify/pull/36041中通过@lyzno1对齐标签过滤器下拉图标
* 杂务：在 https://github.com/langgenius/dify/pull/36039 中移植 @asukaminato0721 的 WorkflowComment
* 重构（apps）：简化查询状态并消除 @lyzno1 在 https://github.com/langgenius/dify/pull/36043 中写入的 URL
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/36050 中的 @dependabot[bot] 将 /api 中的 urllib3 从 2.6.3 提升到 2.7.0
* 修复：避免 https://github.com/langgenius/dify/pull/36061 中 @hjlarry 的试验工作流程模式模型冲突
* 修复：通过 @juyua9 在 https://github.com/langgenius/dify/pull/35941 中验证缺失的文本索引技术
* 重构（web）：通过https://github.com/langgenius/dify/pull/36066中的@lyzno1将可搜索选择器迁移到组合框
* 重构：使用https://github.com/langgenius/dify/pull/36036中@Deepam02的Pydantic v2模型重写estimate_args_validate
* 修复（安全）：在 https://github.com/langgenius/dify/pull/36049 中通过 @laipz8200 强化自托管 SECRET_KEY 引导程序
* 修复：api 中的 /threads 和 /db-pool-stat 端点...由 @orbisai0security 在 https://github.com/langgenius/dify/pull/35665 中
* 杂务（发布）：https://github.com/langgenius/dify/pull/36034 中 @laipz8200 的 1.14.1 碰撞版本
* 杂务：https://github.com/langgenius/dify/pull/35635 中 @asukaminato0721 的 DocumentSegment 到 Typebase

## 新贡献者
* @eldoradoel 在 https://github.com/langgenius/dify/pull/35696 中做出了第一个贡献
* @princepal9120 在 https://github.com/langgenius/dify/pull/35700 中做出了第一个贡献
* @guangyang1206 在 https://github.com/langgenius/dify/pull/35766 中做出了第一个贡献
* @ki3nd 在 https://github.com/langgenius/dify/pull/35759 中做出了第一个贡献
* @Beandon13 在 https://github.com/langgenius/dify/pull/35808 中做出了第一个贡献
* @sawyer-shi 在 https://github.com/langgenius/dify/pull/35794 中做出了第一个贡献
* @shawny011717 在 https://github.com/langgenius/dify/pull/34149 中做出了第一个贡献
* @escape0707 在 https://github.com/langgenius/dify/pull/35884 中做出了第一个贡献
* @EvanYao826 在 https://github.com/langgenius/dify/pull/35897 中做出了第一个贡献
* @macatizm 在 https://github.com/langgenius/dify/pull/31586 中做出了第一个贡献
* @cqjjjzr 在 https://github.com/langgenius/dify/pull/35959 中做出了第一个贡献
* @satishkc7 在 https://github.com/langgenius/dify/pull/35904 中做出了第一个贡献
* @juyua9 在 https://github.com/langgenius/dify/pull/35941 中做出了他们的第一个贡献
* @Deepam02 在 https://github.com/langgenius/dify/pull/36036 中做出了第一个贡献
* @orbisai0security 在 https://github.com/langgenius/dify/pull/35665 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.14.0...1.14.1

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.14.1` · 📅 发布：2026-05-12 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.14.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
