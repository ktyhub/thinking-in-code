---
title: "argo-cd v3.3.19"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.3.19"
version: "v3.3.19"
published: "2026-11-02"
type: "patch"
lang: "zh"
---

# argo-cd v3.3.19

> [!重要]
> **寿命终止通知**
> 
> 这是 v3.3 发行系列的最终版本。截至 2026 年 11 月 3 日，该版本已终止生命周期，将不再接收错误修复或安全更新。
> 
> **需要采取行动**：请升级到[支持的版本](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/)（v3.4.13、v3.5.7 或 v3.6.0）。

## 快速入门

### 非 HA：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.19/manifests/install.yaml
```

### 哈：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.3.19/manifests/ha/install.yaml
```

## 发布签名和出处

所有 Argo CD 容器映像均由 cosign 签名。  为符合 SLSA 3 级规范的容器映像和 CLI 二进制文件生成来源。有关如何验证的信息，请参阅[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## Release Notes 博客文章
有关此版本中的主要更改和改进的详细信息，请查看[官方博客文章](https://blog.argoproj.io/argo-cd-v3-0-release-candidate-a0b933f4e58f)

## 升级

如果从不同的次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) 文档。

## Changelog
### 错误修复
* f3920718a235474abce92643a39009206bcbdee0: 修复(actions): 列出 Rollout 没有状态时的 Rollout 操作 (#30291) (cherry-pick #30331 for 3.3) (#30650) (@argo-cd-cherry-pick-bot[bot])
* ef201d30d0ab0ea39e73ed6b256ef33341734066：修复（appset）：不要将保留的集群注释公开为参数（cherry-pick＃30448 for 3.3）（＃30480）（@argo-cd-cherry-pick-bot [bot]）
* 34c59a8618fcf449fee6c2c700374497427eac73：修复（appset）：刷新使用项目路径配置的GitLab拉取请求生成器（＃13766）（3.3的cherry-pick＃30578）（＃30622）（@argo-cd-cherry-pick-bot [bot]）
* 42bdff47a836f5d23d3a210a6321dbfb7860c757：修复（cli）：为gRPC-web连接尊重HTTP_PROXY/HTTPS_PROXY/NO_PROXY（对于3.3优先选择#29642）（#30500） (@argo-cd-cherry-pick-bot[机器人])
* 67ab019a3bc17290a400d33e4a48f4fb182b1d86: 修复(控制器): 允许终止被同步窗口阻止的操作 (#26395) (cherry-pick #30267 for 3.3) (#30504) (@argo-cd-cherry-pick-bot[bot])
* 36c346e4f55e79bceaf1de77b136000e9229de2：修复（exec）：当命令超时而不等待时不要泄漏goroutine（cherry-pick＃30394 for 3.3）（＃30434）（@argo-cd-cherry-pick-bot [bot]）
* e34397f031f57caf8618a2e301883dacad03fe14：修复（git）：当取消git命令时，在SIGKILL之前发送SIGTERM（3.3的cherry-pick＃30393）（＃30409）（@argo-cd-cherry-pick-bot [bot]）
* 569750a28487f2ecea265fdec0681c9610687fd0：修复（健康）：处理缺少安装或健康状况的跨平面提供程序（＃23363）（3.3的cherry-pick＃30429）（＃30626）（@argo-cd-cherry-pick-bot [bot]）
* 6ba0b1b902a08899d2301f51c7dc6bf7018392f9：修复（健康）：将非活动的 Crossplane ManagedResourceDefinitions 报告为健康（＃25270）（3.3 的cherry-pick＃30404）（＃30422）（@argo-cd-cherry-pick-bot [bot]）
* 6cc8e2b686921298bf28b09efc74e86254c9b0b1：修复（health）：对customize.core.cnrm.cloud.google.com资源使用status.healthy（#30164）（3.3的cherry-pick#30165）（#30656） (@argo-cd-cherry-pick-bot[机器人])
* 75e5d842048d8eb69c275fcbf5074c118699b388：修复（服务器）：允许在没有身份验证的情况下进行 gRPC 健康检查（＃26193）（3.3 的樱桃选择＃30474）（＃30570）（@antcybersec）
* eba2d77b69ad682569b449b0735b2d872b4aad18：修复（ui）：改进存储库设置中写入凭据的验证和处理（3.3 的樱桃选择＃30489）（＃30596）（@adityaraj178）
* f985ac90bd667cfeff96020b4479f05efa5b0b46：修复：在没有 SecretName 的情况下启用 tls 时的入口链接方案 (https)（cherry-pick #28888 for 3.3） (#30510) (@argo-cd-cherry-pick-bot[bot])
* e388575711448f104b8a02d560e4ffdd0cbea7a0：修复：接受 IP 和端口作为 OCI Helm 存储库 URL (#21374) (cherry-pick #30233 for 3.3) (#30514) (@argo-cd-cherry-pick-bot[bot])
* f44be7e77366df5b40c614e3ae2b14876b5512d9：修复：带有短版本的徽章获得正确的宽度（＃29335）（3.3的cherry-pick＃29336）（＃30582）（@argo-cd-cherry-pick-bot [bot]）
* 35bf00a57b47c093ab4398ffe51e57733972e426：修复：响应忽略过期时遵守 UserInfo 缓存限制（3.3 的樱桃选择＃30462）（＃30619）（@adityaraj178）
* 17ed834ad948dc8f03315a7c1c7f85c6e6e2bb40：修复：防止 glob.MatchStringInList 中“/”源命名空间条目出现恐慌（3.3 的cherry-pick #30572）（#30612）（@argo-cd-cherry-pick-bot[bot]）
* feb076b1f2042d346e507af845dc70830fb542c6：修复：禁用 DEX_EXPAND_ENV 时跳过美元 escaping （3.3 的cherry-pick #29181）（＃30647）（@argo-cd-cherry-pick-bot [bot]）
* 4145a4c5b9ea01b1444e550a73035d24023c6584：修复：在报告运行状况之前等待当前的 SealedSecret 生成（3.3 的cherry-pick #29867）（＃30356）（@argo-cd-cherry-pick-bot [bot]）
### 其他工作
* 554529f5d80cfeb2307ea22ea1d0bad5a17fdfe6: chore: bump version to 3.3.19 on release-3.3 branch (#30722) (@github-actions[bot])
* df91d320ad013e685f1bcc24d746e52dd0f89d56：修复（gitops-engine）：空uid回填上的竞争条件（3.3的cherry-pick＃28343）（＃30525）（@argo-cd-cherry-pick-bot [bot]）
* 4f209aaaf5c4949cda60cb9b87541cc03d69d99a: test(cmpserver): 修复 RunCommand 超时测试中不稳定的计时断言 (#30377) (cherry-pick #30378 for 3.3) (#30420) (@argo-cd-cherry-pick-bot[bot])
* 303bb45761d5dca1b27d867fc06c84b1eda88809：测试（通知控制器）：修复片状TestInitTimeout（＃30401）（3.3的cherry-pick＃30406）（＃30413）（@argo-cd-cherry-pick-bot [bot]）

**完整 Changelog**：https://github.com/argoproj/argo-cd/compare/v3.3.18...v3.3.19

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" width="25%" ></a>

---

> 📦 仓库：[argoproj/argo-cd](https://github.com/argoproj/argo-cd) · 🏷️ 版本：`v3.3.19` · 📅 发布：2026-11-02 · [查看英文原版 Release](https://github.com/argoproj/argo-cd/releases/tag/v3.3.19)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
