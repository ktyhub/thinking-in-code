---
title: "dify 1.13.3"
project: "dify"
repo: "langgenius/dify"
tag: "1.13.3"
version: "1.13.3"
published: "2026-03-27"
type: "patch"
lang: "zh"
---

# dify 1.13.3

## 🚀 v1.13.3 有什么新功能？
我们最新的补丁版本 v1.13.3 重点关注工作流程执行、流式传输和知识检索的稳定性和正确性。以下是最重要的更新的快速浏览：

### 🎬 新功能
- **工作流程配置**：@scdeng 在 #33082 中为 LLM、问题分类器和变量提取器节点中的模型参数添加了变量引用支持。

### 🛠️ 错误修复
- **流媒体可靠性**：修复了 `StreamsBroadcastChannel` 重播和并发问题，以保持前端/后端事件传递的稳定，由 @QuantumGhost 在 #34030 和 #34061 中实现。
- **工作流程编辑器行为**：修复了保留循环/迭代元数据的粘贴节点，并防止 @majiayu000 和 @hjlarry 在 #29983 和 #34077 中将 `HumanInput` 节点粘贴到无效容器中。
- **运行时执行**：恢复了提示消息转换逻辑，并更正了 #33666、#33619 和 #33688 中 @QuantumGhost、@fatelei 和 @kurokobo 执行程序驱动的 HTTP 请求执行的 `max_retries=0` 处理。
- **知识检索**：在网络响应中保留引文元数据，修复了数据集图标元数据丢失时的崩溃问题，更正了命中计数查询过滤，并恢复了 @Thesesua、@copilot-swe-agent 和 @fatelei 在 #33778、#33907、#33757 和 #33942 中的索引文档块预览。

### 🔧 幕后花絮
- **补丁稳定性**：此版本优先针对从 v1.13.2 升级的团队的工作流运行时行为、实时流和知识库可用性进行有针对性的修复。

---

## 升级指南

> [!重要]
> Dify v1.13.3 使用的沙盒映像需要以下 Python 和 Node.js 路径。
> 如果您从较旧的 Docker Compose 部署升级并且已有 `docker/volumes/sandbox/conf/config.yaml`，请在主机上更新它：
> ```yaml
> python_path: /opt/python/bin/python3
> nodejs_path: /usr/local/bin/node
> ```
> 
> 不要编辑沙箱容器内的文件。目录 `docker/volumes/sandbox/conf` 作为 `/conf` 挂载到容器中，因此在容器重新启动后主机更改仍然存在。

### Docker 组合部署

