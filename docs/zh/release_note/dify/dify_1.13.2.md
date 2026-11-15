---
title: "dify 1.13.2"
project: "dify"
repo: "langgenius/dify"
tag: "1.13.2"
version: "1.13.2"
published: "2026-03-18"
type: "patch"
lang: "zh"
---

# dify 1.13.2

This patch release fixes several critical regressions and stability issues introduced in v1.13.1, including:

- 提示消息转换中的严重回归导致多个 LLM 插件调用失败
   LLM相关节点，包括LLM和Question Classifier。
- Knowledge Retrieval node execution failures caused by incompatible enum values
- improper Weaviate client cleanup

---

## Upgrade Guide

> [!重要]
> 如果您使用定制 `CELERY_QUEUES`，请确保包含 `workflow_based_app_execution`。  
> If `ENABLE_API_TOKEN_LAST_USED_UPDATE_TASK=true`, also include `api_token`.
> 
> For background and details, see **⚠️ Important Upgrade Note** and **🔧 Operational Note** above.

### Docker Compose Deployments

1. Back up your customized docker-compose YAML file (optional)

   ```bash
   cd docker
   cp docker-compose.yaml docker-compose.yaml.$(date +%s).bak
   ```

2. Get the latest code from the main branch

   ```bash
   git checkout main
   git pull origin main
   ```

3. Stop the service. Please execute in the docker directory

   ```bash
   docker compose down
   ```

4. Back up data

   ```bash
   tar -cvf volumes-$(date +%s).tgz volumes
   ```

5. Upgrade services

   ```bash
   docker compose up -d
   ```

> [!NOTE]
> 
> If you encounter errors like below
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
> Please use the following command instead. For details, please read this https://github.com/langgenius/dify/issues/28706
>    ```bash
>    docker compose --profile postgresql up -d
>    ```

### Source Code Deployments

1. Stop the API server, Worker, and Web frontend Server.

2. Get the latest code from the release branch:

   ```bash
   git checkout 1.13.2
   ```

3.更新Python依赖项：

   ```bash
   cd api
   uv sync
   ```

4. Then, let's run the migration script:

   ```bash
   uv run flask db upgrade
   ```

5. Finally, run the API server, Worker, and Web frontend Server again.

---


## 发生了什么变化

* chore: bump version to 1.13.2 (#33681) by @QuantumGhost
* fix: fix max_retries is hardcode (#33619) by #32715 @fatelei 
* fix(api): Preserving the content transform logic in fetch_prompt_messages (#33666) by @QuantumGhost
* feat: remove weaviate client __del__ method (#33593) by @fatelei 
* fix(api): make CreatorUserRole accept both `end-user` and `end_user` (#33638) by @fatelei 

**Full Changelog**: https://github.com/langgenius/dify/compare/1.13.1...1.13.2

---

> 📦 仓库：[langgenius/dify](https://github.com/langgenius/dify) · 🏷️ 版本：`1.13.2` · 📅 发布：2026-03-18 · [查看英文原版 Release](https://github.com/langgenius/dify/releases/tag/1.13.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
