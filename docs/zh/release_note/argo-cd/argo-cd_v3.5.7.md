---
title: "argo-cd v3.5.7"
project: "argo-cd"
repo: "argoproj/argo-cd"
tag: "v3.5.7"
version: "v3.5.7"
published: "2026-11-02"
type: "patch"
lang: "zh"
---

# argo-cd v3.5.7

## 快速入门

### 非 HA：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.5.7/manifests/install.yaml
```

### 哈：

```shell
kubectl create namespace argocd
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.5.7/manifests/ha/install.yaml
```

## 发布签名和出处

所有 Argo CD 容器映像均由 cosign 签名。  为符合 SLSA 3 级规范的容器映像和 CLI 二进制文件生成来源。有关如何验证的信息，请参阅[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## Release Notes 博客文章
有关此版本中的主要更改和改进的详细信息，请查看[官方博客文章](https://blog.argoproj.io/argo-cd-v3-0-release-candidate-a0b933f4e58f)

## 升级

如果从不同的次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) 文档。

## Changelog
### 错误修复
* 7490bea30d4de6711c2c66e6c5272360e344f3c4: 修复(actions): 列出 Rollout 没有状态时的 Rollout 操作 (#30291) (cherry-pick #30331 for 3.5) (#30651) (@argo-cd-cherry-pick-bot[bot])
* 7111dbd87b5f7f24da679249aecf36bdc6332c93：修复（app）：确保仅针对文本输出格式打印删除消息（3.5 的cherry-pick＃30600）（＃30616）（@argo-cd-cherry-pick-bot [bot]）
* 0b3553c6059d1d703697972002da823da2739da2：修复（appset）：不要将保留的集群注释公开为参数（cherry-pick＃30448 for 3.5）（＃30482）（@argo-cd-cherry-pick-bot [bot]）
* 21aea4e25c16756e794ee661657624b4ba3a0700：修复（appset）：刷新使用项目路径配置的GitLab拉取请求生成器（＃13766）（3.5的cherry-pick＃30578）（＃30620）（@argo-cd-cherry-pick-bot [bot]）
* 4f2aec51c3c3dcb231b65b71415e1248cce79e5b：修复（cli）：为gRPC-web连接尊重HTTP_PROXY/HTTPS_PROXY/NO_PROXY（对于3.5优先选择#29642）（#30497） (@argo-cd-cherry-pick-bot[机器人])
* 847e0b5765545a5b2c9125b715eb92049714a34d：修复（cli）：刷新过期的身份验证令牌时发送--header值（＃30061）（＃30546）（@nitishfy）
* 40bd9f32881b49ed724d3d5c6cc0bcbee17d3b8f: 修复(控制器): 允许终止被同步窗口阻止的操作 (#26395) (cherry-pick #30267 for 3.5) (#30503) (@argo-cd-cherry-pick-bot[bot])
* e9ef25a83a6a8f1637615e2133bf28e60b011e33：修复（控制器）：当应用程序移回控制器时重写资源树（3.5 的樱桃挑选＃30313）（＃30430）（@shimagrawal）
* dee004d2b8fa8f390be2be81d9e5af67afb6b288：修复（exec）：当命令超时而不等待时不要泄漏goroutine（cherry-pick＃30394 for 3.5）（＃30436）（@argo-cd-cherry-pick-bot [bot]）
* 8a164d3db5c80b00e1204d9f84b3789e9c8dbc0d: 修复(git): 当取消 git 命令时在 SIGKILL 之前发送 SIGTERM (cherry-pick #30393 for 3.5) (#30407) (@argo-cd-cherry-pick-bot[bot])
* f9abfd4b0a912ce6d43bb98e043afc6c57d46ead：修复（健康）：处理缺少安装或健康状况的 Crossplane 提供程序（＃23363）（3.5 的cherry-pick＃30429）（＃30627）（@argo-cd-cherry-pick-bot [bot]）
* dcfbe298e4a7e9442f2293f496a68c6a4ab6f25d：修复（健康）：将尚未建立的 CRD 报告为“进展”（#26346）（3.5 的cherry-pick #30441）（#30575）（@argo-cd-cherry-pick-bot[bot]）
* f67a23ec01cb1fd2d87c9355686a62791792b951：修复（健康）：将非活动的 Crossplane ManagedResourceDefinitions 报告为健康（＃25270）（3.5 的cherry-pick＃30404）（＃30421）（@argo-cd-cherry-pick-bot [bot]）
* 9f2f72eee47c3deca6d048dc1a08ff6b03a242d7：修复(health)：对customize.core.cnrm.cloud.google.com资源使用status.healthy (#30164) (cherry-pick #30165 for 3.5) (#30655) (@argo-cd-cherry-pick-bot[bot])
* 2c9d7dba162b32d36053904738c1677160751077：修复（服务器）：允许在没有身份验证的情况下进行 gRPC 健康检查（＃26193）（3.5 的樱桃选择＃30474）（＃30568）（@antcybersec）
* 43b4eb99db259171ec24b8d099021c8eca87e39b：修复（服务器）：清单生成中断时保留 gRPC 代码（3.5 的cherry-pick＃30425）（＃30552）（@argo-cd-cherry-pick-bot [bot]）
* 6bbaccfe58e2eb8362e5d8602376b25864ee5e91：修复（服务器）：防止client断开连接时PodLogs goroutine泄漏（3.5的cherry-pick＃30450）（＃30460）（@argo-cd-cherry-pick-bot [bot]）
* e0b841eed327c8f89744e8b7e6f1547f6ec2c81e：修复（同步）：当协调缓存中缺少活动对象时，删除挂钩终结器（3.5 的樱桃挑选＃29469）（＃30660）（@ppapapetrou76）
* 9ca2f269eaf2c61b4bf5398f8109f739aa811688：修复（ui）：当所需状态为空时不要崩溃资源面板（＃30528）（3.5的cherry-pick＃30532）（＃30540）（@argo-cd-cherry-pick-bot [bot]）
* 4474f55e83b2283710031efdedee3433573c1519：修复（ui）：在黑暗模式下聚焦时保持状态面板链接可读（＃29288）（cherry-pick＃30493 for 3.5）（＃30543）（@argo-cd-cherry-pick-bot [bot]）
* 8bdacc6b16ff52c5223c8536ccd3d8a1cef09b72：修复（ui）：改进存储库设置中写入凭据的验证和处理（3.5 的樱桃选择＃30489）（＃30594）（@adityaraj178）
* a6eaca63debdcf447756bd75cbdf2770fab3558d：修复：在没有 SecretName 的情况下启用 tls 时的入口链接方案 (https)（cherry-pick #28888 for 3.5） (#30508) (@argo-cd-cherry-pick-bot[bot])
* cc47a8e25356699905a2a2485a72ae858ad9cf02：修复：接受 IP 和端口作为 OCI Helm 存储库 URL (#21374) (cherry-pick #30233 for 3.5) (#30515) (@argo-cd-cherry-pick-bot[bot])
* a304e87eeb3f48a443d87a75323f4aaa1de29483：修复：带有短版本的徽章获得正确的宽度（＃29335）（3.5的cherry-pick＃29336）（＃30580）（@argo-cd-cherry-pick-bot [bot]）
* c4a620f771e5285a524096165b67e7440521c827：修复：响应忽略过期时遵守 UserInfo 缓存限制（3.5 的cherry-pick #30462）（＃30610）（@argo-cd-cherry-pick-bot [bot]）
* 5de7fd9beec1aa897ea8690ddcf2c90784fac771：修复：在同步完成事件中包含多源修订（3.5 的cherry-pick＃30446）（＃30471）（@gdsoumya）
* ae1da1bc5a8cd00a8b0f76d501844106a45f25fe：修复：修改 GPG 正则表达式以支持其他关键算法（cherry-pick #27638 for 3.5）（＃30496）（@argo-cd-cherry-pick-bot [bot]）
* 8685022523530a5d913958c1d9c501e90fb1440f：修复：防止“/”源命名空间条目的 glob.MatchStringInList 中发生恐慌（3.5 的cherry-pick＃30572）（＃30615）（@argo-cd-cherry-pick-bot [bot]）
* 4cec051deec742601616782ba384e0c732b66c3d：修复：从 SSD 中删除一代（#30398）（3.5 的cherry-pick #30402）（#30442）（@argo-cd-cherry-pick-bot[bot]）
* 4b0c6643b1ed99c527a320cf6063832ad906cfdc：修复：禁用DEX_EXPAND_ENV时跳过美元escaping（3.5的cherry-pick＃29181）（＃30649）（@argo-cd-cherry-pick-bot [bot]）
* f277dd0c195109a1de00441142188da4c72627d5：修复：在报告运行状况之前等待当前的 SealedSecret 生成（3.5 的cherry-pick＃29867）（＃30355）（@argo-cd-cherry-pick-bot [bot]）
### 文档
* 6af872f5abd3387ec51161bec7920276c4399a87：文档：添加将 Argo CD 作为 Go 库导入的常见问题解答（3.5 的cherry-pick #30555）（＃30561）（@argo-cd-cherry-pick-bot [bot]）
* ae0f73a1658912f7f53219684e597ad26a91a9be：文档：修复HA指南中不存在的“argocd repo edit”命令（3.5的cherry-pick＃30694）（＃30708）（@argo-cd-cherry-pick-bot [bot]）
### 依赖更新
* a97897bd379c0443a9830a4e77a5c1556c08fbba：杂务（deps）：碰撞松弛转到v0.23.1和golang.org/x/net到v0.53.0（3.5的樱桃挑选＃28377）（＃30696） (@argo-cd-cherry-pick-bot[机器人])
### 其他工作
* 6d732962f61a99c2a0f221fd26b9aac7c83bcf18：琐事：在release-3.5分支上将版本提升到3.5.7（＃30720）（@github-actions [bot]）
* f68ec0a9e73c0e02b8b5f29280b6973aac95c539：修复（gitops-engine）：空uid回填上的竞争条件（3.5的cherry-pick＃28343）（＃30523）（@argo-cd-cherry-pick-bot [bot]）
* 7d89f90b67e33019c71092f42b144195642ffe27：修复（util / grpc）：不要删除Kubernetes类型消息的请求日志条目（对于3.5选择＃29872）（＃30521） (@argo-cd-cherry-pick-bot[机器人])
* c67d1e5ef11863567e2ee4a58bfe916f7be3b8a5: test(cmpserver): 修复 RunCommand 超时测试中不稳定的计时断言 (#30377) (cherry-pick #30378 for 3.5) (#30418) (@argo-cd-cherry-pick-bot[bot])
* 9644b05434b354a58b990b5abc727eab5dd985f2: test(controller): 在交换缓存 client 之前等待添加处理程序 (#30384) (cherry-pick #30400 for 3.5) (#30519) (@crenshaw-dev)
* cad895b703f296069cf2e5cef659fe487a46eabf: test(git): 针对本地存储库运行 TestLsRemote (#30386) (cherry-pick #30399 for 3.5) (#30412) (@argo-cd-cherry-pick-bot[bot])
* 0e824b28afde9a65193bf3813f5d5bc485f2faea：测试（通知控制器）：修复片状TestInitTimeout（＃30401）（3.5的cherry-pick＃30406）（＃30416）（@argo-cd-cherry-pick-bot [bot]）

**完整 Changelog**：https://github.com/argoproj/argo-cd/compare/v3.5.6...v3.5.7

<a href="https://argoproj.github.io/cd/"><img src="https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png" 宽度="25%" ></a>

---

> 📦 仓库：[argoproj/argo-cd](https://github.com/argoproj/argo-cd) · 🏷️ 版本：`v3.5.7` · 📅 发布：2026-11-02 · [查看英文原版 Release](https://github.com/argoproj/argo-cd/releases/tag/v3.5.7)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
