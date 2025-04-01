# moby v28.0.0
### 为什么要使用moby
在当今快速发展的技术世界中，开发者面临着无数选择，如何在众多工具中找到最合适的解决方案？moby正是这样一个引人注目的选择。它不仅是一个开源项目，更是一个强大的工具，旨在帮助开发者构建和管理容器化应用。然而，使用moby的理由并不止于此。它的灵活性与可扩展性使得开发者能够在复杂的环境中游刃有余，但与此同时，它也带来了学习曲线的挑战。如何在这两者之间找到平衡，成为了每个开发者必须面对的矛盾。

### moby是什么
moby是一个开源项目，旨在为开发者提供构建和管理容器化应用的工具和框架。它为Docker引擎的构建提供了基础，允许用户根据自己的需求定制和扩展容器技术。通过moby，开发者可以轻松创建、管理和部署容器，提升开发效率。

### 入门示例
想象一下，你是一名开发者，正在为一个新项目构建微服务架构。你决定使用moby来管理这些服务。首先，你可以使用moby的组件创建一个自定义的Docker镜像，包含所有必要的依赖项。接着，通过moby的API，你可以轻松地将这些镜像部署到不同的环境中，比如开发、测试和生产。最终，你的团队能够快速迭代，确保每个服务都能在容器中高效运行。

### moby v28.0.0版本更新了什么
moby v28.0.0版本带来了多项重要更新，包括新增了通过`--mount type=image`在容器内挂载镜像的能力，支持在多平台镜像上选择特定平台的操作，更新了docker images命令以显示元数据徽章，并增强了Windows平台的支持。此外，网络方面也进行了改进，确保容器接口使用随机生成的MAC地址，提高了安全性和灵活性。

### 更新日志
# 28.0.0
有关此版本的完整拉取请求和更改列表，请参阅相关的GitHub里程碑：
- [docker/cli, 28.0.0里程碑](https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A28.0.0)
- [moby/moby, 28.0.0里程碑](https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A28.0.0)
- 已弃用和移除的功能，请参见[弃用功能](https://github.com/docker/cli/blob/v28.0.0/docs/deprecated.md)。
- 引擎API的更改，请参见[API版本历史](https://github.com/moby/moby/blob/v28.0.0/docs/api/version-history.md)。

## 新增功能
- 增加了通过`--mount type=image`在容器内挂载镜像的能力。您还可以指定`--mount type=image,image-subpath=[subpath],...`选项以挂载镜像中的特定路径。
- `docker images --tree`现在显示元数据徽章。
- `docker load`、`docker save`和`docker history`现在支持`--platform`标志，允许您在多平台镜像上选择特定平台进行单平台操作。
- 在`docker service create`和`docker stack`中添加了`OOMScoreAdj`选项。
- `docker buildx prune`现在支持`reserved-space`、`max-used-space`、`min-free-space`和`keep-bytes`过滤器。
- Windows：增加了支持将containerd作为守护进程的子进程运行，而不是使用系统安装的containerd。

## 网络
- 更新了`docker-proxy`二进制文件，旧版本将无法与更新的`dockerd`一起使用。
  - 关闭了用户空间代理（`docker-proxy`）可能接受TCP连接的窗口，这些连接在设置`iptables` NAT规则后将失败。
  - 可执行文件`rootlesskit-docker-proxy`不再使用，已从构建和分发中移除。
- 从主机的`/etc/resolv.conf`读取的DNS名称服务器现在始终从主机的网络命名空间访问。
  - 当主机的`/etc/resolv.conf`中没有名称服务器且没有`--dns`覆盖时，谷歌的DNS服务器不再被使用，除了默认桥接网络和构建容器。
- 桥接和macvlan网络中的容器接口现在使用随机生成的MAC地址。
  - 启动接口时将发送无偿ARP/邻居广告消息，以便在IP地址被重用时与新生成的MAC地址关联。
  - 默认桥接网络中的IPv6地址现在由IPAM分配，而不是从MAC地址派生。
- 已弃用的OCI `prestart`钩子现在仅由构建容器使用。对于其他容器，网络接口在任务创建完成后添加到网络命名空间，在容器任务启动之前。
- 在`docker run`、`docker container create`和`docker network connect`中添加了新的`gw-priority`选项。此选项将用于引擎确定哪个网络为容器提供默认网关。在`docker run`中，此选项仅通过扩展的`--network`语法可用。
- 添加了新的netlabel `com.docker.network.endpoint.ifname`，用于自定义连接容器到网络时使用的接口名称。所有内置网络驱动程序都支持此功能。
  - 当创建一个指定多个网络的容器时，无法保证网络连接到容器的顺序。因此，如果自定义接口名称使用与自动生成名称相同的前缀，例如`eth`，则容器可能无法启动。
  - 推荐的做法是使用不同的前缀，例如`en0`，或足够高的数字后缀以避免冲突，例如`eth100`。
  - 此标签可以通过`docker network connect`的`--driver-opt`标志指定，例如`docker network connect --driver-opt=com.docker.network.endpoint.ifname=foobar …`。
  - 或者通过`docker run`上的长格式`--network`标志，例如`docker run --network=name=bridge,driver-opt=com.docker.network.endpoint.ifname=foobar …`。

## 端口发布在桥接网络中
- `dockerd`现在要求Linux内核支持`ipset`。
  - 用于实现端口发布和网络隔离的`iptables`和`ip6tables`规则已被广泛修改。这使得一些功能变化成为可能，并且是重构以在未来版本中启用原生`nftables`支持的第一步。
  - 如果需要降级到早期版本的守护进程，则需要手动清理新规则。最简单和最可靠的方法是重启主机，或使用`iptables -F`和`ip6tables -F`清除`filter`表中的所有现有`iptables`规则，然后再启动旧版本的守护进程。当这不可能时，以root身份运行以下命令：
    - `iptables -D FORWARD -m set --match-set docker-ext-bridges-v4 dst -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT; ip6tables -D FORWARD -m set --match-set docker-ext-bridges-v6 dst -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT`
    - `iptables -D FORWARD -m set --match-set docker-ext-bridges-v4 dst -j DOCKER; ip6tables -D FORWARD -m set --match-set docker-ext-bridges-v6 dst -j DOCKER`
    - 如果您之前将iptables filter-FORWARD策略设置为`ACCEPT`并需要恢复对未发布端口的访问，还需从`DOCKER`链中删除每个桥接网络规则。例如，`iptables -D DOCKER ! -i docker0 -o docker0 -j DROP`。
- 修复了一个安全问题，允许远程主机直接连接到容器的发布端口。
- 修复了一个安全问题，允许邻近主机连接到映射到回环地址的端口。
- 修复了一个问题，导致无法将端口发布到链路本地地址。
- 通过主机的公共IP地址，UDP端口现在可以可靠地被其他网络上的容器访问。
- Docker现在仅在主机本身启用IP转发时（sysctls `net.ipv6.conf.all.forwarding`和`net.ipv6.conf.default.forwarding`）将`ip6tables`策略设置为`DROP`。这现在与现有的IPv4行为保持一致。
  - 如果您的主机启用了IPv6转发，但依赖Docker将ip6tables filter-FORWARD策略设置为`DROP`，则可能需要更新主机的配置以确保安全。
- 现在在`DOCKER` iptables链中阻止对未通过`p`/`-publish`暴露的容器端口的直接路由访问。
  - 如果您之前将