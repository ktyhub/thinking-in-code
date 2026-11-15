---
title: "dify 1.14.2"
project: "dify"
repo: "langgenius/dify"
tag: "1.14.2"
version: "1.14.2"
published: "2026-05-19"
type: "patch"
lang: "zh"
---

# dify 1.14.2

## 🚀 v1.14.2 有什么新功能？

v1.14.2 是继 v1.14.1 之后的一个补丁版本，专注于安全强化、工作流程和知识可靠性、可观测性修复、代理基础工作以及部署/运行时调整。

### 🔐 安全和管理

- **租户范围的敏感端点** - 加强了应用程序跟踪配置端点和 FilePreview 文本提取的租户隔离。感谢 [#35793](https://github.com/langgenius/dify/pull/35793) 和 [#35797](https://github.com/langgenius/dify/pull/35797) 中的@xr843。
- **工具凭证安全** - 限制对工作区管理员和所有者的默认内置工具凭证更新，并在 `reset-encrypt-key-pair` 期间清理过时的租户工具凭证。感谢 [#36264](https://github.com/langgenius/dify/pull/36264) 和 [#35843](https://github.com/langgenius/dify/pull/35843) 中的 @NeatGuyCoding 和 @xr843。

### 🧩 工作流程、HITL 和应用程序运行时

- **工作流程执行可靠性** - 在 HITL 工作流程恢复后恢复跟踪，改进工作流程运行回调跟踪，减少消息更新数据库往返，固定 Flask 上下文之外的内存获取，并正确关闭 base64 文件查找会话。感谢 [#36064](https://github.com/langgenius/dify/pull/36064)、[#36149](https://github.com/langgenius/dify/pull/36149)、[#36213](https://github.com/langgenius/dify/pull/36213)、[#36253](https://github.com/langgenius/dify/pull/36253) 中的 @Blackoutta、@CodingOnStar、@wylswz、@hjlarry 和 @escape0707，以及[#36308](https://github.com/langgenius/dify/pull/36308)。
- **工作流程和模型选择改进** - 修复了未选择模型时的加载行为，通过支持的参数过滤模型预设，并改进了 API 扩展对话框控件。感谢 [#36342](https://github.com/langgenius/dify/pull/36342)、[#36339](https://github.com/langgenius/dify/pull/36339) 和 [#36323](https://github.com/langgenius/dify/pull/36323) 中的 @iamjoel 和 @lyzno1。

### 📚 数据、RAG 和知识

- **知识库稳定性** - 修复了知识命中测试渲染、空知识创建、推荐应用程序类别排序以及推荐应用程序详细信息检索中的空处理。感谢 [#36106](https://github.com/langgenius/dify/pull/36106)、[#36336](https://github.com/langgenius/dify/pull/36336)、[#36161](https://github.com/langgenius/dify/pull/36161) 和 [#36153](https://github.com/langgenius/dify/pull/36153) 中的 @FFXN、@laipz8200、@hjlarry 和 @EvanYao826。
- **RAG 和文档处理** — 允许 LLM 节点访问检索到的知识文件、在 API 更新后重新生成文档摘要、修复管道模板渲染，并更优雅地处理 RAG 管道中的凭证获取失败。感谢 [#36175](https://github.com/langgenius/dify/pull/36175)、[#36035](https://github.com/langgenius/dify/pull/36035)、[#36168](https://github.com/langgenius/dify/pull/36168) 和 [#36165](https://github.com/langgenius/dify/pull/36165) 中的 @laipz8200、@EvanYao826、@FFXN 和 @linw1995。

### 🎨 Web UI 和产品体验

- **应用程序创建和入门** — 跟踪应用程序创建源和模板 ID，从浏览器初始化用户时区和语言，并修复 WebApp 图标和描述显示。感谢 [#36369](https://github.com/langgenius/dify/pull/36369)、[#36170](https://github.com/langgenius/dify/pull/36170)、[#36206](https://github.com/langgenius/dify/pull/36206) 和 [#36209](https://github.com/langgenius/dify/pull/36209) 中的 @CodingOnStar、@lyzno1 和 @JzoNgKVO。
- **注释和数据集 UI** — 允许注释回复分数阈值低于 `0.8`，将未经授权的知识编辑器重定向回数据集，并修复了没有类型有效负载的标签重命名。感谢 [#36337](https://github.com/langgenius/dify/pull/36337)、[#36073](https://github.com/langgenius/dify/pull/36073) 和 [#36182](https://github.com/langgenius/dify/pull/36182) 中的 @JzoNgKVO、@iamjoel 和 @lyzno1。
- **UI 平台迁移和完善** — 添加了 Checkbox 和 CheckboxGroup 原语，将更多控件迁移到 `@langgenius/dify-ui`，改进了对话框溢出布局，并改进了帐户头像和安装流程交互。感谢@lyzno1和@CodingOnStar在[#36271](https://github.com/langgenius/dify/pull/36271)、[#36295](https://github.com/langgenius/dify/pull/36295)、[#36255](https://github.com/langgenius/dify/pull/36255)、[#36302](https://github.com/langgenius/dify/pull/36302)、[#36111](https://github.com/langgenius/dify/pull/36111)、 [#36199](https://github.com/langgenius/dify/pull/36199) 和 [#36210](https://github.com/langgenius/dify/pull/36210)。

### 🔎 可观察性和追踪
- **跟踪可靠性** — 隔离 Langfuse v3 SDK 跟踪器提供程序，以防止跨任务干扰并添加 Phoenix 父跟踪回退行为。感谢 [#36136](https://github.com/langgenius/dify/pull/36136) 和 [#36290](https://github.com/langgenius/dify/pull/36290) 中的 @GareArc 和 @Blackoutta。

### ⚙️ 部署、依赖项和开发人员体验

- **部署调整** — 将插件守护程序升级到 `0.6.1`，增加了默认的 GraphEngine 最小工作线程数，并刷新了 Docker 自述文件参考。感谢 [#36312](https://github.com/langgenius/dify/pull/36312)、[#35650](https://github.com/langgenius/dify/pull/35650) 和 [#36303](https://github.com/langgenius/dify/pull/36303) 中的 @laipz8200、@kenwoodjw 和 @RiskeyL。
- **后端和 CI 维护** — 将静态分析转向 Pyrefly，将 Graphon 升级到 `0.4.0`，添加了修补程序择优来源检查，并改进了生成的合同工作流程。感谢 [#36154](https://github.com/langgenius/dify/pull/36154)、[#36124](https://github.com/langgenius/dify/pull/36124)、[#36340](https://github.com/langgenius/dify/pull/36340) 和 [#36286](https://github.com/langgenius/dify/pull/36286) 中的 @cqjjjzr、@laipz8200 和 @hyoban。
- **依赖项更新** — 刷新了后端和代理依赖项，包括 `authlib`、`ujson`、`langsmith` 和 `urllib3`。感谢 [#36112](https://github.com/langgenius/dify/pull/36112)、[#36121](https://github.com/langgenius/dify/pull/36121)、[#36142](https://github.com/langgenius/dify/pull/36142) 和 [#36160](https://github.com/langgenius/dify/pull/36160) 中的 @dependabot[bot]。

## 升级指南

> [!重要]
>
> - 此版本包括针对可配置探索应用程序类别的新数据库迁移。作为升级的一部分运行数据库迁移。
> - Docker Compose 环境变量现在分为 `docker/envs/**` 下的分类文件。如果您维护自定义的 `docker-compose.yaml` 或 `.env`，请仔细检查新布局并重新应用本地自定义。
> - 对于自托管部署，将继续遵循显式配置的 `SECRET_KEY` 值。如果 `SECRET_KEY` 为空，Dify 现在会自动生成并保留运行时密钥。

### Docker 组合部署

1. 备份您的自定义 docker-compose YAML 和 env 文件。

   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   cp .env .env.$(date +%s).bak 2>/dev/null || true
   ```

2. 从发布分支或标签获取最新代码。

   ```bash
   git fetch --tags
   git checkout 1.14.2
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

1. 停止 API 服务器、Worker 和 Web 前端服务器。

2. 从release标签获取最新的代码。

   ```bash
   git fetch --tags
   git checkout 1.14.2
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
* 修复：将未经授权的数据集访问重定向到 https://github.com/langgenius/dify/pull/36073 中 @iamjoel 的知识编辑者的 /datasets
* 杂务：管理员还拥有@iamjoel在https://github.com/langgenius/dify/pull/36069中更改角色的权限
* 修复：在 https://github.com/langgenius/dify/pull/36078 中通过 @CodingOnStar 修复相对值
* 杂务：@asukaminato0721 在 https://github.com/langgenius/dify/pull/36080 中的一些比赛案例
* 修复：修复 https://github.com/langgenius/dify/pull/36083 中 @fatelei 插件缺失版本和校验和的问题
* 修复：在 https://github.com/langgenius/dify/pull/36064 中 @Blackoutta 恢复 HITL 工作流程后恢复跟踪
* 杂务：由 @hyoban 在 https://github.com/langgenius/dify/pull/36091 更新部门
* 修复：https://github.com/langgenius/dify/pull/36092 中 @Copilot 使用 Trans 组件删除编辑页面上的应用程序确认文本
* 重构：https://github.com/langgenius/dify/pull/36105 中 @lyzno1 稳定选择器预览卡
* ci：通过https://github.com/langgenius/dify/pull/36100中的@asukaminato0721将pyrefly依赖版本更新为1.0.0
* 修复：知识命中测试渲染失败。作者：@FFXN，https://github.com/langgenius/dify/pull/36106
* 琐事：删除 https://github.com/langgenius/dify/pull/35637 中@hjlarry 过时的管理控制台路由
* 修复(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36111 中优化帐户头像交互
* 杂务（deps）：通过https://github.com/langgenius/dify/pull/36112中的@dependabot[bot]将/api中的ujson从5.12.0提升到5.12.1
* 杂务（i18n）：通过 @github-actions[bot] 在 https://github.com/langgenius/dify/pull/36115 中与 en-US 同步翻译
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/36121 中的 @dependabot[bot] 将 /api 中的 authlib 从 1.6.11 提升到 1.6.12
* 修复：隔离 Langfuse v3 SDK TracerProvider 以防止 https://github.com/langgenius/dify/pull/36136 中 @GareArc 的跨任务干扰
* 杂务（deps）：由 @dependabot[bot] 在 https://github.com/langgenius/dify/pull/36142 中将 /api 中的 langsmith 从 0.7.31 提升到 0.8.0
* 修复：https://github.com/langgenius/dify/pull/36143 中 @hjlarry 在 Flask 上下文之外访问信用池
*修复：修复https://github.com/langgenius/dify/pull/36134中@fatelei的pydantic联合类型错误
* 修复（错误）：清理不必要的 | @mturac 在 https://github.com/langgenius/dify/pull/36135 中的错误类中没有
* 杂务：删除不必要的 | @BrianWang1990 在 https://github.com/langgenius/dify/pull/36147 上没有关于 LLMError 和 Mail.send
* 杂务：https://github.com/langgenius/dify/pull/36154 中的@cqjjjzr 删除了pyright，改用pyrefly
* 杂务：通过 @iamjoel 在 https://github.com/langgenius/dify/pull/36155 中增强通知链接 ui
* feat(agent): 由 @BeautyyuYanli 在 https://github.com/langgenius/dify/pull/36087 初始化代理服务器
* feat(workflow)：通过https://github.com/langgenius/dify/pull/36149中的@CodingOnStar进行额外的数据跟踪来增强工作流程运行回调
* 杂务（deps）：通过 https://github.com/langgenius/dify/pull/36160 中的 @dependabot[bot] 将 /dify-agent 中的 urllib3 从 2.6.3 提升到 2.7.0
*修复：获取recommend_app类别不应由https://github.com/langgenius/dify/pull/36161中的@hjlarry重新排序
* 修复：在 https://github.com/langgenius/dify/pull/36153 中 @EvanYao826 访问 result['id'] 之前，在 get_recommend_app_detail 中添加 null 检查
*功能：允许在https://github.com/langgenius/dify/pull/36031中禁用@wylswz的运行时信用检查
* 修复：修复https://github.com/langgenius/dify/pull/36151中@fatelei删除日志失败的问题
*修复（api）：通过@linw1995在https://github.com/langgenius/dify/pull/36165中优雅地处理rag管道中的凭证获取失败
* feat(MessageLogModal)：通过https://github.com/langgenius/dify/pull/36169中的@CodingOnStar重构模态结构并改进选项卡处理
*修复：管道模板在https://github.com/langgenius/dify/pull/36168中由@FFXN渲染
* 杂务：增加 https://github.com/langgenius/dify/pull/35650 中 @kenwoodjw 的默认图形引擎最小工作量
* 修复：如果 @iamjoel 在 https://github.com/langgenius/dify/pull/36176 中安装了很多软件包，则操作 btn 被隐藏
* 重构：清理https://github.com/langgenius/dify/pull/36173中@cqjjjzr的重复代码
* 重构(api)：通过https://github.com/langgenius/dify/pull/36180中的@cqjjjzr将console.app.workflow_comment迁移到BaseModel
* 修复(api): 允许LLM节点访问https://github.com/langgenius/dify/pull/36175中@laipz8200检索到的知识文件
* 修复（安全）：通过 https://github.com/langgenius/dify/pull/35793 中的 @xr843 在应用程序跟踪配置端点 (GHSA-48xc-wmw8-3jr3) 上强制执行租户作用域
*修复（安全）：租户范围FilePreviewApi文本提取端点（GHSA-2qwc-c2cc-2xwv）由https://github.com/langgenius/dify/pull/35797中的@xr843
* 修复（命令）：通过 https://github.com/langgenius/dify/pull/35843 中的 @xr843 清除重置加密密钥对上的租户工具凭据（#35396）
*修复：允许https://github.com/langgenius/dify/pull/36182中的@lyzno1在没有类型有效负载的情况下重命名标签
* 修复：在 https://github.com/langgenius/dify/pull/36125 中替换 @KurodaKayn 已弃用的 testcontainers 日志等待
* 重构（安装）：通过 https://github.com/langgenius/dify/pull/36199 中的 @CodingOnStar 改进插件安装步骤的布局和滚动行为
* 杂务：在 https://github.com/langgenius/dify/pull/36201 中 @iamjoel 增强无教育计划警告模式中的文案写作
* 杂务（布局）：在 https://github.com/langgenius/dify/pull/36208 中 @CodingOnStar 的分析跟踪的通用布局中重新引入 AmplitudeProvider
* 重构：通过 https://github.com/langgenius/dify/pull/36210 中的 @CodingOnStar 增强各种模式中的布局和滚动行为，以改善用户体验
* 修复：通过https://github.com/langgenius/dify/pull/36035中的@EvanYao826通过API更新后重新生成文档摘要（#35950）
* 修复（web）：https://github.com/langgenius/dify/pull/36206 中 @JzoNgKVO 的 web 应用程序中的应用程序图标
* 修复（网络）：@JzoNgKVO 在 https://github.com/langgenius/dify/pull/36209 中缺少网络应用程序描述
* 壮举：通过https://github.com/langgenius/dify/pull/36170中的@lyzno1从浏览器初始化用户时区和语言
*修复（api）：在https://github.com/langgenius/dify/pull/36187中@BeautyyuYanli构建Docker期间避免dify-agent路径查找
*修复：减少https://github.com/langgenius/dify/pull/36213中@wylswz消息更新的数据库往返次数
* 重构：通过https://github.com/langgenius/dify/pull/36222中的@EvanYao826将isinstance链转换为easy_ui_based_generate_task_pipeline.py中的匹配/大小写
* 重构：将 isinstance 链转换为匹配/大小写（第 3 部分），作者为 https://github.com/langgenius/dify/pull/36242 中的 @EvanYao826
* 修复：https://github.com/langgenius/dify/pull/36253 中的 @hjlarry 获取 LLM 节点的内存可能会导致超出 Flask 上下文
* 杂务：改进 @cqjjjzr 在 https://github.com/langgenius/dify/pull/36247 中输入的 swagger markdown 可选字段
* 修复(web): 将元数据选择器迁移到 https://github.com/langgenius/dify/pull/36255 中 @zhangxuhe1 的组合框
* 修复（auth）：在 `_TokenData` 中保留 `phase` 字段，以便重置密码/更改电子邮件阶段绑定检查不会由 @vuko 在 https://github.com/langgenius/dify/pull/36117 中进行 400 (#36116)
* 重构：在 https://github.com/langgenius/dify/pull/36267 中使用@D-393Patel 的工作流响应匹配案例
* 杂务（api）：通过https://github.com/langgenius/dify/pull/36124中的@laipz8200将graphon升级到0.4.0
* feat(dify-ui): 通过@lyzno1在https://github.com/langgenius/dify/pull/36271中添加Checkbox/CheckboxGroup基元
* 修复：在 https://github.com/langgenius/dify/pull/36261 中通过 @xxiaoxiong 将缺失的阶段字段添加到 _TokenData TypedDict
* 杂务：在 https://github.com/langgenius/dify/pull/36286 中由 @hyoban 在 ci 中生成合同
* 重构：通过https://github.com/langgenius/dify/pull/36295中的@lyzno1将复选框迁移到dify-ui
* 修复(web): 通过 @lyzno1 在 https://github.com/langgenius/dify/pull/36302 中约束对话框溢出布局
* 重构(web)：通过@lyzno1在https://github.com/langgenius/dify/pull/36314中简化github安装焦点
* 杂务（docker）：通过https://github.com/langgenius/dify/pull/36312中的@laipz8200将插件守护程序升级到0.6.1
* ci：确保 pnpm 在 https://github.com/langgenius/dify/pull/36315 中 @lyzno1 的 setup-web 操作中可用
* 修复：在 https://github.com/langgenius/dify/pull/36297 中使用 @EvanYao826 的 @contextmanager 装饰器的 Generator 类型注释
*修复（api）：在https://github.com/langgenius/dify/pull/36308中关闭@escape0707的base64文件查找会话
* 重构：将 isinstance 链转换为匹配/大小写（第 5 部分），由 @EvanYao826 在 https://github.com/langgenius/dify/pull/36298 中
* 重构(api)：通过https://github.com/langgenius/dify/pull/36216中的@cqjjjzr将console.app.workflow迁移到BaseModel
* 重构：在 https://github.com/langgenius/dify/pull/36300 中添加 @hyoban 的控制台 client 迁移演示
* 修复：通过@lyzno1在https://github.com/langgenius/dify/pull/36323中改进API扩展对话框控件
* 修复（dev）：通过@laipz8200在https://github.com/langgenius/dify/pull/36325中处理空的pyrefly目标路径
* 杂务：添加类型以通过 @asukaminato0721 在 https://github.com/langgenius/dify/pull/36324 中进行测试
* 测试（api）：在https://github.com/langgenius/dify/pull/36310中通过@escape0707隔离测试之间的容器数据库
*修复：当https://github.com/langgenius/dify/pull/36290中的@Blackoutta禁用父跟踪时，后备phoenix父跟踪
* 修复：@laipz8200在https://github.com/langgenius/dify/pull/36336中无法创建空知识
* 杂务：通过 @iamjoel 在 https://github.com/langgenius/dify/pull/36339 中支持的参数过滤模型预设
* ci：在 https://github.com/langgenius/dify/pull/36340 中添加 @laipz8200 的修补程序樱桃挑选出处检查
* feat(web)：允许 @JzoNgKVO 在 https://github.com/langgenius/dify/pull/36337 中的注释回复分数阈值低于 0.8
* 修复（控制台）：要求管理员/所有者通过 https://github.com/langgenius/dify/pull/36264 中的 @NeatGuyCoding 设置默认内置工具凭证
* 文档：修复 docker 自述文件编号并刷新 @RiskeyL 在 https://github.com/langgenius/dify/pull/36303 中的陈旧引用
* 修复：未选择模型，但 @iamjoel 在 https://github.com/langgenius/dify/pull/36342 中继续加载参数
* 修复（离线）：通过 @GareArc 在 https://github.com/langgenius/dify/pull/36335 中保护 ENG-421 的市场 I/O 路径
* 壮举：通过 @CodingOnStar 在 https://github.com/langgenius/dify/pull/36369 中使用源和模板 ID 增强应用程序创建跟踪
* 杂务（发布）：https://github.com/langgenius/dify/pull/36313 中 @laipz8200 的 1.14.2 碰撞版本

## 新贡献者
* @mturac 在 https://github.com/langgenius/dify/pull/36135 中做出了第一个贡献
* @linw1995 在 https://github.com/langgenius/dify/pull/36165 中做出了第一个贡献
* @KurodaKayn 在 https://github.com/langgenius/dify/pull/36125 中做出了第一个贡献
* @vuko 在 https://github.com/langgenius/dify/pull/36117 中做出了第一个贡献
* @D-393Patel 在 https://github.com/langgenius/dify/pull/36267 中做出了第一个贡献
* @xxiaoxiong 在 https://github.com/langgenius/dify/pull/36261 中做出了第一个贡献

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.14.1...1.14.2

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.14.2` · 📅 发布：2026-05-19 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.14.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
