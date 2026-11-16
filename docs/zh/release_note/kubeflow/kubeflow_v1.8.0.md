---
title: "kubeflow v1.8.0"
project: "kubeflow"
repo: "kubeflow/kubeflow"
tag: "v1.8.0"
version: "v1.8.0"
published: "2023-11-01"
type: "minor"
lang: "zh"
---

# kubeflow v1.8.0

此版本针对 [Kubeflow Platform](https://www.kubeflow.org/docs/started/introduction/#what-is-kubeflow-platform) 版本 [__1.8.0__](https://www.kubeflow.org/docs/releases/kubeflow-1.8/) 进行了删减。

__注意：__ 以下 release note __仅__ 适用于 `kubeflow/kubeflow` 存储库中的组件。

## 特点

* 在 CI 中为centraldashboard multi-arc 添加对 linux/ppc64le 的支持…作者：https://github.com/kubeflow/kubeflow/pull/6923 中的 @amitmukati-2604
* cdb-angular: 在 https://github.com/kubeflow/kubeflow/pull/6918 中显示 @orfeas-k 的 KF 版本
* 支持 Tensorboard Web 应用程序中的 Pod 默认值，由 https://github.com/kubeflow/kubeflow/pull/6924 中的 @surajkota 提供
*centraldashboard：支持https://github.com/kubeflow/kubeflow/pull/6945中@orfeas-k的动态注销URL
*centraldashboard：允许 https://github.com/kubeflow/kubeflow/pull/6958 中 @elenzio9 的 kwa 的所有命名空间选项
* cdb(front): 通过 @orfeas-k 在 https://github.com/kubeflow/kubeflow/pull/6953 中获取左侧边栏链接
* 通过 @thesuperzapper 清理 https://github.com/kubeflow/kubeflow/pull/6736 中的默认 `spawner_ui_config.yaml`
* profile-controller: 支持 https://github.com/kubeflow/kubeflow/pull/7016 中@avintonOfficial 除 cluster.local 之外的自定义集群域
* 修复：在 https://github.com/kubeflow/kubeflow/pull/7026 中删除 @midhun1998 自定义图像名称中不需要的空格
*centraldashboard：允许 @elenzio9 在 https://github.com/kubeflow/kubeflow/pull/6995 中为 mwa 提供所有命名空间选项
* 由 @beliaev-maksim 在 https://github.com/kubeflow/kubeflow/pull/7050 更新requirements.txt
* cdb(front): 在https://github.com/kubeflow/kubeflow/pull/7030中通过@orfeas-k添加命名空间选择器
* cdb(front): 在 https://github.com/kubeflow/kubeflow/pull/7071 中引入@orfeas-k 的 404 未找到页面
*centraldashboard：来自环境变量的命名空间值。由 @deepk2u 在 https://github.com/kubeflow/kubeflow/pull/7064 中修复 #7063
* 通过添加构建版本修复 5007由 @lehrig 在 https://github.com/kubeflow/kubeflow/pull/7094 中进行多架构构建
* feat(centraldashboard)：在 https://github.com/kubeflow/kubeflow/pull/7116 中显示 @axel7083 来自 Prometheus 的指标
* @TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/6876 中重新介绍卷查看器
*（前端）：通过https://github.com/kubeflow/kubeflow/pull/7211中的@axel7083为主抽屉滚动条添加样式
* 功能（笔记本）：在https://github.com/kubeflow/kubeflow/pull/7198中通过@axel7083将创建者用户id添加到注释中
* feat(notebooks)：通过 @moorthy156 在 https://github.com/kubeflow/kubeflow/pull/7076 中将注释从笔记本 cr 传播到 pod
* [wa-theme-typography]：由 @elenzio9 在 https://github.com/kubeflow/kubeflow/pull/7062 中定义主题和版式
* 在 https://github.com/kubeflow/kubeflow/pull/7179 中添加 @TobiasGoerke 的 PVCViewer 前端集成
* 通过 https://github.com/kubeflow/kubeflow/pull/7336 中的 @DnPlas 在 Profiles Controller (#7310) 中使主体动态化
* Cherry-pick：PodDefaults 版本由 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7337 中推出 #7322 和 #7338
* Cherry-pick：ARM 构建 PR #7220 #7333 #7343 #7345 by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7342
* Cherry-pick：将所有 Web 应用程序的背景设为白色 (#7341) by @kimwnasptd in https://github.com/kubeflow/kubeflow/pull/7346
* 壮举：通过 @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7381 中使 pvcviewer istio 网关可配置（#7351）
* 壮举：更新笔记本服务器映像 + 支持 ARM64 (#7357) by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7382

## 修复

* vwa(front): 当https://github.com/kubeflow/kubeflow/pull/6899中有@orfeas-k对应的笔记本时，防止PVC被删除
* 修复注销按钮，以便在 https://github.com/kubeflow/kubeflow/pull/6609 中使用 @alembiewski 的最新版本的 `oidc-authservice`
* 修复https://github.com/kubeflow/kubeflow/pull/6188中@sunzhaochang删除ResourceQuota的bug
* cdb-angular(front): 在 https://github.com/kubeflow/kubeflow/pull/6895 中添加 @orfeas-k 的 UI 测试
* 通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/6929 中将审批者添加到前端
* web-apps(front): 通过 @elenzio9 修复 https://github.com/kubeflow/kubeflow/pull/6967 中的操作组件
* jwa（前面）：当从https://github.com/kubeflow/kubeflow/pull/6897中@elenzio9的快照恢复笔记本时，JWA显示了一个奇怪的长内存值
* 网络应用程序（正面）：修复 @elenzio9 在 https://github.com/kubeflow/kubeflow/pull/7017 中的拼写错误
* jwa(front): 通过 @elenzio9 在 https://github.com/kubeflow/kubeflow/pull/7029 中修复工作区体积表单的输入
* web-apps(返回): 通过 @elenzio9 在 https://github.com/kubeflow/kubeflow/pull/7019 中获取资源事件
* jwa：通过 @elenzio9 在 https://github.com/kubeflow/kubeflow/pull/6952 中改进 JWA 暴露错误的方式
* 通过 @juliusvonkohout 在 https://github.com/kubeflow/kubeflow/pull/7113 中更新 models.svg
* 配置文件控制器和 KFAM 允许 @johnhoman 在 https://github.com/kubeflow/kubeflow/pull/7032 中进行未经身份验证的集群内流量
*修复（api_default.go）：解决@Souheil-Yazji在https://github.com/kubeflow/kubeflow/pull/7200中的写入响应调用顺序
*修复：删除https://github.com/kubeflow/kubeflow/pull/7224中@TobiasGoerke构建的docker中多余的空间
* 修复：通过 @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7321 中设置默认 GPU 供应商列表
* 修复：https://github.com/kubeflow/kubeflow/pull/7339 中 @TobiasGoerke 的 KeyError 和行长度
* Cherry-pick：每10分钟仅加载spawner_ui_config.yaml一次。通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/7340 关闭 #7259
* 修复：https://github.com/kubeflow/kubeflow/pull/7352 中 @DnPlas 指向 ~kubeflow/styles/fonts.scss
* 修复：https://github.com/kubeflow/kubeflow/pull/7376 中 @TobiasGoerke 的本地 var 遮蔽导入
* 修复：通过 https://github.com/kubeflow/kubeflow/pull/7379 中的 @DnPlas 从环境变量中删除额外的 )
* 修复：https://github.com/kubeflow/kubeflow/pull/7400 中的 @DnPlas 将 jupyterlab 降级为 3.6.6 (#7398)

## 代码健康

* 构建（deps）：在https://github.com/kubeflow/kubeflow/pull/6951中由@dependabot在/components/centraldashboard-angular/frontend中碰撞可缓存请求和@kubernetes/client-node
* 更新 GH Action 脚本，用于通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/6921 中安装证书管理器
* 构建（deps）：将 json5 从 1.0.1 提升到 1.0.2，由 https://github.com/kubeflow/kubeflow/pull/6877 中的 @dependabot 在 /components/crud-web-apps/tensorboards/frontend 中实现
* 构建（deps）：将 json5 从 1.0.1 提升到 1.0.2，位于 https://github.com/kubeflow/kubeflow/pull/6878 中的 @dependabot 在 /components/crud-web-apps/common/frontend/kubeflow-common-lib 中
*centraldashboard：修复https://github.com/kubeflow/kubeflow/pull/6959中@orfeas-k的失败测试
*centraldashboard（make）：在https://github.com/kubeflow/kubeflow/pull/6960中使用@kimwnasptd的正确目录
*centraldashboard：不要在https://github.com/kubeflow/kubeflow/pull/6961中由@kimwnasptd构建的docker中运行测试
* @deepk2u 在 https://github.com/kubeflow/kubeflow/pull/6893 中进行的 GH Action for Immigration webhook 单元测试
*构建（deps）：将json5从1.0.1提升到1.0.2，在https://github.com/kubeflow/kubeflow/pull/6881中由@dependabot在/components/crud-web-apps/volumes/frontend中
* 构建（deps）：将 json5 从 1.0.1 提升到 1.0.2，由 https://github.com/kubeflow/kubeflow/pull/6880 中的 @dependabot 在 /components/crud-web-apps/jupyter/frontend 中实现
*构建（deps）：将json5从1.0.1提升到1.0.2，在https://github.com/kubeflow/kubeflow/pull/6883中由@dependabot在/组件/centraldashboard-angular/frontend中
* 构建（deps）：由 @dependabot 在 https://github.com/kubeflow/kubeflow/pull/6905 中将 /components/centraldashboard-angular/frontend 中的 ua-parser-js 从 0.7.32 提升到 0.7.33
* 构建（deps）：由 @dependabot 在 https://github.com/kubeflow/kubeflow/pull/6906 中将 /components/centraldashboard 中的 ua-parser-js 从 0.7.32 提升到 0.7.33
* 构建（deps）：由 @dependabot 在 https://github.com/kubeflow/kubeflow/pull/6907 中将 /components/crud-web-apps/tensorboards/frontend 中的 ua-parser-js 从 0.7.31 提升到 0.7.33
* 构建（deps）：由 @dependabot 在 https://github.com/kubeflow/kubeflow/pull/6908 中将 /components/crud-web-apps/volumes/frontend 中的 ua-parser-js 从 0.7.31 提升到 0.7.33
*构建（deps）：将github.com/prometheus/client_golang从1.11.0到1.11.1，由@dependabot在https://github.com/kubeflow/kubeflow/pull/6955中的/components/notebook-controller中
* 构建（deps）：将 github.com/prometheus/client_golang 从 1.11.0 中的 1.11.0 提升到 https://github.com/kubeflow/kubeflow/pull/6956 中的 /components/tensorboard-controller 中的 1.11.1
*构建（deps）：将github.com/prometheus/client_golang从0.9.2提升到1.11.1，由@dependabot在https://github.com/kubeflow/kubeflow/pull/6957中进行
* 由 @annajung 在 https://github.com/kubeflow/kubeflow/pull/6976 中记录笔记本的发布过程
* jwa：删除 https://github.com/kubeflow/kubeflow/pull/6985 中 @elenzio9 的所有 Rok 引用
* vwa：删除 https://github.com/kubeflow/kubeflow/pull/6984 中 @elenzio9 的所有 Rok 引用
* 构建（deps）：将 golang.org/x/sys 从 0.0.0-20211029165221-6e7872819dc8 中的 0.0.0-20211029165221-6e7872819dc8 提升到 https://github.com/kubeflow/kubeflow/pull/7008 中的 @dependabot 在 /components/admission-webhook 中的 0.1.0
* [配置文件控制器 IAM 插件] 通过 @ryansteakley 在 https://github.com/kubeflow/kubeflow/pull/6996 中更新 aws 插件的自述文件
* gh-actions(cdb)：修复 @orfeas-k 在 https://github.com/kubeflow/kubeflow/pull/7031 中的构建和发布操作
* web-apps：删除 https://github.com/kubeflow/kubeflow/pull/7020 中 @elenzio9 的所有 Rok 引用
* 测试：清理测试目录并通过 @kimwnasptd 在 https://github.com/kubeflow/kubeflow/pull/6535 中添加 gh actions 占位符文件夹
* 从https://github.com/kubeflow/kubeflow/pull/7044中@thesuperzapper的自述文件中删除危险链接
* 添加更改以在 https://github.com/kubeflow/kubeflow/pull/6992 中 @amitmukati-2604 在 pull_request 上构建 JWA
* 添加更改以在https://github.com/kubeflow/kubeflow/pull/7055中@amitmukati-2604的pull_request上构建admission-webhook
* 添加更改以在 VWA 的 pull_request 上构建多架构映像。作者：@amitmukati-2604 在 https://github.com/kubeflow/kubeflow/pull/7052
* 添加更改以在 https://github.com/kubeflow/kubeflow/pull/7054 中 @amitmukati-2604 在 pull_request 上构建 nb-controller
* @nagar-ajay 在 https://github.com/kubeflow/kubeflow/pull/7056 中培训操作员一致性测试驱动程序
* 修复 https://github.com/kubeflow/kubeflow/pull/7060 中 @kimwnasptd 的 Python linting
* @nagar-ajay 在 https://github.com/kubeflow/kubeflow/pull/7100 中设置 katib 一致性测试
* feat(conformance): 通过 @james-jwu 在 https://github.com/kubeflow/kubeflow/pull/7123 中创建 v1.7 一致性测试目录
* 为需要添加的项目创建安全团队文件夹和占位符文件。  作者：@akgraner 在 https://github.com/kubeflow/kubeflow/pull/7043
* 提案：https://github.com/kubeflow/kubeflow/pull/6941 中的 @apo-ger 在 Kubeflow 中引入 PVCViewer 控制器
* 更改 go 模块版本以修补 CVE。通过 @dlorenc 在 https://github.com/kubeflow/kubeflow/pull/7151
*构建（deps）：将socket.io-parser从4.2.1中的4.2.1提升到4.2.3，由@dependabot在https://github.com/kubeflow/kubeflow/pull/7145中
*构建（deps）：将socket.io-parser从4.2.1中的4.2.1提升到4.2.3，由@dependabot在https://github.com/kubeflow/kubeflow/pull/7143中
*构建（deps）：将socket.io-parser从4.2.1中的4.2.1提升到4.2.3，由@dependabot在https://github.com/kubeflow/kubeflow/pull/7144中进行
*centraldashboard：从 https://github.com/kubeflow/kubeflow/pull/7102 中的 @deepk2u 的centraldashboard 图像修复#7098 中删除了关键漏洞
* build(deps): 将 golang.org/x/net 从 0.0.0-20220722155237-a158d28d115b 中的 0.0.0-20220722155237-a158d28d115b 提升到 https://github.com/kubeflow/kubeflow/pull/7167 中的 @dependabot 在 /components/pvcviewer-controller 中的 0.7.0
* 禁用 PR 的多架构构建，并在 https://github.com/kubeflow/kubeflow/pull/7171 中的 @pranavpandit1 的 JWA、NB 控制器、AWH 和 TB 控制器的合并上启用它们
* 添加更改以在 pull_request 上构建配置文件控制器和准入 webhook 图像。作者：@amitmukati-2604 在 https://github.com/kubeflow/kubeflow/pull/7068
* 在 https://github.com/kubeflow/kubeflow/pull/7175 中添加 @TobiasGoerke 的 GH 动作集成测试 pvcviewer 控制器
* 构建（deps-dev）：在 /components/crud-web-apps/volumes/frontend 中由 @dependabot 在 https://github.com/kubeflow/kubeflow/pull/7215 中将自动换行从 1.2.3 更改为 1.2.4
* 修复：@feiyudev 在 https://github.com/kubeflow/kubeflow/pull/7177 中弃用“go get”安装模块
* 禁用 PR 的多架构构建，并在 https://github.com/kubeflow/kubeflow/pull/7183 中的 @pranavpandit1 的 Profile Controller、Profile+KFAM、VWA 和 TWA 的合并上启用它们
* 在 https://github.com/kubeflow/kubeflow/pull/7174 中添加 @TobiasGoerke 的 GH 动作单元测试 pvcviewer 控制器
* 在 https://github.com/kubeflow/kubeflow/pull/7173 中添加@TobiasGoerke 构建 pvcviewer 控制器的 GH 动作
* 将 cert-manager 安装添加到 @TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/7219 中的 pvcviewer 测试中
* 由 @TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/7178 中更新 PVCViewer 清单
* 解决由于最新的 gevent 版本而生成的构建异常。通过 @pranavpandit1 在 https://github.com/kubeflow/kubeflow/pull/7231
* @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7270 中将 194a725 挑选到 v1.8-branch #7263
* [kubeflow 1.8] 发布：将容器镜像碰撞到标记 1.8.0-rc.0 并在 https://github.com/kubeflow/kubeflow/pull/7234 中碰撞 @DnPlas 的发布版本
* @TobiasGoerke 在 https://github.com/kubeflow/kubeflow/pull/7237 中将 #7230 Cherry-Pick 放入 v1.8-branch
* ci：等待 @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7289 中部署而不是 pod 来执行测试
* @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7286 中发布 v1.8.0-rc.1
* ci: 凹凸 golang 版本 1.17->1.20 by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7348
* @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7347 中发布 v1.8.0-rc.2
* @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7380 中发布 v1.8.0-rc.3
* @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7383 中发布 v1.8.0-rc.4
* ci：修复 https://github.com/kubeflow/kubeflow/pull/7387 中 @DnPlas 的笔记本服务器映像的版本标记 (#7386)
* @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7388 中发布 v1.8.0-rc.5
* @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7399 中发布 v1.8.0-rc.6
* ci：防止意外触发发布构建 (#7401) by @DnPlas in https://github.com/kubeflow/kubeflow/pull/7403
* @DnPlas 在 https://github.com/kubeflow/kubeflow/pull/7404 中发布 v1.8.0

## 新贡献者
* @avintonOfficial 在 https://github.com/kubeflow/kubeflow/pull/7016 中做出了第一个贡献
* @beliaev-maksim 在 https://github.com/kubeflow/kubeflow/pull/7050 中做出了第一个贡献
* @nagar-ajay 在 https://github.com/kubeflow/kubeflow/pull/7056 中做出了第一个贡献
* @akgraner 在 https://github.com/kubeflow/kubeflow/pull/7043 中做出了第一个贡献
* @dlorenc 在 https://github.com/kubeflow/kubeflow/pull/7151 中做出了第一个贡献
* @lehrig 在 https://github.com/kubeflow/kubeflow/pull/7094 中做出了第一个贡献
* @axel7083 在 https://github.com/kubeflow/kubeflow/pull/7116 中做出了第一个贡献
* @feiyudev 在 https://github.com/kubeflow/kubeflow/pull/7177 中做出了第一个贡献
* @johnhoman 在 https://github.com/kubeflow/kubeflow/pull/7032 中做出了第一个贡献
* @Souheil-Yazji 在 https://github.com/kubeflow/kubeflow/pull/7200 中做出了第一个贡献
* @moorthy156 在 https://github.com/kubeflow/kubeflow/pull/7076 中做出了第一个贡献

**完整 Changelog**：https://github.com/kubeflow/kubeflow/compare/v1.7.0...v1.8.0

---

> 📦 仓库：[kubeflow/kubeflow](https://github.com/kubeflow/kubeflow) · 🏷️ 版本：`v1.8.0` · 📅 发布：2023-11-01 · [查看英文原版 Release](https://github.com/kubeflow/kubeflow/releases/tag/v1.8.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
