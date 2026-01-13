# helm Helm v4.0.1
### 为什么要使用Helm

想象一下这个场景：你是一名技艺高超的船长，志在征服云原生这片汪洋。你的舰船（Kubernetes集群）性能卓越，但每一次出航（部署应用），你都需要手动指挥上百名水手（YAML文件），精确安排每一个缆桩（Pod）、每一张风帆（Service）、每一座货舱（ConfigMap）。一次部署就是一场战役，稍有不慎，满盘皆输。而当你需要升级舰炮（应用版本）或改变阵型（环境配置）时，整个过程又得重来一遍，繁琐、易错、令人精疲力竭。

这就是现代应用交付的终极矛盾：我们以微服务架构获得了前所未有的敏捷性与灵活性，却又在部署的泥沼中寸步难行。Helm，正是为了解决这一矛盾而生。它不是一个简单的工具，而是**Kubernetes的领航员与应用包管理器**。它让你从无穷无尽的YAML文件迷宫中解脱出来，将复杂的应用部署化繁为简，一键启航。使用Helm，意味着你选择了秩序而非混乱，选择了效率而非重复，选择将宝贵的创造力聚焦于构建伟大的应用本身，而非深陷部署的琐碎细节。

### Helm是什么

Helm是Kubernetes的包管理器。你可以将其类比为Linux世界中的`apt-get`或`yum`，或者Node.js中的`npm`。它的核心价值在于：**用一套可重复、可配置、可共享的模板（称为Chart），来定义、安装和升级哪怕是最复杂的Kubernetes应用。**

简单来说，Helm让你能够像安装一个软件包一样，去部署一个由多个Kubernetes资源（如Deployment、Service等）组成的完整应用。

### 入门示例

**真实场景：** 你的团队需要在开发、测试、生产三个不同的Kubernetes环境中部署一个WordPress网站。这个网站不仅包含WordPress本身（一个Deployment和一个Service），还需要一个MySQL数据库（另一个Deployment、Service以及存储Secret），并且不同环境的数据库密码、域名、副本数都需要不同。

**没有Helm时：** 你需要维护多套相似的YAML文件，手动修改其中的镜像版本、环境变量、配置值，极易出错。

**使用Helm时：**

1.  **寻找Chart：** 你可以直接从Artifact Hub（Helm的官方仓库）找到官方维护的WordPress Chart。
    ```bash
    helm search hub wordpress
    ```

2.  **安装Chart：** 只需一行命令，即可安装一个配置好的WordPress。
    ```bash
    # 添加仓库并安装
    helm repo add bitnami https://charts.bitnami.com/bitnami
    helm install my-wordpress bitnami/wordpress
    ```
    Helm会自动创建所有必要的Kubernetes资源。

3.  **自定义配置：** 通过一个独立的`values.yaml`文件，你可以轻松覆盖默认配置。
    ```yaml
    # values-dev.yaml
    wordpressUsername: "admin"
    wordpressPassword: "devPassword123"
    replicaCount: 1
    service:
      type: NodePort
    ```
    安装时指定此文件：
    ```bash
    helm install my-wordpress-dev bitnami/wordpress -f values-dev.yaml
    ```
    对于测试和生产环境，你只需创建`values-test.yaml`和`values-prod.yaml`，即可实现环境的差异化部署，而Chart模板本身无需改动。

这个示例清晰地展示了Helm如何将应用“打包”，并通过“值文件”实现配置与模板的分离，极大地提升了部署的效率和一致性。

### Helm v4.0.1版本更新了什么

Helm v4.0.1是一个修补程序版本，主要聚焦于问题修复和稳定性提升。本次更新核心包括：改进了对Kubernetes 1.30版本的兼容性支持；修复了在使用`helm upgrade`时特定资源创建逻辑的问题，引入了更稳健的服务器端应用策略；同时优化了内部客户端的日志记录，并修正了文档与构建脚本中的一些细节错误。建议用户升级以获得最佳体验。

### 更新日志

Helm v4.0.1 是一个补丁版本。我们鼓励用户升级以获得最佳体验。

社区在持续壮大，我们期待你的加入！

*   加入 [Kubernetes Slack](https://kubernetes.slack.com) 的讨论：
    *   可以提问或仅仅参与交流。
    *   用于讨论 PR、代码和错误报告。
*   参加每周四太平洋时间上午 9:30 的公共开发者电话会议，通过 [Zoom](https://zoom.us/j/696660622) 接入。
*   测试、调试和贡献 Chart，请访问：[ArtifactHub/packages](https://artifacthub.io/packages/search?kind=0)。

## 安装与升级

下载 Helm v4.0.1。常见平台二进制文件如下：

*   [MacOS amd64](https://get.helm.sh/helm-v4.0.1-darwin-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.0.1-darwin-amd64.tar.gz.sha256sum) / a8d1ca46c3ff5484b2b635dfc25832add4f36fdd09cf2a36fb709829c05b4112)
*   [MacOS arm64](https://get.helm.sh/helm-v4.0.1-darwin-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.0.1-darwin-arm64.tar.gz.sha256sum) / 8e0b9615cf72a62faaa0cfc0e22115f05bcddfd3d7ee58406ef97bc1ba563ae8)
*   [Linux amd64](https://get.helm.sh/helm-v4.0.1-linux-amd64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.0.1-linux-amd64.tar.gz.sha256sum) / e0365548f01ed52a58a1181ad310b604a3244f59257425bb1739499372bdff60)
*   [Linux arm](https://get.helm.sh/helm-v4.0.1-linux-arm.tar.gz) ([checksum](https://get.helm.sh/helm-v4.0.1-linux-arm.tar.gz.sha256sum) / b946401f857de078c744990188f8f664ecb1c72cdafde1ed239020fa3bb2fc3c)
*   [Linux arm64](https://get.helm.sh/helm-v4.0.1-linux-arm64.tar.gz) ([checksum](https://get.helm.sh/helm-v4.0.1-linux-arm64.tar.gz.sha256sum) / 959fa52d34e2e1f0154e3220ed5f22263c8593447647a43af07890bba4b004d1)
*   [Linux i386](https://get.helm.sh/helm-v4.0.1-linux-386.tar.gz) ([checksum](https://get.helm.sh/helm-v4.0.1-linux-386.tar.gz