# minikube v1.34.0
### minikube是什么

Minikube 是一个轻量级的 Kubernetes 本地开发环境，旨在帮助开发者在本地机器上快速部署和测试 Kubernetes 应用。它通过虚拟化技术在本地创建一个单节点的 Kubernetes 集群，使得开发者能够在不依赖云服务的情况下，进行 Kubernetes 的学习和实验。

### 为什么要使用minikube?

使用 Minikube 的原因有很多。首先，它提供了一个简单的方式来学习和实验 Kubernetes，而无需复杂的设置。其次，Minikube 支持多种虚拟化驱动程序，能够在不同的操作系统上运行，极大地提高了灵活性。此外，Minikube 还支持多种 Kubernetes 插件和扩展，方便开发者根据需求进行定制。最后，Minikube 的快速启动和停止功能，使得开发者能够高效地进行开发和测试。

### minikube v1.34.0版本更新了什么

在 v1.34.0 版本中，Minikube 进行了多项重要更新。以下是一些主要变化：

- **重大变更**：
  - 将最低的 Podman 版本提升至 4.9.0。
  - 不再支持 Docker Desktop 4.34.0。

- **新特性**：
  - 默认 Kubernetes 版本提升至 v1.31.0。
  - 为 macOS 添加了新的 vfkit 驱动程序。
  - 为 darwin/arm64 添加了 Parallels 驱动程序支持。
  - 新增 volcano 插件。
  - ingress-dns 插件支持所有架构。
  - 在 WSL 上支持特权端口。
  - 使用 docker-buildx 进行镜像构建。
  - 支持在 arm64 上运行 x86 QEMU。
  - 为 addon images 命令添加了 -o json 选项。

- **改进**：
  - 为 --driver 添加 -d 简写。
  - 为 --container-runtime 添加 -c 简写。
  - kvm2：不删除 "default" libvirt 网络。
  - 更新 MINIKUBE_HOME 的使用。
  - CNI：更新权限以支持 kindnet 的网络策略。
  - GPU：当启用 GPU 时，将 NVIDIA_DRIVER_CAPABILITIES 设置为 all。
  - 改进了在缺少 9P 的系统上使用 mount 时的错误信息。
  - 改进了在非 KVM 集群上启用 KVM 插件时的错误信息。
  - 当加载错误架构的镜像时添加警告。
  - profile list --output json 处理空配置文件夹。
  - 在连接问题时检查 minikube 外部的连接性。

- **修复**：
  - 修复在使用内置网络的 QEMU 时未创建 API 服务器隧道的问题。
  - 修复在 --interactive=false 时等待用户输入防火墙解锁的问题。
  - 修复在 Podman 中子网已被使用时的网络重试检查。
  - 修复生成镜像保存时的空 tarball 问题。
  - 修复 kong-serviceaccount 的权限缺失问题。

- **版本升级**：
  - 更新多个插件和镜像版本，确保使用最新的功能和安全性。

### 更新日志

📣😀 **请填写我们的 [快速5问调查](https://forms.gle/Gg3hG5ZySw8c1C24A)**，以便我们了解您如何使用 minikube，以及我们应该进行哪些改进。谢谢！💃🎉

## 发布说明

## 版本 1.34.0 - 2024-09-04

**重大变更**：
- 将最低的 Podman 版本提升至 4.9.0。
- 不再支持 Docker Desktop 4.34.0。

**新特性**：
- 默认 Kubernetes 版本提升至 v1.31.0。
- 为 macOS 添加了新的 vfkit 驱动程序。
- 为 darwin/arm64 添加了 Parallels 驱动程序支持。
- 新增 volcano 插件。
- ingress-dns 插件支持所有架构。
- 在 WSL 上支持特权端口。
- VM 驱动程序现在使用 docker-buildx 进行镜像构建。
- 支持在 arm64 上运行 x86 QEMU。
- 为 addon images 命令添加了 -o json 选项。

**改进**：
- 为 --driver 添加 -d 简写。
- 为 --container-runtime 添加 -c 简写。
- kvm2：不删除 "default" libvirt 网络。
- 更新 MINIKUBE_HOME 的使用。
- CNI：更新权限以支持 kindnet 的网络策略。
- GPU：当启用 GPU 时，将 NVIDIA_DRIVER_CAPABILITIES 设置为 all。
- 改进了在缺少 9P 的系统上使用 mount 时的错误信息。
- 改进了在非 KVM 集群上启用 KVM 插件时的错误信息。
- 当加载错误架构的镜像时添加警告。
- profile list --output json 处理空配置文件夹。
- 在连接问题时检查 minikube 外部的连接性。

**修复**：
- 修复在使用内置网络的 QEMU 时未创建 API 服务器隧道的问题。
- 修复在 --interactive=false 时等待用户输入防火墙解锁的问题。
- 修复在 Podman 中子网已被使用时的网络重试检查。
- 修复生成镜像保存时的空 tarball 问题。
- 修复 kong-serviceaccount 的权限缺失问题。

**版本升级**：
- 更新多个插件和镜像版本，确保使用最新的功能和安全性。

有关更详细的变更日志，包括预发布版本中的更改，请参见 [CHANGELOG.md](https://github.com/kubernetes/minikube/blob/master/CHANGELOG.md)。

感谢所有为本次发布做出贡献的人！