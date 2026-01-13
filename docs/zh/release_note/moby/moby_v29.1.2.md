# moby v29.1.2
## 为什么要使用Moby

想象一下这样的场景：你手中的代码在本地运行得天衣无缝，但一旦踏上服务器，便瞬间陷入依赖地狱的泥潭，环境差异让一切分崩离析。这曾是每一位开发者的午夜噩梦，直到容器技术的出现，撕裂了这道顽固的壁垒。而在容器化的浪潮中，**Moby** 正是那股原始而强大的核心力量。

选择 Moby，并非仅仅是选择一个工具，而是选择拥抱一种哲学——一种将基础设施代码化、将环境标准化的哲学。它直面最尖锐的矛盾：开发与运维之间的隔阂、环境不一致性带来的无尽调试、以及“在我机器上能运行”的经典悖论。Moby 提供了构建容器化世界的基石，让你能像搭积木一样，自由组装和定制专属的容器引擎。它不是为了替代你熟悉的高层工具，而是为了赋予你更深层的控制权和解锁无限的可能性。当你的项目需要超越标准配置，当创新需要从底层引擎开始，Moby 就是你手中的那把钥匙，开启一扇通往高度定制化、面向未来的容器生态系统的大门。

## Moby是什么

简单来说，Moby 是一个开源项目，它为容器技术的组装提供了一个“乐高积木盒”。你可以把它理解为 Docker 引擎背后的核心组件库。Docker 产品本身使用了 Moby 项目中的许多组件。因此，Moby 允许开发者和企业基于这些经过验证的组件，构建和定制属于自己的、量身打造的容器化系统。

## 入门示例

**真实场景**：假设你是一名 Python 开发者，正在开发一个名为“QuickNote”的轻量级 Web 笔记应用，使用 Flask 框架。你的目标是让这个应用能够一键在任何地方运行起来。

**开发示例**：
1.  **定义环境（Dockerfile）**：在你的项目根目录创建一个 `Dockerfile`，这是 Moby/ Docker 能理解的“构建说明书”。
    ```dockerfile
    # 使用官方Python轻量级镜像作为基础
    FROM python:3.9-slim

    # 设置工作目录
    WORKDIR /app

    # 复制依赖文件并安装
    COPY requirements.txt .
    RUN pip install --no-cache-dir -r requirements.txt

    # 复制应用代码
    COPY . .

    # 声明容器运行时监听的端口
    EXPOSE 5000

    # 定义启动命令
    CMD ["flask", "run", "--host=0.0.0.0"]
    ```

2.  **构建镜像**：在 `Dockerfile` 所在目录执行以下命令，Moby 的构建组件会根据指令创建一个包含你应用及其所有依赖的可移植镜像。
    ```bash
    docker build -t quicknote-app .
    ```

3.  **运行容器**：基于构建好的镜像，启动一个独立的容器实例。
    ```bash
    docker run -d -p 5000:5000 --name my-note-app quicknote-app
    ```
    现在，你的 QuickNote 应用就在一个隔离的容器中运行起来了，并映射到你本机的 5000 端口。无论你的开发机、测试服务器还是生产环境，只要安装了容器运行时，都能以完全相同的方式运行此应用。

## Moby v29.1.2版本更新了什么

本次更新主要是一个维护版本，重点在于提升安全性和修复具体问题。核心变更有：升级 Go 运行时以修复两个关键的安全漏洞，其中一个涉及拒绝服务攻击风险，另一个涉及证书验证问题。同时，修复了若干影响用户体验的 Bug，例如在某些情况下 `docker image inspect` 命令失败、`docker system df` 显示数据异常，以及无根模式下的端口映射问题。此外，还更新了内置的 `runc` 组件版本。

## 更新日志

### 29.1.2

有关此版本中拉取请求和更改的完整列表，请参考相关的 GitHub 里程碑页面：

*   [docker/cli, 29.1.2 里程碑](https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A29.1.2)
*   [moby/moby, 29.1.2 里程碑](https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A29.1.2)

### 安全

*   将 Go 运行时更新至 [1.25.5](https://go.dev/doc/devel/release#go1.25.5)。
    *   修复了格式化主机名验证错误时可能因资源过度使用导致拒绝服务攻击的漏洞 **CVE-2025-61729**。
    *   修复了对通配符 SAN 中排除子域约束的错误强制执行问题，该问题可能导致错误地信任证书 **CVE-2025-61727**。

### 错误修复与增强

*   **containerd 镜像存储**：修复了当并非所有可分发 blob 在本地都可用时，`docker image inspect` 命令无法返回可用镜像数据的问题。
*   **dockerd-rootless-setuptool.sh**：修复了 `nsenter: no namespace specified` 错误。
*   修复了使用 graph-drivers 作为存储时，`docker system df` 命令显示的共享大小和唯一大小为 `N/A` 的问题。

### 打包更新

*   将静态二进制文件中的 runc 更新至 [v1.3.4](https://github.com/opencontainers/runc/releases/tag/v1.3.4)。

### 网络

*   修复了在 rootless 模式下使用 slirp4netns 时阻止端口映射的 bug。
*   防止了当发起 API 请求时设置了 `HostConfig.PublishAllPorts` （即 `-P` 标志）但没有端口绑定而导致崩溃的问题。

## 总结

总而言之，Moby v29.1.2 版本是一个以安全和稳定性为中心的更新，它通过修补关键漏洞、解决影响命令功能和网络配置的具体缺陷，进一步巩固了容器运行时的可靠性和安全性。