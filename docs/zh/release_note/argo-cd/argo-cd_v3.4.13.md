---
title: "argo-cd v3.4.13"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.4.13"
version: "v3.4.13"
published: "2026-11-02"
type: "patch"
lang: "zh"
---

# argo-cd v3.4.13

## 快速入门

### 非 HA：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.4.13/manifests/install.yaml
```

### 哈：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.4.13/manifests/ha/install.yaml
```

## 发布签名和出处

所有 Argo CD 容器映像均由 cosign 签名。  A Provenance is generated for container images and CLI binaries which meet the SLSA Level 3 specifications.有关如何验证的信息，请参阅[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## Release Notes 博客文章
有关此版本中的主要更改和改进的详细信息，请查看[官方博客文章](https://blog.argoproj.io/argo-cd-v3-0-release-candidate-a0b933f4e58f)

## 升级

如果从不同的次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) 文档。

## Changelog
### 错误修复
* 42e23cb0447d6ce5b697ef7a2f5e9f534b10adab: 修复(actions): 列出 Rollout 没有状态时的 Rollout 操作 (#30291) (cherry-pick #30331 for 3.4) (#30653) (@argo-cd-cherry-pick-bot[bot])
* 9b48378d633afc4fcb0e1dc3797f34dbc5ff27b9：修复（app）：确保仅针对文本输出格式打印删除消息（3.4 的cherry-pick＃30600）（＃30617）（@argo-cd-cherry-pick-bot [bot]）
* 19c7221298ae47ea792c70c5ac7860d431a8155b：修复（appset）：不要将保留的集群注释公开为参数（3.4 的cherry-pick＃30448）（＃30479）（@argo-cd-cherry-pick-bot [bot]）
* 46a318feda1b74c57f6fd397d25ef6f489218acd：修复（appset）：刷新使用项目路径配置的GitLab拉取请求生成器（#13766）（3.4的cherry-pick#30578）（#30621）（@argo-cd-cherry-pick-bot[bot]）
* 1085b625752f58231ae97aced6f3358f6b04d34e：修复（cli）：为gRPC-web连接尊重HTTP_PROXY/HTTPS_PROXY/NO_PROXY（对于3.4优先选择#29642）（#30499） (@argo-cd-cherry-pick-bot[机器人])
* 53c49c344cb0fb12e5cc6eb5b70b885997b3e55a: fix(cli): send --header values when refreshing an expired auth token (#30547) (@nitishfy)
* 97854e734175d6d87bc8ec49f1d0f911aa2a30f5: 修复(控制器): 允许终止被同步窗口阻止的操作 (#26395) (cherry-pick #30267 for 3.4) (#30502) (@argo-cd-cherry-pick-bot[bot])
* 39d0bc10609dec4e89bdfea307319ee10ef58d07：修复（exec）：当命令超时而不等待时不要泄漏goroutine（cherry-pick＃30394 for 3.4）（＃30435）（@argo-cd-cherry-pick-bot [bot]）
* 7c167f72aaebe7de9c9ca783e69cde4c5e5e981e: 修复(git): 当取消 git 命令时在 SIGKILL 之前发送 SIGTERM (cherry-pick #30393 for 3.4) (#30408) (@argo-cd-cherry-pick-bot[bot])
* ab4858698569c6374fbef03188598630dc52bd87：修复（健康）：处理缺少安装或健康状况的跨平面提供程序（＃23363）（3.4的cherry-pick＃30429）（＃30625）（@argo-cd-cherry-pick-bot [bot]）
* 72ac2bc21ace9f1e5ff7b2c2f626ebf0ef02932d：修复（健康）：将不活动的 Crossplane ManagedResourceDefinitions 报告为健康（＃25270）（3.4 的cherry-pick＃30404）（＃30424）（@argo-cd-cherry-pick-bot [bot]）
* f5ede5b9e2c23433e4e67761f135a5aec52a23b8：修复(health)：对customize.core.cnrm.cloud.google.com资源使用status.healthy (#30164) (cherry-pick #30165 for 3.4) (#30654) (@argo-cd-cherry-pick-bot[bot])
* de71193ca852126f0087f17ef02b0dab4f93da04：修复（服务器）：允许在没有身份验证的情况下进行 gRPC 健康检查（＃26193）（对于 3.4 最好选择＃30474）（＃30569）（@antcybersec）
* e8472fa093b33dfc58296ba972bcb13db52bbd4a：修复（同步）：当协调缓存中缺少活动对象时，删除挂钩终结器（3.4 的cherry-pick＃29469）（＃30659）（@argo-cd-cherry-pick-bot [bot]）
* 4bfc7be6bb5da26538439a9c97462c31d8960aff：修复（ui）：在黑暗模式下聚焦时保持状态面板链接可读（＃29288）（3.4的cherry-pick＃30493）（＃30541）（@argo-cd-cherry-pick-bot [bot]）
* e27c9c77a12ea2fc1da814c644a4c640e1f0e5db：修复（ui）：改进存储库设置中写入凭据的验证和处理（3.4 的樱桃选择＃30489）（＃30595）（@adityaraj178）
* 7aa6bdfbe69492d7b0cf638b8ca68f33b780c94f：修复：在没有 SecretName 的情况下启用 tls 时的入口链接方案 (https)（cherry-pick #28888 for 3.4） (#30507) (@argo-cd-cherry-pick-bot[bot])
* e0370cf8fbabf9e26c812f248ad652c033d469c4：修复：接受 IP 和端口作为 OCI Helm 存储库 URL (#21374) (cherry-pick #30233 for 3.4) (#30516) (@argo-cd-cherry-pick-bot[bot])
* 69f908f48ca4f54cfa4ca9856944b8f332e663b5：修复：具有短版本的徽章获得正确的宽度（＃29335）（3.4的cherry-pick＃29336）（＃30581）（@argo-cd-cherry-pick-bot [bot]）
* 0023636b039fd08bb5ae9e8784767c4e7c514081：修复：修复写入存储库（信用）端点的转义 URL 路由（3.4 的cherry-pick＃29940）（＃29955）（@argo-cd-cherry-pick-bot [bot]）
* 6929086472b2c7afa0e5423b15e5c6c895f643f6：修复：响应忽略过期时遵守 UserInfo 缓存限制（3.4 的樱桃选择＃30462）（＃30624）（@adityaraj178）
* 40f9a9bb66344cdc8319f470bbe052e5f74aeaba：修复：在同步完成事件中包含多源修订（3.4 的樱桃挑选＃30446）（＃30470）（@gdsoumya）
* 2145508808043f7f65c42c01ce25235d6c437df8：修复：防止 glob.MatchStringInList 中“/”sourceNamespaces 条目出现恐慌（cherry-pick #30572 for 3.4）（#30614）（@argo-cd-cherry-pick-bot[bot]）
* 9b3eb49fb276eeb62716c548ece2c3cb00186ded：修复：禁用DEX_EXPAND_ENV时跳过美元escaping（3.4的cherry-pick＃29181）（＃30646）（@argo-cd-cherry-pick-bot [bot]）
* 3ce8c62d31132b54c70e1cdabfc235b444e34b3f：修复：在报告运行状况之前等待当前的 SealedSecret 生成（3.4 的cherry-pick #29867）（＃30353）（@argo-cd-cherry-pick-bot [bot]）
### 其他工作
* 83ad9cd88fa03ec152b267b371e03ad670c4dd81：杂务：在release-3.4分支上将版本提升到3.4.13（＃30721）（@github-actions [bot]）
* 4dac47eb4c0463e2aeec71ad788e4abba2faf362：修复（gitops-engine）：空uid回填上的竞争条件（3.4的cherry-pick＃28343）（＃30526）（@argo-cd-cherry-pick-bot [bot]）
* fc097bdd9f24dfe282675f26718a234322770ca1: test(cmpserver): 修复 RunCommand 超时测试中不稳定的计时断言 (#30377) (cherry-pick #30378 for 3.4) (#30417) (@argo-cd-cherry-pick-bot[bot])
* c49dd280a98491c14b8c286fc676f549b110eed6: test(notification-controller): 修复不稳定的 TestInitTimeout (#30401) (cherry-pick #30406 for 3.4) (#30415) (@argo-cd-cherry-pick-bot[bot])

**完整 Changelog**：https://github.com/argoproj/argo-cd/compare/v3.4.12...v3.4.13

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" 宽度="25%" ></a>

---

> 📦 仓库：[argoproj/argo-cd](https://github.com/argoproj/argo-cd) · 🏷️ 版本：`v3.4.13` · 📅 发布：2026-11-02 · [查看英文原版 Release](https://github.com/argoproj/argo-cd/releases/tag/v3.4.13)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
