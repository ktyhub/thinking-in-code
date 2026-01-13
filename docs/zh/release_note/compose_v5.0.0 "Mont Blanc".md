# compose v5.0.0 "Mont Blanc"
# 为什么要使用Compose

想象一下这个场景：深夜，咖啡已凉，屏幕的光映照着你疲惫的脸。你刚刚用Docker完美封装了你的微服务应用，自豪感尚未消退，现实便给了你一记重拳。前端、后端、数据库、缓存队列、消息中间件……十几个容器，每个都需要一串长得令人头晕的`docker run`命令，里面充斥着端口映射、卷挂载、环境变量和复杂的网络链接。你就像一位试图同时指挥十几个乐手却只有一张嘴的交响乐指挥，手忙脚乱，濒临崩溃。

这，就是现代应用开发的缩影，也是每个开发者与“容器化”蜜月期结束后，必须面对的复杂性的泥潭。你追求的是敏捷与高效，得到的却是一本由晦涩命令写成的操作手册。**Docker Compose**的出现，就是为了平息这场风暴。它将你从重复、琐碎且极易出错的命令行中解放出来，用一份简洁、声明式的YAML文件，为你描绘出整个应用栈的蓝图。一键启动，一键停止，让“编排”这个听起来高深莫测的概念，化作你指尖一个简单的`docker compose up`。它不是锦上添花，而是将你从混沌引向秩序的**必需品**。

# Compose是什么

简而言之，**Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的工具**。

你可以把它理解为：
*   **乐高说明书**：你有一堆乐高积木（容器），Compose就是那张告诉你如何将它们组合成城堡（完整应用）的图纸。
*   **乐队指挥**：单个乐手（容器）各司其职，Compose就是确保他们同步演奏出和谐乐曲的指挥家。
*   **一键脚本的优雅进化**：它用结构化的`docker-compose.yml`文件，替代了那些杂乱无章、难以维护的Shell脚本。

通过一个配置文件，你就能定义所有服务（容器）、它们之间的依赖关系、网络配置、数据卷等，然后用一组简单的命令管理整个应用的生命周期。

# 入门示例

让我们从一个最经典的组合开始：一个基于WordPress的博客网站。它需要两个容器：一个运行WordPress（PHP应用），另一个运行MySQL数据库。

**1. 创建项目目录**
```bash
mkdir my-wordpress-site && cd my-wordpress-site
```

**2. 创建 `docker-compose.yml` 文件**
将以下内容粘贴到文件中。这就是你的“应用蓝图”：

```yaml
version: '3.8'  # 使用的Compose文件格式版本

services:
  db:
    image: mysql:8.0  # 使用官方MySQL 8.0镜像
    volumes:
      - db_data:/var/lib/mysql  # 将数据持久化到名为db_data的卷中，避免容器删除后数据丢失
    restart: always
    environment:  # 设置环境变量，相当于配置数据库
      MYSQL_ROOT_PASSWORD: some_root_password
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress_password

  wordpress:
    depends_on:  # 明确依赖关系，WordPress会在数据库之后启动
      - db
    image: wordpress:latest
    ports:
      - "8080:80"  # 将主机的8080端口映射到容器的80端口
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306  # 注意这里，直接使用服务名`db`来连接
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress_password
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wp_content:/var/www/html/wp-content  # 持久化主题、插件等

volumes:
  db_data:  # 声明一个数据卷，供db服务使用
  wp_content: # 声明一个数据卷，供wordpress服务使用
```

**3. 启动整个应用栈**
只需一行命令：
```bash
docker compose up -d
```
`-d` 代表在后台运行。

现在，打开浏览器访问 `http://localhost:8080`，你将看到WordPress的安装界面。整个环境——包括两个相互联通的容器、网络和持久化存储——在几秒内就绪。

**4. 管理应用**
*   **查看运行状态**：`docker compose ps`
*   **查看日志**：`docker compose logs -f wordpress`
*   **停止并移除容器（保留数据卷）**：`docker compose down`
*   **停止并移除一切（包括数据卷）**：`docker compose down -v`

这个示例展示了Compose如何将“部署一个完整应用”的复杂度，压缩到定义服务和执行单一命令的极致简洁中。

# Compose v5.0.0 “Mont Blanc”版本更新了什么

Docker Compose v5.0.0 “Mont Blanc” 是一次重大的里程碑更新。其核心变化可概括为：

1.  **正式成为SDK**：Compose现在可以作为一个软件开发工具包，被直接集成到第三方软件或平台中，极大地扩展了其应用边界。
2.  **构建引擎统一**：移除了内部构建器，将所有镜像构建任务委托给 **Docker Bake**（与 `docker build` 使用相同的底层引擎），简化了架构并提升了构建的一致性与性能。
3.  **增强OCL和Git支持**：改进并正式支持从OCI（开放容器倡议）镜像库和Git仓库等远程资源加载Compose文件。
4.  **引入`--wait`选项**：为 `start` 命令新增此选项，允许等待服务进入健康状态，提升了自动化脚本的可靠性。
5.  **API与功能优化**：包括通过功能参数配置服务、支持`build.no_cache_filter`以更精细地控制构建缓存、修复端口范围支持等一系列改进与问题修复。

# 更新日志

![mont blanc](https://private-user-images.githubusercontent.com/132757/521269070-1e6b938e-e67a-4063-b1d0-0f225da01521.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ2OTk4NTQsIm5iZiI6MTc2NDY5OTU1NCwicGF0aCI6Ii8xMzI3NTcvNTIxMjY5MDcwLTFlNmI5MzhlLWU2N2EtNDA2My1iMWQwLTBmMjI1ZGEwMTUyMS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXot