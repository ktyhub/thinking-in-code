# compose v2.31.0
### 为什么要使用compose

在现代软件开发中，微服务架构已成为一种趋势。想象一下，你的应用程序由多个服务组成，每个服务都需要独立运行、更新和扩展。传统的部署方式往往让人感到无比繁琐，开发者需要手动配置每个服务的环境，甚至在不同的机器上进行调试，耗费大量时间和精力。而Docker Compose的出现，正是为了打破这种矛盾。它让你可以通过一个简单的配置文件，轻松定义和管理多个服务的运行环境，极大地提高了开发和部署的效率。使用Compose，你不仅能简化工作流程，还能确保各个服务之间的协作顺畅无阻，真正实现“开发一次，随处运行”的理想。

### compose是什么

Docker Compose是一个工具，用于定义和运行多容器Docker应用程序。通过一个YAML文件，用户可以配置应用程序的服务、网络和卷等信息。Compose使得开发者能够轻松地创建、启动和管理多个Docker容器，简化了复杂应用的部署过程。

### 入门示例

假设你正在开发一个电商网站，网站由前端、后端和数据库三部分组成。使用Docker Compose，你可以创建一个`docker-compose.yml`文件，定义这三个服务的配置：

```yaml
version: '3'
services:
  frontend:
    image: nginx
    ports:
      - "80:80"
  backend:
    image: my-backend-image
    build: ./backend
    ports:
      - "5000:5000"
  database:
    image: postgres
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
```

通过运行`docker-compose up`，这三个服务将同时启动，前端通过Nginx提供服务，后端与数据库进行交互。这样，你就可以在本地快速搭建一个完整的电商网站开发环境。

### compose v2.31.0版本更新了什么

在v2.31.0版本中，Docker Compose进行了多项重要更新。首先，构建过程被委托给了buildx bake，提升了构建效率。其次，新增了commit命令，增强了功能。此外，修复了一些bug，包括在缩减服务时优先移除过时的容器，以及支持在`docker compose run`中使用`--remove-orphans`选项。最后，更新了网络配置的检测机制，确保在需要时能够重新创建网络。

### 更新日志

## 更新内容

### ✨ 改进
- 将构建委托给buildx bake。
- 新增commit命令。

### 🐛 修复
- 修复了使用`--no-interpolate`时打印服务名称的问题。
- 在缩减服务时优先移除过时的容器。
- 修复了返回不同图像的compose图像问题。
- 在构建图像时发出事件。
- 修复了在`docker compose run`中对`--remove-orphans`的支持。
- 在使用OCI版本1.1的Compose工件时推送空描述符层。
- 检测网络配置更改并在需要时重新创建。
- 更新wait-timeout标志的使用以包含单位。
- 使用service.stop停止依赖容器。
- 仅检查正在运行的容器的附加网络。

### 🔧 内部
- 将过期机器人不活跃限制从6个月减少到3个月。
- 启用testifylint linter。
- 移除ddev e2e测试。
- 针对docker engine v27.4.0进行测试。
- 针对bake运行构建测试。

### ⚙️ 依赖
- 更新golang.org/x/sync和golang.org/x/sys的版本。
- 更新moby/buildkit和docker/buildx的版本。
- 更新google.golang.org/grpc和containerd的版本。

### 新贡献者
- 新贡献者首次参与。

**完整更新日志**: [v2.30.3...v2.31.0](https://github.com/docker/compose/compare/v2.30.3...v2.31.0)

### 总结

在v2.31.0版本中，Docker Compose通过引入新的命令和修复多个bug，显著提升了用户体验和功能性。改进的构建流程和网络配置检测机制，使得开发者在管理多容器应用时更加高效和便捷。