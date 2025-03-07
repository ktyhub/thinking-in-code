# compose v2.33.1
### 为什么要使用compose

在现代软件开发中，微服务架构的流行使得应用程序的管理变得愈加复杂。想象一下，你的应用程序由多个服务组成，每个服务都需要独立的环境和配置。如何在这种复杂性中保持高效和一致性？这就是 Docker Compose 的价值所在。它不仅简化了多容器应用的管理，还能让开发者在本地环境中轻松模拟生产环境。通过 Compose，开发者可以用简单的 YAML 文件定义应用的服务、网络和卷，从而实现快速部署和轻松维护。然而，许多开发者仍然在犹豫：是否真的需要这个工具？答案是肯定的，因为它能让你在复杂的开发环境中找到一条清晰的道路。

### compose是什么

Docker Compose 是一个用于定义和运行多容器 Docker 应用的工具。通过使用 YAML 文件，用户可以配置应用所需的所有服务、网络和卷，然后通过一个简单的命令启动整个应用。这使得管理多个容器变得更加高效和一致，尤其是在开发和测试阶段。

### 入门示例

想象一下，你正在开发一个电商网站，该网站由前端、后端和数据库三个部分组成。使用 Docker Compose，你可以创建一个 `docker-compose.yml` 文件，定义这三个服务。前端服务可以使用 React，后端服务可以使用 Node.js，而数据库则可以使用 MySQL。通过运行 `docker-compose up`，你可以一键启动所有服务，快速进行开发和测试。这种方式不仅节省了时间，还确保了各个服务之间的兼容性和一致性。

### compose v2.33.1版本更新了什么

在 v2.33.1 版本中，Docker Compose 增加了对 `gw_priority` 和 `enable_ipv4` 的支持（需要 Docker v28.0）。修复了在菜单启动失败时独立运行 watch 的问题，并改进了对只读服务使用非文件密钥或配置的错误报告。此外，修复了在使用 `--progress` 选项时不显示 bake 建议的问题，并解决了与 `pull --parallel` 和 `--no-parallel` 相关的弃用警告。

### 更新日志

## 更新内容
### ✨ 改进
- 增加对 `gw_priority` 和 `enable_ipv4` 的支持（需要 Docker v28.0）。

### 🐛 修复
- 如果菜单启动失败，则独立运行 watch。
- 报告使用非文件密钥或配置的只读服务时的错误。
- 在使用 `--progress` 选项时，不显示 bake 建议。
- 修复缺失的 `pull --parallel` 和 `--no-parallel` 弃用警告。
- 修复当 wait 隐含 detach 时的错误信息。

### ⚙️ 依赖项
- 更新 `github.com/spf13/cobra` 从 1.8.1 到 1.9.1。
- 更新 `google.golang.org/grpc` 从 1.68.1 到 1.70.0。
- 更新 `go.mod` 到 Docker v28.0.0。

**完整更新日志**: [v2.33.0...v2.33.1](https://github.com/docker/compose/compare/v2.33.0...v2.33.1)

### 总结

在 v2.33.1 版本中，Docker Compose 通过增加新功能和修复多个问题，进一步提升了用户体验。新版本的改进和修复使得开发者在使用 Docker Compose 时更加高效和便捷，确保了更高的稳定性和兼容性。