# moby v29.0.3
### 为什么要使用Moby

想象一下，你是一位渴望创造前所未有的数字艺术的建筑师。你手中的工具功能强大，却如同一个浑然天成的黑盒——它成就了无数杰作，但当你试图构建一座突破想象边界的奇观时，却感到每一面墙、每一扇窗都被预先设定。你渴望的，不是另一座精美的样板房，而是能够亲手锻造砖瓦、定义蓝图、让灵感无拘无束流淌的自由。

这就是开发者与标准化容器工具之间深藏的**矛盾**：我们拥抱容器化带来的效率与一致，却时常在标准化与个性化需求的拉扯中感到束缚。你为何要使用 **Moby**？答案正在于此。Moby 不是另一个替代品，它是赠予建造者与革新者的**自由宪章**。它撕开了“黑盒”的封装，将业界标准的容器技术分解为一系列乐高式的核心组件。使用 Moby，意味着你不再仅仅是“使用者”，而是“塑造者”。你可以取其精华，组合、裁剪、创新，打造出完全贴合你独特业务逻辑、基础设施或硬件环境的容器系统。当你需要为物联网设备打造极简运行时，或为特定场景构建高度定制化的调度器时，Moby 提供了那条从“只能使用”通往“可以创造”的隐秘小径。它解决的不是“怎么做”的问题，而是“如何以我的方式实现”的根本矛盾。

### moby是什么

简而言之，**Moby 是一个开源项目，它提供了组件化的“乐高积木”，用来组装专有的、定制化的容器化系统。**

你可以将它理解为 Docker 引擎的“内核”与“组件库”。Docker 产品本身，就是基于 Moby 项目中的这些组件构建而成的一个非常流行且用户友好的具体实现。Moby 项目将容器化技术拆解为容器运行时、镜像构建、网络、存储等多个独立模块，允许开发者和企业像挑选并拼装乐高一样，将这些模块与自己的软件结合，创造出全新的、量身定制的容器产品或内部平台。

### 入门示例

**场景：** 假设你是一家智能家居公司的核心开发者，公司的新一代边缘计算网关搭载了特定的 ARM 芯片和轻量级定制 Linux 系统。你需要在这些资源严格受限的设备上，部署和管理多个负责数据处理、本地AI推断和通信的服务。标准的 Docker 引擎可能包含一些网关设备不需要的功能，显得过于臃肿。

**目标：** 利用 Moby，为你的定制硬件构建一个极度精简、只包含必需功能的专属容器引擎。

**开发示例：**

1.  **获取与探索组件：**
    ```bash
    # 克隆 Moby 项目仓库，查看所有可用的组件
    git clone https://github.com/moby/moby.git
    cd moby
    # 你会发现构成一个容器系统的各个独立部分，如 containerd（运行时）、runc、网络驱动、卷插件等。
    ```

2.  **定义你的专属系统蓝图：**
    你并不需要从头编译所有代码。Moby 社区提供了强大的框架来定义你的“装配清单”。创建一个 `moby.yml` 配置文件：
    ```yaml
    # moby.yml - 我的边缘容器引擎定义
    name: "my-edge-container-engine"
    kernel:
      image: "linuxkit/kernel:5.10.xx-arm64" # 指定为你的ARM芯片优化的内核
      cmdline: "console=tty0 page_poison=1"
    init:
      - "linuxkit/init:v0.8"
      - "linuxkit/runc:v0.8"
    onboot:
      - name: sysctl
        image: "linuxkit/sysctl:v0.8"
    services:
      - name: containerd
        image: "linuxkit/containerd:v0.8" # 核心容器运行时
      - name: 我的定制网络插件
        image: "my-registry/custom-network-driver:arm64v8" # 集成你为边缘网络写的驱动
    files:
      - name: 配置文件
        path: /etc/myengine/config.toml
        contents: |
          [plugins]
            [plugins."io.containerd.grpc.v1.cri"]
              disable_cgroup = true # 为精简性禁用非必需功能
    trust:
      org:
        - "my-registry"
    ```
    这个配置文件描述了你系统的每一个部分：用什么内核、启动什么服务、包含哪些文件。

3.  **构建与产出：**
    使用 Moby 工具 `moby build` 来根据蓝图构建最终系统镜像。
    ```bash
    # 使用 moby 工具（需单独安装）构建
    moby build -name my-edge-engine moby.yml
    ```
    产出物可以是一个可直接刷入网关设备的磁盘镜像（`.img` 文件），或者一个用于开发的虚拟机镜像。它**只包含**你定义的组件，体积小巧，完全为你的边缘场景优化。

通过这个示例，你不再是简单地 `docker run`，而是扮演了架构师的角色，利用 Moby 的组件库，为特定领域创造了一个全新的、纯粹的容器化基础。

### moby v29.0.3版本更新了什么

Moby v29.0.3 是一个维护版本，主要专注于修复错误和提升稳定性。本次更新修复了 `docker version` 命令在 JSON 格式输出中的时间格式问题，修正了 `docker image ls` 命令忽略用户自定义镜像格式配置的缺陷。此外，它还解决了一个在使用远程网络驱动插件时可能导致 Docker 守护进程崩溃的关键问题，增强了系统的可靠性。

### 更新日志

## 29.0.3

有关此版本中所有拉取请求和更改的完整列表，请参考相关的 GitHub 里程碑页面：
* [docker/cli, 29.0.3 里程碑](https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A29.0.3)
* [moby/moby, 29.0.3 里程碑](https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A29.0.3)

### Bug修复与功能增强
* **`docker version --format json`**：恢复了顶层的 `BuildTime` 字段，使其使用 RFC3339Nano 格式。
* 修复了 `docker image ls` 命令忽略 `docker.json` 中自定义 `imageFormat` 配置的问题。

### 网络
* 修复了在使用远程网络驱动插件时可能导致守护进程崩溃的问题。

### 总结概括

总而言之，v29.0.3 版本是一次聚焦于“修复与稳固”的更新。它细致地处理了从命令行输出格式一致性到配置项生效，乃至底层网络插件稳定性等多个层面的问题，旨在为用户提供更可靠、行为更预期的使用体验。