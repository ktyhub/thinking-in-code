---
title: "dify 1.11.4"
project: "dify"
repo: "langgenius/dify"
tag: "1.11.4"
version: "1.11.4"
published: "2026-01-15"
type: "patch"
lang: "en"
summary: "Dify now requires Node.js 24.13.0 to pick up the upstream fix for the AsyncLocalStorage/async_hooks DoS CVE that can crash apps with deeply nested input. All self-hosted deployments should upgrade Node.js."
---

# dify 1.11.4

## 🔒 Security

Dify now requires Node.js 24.13.0 to pick up the upstream fix for the AsyncLocalStorage/async_hooks DoS CVE that can crash apps with deeply nested input. **All self-hosted deployments should upgrade Node.js**. Thanks to @hyoban in #30945.

Related: #30935.

## 🛠️ Bug Fixes

- **Redirect After Login**: We’ve sorted out the login redirects to bring you back to your intended destination smoothly after logging in. Shoutout to @hyoban for this fix in #30985.
  
- **Missing ID and Message ID**: Missing the essentials? Not anymore! We’ve patched the missing `id` and `message_id` issue, thanks to @fatelei in #31008.

- **Destructuring Undefined Properties**: Ever run into that annoying error where you can't destructure `name` from `value` because it's undefined? That’s been crushed too, all thanks to @fatelei in #30991.

---

## Upgrade Guide

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
   git checkout 1.11.4
   ```

3. Update Python dependencies:

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

## What's Changed

- fix: redirect after login by @hyoban in https://github.com/langgenius/dify/pull/30985
- fix: fix missing id and message_id by @fatelei in https://github.com/langgenius/dify/pull/31008
- build: require node 24.13.0 by @hyoban in https://github.com/langgenius/dify/pull/30945
- chore: bump version to 1.11.4 by @laipz8200 in https://github.com/langgenius/dify/pull/30961
- fix: fix Cannot destructure property 'name' of 'value' as it is undef… by @hyoban in https://github.com/langgenius/dify/pull/30991

**Full Changelog**: https://github.com/langgenius/dify/compare/1.11.3...1.11.4

---

> **Source** [langgenius/dify](https://github.com/langgenius/dify) · `1.11.4` · 2026-01-15 · [upstream release](https://github.com/langgenius/dify/releases/tag/1.11.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
