## 代码获取
- 首先需要安装环境Go，编译器可以使用GoLand
- 然后拉取代码
- git clone git@github.com:kubernetes/kubernetes.git

- 切换分支
- git checkout v1.9.9

## 简介
在了解源码之前我们先来回顾下简介，下面的简介翻译自源码中的readme文件，如果喜欢读原文件的可以直接打开readme文件

Kubernetes 是一个开源系统，用于跨多个主机管理[容器化应用程序]，为应用程序的部署、维护和扩展提供基本机制。

Kubernetes 建立在 Google 使用名为 [Borg] 的系统大规模运行生产工作负载的十五年经验之上，并结合了来自社区的最佳创意和实践。

Kubernetes 由云原生计算基金会 ([CNCF]) 托管。 如果您是一家希望帮助塑造企业发展的公司 容器打包、动态调度的技术 面向微服务，考虑加入CNCF。
有关谁参与以及 Kubernetes 如何发挥作用的详细信息，
阅读 CNCF [公告]。

----

### 开始使用 Kubernetes
有如下教程可以参考：

- [kubernetes.io](https://kubernetes.io/) 的文档。

- [交互式教程](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

- [使用 Kubernetes 的可扩展微服务](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) 的免费课程。

### 开始开发 Kubernetes

[社区](https://github.com/kubernetes/community) 包含有关的所有信息
从源代码构建 Kubernetes，如何贡献代码
和文件，与谁联系以了解什么等。

如果您想立即构建 Kubernetes，有两种选择：
##### 你有一个工作的 Go 环境  [Go environment](https://golang.org/doc/install).

```
$ go get -d k8s.io/kubernetes
$ cd $GOPATH/src/k8s.io/kubernetes
$ make
```

##### 你有一个工作的Docker环境  [Docker environment](https://docs.docker.com/engine/).

```
$ git clone https://github.com/kubernetes/kubernetes
$ cd kubernetes
$ make quick-release
```

如果想要向官方参考提交代码可以参考文档[开发者文档](https://github.com/kubernetes/community/tree/master/contributors/devel)



构建文件在目录build中，可以参考文件build/README.md也

如果您利用容器化的构建环境，构建 Kubernetes 很容易

## 要求

1. Docker，使用以下配置之一：

- **macOS** 为 Mac 安装 Docker。请参阅[此处的](https://docs.docker.com/docker-for-mac/)安装说明。 **注意** ：您需要将 Docker VM 设置为具有至少 8GB 的初始内存，否则构建可能会失败。（见：[#11852](http://issue.k8s.io/11852)）。
- **带有本地 Docker 的 Linux** 根据您的操作系统的[说明](https://docs.docker.com/installation/#installation)安装 Docker 。
- **Windows with Docker Desktop WSL2 backend** 按照[说明](https://docs.docker.com/docker-for-windows/wsl-tech-preview/)安装 Docker 。确保将源存储在本地 Linux 文件系统中，而不是 Windows 远程挂载`/mnt/c`.

**注意** ：您需要检查 Docker CLI 插件 buildx 是否已正确安装（`docker-buildx`文件应存在于 中`~/.docker/cli-plugins`）。您可以根据[说明](https://github.com/docker/buildx/blob/master/README.md#installing)安装 buildx 。

1. **可选的** [Google Cloud SDK](https://developers.google.com/cloud/sdk/)

如果要将您的版本上传到 Google Cloud Storage，则必须安装和配置 Google Cloud SDK，否则可以安全地省略此操作。

## 概述

虽然可以使用本地 golang 安装来构建 Kubernetes，但我们有一个在 Docker 容器中运行的构建过程。这简化了初始设置并提供了非常一致的构建和测试环境。

## 关键脚本

在[`build/`](https://github.com/kubernetes/kubernetes/blob/master/build)目录中可以找到以下脚本。请注意，所有脚本都必须从 Kubernetes 根目录运行。

- `build/run.sh`

  ：在构建 docker 容器中运行命令。常见调用：

    - `build/run.sh make`: 在容器中只构建 linux 二进制文件。根据需要传递选项和包。
    - `build/run.sh make cross`：为所有平台构建所有二进制文件。要仅构建特定平台，请添加`KUBE_BUILD_PLATFORMS=<os>/<arch>`
    - `build/run.sh make kubectl KUBE_BUILD_PLATFORMS=darwin/amd64`：构建（针对特定平台的特定的二进制`kubectl`和`darwin/amd64`分别在该例子中）
    - `build/run.sh make test`: 运行所有单元测试
    - `build/run.sh make test-integration`: 运行集成测试
    - `build/run.sh make test-cmd`: 运行 CLI 测试

- [`build/copy-output.sh`](https://github.com/kubernetes/kubernetes/blob/master/build/copy-output.sh)：这会将`_output/dockerized/bin`Docker 容器中的内容复制到本地`_output/dockerized/bin`. 它还将复制作为构建过程的一部分生成的特定文件模式。这是作为`build/run.sh`.

- [`build/make-clean.sh`](https://github.com/kubernetes/kubernetes/blob/master/build/make-clean.sh)：清除 的内容`_output`，删除所有本地构建的容器映像并删除数据容器。

- [`build/shell.sh`](https://github.com/kubernetes/kubernetes/blob/master/build/shell.sh)：放入`bash`带有当前 repo 代码快照的构建容器中的shell。

## 基本流程

直接[`build/`](https://github.com/kubernetes/kubernetes/blob/master/build)使用的脚本用于构建和测试。他们将确保`kube-build`构建 Docker 镜像（基于Dockerfile 中的[`build/build-image/Dockerfile`](https://github.com/kubernetes/kubernetes/blob/master/build/build-image/Dockerfile)基本镜像`KUBE_BUILD_IMAGE_CROSS_TAG`被替换为基本镜像的那些实际标签之一，如`v1.13.9-2`），然后在该容器中执行适当的命令。这些脚本将确保从运行到运行缓存正确的数据以进行增量构建，并将结果复制回容器之外。您可以`kube-cross`通过设置`KUBE_CROSS_IMAGE`和指定不同的注册表/名称和版本`KUBE_CROSS_VERSION`，[`build/common.sh`](https://github.com/kubernetes/kubernetes/blob/master/build/build/common.sh)有关更多详细信息，请参阅。

该`kube-build`容器图像被首先建立在“背景”目录下建立`_output/images/build-image`。它是在那里完成的，而不是在 Kubernetes 存储库的根目录下完成，以最大限度地减少我们在构建映像时需要打包的数据量。

有 3 个不同的容器实例从此映像运行。第一个是“数据”容器，用于存储需要持久保存以支持增量构建的所有数据。接下来是一个“rsync”容器，用于将数据传入和传出数据容器。最后有一个“构建”容器，用于实际执行构建操作。每次使用后都会删除 rsync 和构建容器，数据容器会在运行中持续存在。

`rsync`在幕后透明地使用，以有效地将数据移入和移出容器。这将使用 Docker 选择的临时端口。您可以通过设置`KUBE_RSYNC_PORT`env 变量来修改它。

所有 Docker 名称都带有从文件路径派生的散列（以允许在 CI 机器等设备上并发使用）和版本号的后缀。当版本号更改时，所有状态都将被清除并开始清理构建。这允许更改构建基础结构并向 CI 系统发出信号，表明需要删除旧工件。

## 释放

该[`build/release.sh`](https://github.com/kubernetes/kubernetes/blob/master/build/release.sh)脚本将构建一个版本。它将构建二进制文件，运行测试，（可选）构建运行时 Docker 镜像。

主要输出是一个 tar 文件：`kubernetes.tar.gz`. 这包括：

- 交叉编译的客户端实用程序。
- `kubectl`用于根据平台选择和运行正确的客户端二进制文件的脚本 ( )。
- 例子
- 各种云的集群部署脚本
- 包含所有服务器二进制文件的 tar 文件

此外，还创建了一些其他 tar 文件：

- `kubernetes-client-*.tar.gz` 特定平台的客户端二进制文件。
- `kubernetes-server-*.tar.gz` 特定平台的服务器二进制文件。

在构建最终发布的`_output/release-stage`tars 时，它们首先被暂存，然后再被 tar'd 并放入`_output/release-tars`.

## 再现性

`make release`它的变体`make quick-release`提供了一个密封的构建环境，应该为构建提供一定程度的可重复性。`make`本身 **不是** 密封的。

Kubernetes 构建环境支持Reproducible Builds 项目指定的[`SOURCE_DATE_EPOCH`环境变量](https://reproducible-builds.org/specs/source-date-epoch/)，可以设置为 UNIX 纪元时间戳。这将用于嵌入在编译的 Go 二进制文件中的构建时间戳，也许有一天也用于 Docker 图像。

这个变量的一个合理设置是使用正在构建的树的顶端的提交时间戳；这就是 Kubernetes CI 系统使用的。例如，您可以使用以下单行：

```
SOURCE_DATE_EPOCH= $( git show -s --format=format:%ct HEAD )
```
```  
├── Godeps        godep依赖文件
├── api           swagger api文档
├── build         构建用到的命令
├── cluster       自动构建和快速构建k8s集群的脚本(进入维护阶段)
├── cmd           核心：命令入口
├── docs          文档
├── examples      一些部署样例yaml文件
├── hack          hack代码
├── logo          logo图片
├── pkg           核心：具体命令的逻辑代码
├── plugin        主要是kube-scheduler
├── staging       暂存区，用于分离仓库
├── test          test
├── third_party   一些第三方工具
├── translations  多语言文件
└── vendor        依赖代码
```