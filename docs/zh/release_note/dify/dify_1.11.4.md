---
title: "dify 1.11.4"
project: "dify"
repo: "langgenius/dify"
tag: "1.11.4"
version: "1.11.4"
published: "2026-01-15"
type: "patch"
lang: "zh"
---

# dify 1.11.4

## 🔒 安全

Dify 现在需要 Node.js 24.13.0 来获取 AsyncLocalStorage/async_hooks DoS CVE 的上游修复，该修复可能会导致具有深度嵌套输入的应用程序崩溃。 **所有自托管部署都应升级 Node.js**。感谢 #30945 中的 @hyoban。

相关：#30935。

## 🛠️ 错误修复

- **登录后重定向**：我们已经整理了登录重定向，以便您在登录后顺利返回预期目的地。在 #30985 中向 @hyoban 提出此修复。
  
- **缺少 ID 和消息 ID**：缺少必需品？不再！感谢 #31008 中的@fatelei，我们已经修复了缺失的 `id` 和 `message_id` 问题。

- **解构未定义的属性**：曾经遇到过那个恼人的错误，因为它是未定义的，所以您无法从 `value` 解构 `name` 吗？这也被压垮了，这都要感谢 #30991 中的@fatelei。

---

## 升级指南

### Docker 组合部署

1. Back up your customized docker-compose YAML file (optional)

   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   ```

2.从主分支获取最新代码

   ```bash
   git checkout main
   git pull origin main
   ```

3. 停止服务。请在docker目录下执行

   ```bash
   docker compose down
   ```

4. 备份数据

   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5、升级服务

   ```bash
   docker compose up -d
   ```

> [!注意]
> 
> 如果您遇到如下错误
> 
> ```bash
> 2025/11/26 11:37:57 /app/internal/db/pg/pg.go:30
> [error] failed to initialize database, got error failed to connect to `host=db_postgres user=postgres database=dify_plugin`: hostname resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> 
> 2025/11/26 11:37:57 /app/internal/db/pg/pg.go:34
> [error] failed to initialize database, got error failed to connect to `host=db_postgres user=postgres database=postgres`: hostname > resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> 2025/11/26 11:37:57 init.go:99: [PANIC]failed to init dify plugin db: failed to connect to `host=db_postgres user=postgres database=postgres`: hostname resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> panic: [PANIC]failed to init dify plugin db: failed to connect to `host=db_postgres user=postgres database=postgres`: hostname resolving error (lookup db_postgres on 127.0.0.11:53: server misbehaving)
> ```
> 请改用以下命令。详情请阅读这篇https://github.com/langgenius/dify/issues/28706
> ```bash
>    docker compose --profile postgresql up -d
>    ```

### 源代码部署

1. 停止API服务器、Worker和Web前端服务器。

2.从release分支获取最新代码：

   ```bash
   git checkout 1.11.4
   ```

3.更新Python依赖项：

   ```bash
   cd api
   uv sync
   ```

4. 然后，让我们运行迁移脚本：

   ```bash
   uv run flask db upgrade
   ```

5. 最后，再次运行API服务器、Worker和Web前端服务器。

---

## 发生了什么变化

- 修复：@hyoban 在 https://github.com/langgenius/dify/pull/30985 登录后重定向
- 修复：修复https://github.com/langgenius/dify/pull/31008中@fatelei丢失的id和message_id
- 构建：在 https://github.com/langgenius/dify/pull/30945 中需要 @hyoban 的节点 24.13.0
- chore: bump version to 1.11.4 by @laipz8200 in https://github.com/langgenius/dify/pull/30961
- 修复：修复无法解构“值”的属性“名称”，因为它是未定义的…由https://github.com/langgenius/dify/pull/30991中的@hyoban

**完整 Changelog**：https://github.com/langgenius/dify/compare/1.11.3...1.11.4

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.11.4` · 📅 发布：2026-01-15 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.11.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
