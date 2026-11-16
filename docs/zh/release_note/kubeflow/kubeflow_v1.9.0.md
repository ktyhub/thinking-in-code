---
title: "kubeflow v1.9.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.9.0"
version: "v1.9.0"
published: "2024-07-16"
type: "minor"
lang: "zh"
---

# kubeflow v1.9.0

此版本针对 [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) 版本 [__1.9.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.9/) 进行了删减。

__注意：__ 以下 release note __仅__ 适用于 `kubeflow/kubeflow` 存储库中的组件。

## 重大变化

### 中央仪表板

- 清理主页和组 Kubeflow Pipelines 侧边栏链接：https://github.com/kubeflow/kubeflow/pull/7583
- 管理所有拥有的命名空间的贡献者：https://github.com/kubeflow/kubeflow/pull/7582

### Kubeflow 笔记本

- 更新默认包（Jupyter、VSCode、RStudio、PyTorch、Tensorflow、CUDA 等）：https://github.com/kubeflow/kubeflow/pull/7590
- 允许笔记本电脑在受限的 Pod 安全上下文中运行：https://github.com/kubeflow/kubeflow/pull/7622

## 特点

### 中央仪表板

*壮举（仪表板）：允许在https://github.com/kubeflow/kubeflow/pull/7138中使用@MGSousa在`externalLinks`中使用`{ns}`模板
* 壮举：@thesuperzapper 在 https://github.com/kubeflow/kubeflow/pull/7582 中对管理贡献者页面进行了重大更新
* 壮举：通过 @thesuperzapper 在 https://github.com/kubeflow/kubeflow/pull/7583 中更新仪表板样式和链接

### 笔记本图像

* 修复：@thesuperzapper 在 https://github.com/kubeflow/kubeflow/pull/7407 中的 jupyterlab 运行时卷权限
* 修复：在 https://github.com/kubeflow/kubeflow/pull/7496 中增加 S6_CMD_WAIT_FOR_SERVICES_MAXTI… by @mishraprafful
* 壮举：通过 @thesuperzapper 在 https://github.com/kubeflow/kubeflow/pull/7590 中更新笔记本服务器图像
* 修复：https://github.com/kubeflow/kubeflow/pull/7622 中 @thesuperzapper 具有非根 SecurityContext 的笔记本服务器映像

### Jupyter Web 应用程序

* 在https://github.com/kubeflow/kubeflow/pull/6529中修剪@haoxins的自定义Jupyter图像字符串

### 配置文件控制器

* 通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7310 中使主体在 Profiles Controller 中动态化

### TensorBoard 控制器

* 壮举：允许在 https://github.com/kubeflow/kubeflow/pull/6902 中的 @punkerpunker 在 Istio VirtualServices 的笔记本/张量板控制器中设置 `ISTIO_HOST`

### PVC 查看器

* 壮举：通过 @TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/7351 中配置 pvcviewer istio 网关

## 修复

### 中央仪表板