1. 备份您定制的docker-compose YAML文件（可选）

   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   ```

2.从主分支获取最新代码

   ```bash
   git checkout main
   git pull origin main
   ```

3. 停止服务。请在docker目录下执行

   ```bash
   docker compose down
   ```

4. 备份数据

   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5、升级服务

   ```bash
   docker compose up -d
   ```

### 源代码部署

1. 停止API服务器、Worker和Web前端服务器。

2.从release分支获取最新代码：

   ```bash
   git checkout 1.13.3
   ```

3.更新Python依赖项：

   ```bash
   cd api
   uv sync
   ```

4. 然后，让我们运行迁移脚本：

   ```bash
   uv run flask db upgrade
   ```

5. 最后，再次运行API服务器、Worker和Web前端服务器。

---

## 发生了什么变化
* 重构（web）：数字输入以使用 https://github.com/langgenius/dify/pull/33539 中 @lyzno1 的 Base UI NumberField
* feat(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33569 中添加基本 ui toast
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/33585 中与 en-US 同步翻译
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/33586 中与 en-US 同步翻译
* 重构(api): 查询API以在https://github.com/langgenius/dify/pull/33565中通过@RenzoMXD选择function_1
* 重构：将 sa.String 替换为 https://github.com/langgenius/dify/pull/33547 中@tmimmanuel 的mapped_columns 的 EnumText
* 重构（api）：通过 https://github.com/langgenius/dify/pull/33601 中的 @statxc 将 core/app 中的 dict/Mapping 替换为 TypedDict
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/33611中的@dependabot[bot]将/api中的pyasn1从0.6.2提升到0.6.3
* 重构（api）：在 https://github.com/langgenius/dify/pull/33610 中用 @bittoby 的 core/tools 中的 TypedDict 替换 dict/Mapping
* 重构：使用 EnumText 作为数据集，并用 https://github.com/langgenius/dify/pull/33606 中的 @tmimmanuel 替换字符串文字 4
* 杂务（deps）：将下一个包通过 https://github.com/langgenius/dify/pull/33616 中的 @lyzno1 推送到 16.1.7
* 修复：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33591 中收紧 Toast 打字并恢复焦点可见性
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/33618 更新部门
*修复（toast）：通过@lyzno1在https://github.com/langgenius/dify/pull/33620中优化堆叠悬停和焦点样式
* 修复：修复 max_retries 是由 @fateei 在 https://github.com/langgenius/dify/pull/33619 中硬编码的问题
* 壮举：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33289 中增强模型插件工作流程检查和模型提供程序管理 UX
* 重构：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33622 中的兼容重新导出路由低成本的下一个模块
* 重构（api）：用https://github.com/langgenius/dify/pull/33615中@bittoby在core/ragretrieve_service.py中用TypedDict替换dict/Mapping
* 重构（web）：通过https://github.com/langgenius/dify/pull/33623中的@CodingOnStar将组件测试移动到同级__tests__目录中
* 重构：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33632 中的兼容重新导出路由下一个/链接
* 重构（api）：用https://github.com/langgenius/dify/pull/33633中@bittoby在core/rag中的SummaryIndexSettingDict TypedDict替换dict
* 重构：在 https://github.com/langgenius/dify/pull/33634 中 @tmimmanuel 在提供者模型中使用 EnumText
* 重构：通过 https://github.com/langgenius/dify/pull/33636 中的@lyzno1 的兼容重新导出进行下一步/导航
* 修复：在https://github.com/langgenius/dify/pull/33628中添加@FFXN获取管道模板详细信息失败时的响应错误信息
* 修复：通过 @laipz8200 在 https://github.com/langgenius/dify/pull/33597 中澄清 Webhook 调试端点行为
* 杂务：https://github.com/langgenius/dify/pull/33638 中 @fatelei 兼容的最终用户和 end_user
* 测试（工作流程）：将规范重新组织到 __tests__ 中，并与 https://github.com/langgenius/dify/pull/33625 中的 @CodingOnStar 共享的测试基础设施保持一致
* 重构（web）：通过https://github.com/langgenius/dify/pull/33643中的@lyzno1将核心toast调用站点迁移到基本ui toast
*壮举：通过https://github.com/langgenius/dify/pull/33593中的@fatelei删除weaviate client __del__方法
* 修复：在 https://github.com/langgenius/dify/pull/33637 中 @Desel72 更新时将工作流程描述和名称同步到 MCP 服务器
*修复（api）：在https://github.com/langgenius/dify/pull/33666中保留@QuantumGhost在fetch_prompt_messages中的内容转换逻辑
* 重构（api）：在https://github.com/langgenius/dify/pull/33676中@bittoby在core/rag中输入default_retrieval_model和DefaultRetrievalModelDict
* 杂务：https://github.com/langgenius/dify/pull/33681 中 @QuantumGhost 的 1.13.2 碰撞版本
* 重构：https://github.com/langgenius/dify/pull/33682 中的 @hyoban 移至 std-semver
* ci：恢复代理记者 @hyoban 在 https://github.com/langgenius/dify/pull/33685
* 修复：@hyoban 在 https://github.com/langgenius/dify/pull/33692 中泄露的设置超时
* 重构：preferred_provider_type MessageChain 的 EnumText，https://github.com/langgenius/dify/pull/33696 中 @tmimmanuel 的横幅
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/33683中的@dependabot[bot]将/api中的ujson从5.9.0提升到5.12.0
* 重构（api）：在 https://github.com/langgenius/dify/pull/33691 中使用 @bittoby 的 TypedDict 类型 Firecrawl API 响应
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/33698中的@dependabot[bot]将/api中的pypdf从6.8.0提升到6.9.1
* 重构（api）：在 https://github.com/langgenius/dify/pull/33700 中使用 @bittoby 的 TypedDict 类型 WaterCrawl API 响应
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/33706 更新部门
* feat(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33727 中添加基本 ui 滚动区域原语
* ci：在 https://github.com/langgenius/dify/pull/33723 中使用 @hyoban 的 codecov
* 修复：与 https://github.com/langgenius/dify/pull/33732 中@IthacaDream 插件卡图标解析器中的表情符号/对象图标兼容
* 重构：在 https://github.com/langgenius/dify/pull/33728 中使用 @tmimmanuel 的 EnumText(StorageType) 作为 UploadFile.storage_type
* feat(confirm): 在https://github.com/langgenius/dify/pull/33660中输入应用程序名称以供@bowenliang123确认删除应用程序
* 重构（web）：https://github.com/langgenius/dify/pull/33733中@lyzno1的侧边栏应用程序列表滚动区域组件
* 重构：将 db.session.query 迁移到 https://github.com/langgenius/dify/pull/33694 中的@RenzoMXD 在基础层中选择
* 修复：通过 @RickDamon 在 https://github.com/langgenius/dify/pull/33678 中将默认根传递给 OpenDAL Operator 以实现 fs 方案
* 重构（web）：将 auth toast 调用迁移到 https://github.com/langgenius/dify/pull/33744 中 @lyzno1 的 ui toast
* 杂务：在 https://github.com/langgenius/dify/pull/33730 中添加 @laipz8200 的 pytest XML 和分支覆盖率报告
* 样式（滚动条）：在https://github.com/langgenius/dify/pull/33751中对齐@lyzno1的设计
* 修复（api）：通过https://github.com/langgenius/dify/pull/33753中的@QuantumGhost将`trigger_info`添加到WorkflowNodeExecutionMetadataKey
* 修复：https://github.com/langgenius/dify/pull/33750 中@lyfuci 在 HitTestingPayload 中使用 RetrievalModel 类型作为retrieval_model 字段
* 修复：在https://github.com/langgenius/dify/pull/33216中@BeautyyuYanli在并行迭代中保留计时指标
* 测试（工作流）：通过@CodingOnStar在https://github.com/langgenius/dify/pull/33741中添加工作流组件的单元测试
* 修复：在https://github.com/langgenius/dify/pull/33757中通过@FFXN将dataset_id过滤器添加到hit_count的子查询中
* 重构：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33761 中简化侧边栏布局的滚动区域 API
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/33749 中与 en-US 同步翻译
* 修复（测试）：通过 https://github.com/langgenius/dify/pull/33767 中的 @xr843 更正工具提供程序测试构造函数中的关键字参数
* 重构：https://github.com/langgenius/dify/pull/33738 中@tmimmanuel 使用 EnumText 作为 MessageFeedback 和 MessageFile 列
* 重构（api）：在https://github.com/langgenius/dify/pull/33775中由@bittoby在剩余的rag文件夹中键入裸字典/列表注释
* 重构：迁移db.session.query以在inner_api中选择，并通过@RenzoMXD在https://github.com/langgenius/dify/pull/33774中选择Web控制器
* 修复：删除 https://github.com/langgenius/dify/pull/33769 中 @xr843 对模型配置弹出窗口的旧式 z-index 覆盖
* 修复（api）：在 https://github.com/langgenius/dify/pull/33778 中保留 @Thesesua 的网络响应中的引文元数据
*修复：在https://github.com/langgenius/dify/pull/33083中@Lubrsy706的历史对话中停止思考块计时器
* 重构：迁移标签过滤器覆盖并删除 https://github.com/langgenius/dify/pull/33791 中 @lyzno1 的死 z-index 覆盖属性
* 重构（toast）：将数据集管道迁移到新的 ui toast API 并通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33794 中提取 i18n
* 修复：https://github.com/langgenius/dify/pull/33688 中 @kurokobo 为执行器添加 max_retries=0
* 重构：https://github.com/langgenius/dify/pull/33795中@lyzno1迁移高风险覆盖后续选择器
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/33796 中与 en-US 同步翻译
* 重构(web)：将工具/MCP/外部知识toast使用迁移到UI toast，并在https://github.com/langgenius/dify/pull/33797中通过@lyzno1添加i18n
* 修复：添加恢复API，用于https://github.com/langgenius/dify/pull/33582中@BeautyyuYanli的工作流程草稿的版本控制
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/33804 中与 en-US 同步翻译
* 文档：将自动代理贡献注释添加到 https://github.com/langgenius/dify/pull/33809 中的 @yu Chengpersonal 的 CONTRIBUTING.md 🤖🤖🤖
* 重构（web）：更新前端 toast 调用站点以使用 https://github.com/langgenius/dify/pull/33808 中 @lyzno1 的新快捷方式 API
* 琐事：https://github.com/langgenius/dify/pull/33817 中 @asukaminato0721 的中立公关选择加入说明
*修复（聊天）：修复由于@WTW0313在https://github.com/langgenius/dify/pull/33816中重新安装开启器而导致的图像重新渲染
* 文档（网络）：更新 @hyoban 在 https://github.com/langgenius/dify/pull/33815 中的开发指南
* 杂务（deps）：https://github.com/langgenius/dify/pull/33821中的@dependabot[bot]在/sdks/nodejs-client中从3.4.1到3.4.2的凹凸
* 杂务：在https://github.com/langgenius/dify/pull/31487中@jubinsoni在lint中启用erasableOnly
* 重构（工作空间）：通过 @lin-snow 在 https://github.com/langgenius/dify/pull/33788 中的弹性回退优化 SaaS 和企业的 /workspaces 计划解决方案
* 重构（api）：在 https://github.com/langgenius/dify/pull/33829 中使用 @bittoby 的 TypedDict 键入工作流服务字典
* 重构：在https://github.com/langgenius/dify/pull/33790中通过@RenzoMXD在控制台身份验证、设置和apikey中选择
* 重构（api）：在 https://github.com/langgenius/dify/pull/33836 中使用 @bittoby 的 TypedDict 键入工具服务字典
* 重构：使用 EnumText 进行对话/消息 invoke_from 和 from_source by @tmimmanuel in https://github.com/langgenius/dify/pull/33832
* 重构：将工作流程运行存储库测试从模拟迁移到…，由 @YB0y 在 https://github.com/langgenius/dify/pull/33837 中进行
* 重构：将工作流程运行存储库单元测试从模拟迁移到 te…，作者：https://github.com/langgenius/dify/pull/33843 中的 @Desel72
* 重构：在https://github.com/langgenius/dify/pull/33842中通过@RenzoMXD在控制台浏览和工作区控制器中选择
* 杂务：在https://github.com/langgenius/dify/pull/33014中@caoergou的对话查询中使用selectinload而不是joinedload
* 修复：通过将 pkg 版本与 https://github.com/langgenius/dify/pull/33857 中 @ckstck 撰写的 docker 进行匹配来测试错误
* perf: tidb_on_qdrant_vector delete_by_ids 在 https://github.com/langgenius/dify/pull/33846 中使用 @fatelei 批量删除
* 测试：由 @mahammadasim 在 https://github.com/langgenius/dify/pull/32514 中添加核心模块审核、存储库、模式
* 测试：通过 @poojanInfocusp 在 https://github.com/langgenius/dify/pull/33050 中添加 services-part-1 的单元测试
* 测试：通过 @cryptus-neoxys 在 https://github.com/langgenius/dify/pull/33225 中改进控制器测试的 code-cov
* 杂务（deps）：将 github-actions-dependencies 组中的 anthropics/claude-code-action 从 1.0.75 提升到 1.0.76，由 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33875 中实现
* 杂务：在 https://github.com/langgenius/dify/pull/33831 中添加 @hj24 的计费守卫测试
* 修复（i18n）：将 /apps 页面上的日期时间显示标准化为 24 小时格式，作者为 https://github.com/langgenius/dify/pull/33847 中的 @bowenliang123
* feat(build): 在https://github.com/langgenius/dify/pull/33812中通过@bowenliang123设置turbopack配置的根目录
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/33862 中更新部门
* 修复：通过 https://github.com/langgenius/dify/pull/33841 中的 @yoloni-9527 删除 chat/utils.ts 中矛盾的可选链
* 重构（web）：将与数据集相关的 toast 调用点迁移到 base/ui/toast 并通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33892 中更新测试
* 修复：https://github.com/langgenius/dify/pull/33899 中 @fatelei 的类型对象“str”没有属性“LLM”
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/33894 中与 en-US 同步翻译
* 修复：通过 @Copilot 在 https://github.com/langgenius/dify/pull/33882 中为私人电子邮件用户处理来自 GitHub API 的空电子邮件/名称
* 文档：https://github.com/langgenius/dify/pull/33838 中 @BipinRimal314 为 Dify 部署者提供的欧盟人工智能法案合规指南
* 重构：将信用池服务测试迁移到 https://github.com/langgenius/dify/pull/33898 中 @Desel72 的 testcontainers
* 重构：使用 EnumText 进行对话/消息 invoke_from 和 from_source by @tmimmanuel in https://github.com/langgenius/dify/pull/33901
* 重构：通过https://github.com/langgenius/dify/pull/33904中的@Desel72将工作流删除测试迁移到testcontainers
* 重构：将对话变量更新程序测试迁移到https://github.com/langgenius/dify/pull/33903中的@Desel72测试容器
* 测试：通过https://github.com/langgenius/dify/pull/33906中的@Desel72将数据集权限测试迁移到testcontainers
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/33871中的@dependabot[bot]将存储组中/api中的boto3从1.42.68提升到1.42.73
* 杂务（deps）：由https://github.com/langgenius/dify/pull/33870中的@dependabot[bot]将llm组中/api中的litellm从1.82.2提升到1.82.6
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/33868 中的 @dependabot[bot] 将 google-api-python-client 从 2.192.0 提升到 Google 群组 /api 中的 2.193.0
* 杂务（deps-dev）：通过 https://github.com/langgenius/dify/pull/33872 中的 @dependabot[bot] 将开发组 /api 中的 pytest-cov 要求从 ~=7.0.0 更新为 ~=7.1.0
* 杂务（deps）：将 pydantic 组中 /api 中的 pydantic-extra-types 从 2.11.0 提升到 2.11.1，由 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33876 中进行
* 杂务：删除https://github.com/langgenius/dify/pull/33914中@fatelei重置的日志级别
* 重构：通过https://github.com/langgenius/dify/pull/33900中的@Desel72将附件服务测试迁移到testcontainers
* 重构（web）：删除https://github.com/langgenius/dify/pull/33905中@lyzno1的旧数据源设置
* 修复：当 @Copilot 在 https://github.com/langgenius/dify/pull/33907 的知识检索节点中未定义数据集 icon_info 时崩溃
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/33916 中的 @dependabot[bot] 进行 2 次更新，将 llm 组跨越 1 个目录
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/33917中的@dependabot[bot]将google组中/api中的google-cloud-aiplatform从1.141.0提升到1.142.0，跨越1个目录
* 杂务（deps）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33873 中对 /api 中的 python-packages 组进行 4 次更新
* 重构：在https://github.com/langgenius/dify/pull/33893中通过@RenzoMXD在控制台应用程序消息控制器中选择
* 重构：在Python中重写docker/dify-env-sync.sh，以提高https://github.com/langgenius/dify/pull/33466中的@mahmoodhamdi的可维护性
* 杂务（deps-dev）：通过 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/33915 中进行 2 次更新，跨 1 个目录碰撞存储组
* 杂务（dep）：通过https://github.com/langgenius/dify/pull/33742中的@bowenliang123将hono和@hono/node-server移动到devDependencies
* 杂务（deps-dev）：通过 https://github.com/langgenius/dify/pull/33879 中的 @dependabot[bot] 将 alibabacloud-gpdb20160503 从 3.8.3 提升到 vdb 组 /api 中的 5.1.0
* 杂务（deps-dev）：在 https://github.com/langgenius/dify/pull/33919 中 @dependabot[bot] 通过 12 个更新将开发组跨越 1 个目录
* 重构（web）：将成员邀请叠加层迁移到 https://github.com/langgenius/dify/pull/33922 中的 @lyzno1 的基本 ui
* 重构：通过 @Desel72 在 https://github.com/langgenius/dify/pull/33852 中将执行额外内容存储库测试从模拟迁移到 testcontainers
* 测试（工作流）：通过@CodingOnStar在https://github.com/langgenius/dify/pull/33910中添加工作流组件的单元测试
* 壮举：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/33926 中的印象和 click 事件增强横幅跟踪
* 重构(web)：通过 https://github.com/langgenius/dify/pull/33834 中的 @Desel72 将 MediaType 枚举替换为 const 对象
* 壮举：https://github.com/langgenius/dify/pull/33556 中 @fatelei 的鱿鱼强制 ipv4
* 测试（工作流程）：通过https://github.com/langgenius/dify/pull/33937中的@CodingOnStar通过编辑和删除功能改进数据集项目测试
* ci: 修复 AttributeError: 'Flask' 对象没有属性 'login_manager' FAILED #33891 by @asukaminato0721 in https://github.com/langgenius/dify/pull/33896
* 修复：不要阻止 @letterbeezps 在 https://github.com/langgenius/dify/pull/33280 中对 baidu vdb 进行更新插入
* 测试：将文件服务 zip 和查找测试迁移到 @Desel72 在 https://github.com/langgenius/dify/pull/33944 中的 testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/33947中的@Desel72将最终用户服务批量测试迁移到testcontainers
* 测试：删除基于模拟的测试，并由 https://github.com/langgenius/dify/pull/33946 中的 @Desel72 的 testcontainers 取代
* 测试：通过https://github.com/langgenius/dify/pull/33951中的@Desel72将批量更新文档状态测试迁移到testcontainers
* feat(firecrawl): 当 @kurokobo 在 https://github.com/langgenius/dify/pull/33864 中完成抓取状态时跟随分页
* 修复（i18n）：全面的土耳其语（tr-TR）翻译修复和https://github.com/langgenius/dify/pull/33885中@bakiburakogun缺失的密钥
* 测试：将数据集服务创建数据集测试迁移到https://github.com/langgenius/dify/pull/33945中的@Desel72测试容器
* 测试：将基于api的扩展服务测试迁移到https://github.com/langgenius/dify/pull/33952中@Desel72的testcontainers
* 测试：将https://github.com/langgenius/dify/pull/33949中@Desel72保存的消息服务测试迁移到testcontainers
* 重构：使用 https://github.com/langgenius/dify/pull/33954 中 @tmimmanuel 的 EnumText 作为 WorkflowAppLog.created_from 和 WorkflowArchiveLog 列
* 重构：在 https://github.com/langgenius/dify/pull/33961 中使用 @tmimmanuel 为 ApiToken.type 使用 EnumText
*测试：删除https://github.com/langgenius/dify/pull/33957中@Desel72被testcontainers取代的模拟测试
* 测试：通过https://github.com/langgenius/dify/pull/33955中的@Desel72将工作流工具管理服务测试迁移到testcontainers
* 重构：在 https://github.com/langgenius/dify/pull/33959 中使用 @tmimmanuel 的 TenantCreditPool.pool_type 的 EnumText
* 重构：在https://github.com/langgenius/dify/pull/33969中通过@RenzoMXD选择剩余的控制台应用程序控制器
* 测试：将api工具管理服务测试迁移到https://github.com/langgenius/dify/pull/33956中的@Desel72测试容器
* 测试：通过https://github.com/langgenius/dify/pull/33958中的@Desel72将oauth服务器服务测试迁移到testcontainers
* 重构：在 https://github.com/langgenius/dify/pull/33979 中使用 @tmimmanuel 的 EnumText 作为 DocumentSegment.type
* 重构：https://github.com/langgenius/dify/pull/33975 中 @tmimmanuel 使用 EnumText 表示 TidbAuthBinding.status 和 MessageFile.type
* 测试：通过@Desel72将密码重置测试迁移到https://github.com/langgenius/dify/pull/33974中的testcontainers
* 修复（网络）：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/33965 中更新帐户设置标头
*修复：修复https://github.com/langgenius/dify/pull/33942中@fatelei索引文档中不显示块的问题
* ci：更新actions版本，修复@hyoban在https://github.com/langgenius/dify/pull/33950中的缓存
* 修复（sdk）：https://github.com/langgenius/dify/pull/33996 中 @lyzno1 修补了 Nodejs client 锁定文件中的扁平化漏洞
* 重构（api）：在 https://github.com/langgenius/dify/pull/33867 中使用 @bittoby 的 TypedDict 键入身份验证服务凭证
* 重构：使用 EnumText 进行 ApiToolProvider.schema_type_str 和 Docume… by @tmimmanuel in https://github.com/langgenius/dify/pull/33983
* 重构（web）：将插件 toast 使用迁移到新的 UI toast API 并更新 @lyzno1 在 https://github.com/langgenius/dify/pull/34001 中的测试
* 测试：通过 @WTW0313 在 https://github.com/langgenius/dify/pull/33928 中使用附加场景增强 useChat 挂钩测试
*修复（rate_limit）：当https://github.com/langgenius/dify/pull/33830中的@qwedc001更改max_active_requests触发__init__时刷新redis缓存
* 修复：修复 https://github.com/langgenius/dify/pull/33988 中 @QuantumGhost 忽略的应用程序 icon_type 更新
* 重构：@hyoban 在 https://github.com/langgenius/dify/pull/33888 中延迟加载大型模块
* feat(web)：通过 @lyzno1 在 https://github.com/langgenius/dify/pull/34011 中重构定价模式滚动和可访问性
* 壮举：https://github.com/langgenius/dify/pull/33082 中的 @scdeng 在 LLM、问题分类器和变量提取器节点中提供变量引用支持的可配置模型参数
* 测试（工作流程）：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/33995 中添加帮助程序规范并提高目标工作流程覆盖率
* 杂务：通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/34012 中添加 Gemini 的初始配置
* 测试：通过https://github.com/langgenius/dify/pull/33973中的@Desel72将oauth测试迁移到testcontainers
* 重构：在https://github.com/langgenius/dify/pull/34019中通过@RenzoMXD在控制台数据集文档控制器中选择
* 测试：删除反馈服务测试，并由 https://github.com/langgenius/dify/pull/34026 中的 @Desel72 的 testcontainers 取代
*测试：迁移保留删除存档工作流程运行测试到testcon…由https://github.com/langgenius/dify/pull/34020中的@Desel72
* 测试：删除 https://github.com/langgenius/dify/pull/34023 中由 @Desel72 的 testcontainers 取代的代理服务测试
* 杂务：将pyrefly从0.55.0撞到0.57.0，由@yu Chengpersonal在https://github.com/langgenius/dify/pull/33755中进行
* 测试：将电子邮件注册测试迁移到 @Desel72 在 https://github.com/langgenius/dify/pull/33971 中的 testcontainers
* 测试：将忘记密码测试迁移到 https://github.com/langgenius/dify/pull/33972 中 @Desel72 的 testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/34022中的@Desel72将数据集服务文档索引测试迁移到testcontainers
* 重构：在 https://github.com/langgenius/dify/pull/33966 中的 @Desel72 在控制台身份验证控制器中使用 sessionmaker().begin()
* 测试：将mcp工具管理服务测试迁移到https://github.com/langgenius/dify/pull/34024中@Desel72的testcontainers
* 修复：https://github.com/langgenius/dify/pull/33980 中@qianchongyang 对默认参数的 SQLAlchemy 弃用警告
* 测试：https://github.com/langgenius/dify/pull/32476 中@rajatagarwal-oss 对 core.app 中子模块（core.app.apps 除外）的单元测试用例
* 测试：@rajatagarwal-oss 在 https://github.com/langgenius/dify/pull/32521 中对 rag.cleaner、rag.data_post_processor 和 rag.datasource 进行单元测试
* 修复：使用查询参数而不是https://github.com/langgenius/dify/pull/31697中@minodisk的decode_plugin_from_identifier的请求正文
* 重构：更喜欢 https://github.com/langgenius/dify/pull/34009 中@hyoban 的仪器仪表-client
*修复（api）：StreamsBroadcastChannel开始从https://github.com/langgenius/dify/pull/34030中的@QuantumGhost开始读取消息
* 修复（工作流程）：在https://github.com/langgenius/dify/pull/29983中@majiayu000在容器外部粘贴节点时清除循环/迭代元数据
* 修复：通过 @hyoban 在 https://github.com/langgenius/dify/pull/34052 中更新文档路径
* 测试：在 https://github.com/langgenius/dify/pull/34042 中用 @tmimmanuel 的 IndexTechnique 替换 indexing_technique 字符串文字
* 测试：通过 @Desel72 在 https://github.com/langgenius/dify/pull/34037 中将 webapp auth 服务测试迁移到 testcontainers
* 测试：通过https://github.com/langgenius/dify/pull/34034中的@Desel72将高级提示模板服务测试迁移到testcontainers
* 重构：在https://github.com/langgenius/dify/pull/34027中通过@RenzoMXD在控制台数据集段和API关键控制器中选择
* 重构：在https://github.com/langgenius/dify/pull/34029中通过@tmimmanuel在控制台数据集文档控制器中选择
* 测试：通过https://github.com/langgenius/dify/pull/34025中的@Desel72将应用程序服务测试迁移到testcontainers
* 修复：通过 https://github.com/langgenius/dify/pull/34049 中的 @Krishnachaitanyakc 解决剩余 TypeBase 模型中可调用默认值的 SADeprecationWarning
*测试：迁移工具将服务测试转换为@Desel72在https://github.com/langgenius/dify/pull/34035中的测试容器
* 重构（工作流程）：通过https://github.com/langgenius/dify/pull/34002中的@lyzno1将旧的toast用法迁移到ui toast
* 测试：通过 @Desel72 将工作流应用程序服务测试迁移到 https://github.com/langgenius/dify/pull/34036 中的 testcontainers
* 重构（web）：暴露化身基元以供 @lyzno1 在 https://github.com/langgenius/dify/pull/34057 中组合
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/34055 中与 en-US 同步翻译
* 重构：在 https://github.com/langgenius/dify/pull/34058 中添加 @lyzno1 可组合的头像槽包装器
*修复（api）：修复https://github.com/langgenius/dify/pull/34061中@QuantumGhost在StreamsBroadcastChannel中的并发问题
* feat(web): @lyzno1 在 https://github.com/langgenius/dify/pull/34064 中的基本 ui 滑块
* 修复：@iamjoel 在 https://github.com/langgenius/dify/pull/34062 中未登录时不会记录合作伙伴堆栈
* 壮举（工作流程）：添加选择上下文菜单帮助程序，并通过 https://github.com/langgenius/dify/pull/34013 中的 @CodingOnStar 与上下文菜单组件集成
* 修复：HumanInput 节点无法通过 @hjlarry 在 https://github.com/langgenius/dify/pull/34077 中粘贴到容器中
* test(workflow-app)：通过https://github.com/langgenius/dify/pull/34065中的@CodingOnStar增强工作流组件和挂钩的单元测试
* 壮举：通过 @zhangx1n 在 https://github.com/langgenius/dify/pull/34059 中添加用于管理 DSL 导入/导出的内部 API 端点
* 杂务：将 Dify 提升至 1.13.3，并将沙箱提升至 0.2.13（由 https://github.com/langgenius/dify/pull/34079 中的 @laipz8200）

## 新贡献者
* @bittoby 在 https://github.com/langgenius/dify/pull/33610 中做出了第一个贡献
* @xr843 在 https://github.com/langgenius/dify/pull/33767 中做出了第一个贡献
* @Lubrsy706 在 https://github.com/langgenius/dify/pull/33083 中做出了第一个贡献
* @yuhengpersonal 在 https://github.com/langgenius/dify/pull/33809 中做出了第一个贡献
* @ckstck 在 https://github.com/langgenius/dify/pull/33857 中做出了第一个贡献
* @yoloni-9527 在 https://github.com/langgenius/dify/pull/33841 中做出了第一个贡献
* @BipinRimal314 在 https://github.com/langgenius/dify/pull/33838 中做出了第一个贡献
* @letterbeezps 在 https://github.com/langgenius/dify/pull/33280 中做出了第一个贡献
* @bakiburakogun 在 https://github.com/langgenius/dify/pull/33885 中做出了第一个贡献
* @qwedc001 在 https://github.com/langgenius/dify/pull/33830 中做出了第一个贡献
* @qianchongyang 在 https://github.com/langgenius/dify/pull/33980 中做出了第一个贡献
* @mindisk 在 https://github.com/langgenius/dify/pull/31697 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.13.2...1.13.3

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.13.3` · 📅 发布：2026-03-27 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.13.3)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
