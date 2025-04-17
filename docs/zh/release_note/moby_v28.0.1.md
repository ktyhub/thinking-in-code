# moby v28.0.1
### 为什么要使用moby

在当今快速发展的技术世界中，开发者们面临着无数选择，如何在众多工具中找到最合适的呢？moby的出现恰好解决了这个矛盾。它不仅是一个开源项目，更是一个构建和共享容器化应用的强大平台。使用moby，开发者能够轻松创建、管理和部署容器，同时享受灵活性和可扩展性。想象一下，您可以在几分钟内构建出一个完整的微服务架构，而不必担心底层的复杂性，这正是moby所带来的巨大优势。

### moby是什么

moby是一个开源项目，旨在为开发者提供一个灵活的框架，用于构建和共享容器化应用。它允许用户将Docker引擎拆分成多个可重用的组件，从而使开发者能够根据自己的需求定制和扩展容器化解决方案。通过moby，用户可以轻松创建、管理和部署容器，提升开发效率。

### 入门示例

想象一下，您是一名初创公司的开发者，正在为一款新应用构建后端服务。您决定使用moby来简化这一过程。首先，您可以通过moby的组件快速搭建一个Docker环境，然后利用其提供的API和工具，轻松创建和管理多个容器。比如，您可以创建一个数据库容器和一个应用服务器容器，并通过moby的网络功能将它们连接起来。这样，您不仅节省了时间，还能专注于应用的核心功能，而不是底层的基础设施。

### moby v28.0.1版本更新了什么

moby v28.0.1版本进行了多项重要更新，包括移除对某些内核模块的依赖，允许在禁用IPv6的主机上启动守护进程，修复了容器重启循环的问题，并解决了Swarm ingress的iptables规则排序错误。此外，该版本还改进了网络错误报告和Docker的iptables规则管理，提升了整体性能和稳定性。

### 更新日志

# 28.0.1

有关此版本的完整拉取请求和更改列表，请参阅相关的GitHub里程碑：

- [docker/cli, 28.0.1里程碑](https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A28.0.1)
- [moby/moby, 28.0.1里程碑](https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A28.0.1)

## 网络

- 移除了对内核模块`ip_set`、`ip_set_hash_net`和`netfilter_xt_set`的依赖。这一依赖在28.0.0版本中引入，但证明过于破坏性，已被替换为新的iptables规则。
- 允许在禁用IPv6的主机上启动守护进程，而无需使用`--ip6tables=false`。
- 修复了一个导致使用`--restart=always`的容器在已使用的端口上重启的循环问题。
- 修复了由于iptables规则排序错误导致的Swarm ingress问题。
- 修复了从`--config-only`网络创建swarm范围网络的问题。
- 修复了在没有特定IPAM配置的新创建网络上，`docker network inspect`报告IPv6网关时的CIDR后缀问题，直到守护进程重启。
- 改进了当内核模块`ip_set`、`ip_set_hash_net`和`netfilter_xt_set`不可用时报告的错误信息。
- 将大部分Docker的iptables规则移出filter-FORWARD链，以便其他应用可以自由添加必须遵循Docker规则的规则。
- 更新了`--help`输出和手册页，以说明哪些选项仅适用于默认桥接网络。

## 错误修复和增强

- 修复了使用`"skip-tls-verify"`选项时，`docker context create`总是返回错误的问题。
- 修复了shell补全建议服务和节点的ID而不是名称的问题。
- 修复了在`docker exec/run`返回非零状态时意外将退出状态打印到标准错误输出的问题。
- 修复了RootlessKit端口驱动程序“slirp4netns”不支持“tcp”协议的回归问题。
- 修复了containerd镜像存储中，`docker inspect`无法显示缺少层的多平台镜像的问题。
- 修复了containerd镜像存储中，`docker images --tree`报告错误内容大小的问题。
- 修复了在i386上的编译问题。

## 打包更新

- 更新`github.com/go-jose/go-jose/v4`到v4.0.5以解决安全问题。
- 更新Buildx到v0.21.1。
- 更新Compose到v2.33.1。

## API

- 修复了containerd镜像存储中，`GET /images/json?manifests=1`未填充索引仅图像的`Manifests`字段的问题。
- 修复了containerd镜像存储中，`GET /images/json和/images/<name>/json`的`Size.Content`字段包括本地不可用内容大小的问题。

### 总结

在moby v28.0.1版本中，开发团队进行了多项重要的修复和增强，特别是在网络管理和错误处理方面，提升了整体的稳定性和性能。这些更新不仅解决了之前版本中的一些问题，还为开发者提供了更好的使用体验。