*centraldashboard：不要在管理贡献者屏幕中显示 `All namespaces` (#7188) by @utsumi-fj in https://github.com/kubeflow/kubeflow/pull/7242
* 修复：通过 https://github.com/kubeflow/kubeflow/pull/7578 中的 @thesuperzapper 将中央仪表板更新为 NodeJS 16
* 修复：@hhk7734 在 https://github.com/kubeflow/kubeflow/pull/7264 中错误引用 `DASHBOARD_LINKS_CONFIGMAP` env-var
* 修复：@mishraprafful 在 https://github.com/kubeflow/kubeflow/pull/7597 中创建个人资料时的电子邮件验证奇偶性

### 笔记本控制器

* 每10分钟仅加载spawner_ui_config.yaml一次。通过 @boarder7395 在 https://github.com/kubeflow/kubeflow/pull/7260 关闭 #7259
* 修复（笔记本控制器）：修复@LiaoSirui 在 https://github.com/kubeflow/kubeflow/pull/7305 中的拼写错误
* 修复（笔记本）：通过 @mishraprafful 在 https://github.com/kubeflow/kubeflow/pull/7495 中添加对空图像和容器的 CRD 验证
* 修复：在 https://github.com/kubeflow/kubeflow/pull/7589 中通过 @mishraprafful 指定 envtest 版本以避免 golang 版本格式

### 配置文件控制器

*修复：删除https://github.com/kubeflow/kubeflow/pull/7279中@Linchin的creationTimestamp行
* 修复：通过 https://github.com/kubeflow/kubeflow/pull/7378 中的 @DnPlas 从环境变量中删除额外的 )
* 通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7591 中对配置文件控制器进行 Pin env-test

### Jupyter Web 应用程序

* 修复：通过 @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7320 中设置默认 GPU 供应商列表
* 修复：@TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/7335 中的 KF 1.8 上出现 KeyError
* wa(front): 通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7341 中将所有 webapp 的背景设为白色
* 修复：https://github.com/kubeflow/kubeflow/pull/7375 中 @TobiasGoerke 的本地 var 遮蔽导入
* 优雅地处理节点容量未定义时的边缘情况。关闭#7280。通过 @boarder7395 在 https://github.com/kubeflow/kubeflow/pull/7281
* 修复: :label: 确保 `get_username` 以字符串形式由 https://github.com/kubeflow/kubeflow/pull/7457 中的 @pashtet04 返回用户名
* 修复（crud-web-apps/jupyter）：https://github.com/kubeflow/kubeflow/pull/7485 中@mishraprafful 对 `node.status.capacity` 的字典变量引用
* 修复（笔记本）：在 https://github.com/kubeflow/kubeflow/pull/7585 中正确处理 @kimwnasptd 的 `status.containerState` 消息

### PVC 查看器

* 修复：viewer-spec.yaml 和 @TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/7230 中构建的触发器
* 修复 https://github.com/kubeflow/kubeflow/pull/7244 中 @difnce 的配置文件控制器自述文件和示例文件
* 修复：https://github.com/kubeflow/kubeflow/pull/7247 中的 @TobiasGoerke 将文件浏览器降级为 v2.23.0
* 修复：@TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/7292 中进行 pvcviewer 测试
* 杂务：通过 @TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/7390 中更新默认文件浏览器版本
* 修复：在 https://github.com/kubeflow/kubeflow/pull/7350 中 @TobiasGoerke 返回等待无 pvcviewer 状态

### TensorBoard Web 应用程序

* 修复：通过 https://github.com/kubeflow/kubeflow/pull/7274 中的 @hhk7734 删除 `TWA_APP_SECURE_COOKIES` 配置中不正确的空格

### 中央仪表板（角度重写 - 未完成）

* 修复：https://github.com/kubeflow/kubeflow/pull/7353 中 @DnPlas 指向 ~kubeflow/styles/fonts.scss

## 代码健康

* 修复 https://github.com/kubeflow/kubeflow/pull/6556 中@eltociear 的centraldashboard/README.md 中的拼写错误
* 文档：在 https://github.com/kubeflow/kubeflow/pull/7132 中添加 @DnPlas 的 1.8 路线图
* ci：修复 https://github.com/kubeflow/kubeflow/pull/7263 中 @thesuperzapper 的测试图像替换
* 构建（deps）：将 gopkg.in/yaml.v3 从 3.0.0-20210107192922-496545a6307b 中的 3.0.0-20210107192922-496545a6307b 提升到 https://github.com/kubeflow/kubeflow/pull/7256 中的 @dependabot 在 /components/notebook-controller 中的 3.0.0
* ci：通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7220 中为核心组件构建 ARM 映像
* build(deps): 将 golang.org/x/net 从 0.7.0 中的 0.7.0 提升到 https://github.com/kubeflow/kubeflow/pull/7331 中的 @dependabot 在 /components/pvcviewer-controller 中的 0.17.0
* @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7333 中按顺序运行多架构的构建步骤
* poddefaults：通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7338 中将 golang 映射到 1.20
* ci：确保我们通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7343 中发布所有架构
* ci: 通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7345 中推送特定标签的多架构镜像
* 构建（deps）：在 https://github.com/kubeflow/kubeflow/pull/7216 中 @dependabot 在 /components/centraldashboard-angular/backend 中将自动换行从 1.2.3 提升到 1.2.4
* 构建（deps-dev）：在 https://github.com/kubeflow/kubeflow/pull/7217 中 @dependabot 在 /components/centraldashboard-angular/frontend 中将自动换行从 1.2.3 提升到 1.2.4
* 构建（deps-dev）：在 https://github.com/kubeflow/kubeflow/pull/7361 中由 @dependabot 在 /components/centraldashboard-angular/backend 中将 @babel/traverse 从 7.20.1 碰撞到 7.23.2
* 构建（deps-dev）：在 https://github.com/kubeflow/kubeflow/pull/7362 中通过 @dependabot 在 /components/centraldashboard-angular/frontend 中将 @babel/traverse 从 7.20.1 碰撞到 7.23.2
* ci：修复https://github.com/kubeflow/kubeflow/pull/7386中@thesuperzapper对笔记本服务器图像的版本标记
* 构建（deps）：通过 @dependabot 在 https://github.com/kubeflow/kubeflow/pull/6773 中碰撞 yargs-parser 并同时在 /components/centraldashboard-angular/backend 中
* 构建（deps）：在 https://github.com/kubeflow/kubeflow/pull/7117 中由 @dependabot 在 /components/centraldashboard-angular/frontend 中碰撞 engine.io 和 socket.io
* ci：防止 @thesuperzapper 在 https://github.com/kubeflow/kubeflow/pull/7401 中意外触发发布版本
* 构建（deps）：将 golang.org/x/crypto 从 https://github.com/kubeflow/kubeflow/pull/7427 中的 /components/pvcviewer-controller 中的 0.14.0 提升到 0.17.0
* 杂务：由 @thesuperzapper 在 https://github.com/kubeflow/kubeflow/pull/7402 中清理不活跃的所有者
* 杂务（清单）：通过 @alekseyolg 在 https://github.com/kubeflow/kubeflow/pull/7451 中修复 kustomize 5 的中央仪表板
* 构建（deps）：在 https://github.com/kubeflow/kubeflow/pull/7355 中通过 @dependabot 在 /components/crud-web-apps/tensorboards/frontend 中将 @babel/traverse 从 7.14.7 碰撞到 7.23.2
* 构建（deps）：在 https://github.com/kubeflow/kubeflow/pull/7356 中通过 @dependabot 在 /components/crud-web-apps/volumes/frontend 中将 @babel/traverse 从 7.14.7 碰撞到 7.23.2
* 构建（deps）：将 golang.org/x/net 从 https://github.com/kubeflow/kubeflow/pull/7329 中的 /components/tensorboard-controller 中的 0.0.0-20210825183410-e898025ed96a 提升到 0.17.0
* 构建（deps）：在 https://github.com/kubeflow/kubeflow/pull/7307 中由 @dependabot 在 /components/crud-web-apps/tensorboards/frontend 中从 4.1.1 到 4.3.4 进行调试
* 构建（deps）：在 https://github.com/kubeflow/kubeflow/pull/7308 中由 @dependabot 在 /components/crud-web-apps/volumes/frontend 中从 4.1.1 到 4.3.4 进行调试
* 构建（deps）：在 https://github.com/kubeflow/kubeflow/pull/7309 中由 @dependabot 在 /components/crud-web-apps/jupyter/frontend 中从 4.1.1 到 4.3.4 进行调试
* 构建（deps-dev）：由 @dependabot 在 https://github.com/kubeflow/kubeflow/pull/7324 中将 /components/centraldashboard 中的 fsevents 从 1.2.9 提升到 1.2.13
* 构建（deps）：将 golang.org/x/net 从 0.0.0-20200625001655-4c5254603344 中的 0.0.0-20200625001655-4c5254603344 提升到 https://github.com/kubeflow/kubeflow/pull/7327 中的 @dependabot 在 /components/access-management 中的 0.17.0
* 构建（deps）：在 https://github.com/kubeflow/kubeflow/pull/7358 中通过 @dependabot 在 /components/crud-web-apps/jupyter/frontend 中将 @babel/traverse 从 7.14.7 碰撞到 7.23.2
* 构建（deps-dev）：在 https://github.com/kubeflow/kubeflow/pull/7360 中由 @dependabot 在 /components/centraldashboard 中从 7.6.2 碰撞 @babel/traverse 到 7.23.2
* 构建（deps）：由 https://github.com/kubeflow/kubeflow/pull/7363 中的 @dependabot 在 /components/crud-web-apps/common/backend/kubeflow/kubeflow/crud_backend 中将 urllib3 从 1.25.7 提升到 1.26.18
* 在 https://github.com/kubeflow/kubeflow/pull/7492 中 @terrytangyuan 将 KSC 成员添加到 OWNERS 中的审批者中
* 在 https://github.com/kubeflow/kubeflow/pull/7461 中添加 @rimolive 的 Kubeflow 1.9 发布路线图
* 通过 @sandipantech 在 https://github.com/kubeflow/kubeflow/pull/7484 中将 CLOMonitor 徽章添加到项目的 README.md 中
* 文档：通过 @jlewi 在 https://github.com/kubeflow/kubeflow/pull/7107 中更新示例笔记本规范
* 杂务：通过 @TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/7561 中更新 pvcviewer 依赖项
* 发布：在 https://github.com/kubeflow/kubeflow/pull/7592 中通过 @kimwnasptd 碰撞 RC0 的所有清单
* 由 @thesuperzapper 在 https://github.com/kubeflow/kubeflow/pull/7620 中发布 1.9.0-rc.1

## 新贡献者
* @difence 在 https://github.com/kubeflow/kubeflow/pull/7244 中做出了第一个贡献
* @Linchin 在 https://github.com/kubeflow/kubeflow/pull/7279 中做出了第一个贡献
* @eltociear 在 https://github.com/kubeflow/kubeflow/pull/6556 中做出了第一个贡献
* @boarder7395 在 https://github.com/kubeflow/kubeflow/pull/7260 中做出了第一个贡献
* @tzstoyanov 在 https://github.com/kubeflow/kubeflow/pull/7322 中做出了第一个贡献
* @LiaoSirui 在 https://github.com/kubeflow/kubeflow/pull/7305 中做出了第一个贡献
* @utsumi-fj 在 https://github.com/kubeflow/kubeflow/pull/7242 中做出了第一个贡献
* @pashtet04 在 https://github.com/kubeflow/kubeflow/pull/7457 中做出了第一个贡献
* @alekseyolg 在 https://github.com/kubeflow/kubeflow/pull/7451 中做出了第一个贡献
* @rimolive 在 https://github.com/kubeflow/kubeflow/pull/7461 中做出了第一个贡献
* @sandipantech 在 https://github.com/kubeflow/kubeflow/pull/7484 中做出了第一个贡献
* @MGSousa 在 https://github.com/kubeflow/kubeflow/pull/7138 中做出了第一个贡献
* @punkerpunker 在 https://github.com/kubeflow/kubeflow/pull/6902 中做出了第一个贡献
* @hhk7734 在 https://github.com/kubeflow/kubeflow/pull/7274 中做出了第一个贡献

**完整 Changelog**：https://github.com/kubeflow/kubeflow/compare/v1.8.0...v1.9.0

---

> 📦 仓库：[kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · 🏷️ 版本：`v1.9.0` · 📅 发布：2024-07-16 · [查看英文原版 Release](https://github.com/kubeflow/kubeflow/releases/tag/v1.9.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
